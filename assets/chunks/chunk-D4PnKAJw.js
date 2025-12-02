const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/chunk-BMGxgraN.js","assets/chunks/chunk-5yTX4TlC.js","assets/chunks/chunk-BnwOTj5j.js","assets/static/pages_Layout-69d9ce51.P_Ffx517.css","assets/static/pages_tailwind-65fb2459.BkDiZ_8E.css","assets/chunks/chunk-CxaGF4Jh.js"])))=>i.map(i=>d[i]);
import{Z as u,$ as f,a0 as p,a1 as g,_ as x}from"./chunk-BnwOTj5j.js";import{r as o,n as h,j as t}from"./chunk-5yTX4TlC.js";import{X as b}from"./chunk-CxaGF4Jh.js";/* empty css              *//* empty css              */function l(n){if(typeof window>"u"||typeof window.gtag!="function")return;const r=window.gtag;r("consent","update",{analytics_storage:n.analytics?"granted":"denied",ad_storage:n.marketing?"granted":"denied",ad_user_data:n.marketing?"granted":"denied",ad_personalization:n.marketing?"granted":"denied",functionality_storage:n.functional?"granted":"denied",personalization_storage:n.functional?"granted":"denied"})}function C(){const[n,r]=o.useState(null),[c,s]=o.useState(!1);o.useEffect(()=>{const e=u();r(e),s(!e),e&&l(e)},[]),o.useEffect(()=>{const e=()=>{s(!0)};return window.addEventListener("reopenCookieBanner",e),()=>{window.removeEventListener("reopenCookieBanner",e)}},[]);const i=o.useCallback(()=>{const e=f();r(e),s(!1),l(e),window.dispatchEvent(new CustomEvent("cookieConsentChanged",{detail:e}))},[]),d=o.useCallback(()=>{const e=p();r(e),s(!1),l(e),window.dispatchEvent(new CustomEvent("cookieConsentChanged",{detail:e}))},[]),m=o.useCallback(e=>{g(e),r(e),s(!1),l(e),window.dispatchEvent(new CustomEvent("cookieConsentChanged",{detail:e}))},[]),a=o.useCallback(()=>{s(!0)},[]);return{preferences:n,showBanner:c,handleAcceptAll:i,handleRejectAll:d,handleSaveCustom:m,reopenBanner:a}}const k=o.lazy(()=>x(()=>import("./chunk-BMGxgraN.js"),__vite__mapDeps([0,1,2,3,4,5])));function A(){const n=h("cookie.banner"),{preferences:r,showBanner:c,handleAcceptAll:s,handleRejectAll:i,handleSaveCustom:d}=C(),[m,a]=o.useState(!1);return o.useEffect(()=>{const e=()=>{a(!0)};return window.addEventListener("openCookieSettings",e),()=>{window.removeEventListener("openCookieSettings",e)}},[]),t.jsxs(t.Fragment,{children:[c&&t.jsxs("div",{role:"dialog","aria-modal":"false","aria-labelledby":"cookie-banner-title","aria-describedby":"cookie-banner-description",className:`
          fixed bottom-0 left-0 right-0 z-50
          bg-background border-t border-border
          shadow-lg
          p-4 sm:p-6
          animate-slide-up
        `,children:[t.jsx("button",{onClick:i,"aria-label":n("close"),className:`
            absolute top-2 right-2 sm:top-4 sm:right-4
            p-1 rounded-md
            text-muted-foreground hover:text-foreground
            transition-colors
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
          `,children:t.jsx(b,{className:"w-5 h-5"})}),t.jsxs("div",{className:"max-w-7xl mx-auto",children:[t.jsx("h2",{id:"cookie-banner-title",className:"text-lg sm:text-xl font-semibold mb-2 pr-8",children:n("title")}),t.jsx("p",{id:"cookie-banner-description",className:"text-sm sm:text-base text-muted-foreground mb-4 max-w-4xl",children:n("description")}),t.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 sm:gap-3",children:[t.jsx("button",{onClick:s,"aria-label":n("acceptAllAria"),className:`
                px-4 py-2 rounded-md
                bg-primary text-primary-foreground
                font-medium
                border-2 border-primary
                hover:bg-primary/90
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                sm:flex-1
              `,children:n("acceptAll")}),t.jsx("button",{onClick:()=>a(!0),"aria-label":n("customizeAria"),className:`
                px-4 py-2 rounded-md
                bg-primary text-primary-foreground
                font-medium
                border-2 border-primary
                hover:bg-primary/90
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                sm:flex-1
              `,children:n("customize")})]}),!r&&t.jsx("p",{className:"mt-3 text-xs sm:text-sm text-muted-foreground text-center",children:n("closeWarning")}),t.jsxs("div",{className:"mt-3 text-xs sm:text-sm text-muted-foreground text-center",children:[t.jsx("a",{href:"/privacy-policy",className:"underline hover:text-foreground transition-colors",children:n("privacyPolicy")}),t.jsx("span",{className:"mx-2",children:"|"}),t.jsx("a",{href:"/cookie-policy",className:"underline hover:text-foreground transition-colors",children:n("cookiePolicy")})]})]})]}),m&&t.jsx(o.Suspense,{fallback:null,children:t.jsx(k,{onClose:()=>a(!1),onSave:d,onAcceptAll:s,onRejectAll:i,initialPreferences:r})})]})}export{A as CookieBanner};
