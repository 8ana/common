(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[5],{519:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var a=l(n(0)),r=l(n(8)),o=n(63),c=n(174);function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.data,n=void 0===t?[]:t;return a.default.createElement("div",{className:"_2YdeD"},n.map((function(e){return a.default.createElement("li",{key:e.id},a.default.createElement(o.Link,{to:"/subject/".concat(e.id)},a.default.createElement("div",{className:"load-demand","data-load-demand":'<img src="'.concat((0,c.formatPic)(e.pic,"orj360"),'" alt="').concat(e.title,'" />')}),a.default.createElement("h3",null,e.title),(0,c.isNumber)(e.status)?e.isDate?a.default.createElement("p",{className:"_3hSFW"},"更新至",e.status,"话"):a.default.createElement("p",null,"更新至",e.status,"话"):e.isDate?a.default.createElement("p",{className:"_3hSFW"},e.status):a.default.createElement("p",null,e.status)))})))}n(474),u.defaultProps={data:[]},u.propTypes={data:r.default.array}},522:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var c=r?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=f(n(8)),c=n(58),l=n(175),u=n(122),i=f(n(519));function f(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function s(e){var t=e.actor,n=void 0===t?"":t,a=e.not,o=(0,c.useStore)(),f=(0,c.useSelector)((function(e){return(0,u.getList)(e,"like-".concat(a))}));(0,r.useEffect)((function(){var e;f&&f.data||(e={actor:n,not:a},(0,l.detailActor)(e)(o.dispatch,o.getState))}),[n,f,a,o.dispatch,o.getState]);var d=f.data,s=void 0===d?[]:d;return r.default.createElement(r.default.Fragment,null,s.length>0?r.default.createElement(i.default,{data:s}):null)}s.propTypes={actor:o.default.string,not:o.default.any}},523:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=s;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=d();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var c=r?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=f(n(8)),c=n(58),l=n(175),u=n(122),i=f(n(519));function f(e){return e&&e.__esModule?e:{default:e}}function d(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return d=function(){return e},e}function s(e){var t=e.not,n=(0,c.useStore)(),a=(0,c.useSelector)((function(e){return(0,u.getList)(e,"hotweek")}));(0,r.useEffect)((function(){var e;a&&a.data||(e={not:t},(0,l.hotWeek)(e)(n.dispatch,n.getState))}),[a,a.data,t,n.dispatch,n.getState]);var o=a.data,f=void 0===o?[]:o;return r.default.createElement(i.default,{data:f})}s.propTypes={not:o.default.any}},525:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var a=l(n(0)),r=n(63),o=l(n(8)),c=l(n(528));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.tag,n=e.config,o=e.location;return a.default.createElement("div",{className:"_2hGq7"},a.default.createElement("div",{className:"_8tDCI"},t.map((function(e,t){return a.default.createElement(r.Link,{to:"/search/".concat(e),key:t},"#",e)}))),a.default.createElement("div",{className:"_3KjoG"},a.default.createElement(c.default,{data:n,location:o})))}n(476),u.defaultProps={tag:[]},u.propTypes={tag:o.default.array,config:o.default.object,location:o.default.object}},535:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.episode=function(e){var t=e.id,n=e.p;return function(e,a){return(0,r.default)({dispatch:e,getState:a,name:"".concat(t).concat(n?"-".concat(n):""),reducerName:"episode",actionType:"GET_EPISCODE",api:"storyDetail",params:{id:t,p:n}})}},t.episodeList=function(){return function(e,t){return(0,r.default)({dispatch:e,getState:t,name:"episodelist",reducerName:"episode",actionType:"GET_EPISCODE_LIST",api:"storylist",params:{id:902,limit:100},isPage:!0})}};var a,r=(a=n(176))&&a.__esModule?a:{default:a}},556:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=(0,r.useRef)();return(0,r.useEffect)((function(){if(window.adsbygoogle)(adsbygoogle=window.adsbygoogle||[]).push({});else{var e=document.getElementsByTagName("head").item(0),n=document.createElement("script");n.onload=function(){(adsbygoogle=window.adsbygoogle||[]).push({})},n.async=!0,n.src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",e.appendChild(n)}setTimeout((function(){t&&t.current&&t.current.childNodes&&0===t.current.childNodes.length&&(t.current.innerHTML="如果可以请关掉对本站广告的屏蔽，我会有微微微的收入。🙂️",t.current.style.height="auto",t.current.style.textAlign="center",t.current.style.padding="10px",t.current.style.textDecoration="none")}),1e3)}),[]),r.default.createElement("ins",c({className:"adsbygoogle"},e,{ref:t}))};var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if(Object.prototype.hasOwnProperty.call(e,c)){var l=r?Object.getOwnPropertyDescriptor(e,c):null;l&&(l.get||l.set)?Object.defineProperty(n,c,l):n[c]=e[c]}n.default=e,t&&t.set(e,n);return n}(n(0));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}},84:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=E(n(78)),o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=g();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var c=r?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(n,o,c):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),c=n(63),l=n(58),u=n(535),i=n(183),f=E(n(177)),d=E(n(516)),s=E(n(513)),p=E(n(525)),m=E(n(522)),y=E(n(523)),v=(E(n(556)),E(n(508))),b=E(n(509));function g(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return g=function(){return e},e}function E(e){return e&&e.__esModule?e:{default:e}}function _(e,t,n,a,r,o,c){try{var l=e[o](c),u=l.value}catch(e){return void n(e)}l.done?t(u):Promise.resolve(u).then(a,r)}n(502);var h={"./style.scss":{"article-body":"_2GKp0","article-content":"_1bWoE","ep-like":"_3Y2HT",eplist:"utaqj",auto:"_2hk7E",active:"_3kVoK","article-context":"_23-D-","eplist-more":"hiTrM","go-detail":"_3OgNN",title:"_3V4qF","article-bottom":"_3hLwY","article-ads":"_2G8vv"}};function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(a=(c=l.next()).done)&&(n.push(c.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var j=function(){var e=O((0,o.useState)(!1),2),t=e[0],n=e[1],a=(0,c.useLocation)(),v=(0,c.useRouteMatch)().params,g=v.id,E=v.p,_=(0,l.useStore)(),S=(0,l.useSelector)((function(e){return(0,i.getEpisodeList)(e,g+(E?"-"+E:""))}));(0,o.useEffect)((function(){var e;n(!1),S.data||(e={id:g,p:E},(0,u.episode)(e)(_.dispatch,_.getState))}),[g,S.data,E,_.dispatch,_.getState]);var j=S.data,w=void 0===j?{}:j,N=S.loading,P=w.title,k=w.name,M=w.content,L=w.prev,D=w.next,T=w.vid,A=w.vTitle,W=w.gold,x=w.pic,C=w.storyNum,q=w.vContent,F=w.actor,G=w.year,I=w.status,K=w.mcid,H=w.pid,Y={pic:x,title:E?"#".concat(A,"#").concat(k).concat(P?" ".concat(P):"","剧情_").concat(A,"分集剧情"):"#".concat(A,"#剧情(共").concat(C,"集)_").concat(A,"全集剧情"),desc:M,url:E?"/episode/".concat(T,"/").concat(E):"/episode/".concat(T)},V=E?k:"";return N||!w.vTitle?o.default.createElement(f.default,null):o.default.createElement("div",{className:"wp mt20 clearfix"},o.default.createElement(b.default,{title:"".concat(E?"".concat(A).concat(k).concat(P?" ".concat(P):"","剧情_").concat(A,"分集剧情"):"".concat(A,"剧情(共").concat(C,"集)_").concat(A,"全集剧情"))},o.default.createElement("meta",{name:"keywords",content:"".concat(A,"剧情,").concat(A).concat(V,"剧情, ").concat(A).concat(V).concat(P,"剧情")}),o.default.createElement("meta",{name:"description",content:"".concat(A).concat(V).concat(P,"剧情介绍：").concat(E?M:q)})),o.default.createElement("div",{className:"fl left"},o.default.createElement("article",{className:"_2GKp0"},o.default.createElement("h1",null,o.default.createElement(c.Link,{to:"/subject/".concat(T)},A)," ",k," ",P),o.default.createElement("div",{className:"clearfix _1bWoE"},((E?M:q)||"").replace("&nbsp; ","").replace("&nbsp; ","")),o.default.createElement("div",{className:"_23-D-"},!E&&C>=1?o.default.createElement(c.Link,{to:"/episode/".concat(T,"/1")},"分集剧情"):o.default.createElement(o.default.Fragment,null,L&&L>0?o.default.createElement(c.Link,{to:"/episode/".concat(T,"/").concat(L)},"上一集"):o.default.createElement(c.Link,{to:"/episode/".concat(T)},"剧情简介"),D?o.default.createElement(c.Link,{to:"/episode/".concat(T,"/").concat(D)},"下一集"):null)),o.default.createElement(p.default,{tag:[A],config:Y,location:a})),o.default.createElement("div",{className:"_3hLwY"},o.default.createElement("div",{className:"mt10 _3Y2HT"},o.default.createElement("div",{className:"_3V4qF"},o.default.createElement("h2",null,"相关动漫")),T?o.default.createElement(m.default,{actor:F,not:T}):null),o.default.createElement("div",{className:"mt10 _3Y2HT"},o.default.createElement("div",{className:"_3V4qF"},o.default.createElement("h2",null,"小伙伴还在看(=￣ω￣=)（一周热门）")),o.default.createElement(y.default,{not:T})))),o.default.createElement("div",{className:"fr right"},o.default.createElement("div",{className:"right-box"},o.default.createElement(d.default,{title:A,pic:x,gold:W,vid:T,year:G,status:I,mcid:K,pid:H}),o.default.createElement("ul",{className:(0,r.default)("eplist ".concat(t?"auto":""),h)},o.default.createElement("li",{className:(0,r.default)(E?"":"active",h)},o.default.createElement(c.Link,{to:"/episode/".concat(g)},"全部")),function(e,t,n){for(var a=[],r=1;r<=t;r++){var l=o.default.createElement(c.Link,{to:"/episode/".concat(e,"/").concat(r)},"".concat(r,"集"));a.push(+n===r?o.default.createElement("li",{key:r,className:"_3kVoK"},l):o.default.createElement("li",{key:r},l))}return a.map((function(e){return e}))}(g,C,E)),o.default.createElement("ul",{className:"utaqj"},E>19?o.default.createElement("li",{className:(0,r.default)(E?"":"active",h)},o.default.createElement(c.Link,{to:"/episode/".concat(g,"/").concat(E)},E,"集")):null,!t&&C>19?o.default.createElement("li",{onClick:function(){return n(!t)}},o.default.createElement("span",null)):null),o.default.createElement(c.Link,{className:"_3OgNN",to:"/subject/".concat(T)},"去 ",A)),o.default.createElement(s.default,null)))};j.loadDataOnServer=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var n,a,r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.store,a=t.match,t.res,t.req,t.user,r=a.params,o=r.id,c=r.p,l=void 0===c?0:c,e.next=4,(0,u.episode)({id:o,p:l})(n.dispatch,n.getState);case 4:return e.abrupt("return",{code:200});case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function c(e){_(o,a,r,c,l,"next",e)}function l(e){_(o,a,r,c,l,"throw",e)}c(void 0)}))});return function(e){return t.apply(this,arguments)}}();var w=(0,v.default)(j);t.default=w}}]);