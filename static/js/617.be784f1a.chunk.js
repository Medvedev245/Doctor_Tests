"use strict";(self.webpackChunkTest_for_doctors=self.webpackChunkTest_for_doctors||[]).push([[617],{2617:(n,e,t)=>{t.r(e),t.d(e,{default:()=>l});var i=t(2791),o=t(4420),r=t(1771),s=t(2658),c=t(184);const a=n=>{const{time:e,setTime:t}=n;return(0,i.useEffect)((()=>{let n=null;return n=setInterval((()=>{t((n=>{let e=n.seconds+1,t=n.minutes;return 60===e&&(e=0,t+=1),{minutes:t,seconds:e}}))}),1e3),()=>clearInterval(n)})),(0,c.jsx)("div",{children:(0,c.jsx)("h1",{children:"".concat(e.minutes.toString().padStart(2,"0"),":").concat(e.seconds.toString().padStart(2,"0"))})})};var d=t(1848);const l=()=>{const[n,e]=(0,i.useState)(!1),[t,l]=(0,i.useState)(0),[x,p]=(0,i.useState)([]),[h,u]=(0,i.useState)(0),[g,m]=(0,i.useState)(1),[b,w]=(0,i.useState)([]),[v,f]=(0,i.useState)(!1),[k,Z]=(0,i.useState)({minutes:0,seconds:0}),j=(0,o.I0)(),y=(0,o.v9)((n=>n.tests.questions));return(0,c.jsxs)(r.N1,{children:[(0,c.jsxs)(r.OY,{children:[(0,c.jsx)(r.R9,{children:y[t].question}),y[t].answers.map(((n,e)=>(0,c.jsxs)(r.A0,{style:{backgroundColor:v&&y[t].correctAnswers.includes(n)?"#1fa01f6f":""},children:[(0,c.jsx)("input",{type:"checkbox",checked:x.includes(n),onChange:()=>(n=>{x.includes(n)?p(x.filter((e=>e!==n))):p([...x,n])})(n),style:{width:"20px",height:"20px"}}),(0,c.jsx)("label",{children:n})]},e))),y[t].book&&"Klener"===y[t].book[0]?null:y[t].description&&""!==y[t].description[0]&&(0,c.jsx)(r.Id,{onClick:()=>{e(!0),document.body.style.overflow="hidden"},children:"Show Description"})]}),g<=y.length?(0,c.jsxs)(r.GB,{children:[(0,c.jsx)(a,{time:k,setTime:Z}),(0,c.jsxs)(r.vw,{children:[(0,c.jsx)(r.zx,{onClick:()=>{f(!1),m(g+1);let n=0;y[t].correctAnswers.forEach((e=>{x.includes(e)&&(w((n=>[...n,{topic:y[t].topic,book:y[t].book,answers:y[t].answers,question:y[t].question,correctAnswers:y[t].correctAnswers}])),n++)})),u(h+(n===y[t].correctAnswers.length?1:0)),t<y.length-1?l(t+1):g===y.length&&j((0,d.WC)({myCorrectAnswers:b})),p([])},children:"Next Question"}),(0,c.jsxs)("span",{style:{width:"67px"},children:[g," \u0438\u0437 ",y.length]}),(0,c.jsx)(r.zx,{onClick:()=>{f((n=>!n))},children:"Check"})]})]}):(0,c.jsxs)(r.Ji,{children:[(0,c.jsx)("h3",{children:"Correct answers - ".concat(h," \u0438\u0437 ").concat(y.length)}),(0,c.jsx)("h3",{children:"Testing time ".concat(k.minutes," : ").concat(k.seconds)}),(0,c.jsx)(r.Zi,{to:"/AnsweredQuestions",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0440\u0430\u0437\u0431\u043e\u0440\u0443 \u0442\u0435\u0441\u0442\u043e\u0432"}),(0,c.jsx)(r.Zi,{onClick:()=>{j((0,d.$1)({}))},to:"/",children:"\u041d\u0430 \u0413\u043b\u0430\u0432\u043d\u0443\u044e"})]}),(0,c.jsx)(s.Z,{active:n,setActive:e,closeModal:()=>{e(!1),document.body.style.overflow="auto"},props:y[t]})]})}},1771:(n,e,t)=>{t.d(e,{A0:()=>w,GB:()=>Z,Id:()=>P,Ji:()=>f,N1:()=>m,OY:()=>y,R9:()=>b,Zi:()=>k,vw:()=>j,zx:()=>v});var i,o,r,s,c,a,d,l,x,p,h=t(168),u=t(7924),g=t(1087);const m=u.ZP.div(i||(i=(0,h.Z)(["\n  /* background-color: #abaad8; */\n"]))),b=u.ZP.h2(o||(o=(0,h.Z)(["\n  margin-bottom: 40px;\n"]))),w=u.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-bottom: 20px;\n"]))),v=u.ZP.button(s||(s=(0,h.Z)(["\n  /* margin-bottom: 15px; */\n  color: black;\n  font-weight: 500;\n  background-color: var(--iq-primary);\n  width: 150px;\n  height: 50px;\n  border-radius: 10px;\n  transition: background-color 0.3s ease;\n  &:active {\n    background: var(--iq-secondary);\n  }\n"]))),f=u.ZP.div(c||(c=(0,h.Z)(["\n  margin-top: 50px;\n  margin-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n"]))),k=(0,u.ZP)(g.rU)(a||(a=(0,h.Z)(["\n  border-radius: 4px;\n  text-decoration: none;\n  &:hover {\n    background: var(--iq-primary);\n  }\n"]))),Z=u.ZP.div(d||(d=(0,h.Z)(["\n  gap: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  /* width: 435px; */\n  margin-bottom: 30px;\n  margin: auto;\n\n  //Tablet\n  @media screen and (max-width: 1200px) {\n    font-size: var(--font-size-tablet);\n  }\n\n  //Mobil\n  @media screen and (max-width: 767px) {\n    font-size: var(--font-size-mobile);\n    display: flex;\n    flex-direction: column;\n    width: 270px;\n    margin-bottom: 200px;\n  }\n"]))),j=u.ZP.div(l||(l=(0,h.Z)(["\n  /* flex-direction: column; */\n  display: flex;\n  gap: 20px;\n  align-items: center;\n\n  //mobil\n  @media screen and (max-width: 767px) {\n    margin-bottom: 20px;\n    display: flex;\n    flex-direction: column;\n  }\n"]))),y=u.ZP.div(x||(x=(0,h.Z)(["\n  min-height: 400px;\n  margin-bottom: 20px;\n"]))),P=u.ZP.button(p||(p=(0,h.Z)(["\n  color: black;\n  font-weight: 500;\n  background-color: var(--iq-primary);\n  width: 200px;\n  height: 30px;\n  border-radius: 10px;\n  transition: background-color 0.3s ease;\n  display: block;\n  margin: auto;\n"])))},2658:(n,e,t)=>{t.d(e,{Z:()=>w});t(2791);var i,o,r,s,c,a,d=t(168),l=t(7924);const x=l.ZP.div(i||(i=(0,d.Z)(["\n  height: 100vh;\n  width: 100vw;\n  background-color: rgba(0, 0, 0, 0.7);\n  backdrop-filter: blur(5px);\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  overflow: hidden;\n"]))),p=l.ZP.div(o||(o=(0,d.Z)(["\n  position: relative;\n  padding: 60px 15px 30px 15px;\n  border-radius: 12px;\n  background-color: var(--iq-secondary);\n  width: 75%;\n  height: 700px;\n  position: fixed; /* \u0424\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043f\u043e\u0437\u0438\u0446\u0438\u044f */\n  overflow: auto; /* \u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0443 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 */\n  @media screen and (max-width: 767px) {\n    padding: 60px 30px 30px 30px;\n    height: 550px;\n  }\n"]))),h=l.ZP.button(r||(r=(0,d.Z)(["\n  position: absolute;\n  background: transparent;\n  border: none;\n  right: 14px;\n  top: 14px;\n  cursor: pointer;\n\n  svg {\n    stroke-width: 1.5px;\n    stroke: var(--iq-cross);\n    width: 20px;\n    height: 20px;\n  }\n"]))),u=l.ZP.h2(s||(s=(0,d.Z)(["\n  text-align: center;\n  margin-bottom: 15px;\n"]))),g=l.ZP.p(c||(c=(0,d.Z)(["\n  margin-bottom: 40px;\n"]))),m=l.ZP.img(a||(a=(0,d.Z)(["\n  // Mobil\n  @media screen and (max-width: 767px) {\n    width: 235px;\n    height: 170px;\n  }\n"])));var b=t(184);const w=n=>{let{active:e,setActive:t,closeModal:i,props:o}=n;return(0,b.jsx)(b.Fragment,{children:e&&(0,b.jsx)(x,{onClick:()=>i(!1),children:(0,b.jsxs)(p,{onClick:n=>n.stopPropagation(),children:[(0,b.jsx)(h,{type:"button",onClick:i,children:(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"black",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,b.jsx)("path",{d:"M6 18L18 6M6 6l12 12"})})}),(0,b.jsx)(u,{children:o.question}),(0,b.jsx)(g,{children:o.description}),o.img[0]&&(0,b.jsx)(m,{src:o.img,alt:o.question})]})})})}}}]);
//# sourceMappingURL=617.be784f1a.chunk.js.map