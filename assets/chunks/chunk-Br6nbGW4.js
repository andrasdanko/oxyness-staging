import{n as s,j as l}from"./chunk-DEGsnFfj.js";const i=[{value:"global",label:"Global",flag:"🌍"},{value:"us",label:"United States",flag:"🇺🇸"},{value:"uk",label:"United Kingdom",flag:"🇬🇧"},{value:"de",label:"Germany",flag:"🇩🇪"},{value:"fr",label:"France",flag:"🇫🇷"},{value:"es",label:"Spain",flag:"🇪🇸"},{value:"it",label:"Italy",flag:"🇮🇹"}];function d({value:a,onChange:n,disabled:o=!1,className:r=""}){const t=s("topSites");return l.jsxs("div",{className:r,children:[l.jsx("label",{htmlFor:"region-select",className:"block text-sm font-medium mb-2",children:t("region")}),l.jsx("select",{id:"region-select",value:a,onChange:e=>n(e.target.value),disabled:o,className:`
          w-full min-w-[200px] px-4 py-2.5
          bg-background border border-input rounded-md
          text-foreground
          focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors
          dark:bg-gray-800 dark:border-gray-700
        `,children:i.map(e=>l.jsxs("option",{value:e.value,children:[e.flag," ",e.label]},e.value))})]})}export{d as R};
