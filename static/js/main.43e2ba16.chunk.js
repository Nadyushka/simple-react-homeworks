(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,t,a){e.exports={message:"Message_message__36Qpr",avatarImg:"Message_avatarImg__1KzWv",textInfoAndTime:"Message_textInfoAndTime__1ikwU",textInfo:"Message_textInfo__sPJf_",textInfoTitle:"Message_textInfoTitle__3Okb5",textInfoMessage:"Message_textInfoMessage__3a6jg",textInfoTime:"Message_textInfoTime__4nBED"}},,,,,function(e,t,a){e.exports={App:"App_App__dA-VC"}},function(e,t,a){e.exports={someClass:"Greeting_someClass__2Itps",error:"Greeting_error__1YtUn"}},,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),c=a.n(l),o=(a(15),a(7)),i=a.n(o),s=a(2),m=a.n(s);var u=function(e){return r.a.createElement("div",{className:m.a.message},r.a.createElement("img",{src:e.avatar,alt:"",className:m.a.avatarImg}),r.a.createElement("div",{className:m.a.textInfoAndTime},r.a.createElement("div",{className:m.a.textInfo},r.a.createElement("div",{className:m.a.textInfoTitle},e.name),r.a.createElement("div",{className:m.a.textInfoMessage},e.message)),r.a.createElement("div",{className:m.a.textInfoTime},e.time)))},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",d="Some Name",E="some text",v="22:00";var _=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(u,{avatar:f,name:d,message:E,time:v}),r.a.createElement("hr",null),r.a.createElement("hr",null))},h=a(1);var g=function(e){return r.a.createElement("div",null,"// show some text",r.a.createElement("button",{onClick:function(){return e.deleteAffairCallback(e.affair._id)}},"X"))};var p=function(e){var t=e.data.map((function(t){return r.a.createElement(g,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){return e.setFilter("all")}},"All"),r.a.createElement("button",{onClick:function(){return e.setFilter("high")}},"High"),r.a.createElement("button",{onClick:function(){return e.setFilter("middle")}},"Middle"),r.a.createElement("button",{onClick:function(){return e.setFilter("low")}},"Low"))},b=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(n.useState)(b),t=Object(h.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(h.a)(c,2),i=o[0],s=o[1],m=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(p,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},w=a(9),x=a(8),I=a.n(x),C=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=I.a.error;return r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:o}),r.a.createElement("span",null,l),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",null,c))},A=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(h.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(""),m=Object(h.a)(s,2),u=m[0],f=(m[1],t.length);return r.a.createElement(C,{name:o,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){alert("Hello  ".concat(o,"!")),a(o),i("")},error:u,totalUsers:f})},O=a(18);var j=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(A,{users:a,addUserCallback:function(e){l([{_id:Object(O.a)(),name:e}].concat(Object(w.a)(a)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var N=function(){return r.a.createElement("div",{className:i.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(_,null),r.a.createElement(k,null),r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.43e2ba16.chunk.js.map