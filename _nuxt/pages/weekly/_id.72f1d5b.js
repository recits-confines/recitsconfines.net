(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{301:function(e,t,n){"use strict";var r={props:{title:{type:String,default:""}}},o=n(12),l={components:{Header:Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("h2",{staticClass:"w-100 bg-main text-center text-background uppercase font-black text-background py-5 px-6 mb-6"},[this._v("\n  "+this._s(this.title)+"\n")])}),[],!1,null,"24f3d4b8",null).exports},props:{title:{type:String,default:""}}},c=Object(o.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex-grow flex flex-col"},[this.title?t("Header",{attrs:{title:this.title}}):this._e(),this._v(" "),t("div",{staticClass:"flex-grow flex flex-col justify-center container mx-auto px-5 py-1 lg:px-64"},[this._t("default")],2)],1)}),[],!1,null,"4edaf638",null);t.a=c.exports},302:function(e,t,n){"use strict";n(53),n(28),n(29),n(18),n(44),n(22);var r=n(4),o=n(23),l=n(65);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={props:{inputs:{type:Array,default:function(){return[]}},values:{type:Object,default:function(){return{}}},type:{type:String,default:""},doInit:{type:Boolean,default:!1},doStore:{type:Boolean,default:!0},end:{type:String,default:""}},computed:m({},Object(l.c)({loaded:function(e){return e.isLoaded}})),methods:m(m({},Object(l.b)({init:"report/init",save:"report/save",store:"report/store"})),{},{submit:function(data){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.$nuxt.$loading.start(),!e.doInit){t.next=4;break}return t.next=4,e.init(e.type);case 4:return t.next=6,e.save(data);case 6:if(!e.doStore){t.next=9;break}return t.next=9,e.store();case 9:e.$router.push(e.end),e.$nuxt.$loading.finish();case 11:case"end":return t.stop()}}),t)})))()}})},d=n(12),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.loaded?n("FormulateForm",{staticClass:"pb-20",attrs:{values:e.values},on:{submit:e.submit}},[e._l(e.inputs,(function(input){return n("FormulateInput",e._b({key:input.name},"FormulateInput",input,!1))})),e._v(" "),e._t("default"),e._v(" "),n("FormulateInput",{attrs:{label:"Je valide",type:"submit"}})],2):e._e()}),[],!1,null,"34ceb408",null);t.a=component.exports},304:function(e){e.exports=JSON.parse('[{"title":"Routine de la vie quotidienne","inputs":[{"name":"routine1","label":"Que pensez-vous de votre lieu de confinement ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"routine2","label":"Comment avez-vous adapté votre activité professionnelle ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"routine3","label":"Quelles sont les nouvelles habitudes que vous avez adoptées ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"routine4","label":"Avez-vous vu naître des frustrations sur des choses que vous auriez voulu faire ? Lesquelles ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"routine5","label":"Quelles sont les nouvelles activités que vous avez mises en place depuis le confinement?","type":"textarea","print":"Préambule d\'affichage"},{"name":"routine6","label":"Avez-vous appris des compétences ou commencé un apprentissage quelconque ? Racontez","type":"textarea","print":"Préambule d\'affichage"}]},{"title":"Alimentation et consommation","inputs":[{"name":"alimentation1","label":"Avez-vous modifié vos habitudes de consommation alimentaire par rapport à avant le confinement ? Si oui, expliquez les changements.","type":"textarea","print":"Préambule d\'affichage"},{"name":"alimentation2","label":"A cause des restrictions, avez-vous changé de lieux d’approvisionnement en nourriture ? Racontez ces changements","type":"textarea","print":"Préambule d\'affichage"},{"name":"alimentation3","label":"Si vous êtes sorti vous approvisionner en nourriture, quels gestes avez-vous adoptés pour vous protéger ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"alimentation4","label":"Racontez-nous votre expérience de sortie pour un achat alimentaire. Comment l’avez-vous vécu ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"alimentation5","label":"Avez-vous modifié vos habitudes de consommation d’alcool et de tabac par rapport à vos consommations habituelles ? Pourquoi ?","type":"textarea","print":"Préambule d\'affichage"}]},{"title":"Entretien du corps, hygiène et santé","inputs":[{"name":"entretien1","label":"Décrivez vos activités physiques de la semaine","type":"textarea","print":"Préambule d\'affichage"},{"name":"entretien2","label":"Comment vous êtes-vous habillés cette semaine ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"entretien3","label":"Avez-vous fait vos rituels du matin pour vous préparer durant cette période de confinement ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"entretien4","label":"Avez-vous eu besoin de soins médicaux cette semaine? Et votre entourage ? Si oui, auprès de qui? Qu’avez-vous fait? (Prise de rdv médical, vous vous êtes soigné seul.e avec les remèdes que vous aviez chez vous, achat à la pharmacie, pharmacopée, attente que ça passe…)","type":"textarea","print":"Préambule d\'affichage"},{"name":"entretien5","label":"Avez-vous fait de l’automédication cette semaine ? Quels étaient les symptômes et quels traitements avez-vous pris? Racontez (médicaments à la pharmacie, plantes, écorces, racine, kaolin, etc.)","type":"textarea","print":"Préambule d\'affichage"},{"name":"entretien6","label":"Quels nouveaux gestes d’hygiène / gestes barrières avez-vous mis en place? (vous laver fréquemment les mains, penser au virus, désinfecter, ne pas toucher les poignées, utiliser ses coudes…)","type":"textarea","print":"Préambule d\'affichage"},{"name":"entretien7","label":"Donnez-vous à vos enfants ou à vos proches des conseils relatifs à l’hygiène ? Si oui, lesquels et pourquoi ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"entretien8","label":"Pensez-vous avoir contracté la Covid-19 ? Etes-vous attentifs à l’apparition de symptômes ? Surveillez-vous vos proches ? Racontez","type":"textarea","print":"Préambule d\'affichage"},{"name":"entretien9","label":"Avez-vous déjà conseillé une personne ayant les symptômes de la Covid-19 ? Qu’avez-vous fait ? Quels conseils lui avez-vous donné ? Racontez","type":"textarea","print":"Préambule d\'affichage"},{"name":"entretien10","label":"Quelles précautions personnelles prenez-vous pour ne pas être contaminé ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"entretien11","label":"Êtes-vous méfiant vis-à-vis des autres, des acteurs publics ou des étrangers ? Expliquez vos ressentis.","type":"textarea","print":"Préambule d\'affichage"},{"name":"entretien12","label":"Quel est votre attitude face à une personne contaminée ou suspecté de l’être ?","type":"textarea","print":"Préambule d\'affichage"}]},{"title":"À l’extérieur","inputs":[{"name":"ext1","label":"Quand vous sortez de chez vous, quels déplacements intra-urbains et interurbains faites-vous ? Racontez","type":"textarea","print":"Préambule d\'affichage"},{"name":"ext2","label":"Limitez-vous vos sorties à l’extérieur ? Si oui, pour quelles raisons ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"ext3","label":"Si vous possédez un masque, expliquez la façon dont vous vous l’êtes procuré, son aspect et ses caractéristiques techniques. Comment et quand le portez-vous ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"ext4","label":"Qu’avez-vous remarqué dans vos rapports avec les personnes croisées lors de vos déplacements ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"ext5","label":"Que pensez-vous des décisions prises par le gouvernement pour combattre la pandémie ? Etes-vous d’accord avec les directives et les restrictions de libertés individuelles ? Les respectez-vous à la lettre ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"ext6","label":"Pour combattre la pandémie, le gouvernement a fermé les écoles et les lieux de culte. Qu’en pensez-vous ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"ext7","label":"Suite à la fermeture des lieux de culte, que faites-vous pour continuer votre pratique religieuse ? Racontez","type":"textarea","print":"Préambule d\'affichage"}]},{"title":"À l’intérieur","inputs":[{"name":"int1","label":"Quelle est la nature de vos relations avec les personnes confinées avec vous ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"int2","label":"Par quelles émotions êtes-vous passé pendant cette période particulière ? Qu’avez-vous fait de ces émotions et avec qui en avez-vous parlé ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"int3","label":"La période de confinement vous a-t-elle fait prendre des décisions dans votre vie, actuelle et future ? Si oui lesquelles ? Si non pourquoi ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"int4","label":"Avez-vous adopté de nouvelles pratiques culturelles depuis le confinement ? Racontez","type":"textarea","print":"Préambule d\'affichage"},{"name":"int5","label":"Par quels média vous êtes-vous informés sur la Covid-19 cette semaine ? Qu’en pensez-vous ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"int6","label":"Pensez-vous que la Covid-19 est prise au sérieux par la population ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"int7","label":"Avez-vous pris ou repris contact avec des personnes éloignées ? Si oui lesquelles, si non pourquoi ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"int8","label":"Avez-vous changé vos habitudes d’interaction sociale ? Comment saluez-vous les amis ou connaissances que vous rencontrez ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"int9","label":"Avez-vous commencé à utiliser (ou à utiliser plus fréquemment) des sites web ou des applications sur votre ordinateur ou votre téléphone portable ? Dites-nous lesquels et comment vous les utilisez","type":"textarea","print":"Préambule d\'affichage"},{"name":"int10","label":"Avez-vous vu se mettre en place des solidarités dans votre entourage / voisinage ? Lesquelles ? Et par qui ?","type":"textarea","print":"Préambule d\'affichage"},{"name":"int11","label":"Avez-vous remarqué l’existence d’initiatives de solidarité organisées par les pouvoirs publics (mairie, gouvernement) ou des associations, coopératives, communautés religieuses… ? Si oui lesquelles ? Qu’en pensez-vous ?","type":"textarea","print":"Préambule d\'affichage"}]}]')},332:function(e,t,n){"use strict";n.r(t);var r=n(301),o=n(302),l=n(304),c={components:{Report:o.a,Page:r.a},data:function(){return{title:l[this.$route.params.id].title,inputs:l[this.$route.params.id].inputs}}},m=n(12),component=Object(m.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("Page",{attrs:{title:this.title}},[t("Report",{attrs:{inputs:this.inputs,"do-init":!1,"do-store":!1,type:"weekly",end:"/weekly"}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);
//# sourceMappingURL=_id.72f1d5b.js.map