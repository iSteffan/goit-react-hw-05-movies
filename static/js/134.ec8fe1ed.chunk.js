"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{854:function(e,t,n){n.d(t,{a:function(){return c}});var r=n(870),a=n(184),c=function(){return(0,a.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#4fa94d",ariaLabel:"three-dots-loading",wrapperStyle:{justifyContent:"center"},wrapperClassName:"loader",visible:!0})}},792:function(e,t,n){n.d(t,{s:function(){return d}});var r,a,c,u=n(689),i=n(87),s=n(168),o=n(444),p=o.ZP.img(r||(r=(0,s.Z)(["\n  width: 200px;\n  height: auto;\n"]))),l=o.ZP.ul(a||(a=(0,s.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n\n  list-style: none;\n"]))),f=o.ZP.h3(c||(c=(0,s.Z)(["\n  width: 200px;\n"]))),v=n(184),d=function(e){var t=e.movies,n=(0,u.TH)();return(0,v.jsx)(l,{children:t.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsxs)(i.OL,{to:"/movies/".concat(e.id),state:{from:n},children:[e.backdrop_path?(0,v.jsx)(p,{src:"https://image.tmdb.org/t/p/w400/".concat(e.poster_path),alt:e.original_title}):(0,v.jsx)(p,{src:"https://via.placeholder.com/400x600.png?text=Poster+Not+Available",alt:e.original_title}),(0,v.jsx)(f,{children:e.original_title})]})},e.id)}))})}},134:function(e,t,n){n.r(t);var r=n(861),a=n(439),c=n(757),u=n.n(c),i=n(791),s=n(689),o=n(87),p=n(409),l=n(792),f=n(854),v=n(184);t.default=function(){var e,t,n=(0,i.useState)([]),c=(0,a.Z)(n,2),d=c[0],h=c[1],g=(0,i.useState)(!0),m=(0,a.Z)(g,2),x=m[0],w=m[1],y=(0,i.useState)(""),Z=(0,a.Z)(y,2),b=Z[0],k=Z[1],_=(0,i.useState)(!1),j=(0,a.Z)(_,2),S=j[0],q=j[1],C=(0,s.TH)(),P=(0,o.lr)(),U=(0,a.Z)(P,2),G=U[0],W=U[1],D=null!==(e=G.get("query"))&&void 0!==e?e:"",H=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(!0),h([]),e.prev=2,e.next=5,(0,p.WG)(t);case 5:0===(n=e.sent).total_results?(w(!1),h([])):(w(!0),h(n.results)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0.message);case 12:return e.prev=12,q(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){var e,t;if(""!==(null!==(e=null===(t=C.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"")){q(!0);var n=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.WG)(t);case 3:n=e.sent,r=n.results,h(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:return e.prev=11,q(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();n(D)}}),[b,null===(t=C.state)||void 0===t?void 0:t.from,D]),(0,v.jsxs)("div",{children:[(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),k(e.target.elements.query.value);var t=e.target.elements.query.value;H(t)},children:[(0,v.jsx)("input",{type:"text",value:D,onChange:function(e){var t=e.target.value;if(""===t)return W({});W({query:t})},name:"query",placeholder:"Search movies"}),(0,v.jsx)("button",{type:"submit",children:"Search"})]}),S&&(0,v.jsx)(f.a,{}),x?(0,v.jsx)(l.s,{movies:d}):(0,v.jsx)("p",{children:"Sorry, we can't find any movies by this tag"})]})}},409:function(e,t,n){n.d(t,{Df:function(){return o},M1:function(){return l},Pg:function(){return p},WG:function(){return v},tx:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(243),i="https://api.themoviedb.org",s="8776cc9f66dd32d7c5ecc9b66eb74c99",o=function(){var e=(0,r.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/3/trending/movie/day?api_key=").concat(s));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/3/movie/").concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/3/movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/3/movie/").concat(t,"}/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/3/search/movie?api_key=").concat(s,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=134.ec8fe1ed.chunk.js.map