(this["webpackJsonpcommercial-app"]=this["webpackJsonpcommercial-app"]||[]).push([[0],{148:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),i=n.n(r),s=n(15),o=n(10),u=n(7),l=n.n(u),j=n(17),d=n(19),b=n(92),p=new(n.n(b).a)("pk_test_282453842352eb169c3d206e7a40d06fe695eb4fecae6",!0),m=(n(148),n(44)),h=n(93),O=n(1),x=function(e){var t=e.open,n=e.setOpen;return Object(O.jsxs)("header",{children:[Object(O.jsx)(j.c,{to:"/",children:"biker shop"}),Object(O.jsx)(m.Icon,{icon:h.a,width:"75px",onClick:function(){return n(!t)}})]})},f=n(66),v=n.n(f),g=n(96),y=function(){return Object(O.jsxs)("div",{className:v.a.main,children:[Object(O.jsxs)("div",{className:v.a.text,children:[Object(O.jsx)("h1",{children:"Welcome!"}),Object(O.jsx)("p",{children:"We are one of the best bike shop online"})]}),Object(O.jsx)(m.Icon,{icon:g.a,width:"300px",color:"#108A7D"})]})},k=n(12),C=n(61),w=n(210),_=n(217),S=n(28),N=n(25),T="LOGIN_REQUEST",I="LOGIN_SUCCESS",E="LOGIN_FAILURE",L="LOGOUT",B="REGISTER_REQUEST",R="REGISTER_SUCCESS",F="REGISTER_FAILURE",D=n(159),P=n(47),U=n.n(P),A=n(238),z=function(e){var t=e.name,n=e.label,a=e.type,c=e.value,r=void 0===c?"":c,i=Object(S.d)().control;return Object(O.jsx)(w.a,{item:!0,xs:12,sm:6,children:Object(O.jsx)(S.a,{as:A.a,type:a,name:t,control:i,label:n,fullWidth:!0,defaultValue:r,required:!0})})},M=function(){var e=Object(N.b)(),t=Object(S.c)(),n=Object(N.c)((function(e){return{userId:e.user.userId}})).userId,a=function(t){e(function(e){return function(t){var n=function(e){var t=e.getDate()<10?"0".concat(e.getDate()):e.getDate(),n=e.getMonth()+1<10?"0".concat(e.getMonth()+1):e.getMonth()+1,a=e.getFullYear();return"".concat(t,".").concat(n,".").concat(a)}(new Date);return t({type:B}),D.post("https://commercial-app1.herokuapp.com/user/register/?",Object(k.a)(Object(k.a)({},e),{},{date:n})).then((function(e){t({type:R,payload:e})})).catch((function(e){var n=e.response;t({type:F,error:n.data})}))}}(t))};return n?Object(O.jsx)(d.a,{to:"/"}):Object(O.jsx)("div",{className:U.a.userpage,children:Object(O.jsxs)("div",{className:U.a.container,children:[Object(O.jsx)(C.a,{variant:"h3",gutterBottom:!0,children:"Register"}),Object(O.jsx)(S.b,Object(k.a)(Object(k.a)({},t),{},{children:Object(O.jsx)("form",{onSubmit:t.handleSubmit((function(e){return a(e)})),children:Object(O.jsxs)(w.a,{container:!0,justifyContent:"space-around",spacing:3,children:[Object(O.jsx)(z,{name:"login",label:"Login"}),Object(O.jsx)(z,{name:"password",label:"Password",type:"password"}),Object(O.jsx)(z,{name:"firstName",label:"First name"}),Object(O.jsx)(z,{name:"lastName",label:"Last name"}),Object(O.jsx)(z,{name:"address1",label:"Address"}),Object(O.jsx)(z,{name:"email",label:"Email"}),Object(O.jsx)(z,{name:"city",label:"City"}),Object(O.jsx)(z,{name:"zip",label:"ZIP/Postal Code"}),Object(O.jsx)(z,{name:"country",label:"Country"}),Object(O.jsx)(z,{name:"subdivision",label:"Region"}),Object(O.jsx)(_.a,{type:"submit",variant:"contained",color:"primary",children:"Register"}),Object(O.jsx)(_.a,{type:"submit",variant:"contained",color:"secondary",children:Object(O.jsx)(j.b,{to:"login",children:"I have my account"})})]})})}))]})})},G=function(){var e=Object(N.b)(),t=Object(S.c)(),n=Object(N.c)((function(e){return{userId:e.user.userId}})).userId,a=function(t){e(function(e){var t=e.login,n=e.password;return function(e){var a=new URLSearchParams({login:t,password:n});return e({type:T}),D.get("https://commercial-app1.herokuapp.com/user/login/?".concat(a)).then((function(t){return e({type:I,payload:t})})).catch((function(t){var n=t.response;return console.log(n),e({type:E,error:n.data})}))}}(t))};return n?Object(O.jsx)(d.a,{to:"/"}):Object(O.jsx)("div",{className:U.a.userpage,children:Object(O.jsxs)("div",{className:U.a.container,children:[Object(O.jsx)(C.a,{variant:"h3",gutterBottom:!0,children:"Log In"}),Object(O.jsx)(S.b,Object(k.a)(Object(k.a)({},t),{},{children:Object(O.jsx)("form",{onSubmit:t.handleSubmit((function(e){return a(e)})),children:Object(O.jsxs)(w.a,{container:!0,justifyContent:"space-around",spacing:2,children:[Object(O.jsx)(z,{name:"login",label:"Login"}),Object(O.jsx)(z,{name:"password",label:"Password",type:"password"}),Object(O.jsx)(_.a,{type:"submit",variant:"contained",color:"primary",children:"Log In"}),Object(O.jsx)(_.a,{type:"submit",variant:"contained",color:"secondary",children:Object(O.jsx)(j.b,{to:"register",children:"I want my account"})})]})})}))]})})},W=n(36),q=n.n(W),Q=n(98),Y=function(e){var t=e.open,n=e.setClose,a=Object(N.b)(),c=Object(N.c)((function(e){return{userId:e.user.userId}})).userId;return Object(O.jsxs)("div",{className:"".concat(q.a.menu," ").concat(t&&q.a.show),children:[Object(O.jsx)("div",{className:q.a.menuLi,children:Object(O.jsx)(m.Icon,{onClick:function(){return n(!t)},icon:Q.a,width:"90px"})}),Object(O.jsx)("div",{className:q.a.menuLi,children:Object(O.jsx)(j.c,{onClick:function(){return n(!t)},to:"bikes",children:"bikes"})}),Object(O.jsx)("div",{className:q.a.menuLi,children:Object(O.jsx)(j.c,{onClick:function(){return n(!t)},to:"helmets",children:"helmets"})}),Object(O.jsx)("div",{className:q.a.menuLi,children:Object(O.jsx)(j.c,{onClick:function(){return n(!t)},to:"cart",children:"cart"})}),Object(O.jsx)("div",{className:q.a.menuLi,children:c?Object(O.jsx)(j.c,{onClick:function(){return a((function(e){return e({type:L})}))},to:"/",children:"log Out"}):Object(O.jsx)(j.c,{onClick:function(){return n(!t)},to:"login",children:"log in"})})]})},H=n(13),J=n(223),V=n(225),Z=n(226),K=n(227),X=n(228),$=n(219),ee=n(220),te=n(221),ne=n(222),ae=n(224),ce=n(218),re=Object(ce.a)((function(e){return{root:{width:"80%",height:"400px",marginTop:"50px"},media:{height:"60%",backgroundSize:"contain"},cardActions:{display:"flex",justifyContent:"flex-end"},cardContent:{display:"flex",justifyContent:"space-between"}}})),ie=function(e){var t=e.bike,n=e.onAddToCart,a=re();return Object(O.jsxs)($.a,{className:a.root,children:[Object(O.jsx)(ee.a,{className:a.media,image:t.media.source,title:t.name}),Object(O.jsxs)(te.a,{children:[Object(O.jsxs)("div",{className:a.cardContent,children:[Object(O.jsx)(C.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.name}),Object(O.jsxs)(C.a,{gutterBottom:!0,variant:"h5",component:"h2",children:["$",t.price.formatted]})]}),Object(O.jsx)(C.a,{dangerouslySetInnerHTML:{__html:t.description},variant:"body2",color:"textSecondary",component:"p"})]}),Object(O.jsx)(ne.a,{disableSpacing:!0,className:a.cardActions,children:Object(O.jsx)(J.a,{"aria-label":"Add to Cart",onClick:function(){return n(t.id,1)},children:Object(O.jsx)(ae.a,{})})})]})},se=Object(ce.a)((function(e){return{toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3),marginTop:"90px"},root:{flexGrow:1},buttons:{height:"30px",position:"relative",display:"flex",flexDirection:"row",justifyContent:"flex-end",alignItems:"center",paddingRight:"20px"},sortBtns:{display:"flex",flexDirection:"column"},button:{marginLeft:"10px"},sort:{fontSize:"2rem",padding:0}}})),oe=function(e){var t=e.products,n=e.setProducts,a=e.onAddToCart,c=e.totalItems,r=se(),i=function(e){var a=Object(H.a)(t);a=a.sort(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"asc";return function(t,n){return"undefined"===typeof t.price.formatted?1:"asc"===e?Number(t.price.formatted.replace(/,/g,""))-Number(n.price.formatted.replace(/,/g,"")):Number(n.price.formatted.replace(/,/g,""))-Number(t.price.formatted.replace(/,/g,""))}}(e)),n(a)};return Object(O.jsxs)("main",{className:r.content,children:[Object(O.jsx)("div",{className:r.toolbar,children:Object(O.jsxs)("div",{className:r.buttons,children:[Object(O.jsxs)("div",{className:r.sortBtns,children:[Object(O.jsx)(J.a,{className:r.sort,onClick:function(){return i("asc")},children:Object(O.jsx)(V.a,{color:"secondary",children:Object(O.jsx)(Z.a,{})})}),Object(O.jsx)(J.a,{className:r.sort,onClick:function(){return i("dsc")},children:Object(O.jsx)(V.a,{color:"secondary",children:Object(O.jsx)(K.a,{})})})]}),Object(O.jsx)(J.a,{className:r.button,component:j.b,to:"/cart","aria-label":"Show cart items",color:"inherit",children:Object(O.jsx)(V.a,{badgeContent:c,color:"secondary",children:Object(O.jsx)(X.a,{})})})]})}),Object(O.jsx)(w.a,{container:!0,justifyContent:"center",spacing:4,children:t.map((function(e){return Object(O.jsx)(w.a,{container:!0,justifyContent:"center",item:!0,xs:12,sm:6,md:4,lg:3,children:Object(O.jsx)(ie,{bike:e,onAddToCart:a})},e.id)}))})]})},ue=n(229),le=Object(ce.a)((function(){return{media:{height:210,backgroundSize:"contain"},cardContent:{display:"flex",justifyContent:"space-between"},cardAction:{justifyContent:"space-between"},buttons:{display:"flex",alignItems:"center"}}})),je=function(e){var t=e.item,n=e.handleUpdateCart,a=e.handleRemoveFromCart,c=le();return Object(O.jsxs)($.a,{children:[Object(O.jsx)(ee.a,{image:t.media.source,alt:t.name,className:c.media}),Object(O.jsxs)(te.a,{className:c.cardContent,children:[Object(O.jsx)(C.a,{variant:"h4",children:t.name}),Object(O.jsx)(C.a,{variant:"h5",children:t.line_total.formatted_with_symbol})]}),Object(O.jsxs)(ne.a,{className:c.cardActions,children:[Object(O.jsxs)("div",{className:c.buttons,children:[Object(O.jsx)(_.a,{onClick:function(){return n(t.id,t.quantity-1)},type:"button",size:"small",children:"-"}),Object(O.jsx)(C.a,{children:t.quantity}),Object(O.jsx)(_.a,{onClick:function(){return n(t.id,t.quantity+1)},type:"button",size:"small",children:"+"})]}),Object(O.jsx)(_.a,{onClick:function(){return a(t.id)},variant:"contained",type:"button",color:"secondary",children:"Remove"})]})]})},de=n(9),be=Object(ce.a)((function(e){var t;return{root:{marginTop:"90px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},toolbar:e.mixins.toolbar,title:{marginTop:"5%"},emptyButton:(t={minWidth:"150px"},Object(de.a)(t,e.breakpoints.down("xs"),{marginBottom:"5px"}),Object(de.a)(t,e.breakpoints.up("xs"),{marginRight:"20px"}),t),checkoutButton:{minWidth:"150px"},link:{textDecoration:"none"},cardDetails:{display:"flex",marginTop:"10%",width:"100%",justifyContent:"space-between"}}})),pe=function(e){var t=e.cart,n=e.handleUpdateToCartQty,a=e.handleRemoveFromCart,c=e.handleEmptyCart,r=be(),i=function(){return Object(O.jsxs)(C.a,{variant:"subtitle1",children:["You have no items in your shopping cart, start adding some!",Object(O.jsx)(j.b,{to:"/products",className:r.link,children:" Start adding some"})]})},s=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(w.a,{container:!0,spacing:3,children:[t.line_items.map((function(e){return Object(O.jsx)(w.a,{item:!0,xs:12,sm:4,children:Object(O.jsx)(je,{item:e,handleUpdateCart:n,handleRemoveFromCart:a})},e.id)})),Object(O.jsxs)("div",{className:r.cardDetails,children:[Object(O.jsxs)(C.a,{variant:"h4",children:["Subtotal: ",t.subtotal.formatted_with_symbol]}),Object(O.jsxs)("div",{children:[Object(O.jsx)(_.a,{className:r.emptyButton,size:"large",type:"button",variant:"contained",color:"secondary",onClick:c,children:"Empty Cart"}),Object(O.jsx)(_.a,{component:j.b,to:"/checkout",className:r.checkoutButton,size:"large",type:"button",variant:"contained",color:"primary",children:"Checkout"})]})]})]})})};return t.line_items?Object(O.jsxs)(ue.a,{className:r.root,children:[Object(O.jsx)("div",{className:r.toolbar}),Object(O.jsx)(C.a,{className:r.title,variant:"h3",gutterBottom:!0,children:"Your Shopping Cart"}),t.line_items.length?Object(O.jsx)(s,{}):Object(O.jsx)(i,{})]}):"Loading..."},me=n(232),he=n(233),Oe=n(234),xe=n(179),fe=n(241),ve=n(235),ge=n(237),ye=Object(ce.a)((function(e){var t;return{appBar:{position:"relative"},toolbar:e.mixins.toolbar,layout:Object(de.a)({marginTop:"15%",width:"auto",marginLeft:e.spacing(2),marginRight:e.spacing(2)},e.breakpoints.up(600+2*e.spacing(2)),{width:600,marginLeft:"auto",marginRight:"auto"}),paper:(t={marginTop:e.spacing(3),marginBottom:e.spacing(3),padding:e.spacing(2)},Object(de.a)(t,e.breakpoints.down("xs"),{width:"100%",marginTop:60}),Object(de.a)(t,e.breakpoints.up(600+2*e.spacing(3)),{marginTop:e.spacing(6),marginBottom:e.spacing(6),padding:e.spacing(3)}),t),stepper:{padding:e.spacing(3,0,5)},buttons:{display:"flex",justifyContent:"flex-end"},button:{marginTop:e.spacing(3),marginLeft:e.spacing(1)},divider:{margin:"20px 0"},spinner:{display:"flex",justifyContent:"center",alignItems:"center"}}})),ke=n(240),Ce=n(236),we=n(230),_e=function(e){var t=e.checkoutToken,n=e.next,c=Object(N.c)((function(e){return{user:e.user}})).user,r=Object(a.useState)([]),i=Object(o.a)(r,2),u=i[0],d=i[1],b=Object(a.useState)(""),m=Object(o.a)(b,2),h=m[0],x=m[1],f=Object(a.useState)([]),v=Object(o.a)(f,2),g=v[0],y=v[1],T=Object(a.useState)(""),I=Object(o.a)(T,2),E=I[0],L=I[1],B=Object(a.useState)([]),R=Object(o.a)(B,2),F=R[0],D=R[1],P=Object(a.useState)(""),U=Object(o.a)(P,2),A=U[0],M=U[1],G=Object(S.c)(),W=Object.entries(u).map((function(e){var t=Object(o.a)(e,2);return{id:t[0],label:t[1]}})),q=Object.entries(g).map((function(e){var t=Object(o.a)(e,2);return{id:t[0],label:t[1]}})),Q=F.map((function(e){return{id:e.id,label:"".concat(e.description," - (").concat(e.price.formatted_with_symbol,")")}})),Y=function(){var e=Object(s.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.services.localeListShippingCountries(t);case 2:n=e.sent,a=n.countries,d(a),x(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(s.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.services.localeListSubdivisions(t);case 2:n=e.sent,a=n.subdivisions,y(a),L(Object.keys(a)[0]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(s.a)(l.a.mark((function e(t,n){var a,c,r=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.length>2&&void 0!==r[2]?r[2]:null,e.next=3,p.checkout.getShippingOptions(t,{country:n,region:a});case 3:c=e.sent,D(c),M(c[0].id);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){Y(t.id)}),[t.id]),Object(a.useEffect)((function(){h&&H(h)}),[h]),Object(a.useEffect)((function(){E&&J(t.id,h,E)}),[t.id,h,E]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(C.a,{variant:"h6",gutterBottom:!0}),Object(O.jsx)(S.b,Object(k.a)(Object(k.a)({},G),{},{children:Object(O.jsxs)("form",{onSubmit:G.handleSubmit((function(e){return n(Object(k.a)(Object(k.a)({},e),{},{shippingCountry:h,shippingSubdivision:E,shippingOption:A}))})),children:[Object(O.jsxs)(w.a,{container:!0,spacing:3,children:[Object(O.jsx)(z,{name:"firstName",label:"First name",value:c.firstName}),Object(O.jsx)(z,{name:"lastName",label:"Last name",value:c.lastName}),Object(O.jsx)(z,{name:"address1",label:"Address",value:c.address1}),Object(O.jsx)(z,{name:"email",label:"Email",value:c.email}),Object(O.jsx)(z,{name:"City",label:"City",value:c.city}),Object(O.jsx)(z,{name:"zip",label:"ZIP/Postal Code",value:c.zip}),Object(O.jsxs)(w.a,{item:!0,xs:12,sm:6,children:[Object(O.jsx)(ke.a,{children:"Shipping Country"}),Object(O.jsx)(Ce.a,{value:h,fullWidth:!0,onChange:function(e){return x(e.target.value)},children:W.map((function(e){return Object(O.jsx)(we.a,{value:e.id,children:e.label},e.id)}))})]}),Object(O.jsxs)(w.a,{item:!0,xs:12,sm:6,children:[Object(O.jsx)(ke.a,{children:"Shipping Subdivision"}),Object(O.jsx)(Ce.a,{value:E,fullWidth:!0,onChange:function(e){return L(e.target.value)},children:q.map((function(e){return Object(O.jsx)(we.a,{value:e.id,children:e.label},e.id)}))})]}),Object(O.jsxs)(w.a,{item:!0,xs:12,sm:6,children:[Object(O.jsx)(ke.a,{children:"Shipping Options"}),Object(O.jsx)(Ce.a,{value:A,fullWidth:!0,onChange:function(e){return M(e.target.value)},children:Q.map((function(e){return Object(O.jsx)(we.a,{value:e.id,children:e.label},e.id)}))})]})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsx)(_.a,{component:j.b,to:"/cart",variant:"outlined",children:"Back to Cart"}),Object(O.jsx)(_.a,{type:"submit",variant:"contained",color:"primary",children:"Next"})]})]})}))]})},Se=n(53),Ne=n(99),Te=n(216),Ie=n(180),Ee=n(231),Le=function(e){var t=e.checkoutToken;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(C.a,{variant:"h6",gutterBottom:!0,children:"Order summary"}),Object(O.jsxs)(Te.a,{disablePadding:!0,children:[t.live.line_items.map((function(e){return Object(O.jsxs)(Ie.a,{style:{padding:"10px 0"},children:[Object(O.jsx)(Ee.a,{primary:e.name,secondary:"Quantity ".concat(e.quantity)}),Object(O.jsx)(C.a,{variant:"body2",children:e.line_total.formatted_with_symbol})]},e.id)})),Object(O.jsxs)(Ie.a,{style:{padding:"10px 0"},children:[Object(O.jsx)(Ee.a,{primary:"Total"}),Object(O.jsx)(C.a,{variant:"subtitle1",style:{fontWeight:700},children:t.live.subtotal.formatted_with_symbol})]})]})]})},Be=Object(Ne.a)("pk_test_51J2baDG1DKaBFAOkuBV2gnqU9rgUwk7xdCifGd7bHnaqKZNZQ1VH4KyEeVWxSDTTzH6JY1hY0q0TPv7mL2diyURO003leqpTk3"),Re=function(e){var t=e.checkoutToken,n=e.nextStep,a=e.backStep,c=e.shippingData,r=e.onCaptureCheckout,i=function(){var e=Object(s.a)(l.a.mark((function e(a,i,s){var o,u,j,d,b;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),s&&i){e.next=3;break}return e.abrupt("return");case 3:return o=i.getElement(Se.CardElement),e.next=6,s.createPaymentMethod({type:"card",card:o});case 6:u=e.sent,j=u.error,d=u.paymentMethod,j?console.log("[error]",j):(b={line_items:t.live.line_items,customer:{firstname:c.firstName,lastname:c.lastName,email:c.email},shipping:{name:"International",street:c.address1,town_city:c.City,county_state:c.shippingSubdivision,postal_zip_code:c.zip,country:c.shippingCountry},fulfillment:{shipping_method:c.shippingOption},payment:{gateway:"stripe",stripe:{payment_method_id:d.id}}},r(t.id,b),n());case 10:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Le,{checkoutToken:t}),Object(O.jsx)(me.a,{}),Object(O.jsx)(C.a,{variant:"h6",gutterBottom:!0,style:{margin:"20px 0"},children:"Payment method"}),Object(O.jsx)(Se.Elements,{stripe:Be,children:Object(O.jsx)(Se.ElementsConsumer,{children:function(e){var n=e.elements,c=e.stripe;return Object(O.jsxs)("form",{onSubmit:function(e){return i(e,n,c)},children:[Object(O.jsx)(Se.CardElement,{}),Object(O.jsx)("br",{})," ",Object(O.jsx)("br",{}),Object(O.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(O.jsx)(_.a,{variant:"outlined",onClick:a,children:"Back"}),Object(O.jsxs)(_.a,{type:"submit",variant:"contained",disabled:!c,color:"primary",children:["Pay ",t.live.subtotal.formatted_with_symbol]})]})]})}})})]})},Fe=["Shipping address","Payment details"],De=function(e){var t=e.cart,n=e.order,c=e.onCaptureCheckout,r=e.error,i=Object(a.useState)(0),u=Object(o.a)(i,2),b=u[0],m=u[1],h=Object(a.useState)(null),x=Object(o.a)(h,2),f=x[0],v=x[1],g=Object(a.useState)({}),y=Object(o.a)(g,2),k=y[0],w=y[1],S=Object(a.useState)(!1),N=Object(o.a)(S,2),T=N[0],I=N[1],E=ye(),L=Object(d.g)();Object(a.useEffect)((function(){if(t.id){var e=function(){var e=Object(s.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.checkout.generateToken(t.id,{type:"cart"});case 3:n=e.sent,v(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),L.push("/");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}}),[t,L]);var B=function(){return m((function(e){return e+1}))},R=function(){return m((function(e){return e-1}))},F=function(e){w(e),B()},D=function(){setTimeout((function(){I(!0)}),3e3)},P=function(){return n.customer?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{children:[Object(O.jsxs)(C.a,{variant:"h5",children:["Thank you for your purachese, ",n.customer.firstname," ",n.customer.lastname]}),Object(O.jsx)(me.a,{className:E.divider}),Object(O.jsxs)(C.a,{variant:"subtitle2",children:["Order ref: ",n.customer_reference]})]}),Object(O.jsx)("br",{}),Object(O.jsx)(_.a,{component:j.b,to:"/",variant:"outlined",type:"button",children:"Back to home"})]}):T?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(C.a,{variant:"h5",children:"Thank you for your purachese"}),Object(O.jsx)(me.a,{className:E.divider})]}),Object(O.jsx)("br",{}),Object(O.jsx)(_.a,{component:j.b,to:"/",variant:"outlined",type:"button",children:"Back to home"})]}):Object(O.jsx)("div",{className:E.spinner,children:Object(O.jsx)(he.a,{})})};r&&(O.Fragment,C.a,_.a,j.b);var U=function(){return 0===b?Object(O.jsx)(_e,{checkoutToken:f,next:F}):Object(O.jsx)(Re,{shippingData:k,checkoutToken:f,backStep:R,onCaptureCheckout:c,nextStep:B,timeout:D})};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(Oe.a,{}),Object(O.jsx)("div",{className:E.toolbar,children:Object(O.jsx)("main",{className:E.layout,children:Object(O.jsxs)(xe.a,{className:E.paper,children:[Object(O.jsx)(C.a,{variant:"h4",align:"center",children:"Checkout"}),Object(O.jsx)(fe.a,{activeStep:b,className:E.stepper,children:Fe.map((function(e){return Object(O.jsx)(ve.a,{children:Object(O.jsx)(ge.a,{children:e})},e)}))}),b===Fe.length?Object(O.jsx)(P,{}):f&&Object(O.jsx)(U,{})]})})})]})},Pe=n(60),Ue=n(101),Ae=n(100),ze={bikes:[],user:{}},Me=Object(Pe.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return e;case I:return Object(k.a)(Object(k.a)({},e),{},{user:Object(k.a)({userId:t.payload.data._id},t.payload.data)});case E:return Object(k.a)(Object(k.a)({},e),{},{error:t.error});case L:return e.user={},Object(k.a)({},e);case B:return e;case R:return Object(k.a)(Object(k.a)({},e),{},{user:Object(k.a)({userId:t.payload.data._id},t.payload.data)});case F:return Object(k.a)(Object(k.a)({},e),{},{error:t.error});default:return e}}),Object(Ae.composeWithDevTools)(Object(Pe.applyMiddleware)(Ue.a))),Ge=(n(177),function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),i=Object(o.a)(r,2),u=i[0],b=i[1],m=Object(a.useState)([]),h=Object(o.a)(m,2),f=h[0],v=h[1],g=Object(a.useState)([]),k=Object(o.a)(g,2),C=k[0],w=k[1],_=Object(a.useState)({}),S=Object(o.a)(_,2),T=S[0],I=S[1],E=Object(a.useState)(""),L=Object(o.a)(E,2),B=L[0],R=L[1],F=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.products.list({category_slug:["bikes"]});case 2:t=e.sent,n=t.data,v(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.products.list({category_slug:["helmets"]});case 2:t=e.sent,n=t.data,w(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.retrieve();case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(s.a)(l.a.mark((function e(t,n){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.add(t,n);case 2:a=e.sent,c=a.cart,b(c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(l.a.mark((function e(t,n){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.update(t,{quantity:n});case 2:a=e.sent,c=a.cart,b(c);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),z=function(){var e=Object(s.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.remove(t);case 2:n=e.sent,a=n.cart,b(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.empty();case 2:t=e.sent,n=t.cart,b(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.cart.refresh();case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Q=function(){var e=Object(s.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.checkout.capture(t,n);case 3:a=e.sent,I(a),q(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),R(e.t0.data.error.message);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){F(),D(),P()}),[]),Object(O.jsx)(N.a,{store:Me,children:Object(O.jsxs)(j.a,{basename:"/commercial-app",children:[Object(O.jsx)(x,{open:n,setOpen:c}),Object(O.jsx)(Y,{open:n,setClose:c}),Object(O.jsxs)(d.d,{children:[Object(O.jsx)(d.b,{exact:!0,path:"/",children:Object(O.jsx)(y,{})}),Object(O.jsx)(d.b,{exact:!0,path:"/bikes",children:Object(O.jsx)(oe,{products:f,setProducts:v,onAddToCart:U,totalItems:u.total_items})}),Object(O.jsx)(d.b,{exact:!0,path:"/helmets",children:Object(O.jsx)(oe,{products:C,setProducts:w,onAddToCart:U,totalItems:u.total_items})}),Object(O.jsx)(d.b,{exact:!0,path:"/cart",children:Object(O.jsx)(pe,{cart:u,setCart:b,handleUpdateToCartQty:A,handleRemoveFromCart:z,handleEmptyCart:W})}),Object(O.jsx)(d.b,{exact:!0,path:"/checkout",children:Object(O.jsx)(De,{cart:u,order:T,onCaptureCheckout:Q,error:B})}),Object(O.jsx)(d.b,{exact:!0,path:"/login",children:Object(O.jsx)(G,{})}),Object(O.jsx)(d.b,{exact:!0,path:"/register",children:Object(O.jsx)(M,{})})]})]})})});i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(Ge,{})}),document.getElementById("root"))},36:function(e,t,n){e.exports={menu:"Menu_menu__2xbQm",menuLi:"Menu_menuLi__3pnjd",show:"Menu_show__3XHbC"}},47:function(e,t,n){e.exports={userpage:"Userpage_userpage__GxpPC",container:"Userpage_container__hQw8Y"}},66:function(e,t,n){e.exports={main:"Main_main__F7zXc",text:"Main_text__T4bBj"}}},[[178,1,2]]]);
//# sourceMappingURL=main.ede3971e.chunk.js.map