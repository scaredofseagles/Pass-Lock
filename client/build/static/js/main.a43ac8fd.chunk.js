(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{270:function(e,t){},272:function(e,t){},283:function(e,t){},285:function(e,t){},312:function(e,t){},314:function(e,t){},315:function(e,t){},320:function(e,t){},322:function(e,t){},341:function(e,t){},353:function(e,t){},356:function(e,t){},400:function(e,t,a){},401:function(e,t,a){},403:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(1),r=a.n(c),s=a(18),i=a.n(s),o=a(22),l=a.n(o),u=a(33),j=a(13),d=a(460),b=a(437),O=a(454),h=a(438),x=a(239),p=(a(259),x.a.initializeApp({apiKey:"AIzaSyDCVLfKrpYBM1wuAuhX6VV80wHa9yH-Qiw",projectId:"paock-dev",authDomain:"paock-dev.firebaseapp.com",storageBucket:"paock-dev.appspot.com",messagingSenderId:"521658432150",appId:"1:521658432150:web:ff98b4d5602234c32ea0b7",measurmentId:"G-3XN9QLT0SP"})),m=p.auth(),f=p,g=r.a.createContext();function v(){return Object(c.useContext)(g)}function w(e){var t=e.children,a=Object(c.useState)(),r=Object(j.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!0),l=Object(j.a)(o,2),u=l[0],d=l[1];Object(c.useEffect)((function(){return m.onAuthStateChanged((function(e){i(e),d(!1)}))}),[]);var b={currentUser:s,signup:function(e,t){return m.createUserWithEmailAndPassword(e,t)},login:function(e,t){return m.signInWithEmailAndPassword(e,t)},logout:function(){return m.signOut()},resetPassword:function(e){return m.sendPasswordResetEmail(e)},confirmPassword:function(e,t){var a=f.firebase_.auth.EmailAuthProvider.credential(e,t);return f.auth().currentUser.reauthenticateWithCredential(a)}};return Object(n.jsx)(g.Provider,{value:b,children:!u&&t})}var y=a(28),C=a(44);function S(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=Object(c.useState)(""),s=Object(j.a)(r,2),i=s[0],o=s[1],x=Object(c.useState)(!1),p=Object(j.a)(x,2),m=p[0],f=p[1],g=Object(y.g)(),w=v().signup;function S(){return(S=Object(u.a)(l.a.mark((function n(c){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(c.preventDefault(),t.current.value===a.current.value){n.next=3;break}return n.abrupt("return",o("Passwords do not match"));case 3:return n.prev=3,o(""),f(!0),n.next=8,w(e.current.value,t.current.value);case 8:g.push("/"),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),o("Failed to create an account");case 14:f(!1);case 15:case"end":return n.stop()}}),n,null,[[3,11]])})))).apply(this,arguments)}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d.a,{bg:"light",children:Object(n.jsxs)(d.a.Body,{children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),i&&Object(n.jsx)(b.a,{variant:"danger",children:i}),Object(n.jsxs)(O.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(n.jsxs)(O.a.Group,{id:"email",children:[Object(n.jsx)(O.a.Label,{children:"Email"}),Object(n.jsx)(O.a.Control,{type:"email",ref:e,required:!0})]}),Object(n.jsxs)(O.a.Group,{id:"password",children:[Object(n.jsx)(O.a.Label,{children:"Password"}),Object(n.jsx)(O.a.Control,{type:"password",ref:t,required:!0})]}),Object(n.jsxs)(O.a.Group,{id:"password-confirm",children:[Object(n.jsx)(O.a.Label,{children:"Confirm Password"}),Object(n.jsx)(O.a.Control,{type:"password",ref:a,required:!0})]}),Object(n.jsx)(h.a,{disabled:m,className:"w-100",type:"submit",variant:"primary",children:"Sign Up"})]})]})}),Object(n.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(n.jsx)(C.b,{to:"/login",children:"Log In"})]})]})}var k=a(445),N=a(457),A=a(455),L=a(225);function P(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],r=t[1],s=Object(y.g)(),i=v(),o=i.currentUser,d=i.logout;function O(){return(O=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),e.prev=1,e.next=4,d();case 4:s.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r("Failed to Logout");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(N.a,{bg:"dark",variant:"dark",children:[Object(n.jsx)(N.a.Brand,{href:"/",children:Object(n.jsx)(L.a,{})}),Object(n.jsxs)(A.a,{className:"mr-auto",children:[Object(n.jsx)(A.a.Link,{href:"/",children:"Home"}),Object(n.jsx)(A.a.Link,{href:"/add",children:"Add"}),Object(n.jsx)(A.a.Link,{href:"/generate",children:"Generate"})]}),Object(n.jsxs)("span",{style:{color:"whitesmoke"},children:["Welcome, ",o.email]}),Object(n.jsx)(h.a,{variant:"link",onClick:function(){return O.apply(this,arguments)},children:"Log Out"})]}),Object(n.jsx)("div",{children:a&&Object(n.jsx)(b.a,{variant:"danger",children:a})})]})}var q=a(439),R=a(224),B=a(453),G=a(110),F=a(95),E=a(265),U=function(e){return E.AES.encrypt(e,"mrpoopybutthole").toString()},D=a(226),H=a(440),I=a(459),T=a(444),W=a(229),M=a(76),V=a.n(M),z={getAll:function(){return V.a.get("/api/users")},sendAcct:function(e){return V.a.post("/api/accounts",e)},getAccts:function(e){return V.a.get("api/accounts/"+e)},editAcct:function(e,t){return V.a.put("/api/accounts/"+e,t)},removeAcct:function(e){return V.a.delete("api/accounts/"+e)},updateData:function(){},deleteData:function(e){return V.a.delete("api/users"+e)}};function J(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),r=a[0],s=a[1],i=Object(c.useState)(!1),o=Object(j.a)(i,2),d=o[0],O=o[1];function x(){return(x=Object(u.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.data),t.next=3,z.removeAcct(e.data.id);case 3:a=t.sent,console.log(a.data),s(a.data.message),a.data.success&&(O(!d),setTimeout((function(){p()}),3e3));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(){e.handleClose(),s(""),O(!1)}return Object(n.jsxs)(B.a,{show:e.open,onHide:p,children:[Object(n.jsx)(B.a.Header,{closeButton:!0,children:Object(n.jsxs)(B.a.Title,{children:["Remove ",Object(n.jsx)("i",{children:e.data.url})]})}),Object(n.jsx)(B.a.Body,{children:"Are you sure you want to delete this account?"}),r&&Object(n.jsx)(b.a,{className:"text-center ml-4 mr-4",variant:"Successfully Removed Account"===r?"success":"danger",children:r}),Object(n.jsxs)("div",{style:{margin:"0 4% 3% 3%",marginLeft:"auto"},children:[Object(n.jsx)(h.a,{disabled:d,onClick:p,variant:"outline-secondary",className:"mr-1",children:"Cancel"}),Object(n.jsx)(h.a,{disabled:d,onClick:function(){return x.apply(this,arguments)},variant:"danger",children:"Delete"})]})]})}var K=a(228);function Q(e){var t=Object(c.useState)(!1),a=Object(j.a)(t,2),r=a[0],s=a[1],i=Object(c.useState)(!1),o=Object(j.a)(i,2),d=o[0],x=o[1],p=Object(c.useState)(""),m=Object(j.a)(p,2),f=m[0],g=m[1],v=Object(c.useState)(!1),w=Object(j.a)(v,2),y=w[0],C=w[1],S=Object(c.useState)("password"),k=Object(j.a)(S,2),N=k[0],A=k[1],L=Object(c.useRef)(),P=Object(c.useRef)();function R(){return(R=Object(u.a)(l.a.mark((function t(a){var n,c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),"password"===N||""===N){t.next=5;break}return t.next=4,U(N);case 4:n=t.sent;case 5:return c={url:L.current.value,email:P.current.value,password:n||null},t.next=8,z.editAcct(e.data.id,c);case 8:r=t.sent,g(r.data.message),r.data.success&&(C(!y),setTimeout(G,3e3));case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function G(){e.handleClose(),s(!1),g(""),A("password"),C(!1)}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(_,{open:d,handleClose:function(){return x(!d)},allow:function(){s(!r),A("")}}),Object(n.jsxs)(B.a,{show:e.open,onHide:G,children:[Object(n.jsx)(B.a.Header,{closeButton:!0,children:Object(n.jsxs)(B.a.Title,{children:["Modify ",Object(n.jsx)("i",{children:e.data.url})]})}),Object(n.jsx)(B.a.Body,{style:{padding:"5%"},children:Object(n.jsxs)(O.a,{onSubmit:function(e){return R.apply(this,arguments)},children:[Object(n.jsxs)(O.a.Group,{children:[Object(n.jsx)(O.a.Label,{children:"Website: "}),Object(n.jsx)(O.a.Control,{defaultValue:e.data.url,ref:L})]}),Object(n.jsxs)(O.a.Group,{children:[Object(n.jsx)(O.a.Label,{children:"Username/Email: "}),Object(n.jsx)(O.a.Control,{defaultValue:e.data.username,ref:P})]}),Object(n.jsxs)(O.a.Group,{children:[Object(n.jsx)(O.a.Label,{children:"Password: "}),Object(n.jsxs)(q.a,{children:[Object(n.jsx)(O.a.Control,{type:r?"text":"password",value:N,readOnly:!r,onChange:function(e){return A(e.target.value)}}),Object(n.jsx)(q.a.Append,{children:Object(n.jsx)(h.a,{onClick:function(){return r?s(!r):x(!d)},variant:"outline-secondary",disabled:r,children:Object(n.jsx)(K.a,{})})})]})]}),f&&Object(n.jsx)(b.a,{variant:"Successfully Updated Account"===f?"success":"danger",className:"text-center",children:f}),Object(n.jsxs)("div",{style:{float:"right"},children:[Object(n.jsx)(h.a,{disabled:y,onClick:G,type:"button",variant:"outline-secondary",className:"mr-1",children:"Cancel"}),Object(n.jsx)(h.a,{disabled:y,type:"submit",children:"Save"})]})]})})]})]})}function X(){var e=Object(D.a)(["\n  position: absolute;\n  top: 5%;\n  right: 1.5%;\n"]);return X=function(){return e},e}var Y=W.a.div(X());function Z(e){var t=Object(c.useState)(null),a=Object(j.a)(t,2),r=a[0],s=a[1],i=Object(c.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1],d=Object(c.useState)(!1),b=Object(j.a)(d,2),O=b[0],h=b[1],x=function(){s(null)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Y,{children:Object(n.jsx)(H.a,{children:Object(n.jsx)(G.c,{}),onClick:function(e){s(e.currentTarget)}})}),Object(n.jsxs)(I.a,{id:"simple-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:x,children:[Object(n.jsx)(T.a,{onClick:function(){x(),u(!l)},children:"Edit"}),Object(n.jsx)(T.a,{onClick:function(){x(),h(!O)},children:"Remove"})]}),Object(n.jsx)(Q,{data:e.data,open:l,handleClose:function(){return u(!l)}}),Object(n.jsx)(J,{data:e.data,open:O,handleClose:function(){return h(!O)}})]})}function $(e){var t,a=Object(c.useState)(!1),r=Object(j.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(""),l=Object(j.a)(o,2),u=l[0],d=l[1],O=Object(c.useState)(!1),x=Object(j.a)(O,2),p=x[0],m=x[1],f=Object(c.useState)(!1),g=Object(j.a)(f,2),v=g[0],w=g[1],y=Object(c.useRef)(),C=Object(c.useRef)(),S=Object(c.useRef)();function k(e){try{e.current.select(),document.execCommand("copy"),d("Copied!"),w(!v)}catch(t){d("Something went wrong")}}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(_,{open:p,handleClose:function(){m(!p)},allow:function(){return i(!s)}}),Object(n.jsxs)("div",{className:"card mt-4 mb-3",style:{minWidth:"30vw"},children:[Object(n.jsxs)("div",{className:"row g-0",children:[Object(n.jsx)("div",{className:"col-md-4",children:Object(n.jsx)("img",{src:e.data.image||"https://via.placeholder.com/200",alt:"account",width:"200",height:"200"})}),Object(n.jsx)("div",{className:"col-md-3",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsx)("h5",{className:"card-title",children:"Account Name"}),Object(n.jsxs)("p",{className:"card-text",children:[Object(n.jsx)("strong",{children:"Website: "}),Object(n.jsxs)(q.a,{children:[Object(n.jsx)(R.a,{value:e.data.url,ref:y,readOnly:!0}),Object(n.jsx)(q.a.Append,{children:Object(n.jsx)(h.a,{variant:"outline-secondary",onClick:function(){return k(y)},children:Object(n.jsx)(F.a,{})})})]})]})]})}),Object(n.jsx)("div",{className:"col-md-3",children:Object(n.jsxs)("div",{className:"card-body align-items-center",children:[Object(n.jsxs)("p",{className:"card-text",children:[Object(n.jsx)("strong",{children:"Username: "}),Object(n.jsxs)(q.a,{children:[Object(n.jsx)(R.a,{value:e.data.username,ref:C,readOnly:!0}),Object(n.jsx)(q.a.Append,{children:Object(n.jsx)(h.a,{variant:"outline-secondary",onClick:function(){return k(C)},children:Object(n.jsx)(F.a,{})})})]})]}),Object(n.jsxs)("p",{className:"card-text",children:[Object(n.jsx)("strong",{children:"Password: "}),Object(n.jsxs)(q.a,{children:[Object(n.jsx)(R.a,{type:s?"text":"password",ref:S,value:(t=e.data.password,E.AES.decrypt(t,"mrpoopybutthole").toString(E.enc.Utf8)),readOnly:!0}),Object(n.jsxs)(q.a.Append,{children:[Object(n.jsxs)(h.a,{variant:"outline-secondary",onClick:function(){return s?i(!s):m(!p)},children:[" ",s?Object(n.jsx)(G.b,{}):Object(n.jsx)(G.a,{})," "]}),Object(n.jsx)(h.a,{variant:"outline-secondary",onClick:function(){return k(S)},children:Object(n.jsx)(F.a,{})})]})]})]})]})}),Object(n.jsx)(Z,{data:e.data})]}),u&&Object(n.jsx)(b.a,{show:v,className:"text-center",variant:"Copied!"===u?"success":"danger",style:{margin:"1.5% 3%"},transition:!0,dismissible:!0,onClose:function(){return w(!1)},children:u})]})]})}function _(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),r=a[0],s=a[1],i=Object(c.useState)(!1),o=Object(j.a)(i,2),d=o[0],x=o[1],p=Object(c.useRef)(),m=v(),f=m.confirmPassword,g=m.currentUser;function w(){return(w=Object(u.a)(l.a.mark((function t(a){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,f(g.email,p.current.value);case 4:s("Confirmed!"),x(!d),setTimeout((function(){e.handleClose(),s(""),x(!1),e.allow()}),2e3),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),s("Failed to Confirm Password"),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}return Object(n.jsxs)(B.a,{show:e.open,onHide:function(){e.handleClose(),s("")},children:[Object(n.jsx)(B.a.Header,{closeButton:!0,children:Object(n.jsx)(B.a.Title,{children:"Confirm Identity"})}),Object(n.jsxs)(B.a.Body,{children:[Object(n.jsxs)(O.a.Group,{children:[Object(n.jsx)(O.a.Label,{children:"Please confirm your password: "}),Object(n.jsx)(O.a.Control,{type:"password",ref:p,required:!0})]}),r&&Object(n.jsx)(b.a,{className:"text-center",variant:"Confirmed!"===r?"success":"danger",children:r}),Object(n.jsx)(h.a,{onClick:function(e){return w.apply(this,arguments)},disabled:d,className:"float-right",children:"Submit"})]})]})}function ee(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],r=t[1],s=v().currentUser;function i(){return(i=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.getAccts(s.uid);case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(P,{}),Object(n.jsxs)(k.a,{children:[Object(n.jsx)("h1",{className:"text-center mt-3",children:"Dashboard"}),a.map((function(e){return Object(n.jsx)($,{data:e})}))]})]})}function te(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useState)(""),r=Object(j.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),x=Object(j.a)(o,2),p=x[0],m=x[1],f=Object(y.g)(),g=v().login;function w(){return(w=Object(u.a)(l.a.mark((function a(n){return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),a.prev=1,i(""),m(!0),a.next=6,g(e.current.value,t.current.value);case 6:f.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),i("Failed to log in");case 12:m(!1);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d.a,{bg:"light",children:Object(n.jsxs)(d.a.Body,{children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),s&&Object(n.jsx)(b.a,{variant:"danger",children:s}),Object(n.jsxs)(O.a,{onSubmit:function(e){return w.apply(this,arguments)},children:[Object(n.jsxs)(O.a.Group,{id:"email",children:[Object(n.jsx)(O.a.Label,{children:"Email"}),Object(n.jsx)(O.a.Control,{type:"email",ref:e,required:!0})]}),Object(n.jsxs)(O.a.Group,{id:"password",children:[Object(n.jsx)(O.a.Label,{children:"Password"}),Object(n.jsx)(O.a.Control,{type:"password",ref:t,required:!0})]}),Object(n.jsx)(h.a,{disabled:p,className:"w-100",type:"submit",variant:"primary",children:"Log In"})]}),Object(n.jsx)("div",{className:"w-100 text-center mt-3",children:Object(n.jsx)(C.b,{to:"/forgot-password",children:"Forgot Password?"})})]})}),Object(n.jsxs)("div",{className:"w-100 text-center mt-2",children:["Don't have an account? ",Object(n.jsx)(C.b,{to:"/signup",children:"Sign up"})]})]})}var ae=a(75),ne=a(241);function ce(e){var t=e.component,a=Object(ne.a)(e,["component"]),c=v().currentUser;return Object(n.jsx)(y.b,Object(ae.a)(Object(ae.a)({},a),{},{render:function(e){return c?Object(n.jsx)(t,Object(ae.a)({},e)):Object(n.jsx)(y.a,{to:"/login"})}}))}function re(e){var t=Object(c.useRef)(),a=Object(c.useState)(""),r=Object(j.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),x=Object(j.a)(o,2),p=x[0],m=x[1],f=Object(c.useState)(""),g=Object(j.a)(f,2),w=g[0],y=g[1],S=v().resetPassword;function k(){return(k=Object(u.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,i(""),m(!0),e.next=6,S(t.current.value);case 6:y("Success! Check your email for further instructions"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),i("Failed to reset password");case 12:m(!1);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d.a,{bg:"light",children:Object(n.jsxs)(d.a.Body,{children:[Object(n.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),s&&Object(n.jsx)(b.a,{variant:"danger",children:s}),w&&Object(n.jsx)(b.a,{variant:"success",children:w}),Object(n.jsxs)(O.a,{onSubmit:function(e){return k.apply(this,arguments)},children:[Object(n.jsxs)(O.a.Group,{id:"email",children:[Object(n.jsx)(O.a.Label,{children:"Email"}),Object(n.jsx)(O.a.Control,{type:"email",ref:t,required:!0})]}),Object(n.jsx)(h.a,{disabled:p,className:"w-100",type:"submit",variant:"primary",children:"Reset Password"})]}),Object(n.jsx)("div",{className:"w-100 text-center mt-3",children:Object(n.jsx)(C.b,{to:"/login",children:"Log In"})})]})}),Object(n.jsxs)("div",{className:"w-100 text-center mt-2",children:["Don't have an account? ",Object(n.jsx)(C.b,{to:"/signup",children:"Sign up"})]})]})}var se=a(111),ie=a(12),oe=a(446),le=a(45),ue=a(458),je=a(447),de=a(448),be=a(449),Oe=a(443),he=a(130),xe=a(450),pe=a(236),me=a.n(pe),fe=a(237),ge=a.n(fe),ve=a(238),we=a.n(ve),ye=a(406),Ce=a(451),Se=a(452),ke=a(160),Ne=a.n(ke),Ae=a(161),Le=a.n(Ae),Pe=240,qe=Object(oe.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(Pe,"px)"),marginLeft:Pe,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:Pe,flexShrink:0},drawerPaper:{width:Pe},drawerHeader:Object(ae.a)(Object(ae.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function Re(){var e=qe(),t=Object(le.a)(),a=r.a.useState(!0),c=Object(j.a)(a,2),s=c[0],i=c[1];return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(je.a,{}),Object(n.jsx)(de.a,{position:"fixed",className:Object(ie.a)(e.appBar,Object(se.a)({},e.appBarShift,s)),children:Object(n.jsxs)(be.a,{children:[Object(n.jsx)(H.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},edge:"start",className:Object(ie.a)(e.menuButton,s&&e.hide),children:Object(n.jsx)(me.a,{})}),Object(n.jsx)(he.a,{variant:"h6",noWrap:!0,children:"Persistent drawer"})]})}),Object(n.jsxs)(ue.a,{className:e.drawer,variant:"persistent",anchor:"left",open:s,classes:{paper:e.drawerPaper},children:[Object(n.jsx)("div",{className:e.drawerHeader,children:Object(n.jsx)(H.a,{onClick:function(){i(!1)},children:"ltr"===t.direction?Object(n.jsx)(ge.a,{}):Object(n.jsx)(we.a,{})})}),Object(n.jsx)(xe.a,{}),Object(n.jsx)(Oe.a,{children:["View All","Add Account","Edit Account","Remove Account"].map((function(e,t){return Object(n.jsxs)(ye.a,{button:!0,children:[Object(n.jsx)(Ce.a,{children:t%2===0?Object(n.jsx)(Ne.a,{}):Object(n.jsx)(Le.a,{})}),Object(n.jsx)(Se.a,{primary:e})]},e)}))}),Object(n.jsx)(xe.a,{}),Object(n.jsx)(Oe.a,{children:["Favourites","Profile"].map((function(e,t){return Object(n.jsxs)(ye.a,{button:!0,children:[Object(n.jsx)(Ce.a,{children:t%2===0?Object(n.jsx)(Ne.a,{}):Object(n.jsx)(Le.a,{})}),Object(n.jsx)(Se.a,{primary:e})]},e)}))})]}),Object(n.jsxs)("main",{className:Object(ie.a)(e.content,Object(se.a)({},e.contentShift,s)),children:[Object(n.jsx)("div",{className:e.drawerHeader}),Object(n.jsx)(he.a,{paragraph:!0,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac."}),Object(n.jsx)(he.a,{paragraph:!0,children:"Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a."})]})]})}function Be(){var e=Object(c.useRef)(),t=Object(c.useRef)(),a=Object(c.useRef)(),r=Object(c.useState)(""),s=Object(j.a)(r,2),i=s[0],o=s[1],h=v().currentUser;function x(){return(x=Object(u.a)(l.a.mark((function n(c){var r,s,i;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),n.prev=1,n.next=4,U(a.current.value);case 4:if(!(r=n.sent)){n.next=11;break}return s={website:e.current.value,username:t.current.value,password:r,user:h.uid},n.next=9,z.sendAcct(s);case 9:(i=n.sent).data.success?window.location.replace("/"):o(i.data.message);case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(1),o("Something went wrong. Please Try Again");case 16:case"end":return n.stop()}}),n,null,[[1,13]])})))).apply(this,arguments)}return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(P,{}),Object(n.jsx)(k.a,{children:Object(n.jsx)(d.a,{className:"mt-5",children:Object(n.jsxs)(d.a.Body,{children:[Object(n.jsx)("h2",{className:"mb-4",children:"Add Account"}),Object(n.jsxs)(O.a,{onSubmit:function(e){return x.apply(this,arguments)},children:[Object(n.jsxs)(O.a.Group,{id:"website",children:[Object(n.jsx)(O.a.Label,{children:"Website "}),Object(n.jsx)(O.a.Control,{type:"link",ref:e,placeholder:"Paste the URL here",required:!0})]}),Object(n.jsxs)(O.a.Group,{id:"username",children:[Object(n.jsx)(O.a.Label,{children:"Username or Email"}),Object(n.jsx)(O.a.Control,{ref:t,required:!0})]}),Object(n.jsxs)(O.a.Group,{id:"password",children:[Object(n.jsx)(O.a.Label,{children:"Password "}),Object(n.jsx)(O.a.Control,{type:"password",ref:a,required:!0})]}),i&&Object(n.jsx)(b.a,{variant:"danger",children:i}),Object(n.jsx)("button",{className:"rounded-lg bg-warmblue-500 hover:bg-warmblue-700 py-2.5 px-4 text-white float-right",children:"Add"})]})]})})})]})}var Ge=a(240),Fe=a(461);function Ee(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(10),i=Object(j.a)(s,2),o=i[0],l=i[1],u=Object(c.useState)(""),h=Object(j.a)(u,2),x=h[0],p=h[1],m=Object(c.useState)(!1),f=Object(j.a)(m,2),g=f[0],v=f[1],w=Object(c.useState)(!0),y=Object(j.a)(w,2),C=y[0],S=y[1],N=Object(c.useState)(!1),A=Object(j.a)(N,2),L=A[0],q=A[1],R=Object(c.useState)(!1),B=Object(j.a)(R,2),G=B[0],F=B[1],E=Object(c.useState)(""),U=Object(j.a)(E,2),D=U[0],H=U[1];function I(){var e=o,t="";g&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"),C&&(t+="abcdefghijklmnopqrstuvwxyz"),G&&(t+="1234567890"),L&&(t+="!@#$%?&*"),console.log("finalCharSet=",t);for(var a="",n=0;n<e;n++){a+=t[Math.floor(Math.random()*t.length+1)]}console.log({finalPass:a}),p(a),function(e){console.log({password:x}),e.length>1?T():H("Something went wrong")}(a)}var T=function(){return r(!0)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(P,{}),Object(n.jsxs)(k.a,{children:[D&&Object(n.jsx)(b.a,{variant:"danger",children:D}),Object(n.jsx)(Ue,{handleShow:T,handleClose:function(){return r(!1)},show:a,password:x}),Object(n.jsxs)(d.a,{style:{paddingLeft:"40px",paddingRight:"40px",marginTop:"5%"},children:[Object(n.jsx)("h2",{className:"text-center mt-3",children:"Generate A Password"}),Object(n.jsxs)(O.a,{onSubmit:function(e){e.preventDefault(),I()},children:[Object(n.jsxs)(O.a.Group,{children:[Object(n.jsx)("h4",{children:"Select all that apply"}),Object(n.jsx)(O.a.Check,{value:g,onChange:function(e){return v(e.target.checked)},inline:!0,label:"Uppercase Letters",type:"checkbox",name:"uppercase"}),Object(n.jsx)(O.a.Check,{value:C,onChange:function(e){return S(e.target.checked)},inline:!0,label:"Lowercase Letters",type:"checkbox",name:"lowercase",defaultChecked:!0}),Object(n.jsx)(O.a.Check,{value:L,onChange:function(e){return q(e.target.checked)},inline:!0,label:"Numbers",type:"checkbox",name:"numbers"}),Object(n.jsx)(O.a.Check,{value:G,onChange:function(e){return F(e.target.checked)},inline:!0,label:"Symbols",type:"checkbox",name:"symbols"})]}),Object(n.jsxs)(O.a.Group,{controlId:"formBasicRange",children:[Object(n.jsx)(O.a.Label,{children:"Password Length"}),Object(n.jsx)(Fe.a,{value:o,onChange:function(e,t){l(t)},valueLabelDisplay:"on",max:40,"aria-labelledby":"continuous-slider"})]}),Object(n.jsx)("button",{className:"rounded-lg bg-warmblue-500 hover:bg-warmblue-700 py-2.5 px-4 text-white mb-3 float-right",children:"Generate"})]})]})]})]})}function Ue(e){var t=Object(c.useRef)(null),a=Object(c.useState)(""),r=Object(j.a)(a,2),s=r[0],i=r[1];return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(B.a,{show:e.show,onHide:e.handleClose,children:[Object(n.jsx)(B.a.Header,{closeButton:!0,children:Object(n.jsx)(B.a.Title,{children:"Generated Password"})}),Object(n.jsxs)(B.a.Body,{children:[Object(n.jsx)(Ge.a,{children:"Your password is: "}),Object(n.jsxs)(q.a,{className:"mb-3",children:[Object(n.jsx)(R.a,{value:e.password,ref:t,className:"text-center"}),Object(n.jsx)(q.a.Append,{children:Object(n.jsx)(h.a,{variant:"outline-secondary",onClick:function(e){try{t.current.select(),document.execCommand("copy"),e.target.focus(),i("Copied!")}catch(a){i("Something went wrong")}},children:Object(n.jsx)(F.a,{})})})]})]}),s&&Object(n.jsx)(b.a,{className:"text-center",variant:"Copied!"===s?"success":"danger",children:s}),Object(n.jsx)(B.a.Footer,{children:Object(n.jsx)(h.a,{variant:"secondary",onClick:function(){e.handleClose(),i("")},children:"Close"})})]})})}var De=function(){return Object(n.jsx)(C.a,{children:Object(n.jsx)(w,{children:Object(n.jsxs)(y.d,{children:[Object(n.jsx)(ce,{exact:!0,path:"/",component:ee}),Object(n.jsx)(ce,{exact:!0,path:"/newpage",component:Re}),Object(n.jsx)(ce,{exact:!0,path:"/add",component:Be}),Object(n.jsx)(ce,{exact:!0,path:"/generate",component:Ee}),Object(n.jsx)(k.a,{fluid:!0,className:"d-flex align-items-center justify-content-center css-selector",style:{minHeight:"100vh"},children:Object(n.jsxs)("div",{className:"w-100",style:{maxWidth:"400px"},children:[Object(n.jsx)(y.b,{path:"/signup",component:S}),Object(n.jsx)(y.b,{path:"/login",component:te}),Object(n.jsx)(y.b,{path:"/forgot-password",component:re})]})})]})})})};a(400),a(401),a(402);i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(De,{})}),document.getElementById("root"))}},[[403,1,2]]]);
//# sourceMappingURL=main.a43ac8fd.chunk.js.map