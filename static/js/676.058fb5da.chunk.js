"use strict";(self.webpackChunkTest_for_doctors=self.webpackChunkTest_for_doctors||[]).push([[676],{8676:(n,e,t)=>{t.r(e),t.d(e,{default:()=>m});var r,i,o=t(2791),s=t(1742),a=t(3037),l=t(84),c=t(3580),d=t(168),p=t(7924);const h=p.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 15px;\n"])));p.ZP.button(i||(i=(0,d.Z)(["\n  width: 250px;\n  height: 50px;\n  cursor: pointer;\n  border: 3px solid #fff;\n  border-radius: 10px;\n\n  font-weight: 500;\n  font-size: 24px;\n  color: var(--iq-light-primary);\n  /* border-radius: 4px; */\n  background: var(--iq-title-text);\n"])));var x=t(899),g=t(5313),u=t(184);const j=n=>{let{currentPage:e,testsPerPage:t,totalTests:r,onPageChange:i}=n;const o=Math.ceil(r/t);return(0,u.jsx)(h,{children:(0,u.jsx)(g.Z,{spacing:2,children:(0,u.jsx)(x.Z,{count:o,color:"primary",size:"large",page:e,onChange:(n,e)=>{i(n,e),window.scrollTo({top:0,behavior:"smooth"})}})})})};var v=t(8746),b=t(1771),f=t(2658);const m=()=>{const[n,e]=(0,o.useState)(l),[t,r]=(0,o.useState)(1),[i,d]=(0,o.useState)(!1),[p,h]=(0,o.useState)(null),x=(n,e)=>e?(0,u.jsx)("span",{style:{backgroundColor:"#1fa01f6f"},children:n}):(0,u.jsx)("span",{children:n}),g=30*(t-1),m=g+30,w=n.slice(g,m);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(v.Yb,{action:"formBase",children:(0,u.jsxs)(v.pj,{children:[(0,u.jsx)("label",{htmlFor:"formBase",children:"Vyberte testy"}),(0,u.jsxs)(c.Ph,{id:"formBase",onChange:n=>{switch(n.target.value){case"Klener":e(a);break;case"Medicine_2023":e(s);break;default:e(l)}},children:[(0,u.jsx)("option",{value:"Legislativa_Ba\u0301ze_2023",children:"Legislativa_Ba\u0301ze_2023"}),(0,u.jsx)("option",{value:"Klener",children:"Klener"}),(0,u.jsx)("option",{value:"Medicine_2023",children:"Medicine_2023(250 tests)"})]})]})}),(0,u.jsx)("div",{children:(0,u.jsx)(c.aV,{children:w.map(((n,e)=>(0,u.jsxs)(c.ck,{children:[(0,u.jsx)(c.HN,{children:n.question}),(0,u.jsx)(c.lO,{children:n.answers.map(((e,t)=>(0,u.jsx)(c.W_,{children:x(e,n.correctAnswers.includes(e))},t)))}),(0,u.jsx)(b.Id,{style:{alignSelf:"flex-end"},onClick:()=>(h(n),d(!0),void(document.body.style.overflow="hidden")),children:"Show Description"})]},e)))})}),(0,u.jsx)(j,{currentPage:t,testsPerPage:30,totalTests:n.length,onPageChange:(n,e)=>{r(e)}}),(0,u.jsx)(f.Z,{active:i,setActive:d,closeModal:()=>{d(!1),document.body.style.overflow="auto"},props:p})]})}},2658:(n,e,t)=>{t.d(e,{Z:()=>b});t(2791);var r,i,o,s,a,l,c=t(168),d=t(7924);const p=d.ZP.div(r||(r=(0,c.Z)(["\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(5px);\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n"]))),h=d.ZP.div(i||(i=(0,c.Z)(["\n  position: relative;\n  padding: 60px 15px 30px 15px;\n  border-radius: 12px;\n  background-color: var(--iq-secondary);\n  width: 75%;\n  height: 700px;\n  position: fixed; /* \u0424\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u044f */\n  overflow: auto; /* \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0443 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 */\n  @media screen and (max-width: 767px) {\n    padding: 60px 30px 30px 30px;\n    height: 550px;\n  }\n"]))),x=d.ZP.button(o||(o=(0,c.Z)(["\n  position: absolute;\n  background: transparent;\n  border: none;\n  right: 14px;\n  top: 14px;\n  cursor: pointer;\n\n  svg {\n    stroke-width: 1.5px;\n    stroke: var(--iq-cross);\n    width: 20px;\n    height: 20px;\n  }\n"]))),g=d.ZP.h2(s||(s=(0,c.Z)(["\n  text-align: center;\n  margin-bottom: 15px;\n"]))),u=d.ZP.p(a||(a=(0,c.Z)(["\n  margin-bottom: 40px;\n"]))),j=d.ZP.img(l||(l=(0,c.Z)(["\n  // Mobil\n  @media screen and (max-width: 767px) {\n    width: 235px;\n    height: 170px;\n  }\n"])));var v=t(184);const b=n=>{let{active:e,setActive:t,closeModal:r,props:i}=n;return(0,v.jsx)(v.Fragment,{children:e&&(0,v.jsx)(p,{onClick:()=>r(!1),children:(0,v.jsxs)(h,{onClick:n=>n.stopPropagation(),children:[(0,v.jsx)(x,{type:"button",onClick:r,children:(0,v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"black",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,v.jsx)("path",{d:"M6 18L18 6M6 6l12 12"})})}),(0,v.jsx)(g,{children:i.question}),(0,v.jsx)(u,{children:i.description}),(0,v.jsx)(j,{src:i.img,alt:i.question})]})})})}}}]);
//# sourceMappingURL=676.058fb5da.chunk.js.map