(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{298:function(t,e,n){"use strict";var r={props:{title:{type:String,default:""}}},o=n(12),l={components:{Header:Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("h2",{staticClass:"w-100 bg-main text-center text-background uppercase font-black text-background py-5 px-6 mb-6"},[this._v("\n  "+this._s(this.title)+"\n")])}),[],!1,null,"24f3d4b8",null).exports},props:{title:{type:String,default:""}}},c=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-grow flex flex-col"},[this.title?e("Header",{attrs:{title:this.title}}):this._e(),this._v(" "),e("div",{staticClass:"flex-grow flex flex-col justify-center container mx-auto px-5 py-1 lg:px-64"},[this._t("default")],2)],1)}),[],!1,null,"4edaf638",null);e.a=c.exports},299:function(t,e,n){"use strict";n(51),n(28),n(29),n(15),n(42),n(27);var r=n(4),o=n(20),l=n(65);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:{inputs:{type:Array,default:function(){return[]}},values:{type:Object,default:function(){return{}}},type:{type:String,default:""},doInit:{type:Boolean,default:!1},doStore:{type:Boolean,default:!0},end:{type:String,default:""}},computed:d({},Object(l.c)({loaded:function(t){return t.isLoaded}})),methods:d({},Object(l.b)({init:"report/init",save:"report/save",store:"report/store"}),{submit:function(data){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$nuxt.$loading.start(),!t.doInit){e.next=4;break}return e.next=4,t.init(t.type);case 4:return e.next=6,t.save(data);case 6:if(!t.doStore){e.next=9;break}return e.next=9,t.store();case 9:t.$router.push(t.end),t.$nuxt.$loading.finish();case 11:case"end":return e.stop()}}),e)})))()}})},m=n(12),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loaded?n("FormulateForm",{staticClass:"pb-20",attrs:{values:t.values},on:{submit:t.submit}},[t._l(t.inputs,(function(input){return n("FormulateInput",t._b({key:input.name},"FormulateInput",input,!1))})),t._v(" "),t._t("default"),t._v(" "),n("FormulateInput",{attrs:{label:"Je valide",type:"submit"}})],2):t._e()}),[],!1,null,"34ceb408",null);e.a=component.exports},301:function(t){t.exports=JSON.parse('[{"title":"Titre de la section 1","inputs":[{"name":"a1","label":"Description et étendue de votre zone de déconfinement","type":"textarea","validation":"required"}]},{"title":"Titre de la section 2","inputs":[{"name":"r1","label":"Description et étendue de votre zone de déconfinement","type":"textarea","validation":"required"}]},{"title":"Titre de la section 3","inputs":[{"name":"r1","label":"Description et étendue de votre zone de déconfinement","type":"textarea","validation":"required"}]}]')},329:function(t,e,n){"use strict";n.r(e);var r=n(298),o=n(299),l=n(301),c={components:{Report:o.a,Page:r.a},data:function(){return{title:l[this.$route.params.id].title,inputs:l[this.$route.params.id].inputs}}},d=n(12),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("Page",{attrs:{title:this.title}},[e("Report",{attrs:{inputs:this.inputs,"do-init":!1,"do-store":!1,type:"weekly",end:"/weekly"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=0d36b823ed60191e0133.js.map