(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cc386978"],{"0418":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"head-cont relative"},[e("div",{staticClass:"head-body absolute z-index-9 head-body-w"},[e("div",{staticClass:"head-logo w100 relative"},[e("div",{staticClass:"head-logo-logo"},[e("img",{staticClass:"head-logo-img",attrs:{src:t.baseUrl+"statics/images/index/header_logo.png",alt:""}})]),e("div",{staticClass:"head-logo-menu absolute flex"},[e("div",{staticClass:"hlm-item flex"},[e("div",{staticClass:"hlm-item-icon relative overhidden"},[e("img",{staticClass:"hlm-item-icon-img w100 absolute",attrs:{src:t.baseUrl+"statics/images/index/header_icon_1.png",alt:""}})]),e("div",{staticClass:"hlm-item-title fs14"},[t._v("在线咨询")])]),e("div",{staticClass:"hlm-item flex"},[e("div",{staticClass:"hlm-item-icon relative overhidden"},[e("img",{staticClass:"hlm-item-icon-img w100 absolute",attrs:{src:t.baseUrl+"statics/images/index/header_icon_2.png",alt:""}})]),e("div",{staticClass:"hlm-item-title fs14"},[t._v("官方微信")])]),e("div",{staticClass:"hlm-item flex"},[e("div",{staticClass:"hlm-item-icon relative overhidden"},[e("img",{staticClass:"hlm-item-icon-img w100 absolute",attrs:{src:t.baseUrl+"statics/images/index/header_icon_3.png",alt:""}})]),e("div",{staticClass:"hlm-item-title fs14"},[t._v("免费咨询热线:400-1314-520")])])])]),e("div",{staticClass:"head-menu w100"},[e("div",{staticClass:"head-menu-body w100 flex"},t._l(t.menu,function(s,a){return e("div",{key:a,staticClass:"hmb-item t-center relative"},[e("div",{staticClass:"hmb-item-label t-center fs16 pointer",class:{"header-active":t.currentActive==s.value},on:{click:function(e){return e.stopPropagation(),t.collaspe(s,a,"click")},mouseenter:function(e){return t.collaspe(s,a,"hover")}}},[t._v("\n            "+t._s(s.label)+"\n          ")]),0!=s.children.length?e("div",{staticClass:"hmb-item-arraw pointer animate",class:{"hmb-item-arraw__active":s.collaspe},on:{mouseenter:function(e){return t.collaspe(s,a)}}}):t._e(),0!=s.children.length?e("div",{directives:[{name:"show",rawName:"v-show",value:s.collaspe,expression:"mitem.collaspe"}],staticClass:"hmb-item-body absolute z-index-3",on:{mouseleave:function(e){return t.collaspe(s,a)}}},t._l(s.children,function(a,i){return e("div",{key:i,staticClass:"hmd-item-b-item t-center fs16 pointer",on:{click:function(e){return e.stopPropagation(),t.headerRoute(s.value)}}},[t._v("\n              "+t._s(a.label)+"\n            ")])}),0):t._e()])}),0)])])])},i=[],l=e("4369"),c={name:"Header",props:{currentActive:{type:String,default:""}},data:function(){return{menu:l}},mounted:function(){},methods:{collaspe:function(t,s,e){for(var a=t.collaspe,i=0;i<this.menu.length;i++)this.menu[i].collaspe=!1;t.haschiren?this.menu[s].collaspe=!a:"click"==e&&this.headerRoute(t.value)},headerRoute:function(t){this.$router.push({path:t})}}},n=c,r=(e("5452"),e("2877")),o=Object(r["a"])(n,a,i,!1,null,null,null);s["a"]=o.exports},"0596":function(t,s,e){},"3d8b":function(t,s,e){"use strict";var a=e("a909"),i=e.n(a);i.a},4369:function(t){t.exports=[{label:"首页",value:"HomePage",haschiren:!1,collaspe:!1,children:[]},{label:"情感挽回",value:"EmotionalRecovery",haschiren:!0,collaspe:!1,children:[{label:"挽回男友",value:"EmotionalRecovery"},{label:"挽回女友",value:"EmotionalRecovery"},{label:"异地恋挽回",value:"EmotionalRecovery"},{label:"分手挽回",value:"EmotionalRecovery"}]},{label:"婚姻挽回",value:"MarriageSalvage",haschiren:!0,collaspe:!1,children:[{label:"挽回老公",value:"MarriageSalvage"},{label:"挽回老婆",value:"MarriageSalvage"},{label:"分离小三",value:"MarriageSalvage"},{label:"争吵冷战",value:"MarriageSalvage"}]},{label:"分离第三者",value:"AbruptionMistress",haschiren:!0,collaspe:!1,children:[{label:"婚内出轨",value:"AbruptionMistress"},{label:"婚姻危机",value:"AbruptionMistress"},{label:"执意离婚",value:"AbruptionMistress"},{label:"小三纠缠",value:"AbruptionMistress"}]},{label:"狙击真爱",value:"LoveSnipe",haschiren:!0,collaspe:!1,children:[{label:"提高情商",value:"LoveSnipe"},{label:"社交能力",value:"LoveSnipe"},{label:"聊天技巧",value:"LoveSnipe"},{label:"关系升级",value:"LoveSnipe"}]},{label:"团队介绍",value:"AboutTeam",haschiren:!1,collaspe:!1,children:[]},{label:"经典案例",value:"ClassicCase",haschiren:!1,collaspe:!1,children:[]},{label:"服务理念",value:"ServiceConcept",haschiren:!1,collaspe:!1,children:[]}]},"53d7":function(t,s,e){"use strict";var a=e("730d"),i=e.n(a);i.a},5452:function(t,s,e){"use strict";var a=e("0596"),i=e.n(a);i.a},"584a":function(t,s){var e=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=e)},"65bb":function(t,s,e){},"6d62":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"top-banner"},[e("div",{staticClass:"swiper-page pb40 w100 relative flex"},[e("div",{staticClass:"swiper-page-bg relative w100"},[e("div",{staticClass:"swiper-page-bgimage w100"},[e("img",{staticClass:"head-logo-img w100",attrs:{src:""+t.baseUrl+t.banner,alt:""}})])]),t.showcont?e("div",{staticClass:"swiper-page-body absolute pl40 z-index-2"},[e("p",{staticClass:"swiper-page-title1 fs60 white1"},[t._v("专业的知识，专业的服务")]),e("p",{staticClass:"swiper-page-title1 fs60 white1"},[t._v("帮你挽回爱情")]),e("p",{staticClass:"swiper-page-title2 fs32 white1 mt20"},[t._v("\n        我们不仅是执行者，更是有思想的策划者\n      ")]),t._m(0)]):t._e()])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"swiper-page-button mt80"},[e("button",{staticClass:"swiper-page-button-btn fs20"},[t._v("了解我们")])])}],l={name:"TopBanner",props:{banner:{type:String,default:"statics/images/index/swiper_bg.png"},showcont:{type:Boolean,default:!0}}},c=l,n=(e("a543"),e("2877")),r=Object(n["a"])(c,a,i,!1,null,"50b88483",null);s["a"]=r.exports},"730d":function(t,s,e){},a21f:function(t,s,e){var a=e("584a"),i=a.JSON||(a.JSON={stringify:JSON.stringify});t.exports=function(t){return i.stringify.apply(i,arguments)}},a543:function(t,s,e){"use strict";var a=e("65bb"),i=e.n(a);i.a},a6cc:function(t){t.exports=[{title:"打破固有印象，让死心的她重新爱上你！",image:"statics/images/article/article1/photo13.png",detail:"“当你的眼睛眯着笑，当你喝可乐当你吵……”<br/>你说我不懂浪漫，你说我直男癌，你说我总是不顾你的感受……这些毛病我都改了，你能回到我身边吗？甜蜜回忆里只剩我一个人演独角戏，望着你转身离去的身影，我想伸手，却怎么也抓不住你。"},{title:"我是文章大标题2",image:"statics/images/case/article1.png",detail:"我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容。"},{title:"我是文章大标题3",image:"statics/images/case/article1.png",detail:"我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容。"},{title:"我是文章大标题4",image:"statics/images/case/article1.png",detail:"我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容。"},{title:"我是文章大标题5",image:"statics/images/case/article1.png",detail:"我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容。"},{title:"我是文章大标题6",image:"statics/images/case/article1.png",detail:"我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容，我是文章内容我是文章内容。"}]},a909:function(t,s,e){},da2f:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hpcont"},[e("my-header",{attrs:{currentActive:"ClassicCase"}}),e("div",{staticClass:"hpbody"},[e("div",{staticClass:"hpbody-section"},[e("div",{staticClass:"hp-section11 mt25"},[e("div",{staticClass:"hp-s1-item"},[e("div",{staticClass:"hp-s1-item-icon"},[e("img",{attrs:{src:t.baseUrl+"statics/images/index/s1_icon.png",alt:""}})]),t._m(0)]),e("div",{staticClass:"hp-s1-item"},[e("div",{staticClass:"hp-s1-item-icon"},[e("img",{attrs:{src:t.baseUrl+"statics/images/index/s1_icon.png",alt:""}})]),t._m(1)]),e("div",{staticClass:"hp-s1-item"},[e("div",{staticClass:"hp-s1-item-icon"},[e("img",{attrs:{src:t.baseUrl+"statics/images/index/s1_icon.png",alt:""}})]),t._m(2)]),e("div",{staticClass:"hp-s1-item"},[e("div",{staticClass:"hp-s1-item-icon"},[e("img",{attrs:{src:t.baseUrl+"statics/images/index/s1_icon.png",alt:""}})]),t._m(3)])]),e("top-banner",{attrs:{banner:"statics/images/case/banner.png",showcont:!1}}),e("div",{staticClass:"hp-section8"},[e("div",{staticClass:"hp-s8-body w100_m flex"},[e("div",{staticClass:"hp-s8-left overhidden"},[e("img",{staticClass:"hp-s8-l-image w100",attrs:{src:t.baseUrl+"statics/images/case/image1.png",alt:""}})]),e("div",{staticClass:"hp-s8-right"},[e("div",{staticClass:"hp-s8-r-title fs36 black3"},[t._v("\n              安夏老师，教你轻松搞定心仪的TA我也是大标题\n            ")]),e("div",{staticClass:"hp-s8-r-line mt20 mb20"}),e("div",{staticClass:"hp-s8-r-detail fs16"},[t._v("\n              我是文章内容我是文章内容，我是文章内容我是文章内容我是文章内容我是文章内容，我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容\n            ")]),e("div",{staticClass:"hp-s8-r-btn mt15 fs18",on:{click:function(s){return s.stopPropagation(),t.goArticle(s)}}},[t._v("\n              查看完整文章>>\n            ")])])])]),e("div",{staticClass:"hp-section9 w100"},[e("div",{staticClass:"hp-s9-body flex w100 relative",style:"background:url("+t.baseUrl+"statics/images/case/image2.png)"},[e("div",{staticClass:"hp-s9-cont pt80 flex"},[e("div",{staticClass:"hp-s9-c-title w100_m fs36 black3"},[t._v("\n              安夏老师，教你轻松搞定心仪的TA\n            ")]),e("div",{staticClass:"hp-s9-c-line mt20 mb20"}),e("div",{staticClass:"hp-s9-c-article flex relative"},[e("div",{staticClass:"hp-s9-c-detail fs18 "},[t._v("\n                我是文章内容我是文章内容，我是文章内容我是文章内容我是文章内容我是文章内容，我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容我是文章内容\n              ")]),e("div",{staticClass:"hp-s9-c-btn absolute",on:{click:function(s){return s.stopPropagation(),t.goArticle(s)}}},[t._v("\n                查看完整文章>>\n              ")])]),e("div",{staticClass:"hp-s9-c-photo mt60 w100_m flex"},[e("div",{staticClass:"hp-s9-c-pitem overhidden"},[e("img",{staticClass:"hp-s9-cpitem-image w100 ",attrs:{src:t.baseUrl+"statics/images/case/image2.png",alt:""}})]),e("div",{staticClass:"hp-s9-c-pitem overhidden"},[e("img",{staticClass:"hp-s9-cpitem-image w100 ",attrs:{src:t.baseUrl+"statics/images/case/image2.png",alt:""}})]),e("div",{staticClass:"hp-s9-c-pitem overhidden"},[e("img",{staticClass:"hp-s9-cpitem-image w100 ",attrs:{src:t.baseUrl+"statics/images/case/image2.png",alt:""}})])])])])]),e("div",{staticClass:"hp-section10 w100_m pt40 pl60 pr60 pb100 mb40"},[e("div",{staticClass:"hp-s10-body w100_m flex"},t._l(t.article,function(s,a){return e("div",{key:a,staticClass:"hp-s10-item mt60 p40"},[e("div",{staticClass:"hp-s10-i-body w100_m relative"},[e("div",{staticClass:"hp-s10-i-image relative w100_m"},[e("img",{staticClass:"hp-s10-i-img absolute",attrs:{src:""+t.baseUrl+s.image,alt:""}})]),e("div",{staticClass:"hp-s10-i-title mt30 mb10 fs30 black3"},[t._v("\n                "+t._s(s.title)+"\n              ")]),e("div",{staticClass:"hp-s10-i-detail fs16 black2",domProps:{innerHTML:t._s(s.detail)}}),e("div",{staticClass:"hp-s10-i-href fs16 mt60",on:{click:function(s){return s.stopPropagation(),t.goArticle(a)}}},[t._v("\n                查看全文>>\n              ")])])])}),0)])],1)]),e("my-footer")],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hp-s1-item-title"},[e("p",{staticClass:"hp-s1-item-text1 fs18"},[t._v("严格的保密协议")]),e("p",{staticClass:"hp-s1-item-text2 fs14"},[t._v("客户资料信息完全保密")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hp-s1-item-title"},[e("p",{staticClass:"hp-s1-item-text1 fs18"},[t._v("高效的服务体系")]),e("p",{staticClass:"hp-s1-item-text2 fs14"},[t._v("24小时紧急联系指导")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hp-s1-item-title"},[e("p",{staticClass:"hp-s1-item-text1 fs18"},[t._v("专业的导师团队")]),e("p",{staticClass:"hp-s1-item-text2 fs14"},[t._v("官方认证心理咨询师")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hp-s1-item-title"},[e("p",{staticClass:"hp-s1-item-text1 fs18"},[t._v("放心的用户保障")]),e("p",{staticClass:"hp-s1-item-text2 fs14"},[t._v("合同制全程受法律保护")])])}],l=e("f499"),c=e.n(l),n=e("0418"),r=e("fd2d"),o=e("6d62"),p=e("a6cc"),v={name:"ClassicCase",components:{MyHeader:n["a"],MyFooter:r["a"],TopBanner:o["a"]},data:function(){return{article:p}},mounted:function(){console.log(c()(this.article))},methods:{goArticle:function(t){this.$router.push({name:"Article",query:{index:t}})}}},d=v,m=(e("3d8b"),e("2877")),h=Object(m["a"])(d,a,i,!1,null,null,null);s["default"]=h.exports},f499:function(t,s,e){t.exports=e("a21f")},fd2d:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"foot-cont w100"},[e("div",{staticClass:"foot-body-top flex w100"},[e("div",{staticClass:"fbt-body relative"},[e("div",{staticClass:"foot-top-logo"},[e("img",{staticClass:"foot-top-logo-img",attrs:{src:t.baseUrl+"statics/images/index/foot_logo.png",alt:""}})]),e("div",{staticClass:"foot-top-right absolute flex"},[e("div",{staticClass:"ftr-href flex"},[e("div",{staticClass:"ftr-href-section w25_m fs16 white1",on:{click:function(s){return s.stopPropagation(),t.headerRoute("HomePage")}}},[t._v("\n            首页\n          ")]),e("div",{staticClass:"ftr-href-section w25_m fs16 white1",on:{click:function(s){return s.stopPropagation(),t.headerRoute("EmotionalRecovery")}}},[t._v("\n            情感挽回\n          ")]),e("div",{staticClass:"ftr-href-section w25_m fs16 white1",on:{click:function(s){return s.stopPropagation(),t.headerRoute("MarriageSalvage")}}},[t._v("\n            婚姻挽回\n          ")]),e("div",{staticClass:"ftr-href-section w25_m fs16 white1",on:{click:function(s){return s.stopPropagation(),t.headerRoute("AbruptionMistress")}}},[t._v("\n            分离第三者\n          ")]),e("div",{staticClass:"ftr-href-section w25_m fs16 white1",on:{click:function(s){return s.stopPropagation(),t.headerRoute("LoveSnipe")}}},[t._v("\n            狙击真爱\n          ")]),e("div",{staticClass:"ftr-href-section w25_m fs16 white1",on:{click:function(s){return s.stopPropagation(),t.headerRoute("AboutTeam")}}},[t._v("\n            团队介绍\n          ")]),e("div",{staticClass:"ftr-href-section w25_m fs16 white1",on:{click:function(s){return s.stopPropagation(),t.headerRoute("ClassicCase")}}},[t._v("\n            经典案例\n          ")]),e("div",{staticClass:"ftr-href-section w25_m fs16 white1",on:{click:function(s){return s.stopPropagation(),t.headerRoute("ServiceConcept")}}},[t._v("\n            服务理念\n          ")]),e("div",{staticClass:"ftr-href-section w25_m fs16 white1"},[t._v("服务咨询")]),e("div",{staticClass:"ftr-href-section w25_m fs16 white1"},[t._v("友情链接")]),e("div",{staticClass:"ftr-href-section w50_m fs16 white1"},[t._v("\n            服务热线：400-0173-520\n          ")])]),e("div",{staticClass:"ftr-qcode flex"},[e("div",{staticClass:"foot-top-qcode-item"},[e("img",{staticClass:"w100",attrs:{src:t.baseUrl+"statics/images/index/foot_qcode1.png",alt:""}})])])])])]),t._m(0)])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"foot-body-bottom flex w100"},[e("div",{staticClass:"fbb-body pt10 pb10"},[e("span",{staticClass:"foot-bottom-text fs14 white1"},[t._v("公司地址：广州市番禺区小谷围街外环东路280号")]),e("span",{staticClass:"foot-bottom-text fs14 white1"},[t._v("Copyright© guiqi,lnc.All Rights Reserved. 粤ICP备16060296号-1")])])])}],l={name:"Footer",methods:{headerRoute:function(t){this.$router.push({path:t})}}},c=l,n=(e("53d7"),e("2877")),r=Object(n["a"])(c,a,i,!1,null,null,null);s["a"]=r.exports}}]);