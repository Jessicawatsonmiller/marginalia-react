(this["webpackJsonpmarginalia-react"]=this["webpackJsonpmarginalia-react"]||[]).push([[0],{114:function(e,a,t){},117:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),i=t(43),r=t.n(i),c=(t(49),t(24)),l=t(22),s=(t(114),t(23));t(115);s.initializeApp({apiKey:"AIzaSyAg4ELim3IfNA3oYC7tbRsO6jpFvMAlf3Y",authDomain:"marginalia-94238.firebaseapp.com",databaseURL:"https://marginalia-94238.firebaseio.com",projectId:"marginalia-94238",storageBucket:"marginalia-94238.appspot.com",messagingSenderId:"802074060077",appId:"1:802074060077:web:19b8a214fcfbf0b679dfa4",measurementId:"G-NTY3WV57T7"});var u=s.database();var p=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],i=a[1],r=Object(n.useState)("loading"),s=Object(c.a)(r,2),p=s[0],m=s[1];return u.ref("/Books/Guru Papers").on("value",(function(e){var a=e.val().name;p!=a&&m(a)})),console.log(p),o.a.createElement("div",{style:{width:"100%",height:"100%"}},o.a.createElement("div",{style:{position:"fixed",left:0,top:0,backgroundColor:"hotpink",color:"black",width:"300px",height:"500px",zIndex:-1}},"Data is ",p),o.a.createElement(l.ReactReader,{url:"https://jessicawatsonmiller.github.io/marginalia-react/files/gurupapers.epub",title:"Guru Papers",location:t||null,locationChanged:function(e){console.log("navigate to",e),i(e)},showToc:!0,tocChanged:function(e){return console.log(e)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,a,t){e.exports=t(117)},49:function(e,a,t){}},[[44,1,2]]]);
//# sourceMappingURL=main.6015a463.chunk.js.map