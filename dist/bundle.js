!function e(t,n,r){function o(s,i){if(!n[s]){if(!t[s]){var u="function"==typeof require&&require;if(!i&&u)return u(s,!0);if(a)return a(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var f=n[s]={exports:{}};t[s][0].call(f.exports,function(e){var n=t[s][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[s].exports}for(var a="function"==typeof require&&require,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){var e=navigator.userAgent.toLowerCase(),t=/iphone|ipad|ipod/i.test(e);t&&document.body.classList.add("is-ios")}},{}],2:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=e("./device"),a=r(o),s=e("./sections/about"),i=r(s),u=e("./sections/repos"),c=r(u);document.addEventListener("readystatechange",function(e){switch(document.readyState){case"interactive":(0,a["default"])(),(0,c["default"])();break;case"complete":(0,i["default"])()}})},{"./device":1,"./sections/about":3,"./sections/repos":4}],3:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=e("../util");n["default"]=function(){function e(e){t.style.height=n[s].getAttribute("data-height")+"px",n.forEach(function(e){return e.classList.remove("is-active")}),n[s].classList.add("is-active")}var t=document.querySelector("[data-about]"),n=(0,r.toArray)("[data-about-piece]"),o=0,a=n.length-1,s=0;n.forEach(function(e){return e.setAttribute("data-height",e.clientHeight)}),e(s);var i=document.querySelector("[data-about-plus]"),u=document.querySelector("[data-about-minus]");i.addEventListener("click",function(t){t.preventDefault(),a>s&&s++,e(s)}),u.addEventListener("click",function(t){t.preventDefault(),s>o&&s--,e(s)})}},{"../util":5}],4:[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(n,"__esModule",{value:!0});var o=e("jax.js"),a=r(o),s=function(e){return'\n  <a class="repo-name" href="'+e.url+'" target="_blank">'+e.name+'</a>\n  <p class="repo-desc">'+e.desc+'</p>\n\n  <div class="repo-stats">\n    <p class="repo-stat">\n      <img class="repo-stat-icon" src="images/repos/star.svg">\n      <span class="repo-stat-text">'+e.stars+'</span>\n    </p>\n\n    <p class="repo-stat">\n      <img class="repo-stat-icon" src="images/repos/fork.svg">\n      <span class="repo-stat-text">'+e.forks+'</span>\n    </p>\n  </div>\n\n  <a class="repo-url" href="'+e.url+'" target="_blank">Launch<img class="repo-url-icon" src="images/repos/url.svg"></a>\n'};n["default"]=function(){(0,a["default"])("https://callmecavs.herokuapp.com/").then(function(e){var t=JSON.parse(e),n=document.createDocumentFragment();t.forEach(function(e){var t=document.createElement("div");t.classList.add("repo"),t.innerHTML=s(e),n.appendChild(t)}),document.querySelector(".repos").appendChild(n)})}},{"jax.js":6}],5:[function(e,t,n){"use strict";function r(e){return Array.prototype.slice.call(document.querySelectorAll(e))}Object.defineProperty(n,"__esModule",{value:!0}),n.toArray=r},{}],6:[function(e,t,n){(function(r){!function(e){if("object"==typeof n&&"undefined"!=typeof t)t.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var o;o="undefined"!=typeof window?window:"undefined"!=typeof r?r:"undefined"!=typeof self?self:this,o.Jax=e()}}(function(){return function t(n,r,o){function a(i,u){if(!r[i]){if(!n[i]){var c="function"==typeof e&&e;if(!u&&c)return c(i,!0);if(s)return s(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var d=r[i]={exports:{}};n[i][0].call(d.exports,function(e){var t=n[i][1][e];return a(t?t:e)},d,d.exports,t,n,r,o)}return r[i].exports}for(var s="function"==typeof e&&e,i=0;i<o.length;i++)a(o[i]);return a}({1:[function(e,t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(e){function t(){r.readyState===r.DONE&&n(r.responseText,r.status)}var n=void 0,r=new XMLHttpRequest;return r.addEventListener("readystatechange",t),r.open("GET",e),r.send(),{then:function(e){return n=e}}},t.exports=n["default"]},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[2]);