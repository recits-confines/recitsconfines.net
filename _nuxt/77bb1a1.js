(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{320:function(e,t,r){"use strict";var n={props:{title:{type:String,default:""}}},o=r(13),c={components:{Header:Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("h2",{staticClass:"w-100 bg-main text-center text-background uppercase font-black text-background py-5 px-6 mb-6"},[e._v("\n  "+e._s(e.title)+"\n")])}),[],!1,null,"24f3d4b8",null).exports},props:{title:{type:String,default:""}}},l=Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex-grow flex flex-col"},[e.title?r("Header",{attrs:{title:e.title}}):e._e(),e._v(" "),r("div",{staticClass:"flex-grow flex flex-col justify-center container mx-auto px-5 py-1 lg:px-64"},[e._t("default")],2)],1)}),[],!1,null,"4edaf638",null);t.a=l.exports},321:function(e,t,r){"use strict";var n=r(3),o=r(14),c=(r(38),r(21),r(32),r(45),r(46),r(25),r(57));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={props:{inputs:{type:Array,default:function(){return[]}},values:{type:Object,default:function(){return{}}},type:{type:String,default:""},doInit:{type:Boolean,default:!1},doStore:{type:Boolean,default:!0},end:{type:String,default:""}},computed:f({},Object(c.c)({loaded:function(e){return e.isLoaded}})),methods:f(f({},Object(c.b)({init:"report/init",save:"report/save",store:"report/store"})),{},{submit:function(data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$nuxt.$loading.start(),!e.doInit){t.next=4;break}return t.next=4,e.init(e.type);case 4:return t.next=6,e.save(data);case 6:if(!e.doStore){t.next=9;break}return t.next=9,e.store();case 9:e.$router.push(e.end),e.$nuxt.$loading.finish();case 11:case"end":return t.stop()}}),t)})))()}})},v=r(13),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.loaded?r("FormulateForm",{staticClass:"pb-20",attrs:{values:e.values},on:{submit:e.submit}},[e._l(e.inputs,(function(input){return r("FormulateInput",e._b({key:input.name},"FormulateInput",input,!1))})),e._v(" "),e._t("default"),e._v(" "),r("FormulateInput",{attrs:{label:"Je valide",type:"submit"}})],2):e._e()}),[],!1,null,"34ceb408",null);t.a=component.exports},335:function(e,t,r){e.exports=r.p+"img/map.7662b73.svg"},336:function(e){e.exports=JSON.parse('[{"name":"area_description","label":"Décrivez votre espace de vie :","type":"textarea","help":"Type, surface, état du logement, environnement extérieur, chez qui ?","validation":"required"},{"name":"people_confined_with","label":"Qui habite avec vous ?","type":"textarea","help":"nombre, type de relation, âge"},{"name":"periode_confinement","label":"Êtes-vous en période de confinement ?","type":"checkbox"},{"name":"periode_deconfinement","label":"Êtes-vous en période de déconfinement ?","type":"checkbox"},{"name":"periode_reconfinement","label":"Êtes-vous en période de reconfinement ?","type":"checkbox"},{"name":"stocks","label":"Avez-vous fait des stocks et si non, pourquoi ? Qu’avez-vous acheté en priorité ?","type":"textarea","validation":"required"}]')},345:function(e,t,r){"use strict";r.r(t);var n=r(14),o=(r(38),r(21),r(32),r(45),r(46),r(57)),c=r(320),l=r(321),f=r(336);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var v={components:{Report:l.a,Page:c.a},data:function(){return{inputs:f}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.c)({values:function(e){return e.user.initial}}))},m=r(13),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Page",{attrs:{title:"État initial"}},[n("Report",{attrs:{inputs:e.inputs,values:e.values,"do-init":!0,"do-store":!0,type:"initial",end:"/user/end"}}),e._v(" "),n("img",{staticClass:"w-4/12 mx-auto my-10",attrs:{src:r(335)}})],1)}),[],!1,null,"2638dee0",null);t.default=component.exports}}]);