"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[869],{228:function(n,t,e){function r(n,t,e,r,a,c,u){try{var o=n[c](u),i=o.value}catch(s){return void e(s)}o.done?t(i):Promise.resolve(i).then(r,a)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(a,c){var u=n.apply(t,e);function o(n){r(u,a,c,o,i,"next",n)}function i(n){r(u,a,c,o,i,"throw",n)}o(void 0)}))}}e.d(t,{fT:function(){return l},ZP:function(){return p},Ny:function(){return h},yJ:function(){return v},qF:function(){return d}});var c=e(757),u=e.n(c),o="a80320dfafec72dcbb6280cf373b1a2a",i="https://api.themoviedb.org/3/";function s(){return(s=a(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"trending/movie/week?api_key=").concat(o));case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var f={fetchDataWeek:function(){return s.apply(this,arguments)}},p=f,h=function(){var n=a(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=a(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=a(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=a(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(i,"search/movie?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},869:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,a=e(885),c=e(791),u=e(731),o=e(689),i=e(168),s=e(444).ZP.input(r||(r=(0,i.Z)(["\n  width: 300px;\n  margin-top: 10px;\n"]))),f=e(184),p=function(n){var t=n.onSubmit,e=(0,c.useState)(""),r=(0,a.Z)(e,2),u=r[0],o=r[1];return(0,f.jsxs)("form",{onSubmit:function(n){n.preventDefault(),""!==u.trim()&&(t(u),o(""))},children:[(0,f.jsx)(s,{placeholder:"Batman",type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:u,onChange:function(n){o(n.target.value)}}),(0,f.jsx)("button",{type:"submit",children:"Search"})]})},h=e(228),l=function(n){var t=n.title,e=n.id,r=(0,o.TH)();return(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{to:"/movies/".concat(e),state:{from:r},children:t})})},v=function(){var n,t=(0,c.useState)([]),e=(0,a.Z)(t,2),r=e[0],i=e[1],s=(0,u.lr)(),v=(0,a.Z)(s,2),d=v[0],m=v[1],x=null!==(n=d.get("query"))&&void 0!==n?n:"";(0,c.useEffect)((function(){x&&(0,h.qF)(x).then((function(n){var t=n.results;i(t)}))}),[x]);return(0,f.jsxs)("div",{children:[(0,f.jsx)(p,{onSubmit:function(n){m({query:n}),i([])}}),(0,f.jsxs)("ul",{children:[r.length>0&&r.map((function(n){var t=n.original_title,e=n.id;return(0,f.jsx)(l,{title:t,id:e},e)})),(0,f.jsx)(c.Suspense,{children:(0,f.jsx)(o.j3,{})})]})]})}}}]);
//# sourceMappingURL=869.33a8239d.chunk.js.map