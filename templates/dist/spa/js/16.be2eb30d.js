(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{"08ae":function(e,t,n){"use strict";n("4919")},"14cd":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-layout",{style:{height:e.$q.screen.height,width:e.$q.screen.width},attrs:{view:"hHh LpR fFf"}},[n("q-header",{staticClass:"bg-primary text-white",attrs:{reveal:"",elevated:""}},[n("q-toolbar",{staticClass:"main-headers text-white rounded-borders"},[n("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[n("q-btn",{staticStyle:{margin:"0 10px 0 10px"},attrs:{round:"",dense:"",flat:"",color:"white",icon:"translate"}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.translate")))]),n("q-menu",[n("q-list",{staticStyle:{"min-width":"100px"}},e._l(e.langOptions,(function(t,a){return n("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:a,attrs:{clickable:""},on:{click:function(n){return e.langChange(t.value)}}},[n("q-item-section",[e._v(e._s(t.label))])],1)})),1)],1)],1)],1),n("q-space"),"1"===e.authin?[n("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[n("q-btn-dropdown",{attrs:{stretch:"",flat:"",color:"white-8",icon:"account_circle"},on:{click:function(t){e.chat=!1}}},[n("div",{staticClass:"row no-wrap q-pa-md"},[n("div",{staticClass:"column",staticStyle:{width:"150px"}},[n("div",{staticStyle:{width:"100%","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[n("span",{staticStyle:{"margin-left":"9%","font-weight":"bold"}},[e._v(e._s(e.$t("index.current_user"))+":")]),n("span",{staticStyle:{"margin-left":"6%","font-weight":"bold"}},[e._v(e._s(e.login_name))])]),n("hr",{staticStyle:{height:"2px",border:"none","border-top":"1px solid #e1e1e1",width:"121%","margin-left":"-10.5%","margin-top":"8%"}}),n("q-btn",{staticClass:"full-width",attrs:{flat:"",rounded:"",align:"left",label:e.$t("index.change_user")},on:{click:function(t){e.login=!0}}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.change_user")))])],1),n("q-btn",{staticClass:"full-width",attrs:{flat:"",rounded:"",align:"left",label:e.$t("index.view_my_openid")},on:{click:function(t){e.authid=!0}}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.view_my_openid")))])],1),n("hr",{staticStyle:{height:"2px",border:"none","border-top":"1px solid #e1e1e1",width:"121%","margin-left":"-10.5%","margin-top":"8%"}}),n("q-btn",{staticClass:"full-width",attrs:{flat:"",rounded:"",align:"left",label:e.$t("index.logout")},on:{click:function(t){return e.Logout()}}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.contact_list")))])],1)],1)])])],1)]:e._e(),"0"===e.authin?[n("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[n("q-btn",{staticStyle:{"margin-left":"10px"},attrs:{label:e.$t("index.login"),color:"primary"},on:{click:function(t){e.login=!0}}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.login_tip")))])],1)],1),n("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn"}},[n("q-btn",{staticStyle:{"margin-left":"10px"},attrs:{label:e.$t("index.register"),color:"primary"},on:{click:function(t){e.register=!0}}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[15,15],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.register_tip")))])],1)],1)]:e._e()],2)],1),n("q-page-container",{staticClass:"main-page",style:{height:e.container_height,width:e.$q.screen.width}},[n("router-view")],1),n("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:e.authid,callback:function(t){e.authid=t},expression:"authid"}},[n("q-card",{staticStyle:{"min-width":"350px"}},[n("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[n("div",[e._v(e._s(e.$t("index.your_openid")))]),n("q-space"),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),n("q-card-section",{staticClass:"q-pt-md"},[n("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Openid",readonly:""},model:{value:e.openid,callback:function(t){e.openid=t},expression:"openid"}})],1)],1)],1),n("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:e.login,callback:function(t){e.login=t},expression:"login"}},[n("q-card",{staticStyle:{"min-width":"350px"}},[n("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[n("q-tabs",{staticClass:"tabs",model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[n("q-tab",{attrs:{name:"user"},on:{click:function(t){e.admin=!1}}},[e._v("\n            "+e._s(e.$t("index.user_login"))+"\n            "),n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[5,5],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.user_login")))])],1),n("q-tab",{attrs:{name:"admin"},on:{click:function(t){e.admin=!0}}},[e._v("\n            "+e._s(e.$t("index.admin_login"))+"\n            "),n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[5,5],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.admin_login")))])],1)],1),n("q-space"),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),n("q-card-section",{staticClass:"q-pt-md"},[e.admin?[n("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("index.admin_name")},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.adminLogin()}},model:{value:e.adminlogin.name,callback:function(t){e.$set(e.adminlogin,"name",t)},expression:"adminlogin.name"}}),n("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.password"),type:e.isPwd?"password":"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.adminLogin()}},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}],null,!1,3635466494),model:{value:e.adminlogin.password,callback:function(t){e.$set(e.adminlogin,"password",t)},expression:"adminlogin.password"}})]:e._e(),e.admin?e._e():[n("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("index.your_openid")},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Login()}},model:{value:e.openid,callback:function(t){e.openid=t},expression:"openid"}}),n("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.staff_name")},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Login()}},model:{value:e.login_name,callback:function(t){e.login_name=t},expression:"login_name"}}),n("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("staff.check_code"),type:"number"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Login()}},model:{value:e.check_code,callback:function(t){e.check_code=e._n(t)},expression:"check_code"}})]],2),n("q-card-actions",{staticClass:"text-primary",attrs:{align:"left"}},[n("q-space"),[n("q-btn",{staticStyle:{"font-size":"16px",margin:"0 8px",width:"100%"},attrs:{color:"primary",label:e.$t("index.login")},on:{click:function(t){e.admin?e.adminLogin():e.Login()}}})],n("div",{staticClass:"q-mx-auto"},[n("q-btn",{staticClass:"text-teal-4 q-mt-sm",attrs:{flat:""},on:{click:function(t){e.login=!1,e.register=!0}}},[e._v("\n            "+e._s(e.$t("index.register_tip"))+"\n          ")])],1)],2)],1)],1),n("q-dialog",{attrs:{"transition-show":"jump-down","transition-hide":"jump-up"},model:{value:e.register,callback:function(t){e.register=t},expression:"register"}},[n("q-card",{staticStyle:{"min-width":"350px"}},[n("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[n("div",[e._v(e._s(e.$t("index.register_tip")))]),n("q-space"),n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[n("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[20,20],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("index.close")))])],1)],1),n("q-card-section",{staticClass:"q-pt-md"},[n("q-input",{attrs:{dense:"",outlined:"",square:"",label:e.$t("index.staff_name")},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Register()}},model:{value:e.registerform.name,callback:function(t){e.$set(e.registerform,"name",t)},expression:"registerform.name"}}),n("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.password"),type:e.isPwd?"password":"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Register()}},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.registerform.password1,callback:function(t){e.$set(e.registerform,"password1",t)},expression:"registerform.password1"}}),n("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:e.$t("index.confirm_password"),type:e.isPwd2?"password":"text"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.Register()}},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd2?"visibility_off":"visibility"},on:{click:function(t){e.isPwd2=!e.isPwd2}}})]},proxy:!0}]),model:{value:e.registerform.password2,callback:function(t){e.$set(e.registerform,"password2",t)},expression:"registerform.password2"}})],1),n("q-card-actions",{staticClass:"text-primary q-mx-sm",attrs:{align:"right"}},[n("q-btn",{staticClass:"full-width",attrs:{color:"primary",label:e.$t("index.register")},on:{click:function(t){return e.Register()}}})],1),n("q-card-actions",{staticStyle:{"margin-top":"-8px"},attrs:{align:"center"}},[n("q-btn",{staticClass:"text-teal-4",attrs:{flat:"",label:e.$t("index.return_to_login")},on:{click:function(t){e.login=!0,e.register=!1}}})],1)],1)],1)],1)},i=[],s=n("3004"),o=n("18d6"),l=n("a639"),r=n("bca8"),c={data(){return{activeTab:"",lang:this.$i18n.locale,container_height:this.$q.screen.height+"px",langOptions:[{value:"en-us",label:"English"},{value:"zh-hans",label:"中文简体"},{value:"zh-hant",label:"中文繁體"},{value:"fr",label:"Français"},{value:"pt",label:"Português"},{value:"ru",label:"Español"},{value:"de",label:"Deutsch"},{value:"ru",label:"русский язык"},{value:"ar",label:"Arabic"},{value:"fr",label:"Italiano"},{value:"ja",label:"日本語"}],title:this.$t("index.webtitle"),admin:!1,adminlogin:{name:"",password:""},openid:"",isPwd:!0,isPwd2:!0,authin:"0",authid:!1,left:!1,drawerleft:!1,tab:"",login:!1,link:"",login_name:"",check_code:"",register:!1,registerform:{name:"",password1:"",password2:""},needLogin:""}},methods:{Login(){var e=this;""===e.login_name?e.$q.notify({message:"Please enter the login name",color:"negative",icon:"close"}):""===e.openid?e.$q.notify({message:"Please Enter The Openid",icon:"close",color:"negative"}):""===e.check_code?e.$q.notify({message:"Please Enter The Check Code",icon:"close",color:"negative"}):(o["a"].set("openid",e.openid),l["a"].set("axios_check","false"),Object(s["e"])("staff/?staff_name="+e.login_name+"&check_code="+e.check_code).then((t=>{1===t.count?(e.authin="1",e.login=!1,o["a"].set("auth","1"),o["a"].set("login_name",e.login_name),o["a"].set("login_mode","user"),e.$q.notify({message:"Success Login",icon:"check",color:"green"}),e.$router.push({name:"zebrascan"})):e.$q.notify({message:"No User's Data Or Check Code Wrong",icon:"close",color:"negative"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})})))},adminLogin(){var e=this;e.adminlogin.name?e.adminlogin.password?(l["a"].set("axios_check","false"),Object(s["g"])("login/",e.adminlogin).then((t=>{"200"===t.code?(e.authin="1",e.login=!1,e.admin=!1,e.openid=t.data.openid,e.login_name=t.data.name,o["a"].set("auth","1"),o["a"].set("openid",t.data.openid),o["a"].set("login_name",e.login_name),o["a"].set("login_mode","admin"),e.$q.notify({message:"Success Login",icon:"check",color:"green"}),e.$router.push({name:"zebrascan"})):e.$q.notify({message:t.msg,icon:"close",color:"negative"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))):e.$q.notify({message:"Please enter the admin password",icon:"close",color:"negative"}):e.$q.notify({message:"Please enter the admin name",color:"negative",icon:"close"})},Logout(){var e=this;e.authin="0",e.login_name="",o["a"].remove("auth"),l["a"].remove("axios_check"),o["a"].set("login_name",""),e.$q.notify({message:"Success Logout",icon:"check",color:"negative"}),e.$router.push({name:"zebrascan"})},Register(){var e=this;l["a"].set("axios_check","false"),Object(s["g"])("register/",e.registerform).then((t=>{"200"===t.code?(e.register=!1,e.openid=t.data.openid,e.login_name=e.registerform.name,e.authin="1",o["a"].set("openid",t.data.openid),o["a"].set("login_name",e.registerform.name),o["a"].set("auth","1"),e.registerform={name:"",password1:"",password2:""},e.$q.notify({message:t.msg,icon:"check",color:"green"}),e.staffType(),e.$router.push({name:"zebrascan"})):e.$q.notify({message:t.msg,icon:"close",color:"negative"})})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},staffType(){var e=this;Object(s["e"])("staff/?staff_name="+e.login_name).then((e=>{o["a"].set("staff_type",e.results[0].staff_type)}))},langChange(e){var t=this;t.lang=e,window.setTimeout((()=>{location.reload()}),1)},isLoggedIn(){this.activeTab=this.$q.localStorage.getItem("login_mode"),this.$q.localStorage.getItem("openid")?(this.login=!0,"admin"===this.activeTab?this.admin=!0:this.admin=!1):this.register=!0}},beforeCreate(){},created(){var e=this;o["a"].has("openid")?e.openid=o["a"].getItem("openid"):(e.openid="",o["a"].set("openid","")),o["a"].has("login_name")?e.login_name=o["a"].getItem("login_name"):(e.login_name="",o["a"].set("login_name","")),o["a"].has("auth")?(e.authin="1",e.staffType()):(o["a"].set("staff_type","Admin"),e.authin="0",e.isLoggedIn())},mounted(){var e=this;e.link=o["a"].getItem("menulink"),r["a"].$on("needLogin",(t=>{e.isLoggedIn()}))},updated(){},beforeDestroy(){r["a"].$off("needLogin")},destroyed(){},watch:{lang(e){var t=this;o["a"].set("lang",e),t.$i18n.locale=e}}},d=c,p=(n("08ae"),n("42e1")),u=n("4d5a"),g=n("e359"),m=n("65c6"),f=n("9c40"),h=n("05c0"),b=n("4e73"),y=n("1c1c"),_=n("66e5"),x=n("4074"),k=n("2c91"),v=n("f20b"),w=n("09e3"),q=n("24e8"),$=n("f09f"),C=n("d847"),S=n("a370"),L=n("27f9"),z=n("429b"),P=n("7460"),Q=n("0016"),O=n("4b7e"),I=n("7f67"),T=n("eebe"),E=n.n(T),j=Object(p["a"])(d,a,i,!1,null,null,null);t["default"]=j.exports;E()(j,"components",{QLayout:u["a"],QHeader:g["a"],QToolbar:m["a"],QBtn:f["a"],QTooltip:h["a"],QMenu:b["a"],QList:y["a"],QItem:_["a"],QItemSection:x["a"],QSpace:k["a"],QBtnDropdown:v["a"],QPageContainer:w["a"],QDialog:q["a"],QCard:$["a"],QBar:C["a"],QCardSection:S["a"],QInput:L["a"],QTabs:z["a"],QTab:P["a"],QIcon:Q["a"],QCardActions:O["a"]}),E()(j,"directives",{ClosePopup:I["a"]})},4919:function(e,t,n){}}]);