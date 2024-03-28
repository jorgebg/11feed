/* Dark mode - https://www.ditdot.hr/en/dark-mode-website-tutorial */

let darkModeState = false;

// MediaQueryList object
const useDark = window.matchMedia("(prefers-color-scheme: dark)");
const colorSchemeEvent = new Event("trigger-color-scheme");

// Toggles the "dark-mode" class
function toggleDarkMode(state) {
  document.documentElement.classList.toggle("dark-mode", state);
  darkModeState = state;
}

// Sets localStorage state
function setDarkModeLocalStorage(state) {
  localStorage.setItem("dark-mode", state);
}

// Initial setting
toggleDarkMode(localStorage.getItem("dark-mode") == "true");

// Listen for changes in the OS settings.
// Note: the arrow function shorthand works only in modern browsers,
// for older browsers define the function using the function keyword.
useDark.addListener((evt) => toggleDarkMode(evt.matches));



// Toggles the "dark-mode" class on click and sets localStorage state
window.addEventListener('load', () => {
  const colorSchemeButton = document.querySelector(".toggle-color-scheme");
  colorSchemeButton.addEventListener("click", () => {
    darkModeState = !darkModeState;

    toggleDarkMode(darkModeState);
    setDarkModeLocalStorage(darkModeState);
    document.documentElement.dispatchEvent(colorSchemeEvent);
  });
});

/* https://getquick.link/ */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(e.quicklink={})}(this,function(e){function n(e){return new Promise(function(n,r,t){(t=new XMLHttpRequest).open("GET",e,t.withCredentials=!0),t.onload=function(){200===t.status?n():r()},t.send()})}var r,t=(r=document.createElement("link")).relList&&r.relList.supports&&r.relList.supports("prefetch")?function(e){return new Promise(function(n,r,t){(t=document.createElement("link")).rel="prefetch",t.href=e,t.onload=n,t.onerror=r,document.head.appendChild(t)})}:n,o=window.requestIdleCallback||function(e){var n=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)},i=new Set,c=new Set,u=!1;function a(e){if(e){if(e.saveData)return new Error("Save-Data is enabled");if(/2g/.test(e.effectiveType))return new Error("network conditions are poor")}return!0}function s(e,r,o){var s=a(navigator.connection);return s instanceof Error?Promise.reject(new Error("Cannot prefetch, "+s.message)):(c.size>0&&!u&&console.warn("[Warning] You are using both prefetching and prerendering on the same document"),Promise.all([].concat(e).map(function(e){if(!i.has(e))return i.add(e),(r?function(e){return window.fetch?fetch(e,{credentials:"include"}):n(e)}:t)(new URL(e,location.href).toString())})))}function f(e,n){var r=a(navigator.connection);if(r instanceof Error)return Promise.reject(new Error("Cannot prerender, "+r.message));if(!HTMLScriptElement.supports("speculationrules"))return s(e),Promise.reject(new Error("This browser does not support the speculation rules API. Falling back to prefetch."));if(document.querySelector('script[type="speculationrules"]'))return Promise.reject(new Error("Speculation Rules is already defined and cannot be altered."));for(var t=0,o=[].concat(e);t<o.length;t+=1){var f=o[t];if(window.location.origin!==new URL(f,window.location.href).origin)return Promise.reject(new Error("Only same origin URLs are allowed: "+f));c.add(f)}i.size>0&&!u&&console.warn("[Warning] You are using both prefetching and prerendering on the same document");var l=function(e){var n=document.createElement("script");n.type="speculationrules",n.text='{"prerender":[{"source": "list","urls": ["'+Array.from(e).join('","')+'"]}]}';try{document.head.appendChild(n)}catch(e){return e}return!0}(c);return!0===l?Promise.resolve():Promise.reject(l)}e.listen=function(e){if(e||(e={}),window.IntersectionObserver){var n=function(e){e=e||1;var n=[],r=0;function t(){r<e&&n.length>0&&(n.shift()(),r++)}return[function(e){n.push(e)>1||t()},function(){r--,t()}]}(e.throttle||1/0),r=n[0],t=n[1],a=e.limit||1/0,l=e.origins||[location.hostname],d=e.ignores||[],h=e.delay||0,p=[],m=e.timeoutFn||o,w="function"==typeof e.hrefFn&&e.hrefFn,g=e.prerender||!1;u=e.prerenderAndPrefetch||!1;var v=new IntersectionObserver(function(n){n.forEach(function(n){if(n.isIntersecting)p.push((n=n.target).href),function(e,n){n?setTimeout(e,n):e()}(function(){-1!==p.indexOf(n.href)&&(v.unobserve(n),(u||g)&&c.size<1?f(w?w(n):n.href).catch(function(n){if(!e.onError)throw n;e.onError(n)}):i.size<a&&!g&&r(function(){s(w?w(n):n.href,e.priority).then(t).catch(function(n){t(),e.onError&&e.onError(n)})}))},h);else{var o=p.indexOf((n=n.target).href);o>-1&&p.splice(o)}})},{threshold:e.threshold||0});return m(function(){(e.el||document).querySelectorAll("a").forEach(function(e){l.length&&!l.includes(e.hostname)||function e(n,r){return Array.isArray(r)?r.some(function(r){return e(n,r)}):(r.test||r).call(r,n.href,n)}(e,d)||v.observe(e)})},{timeout:e.timeout||2e3}),function(){i.clear(),v.disconnect()}}},e.prefetch=s,e.prerender=f});
window.addEventListener('load', () => {
  quicklink.listen();
});