(this["webpackJsonpcot-demo-react"]=this["webpackJsonpcot-demo-react"]||[]).push([[0],{17:function(e,t,a){e.exports=a(30)},22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(15),c=a.n(l),i=(a(22),a(6)),s=(a(23),a(3)),o=a(1),m=a(2),u=a.n(m),d=a(8);var f=function(e){var t=e.data;return n.a.createElement(s.b,{to:"/events/".concat(t.id)},n.a.createElement("div",{className:"card card-event mr-16 p-3"},n.a.createElement("div",{className:"card-event-img-wrapper"},n.a.createElement("img",{className:"card-event-hero",src:t.imgSrc,alt:t.name})),n.a.createElement("div",{className:"card-text-wrapper p-10"},n.a.createElement("p",{className:"card-event-name"},t.name),n.a.createElement("p",{className:"card-event-details mb-6 lh-24"},"".concat(t.date," \u2022 ").concat(t.location)),n.a.createElement("a",{href:"/"},t.numSellers," sellers"))))},v=[{id:123456,name:"Bob Weir and Wolf Brothers",date:"Fri, Sep 20",location:"Ventura, CA",venue:"Ventura Theater",numSellers:20,imgSrc:"https://i.imgur.com/OBiotcH.png"},{id:623962,name:"The Avett Brothers",date:"Fri, Sep 20",location:"Chicago, IL",venue:"Chicago Theater",numSellers:10,imgSrc:"https://i.imgur.com/VuVySXO.png"},{id:293897,name:"Phish",date:"Fri, Sep 20",location:"New York, NY",venue:"Madison Square Garden",numSellers:2,imgSrc:"https://i.imgur.com/jx7rOtA.jpg"},{id:289384,name:"Radiohead",date:"Fri, Sep 21",location:"London, UK",venue:"Something British",numSellers:23,imgSrc:"https://i.imgur.com/tFrXA98.jpg"},{id:124421,name:"Khruangbin",date:"Fri, Sep 21",location:"Portland, ME",venue:"State Theater",numSellers:8,imgSrc:"https://i.imgur.com/DcVb09u.jpg"}],h=[{label:"Bob Weir and Wolf Bro's- Pair of GA tickets for Friday 9-20-19",details:"AlTrevison from Ventura, CA",rating:4},{label:"4 Balcony Seats to see Bob Weir and Wolf Bros. at the Majestic Theater",details:"mschafler from Ventura, CA",rating:1},{label:"1 Ticket Bob Weir and Wolf Bros Ventura Theater Sold out!",details:"BruceNaylor from Ventura, CA",rating:4},{label:"Bob Weir and Wolf Bro's- Pair of GA tickets for Friday 9-20-19",details:"AlTrevison from Ventura, CA",rating:4}];var p=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(r.useRef)(),l=Object(r.useState)(),c=Object(i.a)(l,2),s=c[0],o=c[1],m=Object(r.useCallback)((function(){var r=40*(112-100*(a.current.scrollWidth-e.current.offsetWidth)/window.innerWidth)/100+60;t.current.style.width="".concat(r,"%")}),[]);Object(r.useEffect)((function(){return d.isMobile||(window.addEventListener("resize",m),m()),function(){return window.removeEventListener("resize",m)}}),[m]);var h=Object(r.useCallback)((function(a){var r=Math.floor(5*(a.target.scrollLeft+130)/a.target.scrollWidth),n=e.current.offsetWidth;if(d.isMobile)(a.target.scrollWidth-a.target.scrollLeft<window.innerWidth+20||a.target.scrollWidth-a.target.scrollLeft===window.innerWidth)&&(r=4),r!==s&&(o(r),t.current.style["margin-left"]="".concat(n/5*r,"px"));else{var l=(n-t.current.offsetWidth)*a.target.scrollLeft/(a.target.scrollWidth-window.innerWidth);t.current.style["margin-left"]="".concat(l,"px")}}),[s]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{ref:a,className:u()("carousel pv-16",{snap:d.isMobile}),id:"carousel-active-this-week",onScroll:h},v.map((function(e){return n.a.createElement(f,{key:e.id,data:e})}))),n.a.createElement("div",{ref:e,className:"carousel-line mh-80",id:"carousel-line-this-week"},n.a.createElement("div",{ref:t,className:u()("carousel-line-active",{mobile:d.isMobile}),id:"carousel-line-active-this-week"})))};var E=function(){return n.a.createElement(s.b,null,n.a.createElement("div",{className:"card card-full"},n.a.createElement("div",{className:"card-img-wrapper"},n.a.createElement("img",{className:"card-hero",src:"https://i.imgur.com/WTj827d.png",alt:"street team"})),n.a.createElement("div",{className:"card-text-wrapper mb-16 p-10"},n.a.createElement("p",{className:"card-event-name lh-24"},"Join Street Team"),n.a.createElement("p",{className:"card-event-details mb-16"},"You go to shows every week like it\u2019s your job, so why not make it your job? See free shows and help fans score for face."),n.a.createElement("a",{href:"/",className:"mb-6"},"Join now"))))};var b=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"home-main contained pt-30 pb-20"},n.a.createElement("div",{className:"section-home home-section-1 ph-20 mt-60"},n.a.createElement("div",{className:"section-header mb-16"},n.a.createElement("h3",null,"Happening this week"),n.a.createElement("button",{className:"secondary"},"See all"))),n.a.createElement(p,null),n.a.createElement("div",{className:"section-home home-section-2 mt-60 ph-20"},n.a.createElement("div",{className:"section-header mb-16"},n.a.createElement("h3",null,"Recent News")),n.a.createElement(E,null))))};var g=function(e){var t=e.options,a=e.textColor,l=Object(r.useRef)(),c=Object(r.useRef)(),i=Object(r.useRef)();Object(r.useEffect)((function(){var e=(l.current.offsetWidth>c.current.offsetWidth?c:l).current.offsetWidth-14;i.current.style.width="".concat(e,"px");var t=l.current.offsetLeft-20+(l.current.offsetWidth-e)/2;i.current.style["margin-left"]="".concat(t,"px")}),[]);var o=function(e){l.current.classList.remove("active"),c.current.classList.remove("active"),e.target.classList.add("active");var t=(e.target.offsetWidth-i.current.offsetWidth)/2,a=e.target.offsetLeft-20+t;i.current.style["margin-left"]="".concat(a,"px")};return n.a.createElement("div",{className:"mb-16"},n.a.createElement(s.b,{to:t[0].path,ref:l,onClick:o,className:"nav-with-slider-link active lh-32",style:{color:a}},t[0].label),n.a.createElement(s.b,{to:t[1].path,ref:c,onClick:o,className:"nav-with-slider-link lh-32",style:{color:a}},t[1].label),n.a.createElement("div",{ref:i,className:"nav-with-slider-line"}))};var w=function(e){var t=e.fill;return n.a.createElement("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z",fill:t?"#FFE606":"",stroke:"#FFE606"}))};var N=function(e){var t=e.offer;return n.a.createElement("div",{className:"card card-offer p-12 mb-16"},n.a.createElement("p",{className:"label mb-12"},t.label),n.a.createElement("div",{className:"flex-row"},n.a.createElement("div",{className:"profile-circle mr-12"}),n.a.createElement("div",{className:"flex-column"},n.a.createElement("p",{className:"sub-label"},t.details),n.a.createElement("div",{className:"flex-row"},n.a.createElement(w,{fill:!0}),n.a.createElement(w,{fill:!0}),n.a.createElement(w,{fill:!0}),n.a.createElement(w,{fill:!0}),n.a.createElement(w,null)))))};var k=function(e){var t=e.setThisEvent,a=Object(o.h)().eventId,l=Object(o.i)(),c=l.path,i=l.url;return Object(r.useEffect)((function(){t(v.find((function(e){return e.id==a})))}),[a,t]),n.a.createElement("div",null,n.a.createElement("div",{className:"ph-20"},n.a.createElement(g,{options:[{label:"Available Tickets",path:"".concat(i,"/available")},{label:"Sell My Tickets",path:"".concat(i,"/sell")}],textColor:"#888888"}),n.a.createElement(o.d,null,n.a.createElement(o.b,{path:"".concat(c,"/available")},h.map((function(e){return n.a.createElement(N,{offer:e})}))),n.a.createElement(o.b,{path:"".concat(c,"/sell")},n.a.createElement("h3",null,"Sell content goes here")),n.a.createElement(o.a,{to:"".concat(i,"/available")}))))};var y=function(e){var t=e.event,a=e.shrink;return n.a.createElement("div",{className:u()("event-text-wrapper hero-sizing",{shrink:a})},n.a.createElement("div",{className:"hero-text-wrapper contained ph-20 mb-16"},n.a.createElement("p",{className:"event-text-wrapper-name"},t.name),n.a.createElement("p",{className:"event-text-wrapper-details"},"".concat(t.date," \u2022 ").concat(t.venue)),n.a.createElement("p",{className:"event-text-wrapper-details"},t.location)))};var j=function(e){var t=e.hideDetails;return n.a.createElement("div",{className:u()("hero-text-wrapper ph-20",{"mt-75":!t,"mt-28":t})},n.a.createElement("div",{className:"contained"},n.a.createElement(s.b,{to:"/",className:u()("header",{sm:t})},n.a.createElement("h1",null,"Cash",n.a.createElement("span",null,"or"),"Trade")),!t&&n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"No scalpers. No Brokers.",n.a.createElement("br",null),"Just real people sharing our love for music."),n.a.createElement("a",{href:"/",className:"how-it-works mt-12"},"How it works"))))};var S=function(){var e=Object(r.useRef)(),t=Object(o.g)(),a=Object(r.useState)(),l=Object(i.a)(a,2),c=l[0],s=l[1];Object(r.useEffect)((function(){"/"===t.pathname&&s()}),[t]),Object(r.useEffect)((function(){e.current.style.backgroundImage="url(".concat(c?c.imgSrc:"http://i.imgur.com/Nnp4KbT.png",")")}),[c]);var m=Object(r.useMemo)((function(){return t.pathname.includes("events")}),[t]);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{ref:e,className:u()("hero-sizing hero-image",{shrink:m})},n.a.createElement("div",{className:"hero-wrapper"})),c&&n.a.createElement(y,{event:c,shrink:m}),n.a.createElement(j,{hideDetails:m}),!m&&n.a.createElement("div",{className:"home-search-wrapper contained ph-20"},n.a.createElement(g,{options:[{label:"Find Tickets"},{label:"Sell My Tickets"}],textColor:"#fff"}),n.a.createElement("div",{className:"home-search-input-wrapper"},n.a.createElement("input",{type:"text",placeholder:"What are you looking for?",className:"home-search-input lh-32"}),n.a.createElement("button",null,"Search"))),n.a.createElement("div",{className:"home-routes-wrapper"},n.a.createElement(o.d,null,n.a.createElement(o.b,{path:"/events/:eventId"},n.a.createElement(k,{setThisEvent:s})),n.a.createElement(o.b,{path:"/"},n.a.createElement(b,null)))))};var O=function(e){var t=e.menuActive,a=e.setMenuActive;return n.a.createElement("div",{className:u()("menu-icon",{x:t}),id:"menu-icon",onClick:function(){a(!t)}},n.a.createElement("div",{className:"menu-line menu-line-1"}),n.a.createElement("div",{className:"menu-line menu-line-2"}),n.a.createElement("div",{className:"menu-line menu-line-3"}))};var W=function(e){var t=e.menuActive,a=e.setMenuActive,l=Object(r.useRef)(),c=Object(r.useRef)(),s=Object(r.useState)(!1),o=Object(i.a)(s,2),m=o[0],d=o[1];return Object(r.useEffect)((function(){t&&!m?(c.current.style.display="block",l.current.style.display="block",document.body.style.overflowY="hidden",setTimeout((function(){return d(!0)}),20)):(d(!1),setTimeout((function(){c.current.style.display="none",l.current.style.display="none",document.body.style.overflowY="visible"}),301))}),[t]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:u()("overlay",{show:m}),id:"overlay",onClick:function(){a(!1)},ref:l}),n.a.createElement("div",{className:u()("nav-drawer",{show:m}),id:"nav-drawer",ref:c}))};var x=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];return n.a.createElement(s.a,{basename:"/cot-demo-react"},n.a.createElement(o.d,null,n.a.createElement(o.b,{path:"/"},n.a.createElement(S,null))),n.a.createElement(O,{menuActive:a,setMenuActive:l}),n.a.createElement(W,{menuActive:a,setMenuActive:l}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.075605d5.chunk.js.map