(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),i=t(645),a=t.n(i),c=t(667),l=t.n(c),s=new URL(t(811),t.b),u=a()(o());u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap);"]),u.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap);"]);var d=l()(s);u.push([n.id,`:root {\n    --main-yellow: hsl(39, 100%, 50%);\n    --home-bgc: hsl(199, 100%, 11%, 0.3);\n    --menu-bgc: hsl(199, 100%, 11%, 0.7);\n}\n\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n}\n\nbody {\n    height: 100vh;\n    background-image: url(${d});\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center center;\n    color:#fff;\n}\n\n/* ######################## */\n\n#header {\n    height: clamp(2rem, 9vh, 6rem);\n    background-color: #00000080;\n    border-bottom: 2px solid var(--main-yellow);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: clamp(1rem, 12vw, 6rem);   /** <========= */\n}\n\n.home-button {\n    border: 0;\n    background-color: transparent;\n    color: #fff;\n    font-size: clamp(.7rem, 4vw, 1.1rem);\n    margin-right: 20px;\n}\n\n.contact-button {\n    border: 0;\n    background-color: transparent;\n    color: #fff;\n    font-size: clamp(.7rem, 4vw, 1.1rem);\n\n}\n\n.about-button {\n    border: 0;\n    background-color: transparent;\n    color: #fff;\n    font-size: clamp(.7rem, 4vw, 1.1rem);\n    margin-right: 20px;\n\n}\n\n\nbutton {\n    border: 0;\n    background-color: transparent;\n    color: #fff;\n    font-size: clamp(.7rem, 4vw, 1.1rem);\n}\n\nbutton:hover {\n    border-bottom: 2px solid var(--main-yellow);\n}\n\n/* =============================================== */\n\n#content {\n    height: 90%;\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--home-bgc);\n\n}\n\n#home {\n    border-radius: 12%;\n    padding-left: 20px;\n    padding-right: 20px;\n    height:  40%;\n    color: #fff;\n    display: grid;\n    justify-items: center;\n    justify-content: center;\n    grid-template-rows: 35% min-content 13% 1fr;\n    background-color: var(--menu-bgc);\n}\n\n#home h1 {\n    font-size: 3.8rem;\n}\n\n#home p {\n    color: var(--main-yellow);\n}\n\n/* =============================================== */\n\n#menu {\n    background-color: var(--menu-bgc);\n    border-radius: 8px;\n    height: 80%;\n    width: clamp(180px, 70%, 900px);\n    overflow: auto;\n    padding: min(10%, 3rem) min(10%, 4rem);\n}\n\n@media (min-width: 650px) {\n    #menu::-webkit-scrollbar {\n        width: 5px;\n    }\n    #menu::-webkit-scrollbar-thumb {\n        background: hsla(0, 0%, 70%, 0.4);\n        border-radius: 8px;\n    }\n}\n\n#menu h2 {\n    font-family: 'Pinyon Script', cursive;\n    font-size: clamp(1.5rem, 7vw, 4rem);\n    color: var(--main-yellow);\n    font-weight: 300;\n    line-height: 10%;\n}\n\n#menu h1 {\n    font-size: clamp(1.8rem, 8vw, 5rem);\n}\n\n#menu h3 {\n    font-size: clamp(1rem, 4vw, 2rem);\n    color: var(--main-yellow);\n    margin-bottom: 1vh;\n}\n\n#menu p {\n    font-size: clamp(.7rem, 3vw, 1.4rem);\n}\n\n#menu hr:first-of-type {\n    margin-top: 2vh;\n}\n\n#menu hr {\n    width: max(6rem, 50%);\n    border: 1px solid var(--main-yellow);\n    margin: 4vh auto 3vh;\n}\n\n/* =============================================== */\n\n\n#contact {\n    background-color: var(--menu-bgc);\n    border-radius: 8px;\n    height: 80%;\n    width: clamp(180px, 70%, 900px);\n    color: #fff;\n    text-align: center;\n    overflow: auto;\n    padding: min(10%, 3rem) min(10%, 4rem);\n}\n\n#contact h2 {\n    font-family: 'Pinyon Script', cursive;\n    font-size: clamp(1.5rem, 7vw, 4rem);\n    color: var(--main-yellow);\n    font-weight: 300;\n    line-height: 10%;\n}\n\n#contact h1 {\n    font-size: clamp(1.8rem, 8vw, 5rem);\n}\n\n#contact p {\n    font-size: clamp(.7rem, 3vw, 1.4rem);\n    margin-bottom: min(39%, 30vh);\n    text-align: left;\n}`,""]);const p=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<n.length;s++){var u=[].concat(n[s]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var l=n[c],s=r.base?l[0]+r.base:l[0],u=i[s]||0,d="".concat(s," ").concat(u);i[s]=u+1;var p=t(d),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var h=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var l=r(n,o),s=0;s<i.length;s++){var u=t(i[s]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}i=l}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},811:(n,e,t)=>{n.exports=t.p+"ac8b162f5cddd04965fe.jpg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function n(){const n=document.querySelector("div#content"),e=document.createElement("div");e.id="menu",e.innerHTML="<h2>Leo's</h2><h1>MENU</h1><hr><h3>Coq au vin</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><hr><h3>Chocolate soufflé</h3><p>Congue nisi vitae suscipit tellus mauris a diam maecenas.</p><hr><h3>Flamiche</h3><p>Viverra aliquet eget sit amet tellus cras. Dignissim enim sit amet venenatis.</p><hr><h3>Ratatouille</h3><p>Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt.</p><hr><h3>Tarte Tatin</h3><p>Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor.</p>",n.innerHTML="",n.appendChild(e)}function e(){const e=document.querySelector("div#content"),t=document.createElement("div"),r=document.createElement("h2"),o=document.createElement("h1"),i=document.createElement("p"),a=document.createElement("div"),c=document.createElement("button");t.classList.add("home-content"),c.classList.add("info-button"),o.textContent="Welcome to Leo's",i.textContent="The birth place of your delicious experiences.",c.textContent="Click here to find out more!",t.id="home",e.innerHTML="",t.appendChild(r),t.appendChild(o),t.appendChild(i),t.appendChild(a),a.appendChild(c),e.appendChild(t),c.addEventListener("click",n)}function r(){const n=document.querySelector("div#content"),e=document.createElement("div");e.id="contact",e.innerHTML="<h2>Leo's</h2><h1>Contact Us</h1><hr><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",n.innerHTML="",n.appendChild(e)}var o=t(379),i=t.n(o),a=t(795),c=t.n(a),l=t(569),s=t.n(l),u=t(565),d=t.n(u),p=t(216),m=t.n(p),h=t(589),f=t.n(h),v=t(426),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=m(),i()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals,function(){const t=document.querySelector("div#header"),o=(document.querySelector("div#content"),document.createElement("nav")),i=document.createElement("button"),a=document.createElement("button"),c=document.createElement("button");i.classList.add("home-button"),a.classList.add("about-button"),c.classList.add("contact-button"),i.textContent="Home",a.textContent="Menu",c.textContent="Contact",o.appendChild(i),o.appendChild(a),o.appendChild(c),t.appendChild(o),i.addEventListener("click",e),a.addEventListener("click",n),c.addEventListener("click",r)}(),e()})()})();