"use strict";(self.webpackChunkTest_for_doctors=self.webpackChunkTest_for_doctors||[]).push([[200],{3200:(n,e,t)=>{t.r(e),t.d(e,{default:()=>T});var o,i,r,s,a,l,d,p,c,x,h=t(2791),g=t(5264),u=t(8573),C=t.n(u),b=t(168),f=t(7924);const m=f.ZP.p(o||(o=(0,b.Z)(["\n  text-align: center;\n  font-size: 24px;\n  font-weight: 500;\n  margin-bottom: 50px;\n\n  // Mobil\n  @media screen and (max-width: 767px) {\n    font-size: 16px;\n    margin-bottom: 20px;\n  }\n"]))),w=f.ZP.ul(i||(i=(0,b.Z)(["\n  margin-bottom: 15px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n  align-items: stretch;\n"]))),v=f.ZP.li(r||(r=(0,b.Z)(["\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  font-size: 15px;\n  min-height: 290px;\n  width: 400px;\n  padding-bottom: 15px;\n  background-color: white;\n  box-shadow: 5px 5px 8px var(--iq-boxShadow);\n"]))),Z=f.ZP.div(s||(s=(0,b.Z)(["\n  /* background-color: var(--iq-primary); */\n  position: relative;\n  padding: 10px 15px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 5px;\n  margin-bottom: 10px;\n  /* background-color: var(--iq-primary); */\n\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: -1px;\n    left: 0;\n    width: 100%;\n    height: 3px;\n    background-color: var(--iq-underlining);\n  }\n"]))),j=f.ZP.span(a||(a=(0,b.Z)(["\n  color: black;\n  font-weight: 600;\n"]))),y=f.ZP.p(l||(l=(0,b.Z)(["\n  padding: 0 15px;\n  font-size: 18px;\n  margin-bottom: 20px;\n  font-weight: bold;\n"]))),k=f.ZP.ul(d||(d=(0,b.Z)(["\n  margin-bottom: 40px;\n  flex: 1 1 auto;\n  padding: 0 15px;\n  position: relative;\n\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: -30px;\n    left: 25px;\n    width: 85%;\n    height: 3px;\n    background-color: var(--iq-underlining);\n  }\n"]))),P=f.ZP.li(p||(p=(0,b.Z)(["\n  list-style: line;\n  margin-left: 10px;\n  line-height: 1.4;\n"]))),A=f.ZP.div(c||(c=(0,b.Z)(["\n  /* height: 60px; */\n  margin: 0 15px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n"]))),L=f.ZP.button(x||(x=(0,b.Z)(["\n  /* border-radius: 5px; */\n  background: none;\n  display: flex;\n  border: none;\n  width: 120px;\n  height: 50px;\n  flex-direction: column;\n  align-items: center;\n  transition: 0.3s ease; // \u041f\u043b\u0430\u0432\u043d\u043e\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0444\u043e\u043d\u0430\n  /* border-top: 1px solid; */\n\n  /* \u0421\u0442\u0438\u043b\u0438 \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0446\u0432\u0435\u0442\u0430 \u0438\u043a\u043e\u043d\u043a\u0438 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438 */\n  svg path {\n    fill: blue;\n    transition: fill 0.3s ease; // \u041f\u043b\u0430\u0432\u043d\u043e\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0446\u0432\u0435\u0442\u0430 \u0438\u043a\u043e\u043d\u043a\u0438\n  }\n\n  &:hover svg path,\n  &:focus svg path {\n    stroke: rgba(88, 5, 143, 1); // \u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0446\u0432\u0435\u0442\u0430 \u0438\u043a\u043e\u043d\u043a\u0438 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438\n    stroke-width: 1;\n  }\n"])));var M=t(2658),z=t(3007),q=t(3300),S=t(184);const T=()=>{const n=JSON.parse(localStorage.getItem("myCollection")),[e,t]=(0,h.useState)(null),[o,i]=(0,h.useState)(!1),[r,s]=(0,h.useState)(""),[a,l]=(0,h.useState)(n||[]),[d,p]=(0,h.useState)(1),c=a.length,x=(n,e)=>e?(0,S.jsx)("span",{style:{backgroundColor:"#1fa01f6f"},children:n}):(0,S.jsx)("span",{children:n}),u=n=>a.some((e=>e.question===n.question)),b=C()((n=>{s(n.target.value),console.log(r)}),500),f=a.filter((n=>n.question.toLowerCase().includes(r.toLowerCase()))),T=30*(d-1),B=T+30,I=f.slice(T,B);return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(m,{children:["My Base ",(0,S.jsxs)("span",{style:{color:"blue"},children:["(",c,")"]})]}),(0,S.jsx)(z.Z,{handleSearchInputChange:b}),(0,S.jsx)("div",{children:(0,S.jsx)(w,{children:I.map(((n,e)=>(0,S.jsxs)(v,{children:[(0,S.jsxs)(Z,{children:[(0,S.jsxs)(j,{children:["Boock: ",n.book]}),(0,S.jsxs)(j,{children:["Topic: ",n.topic]})]}),(0,S.jsx)(y,{children:n.question}),(0,S.jsx)(k,{children:n.answers.map(((e,t)=>(0,S.jsx)(P,{children:x(e,n.correctAnswers.includes(e))},t)))}),(0,S.jsxs)(A,{children:[(0,S.jsxs)(L,{onClick:()=>(t(n),i(!0),void(document.body.style.overflow="hidden")),disabled:!n.description,children:[(0,S.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"30",height:"30",viewBox:"0 0 100 100",children:(0,S.jsx)("path",{d:"M 50 16 C 38.745078 16 28.536804 19.528325 21.103516 25.289062 C 13.670227 31.0498 9 39.090825 9 48 C 9 56.843516 13.643104 64.803099 20.982422 70.556641 C 20.979022 77.17314 20.872179 82.713759 17.292969 86.292969 A 1.0001 1.0001 0 0 0 18 88 C 24.741238 88 33.13907 85.975155 38.578125 78.707031 C 42.210021 79.527556 46.031696 80 50 80 C 61.254922 80 71.463196 76.471675 78.896484 70.710938 C 86.329773 64.950199 91 56.909175 91 48 C 91 39.090825 86.329773 31.0498 78.896484 25.289062 C 71.463196 19.528325 61.254922 16 50 16 z M 50 18 C 60.836078 18 70.627913 21.410128 77.671875 26.869141 C 84.715837 32.328153 89 39.788175 89 48 C 89 56.211825 84.715837 63.671847 77.671875 69.130859 C 70.627913 74.589872 60.836078 78 50 78 C 45.963088 78 42.07133 77.527971 38.412109 76.652344 A 1.0001 1.0001 0 0 0 37.361328 77.048828 C 32.908474 83.389417 26.082467 85.468934 20.003906 85.837891 C 22.866127 81.619726 23 76.123 23 70.216797 L 23 70.140625 A 1.0001 1.0001 0 0 0 22.605469 69.345703 C 15.3982 63.868957 11 56.317715 11 48 C 11 39.788175 15.284163 32.328153 22.328125 26.869141 C 29.372087 21.410128 39.163922 18 50 18 z M 50 21 C 40.109772 21 31.134601 23.999444 24.609375 28.871094 C 18.084149 33.742743 14 40.513854 14 48 C 14 53.479972 16.189921 58.584917 19.921875 62.830078 A 0.50030972 0.50030972 0 1 0 20.673828 62.169922 C 17.075782 58.077083 15 53.214028 15 48 C 15 40.877146 18.876757 34.397976 25.207031 29.671875 C 31.537305 24.945774 40.312228 22 50 22 C 59.503691 22 68.127545 24.834788 74.427734 29.404297 A 0.50005 0.50005 0 1 0 75.015625 28.595703 C 68.523814 23.887212 59.702309 21 50 21 z M 49.5 28 C 46.495378 28 44 30.214474 44 33 C 44 35.785526 46.495378 38 49.5 38 C 52.504622 38 55 35.785526 55 33 C 55 30.214474 52.504622 28 49.5 28 z M 49.5 29 C 52.018226 29 54 30.814963 54 33 C 54 35.185037 52.018226 37 49.5 37 C 46.981774 37 45 35.185037 45 33 C 45 30.814963 46.981774 29 49.5 29 z M 76.5 29.880859 A 0.50005 0.50005 0 0 0 76.179688 30.767578 C 76.417254 30.9667 76.650339 31.169004 76.878906 31.373047 A 0.50005839 0.50005839 0 1 0 77.544922 30.626953 C 77.307489 30.414996 77.064746 30.206831 76.820312 30.001953 A 0.50005 0.50005 0 0 0 76.5 29.880859 z M 78.78125 31.994141 A 0.50005 0.50005 0 0 0 78.419922 32.847656 C 78.732508 33.170072 79.033765 33.497441 79.326172 33.830078 A 0.50030972 0.50030972 0 0 0 80.078125 33.169922 C 79.774531 32.824559 79.460133 32.485928 79.136719 32.152344 A 0.50005 0.50005 0 0 0 78.78125 31.994141 z M 80.890625 34.494141 A 0.50005 0.50005 0 0 0 80.529297 35.302734 C 83.383758 39.071094 85 43.397373 85 48 C 85 55.122854 81.123243 61.602024 74.792969 66.328125 C 68.462695 71.054226 59.687772 74 50 74 C 48.831137 74 47.676738 73.95713 46.537109 73.873047 A 0.50040144 0.50040144 0 0 0 46.462891 74.871094 C 47.627264 74.957007 48.806863 75 50 75 C 59.890228 75 68.865399 72.000556 75.390625 67.128906 C 81.915851 62.257257 86 55.486146 86 48 C 86 43.162627 84.29371 38.614906 81.326172 34.697266 A 0.50005 0.50005 0 0 0 80.941406 34.494141 A 0.50005 0.50005 0 0 0 80.890625 34.494141 z M 42.5 40 A 0.50005 0.50005 0 0 0 42 40.5 L 42 44.5 A 0.50005 0.50005 0 0 0 42.5 45 L 45.5 45 C 45.781469 45 46 45.218531 46 45.5 L 46 60.5 C 46 60.781469 45.781469 61 45.5 61 L 41.5 61 A 0.50005 0.50005 0 0 0 41 61.5 L 41 65.5 A 0.50005 0.50005 0 0 0 41.5 66 L 59.5 66 A 0.50005 0.50005 0 0 0 60 65.5 L 60 61.5 A 0.50005 0.50005 0 0 0 59.5 61 L 55.5 61 C 55.218531 61 55 60.781469 55 60.5 L 55 40.5 A 0.50005 0.50005 0 0 0 54.5 40 L 42.5 40 z M 43 41 L 54 41 L 54 60.5 C 54 61.322531 54.677469 62 55.5 62 L 59 62 L 59 65 L 42 65 L 42 62 L 45.5 62 C 46.322531 62 47 61.322531 47 60.5 L 47 45.5 C 47 44.677469 46.322531 44 45.5 44 L 43 44 L 43 41 z"})}),"Show Description"]}),(0,S.jsxs)(L,{onClick:e=>(n=>{console.log(n);const e=a.filter((e=>e.question!==n.question));l(e),localStorage.setItem("myCollection",JSON.stringify(e)),g.Notify.warning("Test odstran\u011bn z obl\xedben\xfdch")})(n),children:[(0,S.jsx)("svg",{width:"30",height:"30",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 17 15",style:{borderRadius:"10px",position:"relative",backgroundColor:u(n)?"rgba(187,154,230, 1)":"white"},children:(0,S.jsx)("g",{transform:"translate(-2, 1)",children:(0,S.jsx)("path",{d:"M7.85 0.428c-1.785 0.13-3.332 1.385-3.828 3.103-0.14 0.488-0.16 0.637-0.158 1.245 0 0.488 0.008 0.598 0.057 0.825 0.162 0.765 0.48 1.422 0.957 1.988 0.105 0.122 1.525 1.558 3.155 3.188l2.965 2.962 3.060-3.063c1.945-1.948 3.113-3.135 3.207-3.262 0.398-0.535 0.65-1.080 0.793-1.715 0.26-1.175 0.023-2.405-0.66-3.408-0.2-0.295-0.543-0.67-0.81-0.887-1.212-0.99-2.845-1.26-4.31-0.713-0.407 0.152-0.73 0.33-1.098 0.605l-0.18 0.135-0.107-0.088c-0.463-0.375-1.185-0.71-1.82-0.842-0.2-0.040-0.853-0.107-0.938-0.098-0.012 0.002-0.143 0.012-0.287 0.025zM9 1.182c0.69 0.162 1.248 0.465 1.78 0.967l0.232 0.217 0.242-0.232c0.517-0.495 1.1-0.807 1.795-0.965 0.227-0.050 0.33-0.057 0.762-0.057 0.558 0 0.73 0.025 1.185 0.178 1.070 0.355 1.933 1.217 2.288 2.285 0.135 0.41 0.168 0.598 0.183 1.063 0.010 0.357 0.005 0.473-0.038 0.725-0.093 0.537-0.277 1.005-0.582 1.465-0.137 0.208-0.483 0.565-3 3.085l-2.848 2.85-2.777-2.775c-1.967-1.968-2.828-2.845-2.955-3.012-0.377-0.495-0.617-1.085-0.705-1.725-0.27-1.97 1.082-3.79 3.055-4.112 0.345-0.057 1.045-0.033 1.383 0.045z"})})}),"Add to favorite"]})]})]},e)))})}),(0,S.jsx)(q.Z,{currentPage:d,testsPerPage:30,totalTests:f.length,onPageChange:(n,e)=>{p(e)}}),(0,S.jsx)(M.Z,{active:o,setActive:i,closeModal:()=>{i(!1),document.body.style.overflow="auto"},props:e})]})}},3300:(n,e,t)=>{t.d(e,{Z:()=>c});var o,i,r=t(168),s=t(7924);const a=s.ZP.div(o||(o=(0,r.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 15px;\n"])));s.ZP.button(i||(i=(0,r.Z)(["\n  width: 250px;\n  height: 50px;\n  cursor: pointer;\n  border: 3px solid #fff;\n  border-radius: 10px;\n\n  font-weight: 500;\n  font-size: 24px;\n  color: var(--iq-light-primary);\n  /* border-radius: 4px; */\n  background: var(--iq-title-text);\n"])));var l=t(6968),d=t(5313),p=t(184);const c=n=>{let{currentPage:e,testsPerPage:t,totalTests:o,onPageChange:i}=n;const r=Math.ceil(o/t);return(0,p.jsx)(a,{children:(0,p.jsx)(d.Z,{spacing:2,children:(0,p.jsx)(l.Z,{count:r,color:"primary",size:"large",page:e,onChange:(n,e)=>{i(n,e),window.scrollTo({top:0,behavior:"smooth"})}})})})}},2658:(n,e,t)=>{t.d(e,{Z:()=>f});t(2791);var o,i,r,s,a,l,d=t(168),p=t(7924);const c=p.ZP.div(o||(o=(0,d.Z)(["\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(5px);\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n"]))),x=p.ZP.div(i||(i=(0,d.Z)(["\n  position: relative;\n  padding: 60px 15px 30px 15px;\n  border-radius: 12px;\n  background-color: var(--iq-secondary);\n  width: 75%;\n  height: 700px;\n  position: fixed; /* \u0424\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u044f */\n  overflow: auto; /* \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0443 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 */\n  @media screen and (max-width: 767px) {\n    padding: 60px 30px 30px 30px;\n    height: 550px;\n  }\n"]))),h=p.ZP.button(r||(r=(0,d.Z)(["\n  position: absolute;\n  background: transparent;\n  border: none;\n  right: 14px;\n  top: 14px;\n  cursor: pointer;\n\n  svg {\n    stroke-width: 1.5px;\n    stroke: var(--iq-cross);\n    width: 20px;\n    height: 20px;\n  }\n"]))),g=p.ZP.h2(s||(s=(0,d.Z)(["\n  text-align: center;\n  margin-bottom: 15px;\n"]))),u=p.ZP.p(a||(a=(0,d.Z)(["\n  margin-bottom: 40px;\n"]))),C=p.ZP.img(l||(l=(0,d.Z)(["\n  // Mobil\n  @media screen and (max-width: 767px) {\n    width: 235px;\n    height: 170px;\n  }\n"])));var b=t(184);const f=n=>{let{active:e,setActive:t,closeModal:o,props:i}=n;return(0,b.jsx)(b.Fragment,{children:e&&(0,b.jsx)(c,{onClick:()=>o(!1),children:(0,b.jsxs)(x,{onClick:n=>n.stopPropagation(),children:[(0,b.jsx)(h,{type:"button",onClick:o,children:(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"black",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("path",{d:"M6 18L18 6M6 6l12 12"})})}),(0,b.jsx)(g,{children:i.question}),(0,b.jsx)(u,{children:i.description}),i.img[0]&&(0,b.jsx)(C,{src:i.img,alt:i.question})]})})})}},3007:(n,e,t)=>{t.d(e,{Z:()=>x});var o,i,r,s=t(168),a=t(7924);const l=a.ZP.p(o||(o=(0,s.Z)(["\n  font-weight: 500;\n  /* margin-bottom: 50px; */\n  // Mobil\n  @media screen and (max-width: 767px) {\n    font-size: 14px;\n  }\n"]))),d=a.ZP.input(i||(i=(0,s.Z)(["\n  padding: 5px 0 5px 10px;\n  /* width: 30px; */\n  height: 30px;\n  border-radius: 4px;\n  border: none;\n"]))),p=a.ZP.div(r||(r=(0,s.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: 50px;\n  justify-content: flex-start;\n  gap: 20px;\n  &:after {\n    content: '';\n    position: absolute;\n    bottom: -19px;\n    left: 0;\n    width: 100%;\n    height: 3px;\n    background-color: var(--iq-underlining);\n  }\n"])));var c=t(184);const x=n=>{const{handleSearchInputChange:e}=n;return(0,c.jsxs)(p,{children:[(0,c.jsx)(l,{children:"Najd\u011bte test"}),(0,c.jsx)(d,{type:"text",placeholder:"Enter any word",onChange:e})]})}}}]);
//# sourceMappingURL=200.6522126a.chunk.js.map