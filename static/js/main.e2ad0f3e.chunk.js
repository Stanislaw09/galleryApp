(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=(a(97),a(12)),l=a(13),s=a(16),u=a(143),m=a(146),d=a(148),p=a(149),g=a(150),f=a(151),h=a(152),b=a(163),E=a(43),O=Object(u.a)({title:{margin:"0",paddingLeft:"12px",lineHeight:"2.6em"},imgContainer:{maxHeight:"500px",overflow:"hidden"},media:{width:"100%"},description:{maxHeight:"220px",whiteSpace:"pre-line",textOverflow:"ellipsis",overflow:"hidden"},actions:{display:"block"},more:{float:"right"},deleteLabel:{textAlign:"center",color:"rgb(194, 80, 131)",width:"160px",margin:"10px"}}),j=function(e){var t=Object(l.f)(),a=O(),c=Object(n.useState)(null),i=Object(o.a)(c,2),s=i[0],u=i[1],j=e.data,v=Boolean(s);return r.a.createElement(m.a,{item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(d.a,null,r.a.createElement("h3",{className:a.title},j.title),r.a.createElement("div",{className:a.imgContainer},r.a.createElement("img",{src:j.images[0],alt:"nothing",className:a.media})),r.a.createElement(p.a,null,r.a.createElement(g.a,{color:"textSecondary",className:a.description},j.description)),r.a.createElement(f.a,{className:a.actions},r.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:function(){return t.push("/fullcard",{data:j})},className:a.more},"More"),r.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:function(e){return u(e.currentTarget)}},"Delete")),r.a.createElement(b.a,{open:v,anchorEl:s,onClose:function(){return u(null)},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"left"}},r.a.createElement(g.a,{className:a.deleteLabel},"Are You sure?"),r.a.createElement(h.a,{onClick:function(){return u(null)}},"Canel"),r.a.createElement(h.a,{onClick:function(){return E.firestore().collection("images").doc(j.id).delete()},style:{float:"right"}},"Delete"))))},v=a(153),w=Object(u.a)((function(e){return{container:Object(s.a)({padding:"20px 0",gridAutoFlow:"column",width:"100%",margin:"0"},e.breakpoints.up("md"),{padding:"20px"})}})),x=function(e){var t=w(),a=Object(n.useState)([]),c=Object(o.a)(a,2),i=c[0],l=c[1];return Object(n.useEffect)((function(){e.images&&l(e.images)}),[e]),r.a.createElement(r.a.Fragment,null,i.length?r.a.createElement(m.a,{container:!0,spacing:4,className:t.container},i.map((function(t){return t.title.toLowerCase().includes(e.filter.toLowerCase())&&r.a.createElement(j,{key:t.id,data:t})}))):r.a.createElement(v.a,{color:"secondary",style:{marginLeft:"50%"}}))},y=a(50),k=a.n(y),C=a(67),N=a(160),S=a(162),B=a(154),I=a(80),L=a.n(I),W=a(43),A=Object(u.a)((function(e){return{container:Object(s.a)({padding:"20px",width:"50%"},e.breakpoints.down("sm"),{width:"90%"}),icon:{margin:"20px 0"},new:{float:"right",marginTop:"14px"},input:{display:"block",minWidth:"300px",margin:"20px 0"},buttons:{padding:"16px 0 8px"},close:{float:"right"}}})),D=function(e){var t=A(),a=Object(n.useState)(!1),c=Object(o.a)(a,2),i=c[0],l=c[1],s=Object(n.useState)(""),u=Object(o.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)(""),g=Object(o.a)(p,2),f=g[0],b=g[1],E=Object(n.useState)([]),O=Object(o.a)(E,2),j=O[0],w=O[1],x=Object(n.useState)(!0),y=Object(o.a)(x,2),I=y[0],D=y[1];Object(n.useEffect)((function(){if(j.length)for(var e=function(e){var t=j[e];W.storage().ref(t.name).put(t).on("state_changed",(function(t){100===t.bytesTransferred/t.totalBytes*100&&e===j.length-1&&D(!1)}))},t=0;t<j.length;t++)e(t)}),[j]);var F=function(){var e=Object(C.a)(k.a.mark((function e(){var t,a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=[],a=0;a<j.length;a++)n=j[a],W.storage().ref(n.name).getDownloadURL().then((function(e){t.push(e),t.length===j.length&&M(t)})).catch((function(e){return console.log("shit happens")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(C.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W.firestore().collection("images").add({title:f,images:t,description:m,timestamp:W.firestore.FieldValue.serverTimestamp()});case 2:l(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:t.container},r.a.createElement(L.a,{className:t.icon}),r.a.createElement(N.a,{label:"Find your flashback",color:"secondary",onChange:e.setFilter}),r.a.createElement(h.a,{variant:"outlined",color:"secondary",onClick:function(){return l(!0)},className:t.new},"New"),i&&r.a.createElement(S.a,{open:i,fullWidth:!0,maxWidth:"md",className:t.dialog},r.a.createElement(B.a,null,r.a.createElement(N.a,{label:"title",fullWidth:!0,color:"secondary",onChange:function(e){return b(e.target.value)},className:t.input}),r.a.createElement(N.a,{multiline:!0,fullWidth:!0,variant:"outlined",color:"secondary",rows:8,label:"description",onChange:function(e){return d(e.target.value)},className:t.input}),r.a.createElement("input",{type:"file",multiple:!0,onChange:function(e){D(!0),e.target.files.length?w(e.target.files):w([])}}),r.a.createElement("div",{className:t.buttons},r.a.createElement(h.a,{onClick:function(){return l(!1)},className:t.close},"Close"),I&&j.length?r.a.createElement(v.a,{className:t.save,color:"secondary"}):r.a.createElement(h.a,{onClick:F,color:"secondary",className:t.save,disabled:I},"Save")))))},F=a(61),M=a(82),H=a(155),T=a(156),z=a(157),V=a(83),R=a(165),Y=a(158),K=a(164),U=a(159),J=a(81),_=a.n(J),P=a(43),X=Object(u.a)((function(e){var t,a;return{"@global":{".MuiInputBase-root.Mui-disabled":{color:"#000"},".MuiInputBase-root":{color:"#666"},".MuiInputBase-root.Mui-focused":{backgroundColor:"#eee"}},header:{backgroundColor:"rgb(54, 102, 110)",position:"fixed"},toolbar:{display:"inline",alignItems:"center",minHeight:"30px"},close:{width:"50px",margin:"4px"},menu:{float:"right",margin:"10px"},imageContainer:Object(s.a)({height:"80vh",width:"50vw",margin:"60px 1% 1%"},e.breakpoints.down("md"),{width:"98%"}),image:{height:"auto",width:"auto",maxWidth:"100%",maxHeight:"100%",borderRadius:"2px"},fullDescription:(t={top:"0",width:"100%",display:"inline"},Object(s.a)(t,e.breakpoints.up("md"),{position:"absolute",display:"inline",width:"44%",left:"52%",margin:"60px 2%"}),Object(s.a)(t,e.breakpoints.down("md"),{display:"contents"}),Object(s.a)(t,"margin","60px 0"),Object(s.a)(t,"whiteSpace","pre-line"),t),title:(a={width:"100%",height:"30px",padding:"20px"},Object(s.a)(a,e.breakpoints.up("md"),{marginTop:"24px"}),Object(s.a)(a,"border","none"),Object(s.a)(a,"fontSize","26px"),Object(s.a)(a,"margin","60px 0 0 0"),Object(s.a)(a,"fontWeight","600"),Object(s.a)(a,"fontStyle","italic"),a),description:{lineHeight:"1.8em",fontSize:"18px",width:"100%",margin:"0",padding:"20px 20px 80px 20px"},navButtons:{width:"60px",display:"inline",margin:"0 10px"},buttonsContainer:Object(s.a)({padding:"16px 3%",width:"44%"},e.breakpoints.down("md"),{width:"90%"}),progress:{width:"calc(100% - 168px)",display:"inline-block"},buttonsContainer2:Object(s.a)({padding:"8px 1.5%",width:"44%",margin:"0 24px"},e.breakpoints.down("md"),{width:"98%",margin:"0"}),imagesInput:{width:"220px",float:"right",padding:"6px 0"}}})),$=function(e){var t=Object(l.g)(),a=Object(l.f)(),c=X(),i=t.state.data,s=Object(n.useState)(i.description),u=Object(o.a)(s,2),m=u[0],d=u[1],p=Object(n.useState)(i.title),f=Object(o.a)(p,2),b=f[0],E=f[1],O=Object(n.useState)(null),j=Object(o.a)(O,2),w=j[0],x=j[1],y=Object(n.useState)(!0),k=Object(o.a)(y,2),C=k[0],N=k[1],S=Object(n.useState)(0),B=Object(o.a)(S,2),I=B[0],L=B[1],W=Object(n.useState)(i.images),A=Object(o.a)(W,2),D=A[0],J=A[1],$=Object(n.useState)([]),q=Object(o.a)($,2),G=q[0],Q=q[1],Z=Object(n.useState)(!0),ee=Object(o.a)(Z,2),te=ee[0],ae=ee[1],ne=function(){return x(null)};Object(n.useEffect)((function(){if(G.length)for(var e=function(e){var t=G[e];P.storage().ref(t.name).put(t).on("state_changed",(function(t){100===t.bytesTransferred/t.totalBytes*100&&e===G.length-1&&ae(!1)}))},t=0;t<G.length;t++)e(t)}),[G]);Object(n.useEffect)((function(){if(C){var e=Object(F.a)({},a.location.state);e.data.images=D,e.data.title=b,e.data.description=m,a.replace(Object(F.a)(Object(F.a)({},a.location),{},{state:e}))}}),[D,m,b,C]);var re=function(){(C||window.confirm("Are you sure? You haven't saved changes"))&&a.push("/")};return r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{className:c.header},r.a.createElement(T.a,{className:c.toolbar},r.a.createElement(z.a,{className:c.close,onClick:re},r.a.createElement(_.a,null)),r.a.createElement(h.a,{onClick:function(e){return x(e.currentTarget)},color:C?"default":"secondary",className:c.menu},"Menu"),r.a.createElement(V.a,{anchorEl:w,keepMounted:!0,open:Boolean(w),onClose:ne},r.a.createElement(R.a,{onClick:function(){N(!1),ne()}},"Edit"),r.a.createElement(R.a,{onClick:function(){P.firestore().collection("images").doc(i.id).update({title:b,description:m,images:D}),ne(),N(!0),ne()}},"Save"),r.a.createElement(R.a,{onClick:re},"Exit")))),r.a.createElement("div",{className:c.imageContainer},D.map((function(e,t){return r.a.createElement("img",{src:e,style:{display:t===I?"inline":"none"},alt:"nothing",className:c.image})}))),r.a.createElement("div",{className:c.buttonsContainer},r.a.createElement(h.a,{color:"secondary",className:c.navButtons,onClick:function(){L(0===I?D.length-1:function(e){return e-1})}},"Prev"),r.a.createElement(Y.a,{color:"secondary",variant:"determinate",value:(I+1)/D.length*100,className:c.progress}),r.a.createElement(h.a,{color:"secondary",onClick:function(){I===D.length-1?L(0):L((function(e){return e+1}))},className:c.navButtons,style:{float:"right"}},"Next")),r.a.createElement("div",{className:c.buttonsContainer2,style:{display:C?"none":"block"}},r.a.createElement(h.a,{onClick:function(){var e=D.filter((function(e){return e!==D[I]}));J(e),L((function(e){return 0===e?D.length-1:e-1}))}},"Delete"),te&&G.length?r.a.createElement(v.a,{color:"secondary",className:c.circle}):r.a.createElement(h.a,{onClick:function(){for(var e=[],t=0;t<G.length;t++){var a=G[t];P.storage().ref(a.name).getDownloadURL().then((function(t){if(e.push(t),e.length===G.length){var a=[].concat(Object(M.a)(D),e);J(a)}})).catch((function(e){return console.log("shit happens")}))}Q([]),ae(!0)},disabled:te,color:"secondary"},"Add"),r.a.createElement("input",{type:"file",multiple:!0,onChange:function(e){ae(!0),e.target.files.length?Q(e.target.files):Q([])},className:c.imagesInput})),r.a.createElement(g.a,{className:c.fullDescription},r.a.createElement(K.a,{spellcheck:"false",defaultValue:b,disabled:C,onChange:function(e){return E(e.target.value)},className:c.title}),r.a.createElement(U.a,null),r.a.createElement(K.a,{multiline:!0,spellcheck:"false",disabled:C,defaultValue:m,className:c.description,focused:c.focused,onChange:function(e){return d(e.target.value)}})))},q=a(43);var G=function(){var e=Object(n.useState)(void 0),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),u=s[0],m=s[1];return Object(n.useEffect)((function(){q.firestore().collection("images").onSnapshot((function(e){var t=e.docs.map((function(e){var t=e.data();return t.id=e.id,t}));c(t)}))}),[]),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/"},r.a.createElement(D,{images:a,setFilter:function(e){return m(e.target.value)}}),r.a.createElement(x,{images:a,filter:u})),r.a.createElement(l.a,{exact:!0,path:"/fullcard"},r.a.createElement($,{setFilterValue:function(e){return m(e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=a(45),Z=a(43);a(114),Z.initializeApp({apiKey:"AIzaSyAC5w4Kd0c0HVXguR0OBY-5VBcjYoNNKB0",authDomain:"gallery-app-97f74.firebaseapp.com",databaseURL:"https://gallery-app-97f74.firebaseio.com",projectId:"gallery-app-97f74",storageBucket:"gallery-app-97f74.appspot.com",messagingSenderId:"660501488949",appId:"1:660501488949:web:36d10cf25022f4e489187c"}),i.a.render(r.a.createElement(Q.a,{basename:window.location.pathname||""},r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){e.exports=a(115)},97:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.e2ad0f3e.chunk.js.map