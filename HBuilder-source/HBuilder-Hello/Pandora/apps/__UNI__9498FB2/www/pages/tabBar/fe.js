!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=277)}({0:function(e,t){e.exports={"uni-icon":{fontFamily:"uniicons",fontWeight:"normal"},"uni-bg-red":{backgroundColor:"#F76260",color:"#FFFFFF"},"uni-bg-green":{backgroundColor:"#09BB07",color:"#FFFFFF"},"uni-bg-blue":{backgroundColor:"#007AFF",color:"#FFFFFF"},"uni-container":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",backgroundColor:"#f8f8f8"},"uni-padding-lr":{paddingLeft:"15",paddingRight:"15"},"uni-padding-tb":{paddingTop:"15",paddingBottom:"15"},"uni-header-logo":{paddingTop:"15",paddingRight:"15",paddingBottom:"15",paddingLeft:"15",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"10rpx"},"uni-header-image":{width:"80",height:"80"},"uni-hello-text":{marginBottom:"20"},"hello-text":{color:"#7A7E83",fontSize:"14",lineHeight:"20"},"hello-link":{color:"#7A7E83",fontSize:"14",lineHeight:"20"},"uni-panel":{marginBottom:"12"},"uni-panel-h":{backgroundColor:"#ffffff",flexDirection:"row",alignItems:"center",paddingTop:"12",paddingRight:"12",paddingBottom:"12",paddingLeft:"12"},"uni-panel-h-on":{backgroundColor:"#f0f0f0"},"uni-panel-text":{flex:1,color:"#000000",fontSize:"14",fontWeight:"normal"},"uni-panel-icon":{marginLeft:"15",color:"#999999",fontSize:"14",fontWeight:"normal",transform:"rotate(0deg)",transitionDuration:0,transitionProperty:"transform"},"@TRANSITION":{"uni-panel-icon":{duration:0,property:"transform"}},"uni-panel-icon-on":{transform:"rotate(180deg)"},"uni-navigate-item":{flexDirection:"row",alignItems:"center",backgroundColor:"#FFFFFF",borderTopStyle:"solid",borderTopColor:"#f0f0f0",borderTopWidth:"1",paddingTop:"12",paddingRight:"12",paddingBottom:"12",paddingLeft:"12","backgroundColor:active":"#f8f8f8"},"uni-navigate-text":{flex:1,color:"#000000",fontSize:"14",fontWeight:"normal"},"uni-navigate-icon":{marginLeft:"15",color:"#999999",fontSize:"14",fontWeight:"normal"},"uni-list-cell":{position:"relative",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"},"uni-list-cell-pd":{paddingTop:"22rpx",paddingRight:"30rpx",paddingBottom:"22rpx",paddingLeft:"30rpx"},"flex-r":{flexDirection:"row"},"flex-c":{flexDirection:"column"},"a-i-c":{alignItems:"center"},"j-c-c":{justifyContent:"center"},"list-item":{flexDirection:"row",paddingTop:"10",paddingRight:"10",paddingBottom:"10",paddingLeft:"10"}}},1:function(e,t,n){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.weexPlus=t.default=void 0,i="function"==typeof getUni?getUni:function(){var e=function(e){return"function"==typeof e},t=/^\$|^on|^create|Sync$|Manager$|^pause/,n=["os","getCurrentSubNVue","getSubNVueById","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],i=function(e){return!(t.test(e)&&"createBLEConnection"!==e||~n.indexOf(e))},o=function(t){return function(){for(var n=arguments.length,i=Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e(o.success)||e(o.fail)||e(o.complete)?t.apply(void 0,[o].concat(i)):new Promise(function(e,n){t.apply(void 0,[Object.assign({},o,{success:e,fail:n})].concat(i)),Promise.prototype.finally=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})}}).then(function(e){return[null,e]}).catch(function(e){return[e]})}},r=[],s=void 0;function u(e){r.forEach(function(t){return t({origin:s,data:e})})}var c=a.webview.currentWebview().id,l=new BroadcastChannel("UNI-APP-SUBNVUE");function p(e){e.$processed=!0;var t=a.webview.currentWebview().id===e.id,n="uniNView"===e.__uniapp_origin_type&&e.__uniapp_origin_id,i=e.id;if(e.postMessage=function(e){n?l.postMessage({data:e,to:t?n:i}):b({type:"UniAppSubNVue",data:e})},e.onMessage=function(e){r.push(e)},e.__uniapp_mask_id){s=e.__uniapp_host;var o=e.__uniapp_mask,u=a.webview.getWebviewById(e.__uniapp_mask_id);u=u.parent()||u;var c=e.show,p=e.hide,f=e.close,d=function(){u.setStyle({mask:"none"})};e.show=function(){u.setStyle({mask:o});for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];return c.apply(e,n)},e.hide=function(){d();for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];return p.apply(e,n)},e.close=function(){d();for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];return f.apply(e,n)}}}function f(e){var t=a.webview.getWebviewById(e);return t&&!t.$processed&&p(t),t}l.onmessage=function(e){e.data.to===c&&u(e.data.data)};var d=weex.requireModule("plus"),g=weex.requireModule("globalEvent"),h=0,v={},_="__uniapp__service";g.addEventListener("plusMessage",function(e){"UniAppJsApi"===e.data.type?y(e.data.id,e.data.data):"UniAppSubNVue"===e.data.type?u(e.data.data,e.data.options):"onNavigationBarButtonTap"===e.data.type?"function"==typeof w&&w(e.data.data):"onNavigationBarSearchInputChanged"===e.data.type?"function"==typeof k&&k(e.data.data):"onNavigationBarSearchInputConfirmed"===e.data.type?"function"==typeof T&&T(e.data.data):"onNavigationBarSearchInputClicked"===e.data.type&&"function"==typeof D&&D(e.data.data)});var y=function(e,t){var n=v[e];n?(n(t),n.keepAlive||delete v[e]):console.error("callback["+e+"] is undefined")},m=function(t){var n,i,a=t.id,o=t.type,r=t.params;v[a]=(i=function(t){e(n)?n(t):n&&(~t.errMsg.indexOf(":ok")?e(n.success)&&n.success(t):~t.errMsg.indexOf(":fail")&&e(n.fail)&&n.fail(t),e(n.complete)&&n.complete(t))},(e(n=r)||n&&e(n.callback))&&(i.keepAlive=!0),i),d.postMessage({id:a,type:o,params:r},_)};function b(e){d.postMessage(e,_)}var S=function(e){return function(t){m({id:h++,type:e,params:t})}},w=void 0,k=void 0,T=void 0,D=void 0;function x(e){w=e}function C(e){k=e}function N(e){T=e}function I(e){D=e}function B(e){return weex.requireModule(e)}var P=weex.requireModule("dom"),R=weex.requireModule("globalEvent"),O=[];function j(e){"function"==typeof e&&(this.isUniAppReady?e():O.push(e))}R.addEventListener("plusMessage",function(e){"UniAppReady"===e.data.type&&(j.isUniAppReady=!0,O.length&&(O.forEach(function(e){return e()}),O=[]))});var q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$=weex.requireModule("stream"),M="GET",E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:M,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/x-www-form-urlencoded";return"object"===(void 0===e?"undefined":q(e))?"POST"===t.toUpperCase()&&"application/json"===n.toLowerCase()?JSON.stringify(e):Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&"):e},A=weex.requireModule("plusstorage"),F="__TYPE",L=weex.requireModule("clipboard"),U=function(){if("function"==typeof getUniEmitter)return getUniEmitter;var e={$on:function(){console.warn("uni.$on failed")},$off:function(){console.warn("uni.$off failed")},$once:function(){console.warn("uni.$once failed")},$emit:function(){console.warn("uni.$emit failed")}};return function(){return e}}();function V(e,t,n){return e[t].apply(e,n)}var H=Object.freeze({loadFontFace:function(t){var n=t.family,i=t.source,a=(t.desc,t.success),o=(t.fail,t.complete);P.addRule("fontFace",{fontFamily:n,src:i.replace(/"/g,"'")});var r={errMsg:"loadFontFace:ok",status:"loaded"};e(a)&&a(r),e(o)&&o(r)},ready:j,request:function(t){var n=t.url,i=t.data,a=t.header,o=t.method,r=void 0===o?"GET":o,s=t.dataType,u=void 0===s?"json":s,c=(t.responseType,t.success),l=t.fail,p=t.complete,f=!1,d=!1,g={};if(a)for(var h in a)d||"content-type"!==h.toLowerCase()?g[h]=a[h]:(d=!0,g["Content-Type"]=a[h]);return r===M&&i&&(n=n+(~n.indexOf("?")?"&"===n.substr(-1)||"?"===n.substr(-1)?"":"&":"?")+E(i)),$.fetch({url:n,method:r,headers:g,type:"json"===u?"json":"text",body:r!==M?E(i,r,g["Content-Type"]):""},function(t){var n=t.status,i=(t.ok,t.statusText,t.data),a=t.headers,o={};!n||-1===n||f?(o.errMsg="request:fail",e(l)&&l(o)):(o.data=i,o.statusCode=n,o.header=a,e(c)&&c(o)),e(p)&&p(o)}),{abort:function(){f=!0}}},getStorage:function(t){var n=t.key,i=(t.data,t.success),a=t.fail,o=t.complete;A.getItem(n+F,function(t){if("success"===t.result){var r=t.data;A.getItem(n,function(t){if("success"===t.result){var n=t.data;r&&n?("String"!==r&&(n=JSON.parse(n)),e(i)&&i({errMsg:"getStorage:ok",data:n})):(t.errMsg="setStorage:fail",e(a)&&a(t))}else t.errMsg="setStorage:fail",e(a)&&a(t);e(o)&&o(t)})}else t.errMsg="setStorage:fail",e(a)&&a(t),e(o)&&o(t)})},setStorage:function(t){var n=t.key,i=t.data,a=t.success,o=t.fail,r=t.complete,s="String";"object"===(void 0===i?"undefined":q(i))&&(s="Object",i=JSON.stringify(i)),A.setItem(n,i,function(t){"success"===t.result?A.setItem(n+F,s,function(t){"success"===t.result?e(a)&&a({errMsg:"setStorage:ok"}):(t.errMsg="setStorage:fail",e(o)&&o(t))}):(t.errMsg="setStorage:fail",e(o)&&o(t)),e(r)&&r(t)})},removeStorage:function(t){var n=t.key,i=(t.data,t.success),a=t.fail,o=t.complete;A.removeItem(n,function(t){"success"===t.result?e(i)&&i({errMsg:"removeStorage:ok"}):(t.errMsg="removeStorage:fail",e(a)&&a(t)),e(o)&&o(t)}),A.removeItem(n+F)},clearStorage:function(e){e.key,e.data,e.success,e.fail,e.complete},getClipboardData:function(t){var n=t.success,i=(t.fail,t.complete);L.getString(function(t){var a={errMsg:"getClipboardData:ok",data:t.data};e(n)&&n(a),e(i)&&i(a)})},setClipboardData:function(t){var n=t.data,i=t.success,a=(t.fail,t.complete),o={errMsg:"setClipboardData:ok"};L.setString(n),e(i)&&i(o),e(a)&&a(o)},onSubNVueMessage:u,getSubNVueById:f,getCurrentSubNVue:function(){return f(a.webview.currentWebview().id)},$on:function(){return V(U(),"$on",[].concat(Array.prototype.slice.call(arguments)))},$off:function(){return V(U(),"$off",[].concat(Array.prototype.slice.call(arguments)))},$once:function(){return V(U(),"$once",[].concat(Array.prototype.slice.call(arguments)))},$emit:function(){return V(U(),"$emit",[].concat(Array.prototype.slice.call(arguments)))}}),J={os:{nvue:!0}},W={};return"undefined"!=typeof Proxy?W=new Proxy({},{get:function(e,t){if("os"===t)return{nvue:!0};if("postMessage"===t)return b;if("requireNativePlugin"===t)return B;if("onNavigationBarButtonTap"===t)return x;if("onNavigationBarSearchInputChanged"===t)return C;if("onNavigationBarSearchInputConfirmed"===t)return N;if("onNavigationBarSearchInputClicked"===t)return I;var n=H[t];return n||(n=S(t)),i(t)?o(n):n}}):(Object.keys(J).forEach(function(e){W[e]=J[e]}),W.postMessage=b,W.requireNativePlugin=B,W.onNavigationBarButtonTap=x,W.onNavigationBarSearchInputChanged=C,W.onNavigationBarSearchInputConfirmed=N,W.onNavigationBarSearchInputClicked=I,Object.keys({uploadFile:!0,downloadFile:!0,chooseImage:!0,previewImage:!0,getImageInfo:!0,saveImageToPhotosAlbum:!0,chooseVideo:!0,saveVideoToPhotosAlbum:!0,saveFile:!0,getSavedFileList:!0,getSavedFileInfo:!0,removeSavedFile:!0,openDocument:!0,setStorage:!0,getStorage:!0,getStorageInfo:!0,removeStorage:!0,clearStorage:!0,getLocation:!0,chooseLocation:!0,openLocation:!0,getSystemInfo:!0,getNetworkType:!0,makePhoneCall:!0,scanCode:!0,setScreenBrightness:!0,getScreenBrightness:!0,setKeepScreenOn:!0,vibrateLong:!0,vibrateShort:!0,addPhoneContact:!0,showToast:!0,showLoading:!0,hideToast:!0,hideLoading:!0,showModal:!0,showActionSheet:!0,setNavigationBarTitle:!0,setNavigationBarColor:!0,navigateTo:!0,redirectTo:!0,reLaunch:!0,switchTab:!0,navigateBack:!0,getProvider:!0,login:!0,getUserInfo:!0,share:!0,requestPayment:!0,subscribePush:!0,unsubscribePush:!0,onPush:!0,offPush:!0}).forEach(function(e){var t=H[e];t||(t=S(e)),i(e)?W[e]=o(t):W[e]=t})),W};var a=new WeexPlus(weex);t.weexPlus=a;var o=i(weex,a,BroadcastChannel);t.default=o},10:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=t.map(function(e){var t=Object.prototype.toString.call(e);if("[object object]"===t.toLowerCase())try{e="---BEGIN:JSON---"+JSON.stringify(e)+"---END:JSON---"}catch(t){e="[object object]"}else if(null===e)e="---NULL---";else if(void 0===e)e="---UNDEFINED---";else{var n=function(e){var t=Object.prototype.toString.call(e);return t.substring(8,t.length-1)}(e).toUpperCase();e="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+e+"---END:"+n+"---":String(e)}return e}),a="";if(i.length>1){var o=i.pop();a=i.join("---COMMA---"),0===o.indexOf(" at ")?a+=o:a+="---COMMA---"+o}else a=i[0];return a}},171:function(e,t,n){"use strict";var i=n(172),a=n.n(i);t.default=a.a},172:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{list:[{id:"button",name:"button",url:"/pages/fe/button/button"},{id:"checkbox",name:"checkbox",url:"/pages/fe/checkbox/checkbox"},{id:"radio",name:"radio",url:"/pages/fe/radio/radio"},{id:"label",name:"label",url:"/pages/fe/label/label"},{id:"form",name:"form",url:"/pages/fe/form/form"},{id:"movable-view",name:"movable-view",url:"/pages/fe/movable-view/movable-view"},{id:"swiper",name:"swiper",url:"/pages/fe/swiper/swiper"},{id:"swiper-vertical",name:"swiper-vertical",url:"/pages/fe/swiper-vertical/swiper-vertical"},{id:"scroll-view",name:"scroll-view",url:"/pages/fe/scroll-view/scroll-view"},{id:"slider",name:"slider",url:"/pages/fe/slider/slider"},{id:"switch",name:"switch",url:"/pages/fe/switch/switch"},{id:"navigator",name:"navigator",url:"/pages/fe/navigator/index"},{id:"progress",name:"progress",url:"/pages/fe/progress/progress"},{id:"lifecycle",name:"lifecycle",url:"/pages/fe/lifecycle/lifecycle"},{id:"global",name:"global",url:"/pages/fe/global/global"}],navigateFlag:!1}},methods:{triggerCollapse:function(e){if(this.list[e].pages)for(var t=0;t<this.list.length;++t)this.list[t].open=e===t&&!this.list[e].open;else this.goDetailPage(this.list[e].url)},goDetailPage:function(t){var n=this;this.navigateFlag||(this.navigateFlag=!0,e.navigateTo({url:t}),setTimeout(function(){n.navigateFlag=!1},200))}},onNavigationBarButtonTap:function(e){console.log(n(e," at pages/tabBar/fe.nvue:131"))}};t.default=i}).call(this,n(1).default,n(10).default)},2:function(e,t,n){"use strict";n.r(t),t.default={appid:"__UNI__9498FB2"}},205:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[n("view",{staticClass:["uni-container"]},[n("view",{staticClass:["uni-hello-text"]},[n("u-text",{staticClass:["hello-text"]},[e._v("NVUE前端组件")])]),e._l(e.list,function(t,i){return n("view",{key:t.id,staticClass:["uni-panel"]},[n("view",{staticClass:["uni-panel-h"],class:t.open?"uni-panel-h-on":"",on:{click:function(t){e.triggerCollapse(i)}}},[n("u-text",{staticClass:["uni-panel-text"]},[e._v(e._s(t.name))]),n("u-text",{staticClass:["uni-panel-icon","uni-icon"],class:t.open?"uni-panel-icon-on":""},[e._v(e._s(t.pages?"":""))])]),t.open?n("view",{staticClass:["uni-panel-c"]},e._l(t.pages,function(t,i){return n("view",{key:i,staticClass:["uni-navigate-item"],on:{click:function(n){e.goDetailPage(t.url)}}},[n("u-text",{staticClass:["uni-navigate-text"]},[e._v(e._s(t.name?t.name:t))]),n("u-text",{staticClass:["uni-navigate-icon","uni-icon"]},[e._v("")])])}),0):e._e()])})],2)])},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},277:function(e,t,n){"use strict";n.r(t);n(4),n(8);var i=n(69);i.default.mpType="page",i.default.route="pages/tabBar/fe",i.default.el="#root",new Vue(i.default)},3:function(e,t,n){"use strict";function i(e,t,n,i,a,o,r,s){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),i&&(c.functional=!0),o&&(c._scopeId="data-v-"+o),r?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},c._ssrRegister=u):a&&(u=s?function(){a.call(this,this.$root.$options.shadowRoot)}:a),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,u):[u]}return{exports:e,options:c}}n.d(t,"a",function(){return i})},4:function(e,t,n){"use strict";(function(e,t){function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}var c=n(5).version,l="__DC_STAT_UUID",p="__DC_UUID_VALUE";function f(){var n="";if("n"===h()){try{n=e.runtime.getDCloudId()}catch(e){n=""}return n}try{n=t.getStorageSync(l)}catch(e){n=p}if(!n){n=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(l,n)}catch(e){t.setStorageSync(l,p)}}return n}var d,g=function(){return parseInt((new Date).getTime()/1e3)},h=function(){return"n"},v=function(){var e="";return"wx"!==h()&&"qq"!==h()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},_=function(){return"n"===h()?e.runtime.version:""},y=function(){var t="";return"n"===h()&&(t=e.runtime.channel),t},m=0,b=0,S=function(){return m=g(),"n"===h()&&t.setStorageSync("__page__residence__time",g()),m},w=0,k=0,T=function(){var e=(new Date).getTime();return w=e,k=0,e},D=function(){var e=(new Date).getTime();return k=e,e},x=function(e){var t=0;return 0!==w&&(t=k-w),t=(t=parseInt(t/1e3))<1?1:t,"app"===e?{residenceTime:t,overtime:t>300}:"page"===e?{residenceTime:t,overtime:t>1800}:{residenceTime:t}},C=function(e){var t=getCurrentPages(),n=t[t.length-1].$vm,i=e._query,a=i&&"{}"!==JSON.stringify(i)?"?"+JSON.stringify(i):"";return e._query="","bd"===h()?n.$mp&&n.$mp.page.is+a:n.$scope&&n.$scope.route+a||n.$mp&&n.$mp.page.route+a},N=function(e){return!!("page"===e.mpType||e.$mp&&"page"===e.$mp.mpType||"page"===e.$options.mpType)},I=n(6).default,B=n(2).default||n(2),P=t.getSystemInfoSync(),R=function(){function n(){r(this,n),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:f(),ut:h(),mpn:v(),ak:B.appid,usv:c,v:_(),ch:y(),cn:"",pn:"",ct:"",t:g(),tt:"",p:"android"===P.platform?"a":"i",brand:P.brand||"",md:P.model,sv:P.system.replace(/(Android|iOS)\s/,""),mpsdk:P.SDKVersion||"",mpv:P.version||"",lang:P.language,pr:P.pixelRatio,ww:P.windowWidth,wh:P.windowHeight,sw:P.screenWidth,sh:P.screenHeight}}return u(n,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(D(),x("app").overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(e,t){this.__licationHide=!0,D();var n=x();T();var i=C(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},t)}},{key:"_pageShow",value:function(){var e,t,n=C(this),i=(e=getCurrentPages(),t=e[e.length-1].$vm,"bd"===h()?t.$mp&&t.$mp.page.is:t.$scope&&t.$scope.route||t.$mp&&t.$mp.page.route);if(this._navigationBarTitle.config=I&&I.pages[i]&&I.pages[i].titleNView&&I.pages[i].titleNView.titleText||I&&I.pages[i]&&I.pages[i].navigationBarTitleText||"",this.__licationShow)return T(),this.__licationShow=!1,void(this._lastPageRoute=n);if(D(),this._lastPageRoute=n,x("page").overtime){var a={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(a)}T()}},{key:"_pageHide",value:function(){if(!this.__licationHide){D();var e=x("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:e.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(e){this._sendEventRequest({key:e},0)}},{key:"_sendReportRequest",value:function(e){this._navigationBarTitle.lt="1";var n,i,a=e.query&&"{}"!==JSON.stringify(e.query)?"?"+JSON.stringify(e.query):"";this.statData.lt="1",this.statData.url=e.path+a||"",this.statData.t=g(),this.statData.sc=function(e){var n=h(),i="";return e||("wx"===n&&(i=t.getLaunchOptionsSync().scene),i)}(e.scene),this.statData.fvts=(n=t.getStorageSync("First__Visit__Time"),i=0,n?i=n:(i=g(),t.setStorageSync("First__Visit__Time",i),t.removeStorageSync("Last__Visit__Time")),i),this.statData.lvts=function(){var e=t.getStorageSync("Last__Visit__Time"),n=0;return n=e||"",t.setStorageSync("Last__Visit__Time",g()),n}(),this.statData.tvc=function(){var e=t.getStorageSync("Total__Visit__Count"),n=1;return e&&(n=e,n++),t.setStorageSync("Total__Visit__Count",n),n}(),"n"===h()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(e){var t=e.url,n=e.urlref,i=e.urlref_ts;this._navigationBarTitle.lt="11";var a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:t,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(a)}},{key:"_sendHideRequest",value:function(e,t){var n=e.urlref,i=e.urlref_ts,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(a,t)}},{key:"_sendEventRequest",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.key,n=void 0===t?"":t,i=e.value,a=void 0===i?"":i,o=this._lastPageRoute,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:o,ch:this.statData.ch,e_n:n,e_v:"object"==typeof a?JSON.stringify(a):a.toString(),usv:this.statData.usv,t:g(),p:this.statData.p};this.request(r)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;e.runtime.getProperty(e.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;B.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var i=this,a=g(),o=this._navigationBarTitle;e.ttn=o.page,e.ttpj=o.config,e.ttc=o.report;var r=this._reportingRequestData;if("n"===h()&&(r=t.getStorageSync("__UNI__STAT__DATA")||{}),r[e.lt]||(r[e.lt]=[]),r[e.lt].push(e),"n"===h()&&t.setStorageSync("__UNI__STAT__DATA",r),b=g(),"n"===h()&&(m=t.getStorageSync("__page__residence__time")),!(b-m<10)||n){var s=this._reportingRequestData;"n"===h()&&(s=t.getStorageSync("__UNI__STAT__DATA")),S();var u=[],l=[],p=[],f=function(e){s[e].forEach(function(t){var n=function(e){var t="";for(var n in e)t+=n+"="+e[n]+"&";return t.substr(0,t.length-1)}(t);0===e?u.push(n):3===e?p.push(n):l.push(n)})};for(var d in s)f(d);u.push.apply(u,l.concat(p));var v={usv:c,t:a,requests:JSON.stringify(u)};this._reportingRequestData={},"n"===h()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==h()||"a"!==this.statData.p?this._sendRequest(v):setTimeout(function(){i._sendRequest(v)},200):this.imageRequest(v)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(e){var t=new Image,n=function(e){var t=Object.keys(e).sort(),n={},i="";for(var a in t)n[t[a]]=e[t[a]],i+=t[a]+"="+e[t[a]]+"&";return{sign:"",options:i.substr(0,i.length-1)}}(function(e){var t={};for(var n in e)t[n]=encodeURIComponent(e[n]);return t}(e)).options;t.src="https://tongji.dcloud.io/uni/stat.gif?"+n}},{key:"sendEvent",value:function(e,t){var n,i;(i=t,(n=e)?"string"!=typeof n?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):n.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof i&&"object"!=typeof i?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof i&&i.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===n&&"string"!=typeof i?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==e?this._sendEventRequest({key:e,value:"object"==typeof t?JSON.stringify(t):t},1):this._navigationBarTitle.report=t)}}]),n}(),O=function(e){function n(){var e;return r(this,n),(e=i(this,a(n).call(this))).instance=null,"function"==typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(n,R),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(e,t){this.self=t,S(),this.__licationShow=!0,this._sendReportRequest(e,!0)}},{key:"load",value:function(e,t){if(!t.$scope&&!t.$mp){var n=getCurrentPages();t.$scope=n[n.length-1]}this.self=t,this._query=e}},{key:"show",value:function(e){this.self=e,N(e)?this._pageShow(e):this._applicationShow(e)}},{key:"ready",value:function(e){}},{key:"hide",value:function(e){this.self=e,N(e)?this._pageHide(e):this._applicationHide(e,!0)}},{key:"error",value:function(e){this._platform;var t="";t=e.message?e.stack:JSON.stringify(e);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:t,usv:this.statData.usv,t:g(),p:this.statData.p};this.request(n)}}]),n}().getInstance(),j=!1,q={onLaunch:function(e){O.report(e,this)},onReady:function(){O.ready(this)},onLoad:function(e){if(O.load(e,this),this.$scope&&this.$scope.onShareAppMessage){var t=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(e){return O.interceptShare(!1),t.call(this,e)}}},onShow:function(){j=!1,O.show(this)},onHide:function(){j=!0,O.hide(this)},onUnload:function(){j?j=!1:O.hide(this)},onError:function(e){O.error(e)}};((d=n(7)).default||d).mixin(q),t.report=function(e,t){O.sendEvent(e,t)}}).call(this,n(1).weexPlus,n(1).default)},5:function(e){e.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-23320190923002",_inBundle:!1,_integrity:"sha512-Tx/EBxz3jI/gKtvaPSUwoLpGcp1BMtKyPxp9iFmX4mRiJbzP6SnrdFJmYdwHLwdtCVDU9DIolB3QtHMbL4+ZHQ==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-23320190923002.tgz",_shasum:"da7ead9bdc4b8e50e142563cd1acb8e7b048d67b",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/fxy/Documents/DCloud/HbuilderX-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"99ef233d7acf114d7aaecd91dbdc983a26bfbc5b",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-23320190923002"}},6:function(e,t,n){"use strict";n.r(t),t.default={pages:{},globalStyle:{}}},69:function(e,t,n){"use strict";var i=n(205),a=n(171),o=n(3);var r=Object(o.a)(a.default,i.a,i.b,!1,null,null,"e3bfcc52");(function(){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style)}).call(r),t.default=r.exports},7:function(e,t){e.exports=Vue},8:function(e,t,n){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(n(9).default,Vue.prototype.__$appStyle__)},9:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t.default=a.a}});