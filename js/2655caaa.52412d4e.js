(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2655caaa"],{"0c6c":function(t,e,a){"use strict";a.r(e);var n=a("b1e5"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"135b":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-input",{attrs:{value:t.value,label:t.label,filled:"",autofocus:t.autofocus,color:t.color||"primary","bottom-slots":!t.noBottomSlots},on:{change:function(e){return t.checkInput(e)}},scopedSlots:t._u([t.value?{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"mdi-close-circle"},on:{click:function(e){return e.stopPropagation(),t.$emit("input","")}}})]},proxy:!0}:null],null,!0)})},o=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return o}))},"1c21":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c5f6"),a("28a5"),a("6b54"),a("06db");var n=a("e2da"),o={name:"DateInput",props:{label:{type:String,required:!0},value:{type:String,required:!0},color:{type:String,required:!1},autofocus:{type:Boolean,required:!1},noBottomSlots:{type:Boolean,required:!1}},methods:{checkInput:function(t){var e=t.target.value;""===e&&this.$emit("input","");var a,o,r,l=new Date,i=l.getDate().toString(),u=(l.getMonth()+1).toString(),c=l.getFullYear().toString();if("t"===e)a=i,o=u,r=c;else{var s=e.split(".");a=s[0],o=s[1]||u,r=s[2]||c}1===a.length&&(a="0".concat(a)),1===o.length&&(o="0".concat(o)),r.length<3&&(r=this.prependCentury(r,c)),(0,n.isValidDate)(a,o,r)&&this.$emit("input","".concat(a,".").concat(o,".").concat(r))},prependCentury:function(t,e){var a=Number(t),n=Number(e.slice(-2));return a<=n?"20".concat(t):"19".concat(t)}}};e.default=o},"3e8f":function(t,e,a){"use strict";a.r(e);var n=a("d93f"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},"4d9e":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row text-body1 q-gutter-x-md q-mb-sm"},[a("div",{staticClass:"col-2 text-right"},[t._v(t._s(t.label)+":")]),a("div",{staticClass:"text-secondary cursor-pointer",class:t.widthClass},[a("span",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.displayValue))]),a("q-popup-edit",{on:{save:function(e){return t.$emit("input",t.localValue)}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.set,o=e.cancel;return[t.isTextInput||t.isTextArea?a("q-input",{attrs:{type:t.isTextArea?"textarea":"text",autogrow:t.isTextArea,label:t.label,filled:"",clearable:"",autofocus:"",color:t.inputColor},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}}):t._e(),t.isDateInput?a("date-input",{attrs:{label:t.label,color:t.inputColor,autofocus:"","no-bottom-slots":""},model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}}):t._e(),a("div",{staticClass:"q-popup-edit__buttons row justify-center no-wrap"},[a("q-btn",{attrs:{flat:"",color:"negative"},on:{click:function(t){return t.stopPropagation(),o(t)}}},[t._v("Peruuta")]),a("q-btn",{attrs:{color:t.inputColor,glossy:""},on:{click:function(t){return t.stopPropagation(),n(t)}}},[t._v("Hyväksy")])],1)]}}]),model:{value:t.localValue,callback:function(e){t.localValue=e},expression:"localValue"}})],1)])},o=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return o}))},"5e92":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-gutter-md",attrs:{padding:""}},[a("div",{staticClass:"text-h6"},[t._v("Lomakkeen täyttäjä")]),a("data-entry-row",{attrs:{label:"Nimi",width:4},model:{value:t.formDataLocal.name,callback:function(e){t.$set(t.formDataLocal,"name",e)},expression:"formDataLocal.name"}}),a("data-entry-row",{attrs:{label:"Puhelin",width:4},model:{value:t.formDataLocal.phone,callback:function(e){t.$set(t.formDataLocal,"phone",e)},expression:"formDataLocal.phone"}}),a("data-entry-row",{attrs:{label:"Paikka",width:4},model:{value:t.formDataLocal.place,callback:function(e){t.$set(t.formDataLocal,"place",e)},expression:"formDataLocal.place"}}),a("data-entry-row",{attrs:{label:"Päivämäärä",type:"date",width:2},model:{value:t.formDataLocal.date,callback:function(e){t.$set(t.formDataLocal,"date",e)},expression:"formDataLocal.date"}})],1)},o=[];a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return o}))},a504:function(t,e,a){"use strict";a.r(e);var n=a("1c21"),o=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=o.a},b1e5:function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c5f6");var o=n(a("c3fd")),r={name:"DataEntryRow",components:{DateInput:o.default},props:{label:{type:String,required:!0},value:{type:String,required:!0},type:{type:String,required:!1},width:{type:Number,required:!1}},data:function(){return{inputColor:"secondary",localValue:""}},computed:{displayValue:function(){return this.localValue||"Ei syötetty"},isTextInput:function(){return!this.type||"text"===this.type},isTextArea:function(){return"textarea"===this.type},isDateInput:function(){return"date"===this.type},widthClass:function(){return["col-".concat(this.width||3)]}},watch:{value:function(){this.localValue=this.value}},created:function(){this.localValue=this.value}};e.default=r},c3fd:function(t,e,a){"use strict";a.r(e);var n=a("135b"),o=a("a504");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);var l=a("2877"),i=a("27f9"),u=a.n(i),c=a("0016"),s=a.n(c),d=Object(l["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=d.exports,d.options.components=Object.assign({QInput:u(),QIcon:s()},d.options.components)},d188:function(t,e,a){"use strict";a.r(e);var n=a("4d9e"),o=a("0c6c");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);var l=a("2877"),i=a("42a1"),u=a.n(i),c=a("27f9"),s=a.n(c),d=a("9c40"),f=a.n(d),p=Object(l["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=p.exports,p.options.components=Object.assign({QPopupEdit:u(),QInput:s(),QBtn:f()},p.options.components)},d93f:function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("6b54"),a("06db");var o=n(a("6d83")),r=n(a("d188")),l={components:{DataEntryRow:r.default},data:function(){return{formDataLocal:{},dataUpdate:!1}},computed:{formData:function(){return this.$store.state.filledBy}},watch:{formData:{handler:function(){this.dataUpdate=!0,this.formDataLocal=(0,o.default)(this.formData)},deep:!0},formDataLocal:{handler:function(){this.dataUpdate?this.dataUpdate=!1:this.$store.dispatch("updateFilledBy",this.formDataLocal)},deep:!0}},created:function(){if(this.formDataLocal=(0,o.default)(this.formData),!this.formDataLocal.date){var t=new Date,e=t.getDate().toString(),a=(t.getMonth()+1).toString(),n=t.getFullYear().toString();1===e.length&&(e="0".concat(e)),1===a.length&&(a="0".concat(a)),this.formDataLocal.date="".concat(e,".").concat(a,".").concat(n)}}};e.default=l},ddf5:function(t,e,a){"use strict";a.r(e);var n=a("5e92"),o=a("3e8f");for(var r in o)"default"!==r&&function(t){a.d(e,t,(function(){return o[t]}))}(r);var l=a("2877"),i=a("9989"),u=a.n(i),c=Object(l["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports,c.options.components=Object.assign({QPage:u()},c.options.components)},e2da:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isValidID=e.isValidDate=e.isNumber=e.required=void 0,a("6762"),a("c5f6"),a("4917");var n=function(t){return!!t||"Pakollinen kenttä"};e.required=n;var o=function(t){return!t||t.match(/^\d+([,.]\d+)?$/)||"Virheellinen luku"};e.isNumber=o;var r=function(t,e,a){var n=Number(t),o=Number(e),r=Number(a);r<100&&(r+=2e3);var l=[4,6,9,11],i=r%4===0&&(r%100!==0||r%400===0);return!(isNaN(n)||isNaN(o)||isNaN(r))&&(!(n<1||o<1||r<1900||r>2099)&&(!(o>12)&&(!(n>31)&&(!(l.includes(o)&&n>30)&&(2!==o||!(n>29||!i&&n>28))))))};e.isValidDate=r;var l=function(t){var e="Virheellinen henkilötunnus";if(!t)return e;var a=t.slice(6,7);if(!a.match(/^[-A]$/))return e;var n="-"===a?"19":"20",o=t.slice(0,2),l=t.slice(2,4),i=n+t.slice(4,6);if(!r(o,l,i))return e;var u=t.slice(7,10);if(!u.match(/^\d{3}$/))return e;var c=Number(t.slice(0,6)+u)%31,s=t.slice(10,11),d=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y"];return s===d[c]||e};e.isValidID=l}}]);