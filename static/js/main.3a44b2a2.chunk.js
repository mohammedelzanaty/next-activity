(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,function(e){e.exports=JSON.parse('{"games":{"label":"Play game?","emoji":"\ud83c\udfae","list":[{"name":"God of War","url":"https://psmedia.playstation.com/is/image/psmedia/god-of-war-narrative-screen-04-ps4-eu-23jan18?$MediaCarousel_Original$"},{"name":"Uno","url":"https://steamcdn-a.akamaihd.net/steam/apps/470220/header.jpg?t=1573768701"},{"name":"Puzzle","url":"https://www.printworksmarket.com/thumb/2905/1024x0/pussel_dusk_closeup.jpg"},{"name":"Connect 4","url":"https://ae01.alicdn.com/kf/HTB1B_mUX4rvK1RjSszeq6yObFXaa/Connect-4-Game-Foldable-Montessoro-Educational-Kids-Math-Toys-for-Children-Line-Up-Row-Board-Funny.jpg"},{"name":"Monopoly","url":"https://images-na.ssl-images-amazon.com/images/I/81m0JAjUbbL._AC_SX679_.jpg"}]},"food":{"label":"Never stop eating","emoji":"\ud83c\udf54","list":[{"name":"Lazania","url":"https://kfoods.com/images1/newrecipeicon/Beef-Lazania_322.jpg"},{"name":"Pizza","url":"https://www.pishi.co.ke/wp-content/uploads/2020/02/pizza_categoryheader.png"},{"name":"Burgar","url":"https://www.freshstore.pk//Content/Products/ProductImages/13960/Karizma-burgar-with-coke-&-fries1.jpg"},{"name":"Shawarma","url":"https://www.ndtv.com/cooks/images/shawarma%20new.jpg"},{"name":"Pasta white sauce","url":"https://all-recipes.us/wp-content/uploads/2019/04/White-Sauce-Pasta-Recipe.jpg"},{"name":"Pasta red sauce","url":"https://assets.myfoodandfamily.com/adaptivemedia/rendition/206197_3000x2000.jpg?id=03735121263a1d9cceac4325dc79a75212491fd8&ht=650&wd=1004&version=1&clid=pim"},{"name":"Sea food","url":"https://media-cdn.tripadvisor.com/media/photo-s/18/3a/09/6c/bonefish-seafood-platter.jpg"},{"name":"Mix Grill","url":"https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/84fdb439-8072-4b08-9697-eb3f9bbc7196.jpg"}]},"movies":{"label":"Next move?","emoji":"\ud83c\udfac","list":[{"name":"Iron Man","url":"https://upload.wikimedia.org/wikipedia/en/0/00/Iron_Man_poster.jpg"},{"name":"1917","url":"https://upload.wikimedia.org/wikipedia/en/7/7a/1917poster.jpg"}]}}')},,function(e,a,t){e.exports=t(15)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),s=t(3),i=t.n(s),r=(t(11),t(1)),c=t(4),l=t(5),m=(t(12),function(e){var a=e.value,t=e.onClick,n=Object(l.a)(e,["value","onClick"]);return o.a.createElement("div",null,o.a.createElement("button",Object.assign({onClick:t,className:"button"},n),a))});m.defaultProps={};var u=m;t(13),t(14);var p=function(){var e=Object(n.useState)({}),a=Object(r.a)(e,2),t=a[0],s=a[1],i=Object(n.useState)("games"),l=Object(r.a)(i,2),m=l[0],p=l[1],d=Object(n.useState)(null),h=Object(r.a)(d,2),g=h[0],f=h[1],w=Object(n.useState)(!1),b=Object(r.a)(w,2),j=b[0],v=b[1];return Object(n.useEffect)((function(){s(c)}),[]),Object(n.useEffect)((function(){p(m)}),[m]),o.a.createElement("div",{className:"App"},o.a.createElement("h1",{id:"title"},"Bored? \ud83d\ude44 see what you can do now"),o.a.createElement("div",{id:"categories-container"},Object.keys(t).map((function(e){return o.a.createElement("span",{onClick:function(){!function(e){p(e)}(e)},key:e,className:m===e?"tag active":"tag"},t[e].label," ",t[e].emoji)}))),o.a.createElement(u,{value:j?"Loading...":"Click Me",onClick:function(){v(!0);var e=t[m].list;f(function(e,a){for(var t,n;;)if(n=Math.floor(Math.random()*Math.floor(e.length)),JSON.stringify(e[n])!==JSON.stringify(a)){t=e[n];break}return t}(e,g))},disabled:j}),g?o.a.createElement("div",{className:"result"},o.a.createElement("div",{className:"card"},j?o.a.createElement("div",{className:"lds-hourglass"}):o.a.createElement("div",{className:"container"},o.a.createElement("h4",null,o.a.createElement("b",null,g.name))),o.a.createElement("img",{style:j?{display:"none"}:{},onLoad:function(){v(!1)},src:g.url,alt:g.name}))):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.3a44b2a2.chunk.js.map