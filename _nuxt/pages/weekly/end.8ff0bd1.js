(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{301:function(t,e,n){"use strict";var r={props:{title:{type:String,default:""}}},o=n(12),c={components:{Header:Object(o.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("h2",{staticClass:"w-100 bg-main text-center text-background uppercase font-black text-background py-5 px-6 mb-6"},[this._v("\n  "+this._s(this.title)+"\n")])}),[],!1,null,"24f3d4b8",null).exports},props:{title:{type:String,default:""}}},l=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-grow flex flex-col"},[this.title?e("Header",{attrs:{title:this.title}}):this._e(),this._v(" "),e("div",{staticClass:"flex-grow flex flex-col justify-center container mx-auto px-5 py-1 lg:px-64"},[this._t("default")],2)],1)}),[],!1,null,"4edaf638",null);e.a=l.exports},305:function(t,e,n){t.exports=n.p+"img/icon.0d9f37f.png"},330:function(t,e,n){"use strict";n.r(e);n(20);var r=n(4),o=n(301),c=n(305),l=n.n(c),f={components:{Page:o.a},data:function(){return{scheduleAvailable:!1}},beforeMount:function(){this.scheduleAvailable=Notification&&"showTrigger"in Notification.prototype},methods:{schedule:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.serviceWorker.getRegistration();case 2:return e=t.sent,t.next=5,Notification.requestPermission();case 5:if("granted"!==t.sent){t.next=10;break}return n=(new Date).getTime()+5e3,t.next=10,e.showNotification("Récits confinés",{tag:n,body:"C'est le moment du récit de la semaine !",showTrigger:new TimestampTrigger(n),data:{type:"daily"},icon:l.a});case 10:case"end":return t.stop()}}),t)})))()}}},d=n(12),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Page",{attrs:{title:"Merci"}},[n("div",{staticClass:"flex flex-col text-center items-center justify-center"},[n("h2",{staticClass:"subtitle font-medium"},[t._v("\n      C’est tout pour cette semaine.\n    ")]),t._v(" "),n("p",{staticClass:"my-5"},[t._v("\n      Maintenant, je peux visualiser mon historique confiné.\n    ")]),t._v(" "),n("nuxt-link",{staticClass:"bg-main hover:bg-transparent uppercase font-black text-background hover:text-main py-5 px-6 my-4 border border-transparent hover:border-main rounded-full",attrs:{to:"/dashboard"}},[t._v("\n      Mon historique confiné\n    ")]),t._v(" "),t.scheduleAvailable?n("button",{staticClass:"bg-main hover:bg-transparent uppercase font-black text-xs text-center text-background hover:text-main py-2 px-6 my-4 border border-transparent hover:border-main rounded-full",on:{click:t.schedule}},[n("span",{staticClass:"rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-2"},[t._v("Tip")]),t._v("\n      Programmer un notification pour la semaine prochaine\n    ")]):t._e()],1)])}),[],!1,null,"126c2a15",null);e.default=component.exports}}]);
//# sourceMappingURL=end.8ff0bd1.js.map