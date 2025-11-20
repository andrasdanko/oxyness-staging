import{n as v,r as u,f as N,g as w,j as e}from"./chunk-DEGsnFfj.js";import{X as T}from"./chunk-D7ez7or0.js";import"./chunk-DQGQUwcw.js";/* empty css              *//* empty css              */function D({onClose:t,onSave:g,onAcceptAll:r,onRejectAll:c,initialPreferences:i}){const n=v("cookie"),l=u.useRef(null),a=!(i===null),[d,k]=u.useState({necessary:!0,functional:i?.functional??!1,analytics:i?.analytics??!1,marketing:i?.marketing??!1,timestamp:new Date().toISOString(),version:"1.0"}),b=u.useCallback(()=>{a&&t()},[a,t]);N(a?b:()=>{}),w(!0),u.useEffect(()=>{if(!l.current)return;const s=l.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),o=s[0],h=s[s.length-1],y=m=>{m.key==="Tab"&&(m.shiftKey?document.activeElement===o&&(h.focus(),m.preventDefault()):document.activeElement===h&&(o.focus(),m.preventDefault()))};return window.addEventListener("keydown",y),o?.focus(),()=>{window.removeEventListener("keydown",y)}},[]);const j=()=>{g(d),t()},x=s=>{s==="necessary"||s==="timestamp"||s==="version"||k(o=>({...o,[s]:!o[s]}))};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"fixed inset-0 bg-black/50 z-[60] grid place-items-center animate-fade-in",onClick:s=>{a&&s.target===s.currentTarget&&b()},"aria-hidden":"true",children:e.jsxs("div",{ref:l,role:"dialog","aria-modal":"true","aria-labelledby":"cookie-settings-title","aria-describedby":"cookie-settings-description",className:`
            w-[calc(100%-2rem)] max-w-2xl max-h-[90vh]
            bg-background border border-border rounded-lg shadow-xl
            overflow-y-auto
            animate-modal-scale
          `,onClick:s=>s.stopPropagation(),children:[e.jsxs("div",{className:"sticky top-0 bg-background border-b border-border p-4 sm:p-6",children:[a&&e.jsx("button",{onClick:b,"aria-label":n("banner.close"),className:`
                absolute top-4 right-4
                p-1 rounded-md
                text-muted-foreground hover:text-foreground
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              `,children:e.jsx(T,{className:"w-5 h-5"})}),e.jsx("h2",{id:"cookie-settings-title",className:`text-xl sm:text-2xl font-semibold ${a?"pr-8":""}`,children:n("settings.title")}),e.jsx("p",{id:"cookie-settings-description",className:"text-sm text-muted-foreground mt-2",children:n("settings.description")})]}),e.jsxs("div",{className:"p-4 sm:p-6 space-y-4",children:[e.jsx(f,{name:n("categories.necessary.name"),description:n("categories.necessary.description"),enabled:!0,alwaysActive:!0,onToggle:()=>{},alwaysActiveText:n("settings.alwaysActive")}),e.jsx(f,{name:n("categories.functional.name"),description:n("categories.functional.description"),enabled:d.functional,onToggle:()=>x("functional"),enabledText:n("settings.enabled"),disabledText:n("settings.disabled")}),e.jsx(f,{name:n("categories.analytics.name"),description:n("categories.analytics.description"),enabled:d.analytics,onToggle:()=>x("analytics"),enabledText:n("settings.enabled"),disabledText:n("settings.disabled")}),e.jsx(f,{name:n("categories.marketing.name"),description:n("categories.marketing.description"),enabled:d.marketing,onToggle:()=>x("marketing"),enabledText:n("settings.enabled"),disabledText:n("settings.disabled")})]}),e.jsxs("div",{className:"sticky bottom-0 bg-background border-t border-border p-4 sm:p-6 space-y-2",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>{r(),t()},className:`
                flex-1
                px-3 py-2 rounded-md
                bg-primary text-primary-foreground
                text-sm font-medium
                hover:bg-primary/90
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              `,children:n("banner.acceptAll")}),e.jsx("button",{onClick:()=>{c(),t()},className:`
                flex-1
                px-3 py-2 rounded-md
                bg-primary text-primary-foreground
                text-sm font-medium
                hover:bg-primary/90
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
              `,children:n("banner.rejectAll")})]}),e.jsx("button",{onClick:j,className:`
              w-full
              px-4 py-3 rounded-md
              bg-primary text-primary-foreground
              font-medium
              hover:bg-primary/90
              transition-colors
              focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
            `,children:n("settings.savePreferences")})]})]})})})}function f({name:t,description:g,enabled:r,alwaysActive:c=!1,onToggle:i,alwaysActiveText:n="Always Active",enabledText:l="Enabled",disabledText:p="Disabled"}){return e.jsx("div",{className:`
        p-4 rounded-lg border
        ${c?"bg-muted border-muted":"border-border"}
      `,children:e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("h3",{className:"font-semibold mb-1",children:t}),e.jsx("p",{className:"text-sm text-muted-foreground",children:g})]}),e.jsx("div",{className:"flex-shrink-0",children:c?e.jsx("span",{className:"text-sm text-muted-foreground font-medium",children:n}):e.jsxs("button",{onClick:i,role:"switch","aria-checked":r,"aria-label":`${r?"Disable":"Enable"} ${t}`,className:`
                relative inline-flex h-6 w-11 items-center rounded-full
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                ${r?"bg-primary":"bg-muted-foreground/30"}
              `,children:[e.jsx("span",{className:`
                  inline-block h-4 w-4 transform rounded-full bg-white
                  transition-transform
                  ${r?"translate-x-6":"translate-x-1"}
                `}),e.jsx("span",{className:"sr-only",children:r?l:p})]})})]})})}export{D as default};
