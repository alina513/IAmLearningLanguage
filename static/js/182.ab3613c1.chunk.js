"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[182],{4182:(e,n,a)=>{a.r(n),a.d(n,{default:()=>E});var t=a(5043),r=a(3003),l=a(4702),i=a(791),s=a(3611);const o=(0,l.zD)("teachers/fetchTeachers",(async()=>{try{const e=(0,s.KR)(i.O,"/");return(await(0,s.Jt)(e)).val()}catch(e){throw console.error("Loading error",e.message),e}}));var c=a(6757),d=a(9791),h=a(3712),u=a(8167),g=a(579);const p=e=>{let{teachers:n}=e;return(0,g.jsx)("ul",{children:null===n||void 0===n?void 0:n.map((e=>(0,g.jsx)(u.Z,{value:e},(0,h.Ak)())))})};var x,v,m,f,j=a(7528),w=a(7545);const A=w.Ay.form(x||(x=(0,j.A)(["\n  @media (min-width: 769px) {\n    display: flex;\n    gap: 20px;\n    align-items: center;\n  }\n"]))),k=w.Ay.div(v||(v=(0,j.A)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),y=w.Ay.select(m||(m=(0,j.A)(["\n  color: #121417;\n  border: none;\n  outline: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 111%;\n  margin-bottom: 10px;\n  & option {\n    color: #8a8a89;\n    font-size: 8px;\n    font-weight: 400;\n    line-height: 111%;\n  }\n  @media (min-width: 769px) {\n    font-size: 14px;\n    margin-bottom: 0px;\n  }\n"]))),C=w.Ay.label(f||(f=(0,j.A)(["\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 129%;\n  color: #8a8a89;\n  padding-left: 5px;\n  @media (min-width: 769px) {\n    font-size: 14px;\n  }\n"])));var b=a(4111);const S=["","French","English","German","Ukrainian","Polish","Italian","Spanish","Mandarin Chinese","Korean"],z=["","A1 Beginner","A2 Elementary","B1 Intermediate","B2 Upper-Intermediate","C1 Advanced","C2 Proficient"],_=["",10,20,30,40];function L(){const[e,n]=(0,t.useState)(),[a,l]=(0,t.useState)(),[i,s]=(0,t.useState)(),o=()=>({languages:e,levels:a,prices:i}),c=(0,r.wA)();return(0,g.jsxs)(A,{children:[(0,g.jsxs)(k,{children:[(0,g.jsx)(C,{children:"Languages"}),(0,g.jsx)(y,{id:"languages",name:"languages",onChange:e=>(n(e.target.value),c((0,b.U)({...o(),languages:e.target.value}))),value:e,children:S.map((e=>(0,g.jsx)("option",{value:e,children:e},(0,h.Ak)())))})]}),(0,g.jsxs)(k,{children:[(0,g.jsx)(C,{children:"Level of knowledge"}),(0,g.jsx)(y,{id:"level",name:"level",onChange:e=>(l(e.target.value),c((0,b.U)({...o(),levels:e.target.value}))),value:a,children:z.map((e=>(0,g.jsx)("option",{value:e,children:e},(0,h.Ak)())))})]}),(0,g.jsxs)(k,{children:[(0,g.jsx)(C,{children:"Price"}),(0,g.jsx)(y,{id:"price",name:"price",onChange:e=>(s(e.target.value),c((0,b.U)({...o(),prices:e.target.value}))),value:i,children:_.map((e=>(0,g.jsx)("option",{value:e,children:e},(0,h.Ak)())))})]})]})}const U=()=>{const e=(0,r.d4)(c.dx),[n,a]=(0,t.useState)([]),[l,i]=(0,t.useState)(1),[s]=(0,t.useState)(4),h=(0,r.wA)();(0,t.useEffect)((()=>{(async()=>{try{const e=(await h(o())).payload;a(e)}catch(e){console.error("Loading error",e.message)}})()}),[h]);const u=(l-1)*s+s,x=null===n||void 0===n?void 0:n.slice(0,u),v=(null===n||void 0===n?void 0:n.length)>u,{languages:m,levels:f,prices:j}=e,w=null===n||void 0===n?void 0:n.filter((e=>{if(!m&&!f&&!j)return!0;const n=!m||e.languages.includes(m),a=!f||e.levels.includes(f),t=!j||e.price_per_hour<=j;return n&&a&&t}));return(0,g.jsxs)(d.mO,{children:[(0,g.jsx)(L,{}),""===e.languages&&""===e.levels&&""===e.prices&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p,{teachers:x}),v&&(0,g.jsx)(d.eq,{onClick:()=>i(l+1),children:"Load more"})]}),""!==e.languages||""!==e.levels||""!==e.prices?(0,g.jsx)(g.Fragment,{children:0===w.length?(0,g.jsx)(d.EY,{children:"There are no teachers with such data"}):(0,g.jsx)(p,{teachers:w})}):null]})};function E(){return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(U,{})})}}}]);
//# sourceMappingURL=182.ab3613c1.chunk.js.map