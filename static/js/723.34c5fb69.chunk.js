"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[723],{253:function(t,n,e){e.d(n,{fT:function(){return i},ZP:function(){return r},Ny:function(){return o},yJ:function(){return a},qF:function(){return u}});var c="a80320dfafec72dcbb6280cf373b1a2a";var r={fetchDataWeek:function(){return fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=".concat(c)).then((function(t){return t.json()}))}},o=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c)).then((function(t){return t.json()}))},i=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c)).then((function(t){return t.json()}))},a=function(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c)).then((function(t){return t.json()}))},u=function(t){return console.log(t),fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(t)).then((function(t){return t.json()}))}},723:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var c,r=e(885),o=e(253),i=e(791),a=e(689),u=e(914),f=e(168),h=e(444).ZP.img(c||(c=(0,f.Z)(["\n  width: 100px;\n"]))),s=e(184),p=function(){var t=(0,a.UO)().movieId,n=(0,i.useState)(null),e=(0,r.Z)(n,2),c=e[0],f=e[1];if((0,i.useEffect)((function(){(0,o.fT)(t).then((function(t){var n=t.cast;f(n)}))}),[t]),c)return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("ul",{children:c.map((function(t){var n=t.original_name,e=t.profile_path,c=t.character,r=t.id;return(0,s.jsxs)("li",{children:[(0,s.jsx)(h,{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):u,alt:""}),(0,s.jsx)("p",{children:n}),(0,s.jsxs)("p",{children:["Character: ",c]})]},r)}))})})}},914:function(t,n,e){t.exports=e.p+"static/media/placeholder.2e99c90def83766f04c2.png"}}]);
//# sourceMappingURL=723.34c5fb69.chunk.js.map