"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247,805],{1687:function(t,e,n){n.d(e,{Hq:function(){return f},Tg:function(){return s},Y5:function(){return h},xc:function(){return l}});var r=n(5861),a=n(7757),c=n.n(a),o=n(4569),i=n.n(o);i().defaults.baseURL="https://api.themoviedb.org/3",i().defaults.params={api_key:"2123fea73978ac77fe6a3f347cf7ced6",include_adult:!1};var u="https://image.tmdb.org/t/p/w500",s=function(){var t=(0,r.Z)(c().mark((function t(){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i().get("/trending/all/day?").then((function(t){return t.data.results.map((function(t){var e=t.id,n=t.title,r=t.poster_path;return{id:e,title:n,poster:u+r}}))})).catch((function(t){console.log(t.message)})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",i().get("/search/movie?query=".concat(e)).then((function(t){return t.data.results.map((function(t){var e=t.id,n=t.title,r=t.poster_path;return{id:e,title:n,poster:u+r}}))})).catch((function(t){console.log(t.message)})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){return i().get("/movie/".concat(t,"?")).then((function(t){var e=t.data,n=e.id,r=e.poster_path,a=e.title,c=e.release_date,o=e.vote_average,i=e.overview,s=e.genres;return{id:n,poster:u+r,title:a,releaseYear:new Date(c).getFullYear(),userScore:Math.round(10*o),overview:i,genres:s}})).catch((function(t){console.log(t.message)}))},l=function(t){return i().get("/movie/".concat(t,"/credits?")).then((function(t){return t.data.cast.map((function(t){var e=t.id,n=t.name,r=t.character,a=t.profile_path;return{id:e,name:n,character:r,photo:u+a}}))})).catch((function(t){console.log(t.message)}))}},1247:function(t,e,n){n.r(e);var r=n(885),a=n(1687),c=n(9805),o=n(2791),i=n(6871),u=n(184);e.default=function(){var t=(0,i.UO)("movieId").movieId,e=(0,o.useState)([]),n=(0,r.Z)(e,2),s=n[0],f=n[1];return(0,o.useEffect)((function(){(0,a.xc)(t).then(f)}),[t]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h2",{children:"Cast"}),";",s.length>0?(0,u.jsx)("ul",{children:s.map((function(t){var e=t.id,n=t.name,r=t.character,a=t.photo;return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:a,alt:n}),(0,u.jsx)("h3",{children:n}),(0,u.jsxs)("p",{children:["Character: ",r]})]},e)}))}):(0,u.jsx)(c.default,{})]})}},9805:function(t,e,n){n.r(e);var r=n(501),a=n(184);e.default=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h2",{children:"Oops... nothing found..."}),(0,a.jsx)(r.rU,{to:"/",children:"Back to home"})]})}}}]);
//# sourceMappingURL=247.a2ae4c96.chunk.js.map