import{j as i,C as m,A as a,B as l,a as e,D as c,r as d}from"./app-CoXSuXZg.js";import p from"./cms-2AMM_DVw.js";import x from"./bus-BShdoKwc.js";import b from"./dmtbank1-DT0wJpYg.js";import g from"./dmtbank2-z9WH6fK4.js";import n from"./recharge-Cp1DrtcE.js";import j from"./utilities-CItakEie.js";import"./tableStructureCommision-CX2xknDz.js";import"./apis-C3lHX1v6.js";const u=[{id:"recharge",title:"Recharge",icon:i.jsx(m,{}),bg_color:"bg-orange-200",component:i.jsx(n,{}),permissions:["admin"]},{id:"CMS",title:"CMS",component:i.jsx(p,{}),icon:i.jsx(a,{}),bg_color:"bg-green-200",permissions:["admin"],subMenu:[{id:"1",title:"Airtel",path:"/admin/cms-airtel/transactions",permissions:["admin"]}]},{id:"bus-booking",title:"Bus",component:i.jsx(x,{}),bg_color:"bg-violet-200",icon:i.jsx(l,{}),permissions:["admin"]},{id:"dmt-bank-1",title:"DMT Bank 1",component:i.jsx(b,{}),bg_color:"bg-blue-200",icon:i.jsx(e,{}),permissions:["admin"]},{id:"dmt-bank-2",title:"DMT Bank 2",component:i.jsx(g,{}),bg_color:"bg-yellow-200",icon:i.jsx(e,{}),permissions:["admin"]},{id:"utilities",title:"Utilities",component:i.jsx(j,{}),bg_color:"bg-red-200",icon:i.jsx(c,{}),permissions:["admin"]}];function y(){const[s,t]=d.useState(i.jsx(n,{}));return console.log(s),i.jsxs("div",{className:"max-w-full",children:[i.jsx("div",{className:"flex justify-evenly",children:u.map((o,r)=>i.jsx("span",{onClick:()=>t(o.component),className:`${o.bg_color}  px-10 rounded-full border-2 border-greay-500 font-medium text-gray-700`,children:o.title},r))}),i.jsx("div",{className:"mt-6",children:s})]})}export{y as default};
