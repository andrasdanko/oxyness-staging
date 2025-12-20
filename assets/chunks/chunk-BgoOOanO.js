import{j as e}from"./chunk-Cc16oeOs.js";function G({headerLeft:i,headerRight:r,body:m,footerLeft:x,footerRight:n,href:o,className:p="",gradient:h="",badge:d,padding:f="default",hoverEffect:v="lift",border:j="default",corners:w="all",footerClassName:N="",onClick:s,title:l,testId:a}){const $={compact:"p-3",default:"p-4",spacious:"p-6"},g={default:"border-0",subtle:"border border-border/50 hover:border-primary/20",none:"border-0"},_={lift:"hover:shadow-[6px_6px_12px_rgba(0,0,0,0.12)] hover:-translate-y-0.5",glow:"hover:shadow-[0_0_20px_rgba(var(--color-primary)/0.3)]",none:""},u=`
    group relative ${{all:"rounded-md",left:"rounded-2xl md:rounded-l-3xl md:rounded-r-none",right:"rounded-2xl md:rounded-r-3xl md:rounded-l-none","top-left":"rounded-2xl md:rounded-none md:rounded-tl-3xl","top-right":"rounded-2xl md:rounded-none md:rounded-tr-3xl","bottom-left":"rounded-2xl md:rounded-none md:rounded-bl-3xl","bottom-right":"rounded-2xl md:rounded-none md:rounded-br-3xl",none:"rounded-2xl md:rounded-none"}[w]} overflow-hidden
    ${$[f]}
    ${g[j]}
    shadow-[4px_4px_12px_rgba(0,0,0,0.05)] transition-all duration-300
    ${_[v]}
    ${h}
    ${p}
  `,t=o||s?`${u} cursor-pointer`:u,y=i||r,C=x||n,c=e.jsxs(e.Fragment,{children:[d&&e.jsx("div",{className:`
            absolute top-4 left-4 z-10
            flex items-center justify-center
            rounded-full shadow-md
            ${d.className||"w-10 h-10 text-lg font-bold"}
          `,children:d.content}),e.jsxs("div",{className:d?"pt-12":"",children:[y&&e.jsxs("div",{className:"flex items-start justify-between gap-3 mb-2",children:[e.jsx("div",{className:"flex-1 min-w-0",children:i}),r&&e.jsx("div",{className:"shrink-0",children:r})]}),m&&e.jsx("div",{className:"mb-2",children:m}),C&&e.jsxs("div",{className:`flex items-center justify-between gap-3 pt-3 border-t border-border/40 ${N}`,children:[e.jsx("div",{className:"flex-1 min-w-0",children:x}),n&&e.jsx("div",{className:"shrink-0",children:n})]})]})]});return o?e.jsx("a",{href:o,className:`block bg-card ${t}`,title:l,"data-testid":a,children:c}):s?e.jsx("div",{className:`bg-card ${t}`,onClick:s,role:"button",tabIndex:0,title:l,"data-testid":a,onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&s()},children:c}):e.jsx("div",{className:`bg-card ${t}`,title:l,"data-testid":a,children:c})}export{G};
