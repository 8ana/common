(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[9],{38:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(r(78)),u=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e,t&&t.set(e,r);return r}(r(0)),l=r(63),o=r(58),c=r(534),i=r(182),f=p(r(530)),d=p(r(508)),s=p(r(509));function m(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function p(e){return e&&e.__esModule?e:{default:e}}function y(e,t,r,n,a,u,l){try{var o=e[u](l),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,a)}r(498);var v={"./style.scss":{filter:"_1Risi",cur:"_3MwNq"}};function b(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=g(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,l=!0,o=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){o=!0,u=e},f:function(){try{l||null==r.return||r.return()}finally{if(o)throw u}}}}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,u=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,u=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw u}}return r}(e,t)||g(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var _={tv:201,ova:202,juchang:203,tebie:4,zhenren:204,qita:35},E=function(){var e=(0,l.useLocation)().pathname,t=(0,l.useRouteMatch)().params,r=t.name,n=t.mcid,d=t.area,m=t.year,p=t.letter,y=(t.lz,t.wd),g=void 0===y?"":y,S=t.order,E=void 0===S?"addtime":S,O=h((0,u.useState)(_[r]||3),2),w=O[0],j=O[1],P=h((0,u.useState)(n?parseInt(n):""),2),M=P[0],k=P[1],N=h((0,u.useState)(d||"全部"),2),A=N[0],C=N[1],x=h((0,u.useState)(m||"全部"),2),D=x[0],L=x[1],T=h((0,u.useState)(p||"全部"),2),I=T[0],R=T[1],z=h((0,u.useState)(E),2),W=z[0],q=z[1],F=(0,o.useStore)(),U=(0,o.useSelector)((function(e){return(0,i.getConfig)(e,"list")}));(0,u.useEffect)((function(){var e;U.data||(e={tag:"list"},(0,c.configLoad)(e)(F.dispatch,F.getState))}),[U,U.data,M,n,F.dispatch,F.getState]);var B=function(){return-1!==e.indexOf("search")},G=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=[{title:"全部",id:""}],n=b(t);try{for(n.s();!(e=n.n()).done;){var a=e.value;r.push({title:a,id:a})}}catch(e){n.e(e)}finally{n.f()}return r},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if(!t)return"全部";for(var r=0;r<e.length;r++)if(e[r].id===t)return e[r].title},K=function(e){return"全部"===e?"":e},$=U.data,V=void 0===$?{}:$,J=[{title:"全部",id:3}].concat((V.menu||{}).son||[]),Q=[{title:"全部",id:""}].concat(V.mcid||[]),X=G(V.area),Y=G(V.year),Z=G(V.letter),ee=decodeURIComponent(g),te=H(J,w),re=H(Q,M),ne=K(te),ae=K(D),ue=K(re),le=K(I),oe=K(A);return u.default.createElement(u.default.Fragment,null,u.default.createElement(s.default,{title:B()?"你搜索的是《".concat(ee,"》"):"动漫列表".concat(ne?"_".concat(ne,"动漫_").concat(ne,"动漫排行榜"):"").concat(ue?"_".concat(ue,"动漫_好看的").concat(ue,"动漫_最新").concat(ue,"动画片大全_").concat(ue,"动漫排行榜"):"").concat(oe?"_".concat(oe).concat(ne,"大全_").concat(oe).concat(ne,"排行榜"):"").concat(ae?"_".concat(ae,"的动漫"):"").concat(le?"_字母".concat(le,"开头的动漫"):"")}),u.default.createElement("div",{className:"_1Risi"},u.default.createElement("div",{className:"wp clearfix"},(ne||oe||ue||ae||le)&&u.default.createElement("dl",null,u.default.createElement("dt",null,"已选"),u.default.createElement("dd",null,ne?u.default.createElement("a",{onClick:function(){return j("")}},ne):null,ue?u.default.createElement("a",{onClick:function(){return k("")}},ue):null,oe?u.default.createElement("a",{onClick:function(){return C("")}},oe):null,ae?u.default.createElement("a",{onClick:function(){return L("")}},ae):null,le?u.default.createElement("a",{onClick:function(){return R("")}},le):null)),u.default.createElement("dl",{className:"clearfix"},u.default.createElement("dt",null,"分类"),u.default.createElement("dd",null,J.map((function(e){return u.default.createElement("a",{onClick:function(){return j(e.id)},key:e.id,className:(0,a.default)(w===e.id?"cur":"",v)},e.title)})))),u.default.createElement("dl",{className:"clearfix"},u.default.createElement("dt",null,"类型"),u.default.createElement("dd",null,Q.map((function(e){return u.default.createElement("a",{onClick:function(){return k(e.id)},key:e.id,className:(0,a.default)(M===e.id?"cur":"",v)},e.title)})))),u.default.createElement("dl",{className:"clearfix"},u.default.createElement("dt",null,"地区"),u.default.createElement("dd",null,X.map((function(e){return u.default.createElement("a",{onClick:function(){return C(e.title)},key:e.id,className:(0,a.default)(A===e.title?"cur":"",v)},e.title)})))),u.default.createElement("dl",{className:"clearfix"},u.default.createElement("dt",null,"年份"),u.default.createElement("dd",null,Y.map((function(e){return u.default.createElement("a",{onClick:function(){return L(e.title)},key:e.id,className:(0,a.default)(D===e.title?"cur":"",v)},e.title)})))),u.default.createElement("dl",{className:"clearfix"},u.default.createElement("dt",null,"字母"),u.default.createElement("dd",null,Z.map((function(e){return u.default.createElement("a",{onClick:function(){return R(e.title)},key:e.id,className:(0,a.default)(I===e.title?"cur":"",v)},e.title)})))),u.default.createElement("dl",{className:"clearfix"},u.default.createElement("dt",null,"排序"),u.default.createElement("dd",null,[{title:"最新",id:"addtime"},{title:"评分",id:"gold"},{title:"热门",id:"hits"}].map((function(e){return u.default.createElement("a",{onClick:function(){return q(e.id)},key:e.id,className:(0,a.default)(W===e.id?"cur":"",v)},e.title)})),B()?u.default.createElement("span",null,"你搜索的是：",u.default.createElement("b",null,ee)):null)))),u.default.createElement("div",{className:"wp"},u.default.createElement(f.default,{id:w||3,order:W,letter:I,year:D,mcid:M,area:A,limit:30,wd:g,scrollLoad:!0})))};E.loadDataOnServer=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r,n,a,u,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.store,n=t.match,a=t.res,u=t.req,!(l=t.user)){e.next=3;break}return e.abrupt("return",{code:200});case 3:return e.next=5,(0,c.configLoad)({tag:"list"})(r.dispatch,r.getState);case 5:return e.next=7,f.default.loadDataOnServer({store:r,match:n,res:a,req:u,user:l,type:_});case 7:return e.abrupt("return",{code:200});case 8:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function l(e){y(u,n,a,l,o,"next",e)}function o(e){y(u,n,a,l,o,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}();var O=(0,d.default)(E);t.default=O},508:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t){t.history;var r,n,u=t.location,i=t.match,f=(t.staticContext,(0,a.useState)("")),s=(n=2,function(e){if(Array.isArray(e))return e}(r=f)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,u=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,u=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw u}}return r}}(r,n)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=s[0],p=s[1],y=(0,l.useStore)(),v=u.pathname,b=u.search;return u.params=b?(0,c.default)(b):{},(0,a.useEffect)((function(){return(0,o.setScrollPosition)(v+b)(y.dispatch,y.getState),function(){(0,o.saveScrollPosition)(v+b)(y.dispatch,y.getState)}}),[v,b,y.dispatch,y.getState]),m?a.default.createElement("div",null,m):a.default.createElement(e,{match:i,setNotFound:p})}return t.loadDataOnServer=e.loadDataOnServer||function(){return{code:200}},t.propTypes={history:u.default.object,location:u.default.object,match:u.default.object,staticContext:u.default.object},t};var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e,t&&t.set(e,r);return r}(r(0)),u=i(r(8)),l=r(58),o=r(510),c=i(r(511));function i(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},509:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;var a=i(r(0)),u=i(r(8)),l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e,t&&t.set(e,r);return r}(r(467)),o=r(64);function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function i(e){return e&&e.__esModule?e:{default:e}}function f(e){var t=e.title,r=e.url,n=e.children,u="";return u+=t||o.name,t&&(r||(u+=" - ".concat(o.name))),a.default.createElement(a.default.Fragment,null,a.default.createElement(l.ReactTitle,{title:u}),n?a.default.createElement(l.default,null,n):null)}f.propTypes={title:u.default.string,children:u.default.any,url:u.default.string}},510:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setScrollPosition=function(e){return function(t,r){t({type:"SET_SCROLL_POSITION",name:e})}},t.saveScrollPosition=function(e){return function(t,r){t({type:"SAVE_SCROLL_POSITION",name:e})}}},511:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){return e.substr(1).split("&").reduce((function(e,t){if(t){var r=t.split("=");e[r[0]]=r[1]||""}return e}),{})};t.default=n},512:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(0)),a=l(r(8)),u=l(r(177));function l(e){return e&&e.__esModule?e:{default:e}}r(468);var o=function(e){var t=e.height,r=void 0===t?150:t;return n.default.createElement("div",{className:"_38l9s",style:{height:r}},n.default.createElement(u.default,null))};o.propTypes={height:a.default.number};var c=o;t.default=c},520:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var n=o(r(0)),a=o(r(8)),u=r(63),l=r(174);function o(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.data;return n.default.createElement("div",{className:"_1rIfT"},t.map((function(e){return n.default.createElement("li",{key:e.id},n.default.createElement(u.Link,{to:"/subject/".concat(e.id)},n.default.createElement("div",{className:"load-demand","data-load-demand":'<img src="'.concat((0,l.formatPic)(e.pic,"orj360"),'" alt="').concat(e.title,'" />')}),n.default.createElement("h3",null,e.title),(0,l.isNumber)(e.status)?e.isDate?n.default.createElement("p",{className:"_1bowT"},"更新至",e.status,"话"):n.default.createElement("p",null,"更新至",e.status,"话"):e.isDate?n.default.createElement("p",{className:"_1bowT"},e.status):n.default.createElement("p",null,e.status)))})))}r(470),c.defaultProps={data:[]},c.propTypes={data:a.default.array}},530:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if(Object.prototype.hasOwnProperty.call(e,u)){var l=a?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}r.default=e,t&&t.set(e,r);return r}(r(0)),u=d(r(8)),l=r(58),o=r(175),c=r(122),i=d(r(520)),f=d(r(512));function d(e){return e&&e.__esModule?e:{default:e}}function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function m(e,t,r,n,a,u,l){try{var o=e[u](l),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,a)}r(470);var p=function(e,t){return void 0===e||""===e||"-"===e?t?"addtime":"":"全部"===e?"":e},y={tv:201,ova:202,juchang:203,tebie:4,zhenren:204,qita:35},v=function(e){var t=e.id,r=e.mcid,n=e.year,u=e.area,d=e.wd,s=e.letter,m=e.lz,y=e.order,v=""+t+p(r)+p(n)+p(u)+p(d)+p(s)+p(m)+p(y,1),b=(0,l.useSelector)((function(e){return(0,c.getList)(e,v)})),h=(0,l.useStore)(),g=(0,a.useCallback)((function(){var e;e={id:t,mcid:p(r),year:p(n),area:p(u),wd:p(d),letter:p(s),lz:p(m),order:p(y,1)},(0,o.listLoad)(e)(h.dispatch,h.getState)}),[u,t,s,m,r,y,h.dispatch,h.getState,d,n]);(0,a.useEffect)((function(){return b.data||g(),ArriveFooter.add(t,g),function(){ArriveFooter.remove(t)}}),[t,b.data,g]);var S=b||{},_=S.data,E=void 0===_?[]:_,O=S.loading;return a.default.createElement("div",{className:"_2f0S7"},a.default.createElement("div",{className:"wp"},a.default.createElement(i.default,{data:E})),O?a.default.createElement(f.default,null):null)};v.propTypes={id:u.default.any,mcid:u.default.any,year:u.default.any,area:u.default.string,wd:u.default.string,letter:u.default.string,lz:u.default.any,order:u.default.string},v.loadDataOnServer=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var r,n,a,u,l,c,i,f,d,s,m,v,b;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.store,n=t.match,t.res,t.req,t.user,a=n.params,u=a.name,l=a.mcid,c=a.year,i=a.area,f=a.wd,d=void 0===f?"":f,s=a.order,m=a.letter,v=a.lz,b=y[u]||3,e.next=5,(0,o.listLoad)({id:b,mcid:p(l),year:p(c),area:p(i),wd:p(d),letter:p(m),lz:p(v),order:p(s,1)})(r.dispatch,r.getState);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,a){var u=e.apply(t,r);function l(e){m(u,n,a,l,o,"next",e)}function o(e){m(u,n,a,l,o,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}();var b=v;t.default=b},534:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.configLoad=function(e){var t=e.tag,r=void 0===t?"":t;return function(e,t){return(0,a.default)({dispatch:e,getState:t,name:r,reducerName:"config",actionType:"GET_CONFIG",api:"config",params:{tag:r}})}};var n,a=(n=r(176))&&n.__esModule?n:{default:n}}}]);