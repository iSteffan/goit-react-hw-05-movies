"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(n,e,t){t.r(e);var r=t(861),a=t(439),c=t(757),u=t.n(c),o=t(791),i=t(689),s=t(409),p=t(184);e.default=function(){var n=(0,o.useState)([]),e=(0,a.Z)(n,2),t=e[0],c=e[1],f=(0,i.UO)().movieId;return(0,o.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(e){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.tx)(e);case 3:t=n.sent,r=t.results,c(r),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}();n(f)}),[f]),0===t.length?(0,p.jsx)("p",{children:"Sorry, there is no review for this movie"}):(0,p.jsx)("ul",{children:t.map((function(n){return(0,p.jsxs)("li",{children:[(0,p.jsxs)("h3",{children:["Author: ",n.author]}),(0,p.jsx)("p",{children:n.content})]},n.id)}))})}},409:function(n,e,t){t.d(e,{Df:function(){return s},M1:function(){return f},Pg:function(){return p},WG:function(){return h},tx:function(){return v}});var r=t(861),a=t(757),c=t.n(a),u=t(243),o="https://api.themoviedb.org",i="8776cc9f66dd32d7c5ecc9b66eb74c99",s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/3/trending/movie/day?api_key=").concat(i));case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/3/movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/3/movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/3/movie/").concat(e,"}/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"/3/search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e,"&page=1&include_adult=false"));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.d77432be.chunk.js.map