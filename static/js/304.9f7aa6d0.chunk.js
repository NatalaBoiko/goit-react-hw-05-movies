"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[304],{1687:function(n,t,e){e.d(t,{Hq:function(){return p},Tg:function(){return u},Y5:function(){return d},xc:function(){return l}});var r=e(5861),a=e(7757),i=e.n(a),o=e(4569),c=e.n(o);c().defaults.baseURL="https://api.themoviedb.org/3",c().defaults.params={api_key:"2123fea73978ac77fe6a3f347cf7ced6",include_adult:!1};var s="https://image.tmdb.org/t/p/w500",u=function(){var n=(0,r.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c().get("/trending/all/day?").then((function(n){return n.data.results.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return{id:t,title:e,poster:s+r}}))})).catch((function(n){console.log(n.message)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(t){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c().get("/search/movie?query=".concat(t)).then((function(n){return n.data.results.map((function(n){var t=n.id,e=n.title,r=n.poster_path;return{id:t,title:e,poster:s+r}}))})).catch((function(n){console.log(n.message)})));case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(n){return c().get("/movie/".concat(n,"?")).then((function(n){var t=n.data,e=t.id,r=t.poster_path,a=t.title,i=t.release_date,o=t.vote_average,c=t.overview,u=t.genres;return{id:e,poster:s+r,title:a,releaseYear:new Date(i).getFullYear(),userScore:Math.round(10*o),overview:c,genres:u}})).catch((function(n){console.log(n.message)}))},l=function(n){return c().get("/movie/".concat(n,"/credits?")).then((function(n){return n.data.cast.map((function(n){var t=n.id,e=n.name,r=n.character,a=n.profile_path;return{id:t,name:e,character:r,photo:s+a}}))})).catch((function(n){console.log(n.message)}))}},304:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,i,o,c,s,u,p=e(885),d=e(2791),l=e(6871),f=e(1687),h=e(168),x=e(6444),g=e(501),m=x.ZP.div(r||(r=(0,h.Z)(["\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n  }\n"]))),v=x.ZP.h1(a||(a=(0,h.Z)(["\n  font-weight: 700;\n  color: #3f51b5;\n  margin: 30px, 0;\n  text-decoration: none;\n  }\n"]))),b=x.ZP.ul(i||(i=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  max-width: 100%;\n  margin-top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n  padding: 0;\n  transition-duration: 300ms;\n"]))),w=x.ZP.li(o||(o=(0,h.Z)(["\n  background: rgb(255, 255, 255);\n  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),\n    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);\n  width: 100%;\n  max-width: 200px;\n  margin: 10px;\n  border-radius: 5px;\n  display: inline-block;\n  text-decoration: none;\n  color: black;\n  transition-duration: 300ms;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.03);\n    box-shadow: rgb(0 0 0 / 8%) 0px 10px 25px;\n  }\n"]))),Z=(0,x.ZP)(g.rU)(c||(c=(0,h.Z)(["\n  text-decoration: none;\n"]))),_=x.ZP.img(s||(s=(0,h.Z)(["\n  padding: 0px;\n  margin: 0px;\n  height: 260px;\n  width: 100%;\n  display: block;\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n"]))),y=x.ZP.div(u||(u=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  padding: 5px;\n  margin: 0px;\n  font-size: 10px;\n  color: #3f51b5;\n"]))),k=e(184),j=function(){var n=(0,d.useState)([]),t=(0,p.Z)(n,2),e=t[0],r=t[1],a=(0,l.TH)();return(0,d.useEffect)((function(){(0,f.Tg)().then(r)}),[]),(0,k.jsxs)(m,{children:[(0,k.jsx)(v,{children:"Tranding today"}),e.length>0&&(0,k.jsx)(b,{children:e.map((function(n){var t=n.id,e=n.title,r=n.poster;return(0,k.jsx)(w,{children:(0,k.jsxs)(Z,{to:"/movies/".concat(t),state:{from:a},children:[(0,k.jsx)(_,{src:r,alt:e}),(0,k.jsx)(y,{children:(0,k.jsx)("h3",{children:e})})]})},t)}))})]})}}}]);
//# sourceMappingURL=304.9f7aa6d0.chunk.js.map