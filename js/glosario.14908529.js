(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["glosario"],{"13d5":function(t,n,r){"use strict";var a=r("23e7"),e=r("d58f").left,i=r("a640"),o=r("2d00"),c=r("605d"),s=i("reduce"),l=!c&&o>79&&o<83;a({target:"Array",proto:!0,forced:!s||l},{reduce:function(t){return e(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"159b":function(t,n,r){var a=r("da84"),e=r("fdbc"),i=r("17c2"),o=r("9112");for(var c in e){var s=a[c],l=s&&s.prototype;if(l&&l.forEach!==i)try{o(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(t,n,r){"use strict";var a=r("b727").forEach,e=r("a640"),i=e("forEach");t.exports=i?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"2d68":function(t,n,r){},"3cd8":function(t,n,r){"use strict";var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"container-fluid banner-interno"},[r("div",{staticClass:"banner-interno__fondo",style:{"background-image":"url("+t.globalData.fondoBannerPrincipal+")"}}),r("div",{staticClass:"container"},[r("div",{staticClass:"banner-interno__titulo py-5"},[t.icono.length?r("div",{staticClass:"banner-interno__titulo__icono me-3"},[r("i",{class:t.icono})]):t._e(),r("h1",{staticClass:"h3 mb-0"},[t._v(t._s(t.titulo))])])])])},e=[],i=r("cdd9"),o={name:"BannerInterno",props:{icono:{type:String,default:""},titulo:{type:String,default:""}},data:function(){return{globalData:i["c"]}}},c=o,s=(r("d75e"),r("2877")),l=Object(s["a"])(c,a,e,!1,null,"3f7f20c1",null);n["a"]=l.exports},"6a4f":function(t,n,r){"use strict";r("a0a5")},a0a5:function(t,n,r){},a640:function(t,n,r){"use strict";var a=r("d039");t.exports=function(t,n){var r=[][t];return!!r&&a((function(){r.call(null,n||function(){throw 1},1)}))}},b64b:function(t,n,r){var a=r("23e7"),e=r("7b0b"),i=r("df75"),o=r("d039"),c=o((function(){i(1)}));a({target:"Object",stat:!0,forced:c},{keys:function(t){return i(e(t))}})},c92c:function(t,n,r){"use strict";r.r(n);var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{staticClass:"curso-main-container glosario"},[r("BannerInterno",{attrs:{icono:"fas fa-atlas",titulo:"Glosario"}}),r("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5 mb-5"},t._l(t.orderedData,(function(n){return r("div",{key:"letra-"+n.letra,staticClass:"glosario__letra-item mb-2"},[r("div",{staticClass:"glosario__letra-item__letra me-4"},[r("div",{staticClass:"glosario__letra-item__letra__icono"},[r("span",[t._v(t._s(n.letra))])])]),r("div",{staticClass:"glosario__letra-item__texto"},t._l(n.terminos,(function(n){return r("p",{staticClass:"mb-3"},[r("strong",[t._v("• "+t._s(n.termino)+": ")]),t._v(t._s(n.significado))])})),0)])})),0)],1)},e=[],i=r("2909"),o=(r("13d5"),r("b64b"),r("159b"),r("d81d"),r("7db0"),r("cdd9")),c=r("3cd8"),s={name:"Glosario",components:{BannerInterno:c["a"]},data:function(){return{glosarioData:o["d"]}},computed:{orderedData:function(){var t=Object(i["a"])(this.glosarioData).reduce((function(t,n){var r=n.termino[0];return t[r]?t[r].terminos.push(n):t[r]={letra:r,terminos:[n]},t}),{}),n=Object.keys(t).sort(),r=[];return n.forEach((function(n){var a=t[n],e=a.terminos;if(e.length>1){var i=[],o=a.terminos.map((function(t){return t.termino})).sort();o.forEach((function(t){i.push(e.find((function(n){return n.termino===t})))})),e=i}r.push({letra:a.letra,terminos:e})})),r}}},l=s,u=(r("6a4f"),r("2877")),f=Object(u["a"])(l,a,e,!1,null,"69019f77",null);n["default"]=f.exports},d58f:function(t,n,r){var a=r("1c0b"),e=r("7b0b"),i=r("44ad"),o=r("50c4"),c=function(t){return function(n,r,c,s){a(r);var l=e(n),u=i(l),f=o(l.length),d=t?f-1:0,_=t?-1:1;if(c<2)while(1){if(d in u){s=u[d],d+=_;break}if(d+=_,t?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:f>d;d+=_)d in u&&(s=r(s,u[d],d,l));return s}};t.exports={left:c(!1),right:c(!0)}},d75e:function(t,n,r){"use strict";r("2d68")}}]);
//# sourceMappingURL=glosario.14908529.js.map