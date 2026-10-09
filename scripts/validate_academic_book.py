#!/usr/bin/env python3
"""Static structural checks for the self-contained academic book."""
from __future__ import annotations

import sys
from html.parser import HTMLParser
from pathlib import Path

PATH = Path(__file__).resolve().parents[1] / "libros" / "pensamiento-matematico-para-licenciados.html"
EXPECTED = [
    "cover", "preface", "architecture", "teacher-knowledge", "numeric",
    "spatial", "metric", "variational", "random", "materials",
    "design", "tasks", "references",
]
STRUCTURAL_TAGS = {"main", "aside", "nav", "section", "div", "figure", "table", "details"}


class BookValidator(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.stack: list[str] = []
        self.ids: set[str] = set()
        self.internal_links: list[str] = []
        self.main_sections: list[str] = []
        self.errors: list[str] = []
        self.main_count = 0
        self.aside_count = 0
        self.nav_count = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        identifier = attributes.get("id")
        if identifier:
            if identifier in self.ids:
                self.errors.append(f"Repeated ID: {identifier}")
            self.ids.add(identifier)
        if tag == "a" and (attributes.get("href") or "").startswith("#"):
            ref = attributes["href"][1:]
            if ref:
                self.internal_links.append(ref)
        if tag == "section" and self.stack and self.stack[-1] == "main":
            self.main_sections.append(identifier or "(missing ID)")
        if tag == "main":
            self.main_count += 1
        if tag == "aside":
            self.aside_count += 1
        if tag == "nav":
            self.nav_count += 1
        if tag in STRUCTURAL_TAGS:
            self.stack.append(tag)

    def handle_endtag(self, tag: str) -> None:
        if tag not in STRUCTURAL_TAGS:
            return
        if not self.stack or self.stack[-1] != tag:
            self.errors.append(f"Mismatched </{tag}>; current stack: {self.stack[-5:]}")
            return
        self.stack.pop()


def main() -> int:
    if not PATH.exists():
        print(f"Missing book: {PATH}", file=sys.stderr)
        return 1
    parser = BookValidator()
    parser.feed(PATH.read_text(encoding="utf-8"))
    parser.close()
    if parser.stack:
        parser.errors.append(f"Unclosed structural tags: {parser.stack}")
    if parser.main_count != 1 or parser.aside_count != 1 or parser.nav_count != 1:
        parser.errors.append("Expected a single <main>, <aside>, and <nav>.")
    if parser.main_sections != EXPECTED:
        parser.errors.append(
            f"Top-level chapters mismatch: found {parser.main_sections!r}, expected {EXPECTED!r}"
        )
    unknown = sorted(set(parser.internal_links) - parser.ids)
    if unknown:
        parser.errors.append(f"Broken internal anchors: {unknown}")
    if not {"book-search", "abacus", "abacus-result"}.issubset(parser.ids):
        parser.errors.append("Missing required book search or abacus IDs.")
    for error in parser.errors:
        print(f"ERROR: {error}", file=sys.stderr)
    if parser.errors:
        return 1
    print(
        f"Book HTML OK: {len(parser.main_sections)} chapters, "
        f"{len(parser.ids)} unique IDs, {len(parser.internal_links)} internal links."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
