"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[3],{3:function(n,e,t){t.r(e);var r=t(433),o=t(439),c=t(791),s=t(420),i=t(771),u=t(87),a=t(184);e.default=function(){var n=(0,c.useState)(0),e=(0,o.Z)(n,2),t=e[0],l=e[1],h=(0,c.useState)([]),d=(0,o.Z)(h,2),p=d[0],x=d[1],f=(0,c.useState)(0),g=(0,o.Z)(f,2),w=g[0],Z=g[1],b=(0,c.useState)(1),m=(0,o.Z)(b,2),k=m[0],j=m[1],v=(0,c.useState)([]),A=(0,o.Z)(v,2),y=A[0],S=A[1],q=(0,s.I0)(),C=(0,s.v9)((function(n){return n.testsReducer.questions}));return(0,a.jsxs)(i.N1,{children:[(0,a.jsx)(i.R9,{children:C[t].question}),C[t].answers.map((function(n,e){return(0,a.jsxs)(i.A0,{children:[(0,a.jsx)("input",{type:"checkbox",checked:p.includes(n),onChange:function(){return function(n){p.includes(n)?x(p.filter((function(e){return e!==n}))):x([].concat((0,r.Z)(p),[n]))}(n)},style:{width:"20px",height:"20px"}}),(0,a.jsx)("label",{children:n})]},e)})),k<=C.length?(0,a.jsxs)("div",{children:[(0,a.jsx)(i.zx,{onClick:function(){j(k+1);var n=0;C[t].correctAnswers.forEach((function(e){p.includes(e)&&(S((function(n){return[].concat((0,r.Z)(n),[{topic:C[t].topic,book:C[t].book,answers:C[t].answers,question:C[t].question,correctAnswers:C[t].correctAnswers}])})),n++)})),Z(w+(n===C[t].correctAnswers.length?1:0)),t<C.length-1?l(t+1):(console.log(y),console.log(k),console.log(C.length+1),k===C.length&&q({type:"ADD_RIGHTQUESTIONS",payload:{myCorrectAnswers:y}}),alert("\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 - ".concat(w," \u0438\u0437 ").concat(C.length))),x([])},children:"Next Question"}),(0,a.jsxs)("span",{children:[k," \u0438\u0437 ",C.length]})]}):(0,a.jsxs)("div",{children:[(0,a.jsx)(u.rU,{to:"/AnsweredQuestions",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0440\u043e\u0437\u0431\u043e\u0440\u0443 \u0442\u0435\u0441\u0442\u043e\u0432"}),(0,a.jsx)(u.rU,{to:"/",children:"\u041d\u0430 \u0413\u043b\u0430\u0432\u043d\u0443\u044e"})]})]})}},771:function(n,e,t){t.d(e,{A0:function(){return h},N1:function(){return a},R9:function(){return l},zx:function(){return d}});var r,o,c,s,i=t(168),u=t(924),a=u.ZP.div(r||(r=(0,i.Z)(["\n  /* background-color: #abaad8; */\n"]))),l=u.ZP.h2(o||(o=(0,i.Z)(["\n  margin-bottom: 40px;\n"]))),h=u.ZP.div(c||(c=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n"]))),d=u.ZP.button(s||(s=(0,i.Z)(["\n  background-color: var(--iq-primary);\n  width: 150px;\n  height: 50px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n"])))}}]);
//# sourceMappingURL=3.d991a3d3.chunk.js.map