(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{301:function(t,e,r){"use strict";var n={props:{title:{type:String,default:""}}},o=r(12),c={components:{Header:Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("h2",{staticClass:"w-100 bg-main text-center text-background uppercase font-black text-background py-5 px-6 mb-6"},[this._v("\n  "+this._s(this.title)+"\n")])}),[],!1,null,"24f3d4b8",null).exports},props:{title:{type:String,default:""}}},l=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-grow flex flex-col"},[this.title?e("Header",{attrs:{title:this.title}}):this._e(),this._v(" "),e("div",{staticClass:"flex-grow flex flex-col justify-center container mx-auto px-5 py-1 lg:px-64"},[this._t("default")],2)],1)}),[],!1,null,"4edaf638",null);e.a=l.exports},328:function(t,e,r){"use strict";r.r(e);r(51),r(28),r(29),r(16),r(42),r(33),r(20);var n=r(4),o=r(21),c=r(65);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{Page:r(301).a},data:function(){return{name:""}},methods:f(f({},Object(c.b)({set:"user/setUser"})),{},{submitHandler:function(data){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$nuxt.$loading.start(),e.next=3,t.set(data.name);case 3:t.$router.push("/user/end"),t.$nuxt.$loading.finish();case 5:case"end":return e.stop()}}),e)})))()}})},d=r(12),component=Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Page",{attrs:{title:"Reprise"}},[r("FormulateForm",{on:{submit:t.submitHandler}},[r("FormulateInput",{attrs:{name:"name",type:"text",label:"Identifiant",help:"Entrer votre identifiant unique à la première participation",validation:"required"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),r("FormulateErrors"),t._v(" "),r("FormulateInput",{attrs:{type:"submit",label:"Valider"}})],1)],1)}),[],!1,null,"5fc99806",null);e.default=component.exports}}]);
//# sourceMappingURL=restart.981d76b.js.map