const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/chunk-yolYv4g1.js","assets/chunks/chunk-Cz8RDFOg.js","assets/chunks/chunk-CuJtNQBn.js","assets/static/pages_Layout-69d9ce51.P_Ffx517.css","assets/static/pages_tailwind-65fb2459.hqcHiYMG.css","assets/chunks/chunk-BUVVEbJt.js"])))=>i.map(i=>d[i]);
import{Y as m,Z as u,$ as p,a0 as f,_ as x}from"./chunk-CuJtNQBn.js";import{r as t,n as h,j as n}from"./chunk-Cz8RDFOg.js";import{X as g}from"./chunk-BUVVEbJt.js";/* empty css              *//* empty css              */function b(){const[o,r]=t.useState(null),[l,s]=t.useState(!1);t.useEffect(()=>{const e=m();r(e),s(!e)},[]),t.useEffect(()=>{const e=()=>{s(!0)};return window.addEventListener("reopenCookieBanner",e),()=>{window.removeEventListener("reopenCookieBanner",e)}},[]);const a=t.useCallback(()=>{const e=u();r(e),s(!1),window.dispatchEvent(new CustomEvent("cookieConsentChanged",{detail:e}))},[]),c=t.useCallback(()=>{const e=p();r(e),s(!1),window.dispatchEvent(new CustomEvent("cookieConsentChanged",{detail:e}))},[]),d=t.useCallback(e=>{f(e),r(e),s(!1),window.dispatchEvent(new CustomEvent("cookieConsentChanged",{detail:e}))},[]),i=t.useCallback(()=>{s(!0)},[]);return{preferences:o,showBanner:l,handleAcceptAll:a,handleRejectAll:c,handleSaveCustom:d,reopenBanner:i}}const C=t.lazy(()=>x(()=>import("./chunk-yolYv4g1.js"),__vite__mapDeps([0,1,2,3,4,5])));function E(){const o=h("cookie.banner"),{preferences:r,showBanner:l,handleAcceptAll:s,handleRejectAll:a,handleSaveCustom:c}=b(),[d,i]=t.useState(!1);return t.useEffect(()=>{const e=()=>{i(!0)};return window.addEventListener("openCookieSettings",e),()=>{window.removeEventListener("openCookieSettings",e)}},[]),n.jsxs(n.Fragment,{children:[l&&n.jsxs("div",{role:"dialog","aria-modal":"false","aria-labelledby":"cookie-banner-title","aria-describedby":"cookie-banner-description",className:`
          fixed bottom-0 left-0 right-0 z-50
          bg-background border-t border-border
          shadow-lg
          p-4 sm:p-6
          animate-slide-up
        `,children:[n.jsx("button",{onClick:a,"aria-label":o("close"),className:`
            absolute top-2 right-2 sm:top-4 sm:right-4
            p-1 rounded-md
            text-muted-foreground hover:text-foreground
            transition-colors
            focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
          `,children:n.jsx(g,{className:"w-5 h-5"})}),n.jsxs("div",{className:"max-w-7xl mx-auto",children:[n.jsx("h2",{id:"cookie-banner-title",className:"text-lg sm:text-xl font-semibold mb-2 pr-8",children:o("title")}),n.jsx("p",{id:"cookie-banner-description",className:"text-sm sm:text-base text-muted-foreground mb-4 max-w-4xl",children:o("description")}),n.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 sm:gap-3",children:[n.jsx("button",{onClick:s,"aria-label":o("acceptAllAria"),className:`
                px-4 py-2 rounded-md
                bg-primary text-primary-foreground
                font-medium
                border-2 border-primary
                hover:bg-primary/90
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                sm:flex-1
              `,children:o("acceptAll")}),n.jsx("button",{onClick:()=>i(!0),"aria-label":o("customizeAria"),className:`
                px-4 py-2 rounded-md
                bg-primary text-primary-foreground
                font-medium
                border-2 border-primary
                hover:bg-primary/90
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                sm:flex-1
              `,children:o("customize")})]}),!r&&n.jsx("p",{className:"mt-3 text-xs sm:text-sm text-muted-foreground text-center",children:o("closeWarning")}),n.jsxs("div",{className:"mt-3 text-xs sm:text-sm text-muted-foreground text-center",children:[n.jsx("a",{href:"/privacy-policy",className:"underline hover:text-foreground transition-colors",children:o("privacyPolicy")}),n.jsx("span",{className:"mx-2",children:"|"}),n.jsx("a",{href:"/cookie-policy",className:"underline hover:text-foreground transition-colors",children:o("cookiePolicy")})]})]})]}),d&&n.jsx(t.Suspense,{fallback:null,children:n.jsx(C,{onClose:()=>i(!1),onSave:c,onAcceptAll:s,onRejectAll:a,initialPreferences:r})})]})}export{E as CookieBanner};
