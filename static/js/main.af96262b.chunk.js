(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{19:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var o,i,r=t(0),c=t.n(r),a=t(8),s=t.n(a),l=(t(19),t(13)),u=t(27),d=t(14),f=t(9),h=t(2),p=t(3),j=t(1),v=p.a.span(o||(o=Object(h.a)(["\n  color: #ff3769;\n  cursor: pointer;\n  font-size: 1.25rem;\n  font-weight: bold;\n"])));function w(e){var n=e.children;return Object(j.jsx)(v,{className:"visualizer",children:n})}var b,g=p.a.nav(i||(i=Object(h.a)(["\n  width: 90%;\n  height: 71px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 1rem auto;\n"]))),m=function(){return Object(j.jsx)(g,{children:Object(j.jsx)(w,{children:"pinkcape"})})},y=p.a.footer(b||(b=Object(h.a)(["\n  width: 100%;\n  height: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),x=function(){return Object(j.jsx)(y,{children:Object(j.jsx)("a",{href:"https://youtu.be/oTs6oQx1WJY",children:Object(j.jsx)("span",{children:"music \ud83c\udfb6 Agnes Obel - Under Giant Trees"})})})},O=function(){var e=Object(f.useMediaQuery)({query:"(min-device-width: 1224px)"}),n=window.AudioContext||window.webkitAudioContext,t=Object(r.useState)({player:new Audio("Audio.mp3"),audio:new Audio("Audio.mp3"),context:new n,fftSize:256,strength:e?65:80,frequencyIndex:10}),o=Object(l.a)(t,1)[0],i=o.player,c=o.audio,a=o.context,s=o.fftSize,h=o.strength,p=o.frequencyIndex;Object(r.useEffect)((function(){var e=a.createAnalyser();e.fftSize=s,a.createMediaElementSource(c).connect(e);var n=void 0,t=function t(){n=requestAnimationFrame(t);var o=new Uint8Array(e.frequencyBinCount);e.getByteFrequencyData(o);var i=o[p]/(2*h),r="scale(".concat(i<1?1:i,")");d.a.to(".visualizer",{transform:r})};i.onplay=function(e){return t()},i.onended=function(e){n&&cancelAnimationFrame(n)}}),[c,a,s,p,i,h,n]);var v=function(){i.play().then((function(){return n?c.play():void 0})).catch(console.error)};return Object(u.a)("load",(function(){e&&v()})),Object(u.a)("touchstart",(function(){return v()})),Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(m,{}),Object(j.jsx)("main",{style:{width:"100%",minHeight:"100vh"},children:Object(j.jsxs)("div",{style:{textAlign:"center"},children:[Object(j.jsx)("p",{style:{margin:"9rem auto 1rem",width:"80%"},children:"Hey \ud83d\udc4b, i'm pinkcape full-stack web developer."}),!n&&Object(j.jsx)("span",{children:"currently your browser doesn't support AudioContext"})]})}),Object(j.jsx)(x,{})]})},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,28)).then((function(n){var t=n.getCLS,o=n.getFID,i=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),o(e),i(e),r(e),c(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");k?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):A(n,e)}))}}(),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.af96262b.chunk.js.map