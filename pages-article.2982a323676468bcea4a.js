(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[4],{200:function(e,t,a){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=w();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var o=n?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}a.default=e,t&&t.set(e,a);return a}(a(0)),l=a(63),o=a(58),c=a(553),i=a(188),u=a(515),f=a(80),d=a(178),s=E(a(529)),m=E(a(177)),p=E(a(513)),v=E(a(525)),y=E(a(524)),h=E(a(554)),g=E(a(508)),b=E(a(509));function E(e){return e&&e.__esModule?e:{default:e}}function w(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return w=function(){return e},e}function _(e,t,a,r,n,l,o){try{var c=e[l](o),i=c.value}catch(e){return void a(e)}c.done?t(i):Promise.resolve(i).then(r,n)}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a(500);var k=function(){var e=S((0,n.useState)(!1),2),t=e[0],a=e[1],r=S((0,n.useState)({}),2),g=r[0],E=r[1],w=(0,n.useRef)(),_=(0,l.useLocation)(),N=(0,l.useRouteMatch)().params.id,k=(0,o.useStore)(),O=(0,o.useSelector)((function(e){return(0,f.getUserInfo)(e)})),j=(0,o.useSelector)((function(e){return(0,i.getArticle)(e,N)})),A=(0,o.useSelector)((function(e){return(0,d.getNewsIndex)(e,"newslist",44)}));(0,n.useEffect)((function(){var e;j.data||(e={id:N},(0,c.article)(e)(k.dispatch,k.getState)),A.data||function(e){(0,u.newsIndex)(e)(k.dispatch,k.getState)}({name:"newslist",id:44,order:"hits_week"}),P()}),[j.data,N,A.data,k.dispatch,k.getState]);var P=function(){var e=w.current;document.body.addEventListener("click",(function(t){var r=/Firefox/.test(navigator.userAgent)?t.rangeParent.id||t.rangeParent.parentNode.id:(t.path.filter((function(e){return"content"===e.id}))[0]||[]).id;if("IMG"===t.target.nodeName&&e&&"content"===r){t.preventDefault(),t.stopPropagation();var n={param:{}},l=e.getElementsByTagName("img");n.param.imageArray=[];for(var o=0;o<l.length;o++)n.param.imageArray.push({url:l[o].src});for(var c=0;c<l.length;c++)t.target.src===n.param.imageArray[c].url&&(n.param.index=c);a(!0),E(n.param)}}))},M=j.data,x=void 0===M?{}:M,C=j.loading,L=A.data||[],D=(O.userid,x.title),I=x.name,T=(x.cid,x.pic),R=void 0===T?"":T,W=x.remark,q=x.keywords,$=x.addtime,F=x.inputer,G=x.tag,U=void 0===G?[]:G,K=x.prev,B=x.next,H=x.jump,z=x.original,X=x.content,J=void 0===X?"":X,V=(x.playname,x.playurl,x.vodlist),Z=void 0===V?[]:V,Q={pic:R,title:"".concat(D," - ").concat(I),desc:W,url:"/article/".concat(N)},Y=g.imageArray,ee=void 0===Y?[]:Y,te=g.index;return C||!x.title?n.default.createElement(m.default,null):(H&&"undefined"!=typeof window&&(window.location.href=H),n.default.createElement("div",{className:"wp mt20 clearfix"},n.default.createElement(b.default,{title:D},n.default.createElement("meta",{property:"og:locale",content:"zh_CN"}),n.default.createElement("meta",{property:"og:type",content:"article"}),n.default.createElement("meta",{property:"og:title",content:D}),n.default.createElement("meta",{property:"og:description",content:W}),n.default.createElement("meta",{property:"og:image",content:R}),n.default.createElement("meta",{property:"og:url",content:"/article/".concat(N)}),n.default.createElement("meta",{property:"og:site_name",content:I}),n.default.createElement("meta",{name:"description",content:W}),n.default.createElement("meta",{name:"keywords",content:q})),n.default.createElement("div",{className:"fl left"},n.default.createElement("article",{className:"kkyqI"},n.default.createElement("div",{className:"_30FX1"},n.default.createElement("h1",null,D),n.default.createElement("div",{className:"_2K_pc"},n.default.createElement("span",null,"来源：",F||"网络"),n.default.createElement("span",null,"更新时间：",$))),n.default.createElement("div",{ref:w,id:"content",className:"_3AAG0",dangerouslySetInnerHTML:{__html:(0,h.default)(J)}}),n.default.createElement("div",{className:"cU802"},n.default.createElement("a",{href:z,target:"_blank",rel:"noreferrer"},"点击查看原文")),t?n.default.createElement("div",{className:"uVm7Z",onClick:function(){return a(e=!1),void(e||(g.index=void 0,E(g)));var e}},n.default.createElement("span",null),void 0!==te?n.default.createElement(s.default,{Pagination:!0,Controller:!0,Start:te,Continuous:!1},ee.map((function(e,t){return n.default.createElement("div",{className:"swipe-item",key:e.url+t},n.default.createElement("img",{src:e.url}))}))):null):null,n.default.createElement("div",{className:"_3SpCF"},n.default.createElement(v.default,{tag:U,config:Q,location:_})),n.default.createElement("div",{className:"mt20 _2CuRd"},K?n.default.createElement("p",null,"上一篇：",n.default.createElement(l.Link,{to:"/article/".concat(K.id)},K.title)):null,B?n.default.createElement("p",null,"下一篇：",n.default.createElement(l.Link,{to:"/article/".concat(B.id)},B.title)):null),n.default.createElement("div",{className:"mt20 _2706V"},n.default.createElement("div",{className:"title"},n.default.createElement("h2",null,"推荐新闻(一周热门)"),n.default.createElement(l.Link,{to:"/news"},"更多",n.default.createElement("i",{className:"iconfont"},""))),n.default.createElement(y.default,{data:L}),n.default.createElement("div",{className:"qS0WJ"},n.default.createElement(l.Link,{to:"/news"},"查看更多最新资讯"))))),n.default.createElement("aside",{className:"fr right"},n.default.createElement(p.default,{data:Z}))))};k.loadDataOnServer=function(){var e,t=(e=regeneratorRuntime.mark((function e(t){var a,r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.store,r=t.match,t.res,t.req,!t.user){e.next=3;break}return e.abrupt("return",{code:200});case 3:return n=r.params.id,e.next=6,(0,c.article)({id:n})(a.dispatch,a.getState);case 6:return e.abrupt("return",{code:200});case 7:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(r,n){var l=e.apply(t,a);function o(e){_(l,r,n,o,c,"next",e)}function c(e){_(l,r,n,o,c,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}();var O=(0,g.default)(k);t.default=O},524:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=c(a(0)),n=c(a(8)),l=a(63),o=a(174);function c(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.data,a={211:"zixun",206:"donghua",205:"manhua",207:"cast",208:"bagua",221:"jianping",212:"pic",222:"video",214:"yugao",215:"op",216:"bgm",217:"ed",223:"cm",220:"mad",213:"cosplay",218:"shengrou",219:"tedian",209:"chanye"};return r.default.createElement("ul",{className:"_28wXy"},t.map((function(e){return r.default.createElement("li",{key:e.id},r.default.createElement(l.Link,{to:"/article/".concat(e.id)},e.pic?r.default.createElement("div",{className:"load-demand","data-load-demand":'<img src="'.concat((0,o.formatPic)(e.pic,"orj360"),'" alt="').concat(e.title,'" />')}):null),r.default.createElement("div",{className:"_3dT1c"},r.default.createElement("h3",null,r.default.createElement(l.Link,{to:"/article/".concat(e.id)},e.title)),r.default.createElement("div",{className:"n2eC1"}," "),r.default.createElement("p",null,r.default.createElement("span",{className:"_16ybE"},r.default.createElement("i",{className:"iconfont"},""),"分享"),r.default.createElement("span",null,"分类：",r.default.createElement(l.Link,{to:"/news/".concat(a[e.cid]||"news")},e.name)),r.default.createElement("span",null,"时间：",e.addtime))))})))}a(475),i.defaultProps={data:[]},i.propTypes={data:n.default.array}},525:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var r=c(a(0)),n=a(63),l=c(a(8)),o=c(a(528));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=e.tag,a=e.config,l=e.location;return r.default.createElement("div",{className:"_2hGq7"},r.default.createElement("div",{className:"_8tDCI"},t.map((function(e,t){return r.default.createElement(n.Link,{to:"/search/".concat(e),key:t},"#",e)}))),r.default.createElement("div",{className:"_3KjoG"},r.default.createElement(o.default,{data:a,location:l})))}a(476),i.defaultProps={tag:[]},i.propTypes={tag:l.default.array,config:l.default.object,location:l.default.object}},529:function(e,t,a){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;var n,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var o=n?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}a.default=e,t&&t.set(e,a);return a}(a(0)),o=(n=a(8))&&n.__esModule?n:{default:n},c=a(477);function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],r=!0,n=!1,l=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){n=!0,l=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function d(e){var t=e.Pagination,a=e.Controller,r=e.Autoplay,n=void 0===r?0:r,o=e.Start,i=void 0===o?0:o,f=e.Continuous,d=void 0===f||f,s=e.children,m=u((0,l.useState)(0),2),p=m[0],v=m[1],y=(0,l.useRef)(),h=Array.from(Array(s.length),(function(e,t){return t}))||[];return l.default.createElement("div",{className:"_1WipW"},l.default.createElement(c.Swipe,{ref:y,startSlide:i,speed:300,auto:n,draggable:!0,continuous:d,autoRestart:!1,disableScroll:!1,stopPropagation:!1,callback:function(e){v(e)},transitionEnd:function(){y.current.instance.restart()}},s),t?l.default.createElement("div",{className:"swiper-page"},h.map((function(e){return l.default.createElement("em",{key:e,className:e===p?"cur":"",onClick:function(){return t=e,void y.current.instance.slide(parseInt(t,10),300);var t}},e+1)}))):null,a?l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{className:"swiper-prev",onClick:function(e){e.stopPropagation(),y.current.instance.prev()}},l.default.createElement("i",{className:"iconfont"},"")),l.default.createElement("div",{className:"swiper-next",onClick:function(e){e.stopPropagation(),y.current.instance.next()}},l.default.createElement("i",{className:"iconfont"},""))):null)}a(478),d.propTypes={children:o.default.array,Pagination:o.default.bool,Controller:o.default.bool,Continuous:o.default.bool,Start:o.default.number,Autoplay:o.default.number}},553:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.article=function(e){var t=e.id;return function(e,a){return(0,n.default)({dispatch:e,getState:a,name:t,reducerName:"article",actionType:"GET_NEWS_ARTICLE",api:"newsDetail",params:{id:t}})}};var r,n=(r=a(176))&&r.__esModule?r:{default:r}},554:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n=(r=a(555))&&r.__esModule?r:{default:r};t.default=function(e){return(0,n.default)(e)}},555:function(e,t,a){"use strict";function r(e){e=e||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",a=t.length,r="",n=0;n<e;n++)r+=t.charAt(Math.floor(Math.random()*a));return r}function n(e){var t=e.match(/(http:\/\/music\.163\.com|https:\/\/music\.163\.com|music\.163\.com)\/\#\/(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|$)/gi);return t&&t.length>0&&t.map((function(t){var a,r=-1;-1!=t.indexOf("/#/song?")?r=2:-1!=t.indexOf("/#/playlist?")?r=0:-1!=t.indexOf("/#/album?")&&(r=1);try{t.split("?")[1].split("&").map((function(e){var t=e.split("=");"id"==t[0]&&(a=t[1])}))}catch(e){}if(-1!=r&&a)if(2==r){var n="//music.163.com/outchain/player?type=2&id=".concat(a,"&auto=0&height=66");e=e.replace(t,'<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="'.concat(n,'"></iframe>'))}else{var l="//music.163.com/outchain/player?type=".concat(r,"&id=").concat(a,"&height=430");e=e.replace(t,'<iframe type="music" src="'.concat(l,'" height="430"></iframe>'))}})),e}function l(e){var t=e.match(/(http:\/\/v\.youku\.com|https:\/\/v\.youku\.com|v\.youku\.com)\/v\_show\/id\_(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|$)/gi);return t&&0!=t.length?(t.map((function(t){var a;try{a=t.split("v.youku.com/v_show/id_")[1].split(".")[0]}catch(e){}if(a){var r="//player.youku.com/embed/".concat(a);e=e.replace(t,"<iframe width='100%' src='".concat(r,"' frameborder=0 'allowfullscreen'></iframe>"))}})),e):e}function o(e){var t=e.match(/(https:\/\/www\.bilibili\.com|https:\/\/bilibili\.com|http:\/\/www.bilibili\.com|http:\/\/bilibili\.com|www\.bilibili\.com|bilibili\.com)\/video\/av(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|$)/gi);return t&&0!=t.length?(t.map((function(t){var a;try{a=t.split("bilibili.com/video/av")[1].split("/")[0]}catch(e){}if(a){var r="//player.bilibili.com/player.html?aid=".concat(a);e=e.replace(t,'<iframe src="'.concat(r,'" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>'))}})),e):e}function c(e){var t=e.match(/(https:\/\/www\.youtube\.com|https:\/\/youtube\.com|http:\/\/www.youtube\.com|http:\/\/youtube\.com|www\.youtube\.com|youtube\.com)\/watch\?v\=(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|$)/gi);return t&&0!=t.length?(t.map((function(t){var a;try{t.split("?")[1].split("&").map((function(e){var t=e.split("=");t&&"v"==t[0]&&(a=t[1])}))}catch(e){}if(a){var r="//www.youtube.com/embed/".concat(a);e=e.replace(t,'<iframe width="100%" style="background:#f9f9f9;" src="'.concat(r,'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'))}})),e):e}function i(e){var t=e.match(/(https:\/\/v\.|http:\/\/v\.|v\.)qq\.com\/x\/cover\/(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|$)/gi);return t&&0!=t.length?(t.map((function(t){var a;try{var r=t.split("?")[0].split(".");5==(r=r[r.length-2].split("/")).length&&(a=t.split("?")[0].split("/").pop().split(".")[0])}catch(e){}if(a){var n="//v.qq.com/txp/iframe/player.html?vid=".concat(a);e=e.replace(t,'<iframe frameborder="0" src="'.concat(n,'" allowFullScreen="true"></iframe>'))}})),e):e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(e){if(!e)return"";e=e.replace("&nbsp;"," ");var t=/(<a(.*?)>(.*?)<\/a>|<img(.*?)>)/gi,a=[],n=e.match(t);n&&n.length>0&&e.match(t).map((function(t){var n="#"+r(18)+"#";a.push({id:n,value:t}),e=e.replace(t,n)}));var l=e.match(/(http:\/\/>http:\/\/|http:\/\/|https:\/\/|www\.|magnet\:\?xt\=)(.*?)(?=\s|http|https|\)|\>|\]|\}|\<|\"|\'|$)/gi);if(l&&l.length>0){l=l.sort((function(e,t){return t.length-e.length}));var o=[];l.map((function(t){var a="#"+r(18)+"#";o.push({id:a,value:t}),e=e.replace(t,a)})),o.map((function(t){var a=-1==t.value.indexOf("http")?"http:"+t.value:t.value;e=e.replace(t.id,"<a href=".concat(a,' target="_blank" rel="nofollow">').concat(t.value,"</a>"))}))}return a.length>0&&a.map((function(t){e=e.replace(t.id,t.value)})),e};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e=i(e=c(e=o(e=l(e=n(e))))),e=u(e)}}}]);