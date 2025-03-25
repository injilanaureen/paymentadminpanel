import{r as d,j as e,B as h,i as N}from"./app-CO3wtwL6.js";function y(){const[c,l]=d.useState([]),[r,o]=d.useState(null),[a,n]=d.useState(null),[x,m]=d.useState(null);d.useEffect(()=>{async function s(){try{const t=await h();l(t.data.data||[])}catch(t){console.error("Error fetching Bank 1 data:",t),l([])}}s()},[]);const b=s=>{o(s)},u=s=>{n({...s}),m({...s})},p=s=>{const t=s.target.value.replace("%","");n({...a,commission:t})},j=async()=>{var s;try{const t={};if(a.commission!==x.commission&&(t.commission=a.commission),Object.keys(t).length===0){alert("No changes detected!");return}await N(a.id,t),alert("Commission updated successfully!");const i=await h();(s=i==null?void 0:i.data)!=null&&s.data&&l(i.data.data),n(null),m(null)}catch(t){alert("Failed to update commission."),console.error("Error updating commission:",t)}};return e.jsxs("div",{className:"max-w-full bg-gray-100 mt-6",children:[e.jsx("div",{className:"bg-gray-700 flex justify-between p-4",children:e.jsx("h3",{className:"text-white font-bold",children:"DMT Bank 1 Commission"})}),e.jsxs("table",{className:"w-full border-collapse border border-gray-300 mt-4",children:[e.jsx("thead",{className:"bg-gray-200",children:e.jsxs("tr",{children:[e.jsx("th",{children:"S.no"}),e.jsx("th",{className:"border p-2",children:"Transaction Amount"}),e.jsx("th",{className:"border p-2",children:"Commission"}),e.jsx("th",{className:"border p-2",children:"Commission"}),e.jsx("th",{className:"border p-2",children:"Actions"})]})}),e.jsx("tbody",{children:c.length>0?c.map((s,t)=>e.jsxs("tr",{className:"border",children:[e.jsx("td",{className:"p-2 border text-center",children:t+1}),e.jsx("td",{className:"p-2 border text-center",children:s.transaction_amount}),e.jsxs("td",{className:"p-2 border text-center",children:[s.commission,"%"]}),e.jsx("td",{className:"p-2 border text-center",children:e.jsx("button",{className:"bg-blue-500 text-white px-2 py-1 rounded mr-2",onClick:()=>b(s),children:"View Details"})})]},t)):e.jsx("tr",{children:e.jsx("td",{colSpan:4,className:"text-center p-4",children:"No data available"})})})]}),r&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex  z-50",children:e.jsxs("div",{className:"bg-white p-8 rounded-2xl shadow-2xl w-11/12 md:w-2/3 lg:w-2/3 max-h-[100vh] overflow-auto",children:[e.jsxs("div",{className:"flex justify-between items-center mb-4",children:[e.jsxs("h2",{className:"text-lg font-bold",children:["Details for Transaction Amount ",r.transaction_amount]}),e.jsx("button",{className:"bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600",onClick:()=>o(null),children:"Close"})]}),e.jsxs("table",{className:"w-full border-collapse border border-gray-300 mt-4",children:[e.jsx("thead",{className:"bg-gray-200",children:e.jsxs("tr",{children:[e.jsx("th",{className:"border p-2",children:"ID"}),e.jsx("th",{className:"border p-2",children:"Transaction Amount"}),e.jsx("th",{className:"border p-2",children:"Category"}),e.jsx("th",{className:"border p-2",children:"Commission"}),e.jsx("th",{className:"border p-2",children:"Last Updated"}),e.jsx("th",{className:"border p-2",children:"Edit"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{className:"border",children:[e.jsx("td",{className:"p-2 border",children:r.id}),e.jsx("td",{className:"p-2 border",children:r.transaction_amount}),e.jsx("td",{className:"p-2 border",children:r.category}),e.jsxs("td",{className:"p-2 border",children:[r.commission,"%"]}),e.jsx("td",{className:"p-2 border",children:r.updated_at?new Date(r.updated_at).toLocaleString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0,year:"numeric",month:"2-digit",day:"2-digit"}):"Not updated yet"}),e.jsx("td",{className:"p-2 border",children:e.jsx("button",{className:"bg-yellow-500 text-white px-2 py-1 rounded",onClick:()=>u(r),children:"Edit"})})]})})]})]})}),a&&e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50",children:e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-xl w-11/12 md:w-2/3 lg:w-2/3",children:[e.jsx("h2",{className:"text-xl font-bold text-gray-800 text-center mb-4",children:"Edit Commission"}),e.jsxs("table",{className:"w-full border-collapse border border-gray-300",children:[e.jsx("thead",{className:"bg-gray-200",children:e.jsxs("tr",{children:[e.jsx("th",{className:"border p-2",children:"ID"}),e.jsx("th",{className:"border p-2",children:"Transaction Amount"}),e.jsx("th",{className:"border p-2",children:"Commission"}),e.jsx("th",{className:"border p-2",children:"Last Updated"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"border p-2",children:a.id}),e.jsx("td",{className:"border p-2",children:a.transaction_amount}),e.jsx("td",{className:"border p-2",children:e.jsx("input",{type:"text",className:"w-full border p-2 rounded",value:`${a.commission}%`,onChange:p})}),e.jsx("td",{className:"border p-2",children:a.updated_at?new Date(a.updated_at).toLocaleString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!0,year:"numeric",month:"2-digit",day:"2-digit"}):"Not updated yet"})]})})]}),e.jsxs("div",{className:"text-center mt-4",children:[e.jsx("button",{className:"bg-blue-500 text-white px-4 py-2 rounded mr-2",onClick:j,children:"Save"}),e.jsx("button",{className:"bg-gray-500 text-white px-4 py-2 rounded",onClick:()=>n(null),children:"Cancel"})]})]})})]})}export{y as default};
