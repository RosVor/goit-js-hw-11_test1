!function(){function t(t){return t&&t.__esModule?t.default:t}var r={};function e(t,r,e,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t){return function(){var r=this,n=arguments;return new Promise((function(o,a){var i=t.apply(r,n);function c(t){e(i,o,a,c,u,"next",t)}function u(t){e(i,o,a,c,u,"throw",t)}c(void 0)}))}};var n={},o=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof d?r:d,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(t,r,e){var n=h;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw a;return T()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=_(i,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===h)throw n=y,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=l(t,r,e);if("normal"===u.type){if(n=e.done?y:f,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=y,e.method="throw",e.arg=u.arg)}}}(t,e,i),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h="suspendedStart",f="suspendedYield",p="executing",y="completed",v={};function d(){}function m(){}function g(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(P([])));x&&x!==e&&n.call(x,a)&&(w=x);var L=g.prototype=d.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function k(t,r){function e(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:T}}function T(){return{value:r,done:!0}}return m.prototype=g,u(L,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},E(k.prototype),u(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new k(s(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(L),u(L,c,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}(n);try{regeneratorRuntime=o}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}var a,i="https://pixabay.com/api/?key=".concat("38418747-ec354076649bfa1b688ea2611","&image_type=photo&orientation=horizontal&safesearch=true"),c=document.getElementById("search-form"),u=document.querySelector(".gallery"),s=document.querySelector(".load-more"),l=1,h="",f=(a=t(r)(t(n).mark((function r(e,o){var a,c;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(i,"&q=").concat(e,"&page=").concat(o));case 3:if((a=t.sent).ok){t.next=6;break}throw new Error("Network response was not ok");case 6:return t.next=8,a.json();case 8:return c=t.sent,t.abrupt("return",c);case 12:return t.prev=12,t.t0=t.catch(0),console.error("Error fetching data:",t.t0),t.abrupt("return",null);case 16:case"end":return t.stop()}}),r,null,[[0,12]])}))),function(t,r){return a.apply(this,arguments)}),p=function(t){var r=t.map((function(t){return'\n    <div class="photo-card">\n      <img src="'.concat(t.webformatURL,'" alt="').concat(t.tags,'" loading="lazy" />\n      <div class="info">\n        <p class="info-item"><b>Likes:</b> ').concat(t.likes,'</p>\n        <p class="info-item"><b>Views:</b> ').concat(t.views,'</p>\n        <p class="info-item"><b>Comments:</b> ').concat(t.comments,'</p>\n        <p class="info-item"><b>Downloads:</b> ').concat(t.downloads,"</p>\n      </div>\n    </div>\n  ")})).join("");u.innerHTML=r},y=function(){var e=t(r)(t(n).mark((function r(e){var o;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),h=e.target.searchQuery.value.trim(),l=1,t.next=5,f(h,l);case 5:(o=t.sent)&&o.hits.length>0?(p(o.hits),s.style.display="block"):(u.innerHTML="",s.style.display="none",alert("Sorry, there are no images matching your search query. Please try again."));case 7:case"end":return t.stop()}}),r)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=t(r)(t(n).mark((function r(){var e,o,a,i,c;return t(n).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l+=1,t.next=3,f(h,l);case 3:(e=t.sent)&&e.hits.length>0?(o=e.hits,a=Array.from(u.querySelectorAll(".photo-card")),i=p(o),u.insertAdjacentHTML("beforeend",i),c=a.length,Array.from(u.querySelectorAll(".photo-card")).slice(c)[0].scrollIntoView({behavior:"smooth",block:"start"})):(s.style.display="none",alert("We're sorry, but you've reached the end of search results."));case 5:case"end":return t.stop()}}),r)})));return function(){return e.apply(this,arguments)}}();c.addEventListener("submit",y),s.addEventListener("click",v)}();
//# sourceMappingURL=index.b441cc2c.js.map