import{n as f,u as k,j as r}from"./chunk-DoRTNnwL.js";import{l as j}from"./chunk-DEf7r3lp.js";function x(e,n,l){const i=l.toUpperCase(),a=e.find(s=>s.locale===i);if(a&&a[n])return String(a[n]);const o=e.find(s=>s.locale==="EN");return o&&o[n]?String(o[n]):e.length>0&&e[0][n]?String(e[0][n]):""}function T({topic:e,topSites:n,locale:l,region:i,basePath:a="/top-sites",translationKey:o="topSites"}){const s=f(o),p=k().locale||"en",d=x(e.translations,"name",l),g=[...n].sort((t,c)=>t.order-c.order),h=g.slice(0,5),u=g.length>0,y=t=>{window.open(t,"_blank","noopener,noreferrer")};return g.length===0?r.jsxs("div",{className:"border rounded-lg p-4 bg-white dark:bg-gray-800 h-full flex flex-col",children:[r.jsx("h3",{className:"text-lg font-semibold mb-2 truncate",children:d}),r.jsx("hr",{className:"mb-2 border-gray-200 dark:border-gray-700"}),r.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 p-2",children:s("noLinks")})]}):r.jsxs("div",{className:`
        border rounded-lg p-4 h-full flex flex-col
        bg-white dark:bg-gray-800
        hover:shadow-lg hover:-translate-y-1
        transition-all duration-200
      `,children:[r.jsx("h3",{className:"text-lg font-semibold mb-2 truncate",title:d,children:d}),r.jsx("hr",{className:"mb-2 border-gray-200 dark:border-gray-700"}),r.jsx("ul",{className:"grow space-y-1",children:h.map(t=>{const c=x(t.translations,"title",l),m=t.order+1,b=m===1;return r.jsxs("li",{onClick:()=>y(t.url),className:`
                flex items-center gap-2 px-2 py-1.5 rounded
                cursor-pointer
                hover:bg-gray-100 dark:hover:bg-gray-700
                transition-colors
              `,children:[r.jsxs("span",{className:`
                  inline-flex items-center justify-center
                  min-h-11 px-2 py-0.5
                  text-xs font-semibold rounded-full
                  ${b?"bg-primary text-primary-foreground":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"}
                `,children:["#",m]}),r.jsx("span",{className:"text-sm truncate flex-1",title:c,children:c})]},t.id)})}),u&&r.jsx("a",{href:j(`${a}/${e.slug}${i==="global"?"":`/${i}`}`,p),className:`
            mt-3 w-full px-4 py-2
            border border-primary rounded-md
            text-sm text-center text-primary
            hover:bg-primary hover:text-primary-foreground
            transition-colors
            inline-block
          `,children:s("showMore")})]})}export{T};
