"use strict";(self.webpackChunk_genially_view_client=self.webpackChunk_genially_view_client||[]).push([[5086],{59411(e,t,i){i.d(t,{M:()=>a});var n=i(45992),r=i(69717),o=i(59035);const a=e=>{let{pairedImages:t,coverImageSrc:i,fitImages:a,rowsDitributionFromConfig:s}=e;return(0,n.jsx)(o.B,{theme:r.iF.themes.newPrimary,pairedImages:t,coverImageSrc:i,fitImages:a,forwardSetFlipped:()=>{},rowsDitributionFromConfig:s})}},89690(e,t,i){i.d(t,{Z:()=>a});var n=i(45992),r=i(69717),o=i(11833);const a=e=>{let{title:t,frontImageSrc:i,coverImageSrc:a,fitImages:s,flipped:d,burned:l,onClick:u}=e;const c=Boolean(l),m=Boolean(d);return(0,n.jsxs)(o.Ox,{role:"button",$burned:c,$flipped:m,onClick:e=>{e.stopPropagation(),u&&u()},"aria-label":`Card showing ${m?"front":"back"} side with title: ${t}`,"aria-disabled":c,tabIndex:c?-1:0,children:[(0,n.jsx)("img",{style:{opacity:m?1:0,position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:s?"contain":"cover",transition:`opacity ${o.uD}ms steps(1)`},src:i,alt:"front"}),(0,n.jsx)("img",{style:{opacity:m?0:1,position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:s?"contain":"cover",transition:`opacity ${o.uD}ms steps(1)`},src:a,alt:"cover"}),t&&(0,n.jsx)(o.aW,{hidden:!m,children:(0,n.jsx)(r.m_,{text:t,placement:r.m_.Position.TOP,fallbackPlacements:[r.m_.Position.TOP],renderReferencePortalNode:document.querySelector("body"),children:(0,n.jsx)(o.hE,{"data-testid":"card-title",children:t})})})]})}},11833(e,t,i){i.d(t,{Ox:()=>d,aW:()=>a,hE:()=>s,rl:()=>r,uD:()=>o});var n=i(37577);const r=1e3,o=r/3.4,a=n.Ay.div({display:"flex",justifyContent:"center",alignItems:"center",flexShrink:0,position:"absolute",paddingLeft:"12px",paddingRight:"12px",bottom:0,left:0,userSelect:"none",minHeight:"25%",top:"75%",width:"100%",backgroundColor:"rgba(18,18,18,0.5)"}),s=n.Ay.p({color:"white",fontSize:12,textAlign:"center",fontStyle:"normal",fontWeight:400,lineHeight:"16px",overflow:"hidden",textOverflow:"ellipsis",wordWrap:"break-word",whiteSpace:"nowrap",pointerEvents:"none"}),d=n.Ay.div`
  @keyframes rotate-out {
    0% {
      transform: rotateY(0deg);
    }
    33% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }

  @keyframes rotate-in {
    0% {
      transform: rotateY(0deg);
    }
    33% {
      transform: rotateY(90deg);
    }
    100% {
      transform: rotateY(0deg);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    12% {
      transform: scale(1.05, 1.05);
    }
    40% {
      transform: scale(1.05, 1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  container-type: size;

  cursor: ${e=>{let{$flipped:t,$burned:i}=e;return t||i?"default":"pointer"}};

  animation-name: ${e=>{let{$flipped:t}=e;return t?"rotate-out":"rotate-in"}}
    ${e=>{let{$burned:t}=e;return t?",pulse":""}};
  animation-duration: ${r}ms;
  animation-delay: 0ms, ${r}ms;
  animation-iteration-count: 1;
  animation-timing-function: ease-out, ease-in-out;
  perspective: 1500px;

  border-radius: 9%;
  @supports (container-type: size) {
    border-radius: 6cqmin;
  }

  /* HACK: We need to set border as important because .genially-embed is reseting our borders in the View */
  border: 1px solid
    ${e=>{let{theme:t,$flipped:i}=e;return i?t.color.border.primary.disabled():t.color.border.primary.default()}} !important;
  outline: 1px white solid;

  filter: ${e=>{let{$flipped:t}=e;return t?"":"drop-shadow(0px 1px 4px rgba(0, 15, 51, 0.2))"}};

  &:hover {
    filter: ${e=>{let{$flipped:t}=e;return t?"":"drop-shadow(rgba(0, 15, 51, 0.3) 0px 1px 8px)"}};
    border-color: ${e=>{let{theme:t,$flipped:i}=e;return i?t.color.border.primary.disabled():t.color.border.primary.hover()}} !important;
  }

  ${a} {
    visibility: ${e=>{let{$flipped:t}=e;return t?"initial":"hidden"}};
    transition: visibility ${o}ms steps(1);
    z-index: 1;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    opacity: ${e=>{let{$burned:t}=e;return t?"0.4":"0"}};
    transition: opacity ${r}ms steps(1);
    transition-delay: ${r}ms;
    background-color: white;
    pointer-events: none;
  }
`},56292(e,t,i){i.d(t,{x:()=>u});var n=i(45992),r=i(40671),o=i(99049),a=i(76838),s=i(37577);const d=s.Ay.div`
  container-type: size;
  height: 100%;
  padding: 8px;
`,l=s.Ay.div`
  --contained-gap: 16px;

  display: grid;
  grid-template-columns: repeat(${e=>e.numColumns}, minmax(0, 1fr));
  grid-template-rows: repeat(${e=>e.numRows}, 1fr);
  grid-auto-flow: column;
  height: 100%;
  gap: var(--contained-gap);

  @supports (container-type: size) {
    --contained-gap: 4cqmin;
  }
`,u=(s.Ay.canvas({width:"100%",height:"100%",pointerEvents:"none",position:"absolute",top:0,left:0,zIndex:3}),e=>{let{items:t,renderItem:i,keyExtractor:s,getComputedStyles:u,forcedRows:c}=e;const m=(0,a.f)(t.length,c);return(0,n.jsx)(d,{children:(0,n.jsx)(l,{numColumns:m.numColumns,numRows:m.numRows,children:(0,n.jsx)(r.N,{children:t.map(((e,t)=>(0,n.jsx)(o.P.div,{layout:!0,style:u?u(e,t):void 0,initial:{opacity:0,scale:.7},animate:{opacity:1,scale:1},transition:{type:"spring",ease:"easeInOut",stiffness:30,damping:10},"data-testid":`grid-item-${s(e)}`,children:i(e)},s(e))))})})})})},59035(e,t,i){i.d(t,{B:()=>d});var n=i(45992),r=i(17588),o=i(37577),a=i(89690),s=i(56292);const d=e=>{let{theme:t,pairedImages:i,fitImages:d,forwardSetFlipped:l,coverImageSrc:u,rowsDitributionFromConfig:c}=e;const[m,p]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{l(p)}),[l]),(0,n.jsx)(o.NP,{theme:t,children:(0,n.jsx)(s.x,{items:i,forcedRows:c,renderItem:e=>(0,n.jsx)(a.Z,{title:e.title,frontImageSrc:e.src,coverImageSrc:u,fitImages:d,flipped:m}),keyExtractor:e=>e.id,getComputedStyles:()=>({pointerEvents:"none"})})})}},30555(e,t,i){i.d(t,{B:()=>o,u:()=>s});var n=i(54072);const r=e=>null!==e,o=e=>{if(e&&"action"in e){const{action:t}=e;return t&&"source"in t&&t.source?t.source:""}if(e&&"data"in e){const{data:t}=e;return t&&"source"in t&&t.source?t.source:""}return""},a=(e,t)=>{var i;const n=null===(i=e.image)||void 0===i?void 0:i.source,r=o(e.audio);return n?{id:t,src:n,title:e.title,altText:e.image.altText||"",audioSource:r}:null},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return e.flatMap((e=>{const i=(0,n.Ak)(),r=a(e,`${i}-original`),s=t?a(e,`${i}-pair`):((e,t)=>{var i,n;const r=null===(i=e.imagePair)||void 0===i?void 0:i.source;if(!r)return null;const a=o(e.audioPair);return{id:t,src:r,title:e.titlePair||e.title,altText:(null===(n=e.imagePair)||void 0===n?void 0:n.altText)||"",audioSource:a}})(e,`${i}-pair`);return[r,s]})).filter(r)}},76838(e,t,i){i.d(t,{f:()=>r,v:()=>n});const n=e=>{if("auto"===e)return;const t=Number(e);if(!Number.isNaN(t))return t;console.warn("Cannot parse row distribution. Setting to auto",e)},r=(e,t)=>t?((e,t)=>e<t?{numColumns:1,numRows:e}:{numColumns:Math.ceil(e/t),numRows:t})(e,t):(e=>{if(e<4)return{numColumns:1,numRows:e};let t=4;for(;e%t!==0&&t<7;)t+=1;return{numColumns:t,numRows:Math.ceil(e/t)}})(e)},22705(e,t,i){i.d(t,{geniallyFindThePairViewScript:()=>I});var n=i(45992),r=i(10285),o=i(84054),a=i(60708),s=i(41381),d=i(59411),l=i(17588),u=i(37577),c=i(89690),m=i(56292),p=i(50414);var f;!function(e){e.FACEDOWN="faceDown",e.FACEUP="faceUp",e.BURNED="burned"}(f||(f={}));const g=e=>e.replace("-original","-pair");var h=i(11833);const b=(e,t)=>{const i=e%2===1,n=t%2===1;return i&&!n?1:!i&&n?-1:e-t},v=e=>{let{theme:t,images:i,coverImageSrc:r,fitImages:o,rowsDitributionFromConfig:a,onSuccess:s,onFailure:d,onGameWon:v,onFaceUp:y}=e;const{shuffledCards:w,isFaceUp:x,isBurned:S,onPick:I}=((e,t,i,n,r)=>{const o=(0,l.useMemo)((()=>{const t=e.map((e=>{return Object.assign(Object.assign({},e),{id:e.id,pairId:e.id.includes("-pair")?(t=e.id,t.replace("-pair","-original")):g(e.id)});var t}));return(0,p.U)(t)}),[e]),[a,s]=(0,l.useState)((()=>{const e=new Map;return o.forEach((t=>{e.set(t.id,{id:t.id,status:f.FACEDOWN,pairId:t.pairId})})),e})),d=(0,l.useCallback)((e=>{var t;return(null===(t=a.get(e))||void 0===t?void 0:t.status)===f.FACEUP}),[a]),u=(0,l.useCallback)((e=>{var t;return(null===(t=a.get(e))||void 0===t?void 0:t.status)===f.BURNED}),[a]);return{shuffledCards:o,isFaceUp:d,isBurned:u,onPick:e=>{const o=a.get(e);if(o.status!==f.FACEDOWN)return;const d=[...a.values()].filter((e=>e.status===f.FACEUP));if(0===d.length)a.set(o.id,Object.assign(Object.assign({},o),{status:f.FACEUP}));else if(1===d.length){const e=d[0];e.pairId===o.id?(a.set(e.id,Object.assign(Object.assign({},e),{status:f.BURNED})),a.set(o.id,Object.assign(Object.assign({},o),{status:f.BURNED})),t()):(a.set(o.id,Object.assign(Object.assign({},o),{status:f.FACEUP})),i())}else 2===d.length&&(d.forEach((e=>{a.set(e.id,Object.assign(Object.assign({},e),{status:f.FACEDOWN}))})),a.set(o.id,Object.assign(Object.assign({},o),{status:f.FACEUP})));r(o.id),s(new Map(a)),[...a.values()].every((e=>e.status===f.BURNED))&&n()}}})(i,(()=>{setTimeout((()=>{s()}),h.rl)}),(()=>{setTimeout((()=>{d()}),h.rl)}),(()=>{setTimeout((()=>{v()}),h.rl)}),(e=>{y(e)})),[E,C]=(0,l.useState)((()=>Array.from({length:w.length},((e,t)=>t))));return(0,l.useEffect)((()=>{C((e=>[...e].sort(b).reverse()))}),[]),(0,n.jsx)(u.NP,{theme:t,children:(0,n.jsx)(m.x,{items:w,forcedRows:a,renderItem:e=>(0,n.jsx)(c.Z,{title:e.title,frontImageSrc:e.src,coverImageSrc:r,fitImages:o,flipped:x(e.id)||S(e.id),burned:S(e.id),onClick:()=>I(e.id)}),keyExtractor:e=>e.id,getComputedStyles:(e,t)=>({order:E[t]})})})};var y=i(30555),w=i(76838);const x="https://audios.genial.ly/59e059d30b9c21060cb4c2ec/de8b3efe-c4df-48ff-8bbb-2b3e940663d3.wav",S="https://audios.genial.ly/59e059d30b9c21060cb4c2ec/23fe908b-44e2-4972-981f-d857c429b126.wav",I=(e,t)=>{e.slide.audioRequirement=o.w.ShowMute;const i=e.config.itemList,l=(0,y.u)(i,e.config.identicalImages);(0,s.p)({getTargetNodeItem:()=>e.item,initialState:{hasSlideEntered:!1},renderApp:i=>{let{setState:o}=i;var s;const{coverImage:d,fitImages:u,numRows:c,onEndAction:m}=e.config,p=e.item;t.preloadAudio(x),t.preloadAudio(S),l.forEach((e=>{t.preloadAudio(e.audioSource)}));const f=()=>{t.playAudio({source:x})},g=()=>{t.playAudio({source:S})},h=()=>{null===m||void 0===m||m.run()};return null===(s=null===p||void 0===p?void 0:p.parentSlide)||void 0===s||s.on(a.m.Entered,(()=>{o({hasSlideEntered:!0})})),e=>{let{hasSlideEntered:i=!1}=e;if(!i)return(0,n.jsx)(n.Fragment,{});const o=[];return(0,n.jsx)(v,{theme:t.theme,images:l,coverImageSrc:String(d.source),fitImages:u,rowsDitributionFromConfig:(0,w.v)(c),onSuccess:f,onFailure:g,onGameWon:h,onFaceUp:e=>{const i=l.find((t=>t.id===e));if(!i||!i.audioSource)return;o.forEach((e=>{t.playAudio(Object.assign(Object.assign({},e),{playMode:r.F.Stop}))})),o.length=0;const n={source:i.audioSource,playMode:r.F.PlayRestart},a=t.playAudio(n);o.push(Object.assign(Object.assign({},n),{refId:a.refId}))}})}},renderThumbnailApp:()=>{const{coverImage:t,fitImages:i,numRows:r}=e.config;return(0,n.jsx)(d.M,{pairedImages:l,coverImageSrc:String(t.source),fitImages:i,rowsDitributionFromConfig:(0,w.v)(r)})}})(e,t)}},41381(e,t,i){i.d(t,{p:()=>a});var n=i(70377),r=i(66264),o=i(60708);function a(e){let{getTargetNodeItem:t,renderApp:i,renderThumbnailApp:a,initialState:s}=e,d=!1;const l=[],u=e=>{l.push(e)};return e=>{const c=t(e.config),m=null===c||void 0===c?void 0:c.parentSlide;function p(){if(!c)return;let e=null;if("idOfFreeNode"in c)e=document.getElementById(c.idOfFreeNode);else{const t=document.createElement("div");t.innerHTML=c.source;let i=t.getElementsByClassName("genially-widget-app");i.length||(i=t.getElementsByClassName("genially-widget-gallery"));const{id:n}=i[0];if(!n)return;e=document.getElementById(n)}if(e){let t;const r=i=>{d&&t?n.render(t(i),e):console.warn('"rerender" was called when the widget was already unmounted. This is a no-op. Did you forget to dispose of an event handler with "onUnmount"?')};t=i({setState:r,onUnmount:u}),d=!0,r(s),l.push((()=>{n.unmountComponentAtNode(e)}))}}function f(){d=!1,l.forEach((e=>{e()})),l.length=0}function g(){if(!c||!("idOfThumbnailFreeNode"in c))return[];const e=document.getElementsByClassName(c.idOfThumbnailFreeNode);return Array.from(e).filter((e=>e instanceof HTMLElement))}const h=c&&"isTransversal"in c&&c.isTransversal,b=()=>{null===c||void 0===c||c.on(r.q.Mount,(()=>{p()})),null===c||void 0===c||c.on(r.q.Unmount,(()=>{f()}))};h?b():(null===m||void 0===m||m.on(o.m.Entering,(()=>{d||(p(),d||b())})),null===m||void 0===m||m.on(o.m.Exited,(()=>{d&&f()}))),null===m||void 0===m||m.on(o.m.ThumbnailMount,(()=>{!function(){if(!a||!c||!("idOfThumbnailFreeNode"in c))return;g().forEach((e=>{n.unmountComponentAtNode(e)}))}(),function(){if(!a||!c||!("idOfThumbnailFreeNode"in c))return;g().forEach((e=>{const{renderingSlideId:t}=e.dataset;n.render(a({renderingSlideId:t}),e)}))}()}))}}}}]);
//# sourceMappingURL=https://s3-static-genially.genially.com/view/static/js/5086.aa377189.chunk.js.map