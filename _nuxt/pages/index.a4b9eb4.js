(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{290:function(t,e,r){"use strict";r.r(e);r(39),r(22),r(23),r(12),r(33),r(25);var n=r(16),o=r(49);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={layout:"index",components:{Logo:r(138).a},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.c)({initial:function(t){return!t.user.name},dailyToday:function(t){return new Date(t.user.lastDaily).toDateString()===(new Date).toDateString()},loaded:function(t){return t.isLoaded}})),methods:{onInit:function(){this.$store.commit("loaded")}}},d=r(9),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"text-center px-1"},[r("Logo",{staticClass:"text-main mx-auto my-4",attrs:{width:100}}),t._v(" "),t._m(0),t._v(" "),r("hr",{staticClass:"border-secondary my-10"}),t._v(" "),t._m(1),t._v(" "),r("hr",{staticClass:"border-secondary w-3 mx-auto my-2"}),t._v(" "),r("p",[t._v("\n      Racontez votre récit au jour le jour, et aidez les historiens à comprendre ce que le monde a vécu.\n    ")]),t._v(" "),r("hr",{staticClass:"border-secondary w-3 mx-auto my-2"}),t._v(" "),r("p",[r("b",[t._v("Vos données sont protégées")]),t._v(" "),r("nuxt-link",{staticClass:"block text-main hover:text-black",attrs:{to:"/privacy"}},[t._v("\n        En savoir plus\n      ")])],1),t._v(" "),r("hr",{staticClass:"border-secondary w-3 mx-auto my-2"}),t._v(" "),r("div",{staticClass:"pt-5 flex flex-col",on:{click:t.onInit}},[t.initial?r("nuxt-link",{staticClass:"bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full",attrs:{to:"/user/profile"}},[t._v("\n        Commencer mon journal\n      ")]):t._e(),t._v(" "),t.initial?r("nuxt-link",{staticClass:"bg-transparent hover:bg-main text-main hover:text-background py-2 px-6 rounded-full",attrs:{to:"/user/restart"}},[t._v("\n        J’ai déjà un identifiant\n      ")]):t.dailyToday?r("div",[r("nuxt-link",{staticClass:"bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full",attrs:{to:"/weekly"}},[t._v("\n          Faire une revue de ma semaine\n        ")]),t._v(" "),r("nuxt-link",{staticClass:"bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full",attrs:{to:"/dashboard"}},[t._v("\n          Voir mon tableau de bord\n        ")])],1):r("nuxt-link",{staticClass:"bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full",attrs:{to:"/daily"}},[t._v("\n        Continuer mon journal\n      ")])],1)],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"uppercase text-main font-black text-4xl leading-none"},[this._v("\n      Récits"),e("br"),this._v("confinés\n    ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",{staticClass:"font-bold"},[e("q",[this._v("Mon journal de bord en période de Coronavirus.")])])}],!1,null,null,null);e.default=component.exports}}]);
//# sourceMappingURL=index.a4b9eb4.js.map