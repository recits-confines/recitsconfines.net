(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{258:function(t,e,n){"use strict";var r={props:{title:{type:String,default:""}}},l=n(9),o={components:{Header:Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("h2",{staticClass:"w-100 bg-main text-center text-background uppercase font-black text-background py-5 px-6 mb-6"},[this._v("\n  "+this._s(this.title)+"\n")])}),[],!1,null,"24f3d4b8",null).exports},props:{title:{type:String,default:""}}},c=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-grow flex flex-col"},[this.title?e("Header",{attrs:{title:this.title}}):this._e(),this._v(" "),e("div",{staticClass:"flex-grow flex flex-col justify-center container mx-auto px-5 py-1 lg:px-64"},[this._t("default")],2)],1)}),[],!1,null,"4edaf638",null);e.a=c.exports},288:function(t,e,n){"use strict";n.r(e);n(15);var r=n(3),l={components:{Page:n(258).a},data:function(){return{body:null,title:null}},methods:{submit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$nuxt.$loading.start(),e.next=3,t.$db.stories.add({title:t.title,body:t.body});case 3:return e.next=5,t.$axios.$post("/stories",{user_id:t.$store.state.user.id,title:t.title,body:t.body});case 5:t.$router.push("/user/stories"),t.$nuxt.$loading.finish();case 7:case"end":return e.stop()}}),e)})))()}}},o=n(9),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Page",{attrs:{title:"Mon humeur initiale"}},[n("FormulateForm",{staticClass:"pb-20",on:{submit:t.submit}},[n("FormulateInput",{attrs:{type:"text",label:"Titre de mon anecdote",validation:"required"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("FormulateInput",{attrs:{type:"textarea",label:"Je raconte mon anecdote",validation:"required"},model:{value:t.body,callback:function(e){t.body=e},expression:"body"}}),t._v(" "),n("FormulateInput",{attrs:{type:"submit",label:"Je valide"}})],1)],1)}),[],!1,null,"7816874f",null);e.default=component.exports}}]);
//# sourceMappingURL=create.4e1d2c3.js.map