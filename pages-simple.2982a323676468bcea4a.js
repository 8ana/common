(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[16],{194:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=j(n(78)),u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=w();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=e[u]}n.default=e,t&&t.set(e,n);return n}(n(0)),l=n(63),i=n(58),o=n(542),c=n(526),f=n(192),s=n(80),d=j(n(513)),m=j(n(512)),p=j(n(543)),y=j(n(184)),v=j(n(185)),b=j(n(79)),g=j(n(508)),h=j(n(509)),E=n(174),_=n(64),S=n(473),O=j(n(527));function w(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return w=function(){return e},e}function j(e){return e&&e.__esModule?e:{default:e}}n(487);var P={"./style.scss":{simple:"_2cLS0","simple-right":"_3cL73",userinfo:"DdaOs",list:"_1IH5o","list-pic":"a73F2","list-info":"_2XCSq","list-title":"_3acKl","list-play":"C9ht8","list-gold":"_37557","list-opa":"_2Zo4U",active:"_3FDpw",fav:"sOIYf"}};function k(e,t,n,r,a,u,l){try{var i=e[u](l),o=i.value}catch(e){return void n(e)}i.done?t(o):Promise.resolve(o).then(r,a)}function M(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function l(e){k(u,r,a,l,i,"next",e)}function i(e){k(u,r,a,l,i,"throw",e)}l(void 0)}))}}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,u=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,u=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw u}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var A=function(){var e=N((0,u.useState)(!1),2),t=e[0],n=e[1],r=N((0,u.useState)(!1),2),g=r[0],w=r[1],j=N((0,u.useState)({}),2),k=j[0],D=j[1],A=N((0,u.useState)("signIn"),2),C=A[0],T=A[1],I=(0,i.useSelector)((function(e){return(0,s.getUserInfo)(e)})),x=(0,i.useSelector)((function(e){return(0,f.getSimple)(e)})),L=(0,i.useStore)(),R=I.userid,U=I.name,W=I.avatar,B=x.data,Y=void 0===B?[]:B,F=x.loading,q=void 0===F||F,G={201:"tv",202:"ova",203:"juchang",204:"zhenren",4:"tebie",35:"qita"},K=(0,u.useCallback)((function(){var e;e={uid:R||""},(0,o.simple)(e)(L.dispatch,L.getState)}),[L.dispatch,L.getState,R]);(0,u.useEffect)((function(){return x.data||K(),ArriveFooter.add("simple",K),function(){ArriveFooter.remove("simple")}}),[K,x.data,R]);var H=function(){var e=M(regeneratorRuntime.mark((function e(t,n){var r,a,u,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(e){return(0,c.digg)(e)(L.dispatch,L.getState)},e.next=3,r({type:t,id:n,info:"list"});case 3:a=e.sent,u=N(a,2),1===(l=u[1]).code&&b.default.success(l.msg);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){var e=M(regeneratorRuntime.mark((function e(t,n,r){var a,u,l,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=function(e){return(0,c.mark)(e)(L.dispatch,L.getState)},!R){e.next=10;break}return e.next=4,a({type:t,id:n,cid:r,info:"list"});case 4:u=e.sent,l=N(u,2),1===(i=l[1]).code&&b.default.success(i.msg),e.next=11;break;case 10:w(!0);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),X=function(e){var t=e.id,r=e.type;D({id:t,type:r}),n(!0)};return u.default.createElement("div",{className:"wp mt20 _2cLS0"},u.default.createElement(h.default,{title:_.describe},u.default.createElement("meta",{name:"keywords",content:_.keywords}),u.default.createElement("meta",{name:"description",content:_.description})),u.default.createElement("div",{className:"right-box left"},u.default.createElement("div",{className:"right-title"},u.default.createElement("h2",null,"番剧"),u.default.createElement("span",null,u.default.createElement(l.Link,{to:"/dongman"},"筛选"))),u.default.createElement("ul",{className:"_1IH5o"},Y.map((function(e){return u.default.createElement("li",{key:e.id},u.default.createElement(l.Link,{to:"/subject/".concat(e.id),className:"a73F2"},u.default.createElement("span",null,e.area),u.default.createElement("span",null,e.lang),u.default.createElement("img",{src:(0,E.formatPic)(e.pic,"orj360")})),u.default.createElement("div",{className:"_2XCSq"},u.default.createElement("div",{className:"_3acKl"},u.default.createElement("h2",null,u.default.createElement(l.Link,{to:"/subject/".concat(e.id)},e.title),"(",e.year,")"),u.default.createElement(l.Link,{to:"/type/".concat(G[e.cid]||"list","/-/-/-/-/-/addtime")},e.name),e.mcid&&e.mcid.map((function(t){return u.default.createElement(l.Link,{to:"/type/".concat(G[e.cid]||"list","/").concat(t.id,"/-/-/-/-/addtime"),key:t.id},t.title)}))),e.foreign&&u.default.createElement("h4",null,e.foreign),u.default.createElement("p",null,u.default.createElement(l.Link,{to:"/subject/".concat(e.id)},"详情"),e.music?u.default.createElement("a",null,"音乐"):null,e.role?u.default.createElement("a",null,"角色"):null,e.part?u.default.createElement(l.Link,{to:"/episode/".concat(e.id)},"剧情"):null,e.lines?u.default.createElement("a",null,"插曲"):null,e.theme?u.default.createElement("a",null,"话题"):null,e.picture?u.default.createElement("a",null,"图片"):null,u.default.createElement(l.Link,{to:"/time/".concat(e.id),title:"播出时间"},"时间")),e.play&&e.play.length||e.all?u.default.createElement("div",{className:"clearfix C9ht8"},u.default.createElement("span",null,"哪可以看："),(r={play:e.play,all:e.all,id:e.id},i=r.play,o=r.all,c=r.id,o?o.all.map((function(e){var t=function(e){return(0,O.default)(S.Base64.atob(e),"DECODE",o.key,0)}(e.vid);return u.default.createElement("i",{key:t,className:"playicon ".concat((0,E.getName)(t)[1]),title:(0,E.getName)(t)[0],onClick:function(){return X({id:c,type:(0,E.getName)(t)[1]})}})})):i.map((function(e){return e&&u.default.createElement("i",{key:e,className:"playicon ".concat(e),title:e,onClick:function(){return X({id:c,type:e})}})})))):null,u.default.createElement("div",{className:"_37557"},e.gold?u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{className:"".concat((t=5*e.gold,n="",t>=50?n="bigstar50":t>=45?n="bigstar45":t>=40?n="bigstar40":t>=35?n="bigstar35":t>=30?n="bigstar30":t>=20?n="bigstar20":t>=15?n="bigstar15":t>=10?n="bigstar10":t>=5?n="bigstar5":t>=0&&(n="bigstar0"),n)," bigstar")})," ",e.gold," 分"):"暂无评分",e.filmtime&&u.default.createElement("span",{style:{marginLeft:10}},"首番时间：".concat(e.filmtime," ").concat(e.time))),u.default.createElement("p",{className:"_2Zo4U"},u.default.createElement("a",{onClick:function(){return J("remind",e.id,e.cid)},className:(0,a.default)(e.remindid?"active":"",P)},u.default.createElement("i",{className:"iconfont sOIYf"},""),e.remindid?"已追番":"追番"),u.default.createElement("a",{onClick:function(){return J("love",e.id,e.cid)},className:(0,a.default)(e.loveid?"active":"",P)},u.default.createElement("i",{className:"iconfont sOIYf"},""),e.loveid?"已收藏":"收藏"),u.default.createElement("a",{onClick:function(){return H("up",e.id)}},u.default.createElement("i",{className:"iconfont"},"")," ",e.up),u.default.createElement("a",{onClick:function(){return H("down",e.id)}},u.default.createElement("i",{className:"iconfont"},"")," ",e.down),u.default.createElement("span",{style:e.isDate?{color:"#f99f11"}:{}},e.addtime,"更新"),"未播出"===e.status&&e.tvcont?e.tvcont:e.status)));var t,n,r,i,o,c}))),q?u.default.createElement(m.default,{height:100}):null),u.default.createElement("div",{className:"right"},u.default.createElement("div",{className:"_3cL73"},W?u.default.createElement("div",{className:"right-box"},u.default.createElement("div",{className:"right-title"},u.default.createElement("h2",null,u.default.createElement("em",null),"用户信息")),u.default.createElement("div",{className:"DdaOs"},u.default.createElement("img",{src:W}),U)):null,u.default.createElement(d.default,null))),k.id?u.default.createElement(y.default,{cls:{width:895},visible:t,showModal:function(){return n(!0)},closeModal:function(){return n(!1)}},u.default.createElement(p.default,k)):null,u.default.createElement(y.default,{visible:g,showModal:function(){return w(!0)},closeModal:function(){return w(!1)}},u.default.createElement(v.default,{isSign:C,onType:function(e){return function(e){T(e),w(!0)}(e)},visible:g})))};A.loadDataOnServer=function(){var e=M(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.store,t.match,t.res,t.req,!(r=t.user)){e.next=3;break}return e.abrupt("return",{code:200});case 3:return e.next=5,(0,o.simple)({uid:(r||{}).userid})(n.dispatch,n.getState);case 5:return e.abrupt("return",{code:200});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var C=(0,g.default)(A);t.default=C},508:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t){t.history;var n,r,u=t.location,c=t.match,f=(t.staticContext,(0,a.useState)("")),d=(r=2,function(e){if(Array.isArray(e))return e}(n=f)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,u=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,u=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw u}}return n}}(n,r)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=d[0],p=d[1],y=(0,l.useStore)(),v=u.pathname,b=u.search;return u.params=b?(0,o.default)(b):{},(0,a.useEffect)((function(){return(0,i.setScrollPosition)(v+b)(y.dispatch,y.getState),function(){(0,i.saveScrollPosition)(v+b)(y.dispatch,y.getState)}}),[v,b,y.dispatch,y.getState]),m?a.default.createElement("div",null,m):a.default.createElement(e,{match:c,setNotFound:p})}return t.loadDataOnServer=e.loadDataOnServer||function(){return{code:200}},t.propTypes={history:u.default.object,location:u.default.object,match:u.default.object,staticContext:u.default.object},t};var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=e[u]}n.default=e,t&&t.set(e,n);return n}(n(0)),u=c(n(8)),l=n(58),i=n(510),o=c(n(511));function c(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},509:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var a=c(n(0)),u=c(n(8)),l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=e[u]}n.default=e,t&&t.set(e,n);return n}(n(467)),i=n(64);function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function c(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.title,n=e.url,r=e.children,u="";return u+=t||i.name,t&&(n||(u+=" - ".concat(i.name))),a.default.createElement(a.default.Fragment,null,a.default.createElement(l.ReactTitle,{title:u}),r?a.default.createElement(l.default,null,r):null)}f.propTypes={title:u.default.string,children:u.default.any,url:u.default.string}},510:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setScrollPosition=function(e){return function(t,n){t({type:"SET_SCROLL_POSITION",name:e})}},t.saveScrollPosition=function(e){return function(t,n){t({type:"SAVE_SCROLL_POSITION",name:e})}}},511:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){return e.substr(1).split("&").reduce((function(e,t){if(t){var n=t.split("=");e[n[0]]=n[1]||""}return e}),{})};t.default=r},512:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(8)),u=l(n(177));function l(e){return e&&e.__esModule?e:{default:e}}n(468);var i=function(e){var t=e.height,n=void 0===t?150:t;return r.default.createElement("div",{className:"_38l9s",style:{height:n}},r.default.createElement(u.default,null))};i.propTypes={height:a.default.number};var o=i;t.default=o},513:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var r=o(n(0)),a=o(n(8)),u=o(n(517)),l=o(n(514)),i=o(n(518));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.data,n=void 0===t?[]:t;return r.default.createElement(r.default.Fragment,null,n.length>0?r.default.createElement(i.default,{data:n}):null,r.default.createElement(l.default,{name:"topListAll",title:"30天热门动漫",sty:{paddingBottom:10}}),r.default.createElement(u.default,{name:"newsAll",isCate:!1,title:"30天热门资讯",isType:!0,sty:{paddingBottom:10}}))}c.propTypes={data:a.default.array}},514:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(78)),u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=e[u]}n.default=e,t&&t.set(e,n);return n}(n(0)),l=m(n(8)),i=n(63),o=n(58),c=n(175),f=n(122),s=m(n(512));function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function m(e){return e&&e.__esModule?e:{default:e}}function p(e,t,n,r,a,u,l){try{var i=e[u](l),o=i.value}catch(e){return void n(e)}i.done?t(o):Promise.resolve(o).then(r,a)}n(469);var y={"./style.scss":{top:"_1EdCm","top-li__score":"_2Zksa","top-li__num":"_2kYgf",on:"_3OE2n"}};var v=function(e){var t=e.name,n=e.title,r=(0,o.useSelector)((function(e){return(0,f.getList)(e,t)})),l=(0,o.useStore)();(0,u.useEffect)((function(){var e;r.data||(e={name:t},(0,c.top)(e)(l.dispatch,l.getState))}),[l.dispatch,l.getState,r.data,t]);var d=r.data,m=void 0===d?[]:d,p=r.loading;return u.default.createElement("div",{className:"right-box _1EdCm"},u.default.createElement("div",{className:"right-title"},u.default.createElement("h2",null,u.default.createElement("em",null),n||"排行榜")),u.default.createElement("ul",null,p?u.default.createElement(s.default,null):null,m.map((function(e,t){return u.default.createElement("li",{key:e.id},u.default.createElement("span",{className:(0,a.default)("top-li__num ".concat(t<=2?"on":""),y)},t+1),u.default.createElement(i.Link,{to:"/subject/".concat(e.id)},e.title),u.default.createElement("span",{className:"_2Zksa"},e.gold))}))))};v.propTypes={name:l.default.string,title:l.default.string},v.loadDataOnServer=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,t.match,t.res,t.req,t.user,e.next=3,(0,c.top)({name:"topListIndexCN"})(n.dispatch,n.getState);case 3:return e.next=5,(0,c.top)({name:"topListIndexJP"})(n.dispatch,n.getState);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function l(e){p(u,r,a,l,i,"next",e)}function i(e){p(u,r,a,l,i,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}();var b=v;t.default=b},515:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.newsIndex=function(e){var t=e.name,n=e.id,r=void 0===n?44:n,u=e.p,l=void 0===u?0:u,i=e.order,o=void 0===i?"addtime":i;return function(e,n){var u={};return"newsPicList"===t?u={id:"211,206,205,207,208,209,212,213,221,222",limit:12}:"newsTextList"===t?u={id:"214,215,216,217,218,219,220,223"}:"newsAll"===t?u={id:"44",order:"hits_month"}:"newslist"===t&&(u={id:r,limit:15,order:o}),(0,a.default)({dispatch:e,getState:n,name:"newslist"===t&&44!==r?r:t,reducerName:"newsIndex",actionType:"GET_NEWS_INDEX_LIST",api:"newslist",params:Object.assign({},u,{p:l}),isPage:"newslist"===t})}};var r,a=(r=n(176))&&r.__esModule?r:{default:r}},516:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=i(n(0)),a=n(63),u=i(n(8)),l=n(174);function i(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.title,n=e.pic,u=e.gold,i=e.vid,o=(e.pid,e.status),c=e.year,f=e.mcid;return r.default.createElement("div",{className:"_2gAku"},r.default.createElement(a.Link,{to:"/subject/".concat(i)},r.default.createElement("img",{src:(0,l.formatPic)(n,"orj360"),alt:t})),r.default.createElement("div",{className:"_3FXU9"},r.default.createElement("p",null,r.default.createElement(a.Link,{to:"/subject/".concat(i)},t)," ",r.default.createElement("b",null,u)),r.default.createElement("p",null,"状态：",r.default.createElement(a.Link,{to:"/subject/".concat(i)},(0,l.isNumber)(o)?"更新至".concat(o,"话"):o)),c?r.default.createElement("p",null,c,"年首播"):null,f?r.default.createElement("p",{className:"Tsh4q"},f.map((function(e,t){return t===f.length-1?r.default.createElement("span",{key:e.id},e.title):r.default.createElement("span",{key:e.id},e.title," / ")}))):null))}n(472),o.defaultProps={mcid:[],pic:""},o.propTypes={title:u.default.string,pic:u.default.string,gold:u.default.string,vid:u.default.number,pid:u.default.number,status:u.default.any,year:u.default.number,mcid:u.default.array}},517:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(78)),u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=e[u]}n.default=e,t&&t.set(e,n);return n}(n(0)),l=n(63),i=m(n(8)),o=n(58),c=n(515),f=n(178),s=m(n(177));function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function m(e){return e&&e.__esModule?e:{default:e}}function p(e,t,n,r,a,u,l){try{var i=e[u](l),o=i.value}catch(e){return void n(e)}i.done?t(o):Promise.resolve(o).then(r,a)}n(471);var y={"./style.scss":{h2:"_2COrB",newslist:"_3lBTz",mark:"CQwnI",newstxt:"_4sYSq",type:"UwjS7","type-1":"_2YRQO","type-2":"Yg3ud","type-3":"_1U1Hr","type-4":"_4UIsf","type-5":"_1D9EI","type-6":"_9ad3f","type-7":"_14jBY","type-8":"_29aYg",tab:"_3iICs","news-tab":"_3lWjc"}};var v=function(e){var t=e.name,n=(e.sty,e.isType),r=e.isCate,i=e.title,d=(0,o.useSelector)((function(e){return(0,f.getNewsIndex)(e,t)})),m=(0,o.useStore)();(0,u.useEffect)((function(){var e;d.data||(e={name:t},(0,c.newsIndex)(e)(m.dispatch,m.getState))}));var p=d||{},v=p.data,b=void 0===v?[]:v,g=p.loading,h=function(e){var t=6;switch(e){case 214:t=1;break;case 223:t=2;break;case 217:t=3;break;case 211:t=4;break;case 205:t=7}return t};return u.default.createElement("div",{className:"right-box"},u.default.createElement("div",{className:"right-title"},u.default.createElement("h2",null,u.default.createElement("em",null),i||"排行榜"),r?u.default.createElement("ul",{className:"_3lWjc _3iICs"},u.default.createElement("li",null,u.default.createElement(l.Link,{to:"/news/op"},"OP")),u.default.createElement("li",null,u.default.createElement(l.Link,{to:"/news/ed"},"ED")),u.default.createElement("li",null,u.default.createElement(l.Link,{to:"/news/cm"},"CM")),u.default.createElement("li",null,u.default.createElement(l.Link,{to:"/news/bgm"},"BGM"))):null),u.default.createElement("ul",{className:"_4sYSq"},g?u.default.createElement(s.default,null):null,b.map((function(e){return u.default.createElement("li",{key:e.id},n?u.default.createElement(l.Link,{to:"/news/".concat(e.cid),title:e.name,className:(0,a.default)("type type-".concat(h(e.cid)),y)},e.name):null,u.default.createElement(l.Link,{to:"/article/".concat(e.id)},e.title))}))))};v.propTypes={name:i.default.string,isType:i.default.bool,isCate:i.default.bool,title:i.default.string,sty:i.default.object},v.loadDataOnServer=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,t.match,t.res,t.req,t.user,e.next=3,(0,c.newsIndex)({name:"newsTextList"})(n.dispatch,n.getState);case 3:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function l(e){p(u,r,a,l,i,"next",e)}function i(e){p(u,r,a,l,i,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}();var b=v;t.default=b},518:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=l(n(0)),a=l(n(8)),u=l(n(516));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.data,n=void 0===t?[]:t;return r.default.createElement(r.default.Fragment,null,n.map((function(e){return r.default.createElement("div",{className:"right-box",key:e.id},r.default.createElement(u.default,{title:e.title,pic:e.pic,gold:e.gold,vid:e.id,pid:e.pid,status:e.status,year:e.year,mcid:e.mcid}))})))}i.propTypes={data:a.default.array}},526:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mark=function(e){var t=e.type,n=e.id,r=e.cid,a=e.info,l=void 0===a?"list":a;return function(e){return e({type:"list"===l?"UPDATE_MARK":"UPDATE_SUBJECT_MARK",id:n,name:t}),(0,u.default)({api:"mark",params:{type:t,id:n,cid:r}})}},t.addgold=function(e){var t=e.id,n=e.val;return function(){return(0,u.default)({api:"addgold",params:{id:t,val:n},header:!1})}},t.digg=function(e){var t=e.id,n=e.type,l=e.sid,o=void 0===l?1:l,c=e.info,f=void 0===c?"list":c;return function(){var e,l=(e=regeneratorRuntime.mark((function e(l,i){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(-1!==(c=(c=r.default.load("digg")||"").split(",")).indexOf(String(t))){e.next=9;break}return c.push(t),r.default.save("digg",c.join(",")),l({type:"list"===f?"UPDATE_DIGG":"UPDATE_SUBJECT_DIGG",id:t,name:n}),e.abrupt("return",(0,u.default)({api:"digg",params:{type:n,id:t,sid:o},header:!1}));case 9:return a.default.info("您已经".concat("up"===n?"顶":"踩","过了")),e.abrupt("return",["",{code:0}]);case 11:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function l(e){i(u,r,a,l,o,"next",e)}function o(e){i(u,r,a,l,o,"throw",e)}l(void 0)}))});return function(e,t){return l.apply(this,arguments)}}()};var r=l(n(531)),a=l(n(79)),u=l(n(180));function l(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,a,u,l){try{var i=e[u](l),o=i.value}catch(e){return void n(e)}i.done?t(o):Promise.resolve(o).then(r,a)}},527:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=n(473),u=(r=n(533))&&r.__esModule?r:{default:r};function l(){var e=(new Date).getTime();return parseInt(e/1e3)}function i(e){return String.fromCharCode(e)}function o(e){return e.charCodeAt()}t.default=function(e,t,n,r){t=t||"DECODE",n=n||"",r=r||0;n=(0,u.default)(n);var c,f,s,d=(0,u.default)(n.substr(0,16)),m=(0,u.default)(n.substr(16,16));if("DECODE"==t)var p=e.substr(0,4);else var y=(0,u.default)((f=(new Date).getTime(),s=parseInt(f/1e3),c?f/1e3:(f-1e3*s)/1e3+" "+s)),v=y.length-4,p=y.substr(v,4);var b,g=d+(0,u.default)(d+p);if("DECODE"==t)e=e.substr(4),b=a.Base64.atob(e);else{if(r=r?r+l():0,tmpstr=r.toString(),tmpstr.length>=10)e=tmpstr.substr(0,10)+(0,u.default)(e+m).substr(0,16)+e;else{for(var h=10-tmpstr.length,E=0;E<h;E++)tmpstr="0"+tmpstr;e=tmpstr+(0,u.default)(e+m).substr(0,16)+e}b=e}var _=new Array(256);for(E=0;E<256;E++)_[E]=E;var S=new Array;for(E=0;E<256;E++)S[E]=g.charCodeAt(E%g.length);for(var O=E=0;E<256;E++){O=(O+_[E]+S[E])%256;var w=_[E];_[E]=_[O],_[O]=w}var j="";b=b.split("");for(var P=O=E=0;E<b.length;E++){O=(O+_[P=(P+1)%256])%256;var k=_[P];_[P]=_[O],_[O]=k,j+=i(o(b[E])^_[(_[P]+_[O])%256])}if("DECODE"==t)j=(0==j.substr(0,10)||j.substr(0,10)-l()>0)&&j.substr(10,16)==(0,u.default)(j.substr(26)+m).substr(0,16)?j.substr(26):"";else{j=btoa(j);var M=new RegExp("=","g");j=p+(j=j.replace(M,""))}return j}},531:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={save:function(e,t){var n={data:t,expire:(new Date).getTime()+18e5};localStorage.setItem(e,JSON.stringify(n))},load:function(e){var t=localStorage.getItem(e),n=(new Date).getTime(),r=null;if(t){var a=JSON.parse(t);n<a.expire?r=a.data:localStorage.removeItem(e)}return r},remove:function(e){localStorage.removeItem(e)}};t.default=r},532:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.playlist=function(e){var t=e.id;return function(e,n){return(0,a.default)({dispatch:e,getState:n,name:t,reducerName:"playlist",actionType:"GET_PLAY_LIST",api:"playlist",params:{id:t}})}},t.playlistType=function(e){var t=e.id,n=e.type;return function(e,r){return(0,a.default)({dispatch:e,getState:r,name:"".concat(n,"_").concat(t),reducerName:"playlist",actionType:"GET_PLAY_LIST_TYPE",api:"playlist",params:{id:t,type:n}})}};var r,a=(r=n(176))&&r.__esModule?r:{default:r}},533:function(e,t,n){"use strict";var r;!function(a){function u(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function l(e,t,n,r,a,l){return u(function(e,t){return e<<t|e>>>32-t}(u(u(t,e),u(r,l)),a),n)}function i(e,t,n,r,a,u,i){return l(t&n|~t&r,e,t,a,u,i)}function o(e,t,n,r,a,u,i){return l(t&r|n&~r,e,t,a,u,i)}function c(e,t,n,r,a,u,i){return l(t^n^r,e,t,a,u,i)}function f(e,t,n,r,a,u,i){return l(n^(t|~r),e,t,a,u,i)}function s(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var n,r,a,l,s,d=1732584193,m=-271733879,p=-1732584194,y=271733878;for(n=0;n<e.length;n+=16)r=d,a=m,l=p,s=y,m=f(m=f(m=f(m=f(m=c(m=c(m=c(m=c(m=o(m=o(m=o(m=o(m=i(m=i(m=i(m=i(m,p=i(p,y=i(y,d=i(d,m,p,y,e[n],7,-680876936),m,p,e[n+1],12,-389564586),d,m,e[n+2],17,606105819),y,d,e[n+3],22,-1044525330),p=i(p,y=i(y,d=i(d,m,p,y,e[n+4],7,-176418897),m,p,e[n+5],12,1200080426),d,m,e[n+6],17,-1473231341),y,d,e[n+7],22,-45705983),p=i(p,y=i(y,d=i(d,m,p,y,e[n+8],7,1770035416),m,p,e[n+9],12,-1958414417),d,m,e[n+10],17,-42063),y,d,e[n+11],22,-1990404162),p=i(p,y=i(y,d=i(d,m,p,y,e[n+12],7,1804603682),m,p,e[n+13],12,-40341101),d,m,e[n+14],17,-1502002290),y,d,e[n+15],22,1236535329),p=o(p,y=o(y,d=o(d,m,p,y,e[n+1],5,-165796510),m,p,e[n+6],9,-1069501632),d,m,e[n+11],14,643717713),y,d,e[n],20,-373897302),p=o(p,y=o(y,d=o(d,m,p,y,e[n+5],5,-701558691),m,p,e[n+10],9,38016083),d,m,e[n+15],14,-660478335),y,d,e[n+4],20,-405537848),p=o(p,y=o(y,d=o(d,m,p,y,e[n+9],5,568446438),m,p,e[n+14],9,-1019803690),d,m,e[n+3],14,-187363961),y,d,e[n+8],20,1163531501),p=o(p,y=o(y,d=o(d,m,p,y,e[n+13],5,-1444681467),m,p,e[n+2],9,-51403784),d,m,e[n+7],14,1735328473),y,d,e[n+12],20,-1926607734),p=c(p,y=c(y,d=c(d,m,p,y,e[n+5],4,-378558),m,p,e[n+8],11,-2022574463),d,m,e[n+11],16,1839030562),y,d,e[n+14],23,-35309556),p=c(p,y=c(y,d=c(d,m,p,y,e[n+1],4,-1530992060),m,p,e[n+4],11,1272893353),d,m,e[n+7],16,-155497632),y,d,e[n+10],23,-1094730640),p=c(p,y=c(y,d=c(d,m,p,y,e[n+13],4,681279174),m,p,e[n],11,-358537222),d,m,e[n+3],16,-722521979),y,d,e[n+6],23,76029189),p=c(p,y=c(y,d=c(d,m,p,y,e[n+9],4,-640364487),m,p,e[n+12],11,-421815835),d,m,e[n+15],16,530742520),y,d,e[n+2],23,-995338651),p=f(p,y=f(y,d=f(d,m,p,y,e[n],6,-198630844),m,p,e[n+7],10,1126891415),d,m,e[n+14],15,-1416354905),y,d,e[n+5],21,-57434055),p=f(p,y=f(y,d=f(d,m,p,y,e[n+12],6,1700485571),m,p,e[n+3],10,-1894986606),d,m,e[n+10],15,-1051523),y,d,e[n+1],21,-2054922799),p=f(p,y=f(y,d=f(d,m,p,y,e[n+8],6,1873313359),m,p,e[n+15],10,-30611744),d,m,e[n+6],15,-1560198380),y,d,e[n+13],21,1309151649),p=f(p,y=f(y,d=f(d,m,p,y,e[n+4],6,-145523070),m,p,e[n+11],10,-1120210379),d,m,e[n+2],15,718787259),y,d,e[n+9],21,-343485551),d=u(d,r),m=u(m,a),p=u(p,l),y=u(y,s);return[d,m,p,y]}function d(e){var t,n="",r=32*e.length;for(t=0;t<r;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function m(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=8*e.length;for(t=0;t<r;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function p(e){var t,n,r="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),r+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return r}function y(e){return unescape(encodeURIComponent(e))}function v(e){return function(e){return d(s(m(e),8*e.length))}(y(e))}function b(e,t){return function(e,t){var n,r,a=m(e),u=[],l=[];for(u[15]=l[15]=void 0,a.length>16&&(a=s(a,8*e.length)),n=0;n<16;n+=1)u[n]=909522486^a[n],l[n]=1549556828^a[n];return r=s(u.concat(m(t)),512+8*t.length),d(s(l.concat(r),640))}(y(e),y(t))}function g(e,t,n){return t?n?b(t,e):function(e,t){return p(b(e,t))}(t,e):n?v(e):function(e){return p(v(e))}(e)}void 0===(r=function(){return g}.call(t,n,t,e))||(e.exports=r)}()},542:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.simple=function(e){var t=e.uid,n=void 0===t?"":t;return function(e,t){return(0,a.default)({dispatch:e,getState:t,reducerName:"simple",actionType:"GET_SIMPLE",api:"list",params:{uid:n,type:"simple",limit:10},isPage:!0})}};var r,a=(r=n(176))&&r.__esModule?r:{default:r}},543:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=e[u]}n.default=e,t&&t.set(e,n);return n}(n(0)),u=m(n(8)),l=n(58),i=n(532),o=n(181),c=m(n(512)),f=n(473),s=n(174),d=m(n(527));function m(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,u=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){a=!0,u=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw u}}return n}(e,t)||b(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||b(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){if(e){if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n(486);var h=function(e){var t,n=e.id,r=e.type,u=(0,l.useStore)(),m=(0,l.useSelector)((function(e){return(0,o.getPlayList)(e,"".concat(r,"_").concat(n))})),p=m.data,b=void 0===p?{}:p,g=m.loading,h=void 0===g||g,E=b.key,_=b.list,S=void 0===_?[]:_,O=b.playTitle,w=b.all,j=void 0===w?[]:w;(0,a.useEffect)((function(){var e;m.data||(e={id:n,type:r},(0,i.playlistType)(e)(u.dispatch,u.getState))}),[n,m.data,u.dispatch,u.getState,r]);var P=function(){var e=[];j.length&&j.map((function(n){var a=n.vid,u=(0,d.default)(f.Base64.atob(a),"DECODE",E,0);(0,s.getName)(u)[1]===r&&(e.push({title:"全集",vid:a}),O||(t=(0,s.getName)(u)[0]))}));var n=[].concat(e,v(S));return n.length?n.map((function(e){var t=e.title,n=e.vid,r=y((0,s.format)(t),2),u=r[0],l=r[1];return a.default.createElement("a",{key:n,href:(0,d.default)(f.Base64.atob(n),"DECODE",E,0),target:"_blank",rel:"noopener noreferrer",title:t},a.default.createElement("p",null,u),l?a.default.createElement("p",null,l):null)})):[]};return h?a.default.createElement(c.default,{height:100}):P().length?a.default.createElement("div",{className:"right-box"},a.default.createElement("div",{className:"right-title"},a.default.createElement("h2",null,O||t)),a.default.createElement("div",{className:"_3C-Rm"},a.default.createElement("div",{className:"_3OyOz"},P()))):null};h.propTypes={id:u.default.number,type:u.default.string};var E=h;t.default=E}}]);