var e={};e=function e(t,n,r){function o(a,c){if(!n[a]){if(!t[a]){var s=void 0;if(!c&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};t[a][0].call(u.exports,(function(e){return o(t[a][1][e]||e)}),u,u.exports,e,t,n,r)}return n[a].exports}for(var i=void 0,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},o=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=i,n.create=function(e,t){var n=function(e,t){var n=r('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var a=o(i,"IMG"),c=o(i,"VIDEO"),s=o(i,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===c&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(r(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),a=function(e){return!1!==t.onClose(c)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(c)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&a()}));var c={element:function(){return n},visible:function(){return i(n)},show:function(e){return!1!==t.onShow(c)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(c)}))},close:a};return c}},{}]},{},[1])(1);const t=document.querySelector(".gallery");let n=1,r="";const o=async(e,t)=>{try{const n=await fetch(`https://pixabay.com/api/?key=38418747-ec354076649bfa1b688ea2611&image_type=photo&orientation=horizontal&safesearch=true&q=${e}&page=${t}`);if(!n.ok)throw new Error("Network response was not ok");return await n.json()}catch(e){return console.error("Error fetching data:",e),null}},i=({preview:e,original:t,description:n})=>`\n    <div class="photo-card">\n      <a class="gallery__link" href="${t}">\n        <img\n          class="gallery__image"\n          src="${e}"\n          data-source="${t}"\n          alt="${n}"\n        />\n      </a>\n    </div>\n  `,a=n=>{const r=n.map(i).join("");t.innerHTML=r,t.querySelectorAll(".gallery__image").forEach((t=>{t.addEventListener("click",(t=>{t.preventDefault();const n=t.target.dataset.source;var r;r=n,e.create(`\n    <img src="${r}" width="800" height="600">\n  `).show()}))}));document.querySelector(".load-more").style.display="block"},c=document.getElementById("search-form"),s=document.querySelector(".load-more");c.addEventListener("submit",(async e=>{e.preventDefault(),r=e.target.searchQuery.value.trim(),n=1;const i=await o(r,n);i&&i.hits.length>0?(a(i.hits),s.style.display="block"):(t.innerHTML="",s.style.display="none",alert("Sorry, there are no images matching your search query. Please try again."))})),s.addEventListener("click",(async()=>{const e=document.querySelector('[name="searchQuery"]').value.trim(),t=document.querySelectorAll(".photo-card").length/20+1,n=await o(e,t);if(n&&n.hits.length>0){const e=n.hits;a(e)}else s.style.display="none",alert("We're sorry, but you've reached the end of search results.")}));
//# sourceMappingURL=index.66cf4781.js.map
