(this["webpackJsonpindecision-app"]=this["webpackJsonpindecision-app"]||[]).push([[0],{13:function(e,t,c){},19:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(5),s=c.n(i),l=(c(13),c(4)),d=c(2),r=c(3),o=Object(r.b)({name:"items",initialState:[{id:1,text:"Moe's"},{id:2,text:"Chipotle"},{id:3,text:"Chick-fil-a"}],reducers:{addItem:function(e,t){var c=t.payload,n={id:Object(r.c)(),text:c.text};e.push(n)},deleteItem:function(e,t){var c=t.payload;return e.filter((function(e){return e.id!==c}))}}}),b=o.actions,j=b.addItem,m=b.deleteItem,u=function(e){return e.items},x=o.reducer,h=c(1),O=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),s=Object(l.a)(i,2),r=s[0],o=s[1],b=Object(d.b)(),m=Object(n.useRef)(null);Object(n.useEffect)((function(){m.current.focus()}));return Object(h.jsxs)("form",{className:"form-inline my-3 text-center",onSubmit:function(e){e.preventDefault(),c?(o(!1),a(""),b(j({text:c}))):o(!0)},children:[Object(h.jsx)("input",{className:"form-control mb-2",type:"text",placeholder:"Add item",value:c,onChange:function(e){return a(e.target.value)},ref:m}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary mb-2 d-inline-block mx-5",children:"Submit"}),r&&Object(h.jsx)("p",{children:"Field must be completed"})]})},f=function e(t){var c=t.id,n=t.text,a=Object(d.b)();return Object(h.jsx)("li",{className:"list-group-item",children:Object(h.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(h.jsx)("span",{className:"d-flex align-items-center",children:n}),Object(h.jsx)("button",{className:"btn btn-danger",onClick:function(){return a(m(c))},children:"Delete"})]})},e.id)},p=function(){var e=Object(d.c)(u);return Object(h.jsx)("ul",{className:"list-group",children:e.length>0?e.map((function(e){return Object(h.jsx)(f,{id:e.id,text:e.text})})):Object(h.jsx)("h4",{className:"text-center",children:"Need more choices"})})},v=function(e){var t=e.pick,c=e.randomItem,n=e.disable;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{onClick:c,disabled:n,type:"button",className:"btn btn-outline-dark btn-sm","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Random"}),Object(h.jsx)("div",{className:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(h.jsx)("div",{className:"modal-dialog modal-sm",children:Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsx)("div",{className:"modal-header",children:Object(h.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Your Choice is..."})}),Object(h.jsx)("div",{className:"modal-body",children:Object(h.jsx)("h3",{className:"text-center",children:t})}),Object(h.jsx)("div",{className:"modal-footer",children:Object(h.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"})})]})})})]})};var N=function(){var e=Object(d.c)(u),t=Object(n.useState)(""),c=Object(l.a)(t,2),a=c[0],i=c[1];return Object(h.jsxs)("div",{className:"container bg-white p-4 mt-5",style:{width:450},children:[Object(h.jsxs)("div",{className:"container d-flex justify-content-between",children:[Object(h.jsx)("h3",{children:"Find My Decision"}),Object(h.jsx)(v,{randomItem:function(){var t=Math.floor(Math.random()*e.length);i(e[t].text)},disable:0===e.length,pick:a})]}),Object(h.jsx)(O,{}),Object(h.jsx)(p,{})]})},g=Object(r.a)({reducer:{items:x}});s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(d.a,{store:g,children:Object(h.jsx)(N,{})})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.838a854b.chunk.js.map