(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[5],{403:function(e,t,c){"use strict";c.r(t);var n=c(158);var r=c(1),s=c(0),i=c.n(s),j=c(14),o=c(197),u=function(){var e=Object(j.c)(),t=Object(j.d)((function(e){return e.chat.status}));return Object(s.useEffect)((function(){return e(Object(o.c)()),function(){e(Object(o.d)())}}),[]),Object(r.jsxs)("div",{children:["error"===t&&Object(r.jsx)("div",{children:"Some error occured. Please refresh the page"}),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(a,{}),Object(r.jsx)(l,{})]})]})},a=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=Object(j.d)((function(e){return e.chat.messages})),c=Object(s.useRef)(null),i=Object(s.useState)(!0),o=Object(n.a)(i,2),u=o[0],a=o[1];return Object(s.useEffect)((function(){var e;u&&(null===(e=c.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[t]),Object(r.jsxs)("div",{style:{height:"400px",overflowY:"auto"},onScroll:function(e){var t=e.currentTarget;Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<300?!u&&a(!0):u&&a(!1)},children:[t.map((function(e,t){return Object(r.jsx)(b,{message:e},e.id)})),Object(r.jsx)("div",{ref:c})]})},b=i.a.memo((function(e){var t=e.message;return console.log(">>>>>>Message"),Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:t.photo,style:{width:"30px"}})," ",Object(r.jsx)("b",{children:t.userName}),Object(r.jsx)("br",{}),t.message,Object(r.jsx)("hr",{})]})})),l=function(){var e=Object(s.useState)(""),t=Object(n.a)(e,2),c=t[0],i=t[1],u=Object(j.c)(),a=Object(j.d)((function(e){return e.chat.status}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("textarea",{onChange:function(e){return i(e.currentTarget.value)},value:c})}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{disabled:"ready"!==a,onClick:function(){c&&(u(Object(o.b)(c)),i(""))},children:"Send"})})]})};t.default=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(u,{})})}}}]);
//# sourceMappingURL=5.745bad65.chunk.js.map