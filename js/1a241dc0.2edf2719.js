(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["1a241dc0"],{"1e1e":function(e,t,n){"use strict";n.r(t);var a=n("b53f"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},2460:function(e,t,n){"use strict";var a=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("8eef")),r={organSystem:i.default[0],description:""},s=r;t.default=s},2517:function(e,t,n){"use strict";n.r(t);var a=n("b841"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},3484:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-card",{staticStyle:{width:"400px"}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("Syötä haittavaikutuksen tiedot")])]),n("q-card-section",[n("q-select",{attrs:{label:"Elinjärjestelmä",options:e.availableOrganSystems,filled:"","bottom-slots":"",autofocus:""},model:{value:e.formData.organSystem,callback:function(t){e.$set(e.formData,"organSystem",t)},expression:"formData.organSystem"}}),n("q-input",{ref:"description",attrs:{label:"Kuvaus *",type:"textarea",rows:"3",rules:[e.required],filled:"",clearable:""},model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description",t)},expression:"formData.description"}})],1),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{attrs:{flat:"",color:"negative"},on:{click:function(t){return e.$emit("close",void 0)}}},[e._v("Peruuta")]),n("q-btn",{attrs:{color:"secondary"},on:{click:function(t){return e.onAccept()}}},[e._v("Hyväksy")])],1)],1)},i=[];n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}))},3566:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-card",{staticStyle:{width:"400px"}},[n("q-card-section",[n("div",{staticClass:"text-h6"},[e._v("Poista "+e._s(e.titleItem))])]),n("q-card-section",[e._v('\n    Poistetaanko "'+e._s(e.messageItem)+'"?'),n("br"),e._v("Tätä ei voi kumota!\n  ")]),n("q-card-actions",{attrs:{align:"right"}},[n("q-btn",{attrs:{flat:"",color:"secondary"},on:{click:function(t){return e.$emit("close",!1)}}},[e._v("Peruuta")]),n("q-btn",{attrs:{color:"negative"},on:{click:function(t){return e.$emit("close",!0)}}},[e._v("Poista")])],1)],1)},i=[];n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}))},4373:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"q-gutter-md",attrs:{padding:""}},[n("div",{staticClass:"text-h6"},[e._v("\n    Haittavaikutukset\n  ")]),n("q-list",{attrs:{bordered:"",separator:""}},[e.adverseEffects.length?e._e():n("q-item",[n("q-item-section",[e._v("Ei haittavaikutuksia")])],1),e._l(e.adverseEffects,(function(t,a){return n("q-item",{key:t.organSystem},[n("q-item-section",[n("q-item-label",[e._v(e._s(t.organSystem))]),n("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.description))])],1),n("q-item-section",{attrs:{side:""}},[n("q-btn-group",{attrs:{flat:"",dense:""}},[n("q-btn",{attrs:{flat:"",dense:"",color:"secondary",icon:"mdi-pencil"},on:{click:function(t){return e.editAdverseEffect(a)}}},[n("q-tooltip",[e._v("Muokkaa")])],1),n("q-btn",{attrs:{flat:"",dense:"",color:"negative",icon:"mdi-trash-can"},on:{click:function(t){return e.removeAdverseEffect(a)}}},[n("q-tooltip",[e._v("Poista")])],1)],1)],1)],1)})),n("q-item",{staticClass:"text-secondary text-uppercase",attrs:{clickable:""},on:{click:function(t){return e.addAdverseEffect()}}},[n("q-item-section",{attrs:{avatar:""}},[n("q-icon",{attrs:{name:"mdi-plus"}})],1),n("q-item-section",[e._v("Lisää haittavaikutus")])],1)],2),n("q-dialog",{attrs:{"no-backdrop-dismiss":""},model:{value:e.adverseEffectDialogShown,callback:function(t){e.adverseEffectDialogShown=t},expression:"adverseEffectDialogShown"}},[n("adverse-effect-dialog",{attrs:{formData:e.adverseEffectDialogData,availableOrganSystems:e.availableOrganSystems},on:{close:function(t){return e.onAdverseEffectDialogClose(t)}}})],1),n("q-dialog",{model:{value:e.confirmRemoveDialogShown,callback:function(t){e.confirmRemoveDialogShown=t},expression:"confirmRemoveDialogShown"}},[n("confirm-remove-dialog",{attrs:{titleItem:"haittavaikutus",messageItem:e.adverseEffects[e.removeAdverseEffectIndex]?e.adverseEffects[e.removeAdverseEffectIndex].organSystem:""},on:{close:function(t){return e.onConfirmRemoveDialogClose(t)}}})],1)],1)},i=[];n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}))},"4c0f":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"ConfirmRemoveDialog",props:{titleItem:{type:String,required:!0},messageItem:{type:String,required:!0}}};t.default=a},"6bfb":function(e,t,n){"use strict";n.r(t);var a=n("3484"),i=n("1e1e");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var s=n("2877"),o=n("f09f"),c=n.n(o),f=n("a370"),u=n.n(f),l=n("ddd8"),d=n.n(l),v=n("27f9"),m=n.n(v),g=n("4b7e"),p=n.n(g),h=n("9c40"),b=n.n(h),y=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=y.exports,y.options.components=Object.assign({QCard:c(),QCardSection:u(),QSelect:d(),QInput:m(),QCardActions:p(),QBtn:b()},y.options.components)},"8eef":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=["Kasvu","Puberteetti / sukupuolihormonit","Hedelmällisyys","Rinnat","Keuhkot","Sydän","Verenpaine","Munuaiset","Kilpirauhanen","Hermojärjestelmä","Kuulo","Näkö","Luusto / lihaksisto","Suu / nielu","Suolisto","Maksa","Virtsatiet","Iho","Puolustuskyky","Fyysinen kunto","Psyykkinen kunto"],i=a;t.default=i},9931:function(e,t,n){"use strict";n.r(t);var a=n("3566"),i=n("cb78");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var s=n("2877"),o=n("f09f"),c=n.n(o),f=n("a370"),u=n.n(f),l=n("4b7e"),d=n.n(l),v=n("9c40"),m=n.n(v),g=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=g.exports,g.options.components=Object.assign({QCard:c(),QCardSection:u(),QCardActions:d(),QBtn:m()},g.options.components)},b53f:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("e2da"),i={name:"AdverseEffectDialog",props:{formData:{type:Object,required:!0},availableOrganSystems:{type:Array,required:!0}},data:function(){return{required:a.required}},methods:{onAccept:function(){this.$refs.description.validate(),this.$refs.description.hasError?this.$q.notify({icon:"mdi-alert-circle",color:"negative",message:"Täytä kaikki pakolliset kentät",timeout:2e3}):(this.$q.notify({icon:"mdi-check",color:"positive",message:"Vierasesineen tiedot päivitetty",timeout:2e3}),this.$emit("close",this.formData))}}};t.default=i},b841:function(e,t,n){"use strict";var a=n("288e");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("6762"),n("2fdb");var i=a(n("6d83")),r=a(n("2460")),s=a(n("6bfb")),o=a(n("9931")),c=a(n("8eef")),f={components:{AdverseEffectDialog:s.default,ConfirmRemoveDialog:o.default},data:function(){return{adverseEffectDialogShown:!1,adverseEffectDialogData:{},adverseEffectDialogIndex:-1,confirmRemoveDialogShown:!1,removeAdverseEffectIndex:-1,availableOrganSystems:c.default}},computed:{adverseEffects:function(){return this.$store.state.adverseEffects},existingOrganSystems:function(){return this.adverseEffects.map((function(e){return e.organSystem}))}},methods:{addAdverseEffect:function(){var e=this;this.availableOrganSystems=c.default.filter((function(t){return!e.existingOrganSystems.includes(t)})),this.adverseEffectDialogIndex=-1;var t=(0,i.default)(r.default);t.organSystem=this.availableOrganSystems[0],this.adverseEffectDialogData=t,this.adverseEffectDialogShown=!0},editAdverseEffect:function(e){var t=this;this.availableOrganSystems=c.default.filter((function(n){return!t.existingOrganSystems.includes(n)||t.adverseEffects[e].type===n})),this.adverseEffectDialogIndex=e,this.adverseEffectDialogData=(0,i.default)(this.adverseEffects[e]),this.adverseEffectDialogShown=!0},onAdverseEffectDialogClose:function(e){this.adverseEffectDialogShown=!1,e&&(-1===this.adverseEffectDialogIndex?this.$store.dispatch("addAdverseEffect",this.adverseEffectDialogData):this.$store.dispatch("updateAdverseEffect",{index:this.adverseEffectDialogIndex,newData:this.adverseEffectDialogData}))},removeAdverseEffect:function(e){this.removeAdverseEffectIndex=e,this.confirmRemoveDialogShown=!0},onConfirmRemoveDialogClose:function(e){this.confirmRemoveDialogShown=!1,e&&this.$store.dispatch("removeAdverseEffect",this.removeAdverseEffectIndex),this.removeAdverseEffectIndex=-1}}};t.default=f},ca14:function(e,t,n){"use strict";n.r(t);var a=n("4373"),i=n("2517");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var s=n("2877"),o=n("9989"),c=n.n(o),f=n("1c1c"),u=n.n(f),l=n("66e5"),d=n.n(l),v=n("4074"),m=n.n(v),g=n("0170"),p=n.n(g),h=n("e7a9"),b=n.n(h),y=n("9c40"),D=n.n(y),E=n("05c0"),k=n.n(E),q=n("0016"),S=n.n(q),_=n("24e8"),x=n.n(_),A=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,null,null);t["default"]=A.exports,A.options.components=Object.assign({QPage:c(),QList:u(),QItem:d(),QItemSection:m(),QItemLabel:p(),QBtnGroup:b(),QBtn:D(),QTooltip:k(),QIcon:S(),QDialog:x()},A.options.components)},cb78:function(e,t,n){"use strict";n.r(t);var a=n("4c0f"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},e2da:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isValidID=t.isValidDate=t.isNumber=t.required=void 0,n("6762"),n("c5f6"),n("4917");var a=function(e){return!!e||"Pakollinen kenttä"};t.required=a;var i=function(e){return!e||e.match(/^\d+([,.]\d+)?$/)||"Virheellinen luku"};t.isNumber=i;var r=function(e,t,n){var a=Number(e),i=Number(t),r=Number(n);r<100&&(r+=2e3);var s=[4,6,9,11],o=r%4===0&&(r%100!==0||r%400===0);return!(isNaN(a)||isNaN(i)||isNaN(r))&&(!(a<1||i<1||r<1900||r>2099)&&(!(i>12)&&(!(a>31)&&(!(s.includes(i)&&a>30)&&(2!==i||!(a>29||!o&&a>28))))))};t.isValidDate=r;var s=function(e){var t="Virheellinen henkilötunnus";if(!e)return t;var n=e.slice(6,7);if(!n.match(/^[-A]$/))return t;var a="-"===n?"19":"20",i=e.slice(0,2),s=e.slice(2,4),o=a+e.slice(4,6);if(!r(i,s,o))return t;var c=e.slice(7,10);if(!c.match(/^\d{3}$/))return t;var f=Number(e.slice(0,6)+c)%31,u=e.slice(10,11),l=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y"];return u===l[f]||t};t.isValidID=s}}]);