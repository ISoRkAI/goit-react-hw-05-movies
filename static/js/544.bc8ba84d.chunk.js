"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{253:function(t,e,n){n.d(e,{fT:function(){return i},ZP:function(){return r},Ny:function(){return o},yJ:function(){return u},qF:function(){return a}});var c="a80320dfafec72dcbb6280cf373b1a2a";var r={fetchDataWeek:function(){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(c)).then((function(t){return t.json()}))}},o=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c)).then((function(t){return t.json()}))},i=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c)).then((function(t){return t.json()}))},u=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c)).then((function(t){return t.json()}))},a=function(t){return console.log(t),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(t)).then((function(t){return t.json()}))}},544:function(t,e,n){n.r(e);var c=n(885),r=n(253),o=n(791),i=n(689),u=n(731),a=n(184);e.default=function(){var t=(0,o.useState)([]),e=(0,c.Z)(t,2),n=e[0],f=e[1],h=(0,i.TH)();return(0,o.useEffect)((function(){r.ZP.fetchDataWeek().then((function(t){var e=t.results;f(e)}))}),[]),(0,a.jsxs)("main",{children:[(0,a.jsx)("h1",{children:"Trends of the week"}),(0,a.jsx)("ul",{children:n.map((function(t){var e=t.title,n=t.id;return(0,a.jsx)("li",{children:(0,a.jsx)(u.rU,{to:"/movies/".concat(n),state:{from:h},children:e})},n)}))}),(0,a.jsx)(o.Suspense,{children:(0,a.jsx)(i.j3,{})})]})}}}]);
//# sourceMappingURL=544.bc8ba84d.chunk.js.map