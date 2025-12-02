import{f as t,j as l}from"./chunk-B8t9k5RA.js";const i=[{value:"global",label:"Global",flag:"🌍"},{value:"us",label:"United States",flag:"🇺🇸"},{value:"uk",label:"United Kingdom",flag:"🇬🇧"},{value:"de",label:"Germany",flag:"🇩🇪"},{value:"fr",label:"France",flag:"🇫🇷"},{value:"es",label:"Spain",flag:"🇪🇸"},{value:"it",label:"Italy",flag:"🇮🇹"}];function d({value:n,onChange:s,disabled:a=!1,className:o=""}){const r=t("common");return l.jsxDEV("div",{className:o,children:[l.jsxDEV("label",{htmlFor:"region-select",className:"block text-sm font-medium mb-2",children:r("region")},void 0,!1,{fileName:"/Users/andrasdanko/Developer/Oxyness/web-ssr/components/RegionSelector.tsx",lineNumber:34,columnNumber:7},this),l.jsxDEV("select",{id:"region-select",value:n,onChange:e=>s(e.target.value),disabled:a,className:`
          w-full min-w-[200px] px-4 py-2.5
          bg-background border border-input rounded-md
          text-foreground
          focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors
          dark:bg-gray-800 dark:border-gray-700
        `,children:i.map(e=>l.jsxDEV("option",{value:e.value,children:[e.flag," ",e.label]},e.value,!0,{fileName:"/Users/andrasdanko/Developer/Oxyness/web-ssr/components/RegionSelector.tsx",lineNumber:53,columnNumber:11},this))},void 0,!1,{fileName:"/Users/andrasdanko/Developer/Oxyness/web-ssr/components/RegionSelector.tsx",lineNumber:37,columnNumber:7},this)]},void 0,!0,{fileName:"/Users/andrasdanko/Developer/Oxyness/web-ssr/components/RegionSelector.tsx",lineNumber:33,columnNumber:5},this)}export{d as R};
