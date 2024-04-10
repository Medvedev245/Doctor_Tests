"use strict";(self.webpackChunkTest_for_doctors=self.webpackChunkTest_for_doctors||[]).push([[91],{6968:(e,t,a)=>{a.d(t,{Z:()=>F});var o=a(7462),n=a(3366),r=a(2791),i=a(3733),s=a(838),l=a(1402),c=a(9703),d=a(4657);function p(e){return(0,d.ZP)("MuiPagination",e)}(0,c.Z)("MuiPagination",["root","ul","outlined","text"]);function u(e){let{controlled:t,default:a,name:o,state:n="value"}=e;const{current:i}=r.useRef(void 0!==t),[s,l]=r.useState(a);return[i?t:s,r.useCallback((e=>{i||l(e)}),[])]}const m=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var v=a(4131),h=a(5402);function g(e){return(0,d.ZP)("MuiPaginationItem",e)}const f=(0,c.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon","colorPrimary","colorSecondary"]);var b=a(3768),y=a(4036),x=a(6189),Z=a(184);const w=(0,x.Z)((0,Z.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),C=(0,x.Z)((0,Z.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),k=(0,x.Z)((0,Z.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),S=(0,x.Z)((0,Z.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");var P=a(5951);const R=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],N=(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t["size".concat((0,y.Z)(a.size))],"text"===a.variant&&t["text".concat((0,y.Z)(a.color))],"outlined"===a.variant&&t["outlined".concat((0,y.Z)(a.color))],"rounded"===a.shape&&t.rounded,"page"===a.type&&t.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&t.ellipsis,("previous"===a.type||"next"===a.type)&&t.previousNext,("first"===a.type||"last"===a.type)&&t.firstLast]},z=(0,P.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:N})((e=>{let{theme:t,ownerState:a}=e;return(0,o.Z)({},t.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto",["&.".concat(f.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity}},"small"===a.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===a.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:t.typography.pxToRem(15)})})),M=(0,P.ZP)(b.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:N})((e=>{let{theme:t,ownerState:a}=e;return(0,o.Z)({},t.typography.body2,{borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,["&.".concat(f.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(f.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},transition:t.transitions.create(["color","background-color"],{duration:t.transitions.duration.short}),"&:hover":{backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(f.selected)]:{backgroundColor:(t.vars||t).palette.action.selected,"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.selectedChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,v.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(t.vars||t).palette.action.selected}},["&.".concat(f.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.action.selectedChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,v.Fq)(t.palette.action.selected,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)},["&.".concat(f.disabled)]:{opacity:1,color:(t.vars||t).palette.action.disabled,backgroundColor:(t.vars||t).palette.action.selected}}},"small"===a.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===a.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:t.typography.pxToRem(15)},"rounded"===a.shape&&{borderRadius:(t.vars||t).shape.borderRadius})}),(e=>{let{theme:t,ownerState:a}=e;return(0,o.Z)({},"text"===a.variant&&{["&.".concat(f.selected)]:(0,o.Z)({},"standard"!==a.color&&{color:(t.vars||t).palette[a.color].contrastText,backgroundColor:(t.vars||t).palette[a.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[a.color].main}},["&.".concat(f.focusVisible)]:{backgroundColor:(t.vars||t).palette[a.color].dark}},{["&.".concat(f.disabled)]:{color:(t.vars||t).palette.action.disabled}})},"outlined"===a.variant&&{border:t.vars?"1px solid rgba(".concat(t.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),["&.".concat(f.selected)]:(0,o.Z)({},"standard"!==a.color&&{color:(t.vars||t).palette[a.color].main,border:"1px solid ".concat(t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / 0.5)"):(0,v.Fq)(t.palette[a.color].main,.5)),backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / ").concat(t.vars.palette.action.activatedOpacity,")"):(0,v.Fq)(t.palette[a.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / calc(").concat(t.vars.palette.action.activatedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,v.Fq)(t.palette[a.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(f.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / calc(").concat(t.vars.palette.action.activatedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,v.Fq)(t.palette[a.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}},{["&.".concat(f.disabled)]:{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}})})})),O=(0,P.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(e,t)=>t.icon})((e=>{let{theme:t,ownerState:a}=e;return(0,o.Z)({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},"small"===a.size&&{fontSize:t.typography.pxToRem(18)},"large"===a.size&&{fontSize:t.typography.pxToRem(22)})})),B=r.forwardRef((function(e,t){const a=(0,l.Z)({props:e,name:"MuiPaginationItem"}),{className:r,color:c="standard",component:d,components:p={},disabled:u=!1,page:m,selected:v=!1,shape:f="circular",size:b="medium",slots:x={},type:P="page",variant:N="text"}=a,B=(0,n.Z)(a,R),L=(0,o.Z)({},a,{color:c,disabled:u,selected:v,shape:f,size:b,type:P,variant:N}),j=(0,h.V)(),A=(e=>{const{classes:t,color:a,disabled:o,selected:n,size:r,shape:i,type:l,variant:c}=e,d={root:["root","size".concat((0,y.Z)(r)),c,i,"standard"!==a&&"color".concat((0,y.Z)(a)),"standard"!==a&&"".concat(c).concat((0,y.Z)(a)),o&&"disabled",n&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[l]],icon:["icon"]};return(0,s.Z)(d,g,t)})(L),I=(j?{previous:x.next||p.next||S,next:x.previous||p.previous||k,last:x.first||p.first||w,first:x.last||p.last||C}:{previous:x.previous||p.previous||k,next:x.next||p.next||S,first:x.first||p.first||w,last:x.last||p.last||C})[P];return"start-ellipsis"===P||"end-ellipsis"===P?(0,Z.jsx)(z,{ref:t,ownerState:L,className:(0,i.Z)(A.root,r),children:"\u2026"}):(0,Z.jsxs)(M,(0,o.Z)({ref:t,ownerState:L,component:d,disabled:u,className:(0,i.Z)(A.root,r)},B,{children:["page"===P&&m,I?(0,Z.jsx)(O,{as:I,ownerState:L,className:A.icon}):null]}))})),L=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],j=(0,P.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant]]}})({}),A=(0,P.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(e,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function I(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}const F=r.forwardRef((function(e,t){const a=(0,l.Z)({props:e,name:"MuiPagination"}),{boundaryCount:r=1,className:c,color:d="standard",count:v=1,defaultPage:h=1,disabled:g=!1,getItemAriaLabel:f=I,hideNextButton:b=!1,hidePrevButton:y=!1,renderItem:x=(e=>(0,Z.jsx)(B,(0,o.Z)({},e))),shape:w="circular",showFirstButton:C=!1,showLastButton:k=!1,siblingCount:S=1,size:P="medium",variant:R="text"}=a,N=(0,n.Z)(a,L),{items:z}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{boundaryCount:t=1,componentName:a="usePagination",count:r=1,defaultPage:i=1,disabled:s=!1,hideNextButton:l=!1,hidePrevButton:c=!1,onChange:d,page:p,showFirstButton:v=!1,showLastButton:h=!1,siblingCount:g=1}=e,f=(0,n.Z)(e,m),[b,y]=u({controlled:p,default:i,name:a,state:"page"}),x=(e,t)=>{p||y(t),d&&d(e,t)},Z=(e,t)=>{const a=t-e+1;return Array.from({length:a},((t,a)=>e+a))},w=Z(1,Math.min(t,r)),C=Z(Math.max(r-t+1,t+1),r),k=Math.max(Math.min(b-g,r-t-2*g-1),t+2),S=Math.min(Math.max(b+g,t+2*g+2),C.length>0?C[0]-2:r-1),P=[...v?["first"]:[],...c?[]:["previous"],...w,...k>t+2?["start-ellipsis"]:t+1<r-t?[t+1]:[],...Z(k,S),...S<r-t-1?["end-ellipsis"]:r-t>t?[r-t]:[],...C,...l?[]:["next"],...h?["last"]:[]],R=e=>{switch(e){case"first":return 1;case"previous":return b-1;case"next":return b+1;case"last":return r;default:return null}},N=P.map((e=>"number"===typeof e?{onClick:t=>{x(t,e)},type:"page",page:e,selected:e===b,disabled:s,"aria-current":e===b?"true":void 0}:{onClick:t=>{x(t,R(e))},type:e,page:R(e),selected:!1,disabled:s||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?b>=r:b<=1)}));return(0,o.Z)({items:N},f)}((0,o.Z)({},a,{componentName:"Pagination"})),M=(0,o.Z)({},a,{boundaryCount:r,color:d,count:v,defaultPage:h,disabled:g,getItemAriaLabel:f,hideNextButton:b,hidePrevButton:y,renderItem:x,shape:w,showFirstButton:C,showLastButton:k,siblingCount:S,size:P,variant:R}),O=(e=>{const{classes:t,variant:a}=e,o={root:["root",a],ul:["ul"]};return(0,s.Z)(o,p,t)})(M);return(0,Z.jsx)(j,(0,o.Z)({"aria-label":"pagination navigation",className:(0,i.Z)(O.root,c),ownerState:M,ref:t},N,{children:(0,Z.jsx)(A,{className:O.ul,ownerState:M,children:z.map(((e,t)=>(0,Z.jsx)("li",{children:x((0,o.Z)({},e,{color:d,"aria-label":f(e.type,e.page,e.selected),shape:w,size:P,variant:R}))},t)))})}))}))},5313:(e,t,a)=>{a.d(t,{Z:()=>_});var o=a(3366),n=a(7462),r=a(2791),i=a(3733),s=a(8736),l=a(4657),c=a(838),d=a(6236),p=a(8809),u=a(104);const m=["ownerState"],v=["variants"],h=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function g(e){return"string"===typeof e&&e.charCodeAt(0)>96}function f(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}const b=(0,p.Z)(),y=e=>e?e.charAt(0).toLowerCase()+e.slice(1):e;function x(e){let{defaultTheme:t,theme:a,themeId:o}=e;return n=a,0===Object.keys(n).length?t:a[o]||a;var n}function Z(e){return e?(t,a)=>a[e]:null}function w(e,t){let{ownerState:a}=t,r=(0,o.Z)(t,m);const i="function"===typeof e?e((0,n.Z)({ownerState:a},r)):e;if(Array.isArray(i))return i.flatMap((e=>w(e,(0,n.Z)({ownerState:a},r))));if(i&&"object"===typeof i&&Array.isArray(i.variants)){const{variants:e=[]}=i;let t=(0,o.Z)(i,v);return e.forEach((e=>{let o=!0;"function"===typeof e.props?o=e.props((0,n.Z)({ownerState:a},r,a)):Object.keys(e.props).forEach((t=>{(null==a?void 0:a[t])!==e.props[t]&&r[t]!==e.props[t]&&(o=!1)})),o&&(Array.isArray(t)||(t=[t]),t.push("function"===typeof e.style?e.style((0,n.Z)({ownerState:a},r,a)):e.style))})),t}return i}const C=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:a=b,rootShouldForwardProp:r=f,slotShouldForwardProp:i=f}=e,l=e=>(0,u.Z)((0,n.Z)({},e,{theme:x((0,n.Z)({},e,{defaultTheme:a,themeId:t}))}));return l.__mui_systemSx=!0,function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,d.internal_processStyles)(e,(e=>e.filter((e=>!(null!=e&&e.__mui_systemSx)))));const{name:p,slot:u,skipVariantsResolver:m,skipSx:v,overridesResolver:b=Z(y(u))}=c,C=(0,o.Z)(c,h),k=void 0!==m?m:u&&"Root"!==u&&"root"!==u||!1,S=v||!1;let P;let R=f;"Root"===u||"root"===u?R=r:u?R=i:g(e)&&(R=void 0);const N=(0,d.default)(e,(0,n.Z)({shouldForwardProp:R,label:P},C)),z=e=>"function"===typeof e&&e.__emotion_real!==e||(0,s.P)(e)?o=>w(e,(0,n.Z)({},o,{theme:x({theme:o.theme,defaultTheme:a,themeId:t})})):e,M=function(o){let r=z(o);for(var i=arguments.length,s=new Array(i>1?i-1:0),c=1;c<i;c++)s[c-1]=arguments[c];const d=s?s.map(z):[];p&&b&&d.push((e=>{const o=x((0,n.Z)({},e,{defaultTheme:a,themeId:t}));if(!o.components||!o.components[p]||!o.components[p].styleOverrides)return null;const r=o.components[p].styleOverrides,i={};return Object.entries(r).forEach((t=>{let[a,r]=t;i[a]=w(r,(0,n.Z)({},e,{theme:o}))})),b(e,i)})),p&&!k&&d.push((e=>{var o;const r=x((0,n.Z)({},e,{defaultTheme:a,themeId:t}));return w({variants:null==r||null==(o=r.components)||null==(o=o[p])?void 0:o.variants},(0,n.Z)({},e,{theme:r}))})),S||d.push(l);const u=d.length-s.length;if(Array.isArray(o)&&u>0){const e=new Array(u).fill("");r=[...o,...e],r.raw=[...o.raw,...e]}const m=N(r,...d);return e.muiName&&(m.muiName=e.muiName),m};return N.withConfig&&(M.withConfig=N.withConfig),M}}(),k=C;var S=a(3801),P=a(8519),R=a(1184),N=a(5682),z=a(184);const M=["component","direction","spacing","divider","children","className","useFlexGap"],O=(0,p.Z)(),B=k("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function L(e){return(0,S.Z)({props:e,name:"MuiStack",defaultTheme:O})}function j(e,t){const a=r.Children.toArray(e).filter(Boolean);return a.reduce(((e,o,n)=>(e.push(o),n<a.length-1&&e.push(r.cloneElement(t,{key:"separator-".concat(n)})),e)),[])}const A=e=>{let{ownerState:t,theme:a}=e,o=(0,n.Z)({display:"flex",flexDirection:"column"},(0,R.k9)({theme:a},(0,R.P$)({values:t.direction,breakpoints:a.breakpoints.values}),(e=>({flexDirection:e}))));if(t.spacing){const e=(0,N.hB)(a),n=Object.keys(a.breakpoints.values).reduce(((e,a)=>(("object"===typeof t.spacing&&null!=t.spacing[a]||"object"===typeof t.direction&&null!=t.direction[a])&&(e[a]=!0),e)),{}),r=(0,R.P$)({values:t.direction,base:n}),i=(0,R.P$)({values:t.spacing,base:n});"object"===typeof r&&Object.keys(r).forEach(((e,t,a)=>{if(!r[e]){const o=t>0?r[a[t-1]]:"column";r[e]=o}}));const l=(a,o)=>{return t.useFlexGap?{gap:(0,N.NA)(e,a)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{["margin".concat((n=o?r[o]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[n]))]:(0,N.NA)(e,a)}};var n};o=(0,s.Z)(o,(0,R.k9)({theme:a},i,l))}return o=(0,R.dt)(a.breakpoints,o),o};var I=a(5951),F=a(1402);const T=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{createStyledComponent:t=B,useThemeProps:a=L,componentName:s="MuiStack"}=e,d=()=>(0,c.Z)({root:["root"]},(e=>(0,l.ZP)(s,e)),{}),p=t(A),u=r.forwardRef((function(e,t){const r=a(e),s=(0,P.Z)(r),{component:l="div",direction:c="column",spacing:u=0,divider:m,children:v,className:h,useFlexGap:g=!1}=s,f=(0,o.Z)(s,M),b={direction:c,spacing:u,useFlexGap:g},y=d();return(0,z.jsx)(p,(0,n.Z)({as:l,ownerState:b,ref:t,className:(0,i.Z)(y.root,h)},f,{children:m?j(v,m):v}))}));return u}({createStyledComponent:(0,I.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,F.Z)({props:e,name:"MuiStack"})}),_=T}}]);
//# sourceMappingURL=91.0fb0f6e1.chunk.js.map