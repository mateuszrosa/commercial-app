(this["webpackJsonpcommercial-app"]=this["webpackJsonpcommercial-app"]||[]).push([[0],{190:function(e,t,n){},219:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(40),s=n.n(c),i=n(18),o=n(11),u=n(16),l=n.n(u),j=n(17),d=n(20),b=n(128),p=new(n.n(b).a)("pk_test_282453842352eb169c3d206e7a40d06fe695eb4fecae6",!0),O=(n(190),n(59)),m=n(129),h=n(1),x=function(e){var t=e.open,n=e.setOpen;return Object(h.jsxs)("header",{children:[Object(h.jsx)(j.c,{to:"/",children:"biker shop"}),Object(h.jsx)(O.Icon,{icon:m.a,width:"75px",onClick:function(){return n(!t)}})]})},f=n(98),v=n.n(f),g=n(132),y=function(){return Object(h.jsxs)("div",{className:v.a.main,children:[Object(h.jsxs)("div",{className:v.a.text,children:[Object(h.jsx)("h1",{children:"Welcome!"}),Object(h.jsx)("p",{children:"We are one of the best bike shop online"})]}),Object(h.jsx)(O.Icon,{icon:g.a,width:"300px",color:"#108A7D"})]})},C=n(15),k=n(302),w=n(304),S=n(305),_=n(87),N=n(286),E=Object(N.a)((function(){return{media:{minWidth:250,height:210,backgroundSize:"contain"},cardContent:{display:"flex",justifyContent:"space-between"},cardAction:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),T=function(e){var t=e.product,n=E();return Object(h.jsxs)(k.a,{children:[Object(h.jsx)(w.a,{style:{backgroundSize:"contain"},image:t.media.source,title:t.name,className:n.media}),Object(h.jsxs)(S.a,{className:n.cardContent,children:[Object(h.jsx)(_.a,{variant:"h5",children:t.name}),Object(h.jsx)(_.a,{variant:"h6",children:t.line_total.formatted_with_symbol})]})]})},I=n(22),R="LOGIN_REQUEST",D="LOGIN_SUCCESS",L="LOGIN_FAILURE",U="EDIT_USER_REQUEST",B="EDIT_USER_SUCCESS",P="EDIT_USER_FAILURE",A="EDIT_USER_PASWORD_REQUEST",z="EDIT_USER_PASWORD_SUCCESS",F="EDIT_USER_PASWORD_FAILURE",W="LOGOUT",M="REGISTER_REQUEST",G="REGISTER_SUCCESS",Q="REGISTER_FAILURE",q="ADD_ORDER_REQUEST",Y="ADD_ORDER_SUCCESS",H=n(201),Z=function(e,t){return function(n){return n({type:q}),H.put("https://commercial-app1.herokuapp.com/user/order/?",{data:e,login:t}).then((function(e){n({type:Y,payload:e})})).catch((function(e){return console.log(e)}))}},J=n(309),V=n(310),K=n(297),X=n(299),$=n(278),ee=n(288),te=n(311),ne=n(26),ae=n(290),re=function(e){var t=e.name,n=e.label,a=e.type,r=e.value,c=void 0===r?"":r,s=Object(ne.d)().control;return Object(h.jsx)(K.a,{item:!0,xs:12,sm:6,children:Object(h.jsx)(ne.a,{as:ae.a,type:a,name:t,control:s,label:n,fullWidth:!0,defaultValue:c,required:!0})})},ce=function(){var e=Object(I.b)(),t=Object(I.c)((function(e){return{user:e.user,error:e.error}})),n=t.user,r=t.error,c=Object(a.useState)("1"),s=Object(o.a)(c,2),i=s[0],u=s[1],l=Object(a.useState)(!1),j=Object(o.a)(l,2),b=j[0],p=j[1],O=Object(a.useState)(!0),m=Object(o.a)(O,2),x=m[0],f=m[1],v=function(t){e(function(e,t){return function(n){var a=new URLSearchParams(Object(C.a)(Object(C.a)({},e),{},{login:t}));return n({type:U}),H.put("https://commercial-app1.herokuapp.com/user/update/?".concat(a)).then((function(e){return n({type:B,payload:e})})).catch((function(e){var t=e.response;return n({type:P,error:t.data})}))}}(t,n.login)),p(!0)},g=function(t){f(!0),t.newPassword===t.repeatPassword?e(function(e,t){return function(n){return n({type:A}),H.put("https://commercial-app1.herokuapp.com/user/password/?",Object(C.a)(Object(C.a)({},e),{},{login:t})).then((function(e){return console.log(e),n({type:z,payload:e})})).catch((function(e){var t=e.response;return n({type:F,error:t.data})}))}}(t,n.login)):f(!1)},y=Object(ne.c)();return b?Object(h.jsx)(d.a,{to:"/"}):Object(h.jsx)(J.a,{sx:{width:"100%",typography:"body1",marginTop:"90px"},children:Object(h.jsxs)($.a,{value:i,children:[Object(h.jsx)(J.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(h.jsxs)(ee.a,{onChange:function(e,t){u(t)},"aria-label":"lab API tabs example",children:[Object(h.jsx)(V.a,{label:"Change address",value:"1"}),Object(h.jsx)(V.a,{label:"Change password",value:"2"}),Object(h.jsx)(V.a,{label:"Orders",value:"3"})]})}),Object(h.jsxs)(te.a,{value:"1",children:[Object(h.jsx)(_.a,{variant:"h6",gutterBottom:!0,children:"Change your address:"}),Object(h.jsx)(ne.b,Object(C.a)(Object(C.a)({},y),{},{children:Object(h.jsxs)("form",{onSubmit:y.handleSubmit((function(e){return v(e)})),children:[Object(h.jsxs)(K.a,{container:!0,spacing:3,children:[Object(h.jsx)(re,{name:"firstName",label:"First name",value:n.firstName}),Object(h.jsx)(re,{name:"lastName",label:"Last name",value:n.lastName}),Object(h.jsx)(re,{name:"address1",label:"Address",value:n.address1}),Object(h.jsx)(re,{name:"email",label:"Email",value:n.email}),Object(h.jsx)(re,{name:"City",label:"City",value:n.city}),Object(h.jsx)(re,{name:"zip",label:"ZIP/Postal Code",value:n.zip})]}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:Object(h.jsx)(X.a,{type:"submit",variant:"contained",color:"primary",children:"Save"})})]})}))]}),Object(h.jsxs)(te.a,{value:"2",children:[Object(h.jsx)(_.a,{variant:"h6",gutterBottom:!0,children:"Change your password"}),!x&&Object(h.jsx)(_.a,{color:"error",variant:"h7",children:"Passwords are not the same"}),!x&&r?Object(h.jsx)("br",{}):null,r&&Object(h.jsx)(_.a,{color:"error",variant:"h7",children:r.message}),Object(h.jsx)(ne.b,Object(C.a)(Object(C.a)({},y),{},{children:Object(h.jsxs)("form",{onSubmit:y.handleSubmit((function(e){return g(e)})),style:{marginTop:"15px"},children:[Object(h.jsxs)(K.a,{container:!0,spacing:2,flexDirection:"column",children:[Object(h.jsx)(re,{type:"password",name:"oldPassword",label:"Old password"}),Object(h.jsx)(re,{type:"password",name:"newPassword",label:"New password"}),Object(h.jsx)(re,{type:"password",name:"repeatPassword",label:"Repeat new password"})]}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{style:{display:"flex",justifyContent:"space-between"},children:Object(h.jsx)(X.a,{type:"submit",variant:"contained",color:"primary",children:"Save"})})]})}))]}),Object(h.jsxs)(te.a,{value:"3",children:[Object(h.jsx)(_.a,{variant:"h6",gutterBottom:!0,children:"Your orders:"}),Object(h.jsx)(K.a,{container:!0,justifyContent:"center",spacing:4,children:n.orders.map((function(e){return e.line_items.map((function(e){return Object(h.jsx)(K.a,{container:!0,justifyContent:"center",item:!0,xs:12,sm:6,md:3,children:Object(h.jsx)(T,{product:e},e.id)},e.id)}))}))})]})]})})},se=n(65),ie=n.n(se),oe=function(){var e=Object(I.b)(),t=Object(ne.c)(),n=Object(I.c)((function(e){return{userId:e.user.userId}})).userId,a=function(t){e(function(e){return function(t){var n=function(e){var t=e.getDate()<10?"0".concat(e.getDate()):e.getDate(),n=e.getMonth()+1<10?"0".concat(e.getMonth()+1):e.getMonth()+1,a=e.getFullYear();return"".concat(t,".").concat(n,".").concat(a)}(new Date);return t({type:M}),H.post("https://commercial-app1.herokuapp.com/user/register/?",Object(C.a)(Object(C.a)({},e),{},{date:n})).then((function(e){t({type:G,payload:e})})).catch((function(e){var n=e.response;t({type:Q,error:n.data})}))}}(t))};return n?Object(h.jsx)(d.a,{to:"/"}):Object(h.jsx)("div",{className:ie.a.userpage,children:Object(h.jsxs)("div",{className:ie.a.container,children:[Object(h.jsx)(_.a,{variant:"h3",gutterBottom:!0,children:"Register"}),Object(h.jsx)(ne.b,Object(C.a)(Object(C.a)({},t),{},{children:Object(h.jsx)("form",{onSubmit:t.handleSubmit((function(e){return a(e)})),children:Object(h.jsxs)(K.a,{container:!0,justifyContent:"space-around",spacing:3,children:[Object(h.jsx)(re,{name:"login",label:"Login"}),Object(h.jsx)(re,{name:"password",label:"Password",type:"password"}),Object(h.jsx)(re,{name:"firstName",label:"First name"}),Object(h.jsx)(re,{name:"lastName",label:"Last name"}),Object(h.jsx)(re,{name:"address1",label:"Address"}),Object(h.jsx)(re,{name:"email",label:"Email"}),Object(h.jsx)(re,{name:"city",label:"City"}),Object(h.jsx)(re,{name:"zip",label:"ZIP/Postal Code"}),Object(h.jsx)(re,{name:"country",label:"Country"}),Object(h.jsx)(re,{name:"subdivision",label:"Region"}),Object(h.jsx)(X.a,{type:"submit",variant:"contained",color:"primary",children:"Register"}),Object(h.jsx)(X.a,{type:"submit",variant:"contained",color:"secondary",children:Object(h.jsx)(j.b,{to:"login",children:"I have my account"})})]})})}))]})})},ue=function(){var e=Object(I.b)(),t=Object(ne.c)(),n=Object(I.c)((function(e){var t=e.user,n=e.error;return{userId:t.userId,error:n}})),a=n.userId,r=n.error,c=function(t){e(function(e){var t=e.login,n=e.password;return function(e){var a=new URLSearchParams({login:t,password:n});return e({type:R}),H.get("https://commercial-app1.herokuapp.com/user/login/?".concat(a)).then((function(t){return e({type:D,payload:t})})).catch((function(t){var n=t.response;return e({type:L,error:n.data})}))}}(t))};return a?Object(h.jsx)(d.a,{to:"/"}):Object(h.jsx)("div",{className:ie.a.userpage,children:Object(h.jsxs)("div",{className:ie.a.container,children:[Object(h.jsx)(_.a,{variant:"h3",gutterBottom:!0,children:"Log In"}),Object(h.jsx)(_.a,{variant:"h4",color:"error.dark",gutterBottom:!0,children:r&&"".concat(r.message)}),Object(h.jsx)(ne.b,Object(C.a)(Object(C.a)({},t),{},{children:Object(h.jsx)("form",{onSubmit:t.handleSubmit((function(e){return c(e)})),children:Object(h.jsxs)(K.a,{container:!0,justifyContent:"space-around",spacing:2,children:[Object(h.jsx)(re,{name:"login",label:"Login"}),Object(h.jsx)(re,{name:"password",label:"Password",type:"password"}),Object(h.jsx)(X.a,{type:"submit",variant:"contained",color:"primary",children:"Log In"}),Object(h.jsx)(X.a,{type:"submit",variant:"contained",color:"secondary",children:Object(h.jsx)(j.b,{to:"register",children:"I want my account"})})]})})}))]})})},le=n(47),je=n.n(le),de=n(135),be=function(e){var t=e.open,n=e.setClose,a=Object(I.b)(),r=Object(I.c)((function(e){return{userId:e.user.userId}})).userId;return Object(h.jsxs)("div",{className:"".concat(je.a.menu," ").concat(t&&je.a.show),children:[Object(h.jsx)("div",{className:je.a.menuLi,children:Object(h.jsx)(O.Icon,{onClick:function(){return n(!t)},icon:de.a,width:"90px"})}),Object(h.jsx)("div",{className:je.a.menuLi,children:Object(h.jsx)(j.c,{onClick:function(){return n(!t)},to:"bikes",children:"bikes"})}),Object(h.jsx)("div",{className:je.a.menuLi,children:Object(h.jsx)(j.c,{onClick:function(){return n(!t)},to:"helmets",children:"helmets"})}),Object(h.jsx)("div",{className:je.a.menuLi,children:Object(h.jsx)(j.c,{onClick:function(){return n(!t)},to:"cart",children:"cart"})}),r&&Object(h.jsx)("div",{className:je.a.menuLi,children:Object(h.jsx)(j.c,{onClick:function(){return n(!t)},to:"account",children:"account"})}),Object(h.jsx)("div",{className:je.a.menuLi,children:r?Object(h.jsx)(j.c,{onClick:function(){return a((function(e){return e({type:W})}))},to:"/",children:"log Out"}):Object(h.jsx)(j.c,{onClick:function(){return n(!t)},to:"login",children:"log in"})})]})},pe=n(14),Oe=n(313),me=n(291),he=n(280),xe=n(281),fe=n(282),ve=n(312),ge=n(279),ye=n(140),Ce=n(301),ke=Object(N.a)((function(e){return{root:{width:"80%",height:"400px",marginTop:"50px"},media:{height:"60%",backgroundSize:"contain"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),we=Object(ye.a)(),Se=function(e){var t=e.bike,n=e.onAddToCart,a=ke();return Object(h.jsx)(Ce.a,{theme:we,children:Object(h.jsxs)(k.a,{className:a.root,children:[Object(h.jsx)(w.a,{style:{backgroundSize:"contain"},className:a.media,image:t.media.source,title:t.name}),Object(h.jsxs)(S.a,{children:[Object(h.jsxs)("div",{className:a.cardContent,children:[Object(h.jsx)(_.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.name}),Object(h.jsxs)(_.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["$",t.price.formatted]})]}),Object(h.jsx)(_.a,{dangerouslySetInnerHTML:{__html:t.description},variant:"body2",color:"textSecondary",component:"p"})]}),Object(h.jsx)(ve.a,{disableSpacing:!0,className:a.cardActions,children:Object(h.jsx)(Oe.a,{"aria-label":"Add to Cart",onClick:function(){return n(t.id,1)},children:Object(h.jsx)(ge.a,{})})})]})})},_e=Object(N.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3),marginTop:"90px"},root:{flexGrow:1},buttons:{height:"30px",position:"relative",display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",paddingRight:"20px"},sortBtns:{display:"flex",flexDirection:"column"},button:{marginLeft:"10px"},sort:{fontSize:"2rem",padding:0}}})),Ne=function(e){var t=e.products,n=e.setProducts,a=e.onAddToCart,r=e.totalItems,c=_e(),s=function(e){var a=Object(pe.a)(t);a=a.sort(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"asc";return function(t,n){return"undefined"===typeof t.price.formatted?1:"asc"===e?Number(t.price.formatted.replace(/,/g,""))-Number(n.price.formatted.replace(/,/g,"")):Number(n.price.formatted.replace(/,/g,""))-Number(t.price.formatted.replace(/,/g,""))}}(e)),n(a)};return Object(h.jsxs)("main",{className:c.content,children:[Object(h.jsx)("div",{className:c.toolbar,children:Object(h.jsxs)("div",{className:c.buttons,children:[Object(h.jsxs)("div",{className:c.sortBtns,children:[Object(h.jsx)(Oe.a,{style:{padding:0},className:c.sort,onClick:function(){return s("asc")},children:Object(h.jsx)(me.a,{color:"secondary",children:Object(h.jsx)(he.a,{})})}),Object(h.jsx)(Oe.a,{style:{padding:0},className:c.sort,onClick:function(){return s("dsc")},children:Object(h.jsx)(me.a,{color:"secondary",children:Object(h.jsx)(xe.a,{})})})]}),Object(h.jsx)(Oe.a,{className:c.button,component:j.b,to:"/cart","aria-label":"Show cart items",color:"inherit",children:Object(h.jsx)(me.a,{badgeContent:r,color:"secondary",children:Object(h.jsx)(fe.a,{})})})]})}),Object(h.jsx)(K.a,{container:!0,justifyContent:"center",spacing:4,children:t.map((function(e){return Object(h.jsx)(K.a,{container:!0,justifyContent:"center",item:!0,xs:12,sm:6,md:4,lg:3,children:Object(h.jsx)(Se,{bike:e,onAddToCart:a})},e.id)}))})]})},Ee=n(314),Te=Object(N.a)((function(){return{media:{height:210,backgroundSize:"contain"},cardContent:{display:"flex",justifyContent:"space-between"},cardAction:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),Ie=function(e){var t=e.item,n=e.handleUpdateCart,a=e.handleRemoveFromCart,r=Te();return Object(h.jsxs)(k.a,{children:[Object(h.jsx)(w.a,{style:{backgroundSize:"contain"},image:t.media.source,alt:t.name,className:r.media}),Object(h.jsxs)(S.a,{className:r.cardContent,children:[Object(h.jsx)(_.a,{variant:"h4",children:t.name}),Object(h.jsx)(_.a,{variant:"h5",children:t.line_total.formatted_with_symbol})]}),Object(h.jsxs)(ve.a,{className:r.cardActions,children:[Object(h.jsxs)("div",{className:r.buttons,children:[Object(h.jsx)(X.a,{onClick:function(){return n(t.id,t.quantity-1)},type:"button",size:"small",children:"-"}),Object(h.jsx)(_.a,{children:t.quantity}),Object(h.jsx)(X.a,{onClick:function(){return n(t.id,t.quantity+1)},type:"button",size:"small",children:"+"})]}),Object(h.jsx)(X.a,{onClick:function(){return a(t.id)},variant:"contained",type:"button",color:"secondary",children:"Remove"})]})]})},Re=n(3),De=Object(N.a)((function(e){var t;return{root:{marginTop:"90px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},toolbar:e.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(t={minWidth:"150px"},Object(Re.a)(t,e.breakpoints.down("xs"),{marginBottom:"5px"}),Object(Re.a)(t,e.breakpoints.up("xs"),{marginRight:"20px"}),t),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),Le=function(e){var t=e.cart,n=e.handleUpdateToCartQty,a=e.handleRemoveFromCart,r=e.handleEmptyCart,c=De(),s=function(){return Object(h.jsxs)(_.a,{variant:"subtitle1",children:["You have no items in your shopping cart, start adding some!",Object(h.jsx)(j.b,{to:"/products",className:c.link,children:" Start adding some"})]})},i=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(K.a,{container:!0,spacing:2,children:[t.line_items.map((function(e){return Object(h.jsx)(K.a,{item:!0,xs:12,sm:4,children:Object(h.jsx)(Ie,{item:e,handleUpdateCart:n,handleRemoveFromCart:a})},e.id)})),Object(h.jsxs)("div",{className:c.cardDetails,children:[Object(h.jsxs)(_.a,{variant:"h4",children:["Subtotal: ",t.subtotal.formatted_with_symbol]}),Object(h.jsxs)("div",{children:[Object(h.jsx)(X.a,{className:c.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:r,children:"Empty Cart"}),Object(h.jsx)(X.a,{component:j.b,to:"/checkout",className:c.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]})})};return t.line_items?Object(h.jsxs)(Ee.a,{className:c.root,children:[Object(h.jsx)("div",{className:c.toolbar}),Object(h.jsx)(_.a,{className:c.title,variant:"h3",gutterBottom:!0,children:"Your Shopping Cart"}),t.line_items.length?Object(h.jsx)(i,{}):Object(h.jsx)(s,{})]}):"Loading..."},Ue=n(284),Be=n(315),Pe=n(285),Ae=n(303),ze=n(295),Fe=n(316),We=n(292),Me=Object(N.a)((function(e){var t;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(Re.a)({marginTop:"15%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(Re.a)(t,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(Re.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),Ge=n(294),Qe=n(287),qe=n(300),Ye=function(e){var t=e.checkoutToken,n=void 0===t?"":t,r=e.next,c=Object(I.c)((function(e){return{user:e.user}})).user,s=Object(a.useState)([]),u=Object(o.a)(s,2),d=u[0],b=u[1],O=Object(a.useState)(""),m=Object(o.a)(O,2),x=m[0],f=m[1],v=Object(a.useState)([]),g=Object(o.a)(v,2),y=g[0],k=g[1],w=Object(a.useState)(""),S=Object(o.a)(w,2),N=S[0],E=S[1],T=Object(a.useState)([]),R=Object(o.a)(T,2),D=R[0],L=R[1],U=Object(a.useState)(""),B=Object(o.a)(U,2),P=B[0],A=B[1],z=Object(ne.c)(),F=Object.entries(d).map((function(e){var t=Object(o.a)(e,2);return{id:t[0],label:t[1]}})),W=Object.entries(y).map((function(e){var t=Object(o.a)(e,2);return{id:t[0],label:t[1]}})),M=D.map((function(e){return{id:e.id,label:"".concat(e.description," - (").concat(e.price.formatted_with_symbol,")")}})),G=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.services.localeListShippingCountries(t);case 2:n=e.sent,a=n.countries,b(a),f(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.services.localeListSubdivisions(t);case 2:n=e.sent,a=n.subdivisions,k(a),E(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(i.a)(l.a.mark((function e(t,n){var a,r,c=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]?c[2]:null,e.next=3,p.checkout.getShippingOptions(t,{country:n,region:a});case 3:r=e.sent,L(r),A(r[0].id);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){G(n.id)}),[n.id]),Object(a.useEffect)((function(){x&&Q(x)}),[x]),Object(a.useEffect)((function(){N&&q(n.id,x,N)}),[n.id,x,N]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_.a,{variant:"h6",gutterBottom:!0}),Object(h.jsx)(ne.b,Object(C.a)(Object(C.a)({},z),{},{children:Object(h.jsxs)("form",{onSubmit:z.handleSubmit((function(e){return r(Object(C.a)(Object(C.a)({},e),{},{shippingCountry:x,shippingSubdivision:N,shippingOption:P}))})),children:[Object(h.jsxs)(K.a,{container:!0,spacing:3,children:[Object(h.jsx)(re,{name:"firstName",label:"First name",value:c.firstName}),Object(h.jsx)(re,{name:"lastName",label:"Last name",value:c.lastName}),Object(h.jsx)(re,{name:"address1",label:"Address",value:c.address1}),Object(h.jsx)(re,{name:"email",label:"Email",value:c.email}),Object(h.jsx)(re,{name:"City",label:"City",value:c.city}),Object(h.jsx)(re,{name:"zip",label:"ZIP/Postal Code",value:c.zip}),Object(h.jsxs)(K.a,{item:!0,xs:12,sm:6,children:[Object(h.jsx)(Ge.a,{children:"Shipping Country"}),Object(h.jsx)(Qe.a,{value:x,fullWidth:!0,onChange:function(e){return f(e.target.value)},children:F.map((function(e){return Object(h.jsx)(qe.a,{value:e.id,children:e.label},e.id)}))})]}),Object(h.jsxs)(K.a,{item:!0,xs:12,sm:6,children:[Object(h.jsx)(Ge.a,{children:"Shipping Subdivision"}),Object(h.jsx)(Qe.a,{value:N,fullWidth:!0,onChange:function(e){return E(e.target.value)},children:W.map((function(e){return Object(h.jsx)(qe.a,{value:e.id,children:e.label},e.id)}))})]}),Object(h.jsxs)(K.a,{item:!0,xs:12,sm:6,children:[Object(h.jsx)(Ge.a,{children:"Shipping Options"}),Object(h.jsx)(Qe.a,{value:P,fullWidth:!0,onChange:function(e){return A(e.target.value)},children:M.map((function(e){return Object(h.jsx)(qe.a,{value:e.id,children:e.label},e.id)}))})]})]}),Object(h.jsx)("br",{}),Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(h.jsx)(X.a,{component:j.b,to:"/cart",variant:"outlined",children:"Back to Cart"}),Object(h.jsx)(X.a,{type:"submit",variant:"contained",color:"primary",children:"Next"})]})]})}))]})},He=n(77),Ze=n(137),Je=n(308),Ve=n(293),Ke=n(283),Xe=function(e){var t=e.checkoutToken;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(_.a,{variant:"h6",gutterBottom:!0,children:"Order summary"}),Object(h.jsxs)(Je.a,{disablePadding:!0,children:[t.live.line_items.map((function(e){return Object(h.jsxs)(Ve.a,{style:{padding:"10px 0"},children:[Object(h.jsx)(Ke.a,{primary:e.name,secondary:"Quantity ".concat(e.quantity)}),Object(h.jsx)(_.a,{variant:"body2",children:e.line_total.formatted_with_symbol})]},e.id)})),Object(h.jsxs)(Ve.a,{style:{padding:"10px 0"},children:[Object(h.jsx)(Ke.a,{primary:"Total"}),Object(h.jsx)(_.a,{variant:"subtitle1",style:{fontWeight:700},children:t.live.subtotal.formatted_with_symbol})]})]})]})},$e=Object(Ze.a)("pk_test_51J2baDG1DKaBFAOkuBV2gnqU9rgUwk7xdCifGd7bHnaqKZNZQ1VH4KyEeVWxSDTTzH6JY1hY0q0TPv7mL2diyURO003leqpTk3"),et=function(e){var t=e.checkoutToken,n=e.nextStep,a=e.backStep,r=e.shippingData,c=e.onCaptureCheckout,s=Object(I.b)(),o=Object(I.c)((function(e){return{user:e.user}})).user;console.log(o);var u=function(){var e=Object(i.a)(l.a.mark((function e(a,i,u){var j,d,b,p,O;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),u&&i){e.next=3;break}return e.abrupt("return");case 3:return j=i.getElement(He.CardElement),e.next=6,u.createPaymentMethod({type:"card",card:j});case 6:d=e.sent,b=d.error,p=d.paymentMethod,b?console.log("[error]",b):(O={line_items:t.live.line_items,customer:{firstname:r.firstName,lastname:r.lastName,email:r.email},shipping:{name:"International",street:r.address1,town_city:r.City,county_state:r.shippingSubdivision,postal_zip_code:r.zip,country:r.shippingCountry},fulfillment:{shipping_method:r.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:p.id}}},c(t.id,O),o&&s(Z(O,o.login)),n());case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Xe,{checkoutToken:t}),Object(h.jsx)(Ue.a,{}),Object(h.jsx)(_.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),Object(h.jsx)(He.Elements,{stripe:$e,children:Object(h.jsx)(He.ElementsConsumer,{children:function(e){var n=e.elements,r=e.stripe;return Object(h.jsxs)("form",{onSubmit:function(e){return u(e,n,r)},children:[Object(h.jsx)(He.CardElement,{}),Object(h.jsx)("br",{})," ",Object(h.jsx)("br",{}),Object(h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(h.jsx)(X.a,{variant:"outlined",onClick:a,children:"Back"}),Object(h.jsxs)(X.a,{type:"submit",variant:"contained",disabled:!r,color:"primary",children:["Pay ",t.live.subtotal.formatted_with_symbol]})]})]})}})})]})},tt=["Shipping address","Payment details"],nt=Object(ye.a)(),at=function(e){var t=e.cart,n=e.order,r=e.onCaptureCheckout,c=e.error,s=Object(a.useState)(0),u=Object(o.a)(s,2),b=u[0],O=u[1],m=Object(a.useState)(null),x=Object(o.a)(m,2),f=x[0],v=x[1],g=Object(a.useState)({}),y=Object(o.a)(g,2),C=y[0],k=y[1],w=Object(a.useState)(!1),S=Object(o.a)(w,2),N=S[0],E=S[1],T=Me(),I=Object(d.g)();Object(a.useEffect)((function(){if(t.id){var e=function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.checkout.generateToken(t.id,{type:"cart"});case 3:n=e.sent,v(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),I.push("/");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[t,I]);var R=function(){return O((function(e){return e+1}))},D=function(){return O((function(e){return e-1}))},L=function(e){k(e),R()},U=function(){setTimeout((function(){E(!0)}),3e3)},B=function(){return n.customer?Object(h.jsxs)(Ce.a,{theme:nt,children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)(_.a,{variant:"h5",children:["Thank you for your purachese, ",n.customer.firstname," ",n.customer.lastname]}),Object(h.jsx)(Ue.a,{className:T.divider}),Object(h.jsxs)(_.a,{variant:"subtitle2",children:["Order ref: ",n.customer_reference]})]}),Object(h.jsx)("br",{}),Object(h.jsx)(X.a,{component:j.b,to:"/",variant:"outlined",type:"button",children:"Back to home"})]}):N?Object(h.jsxs)(Ce.a,{theme:nt,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)(_.a,{variant:"h5",children:"Thank you for your purachese"}),Object(h.jsx)(Ue.a,{className:T.divider})]}),Object(h.jsx)("br",{}),Object(h.jsx)(X.a,{component:j.b,to:"/",variant:"outlined",type:"button",children:"Back to home"})]}):Object(h.jsx)("div",{className:T.spinner,children:Object(h.jsx)(Be.a,{})})};c&&(h.Fragment,_.a,X.a,j.b);var P=function(){return 0===b?Object(h.jsx)(Ye,{checkoutToken:f,next:L}):Object(h.jsx)(et,{shippingData:C,checkoutToken:f,backStep:D,onCaptureCheckout:r,nextStep:R,timeout:U})};return Object(h.jsxs)(Ce.a,{theme:nt,children:[Object(h.jsx)(Pe.a,{}),Object(h.jsx)("div",{className:T.toolbar,children:Object(h.jsx)("main",{className:T.layout,children:Object(h.jsxs)(Ae.a,{className:T.paper,children:[Object(h.jsx)(_.a,{variant:"h4",align:"center",children:"Checkout"}),Object(h.jsx)(ze.a,{activeStep:b,className:T.stepper,children:tt.map((function(e){return Object(h.jsx)(Fe.a,{children:Object(h.jsx)(We.a,{children:e})},e)}))}),b===tt.length?Object(h.jsx)(B,{}):f&&Object(h.jsx)(P,{})]})})})]})},rt=n(82),ct=n(139),st=n(138),it={user:{}},ot=Object(rt.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return e;case D:return Object(C.a)(Object(C.a)({},e),{},{user:Object(C.a)({userId:t.payload.data._id},t.payload.data)});case L:return Object(C.a)(Object(C.a)({},e),{},{error:Object(C.a)({},t.error)});case W:return e.user={},delete e.error,Object(C.a)({},e);case U:return e;case B:return Object(C.a)(Object(C.a)({},e),{},{user:Object(C.a)({userId:t.payload.data._id},t.payload.data)});case P:return Object(C.a)(Object(C.a)({},e),{},{error:Object(C.a)({},t.error)});case A:return delete e.error,e;case z:return e;case F:return Object(C.a)(Object(C.a)({},e),{},{error:Object(C.a)({},t.error)});case M:return e;case G:return Object(C.a)(Object(C.a)({},e),{},{user:Object(C.a)({userId:t.payload.data._id},t.payload.data)});case Q:return Object(C.a)(Object(C.a)({},e),{},{error:t.error});case q:return e;case Y:return Object(C.a)(Object(C.a)({},e),{},{user:Object(C.a)({userId:t.payload.data._id},t.payload.data)});default:return e}}),Object(st.composeWithDevTools)(Object(rt.applyMiddleware)(ct.a))),ut=(n(219),function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(o.a)(c,2),u=s[0],b=s[1],O=Object(a.useState)([]),m=Object(o.a)(O,2),f=m[0],v=m[1],g=Object(a.useState)([]),C=Object(o.a)(g,2),k=C[0],w=C[1],S=Object(a.useState)({}),_=Object(o.a)(S,2),N=_[0],E=_[1],T=Object(a.useState)(""),R=Object(o.a)(T,2),D=R[0],L=R[1],U=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.products.list({category_slug:["bikes"]});case 2:t=e.sent,n=t.data,v(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.products.list({category_slug:["helmets"]});case 2:t=e.sent,n=t.data,w(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.retrieve();case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.add(t,n);case 2:a=e.sent,r=a.cart,b(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(i.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.update(t,{quantity:n});case 2:a=e.sent,r=a.cart,b(r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.remove(t);case 2:n=e.sent,a=n.cart,b(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(i.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.empty();case 2:t=e.sent,n=t.cart,b(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.refresh();case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(i.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.checkout.capture(t,n);case 3:a=e.sent,E(a),M(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),L(e.t0.data.error.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){U(),B(),P()}),[]),Object(h.jsx)(I.a,{store:ot,children:Object(h.jsxs)(j.a,{basename:"/commercial-app",children:[Object(h.jsx)(x,{open:n,setOpen:r}),Object(h.jsx)(be,{open:n,setClose:r}),Object(h.jsxs)(d.d,{children:[Object(h.jsx)(d.b,{exact:!0,path:"/",children:Object(h.jsx)(y,{})}),Object(h.jsx)(d.b,{exact:!0,path:"/bikes",children:Object(h.jsx)(Ne,{products:f,setProducts:v,onAddToCart:A,totalItems:u.total_items})}),Object(h.jsx)(d.b,{exact:!0,path:"/helmets",children:Object(h.jsx)(Ne,{products:k,setProducts:w,onAddToCart:A,totalItems:u.total_items})}),Object(h.jsx)(d.b,{exact:!0,path:"/cart",children:Object(h.jsx)(Le,{cart:u,setCart:b,handleUpdateToCartQty:z,handleRemoveFromCart:F,handleEmptyCart:W})}),Object(h.jsx)(d.b,{exact:!0,path:"/checkout",children:Object(h.jsx)(at,{cart:u,order:N,onCaptureCheckout:G,error:D})}),Object(h.jsx)(d.b,{exact:!0,path:"/account",children:Object(h.jsx)(ce,{})}),Object(h.jsx)(d.b,{exact:!0,path:"/login",children:Object(h.jsx)(ue,{})}),Object(h.jsx)(d.b,{exact:!0,path:"/register",children:Object(h.jsx)(oe,{})})]})]})})});s.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(ut,{})}),document.getElementById("root"))},47:function(e,t,n){e.exports={menu:"Menu_menu__2xbQm",menuLi:"Menu_menuLi__3pnjd",show:"Menu_show__3XHbC"}},65:function(e,t,n){e.exports={userpage:"Userpage_userpage__GxpPC",container:"Userpage_container__hQw8Y"}},98:function(e,t,n){e.exports={main:"Main_main__F7zXc",text:"Main_text__T4bBj"}}},[[220,1,2]]]);
//# sourceMappingURL=main.63b78666.chunk.js.map