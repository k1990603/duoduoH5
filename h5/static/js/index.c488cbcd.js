(function(e){function t(t){for(var n,a,l=t[0],c=t[1],d=t[2],f=0,b=[];f<l.length;f++)a=l[f],o[a]&&b.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(t);while(b.length)b.shift()();return r.push.apply(r,d||[]),i()}function i(){for(var e,t=0;t<r.length;t++){for(var i=r[t],n=!0,a=1;a<i.length;a++){var c=i[a];0!==o[c]&&(n=!1)}n&&(r.splice(t--,1),e=l(l.s=i[0]))}return e}var n={},o={index:0},r=[];function a(e){return l.p+"static/js/"+({"pages-HM-search-HM-search":"pages-HM-search-HM-search","pages-detail-detail":"pages-detail-detail","pages-hot-hot":"pages-hot-hot","pages-hotIndex-hotIndex":"pages-hotIndex-hotIndex","pages-new-new":"pages-new-new"}[e]||e)+"."+{"pages-HM-search-HM-search":"a45734f3","pages-detail-detail":"91b40e20","pages-hot-hot":"2fef7fac","pages-hotIndex-hotIndex":"41043940","pages-new-new":"9780d6f3"}[e]+".js"}function l(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.e=function(e){var t=[],i=o[e];if(0!==i)if(i)t.push(i[2]);else{var n=new Promise(function(t,n){i=o[e]=[t,n]});t.push(i[2]=n);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=a(e),r=function(t){c.onerror=c.onload=null,clearTimeout(d);var i=o[e];if(0!==i){if(i){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+n+": "+r+")");a.type=n,a.request=r,i[1](a)}o[e]=void 0}};var d=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(i,n,function(t){return e[t]}.bind(null,n));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/H5/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var s=d;r.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("d818")},"02f7":function(e,t,i){"use strict";i.r(t);var n=i("8331"),o=i("6bae");for(var r in o)"default"!==r&&function(e){i.d(t,e,function(){return o[e]})}(r);i("48ae");var a,l=i("f0c5"),c=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],a);t["default"]=c.exports},2687:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=n},"428e":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={pages:{"pages/new/new":{navigationBarTitleText:"精选",enablePullDownRefresh:!0},"pages/hotIndex/hotIndex":{navigationBarTitleText:"推荐",enablePullDownRefresh:!0},"pages/detail/detail":{navigationBarTitleText:"详情",navigationBarBackgroundColor:"#000000",backgroundColor:"#000000",titleNView:{buttons:[{type:"favorite"}]}},"pages/hot/hot":{navigationBarTitleText:"分类",enablePullDownRefresh:!0},"pages/HM-search/HM-search":{navigationBarTitleText:"搜索",enablePullDownRefresh:!1}},globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"看图",navigationBarBackgroundColor:"#FF80AB",backgroundColor:"#EFEFEF"}};t.default=n},"48ae":function(e,t,i){"use strict";var n=i("a840"),o=i.n(n);o.a},"6bae":function(e,t,i){"use strict";i.r(t);var n=i("2687"),o=i.n(n);for(var r in n)"default"!==r&&function(e){i.d(t,e,function(){return n[e]})}(r);t["default"]=o.a},"7cd3":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={appid:"__UNI__4600675"};t.default=n},8331:function(e,t,i){"use strict";var n,o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},r=[];i.d(t,"b",function(){return o}),i.d(t,"c",function(){return r}),i.d(t,"a",function(){return n})},a840:function(e,t,i){var n=i("b481");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=i("4f06").default;o("3fab4688",n,!0,{sourceMap:!1,shadowMode:!1})},b481:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@font-face{font-family:texticons;font-weight:400;font-style:normal;src:url(https://at.alicdn.com/t/font_702773_g9f89om4v3j.ttf) format("truetype")}.index{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:%?750?%;min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;\r\n\t/* justify-content: center; */-webkit-box-align:center;-webkit-align-items:center;align-items:center}.imgNoData{width:30%}.index .imgtext{\r\n\t/* margin-top: 30px; */color:#666;font-size:%?30?%}.row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.card{position:relative;width:%?710?%;margin:%?20?% %?20?% %?20?% %?20?%;border-radius:%?10?%;overflow:hidden;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#fff}.card-img{width:%?710?%\r\n\t/* height: 1065upx; */}.card-num{color:#fff;font-size:13px;text-align:center}.card-num-view{background-color:#ff80ab;line-height:1;display:inline-block;padding:3px 6px;color:#fff;font-size:12px;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:15px;position:absolute;top:%?20?%;right:%?20?%}.card-bottm{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.card-share-view{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:%?14?% 0;color:#ff80ab;margin:%?10?% %?20?% %?10?%;font-size:%?30?%;font-family:texticons}.card-share-view:before{content:"\\E62D"}.car-title-view{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:%?14?% %?0?% %?14?% %?20?%}.card-title{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?30?%;text-align:left;color:#555;text-overflow:ellipsis;lines:2;display:-webkit-box;white-space:normal;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}\r\n\r\n/*双列表*/.card-list2{width:%?345?%;margin:%?20?% 0 %?20?% %?20?%}.card-list2-img{width:%?345?%;height:%?517?%}.card-list2-num-view{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:right;transform-origin:right}.card-list2-num{font-size:%?22?%}.card-list2-title{font-size:%?26?%}.loadMore{font-size:%?30?%;color:#555;margin-bottom:%?20?%}\r\n\r\n/* 分类页面 */.tags{background:#fff;-webkit-box-flex:1;-webkit-flex:1;flex:1;width:%?710?%;margin:%?20?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-align-content:flex-start;align-content:flex-start}uni-view.tag,\r\n.tag{display:block;width:%?177.5?%;height:%?180?%;padding:%?24?%;line-height:1;box-sizing:border-box;text-align:center}.tag-img{border-radius:%?60?%;width:%?120?%;height:%?120?%}.tag-text{font-size:%?28?%;color:#555}\r\n\r\n/* 个人中心 */\r\n\r\n/* .center {\r\n\tflex-direction: column;\r\n\tmin-height: 100vh;\r\n} */.logo{width:%?750?%;height:%?240?%;padding:%?20?%;box-sizing:border-box;background-color:#ff80ab;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.logo-hover{opacity:.8}.logo-img{width:%?150?%;height:%?150?%;border-radius:%?150?%}.logo-title{height:%?150?%;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;margin-left:%?20?%}.uer-name{height:%?60?%;line-height:%?60?%;font-size:%?38?%;color:#fff}.go-login.navigat-arrow{font-size:%?38?%;color:#fff}.login-title{height:%?150?%;-webkit-box-align:self-start;-webkit-align-items:self-start;align-items:self-start;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;margin-left:%?20?%}.center-list{background-color:#fff;margin-top:%?20?%;width:%?750?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.center-list-item{height:%?90?%;width:%?750?%;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;padding:%?0?% %?20?%}.border-bottom{border-bottom-width:%?1?%;border-color:#c8c7cc;border-bottom-style:solid}.list-icon{width:%?40?%;height:%?90?%;line-height:%?90?%;font-size:%?34?%;color:#ff80ab;text-align:center;font-family:texticons;margin-right:%?20?%}.list-text{height:%?90?%;line-height:%?90?%;font-size:%?34?%;color:#555;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left}.navigat-arrow{height:%?90?%;width:%?40?%;line-height:%?90?%;font-size:%?34?%;color:#555;text-align:right;font-family:texticons}\r\n\r\n/* 登录 */.loginView{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:%?750?%;min-height:100vh;padding-top:%?30?%}.input-view{border-bottom-style:solid;border-bottom-width:%?1?%;border-bottom-color:#ddd;background-color:#fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;width:%?750?%;padding:%?20?% %?20?%;box-sizing:border-box}.label-view{width:%?100?%;height:%?60?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:%?30?%}.label{-webkit-box-flex:1;-webkit-flex:1;flex:1;line-height:%?60?%;font-size:%?38?%;color:#555;text-align:left}.input{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:%?60?%;font-size:%?38?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.button-view{width:%?750?%;margin-top:%?50?%;padding:0 %?20?%;box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}uni-button{width:%?710?%;height:%?80?%;line-height:%?80?%;text-align:center;font-size:%?38?%}uni-button.login{background-color:#ff80ab;color:#fff}uni-button.register{margin-top:%?30?%;color:#ff80ab;background-color:#fff;border-color:#ff80ab;border-width:%?2?%}.register.hover,\r\n.login.hover{opacity:.6}\r\n\r\n/* 详情页面 */.detail-btn-view{width:%?750?%;position:fixed;bottom:%?75?%;font-size:%?28?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.detail-btn-view uni-view{opacity:.75;height:%?80?%;border-radius:%?80?%;width:%?80?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;line-height:%?80?%;margin:0 %?30?%;font-family:texticons;background:#eee;color:#555}.detail-btn-view uni-view uni-text{margin-left:%?10?%}.detail-btn-view .download:before{content:"\\E617"}.detail-btn-view .collect:before{content:"\\E68D"}.detail-btn-view .setting{-webkit-box-flex:1;-webkit-flex:1;flex:1}.grid{display:-webkit-box;display:-webkit-flex;display:flex;\r\n\t/* flex-direction: row; */-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding-left:5px;padding-right:5px;box-sizing:border-box;width:100%}.grid-c-01,\r\n.grid-c-02,\r\n.grid-c-03,\r\n.grid-c-04,\r\n.grid-c-05,\r\n.grid-c-06,\r\n.grid-c-07,\r\n.grid-c-08,\r\n.grid-c-09,\r\n.grid-c-10,\r\n.grid-c-11,\r\n.grid-c-12{position:relative;width:100%;padding-left:5px;padding-right:5px;box-sizing:border-box}.grid-c-auto{-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:none}.grid-c-fill{-webkit-flex-basis:0;flex-basis:0;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-flex-grow:1;flex-grow:1;max-width:100%}.grid-c-none{-webkit-box-flex:0;-webkit-flex:none;flex:none}.grid-c-01{-webkit-box-flex:0;-webkit-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.grid-c-02{-webkit-box-flex:0;-webkit-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.grid-c-03{-webkit-box-flex:0;-webkit-flex:0 0 25%;flex:0 0 25%;max-width:25%}.grid-c-04{-webkit-box-flex:0;-webkit-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.grid-c-05{-webkit-box-flex:0;-webkit-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.grid-c-06{\r\n\t/* flex: 0 0 50%; */\r\n\t/* max-width: 50%; */}.grid-c-07{-webkit-box-flex:0;-webkit-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.grid-c-08{-webkit-box-flex:0;-webkit-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.grid-c-09{-webkit-box-flex:0;-webkit-flex:0 0 75%;flex:0 0 75%;max-width:75%}.grid-c-10{-webkit-box-flex:0;-webkit-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.grid-c-11{-webkit-box-flex:0;-webkit-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.grid-c-12{-webkit-box-flex:0;-webkit-flex:0 0 100%;flex:0 0 100%;max-width:100%}.panel{position:relative;\r\n\t/* border-radius: 10upx; */border-top-left-radius:%?10?%;border-bottom-left-radius:%?10?%;overflow:hidden;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#fff;margin-bottom:10px;width:50%}.panel>uni-image{border-radius:%?10?%}.panel2{position:relative;\r\n\t/* border-radius: 10upx; */overflow:hidden;padding:%?10?%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:50%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#fff;margin-bottom:10px}.clear-fix::after{content:"";display:block;visibility:hidden;height:0;clear:both}uni-page-body,\nuni-view{display:-webkit-box;display:-webkit-flex;display:flex}uni-page-body{display:-webkit-box;display:-webkit-flex;display:flex;min-height:100%;background-color:#efefef}template{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1}body.?%PAGE?%{background-color:#efefef}',""])},d818:function(e,t,i){"use strict";var n=i("288e"),o=n(i("cebc"));i("cadf"),i("551c"),i("097d"),i("dd54"),i("1c31"),i("921b");var r=n(i("e143")),a=n(i("02f7"));r.default.config.productionTip=!1,r.default.prototype.$serverUrl="http://www.hjeee.com.cn",a.default.mpType="app";var l=new r.default((0,o.default)({},a.default));l.$mount()},dd54:function(e,t,i){"use strict";(function(e){var t=i("288e"),n=t(i("5176")),o=t(i("e143"));e["____4600675____"]=!0,delete e["____4600675____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"看图",navigationBarBackgroundColor:"#FF80AB",backgroundColor:"#EFEFEF"},tabBar:{color:"#444444",selectedColor:"#FF80AB",borderStyle:"black",backgroundColor:"#ffffff",list:[{pagePath:"pages/new/new",iconPath:"static/index-0.png",selectedIconPath:"static/index-1.png",text:"精选",redDot:!1,badge:""},{pagePath:"pages/hotIndex/hotIndex",iconPath:"static/hot-0.png",selectedIconPath:"static/hot-1.png",text:"推荐",redDot:!1,badge:""},{pagePath:"pages/hot/hot",iconPath:"static/tag-0.png",selectedIconPath:"static/tag-1.png",text:"分类",redDot:!1,badge:""}]}},e.__uniConfig.router={mode:"hash",base:"/H5/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},o.default.component("pages-new-new",function(e){var t={component:i.e("pages-new-new").then(function(){return e(i("2bc2"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),o.default.component("pages-hotIndex-hotIndex",function(e){var t={component:i.e("pages-hotIndex-hotIndex").then(function(){return e(i("d57c"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),o.default.component("pages-detail-detail",function(e){var t={component:i.e("pages-detail-detail").then(function(){return e(i("df41"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),o.default.component("pages-hot-hot",function(e){var t={component:i.e("pages-hot-hot").then(function(){return e(i("51df"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),o.default.component("pages-HM-search-HM-search",function(e){var t={component:i.e("pages-HM-search-HM-search").then(function(){return e(i("d572"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),e.__uniRoutes=[{path:"/",alias:"/pages/new/new",component:{render:function(e){return e("Page",{props:(0,n.default)({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"精选",enablePullDownRefresh:!0})},[e("pages-new-new",{slot:"page"})])}},meta:{id:1,name:"pages-new-new",isNVue:!1,pagePath:"pages/new/new",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/hotIndex/hotIndex",component:{render:function(e){return e("Page",{props:(0,n.default)({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"推荐",enablePullDownRefresh:!0})},[e("pages-hotIndex-hotIndex",{slot:"page"})])}},meta:{id:2,name:"pages-hotIndex-hotIndex",isNVue:!1,pagePath:"pages/hotIndex/hotIndex",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/detail/detail",component:{render:function(e){return e("Page",{props:(0,n.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"详情",navigationBarBackgroundColor:"#000000",backgroundColor:"#000000",titleNView:{buttons:[{type:"favorite"}]}})},[e("pages-detail-detail",{slot:"page"})])}},meta:{name:"pages-detail-detail",isNVue:!1,pagePath:"pages/detail/detail",windowTop:44}},{path:"/pages/hot/hot",component:{render:function(e){return e("Page",{props:(0,n.default)({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"分类",enablePullDownRefresh:!0})},[e("pages-hot-hot",{slot:"page"})])}},meta:{id:3,name:"pages-hot-hot",isNVue:!1,pagePath:"pages/hot/hot",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/HM-search/HM-search",component:{render:function(e){return e("Page",{props:(0,n.default)({},__uniConfig.globalStyle,{navigationBarTitleText:"搜索",enablePullDownRefresh:!1})},[e("pages-HM-search-HM-search",{slot:"page"})])}},meta:{name:"pages-HM-search-HM-search",isNVue:!1,pagePath:"pages/HM-search/HM-search",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,i("c8ba"))}});