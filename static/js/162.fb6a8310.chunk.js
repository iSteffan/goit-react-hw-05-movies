"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[162],{854:function(t,e,n){n.d(e,{a:function(){return c}});var r=n(870),a=n(184),c=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},wrapperClassName:"loader",visible:!0})}},162:function(t,e,n){n.r(e),n.d(e,{default:function(){return j}});var r,a,c,i,s=n(861),o=n(439),u=n(757),p=n.n(u),l=n(791),f=n(409),d=n(87),h=n(766),v=n(444),x=v.ZP.img(r||(r=(0,h.Z)(["\n  width: 200px;\n  height: auto;\n"]))),g=v.ZP.ul(a||(a=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n\n  list-style: none;\n"]))),m=v.ZP.h3(c||(c=(0,h.Z)(["\n  width: 200px;\n"]))),w=n(184),Z=function(t){var e=t.movies;return(0,w.jsx)(g,{children:e.map((function(t){return(0,w.jsx)("li",{children:(0,w.jsxs)(d.OL,{to:"/movies/".concat(t.id),children:[t.backdrop_path?(0,w.jsx)(x,{src:"https://image.tmdb.org/t/p/w400/".concat(t.poster_path),alt:t.original_title}):(0,w.jsx)(x,{src:"https://via.placeholder.com/400x600.png?text=Poster+Not+Available",alt:t.original_title}),(0,w.jsx)(m,{children:t.original_title})]})},t.id)}))})},b=n(854),k=v.ZP.h2(i||(i=(0,h.Z)(["\n  margin-left: 40px;\n  font-size: 24px;\n"]))),j=function(){var t=(0,l.useState)([]),e=(0,o.Z)(t,2),n=e[0],r=e[1],a=(0,l.useState)(!1),c=(0,o.Z)(a,2),i=c[0],u=c[1],d=(0,l.useState)(!1),h=(0,o.Z)(d,2),v=h[0],x=h[1];return(0,l.useEffect)((function(){u(!0);var t=function(){var t=(0,s.Z)(p().mark((function t(){var e,n;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.D)();case 3:e=t.sent,n=e.results,r(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:return t.prev=11,u(!1),x(!0),t.finish(11);case 15:case"end":return t.stop()}}),t,null,[[0,8,11,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(k,{children:"Trending today"}),i&&(0,w.jsx)(b.a,{}),v&&(0,w.jsx)(Z,{movies:n})]})}},409:function(t,e,n){n.d(e,{D:function(){return u},P:function(){return p}});var r=n(861),a=n(757),c=n.n(a),i=n(243),s="https://api.themoviedb.org",o="8776cc9f66dd32d7c5ecc9b66eb74c99",u=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/3/trending/movie/day?api_key=").concat(o));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("".concat(s,"/3/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=162.fb6a8310.chunk.js.map