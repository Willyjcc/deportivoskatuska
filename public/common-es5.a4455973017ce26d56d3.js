function asyncGeneratorStep(e,n,t,r,o,i,a){try{var u=e[i](a),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(r,o)}function _asyncToGenerator(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function a(e){asyncGeneratorStep(i,r,o,a,u,"next",e)}function u(e){asyncGeneratorStep(i,r,o,a,u,"throw",e)}a(void 0)}))}}function _defineProperty(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2Yyj":function(e,n,t){var r,o,i;!function(a){if("object"==typeof e.exports){var u=a(0,n);void 0!==u&&(e.exports=u)}else o=[t,n],void 0===(i="function"==typeof(r=a)?r.apply(n,o):r)||(e.exports=i)}((function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=void 0;n.default=["es",[["a. m.","p. m."],t,t],t,[["D","L","M","X","J","V","S"],["dom.","lun.","mar.","mi\xe9.","jue.","vie.","s\xe1b."],["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"],["DO","LU","MA","MI","JU","VI","SA"]],t,[["E","F","M","A","M","J","J","A","S","O","N","D"],["ene.","feb.","mar.","abr.","may.","jun.","jul.","ago.","sept.","oct.","nov.","dic."],["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]],t,[["a. C.","d. C."],t,["antes de Cristo","despu\xe9s de Cristo"]],1,[6,0],["d/M/yy","d MMM y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["H:mm","H:mm:ss","H:mm:ss z","H:mm:ss (zzzz)"],["{1} {0}",t,"{1}, {0}",t],[",",".",";","%","+","-","E","\xd7","\u2030","\u221e","NaN",":"],["#,##0.###","#,##0\xa0%","#,##0.00\xa0\xa4","#E0"],"\u20ac","euro",{AUD:[t,"$"],BRL:[t,"R$"],CNY:[t,"\xa5"],EGP:[],ESP:["\u20a7"],GBP:[t,"\xa3"],HKD:[t,"$"],ILS:[t,"\u20aa"],INR:[t,"\u20b9"],JPY:[t,"\xa5"],KRW:[t,"\u20a9"],MXN:[t,"$"],NZD:[t,"$"],RON:[t,"L"],THB:["\u0e3f"],TWD:[t,"NT$"],USD:["US$","$"],XAF:[],XCD:[t,"$"],XOF:[]},function(e){return 1===e?1:5}]}))},"6i10":function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(e,n,t){var r="".concat(e*n/t-e,"ms"),o=2*Math.PI*n/t;return{r:5,style:{top:"".concat(9*Math.sin(o),"px"),left:"".concat(9*Math.cos(o),"px"),"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(e,n,t){var r=n/t,o="".concat(e*r-e,"ms"),i=2*Math.PI*r;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":o}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,n){return{r:6,style:{left:"".concat(9-9*n,"px"),"animation-delay":-110*n+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(e,n,t){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":"".concat(e*n/t-e,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,n,t){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*n+(n<6?180:-180),"deg)"),"animation-delay":"".concat(e*n/t-e,"ms")}}}}}},FHRc:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("JXBc"),o=t("8Y7J"),i=t("iInd"),a=function(){var e=function(){function e(n,t){_classCallCheck(this,e),this.AFauth=n,this.router=t}return _createClass(e,[{key:"login",value:function(e,n){var t=this;return new Promise((function(r,o){t.AFauth.auth.signInWithEmailAndPassword(e,n).then((function(e){r(e)})).catch((function(e){return o(e)}))}))}},{key:"logout",value:function(){var e=this;this.AFauth.auth.signOut().then((function(){e.router.navigate(["/login"])}))}}]),e}();return e.ngInjectableDef=o.Pb({factory:function(){return new e(o.Qb(r.a),o.Qb(i.m))},token:e,providedIn:"root"}),e}()},KwJk:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return r})),t.d(n,"d",(function(){return u}));var r=function(e,n){return null!==n.closest(e)},o=function(e){return"string"==typeof e&&e.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(e),!0):void 0},i=function(e){var n={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return n[e]=!0})),n},a=/^[a-z][a-z0-9+\-.]*:/,u=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n,t,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==n||"#"===n[0]||a.test(n)){e.next=4;break}if(!(o=document.querySelector("ion-router"))){e.next=4;break}return e.abrupt("return",(null!=t&&t.preventDefault(),o.push(n,r)));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()},NqGI:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return o}));var r=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n,t,r,o,i){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n){e.next=2;break}return e.abrupt("return",n.attachViewToDom(t,r,i,o));case 2:if("string"==typeof r||r instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(a="string"==typeof r?t.ownerDocument&&t.ownerDocument.createElement(r):r,o&&o.forEach((function(e){return a.classList.add(e)})),i&&Object.assign(a,i),t.appendChild(a),e.t0=a.componentOnReady,!e.t0){e.next=12;break}return e.next=12,a.componentOnReady();case 12:return e.abrupt("return",a);case 13:case"end":return e.stop()}}),e)})));return function(n,t,r,o,i){return e.apply(this,arguments)}}(),o=function(e,n){if(n){if(e)return e.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},Uwmq:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function(e){try{if("string"!=typeof e||""===e)return e;var n=document.createDocumentFragment(),t=document.createElement("div");n.appendChild(t),t.innerHTML=e,u.forEach((function(e){for(var t=n.querySelectorAll(e),r=t.length-1;r>=0;r--){var a=t[r];a.parentNode?a.parentNode.removeChild(a):n.removeChild(a);for(var u=i(a),c=0;c<u.length;c++)o(u[c])}}));for(var r=i(n),a=0;a<r.length;a++)o(r[a]);var c=document.createElement("div");c.appendChild(n);var s=c.querySelector("div");return null!==s?s.innerHTML:c.innerHTML}catch(l){return console.error(l),""}},o=function e(n){if(!n.nodeType||1===n.nodeType){for(var t=n.attributes.length-1;t>=0;t--){var r=n.attributes.item(t),o=r.name;if(a.includes(o.toLowerCase())){var u=r.value;null!=u&&u.toLowerCase().includes("javascript:")&&n.removeAttribute(o)}else n.removeAttribute(o)}for(var c=i(n),s=0;s<c.length;s++)e(c[s])}},i=function(e){return null!=e.children?e.children:e.childNodes},a=["class","id","href","src","name","slot"],u=["script","style","iframe","meta","link","object","embed"]},fzvj:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return r}));var r=function(){var e=window.TapticEngine;e&&e.selection()},o=function(){var e=window.TapticEngine;e&&e.gestureSelectionStart()},i=function(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()},a=function(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}},qtYk:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var r=function e(){_classCallCheck(this,e)}},xOQr:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("si+Z"),o=t("lJxs"),i=t("8Y7J"),a=function(){var e=function(){function e(n){_classCallCheck(this,e),this.todosCollection=n.collection("todos/B1tD2Rvv5R3sdgQujIji/generales"),this.todos=this.todosCollection.snapshotChanges().pipe(Object(o.a)((function(e){return e.map((function(e){var n=e.payload.doc.data();return Object.assign({id:e.payload.doc.id},n)}))}))),this.admingaleriasgeneralesCollection=n.collection("todos/B1tD2Rvv5R3sdgQujIji/galeriageneral"),this.admingaleriasgenerales=this.admingaleriasgeneralesCollection.snapshotChanges().pipe(Object(o.a)((function(e){return e.map((function(e){var n=e.payload.doc.data();return Object.assign({id:e.payload.doc.id},n)}))})))}return _createClass(e,[{key:"getTodos",value:function(){return this.todos}},{key:"getTodo",value:function(e){return this.todosCollection.doc(e).valueChanges()}},{key:"updateTodo",value:function(e,n){return this.todosCollection.doc(n).update(e)}},{key:"addTodo",value:function(e){return this.todosCollection.add(e)}},{key:"removeTodo",value:function(e){return this.todosCollection.doc(e).delete()}},{key:"getAdminGaleriasGenerales",value:function(){return this.admingaleriasgenerales}},{key:"getAdminGaleriaGeneral",value:function(e){return this.admingaleriasgeneralesCollection.doc(e).valueChanges()}},{key:"updateAdminGaleriaGeneral",value:function(e,n){return this.admingaleriasgeneralesCollection.doc(n).update(e)}},{key:"addAdminGaleriaGeneral",value:function(e){return this.admingaleriasgeneralesCollection.add(e)}},{key:"removeAdminGaleriaGeneral",value:function(e){return this.admingaleriasgeneralesCollection.doc(e).delete()}}]),e}();return e.ngInjectableDef=i.Pb({factory:function(){return new e(i.Qb(r.a))},token:e,providedIn:"root"}),e}()}}]);