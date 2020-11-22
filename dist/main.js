(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(645),o=n.n(a)()((function(e){return e[1]}));o.push([e.id,"body {\n    color:#333333;\n    width: 55em;\n    margin: auto;\n}\n\n#hero img {\n    width: 100%;\n    margin: auto;\n    display: block;\n    border: 10px solid black;\n    border-radius: 5px;\n    box-sizing: border-box;\n}\n\n#hero-text {\n    position: absolute;\n    left: 50%;\n    top: 40%;\n    transform: translate(-50%, -50%);\n    color: #ffffff;\n    text-shadow: 1px 1px 2px black;\n}\n\n#tab-data h1 {\n    font-weight: normal;\n    font-family: courier, cursive;\n    font-size: 4em;\n    margin: 0px;\n    padding: 0px;\n}\n\n#tab-data h2 {\n    font-family: serif;\n    font-size: 1.25em;\n    font-weight: bold;\n    margin: 0px;\n    padding: 0px;\n}\n\n#tab-data {\n    padding-left: 4em;\n    padding-right: 4em;\n    border: 2px solid black;\n    border-radius: 5px;\n}\n\n#tab-menu {\n    padding: 1em;\n}\n\n#tab-menu * {\n    display: inline;\n}\n\n#tab-menu div{\n    padding: 1em;\n}\n\n#tab-menu div:hover {\n    color: black;\n    background-color: #cccccc;\n}\n\n.selected, div.selected:hover {\n    color: white;\n    background-color: gray;\n}\n\n",""]);const r=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,a){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(a)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(o[i]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},379:(e,t,n)=>{var a,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function i(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},a=[],o=0;o<e.length;o++){var d=e[o],l=t.base?d[0]+t.base:d[0],c=n[l]||0,u="".concat(l," ").concat(c);n[l]=c+1;var s=i(u),m={css:d[1],media:d[2],sourceMap:d[3]};-1!==s?(r[s].references++,r[s].updater(m)):r.push({identifier:u,updater:f(m,t),references:1}),a.push(u)}return a}function l(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var r=n.nc;r&&(a.nonce=r)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function s(e,t,n,a){var o=n?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var r=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(r,i[t]):e.appendChild(r)}}function m(e,t,n){var a=n.css,o=n.media,r=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var p=null,h=0;function f(e,t){var n,a,o;if(t.singleton){var r=h++;n=p||(p=l(t)),a=s.bind(null,n,r,!1),o=s.bind(null,n,r,!0)}else n=l(t),a=m.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a));var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<n.length;a++){var o=i(n[a]);r[o].references--}for(var l=d(e,t),c=0;c<n.length;c++){var u=i(n[c]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}n=l}}}}},t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={id:a,exports:{}};return e[a](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{let e=()=>{let e=document.getElementById("tab-data"),t=document.createElement("div");t.id="copy";let n=document.createElement("h3");n.textContent="So few have experieced...",t.appendChild(n);let a=document.createElement("p");a.textContent="Our one of a kind experience is that which cannot beheld. We are the pinnacle of all food creationg.\n    Some cower in fear over what might happen to their pallets. To try one dish from our 42 course meal\n    will be enough to bring you to tears. Many have died by the end. You have been warned.",t.appendChild(a),e.appendChild(t)};var t=n(379),a=n.n(t),o=n(426);a()(o.Z,{insert:"head",singleton:!1}),o.Z.locals,(()=>{let t=document.getElementById("content"),n=document.createElement("div");n.id="hero";let a=document.createElement("div");a.id="hero-text";let o=document.createElement("h1");o.innerHTML="3 &frac14; Star Restaurant",a.appendChild(o);let i=document.createElement("h2");i.textContent="Where flavor meets tongue",a.appendChild(i);let d=document.createElement("img");d.src="chef-picture.jpg",n.appendChild(d),n.appendChild(a),t.appendChild(n);let l=document.createElement("div");l.id="tab-menu";let c=document.createElement("div");c.id="home",c.textContent="Home",c.setAttribute("class","selected"),c.addEventListener("click",(()=>r("home")));let u=document.createElement("div");u.id="menu",u.textContent="Menu",u.addEventListener("click",(()=>r("menu")));let s=document.createElement("div");s.id="about",s.textContent="About",s.addEventListener("click",(()=>r("about"))),l.appendChild(c),l.appendChild(u),l.appendChild(s),t.appendChild(l);let m=document.createElement("div");m.id="tab-container";let p=document.createElement("div");p.id="tab-data",m.appendChild(p),t.appendChild(m),e()})();let r=t=>{let n=document.getElementById("tab-data");for(;n.firstChild;)n.removeChild(n.lastChild);document.getElementsByClassName("selected")[0].setAttribute("class","unselected"),"home"==t?(document.getElementById("home").setAttribute("class","selected"),e()):"about"==t?(document.getElementById("about").setAttribute("class","selected"),(()=>{let e=document.getElementById("tab-data"),t=document.createElement("h3");t.textContent="About Us",e.appendChild(t);let n=document.createElement("p");n.innerHTML="We are a restauraunt. One which you want to go to.<br>We believe ourselves to be the\n    best of the best. Here is to enjoying our food as much as we do.<br>Contact us at: +1(555)555-5555. Thank you.",e.appendChild(n)})()):"menu"==t&&(document.getElementById("menu").setAttribute("class","selected"),(()=>{let e=document.getElementById("tab-data"),t=document.createElement("ul"),n=document.createElement("li");n.textContent="Bordeaux Chicken in a tallow whipped cream sauce",t.appendChild(n);let a=document.createElement("li");a.textContent="Brisket wrapped in 8 year ham trimmings laid in a basket of freeze dried mushrooms",t.appendChild(a);let o=document.createElement("li");o.textContent="Halibut trimmed to the bone and reshaped with a halibut chowder filling and flaky crust",t.appendChild(o),e.appendChild(t)})())}})()})();