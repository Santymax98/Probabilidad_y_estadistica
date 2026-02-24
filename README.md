# 📘 Cuadernos Interactivos de Probabilidad 🇨🇴🇧🇷

Este repositorio contiene cuadernos desarrollados en **Pluto.jl**, ideales para cursos de **Probabilidad y Estadística Aplicada**. Puedes usarlos directamente desde tu navegador o de forma local.

---

## 🚀 Ejecutar en línea (recomendado)

Haz clic en el siguiente botón para **abrir una sesión interactiva gratuita** en la nube vía **Binder**:

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/Santymax98/Probabilidad_y_estadistica/main?urlpath=pluto)

🔹 **Requiere esperar ~2-5 minutos** la primera vez  
🔹 Cuando cargue, abre `models_prob.jl` desde el explorador lateral de Pluto

---

## 🔵 Ejecutar desde JuliaHub (requiere cuenta)

1. Crea una cuenta gratuita en [https://juliahub.com](https://juliahub.com)
2. Sube o abre este repositorio
3. Ejecuta con:

```julia
using Pluto
Pluto.run()
````

---

## ⚙️ Ejecutar localmente en tu computador

1. Instala Julia desde [https://julialang.org](https://julialang.org)
2. Clona este repositorio:

```bash
git clone https://github.com/Santymax98/Probabilidad_y_estadistica.git
cd Probabilidad_y_estadistica
```

3. Abre Julia y ejecuta:

```julia
using Pkg
Pkg.activate(".")
Pkg.instantiate()
using Pluto
Pluto.run()
```

4. Abre el cuaderno `notebooks/models_prob.jl`

---

## 📁 Contenido

* `notebooks/models_prob.jl`: Cuaderno principal con modelos probabilísticos
* `Pluto_run.jl`: Script que lanza el servidor Pluto en Binder
* `binder/start`: Script que ejecuta Pluto automáticamente
* `Project.toml`: Dependencias necesarias para reproducibilidad

---

## 👨‍🏫 Autor

Santiago Jiménez
Profesor universitario de matemáticas
🌐 [https://santymax98.github.io](https://santymax98.github.io)