import{n as v,r as x,j as e,g as k,h as N}from"./chunk-DoRTNnwL.js";import{X as w}from"./chunk-CO9o5nrO.js";import"./chunk-DEf7r3lp.js";/* empty css              *//* empty css              */function A({onSave:t,onAcceptAll:d,onRejectAll:a,initialPreferences:o,showButtons:c=!0}){const n=v("cookie"),[r,u]=x.useState({necessary:!0,functional:o?.functional??!1,analytics:o?.analytics??!1,marketing:o?.marketing??!1,timestamp:new Date().toISOString(),version:"1.0"}),i=l=>{l==="necessary"||l==="timestamp"||l==="version"||u(s=>({...s,[l]:!s[l]}))},m=()=>{t(r)},p=()=>{d()},b=()=>{a()};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(g,{name:n("categories.necessary.name"),description:n("categories.necessary.description"),enabled:!0,alwaysActive:!0,onToggle:()=>{},alwaysActiveText:n("settings.alwaysActive")}),e.jsx(g,{name:n("categories.functional.name"),description:n("categories.functional.description"),enabled:r.functional,onToggle:()=>i("functional"),enabledText:n("settings.enabled"),disabledText:n("settings.disabled")}),e.jsx(g,{name:n("categories.analytics.name"),description:n("categories.analytics.description"),enabled:r.analytics,onToggle:()=>i("analytics"),enabledText:n("settings.enabled"),disabledText:n("settings.disabled")}),e.jsx(g,{name:n("categories.marketing.name"),description:n("categories.marketing.description"),enabled:r.marketing,onToggle:()=>i("marketing"),enabledText:n("settings.enabled"),disabledText:n("settings.disabled")})]}),c&&e.jsxs("div",{className:"space-y-2 pt-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:p,className:`
                flex-1
                px-3 py-2 rounded-md
                bg-primary text-primary-foreground
                text-sm font-medium
                hover:bg-primary/90
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              `,children:n("banner.acceptAll")}),e.jsx("button",{onClick:b,className:`
                flex-1
                px-3 py-2 rounded-md
                bg-primary text-primary-foreground
                text-sm font-medium
                hover:bg-primary/90
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              `,children:n("banner.rejectAll")})]}),e.jsx("button",{onClick:m,className:`
              w-full
              px-4 py-3 rounded-md
              bg-primary text-primary-foreground
              font-medium
              hover:bg-primary/90
              transition-colors
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            `,children:n("settings.savePreferences")})]})]})}function g({name:t,description:d,enabled:a,alwaysActive:o=!1,onToggle:c,alwaysActiveText:n="Always Active",enabledText:r="Enabled",disabledText:u="Disabled"}){return e.jsx("div",{className:`
        p-4 rounded-lg border
        ${o?"bg-muted border-muted":"border-border"}
      `,children:e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-semibold mb-1",children:t}),e.jsx("p",{className:"text-sm text-muted-foreground",children:d})]}),e.jsx("div",{className:"flex-shrink-0",children:o?e.jsx("span",{className:"text-sm text-muted-foreground font-medium",children:n}):e.jsxs("button",{onClick:c,role:"switch","aria-checked":a,"aria-label":`${a?"Disable":"Enable"} ${t}`,className:`
                relative inline-flex h-6 w-11 items-center rounded-full
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                ${a?"bg-primary":"bg-muted-foreground/30"}
              `,children:[e.jsx("span",{className:`
                  inline-block h-4 w-4 transform rounded-full bg-white
                  transition-transform
                  ${a?"translate-x-6":"translate-x-1"}
                `}),e.jsx("span",{className:"sr-only",children:a?r:u})]})})]})})}function $({onClose:t,onSave:d,onAcceptAll:a,onRejectAll:o,initialPreferences:c}){const n=v("cookie"),r=x.useRef(null),i=!(c===null),m=x.useCallback(()=>{i&&t()},[i,t]);k(i?m:()=>{}),N(!0),x.useEffect(()=>{if(!r.current)return;const s=r.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),h=s[0],y=s[s.length-1],j=f=>{f.key==="Tab"&&(f.shiftKey?document.activeElement===h&&(y.focus(),f.preventDefault()):document.activeElement===y&&(h.focus(),f.preventDefault()))};return window.addEventListener("keydown",j),h?.focus(),()=>{window.removeEventListener("keydown",j)}},[]);const p=s=>{d(s),t()},b=()=>{a(),t()},l=()=>{o(),t()};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"fixed inset-0 bg-black/50 z-[60] grid place-items-center animate-fade-in",onClick:s=>{i&&s.target===s.currentTarget&&m()},children:e.jsxs("div",{ref:r,role:"dialog","aria-modal":"true","aria-labelledby":"cookie-settings-title","aria-describedby":"cookie-settings-description",className:`
            w-[calc(100%-2rem)] max-w-2xl max-h-[90vh]
            bg-background border border-border rounded-lg shadow-xl
            overflow-y-auto
            animate-modal-scale
          `,onClick:s=>s.stopPropagation(),children:[e.jsxs("div",{className:"sticky top-0 bg-background border-b border-border p-4 sm:p-6",children:[i&&e.jsx("button",{onClick:m,"aria-label":n("banner.close"),className:`
                absolute top-4 right-4
                p-1 rounded-md
                text-muted-foreground hover:text-foreground
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              `,children:e.jsx(w,{className:"w-5 h-5"})}),e.jsx("h2",{id:"cookie-settings-title",className:`text-xl sm:text-2xl font-semibold ${i?"pr-8":""}`,children:n("settings.title")}),e.jsx("p",{id:"cookie-settings-description",className:"text-sm text-muted-foreground mt-2",children:n("settings.description")})]}),e.jsx("div",{className:"p-4 sm:p-6",children:e.jsx(A,{onSave:p,onAcceptAll:b,onRejectAll:l,initialPreferences:c,showButtons:!0})})]})})})}export{$ as default};
