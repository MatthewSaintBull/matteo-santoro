(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5930)}])},5930:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return u}});var t=n(5893),l=n(9008),i=n.n(l),a=n(7294),r=function(){let[e,s]=(0,a.useState)(!0),n=(0,a.useRef)(null);return e?(0,t.jsxs)("div",{className:"overflow-hidden flex flex-col justify-center h-screen align-middle items-center text-5xl animate-fadeout p-2 space-y-2",ref:n,onAnimationEnd(e){e.target===e.currentTarget&&s(!1)},children:[(0,t.jsx)("h1",{children:"Hi, I am Matteo."}),(0,t.jsx)("h3",{className:"text-xl",children:"a fullstack software engineer"})]}):(0,t.jsx)(t.Fragment,{})};let c=()=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-8 md:w-10 m-auto",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"})}),o=()=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-8 md:w-10 m-auto",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"})}),d=e=>{var s;let{companyInfo:n}=e,[l,i]=(0,a.useState)(!1),r=(0,a.useRef)(null);return(0,a.useEffect)(()=>{l?(r.current.classList.add("h-52"),r.current.classList.remove("h-0")):(r.current.classList.add("h-0"),r.current.classList.remove("h-52"))},[l]),(0,t.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-3 items-center justify-items-center p-2 space-y-2 md:space-y-0",children:[(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{srcSet:n.companyLogo,type:"image/jpg"}),(0,t.jsx)("img",{src:n.companyLogo,className:"rounded-full w-24 md:w-36",alt:"".concat(n.companyName," logo")})]}),(0,t.jsxs)("div",{className:"flex flex-col justify-center items-center p-2 col-span-2 relative",children:[(0,t.jsx)("h1",{className:"text-4xl font-semibold",id:"company-name",children:n.companyName}),(0,t.jsxs)("span",{className:"italic text-zinc-500",id:"role",children:[n.role," | ",n.workingDateRange]}),(0,t.jsx)("p",{className:"text-zinc-900 font-semibold",id:"description",children:n.description}),(0,t.jsxs)("button",{className:"rounded-full shadow-xl border-2 border-blue-400 hover:bg-slate-300 my-5",onClick(){i(!l)},children:[" ",l?(0,t.jsx)(o,{}):(0,t.jsx)(c,{})]}),(0,t.jsxs)("div",{className:"h-0 flex flex-col relative overflow-hidden transition-all duration-500 ease-out",ref:r,children:[(0,t.jsx)("label",{htmlFor:"techList",className:"text-xl font-bold",children:"Languages and Technology Stack"}),(0,t.jsx)("ol",{id:"techList",className:"p-5 list-square marker:text-blue-500",children:null==n?void 0:null===(s=n.technologyStack)||void 0===s?void 0:s.map(e=>(0,t.jsx)("li",{children:e},e))})]})]})]})},x=()=>{var e;let[s,n]=(0,a.useState)(null),[l,i]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{(async function(){i(!0);let e=await fetch("/api/jobs"),s=await e.json();n(s),i(!1)})()},[]),l)?(0,t.jsx)("p",{children:"Loading..."}):s?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"flex justify-center p-5",children:(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{srcSet:"/images/propic.jpg",type:"image/jpg"}),(0,t.jsx)("img",{src:"/images/propic.jpg",className:"w-64 rounded-full",alt:"propic"})]})}),(0,t.jsx)("div",{id:"working-experience",className:"flex flex-col divide-y divide-zinc-400 font-sans",children:null==s?void 0:null===(e=s.jobs)||void 0===e?void 0:e.map(e=>(0,t.jsx)(d,{companyInfo:e},e.companyName))})]}):(0,t.jsx)("p",{children:"No profile data"})},m=()=>{let[e,s]=(0,a.useState)(null),[n,l]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{(async function(){l(!0);let e=await fetch("/api/contactInfo"),n=await e.json();s(n),l(!1)})()},[]),n)?(0,t.jsx)("p",{children:"Loading..."}):e?(0,t.jsxs)("div",{className:"h-max bg-slate-300 grid grid-cols-1 sm:grid-cols-2 p-2 justify-items-center place-items-center",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("section",{className:"flex space-x-2",children:[(0,t.jsx)("h5",{className:"font-semibold",children:"Email: "}),(0,t.jsx)("a",{href:"mailto:".concat(e.email),className:"text-zinc-700",target:"_blank",rel:"noreferrer",children:e.email})]}),(0,t.jsxs)("section",{className:"flex space-x-2",children:[(0,t.jsx)("h5",{className:"font-semibold",children:"LinkedIn: "}),(0,t.jsx)("a",{href:"https://linkedin.com".concat(e.linkedin),className:"text-zinc-700",target:"_blank",rel:"noreferrer",children:e.linkedin})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("section",{className:"flex space-x-2",children:[(0,t.jsx)("h5",{className:"font-semibold",children:"Github: "}),(0,t.jsxs)("a",{href:"https://github.com/".concat(e.github),className:"text-zinc-700",target:"_blank",rel:"noreferrer",children:["@",e.github]})]}),(0,t.jsxs)("section",{className:"flex space-x-2",children:[(0,t.jsx)("h5",{className:"font-semibold",children:"Instagram: "}),(0,t.jsxs)("a",{href:"https://instagram.com/".concat(e.instagram),className:"text-zinc-700",target:"_blank",rel:"noreferrer",children:["@",e.instagram]})]})]})]}):(0,t.jsx)("p",{children:"No profile data"})};function u(){let e=(0,a.useRef)(null),s=(0,a.useRef)(null),[n,l]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{var s,n;console.log(null===(s=e.current)||void 0===s?void 0:s.clientHeight),(null==e?void 0:null===(n=e.current)||void 0===n?void 0:n.clientHeight)>30&&l(!0)},[s]),(0,t.jsxs)("div",{children:[(0,t.jsxs)(i(),{children:[(0,t.jsx)("title",{children:"Create Next App"}),(0,t.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)("main",{className:"w-full h-full",ref:e,children:[(0,t.jsx)(r,{ref:s}),n&&(0,t.jsx)("div",{className:"max-w-7xl mx-auto overflow-auto",children:(0,t.jsx)(x,{})})]}),(0,t.jsx)("footer",{children:(0,t.jsx)(m,{})})]})}},9008:function(e,s,n){e.exports=n(3121)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);