import{n as R,r as f,j as e,u as F,i as B,a as W,b as _,c as O,d as G,e as K,o as q}from"../chunks/chunk-xZyjFQfo.js";import{u as H}from"../chunks/chunk-C01ADzZH.js";import{n as Q}from"../chunks/chunk-CFIhaYxf.js";import"../chunks/chunk-Cz4AdMnc.js";import{l as Y}from"../chunks/chunk-BnwOTj5j.js";import{R as J}from"../chunks/chunk-BgywuenS.js";import{G as X}from"../chunks/chunk-CzDZdGAK.js";/* empty css                      *//* empty css                      */function Z({value:o,onChange:n,placeholder:u,onSubmit:v,suggestions:i=[],className:y=""}){const d=R("topSiteNew"),[w,c]=f.useState(!1),[x,k]=f.useState(-1),m=f.useRef(null),N=f.useRef(null);f.useEffect(()=>{const t=a=>{N.current&&!N.current.contains(a.target)&&!m.current?.contains(a.target)&&c(!1)};return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[]);const s=t=>{if(!w||i.length===0){t.key==="Enter"&&v&&v();return}switch(t.key){case"ArrowDown":t.preventDefault(),k(a=>a<i.length-1?a+1:a);break;case"ArrowUp":t.preventDefault(),k(a=>a>0?a-1:-1);break;case"Enter":t.preventDefault(),x>=0&&x<i.length?(n(i[x]),c(!1),k(-1)):v&&v();break;case"Escape":c(!1),k(-1);break}},h=t=>{const a=t.target.value;n(a),c(a.length>0&&i.length>0),k(-1)},S=()=>{n(""),c(!1),k(-1),m.current?.focus()},p=t=>{n(t),c(!1),k(-1)};return e.jsxs("div",{className:`relative ${y}`,children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400",children:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),e.jsx("input",{ref:m,type:"text",value:o,onChange:h,onKeyDown:s,onFocus:()=>c(o.length>0&&i.length>0),placeholder:u||d("searchPlaceholder"),className:`
            w-full pl-10 pr-10 py-2.5
            border border-gray-300 dark:border-gray-600
            rounded-lg
            bg-white dark:bg-gray-800
            text-gray-900 dark:text-gray-100
            placeholder-gray-400 dark:placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
            transition-colors
          `,"aria-label":u||d("searchPlaceholder"),"aria-autocomplete":"list","aria-controls":"search-suggestions","aria-expanded":w}),o&&e.jsx("button",{type:"button",onClick:S,className:`
              absolute right-3 top-1/2 -translate-y-1/2
              text-gray-400 hover:text-gray-600 dark:hover:text-gray-300
              transition-colors
            `,"aria-label":"Clear search",children:e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),w&&i.length>0&&e.jsx("div",{ref:N,id:"search-suggestions",role:"listbox",className:`
            absolute z-50 w-full mt-1
            bg-white dark:bg-gray-800
            border border-gray-200 dark:border-gray-700
            rounded-lg shadow-lg
            max-h-64 overflow-y-auto
          `,children:i.slice(0,10).map((t,a)=>e.jsx("button",{role:"option","aria-selected":a===x,onClick:()=>p(t),className:`
                w-full px-4 py-2.5 text-left
                hover:bg-gray-50 dark:hover:bg-gray-700
                transition-colors
                ${a===x?"bg-gray-100 dark:bg-gray-700":"bg-white dark:bg-gray-800"}
                ${a===0?"rounded-t-lg":""}
                ${a===i.length-1?"rounded-b-lg":""}
              `,children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("svg",{className:"w-4 h-4 text-gray-400",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})}),e.jsx("span",{className:"text-gray-900 dark:text-gray-100",children:t})]})},a))})]})}function I({filters:o,onClearAll:n,className:u=""}){const v=R("topSiteNew");return o.length===0?null:e.jsxs("div",{className:`flex flex-wrap items-center gap-2 ${u}`,children:[o.map(i=>e.jsxs("div",{className:`
            inline-flex items-center gap-2 px-3 py-1.5
            bg-primary/10 dark:bg-primary/20
            border border-primary/30 dark:border-primary/40
            rounded-full
            text-sm text-gray-900 dark:text-gray-100
          `,children:[e.jsxs("span",{className:"font-medium",children:[i.label,":"]}),e.jsx("span",{children:i.value}),e.jsx("button",{type:"button",onClick:i.onRemove,className:`
              ml-1 text-gray-600 dark:text-gray-400
              hover:text-gray-900 dark:hover:text-gray-100
              transition-colors
            `,"aria-label":`Remove ${i.label} filter`,children:e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]},i.id)),n&&o.length>1&&e.jsx("button",{type:"button",onClick:n,className:`
            px-3 py-1.5
            text-sm text-gray-600 dark:text-gray-400
            hover:text-gray-900 dark:hover:text-gray-100
            underline
            transition-colors
          `,children:v("clearAllFilters")})]})}function ee({sections:o,selectedFilters:n,onChange:u,onApply:v,onClear:i,className:y=""}){const d=R("topSiteNew"),[w,c]=f.useState(o.reduce((s,h)=>({...s,[h.id]:h.expanded!==!1}),{})),x=s=>{c(h=>({...h,[s]:!h[s]}))},k=(s,h,S)=>{const p=n[s]||[],t=S?[...p,h]:p.filter(a=>a!==h);u(s,t)},m=(s,h)=>{u(s,[h])},N=Object.values(n).some(s=>s.length>0);return e.jsxs("div",{className:`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg ${y}`,children:[e.jsx("div",{className:"px-4 py-3 border-b border-gray-200 dark:border-gray-700",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-gray-100",children:d("filters")}),N&&e.jsx("button",{type:"button",onClick:i,className:"text-sm text-primary hover:underline",children:d("clearAll")})]})}),e.jsx("div",{className:"divide-y divide-gray-200 dark:divide-gray-700",children:o.map(s=>{const h=w[s.id],S=n[s.id]||[];return e.jsxs("div",{className:"px-4 py-3",children:[e.jsxs("button",{type:"button",onClick:()=>x(s.id),className:`
                  w-full flex items-center justify-between
                  text-left font-medium text-gray-900 dark:text-gray-100
                  hover:text-primary dark:hover:text-primary
                  transition-colors
                `,"aria-expanded":h,"aria-controls":`filter-section-${s.id}`,children:[e.jsx("span",{children:s.label}),e.jsx("svg",{className:`w-5 h-5 transition-transform ${h?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),h&&e.jsx("div",{id:`filter-section-${s.id}`,className:"mt-3 space-y-2",role:"group","aria-labelledby":`filter-label-${s.id}`,children:s.options.map(p=>{const t=S.includes(p.value),a=`filter-${s.id}-${p.value}`;return e.jsxs("label",{htmlFor:a,className:`
                          flex items-center gap-2 cursor-pointer
                          text-gray-700 dark:text-gray-300
                          hover:text-gray-900 dark:hover:text-gray-100
                          transition-colors
                        `,children:[e.jsx("input",{id:a,type:s.type,name:s.id,value:p.value,checked:t,onChange:T=>{s.type==="checkbox"?k(s.id,p.value,T.target.checked):m(s.id,p.value)},className:`
                            w-4 h-4
                            text-primary
                            border-gray-300 dark:border-gray-600
                            rounded
                            focus:ring-2 focus:ring-primary focus:ring-offset-0
                          `}),e.jsx("span",{className:"flex-1 text-sm",children:p.label}),p.count!==void 0&&e.jsxs("span",{className:"text-xs text-gray-500 dark:text-gray-400",children:["(",p.count,")"]})]},p.value)})})]},s.id)})}),e.jsx("div",{className:"px-4 py-3 border-t border-gray-200 dark:border-gray-700",children:e.jsx("button",{type:"button",onClick:v,className:`
            w-full px-4 py-2
            bg-primary text-primary-foreground
            rounded-lg font-medium
            hover:bg-primary/90
            transition-colors
          `,children:d("applyFilters")})})]})}function te({isOpen:o,onClose:n,sections:u,selectedFilters:v,onChange:i,onApply:y,onClear:d,activeFilterCount:w}){const c=R("topSiteNew"),[x,k]=f.useState(u.reduce((t,a)=>({...t,[a.id]:a.expanded!==!1}),{})),m=f.useRef(null);f.useEffect(()=>(o?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[o]),f.useEffect(()=>{const t=a=>{a.key==="Escape"&&o&&n()};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[o,n]);const N=t=>{k(a=>({...a,[t]:!a[t]}))},s=(t,a,T)=>{const b=v[t]||[],L=T?[...b,a]:b.filter(P=>P!==a);i(t,L)},h=(t,a)=>{i(t,[a])},S=()=>{y(),n()},p=()=>{d()};return o?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 bg-black/50 z-40 transition-opacity",onClick:n,"aria-hidden":"true"}),e.jsxs("div",{ref:m,role:"dialog","aria-modal":"true","aria-labelledby":"filter-sheet-title",className:`
          fixed inset-x-0 bottom-0 z-50
          bg-white dark:bg-gray-800
          rounded-t-2xl
          max-h-[85vh]
          flex flex-col
          animate-slide-up
        `,children:[e.jsx("div",{className:"flex justify-center pt-3 pb-2",children:e.jsx("div",{className:"w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"})}),e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700",children:[e.jsxs("h2",{id:"filter-sheet-title",className:"text-lg font-semibold text-gray-900 dark:text-gray-100",children:[c("filters"),w>0&&e.jsxs("span",{className:"ml-2 text-sm font-normal text-gray-500 dark:text-gray-400",children:["(",w,")"]})]}),e.jsx("button",{type:"button",onClick:n,className:`
              p-2 -mr-2
              text-gray-500 dark:text-gray-400
              hover:text-gray-700 dark:hover:text-gray-200
              transition-colors
            `,"aria-label":"Close filters",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]}),e.jsx("div",{className:"flex-1 overflow-y-auto px-4 py-4",children:e.jsx("div",{className:"space-y-6",children:u.map(t=>{const a=x[t.id],T=v[t.id]||[];return e.jsxs("div",{children:[e.jsxs("button",{type:"button",onClick:()=>N(t.id),className:`
                      w-full flex items-center justify-between
                      text-left font-medium text-gray-900 dark:text-gray-100
                      pb-3
                    `,"aria-expanded":a,"aria-controls":`mobile-filter-section-${t.id}`,children:[e.jsx("span",{children:t.label}),e.jsx("svg",{className:`w-5 h-5 transition-transform ${a?"rotate-180":""}`,fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),a&&e.jsx("div",{id:`mobile-filter-section-${t.id}`,className:"space-y-3 pb-4",role:"group",children:t.options.map(b=>{const L=T.includes(b.value),P=`mobile-filter-${t.id}-${b.value}`;return e.jsxs("label",{htmlFor:P,className:`
                              flex items-center gap-3 cursor-pointer
                              min-h-11 py-2
                              text-gray-700 dark:text-gray-300
                            `,children:[e.jsx("input",{id:P,type:t.type,name:t.id,value:b.value,checked:L,onChange:E=>{t.type==="checkbox"?s(t.id,b.value,E.target.checked):h(t.id,b.value)},className:`
                                w-5 h-5
                                text-primary
                                border-gray-300 dark:border-gray-600
                                rounded
                                focus:ring-2 focus:ring-primary
                              `}),e.jsx("span",{className:"flex-1",children:b.label}),b.count!==void 0&&e.jsxs("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:["(",b.count,")"]})]},b.value)})})]},t.id)})})}),e.jsx("div",{className:"border-t border-gray-200 dark:border-gray-700 px-4 py-4",children:e.jsxs("div",{className:"flex gap-3",children:[e.jsx("button",{type:"button",onClick:p,className:`
                flex-1 px-4 py-3
                border border-gray-300 dark:border-gray-600
                rounded-lg font-medium
                text-gray-700 dark:text-gray-300
                hover:bg-gray-50 dark:hover:bg-gray-700
                transition-colors
                min-h-11
              `,children:c("clearAll")}),e.jsx("button",{type:"button",onClick:S,className:`
                flex-1 px-4 py-3
                bg-primary text-primary-foreground
                rounded-lg font-medium
                hover:bg-primary/90
                transition-colors
                min-h-11
                `,children:c("applyFilters")})]})})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
          @keyframes slide-up {
            from {
              transform: translateY(100%);
            }
            to {
              transform: translateY(0);
            }
          }

          .animate-slide-up {
            animation: slide-up 0.3s ease-out;
          }
        `}})]}):null}function $(o,n){const u=n[o];return!!u&&u.length>0}function M(o,n){return o.guides?.some(u=>$(u.id,n))||!1}function D(o,n){return o.subCategories?.some(u=>M(u,n))||!1}function A(o,n,u){const v=u.toUpperCase(),i=o.find(d=>d.locale===v);if(i&&i[n])return String(i[n]);const y=o.find(d=>d.locale==="EN");return y&&y[n]?String(y[n]):o.length>0&&o[0][n]?String(o[0][n]):""}function re(){const o=H(),n=R("topSiteNew"),u=R("common"),i=F().locale||"en",{categoryMap:y,topSitesByGuide:d,initialRegion:w,locale:c}=o,[x,k]=f.useState(""),[m,N]=f.useState({}),[s,h]=f.useState(!1),S=r=>{const l=r==="global"?"":`/${r}`,g=Y(`/top-site-new${l}`,i);Q(g)},p=f.useMemo(()=>[{id:"mainCategory",label:u("mainCategory"),type:"checkbox",expanded:!1,options:y.filter(r=>D(r,d)).map(r=>({value:r.id,label:A(r.translations,"name",c),count:r.subCategories?.reduce((l,g)=>l+(g.guides?.filter(j=>$(j.id,d)).length||0),0)}))},{id:"subCategory",label:u("subCategory"),type:"checkbox",expanded:!1,options:y.flatMap(r=>r.subCategories||[]).filter(r=>M(r,d)).map(r=>({value:r.id,label:A(r.translations,"name",c),count:r.guides?.filter(l=>$(l.id,d)).length||0}))}],[y,d,c,u]),t=f.useMemo(()=>{let r=y;if(m.mainCategory&&m.mainCategory.length>0&&(r=r.filter(l=>m.mainCategory.includes(l.id))),m.subCategory&&m.subCategory.length>0&&(r=r.map(l=>({...l,subCategories:l.subCategories?.filter(g=>m.subCategory.includes(g.id))}))),x.trim()){const l=x.toLowerCase();r=r.map(g=>({...g,subCategories:g.subCategories?.map(j=>({...j,guides:j.guides?.filter(C=>A(C.translations,"name",c).toLowerCase().includes(l))})).filter(j=>(j.guides?.length||0)>0)})).filter(g=>(g.subCategories?.length||0)>0)}return r},[y,m,x,c]),a=f.useMemo(()=>{if(!x.trim())return[];const r=x.toLowerCase(),l=[];return y.forEach(g=>{g.subCategories?.forEach(j=>{j.guides?.forEach(C=>{const z=A(C.translations,"name",c);z.toLowerCase().includes(r)&&!l.includes(z)&&l.push(z)})})}),l.slice(0,10)},[x,y,c]),T=f.useMemo(()=>{const r=[];return Object.entries(m).forEach(([l,g])=>{const j=p.find(C=>C.id===l);j&&g.forEach(C=>{const z=j.options.find(U=>U.value===C);z&&r.push({id:`${l}-${C}`,label:j.label,value:z.label,onRemove:()=>{N(U=>({...U,[l]:U[l].filter(V=>V!==C)}))}})})}),r},[m,p]),b=(r,l)=>{N(g=>({...g,[r]:l}))},L=()=>{N({}),k("")},P=()=>{},E=Object.entries(m).reduce((r,[,l])=>r+l.length,0);return e.jsxs("div",{className:"container mx-auto px-4 py-8",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h1",{className:"text-3xl md:text-4xl font-bold mb-2",children:n("title")}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400",children:n("subtitle")})]}),e.jsx("div",{className:"mb-6",children:e.jsx(J,{value:w,onChange:S})}),e.jsxs("div",{className:"mb-6 flex items-center gap-3",children:[e.jsx(Z,{value:x,onChange:k,suggestions:a,className:"flex-1 max-w-2xl"}),e.jsxs("button",{type:"button",onClick:()=>h(!0),className:`
            lg:hidden
            flex items-center justify-center
            w-11 h-11
            border border-gray-300 dark:border-gray-600
            rounded-lg
            bg-white dark:bg-gray-800
            text-gray-700 dark:text-gray-300
            hover:bg-gray-50 dark:hover:bg-gray-700
            transition-colors
            relative
          `,"aria-label":n("filters"),children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})}),E>0&&e.jsx("span",{className:`
              absolute -top-1 -right-1
              px-1.5 py-0.5 min-w-5 h-5
              text-xs font-semibold
              bg-primary text-primary-foreground
              rounded-full
              flex items-center justify-center
            `,children:E})]}),e.jsxs("button",{type:"button",onClick:()=>h(!0),className:`
            hidden lg:flex
            items-center gap-2 px-4 py-2.5
            border border-gray-300 dark:border-gray-600
            rounded-lg
            bg-white dark:bg-gray-800
            text-gray-700 dark:text-gray-300
            hover:bg-gray-50 dark:hover:bg-gray-700
            transition-colors
            whitespace-nowrap
          `,children:[e.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})}),e.jsx("span",{children:n("filters")}),E>0&&e.jsx("span",{className:`
              px-2 py-0.5 text-xs font-semibold
              bg-primary text-primary-foreground
              rounded-full
            `,children:E})]})]}),(T.length>0||x)&&e.jsxs("div",{className:"mb-6",children:[e.jsx(I,{filters:T,onClearAll:L}),x&&e.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400 mt-2",children:n("showingResults",{count:t.filter(r=>D(r,d)).length})})]}),e.jsxs("div",{className:"flex gap-8",children:[e.jsx("aside",{className:"hidden lg:block w-64 shrink-0",children:e.jsx("div",{className:"sticky top-4",children:e.jsx(ee,{sections:p,selectedFilters:m,onChange:b,onApply:P,onClear:L})})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"space-y-12",children:t.filter(r=>D(r,d)).map(r=>e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-bold mb-6 pb-2 border-b-2 border-primary",children:A(r.translations,"name",c)}),e.jsx("div",{className:"space-y-8",children:r.subCategories?.filter(l=>M(l,d)).map(l=>e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200",children:A(l.translations,"name",c)}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6",children:l.guides?.filter(g=>$(g.id,d)).map(g=>e.jsx(X,{guide:g,topSites:d[g.id]||[],locale:c,region:w,basePath:"/top-site-new",translationKey:"topSiteNew"},g.id))})]},l.id))})]},r.id))}),t.filter(r=>D(r,d)).length===0&&e.jsx("div",{className:"text-center py-12",children:e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-400",children:x||E>0?n("noResults"):n("noLinks")})})]})]}),e.jsx(te,{isOpen:s,onClose:()=>h(!1),sections:p,selectedFilters:m,onChange:b,onApply:P,onClear:L,activeFilterCount:E})]})}const ae=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"})),ge={hasServerOnlyHook:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/onRenderClient",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:q}},onPageTransitionStart:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionStart.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:K}},onPageTransitionEnd:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+onPageTransitionEnd.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:G}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/top-site-new/@region/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:ae}},guard:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+guard.ts",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:O}},hydrationCanBeAborted:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/config",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:{type:"js-serialized",value:!0}},Layout:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/pages/+Layout.tsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:_}]},title:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/+config.ts",fileExportPathToShowToUser:["default","title"]},valueSerialized:{type:"js-serialized",value:"Oxyness - Spiritual & Esoteric Resources Directory"}},Wrapper:{type:"cumulative",definedAtData:[{filePathToShowToUser:"/pages/+Wrapper.tsx",fileExportPathToShowToUser:[]}],valueSerialized:[{type:"plus-file",exportValues:W}]},Loading:{type:"standard",definedAtData:{filePathToShowToUser:"vike-react/__internal/integration/Loading",fileExportPathToShowToUser:[]},valueSerialized:{type:"pointer-import",value:B}}};export{ge as configValuesSerialized};
