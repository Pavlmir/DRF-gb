(function(e){function t(t){for(var r,o,c=t[0],s=t[1],i=t[2],l=0,d=[];l<c.length;l++)o=c[l],Object.prototype.hasOwnProperty.call(u,o)&&u[o]&&d.push(u[o][0]),u[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);h&&h(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==u[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},u={app:0},a=[];function c(e){return s.p+"js/"+({}[e]||e)+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-1365034a":1,"chunk-16de0726":1,"chunk-45feb921":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+".css",u=s.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var i=a[c],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===u))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){i=d[c],l=i.getAttribute("data-href");if(l===r||l===u)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],h.parentNode.removeChild(h),n(a)},h.href=u;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){o[e]=0})));var r=u[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=u[e]=[t,n]}));t.push(r[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(h);var n=u[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}u[e]=void 0}};var h=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="static/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var h=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2934:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return c}));var r=n("bc3a"),o=n.n(r),u=o.a.create({baseURL:"http://localhost:8000"}),a=localStorage.getItem("token");a&&(u.defaults.headers.common["Authorization"]="Token "+a);var c={"Content-Type":"application/json",Authorization:"Token "+localStorage.getItem("token")}},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("f2bf"),o={class:"container"},u={class:"row"},a=Object(r["h"])("div",{class:"col-sm-1"},null,-1),c=Object(r["h"])("div",{class:"col-sm-1"},null,-1);function s(e,t,n,s,i,l){var d=Object(r["v"])("app-header"),h=Object(r["v"])("router-view"),f=Object(r["v"])("app-footer");return Object(r["q"])(),Object(r["d"])("div",o,[Object(r["h"])(d),Object(r["h"])("div",u,[a,Object(r["h"])(h),c]),Object(r["h"])(f)])}var i={class:"sticky"},l=Object(r["g"])("Список заметок"),d=Object(r["g"])(" | "),h=Object(r["g"])("Список проектов"),f=Object(r["g"])(" | "),p=Object(r["g"])("Список пользователей"),b=Object(r["g"])(" | ");function m(e,t,n,o,u,a){var c=this,s=Object(r["v"])("router-link");return Object(r["q"])(),Object(r["d"])(r["a"],null,[a.isLoggedIn?Object(r["e"])("",!0):(Object(r["q"])(),Object(r["d"])("button",{key:0,onClick:t[1]||(t[1]=function(e){return c.$router.push({name:"Login"})})},"Войти")),a.isLoggedIn?(Object(r["q"])(),Object(r["d"])("button",{key:1,onClick:t[2]||(t[2]=function(){return a.logout&&a.logout.apply(a,arguments)})},"Выйти")):Object(r["e"])("",!0),Object(r["h"])("header",i,[Object(r["h"])(s,{to:{name:"ToDoList"}},{default:Object(r["D"])((function(){return[l]})),_:1}),d,Object(r["h"])(s,{to:{name:"ProjectList"}},{default:Object(r["D"])((function(){return[h]})),_:1}),f,Object(r["h"])(s,{to:{name:"UserList"}},{default:Object(r["D"])((function(){return[p]})),_:1}),b])],64)}var g={name:"app-header",computed:{isLoggedIn:function(){return this.$store.getters["auth/isLoggedIn"]}},methods:{logout:function(){var e=this;this.$store.dispatch("auth/logout").then((function(){e.$router.push("/login")}))}}};g.render=m;var j=g,v=Object(r["f"])('<div class="footer_content"><ul class="menu"><li class="menu_li">To-do notes</li><li class="menu_li">8(495)555-77-88</li><li class="menu_li">ask@htmlbook.ru</li></ul><p class="text text_copy">2021 © All rights reserved</p></div>',1);function O(e,t){return Object(r["q"])(),Object(r["d"])("footer",null,[v])}n("d8cb");const k={};k.render=O;var y=k,_={name:"app",components:{"app-header":j,"app-footer":y},data:function(){return{}},methods:{}};_.render=s;var w=_,L=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),S=[{path:"/",name:"ToDoList",component:function(){return n.e("chunk-1365034a").then(n.bind(null,"fa2d"))}},{path:"/login",name:"Login",component:function(){return n.e("chunk-2d0c8e41").then(n.bind(null,"578a"))},meta:{guest:!0}},{path:"/projects",name:"ProjectList",component:function(){return n.e("chunk-16de0726").then(n.bind(null,"0509"))}},{path:"/users",name:"UserList",component:function(){return n.e("chunk-45feb921").then(n.bind(null,"74b3"))}},{path:"/:catchAll(.*)",component:function(){return n.e("chunk-2d21af29").then(n.bind(null,"be4d"))}},{path:"/secure",name:"secure",component:function(){return n.e("chunk-2d0bff11").then(n.bind(null,"4054"))},meta:{requiresAuth:!0}},{path:"/create-todo",name:"CreateTodo",component:function(){return n.e("chunk-178e36a0").then(n.bind(null,"2645"))},meta:{requiresAuth:!0}},{path:"/create-project",name:"CreateProject",component:function(){return n.e("chunk-912cad18").then(n.bind(null,"59bc"))},meta:{requiresAuth:!0}}],A=Object(L["a"])({history:Object(L["b"])(),routes:S}),P=A,T=n("5502"),q=n("2934"),C=function(){return{status:"",token:localStorage.getItem("token")||"",user:{}}},I={isLoggedIn:function(e){return!!e.token},authStatus:function(e){return e.status}},x={login:function(e,t){var n=e.commit;return new Promise((function(e,r){n("auth_request"),q["a"].post("/api-token-auth/",{username:t.username,password:t.password}).then((function(t){var r=t.data.token,o=t.data.user;localStorage.setItem("token",r),q["a"].defaults.headers.common["Authorization"]=r,n("auth_success",r,o),e(t)})).catch((function(e){n("auth_error"),localStorage.removeItem("token"),r(e)}))}))},logout:function(e){var t=e.commit;return new Promise((function(e){t("logout"),localStorage.removeItem("token"),delete q["a"].defaults.headers.common["Authorization"],e()}))}},E={auth_request:function(e){e.status="loading"},auth_success:function(e,t,n){e.status="success",e.token=t,e.user=n},auth_error:function(e){e.status="error"},logout:function(e){e.status="",e.token=""}},D={name:"auth",namespaced:!0,stateFactory:!0,state:C,getters:I,actions:x,mutations:E},N=n("0e44"),z=!1,M=Object(T["b"])({modules:{auth:D},strict:z,plugins:z?[Object(T["a"])(),Object(N["a"])()]:[Object(N["a"])()]}),U=(n("ab8b"),n("7b17"),Object(r["c"])(w));U.use(P),U.use(M),U.mount("#app")},"99b8":function(e,t,n){},d8cb:function(e,t,n){"use strict";n("99b8")}});
//# sourceMappingURL=app.js.map