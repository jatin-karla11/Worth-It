(this.webpackJsonpworthit=this.webpackJsonpworthit||[]).push([[0],{34:function(e,a,t){e.exports=t(61)},39:function(e,a,t){},40:function(e,a){},57:function(e,a,t){e.exports=t.p+"static/media/worth.0efb5662.jpg"},61:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(30),r=t.n(c),m=(t(39),t(40),t(41),t(42),t(9)),o=t.n(m),s=t(16),i=t(31),u=t.n(i).a.initializeApp({apiKey:"AIzaSyB1eeVv8nHJpuiBIbDz25f8ofomiMXeYUM",authDomain:"worth-55c58.firebaseapp.com",databaseURL:"https://worth-55c58.firebaseio.com",projectId:"worth-55c58",storageBucket:"worth-55c58.appspot.com",messagingSenderId:"240111441828",appId:"1:240111441828:web:f1b69bfd5941b45a311331",measurementId:"G-XWSY8MLX77"}),d=function(e){var a=e.email,t=e.setEmail,n=e.password,c=e.setPassword,r=e.handleLogin,m=e.handleSignup,o=e.hasAccount,s=e.setHasAccount,i=e.emailError,u=e.passwordError;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{type:"button",id:"yo",className:"btn-get-started","data-toggle":"modal","data-target":"#exampleModal"},"Sign in"),l.a.createElement("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},l.a.createElement("div",{class:"modal-dialog"},l.a.createElement("div",{class:"modal-content"},l.a.createElement("div",{class:"modal-header"},l.a.createElement("h5",{class:"modal-title",id:"exampleModalLabel"},"Modal title"),l.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{class:"modal-body"},l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"email",autoFocus:!0,required:!0,value:a,onChange:function(e){return t(e.target.value)}}),l.a.createElement("p",{className:"errorMsg"},i),l.a.createElement("label",null,"Passsword"),l.a.createElement("input",{type:"password",required:!0,value:n,onChange:function(e){return c(e.target.value)}}),l.a.createElement("p",{className:"errorMsg"},u),l.a.createElement("div",{className:"btnContainer"},o?l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:r},"Sign in"),l.a.createElement("p",null,"Don't have an account? ",l.a.createElement("span",{onClick:function(){return s(!o)}},"Sign up")," ")):l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:m},"Sign up"),l.a.createElement("p",null,"Have an account? ",l.a.createElement("span",{onClick:function(){return s(!o)}},"Sign in"))))),l.a.createElement("div",{class:"modal-footer "},l.a.createElement("button",null,"Sign in with Google"))))))},E=function(e){var a=e.handleLogout;return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:a},"Logout"))},p=t(8),b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-md-4 col-10 mx-auto"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:e.imgsrc,className:"card-img-top",alt:"..."}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title font-weight-bold"},e.title),l.a.createElement("p",{className:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card's content."),l.a.createElement(p.b,{to:"",className:"btn btn-primary"},"Go somewhere")))))},g=[{imgsrc:o.a,title:"web development"},{imgsrc:o.a,title:"app development"},{imgsrc:o.a,title:"yohi"},{imgsrc:o.a,title:"yohi"},{imgsrc:o.a,title:"yohi"},{imgsrc:o.a,title:"yohi"}],v=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"my-5"},l.a.createElement("h1",{className:"text-center"},"Our Services")),l.a.createElement("div",{className:"container-fluid mb-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-md-11 mx-auto"},l.a.createElement("div",{className:"row gy-4"},g.map((function(e,a){return l.a.createElement(b,{key:a,imgsrc:e.imgsrc,title:e.title})})))))))},h=function(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),c=t[0],r=t[1],m=Object(n.useState)(""),o=Object(s.a)(m,2),i=o[0],p=o[1],b=Object(n.useState)(""),g=Object(s.a)(b,2),v=g[0],h=g[1],f=Object(n.useState)(""),N=Object(s.a)(f,2),w=N[0],x=N[1],y=Object(n.useState)(""),S=Object(s.a)(y,2),C=S[0],j=S[1],k=Object(n.useState)(!1),O=Object(s.a)(k,2),I=O[0],F=O[1],M=function(){x(""),j("")},A=function(){u.auth().onAuthStateChanged((function(e){e?(p(""),h(""),r(e)):r("")}))};return Object(n.useEffect)((function(){A()}),[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{id:"header",className:"d-flex align-items-center"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mx-auto"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"},l.a.createElement("h1",null,e.name," ",l.a.createElement("strong",{className:"brand-name"},"Worth-It"),"!"),l.a.createElement("h2",{className:"my-3"},"Team of 1"),l.a.createElement("div",{className:"mt-3"},c?l.a.createElement(E,{handleLogout:function(){u.auth().signOut()}}):l.a.createElement(d,{email:i,setEmail:p,password:v,setPassword:h,handleLogin:function(){M(),u.auth().signInWithEmailAndPassword(i,v).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":x(e.message);break;case"auth/wrong-password":j(e.message)}}))},handleSignup:function(){M(),u.auth().createUserWithEmailAndPassword(i,v).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":x(e.message);break;case"auth/weak-password":j(e.message)}}))},hasAccount:I,setHasAccount:F,emailError:w,passwordError:C}))),l.a.createElement("div",{className:"col-lg-6 order-1 order-lg-2 header-img "},l.a.createElement("img",{src:e.imgsrc,className:"img-fluid animated",alt:"home img"}))))))))},f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,{name:"Grow your business with",imgsrc:o.a,visit:"/",btname:"Sign-In"}))},N=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(h,{name:"Welcome to About page!",imgsrc:o.a,visit:"/contact",btname:"Contact Now"}))},w=t(22),x=t(25),y=function(){var e=Object(n.useState)({fullname:"",phone:"",email:"",mssg:""}),a=Object(s.a)(e,2),t=a[0],c=a[1],r=function(e){var a=e.target,t=a.name,n=a.value;c((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(w.a)({},t,n))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"my-5"},l.a.createElement("h1",{className:"text-center"},"Contact Us")),l.a.createElement("div",{className:"container contact_div"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-10 mx-auto"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),alert("".concat(t.fullname))}},l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInput"},"Full Name"),l.a.createElement("input",{required:!0,type:"text",name:"fullname",value:t.fullname,onChange:r,class:"form-control",id:"exampleInput","aria-describedby":"emailHelp"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInput"},"Contact Number"),l.a.createElement("input",{required:!0,type:"number",maxLength:"10",name:"phone",value:t.phone,onChange:r,class:"form-control",id:"exampleInput","aria-describedby":"emailHelp"})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{required:!0,type:"email",name:"email",value:t.email,onChange:r,class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"}),l.a.createElement("small",{id:"emailHelp",class:"form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"exampleInput"},"Message"),l.a.createElement("textarea",{rows:"3",name:"mssg",value:t.mssg,onChange:r,class:"form-control",id:"exampleInput","aria-describedby":"emailHelp"})),l.a.createElement("button",{type:"submit",class:"btn btn-outline-info"},"Submit"))))))},S=(t(57),t(32)),C=t.n(S),j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container-fluid nav_bg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 mx-auto"},l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},l.a.createElement(p.b,{className:"navbar-brand",to:"/"},"We are here for you! ",l.a.createElement(C.a,{className:"mood",fontSize:"large"})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(p.b,{exact:!0,activeClassName:"menu_active",className:"nav-link",to:"/"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.b,{exact:!0,activeClassName:"menu_active",className:"nav-link",to:"/service"},"Services")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.b,{exact:!0,activeClassName:"menu_active",className:"nav-link",to:"/about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.b,{exact:!0,activeClassName:"menu_active",className:"nav-link",to:"/contact"},"Contact")),l.a.createElement("li",{className:"nav-item"}))))))))},k=t(4),O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("footer",{className:"w-100 bg-info text-center"},"footer has to be made!"))},I=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,null),l.a.createElement(k.d,null,l.a.createElement(k.b,{exact:!0,path:"/",component:f}),l.a.createElement(k.b,{exact:!0,path:"/about",component:N}),l.a.createElement(k.b,{exact:!0,path:"/service",component:v}),l.a.createElement(k.b,{exact:!0,path:"/contact",component:y}),l.a.createElement(k.b,{exact:!0,path:"/signin",component:E}),l.a.createElement(k.a,{to:"/"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null,l.a.createElement(I,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t.p+"static/media/worth.0efb5662.jpg"}},[[34,1,2]]]);
//# sourceMappingURL=main.5d42439d.chunk.js.map