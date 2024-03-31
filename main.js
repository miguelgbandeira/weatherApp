(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>c});var r=t(601),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([e.id,"body {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.search-container {\n  display: flex;\n  flex-direction: row;\n  display: block;\n  margin: 30px auto;\n}\n\n.input {\n  width: 300px;\n  padding: 5px;\n  margin-right: 20px;\n}\n\n.submit {\n  padding: 5px;\n  width: 100px;\n}\n\n.weather-container {\n  display: block;\n  margin: 0 auto;\n  text-align: center;\n  width: 20%;\n  border-radius: 16px;\n  margin-top: 20px;\n  line-height: 2;\n}\n\n.has-content {\n  background-color: gainsboro;\n  border: 1px solid grey;\n}\n\n.gif-container {\n  display: block;\n  margin: 20px auto;\n  border-radius: 16px;\n}\n\n.gif {\n  min-width: 400px;\n  max-width: 400px;\n}\n",""]);const c=a},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<e.length;d++){var u=[].concat(e[d]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],d=r.base?s[0]+r.base:s[0],u=i[d]||0,l="".concat(d," ").concat(u);i[d]=u+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:l,updater:m,references:1})}a.push(l)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=t(i[a]);n[c].references--}for(var s=r(e,o),d=0;d<i.length;d++){var u=t(i[d]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=s}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{const e=document.querySelector(".input"),n=document.querySelector(".submit"),r=document.querySelector(".weather-container"),o=document.querySelector(".gif-container");var i=t(72),a=t.n(i),c=t(825),s=t.n(c),d=t(659),u=t.n(d),l=t(56),p=t.n(l),f=t(540),m=t.n(f),h=t(113),v=t.n(h),y=t(365),x={};x.styleTagTransform=v(),x.setAttributes=p(),x.insert=u().bind(null,"head"),x.domAPI=s(),x.insertStyleElement=m(),a()(y.A,x),y.A&&y.A.locals&&y.A.locals,n.addEventListener("click",(()=>{(async function(e){const n=await fetch(`https://api.weatherapi.com/v1/current.json?key=9fd6ac1f89184d86976231049242903&q=${e}`,{mode:"cors"}),t=await n.json(),r=t.current;return{cityName:t.location.name,country:t.location.country,condition:r.condition.text,conditionIcon:r.condition.icon,temp_c:r.temp_c,temp_f:r.temp_f,humidity:r.humidity,feelslike_c:r.feelslike_c,feelslike_f:r.feelslike_f}})(e.value).then((n=>(e.value="",function(e){r.innerHTML="",r.classList.add("has-content");const n=document.createElement("h3");n.textContent=`${e.cityName}`;const t=document.createElement("div");t.textContent=`${e.country}`;const o=document.createElement("div");o.textContent=`${e.condition}`;const i=document.createElement("img");i.src=e.conditionIcon,i.alt="Weather Condition Icon";const a=document.createElement("div");a.textContent=`Temperature (°C): ${e.temp_c}`;const c=document.createElement("div");c.textContent=`Temperature (°F): ${e.temp_f}`;const s=document.createElement("div");s.textContent=`Feels Like (°C): ${e.feelslike_c}`;const d=document.createElement("div");d.textContent=`Feels Like (°F): ${e.feelslike_f}`;const u=document.createElement("div");u.textContent=`Humidity: ${e.humidity}`,r.appendChild(n),r.appendChild(t),r.appendChild(o),r.appendChild(i),r.appendChild(a),r.appendChild(c),r.appendChild(s),r.appendChild(d),r.appendChild(u)}(n),async function(e){const n=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=C8gNMDMriblvxpan6NVeR3jXgiqBdf2x&s=${e}`);return(await n.json()).data.images.original.url}(n.condition)))).then((e=>{o.textContent="";const n=document.createElement("img");n.classList.add("gif"),n.src=e,o.appendChild(n)})).catch((e=>{alert("Something went wrong: "+e)}))}))})()})();