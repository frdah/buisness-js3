(this["webpackJsonpjs-lessons-business"]=this["webpackJsonpjs-lessons-business"]||[]).push([[0],{27:function(e,t,n){e.exports=n(39)},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(21),u=n.n(c),o=n(1),i=n(4),l=Object(a.createContext)({}),s=Object(a.createContext)({}),m=n(6),f=n.n(m),b=n(11),p=n(22),d=n(23),g="https://frebi.willandskill.eu/",h=function(){function e(){Object(p.a)(this,e)}return Object(d.a)(e,[{key:"register",value:function(){var e=Object(b.a)(f.a.mark((function e(t,n,a,r,c,u){var o,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o="".concat(g,"auth/users/"),i={firstName:t,lastName:n,email:a,password:r,organisationName:c,organisationKind:u},fetch(o,{method:"POST",headers:this.getPuplicHeaders(),body:JSON.stringify(i)});case 3:case"end":return e.stop()}}),e,this)})));return function(t,n,a,r,c,u){return e.apply(this,arguments)}}()},{key:"activateUser",value:function(){var e=Object(b.a)(f.a.mark((function e(t,n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(g,"auth/users/activate/"),r={uid:t,token:n},e.abrupt("return",fetch(a,{method:"POST",headers:this.getPuplicHeaders(),body:JSON.stringify(r)}));case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(b.a)(f.a.mark((function e(t,n){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(g,"api-token-auth/"),r={email:t,password:n},e.abrupt("return",fetch(a,{method:"POST",headers:this.getPuplicHeaders(),body:JSON.stringify(r)}));case 3:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(g,"api/v1/me"),e.abrupt("return",fetch(t,{headers:this.getPrivateHeaders()}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCustomerList",value:function(){var e=Object(b.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(g,"api/v1/customers"),e.abrupt("return",fetch(t,{headers:this.getPrivateHeaders()}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCustomerDetail",value:function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(g,"api/v1/customers/").concat(t,"/"),e.abrupt("return",fetch(n,{headers:this.getPrivateHeaders()}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createCustomer",value:function(e){var t="".concat(g,"api/v1/customers");return fetch(t,{method:"POST",headers:this.getPrivateHeaders(),body:JSON.stringify(e)})}},{key:"updateCustomer",value:function(e,t){var n="".concat(g,"api/v1/customers/").concat(t,"/");return fetch(n,{method:"PUT",headers:this.getPrivateHeaders(),body:JSON.stringify(e)})}},{key:"deleteCustomer",value:function(){var e=Object(b.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(g,"api/v1/customers/").concat(t,"/"),e.abrupt("return",fetch(n,{method:"DELETE",headers:this.getPrivateHeaders()}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPuplicHeaders",value:function(){return{"Content-Type":"application/json"}}},{key:"getPrivateHeaders",value:function(){return{"Content-Type":"application/json",Authorization:"Bearer ".concat(this.getToken())}}},{key:"setToken",value:function(e){localStorage.setItem("BUISINESS_TOKEN",e)}},{key:"getToken",value:function(){return localStorage.getItem("BUISINESS_TOKEN")}},{key:"deleteToken",value:function(){localStorage.removeItem("BUISINESS_TOKEN")}}]),e}(),v=n(2),O=n(3);function j(){var e=Object(v.a)(["\nfont-size: 15px;\ncolor: ",";\nfont-family: Arial, Helvetica, sans-serif;\n"]);return j=function(){return e},e}function E(){var e=Object(v.a)(["\nwidth: 150px;\nfont-size: 20px;\nmargin-top: 30px;\n\n&:hover{\nbackground-color: rgb(151, 219, 182);\n\n}\n"]);return E=function(){return e},e}function x(){var e=Object(v.a)(["\n\nwidth: 100px;\n"]);return x=function(){return e},e}function y(){var e=Object(v.a)(["\nbackground: radial-gradient(circle, rgba(90,90,232,1) 0%, rgba(40,171,141,1) 100%);\ncolor: white;\nmargin: 0px;\n&:hover{\n    background: radial-gradient(circle, rgba(40,171,141,1) 0%, rgba(90,90,232,1) 100%);\n\n"]);return y=function(){return e},e}function w(){var e=Object(v.a)(["\nbackground-color: light-grey;\nmargin: 10px;\ncolor: #5a5ae8;\nborder-radius: 0px;\n&:focus{\n    outline: none;\n"]);return w=function(){return e},e}function k(){var e=Object(v.a)(["\nmargin: 5px;\nfont-size: 20px;\nfont-family: Arial, Helvetica, sans-serif;\ncolor: ",";\n"]);return k=function(){return e},e}function S(){var e=Object(v.a)(["\ndisplay: grid;\ngrid-template-columns: 1fr 1fr;\nbackground-color: white;\npadding: 10px;\nborder-radius: 10px;\nmargin: 10px;\n\n"]);return S=function(){return e},e}function C(){var e=Object(v.a)(["\nbackground-color: #5a5ae8;\nfont-size: 40px;\nfont-weight: bolder;\nborder-radius: 50px;\nwidth: 50px;\nheight: 50px;\ncolor: white;\ncursor: pointer;\nmargin-bottom: 20px;\n&:hover{\n    background: radial-gradient(circle, rgba(90,90,232,1) 0%, rgba(40,171,141,1) 100%);\n    \n    \n\n"]);return C=function(){return e},e}function N(){var e=Object(v.a)(["\ndisplay: grid;\ngrid-template-columns: 1fr 1fr 1fr;\nbackground: white;\nborder-radius: 10px;\npadding: 10px;\n\n"]);return N=function(){return e},e}function T(){var e=Object(v.a)(["\nmargin: 10px;\npadding: 15px;\ndisplay: grid;\nbackground: #8ab7ff;\ngrid-template-columns: 3fr, 3fr, 3fr;\nborder-radius: 10px;\n"]);return T=function(){return e},e}function P(){var e=Object(v.a)(["\nmargin: 5px;\n\npadding: 5px;\nlist-style-type: none;\nfont-size: 15px;\ncolor: white;\nfont-family: Arial, Helvetica, sans-serif;\nborder-bottom: 1px solid #5a5ae8;\n\n\n"]);return P=function(){return e},e}function I(){var e=Object(v.a)(["\ntext-decoration: none;\n"]);return I=function(){return e},e}function H(){var e=Object(v.a)(["\nfont-family: Arial, Helvetica, sans-serif;\nfont-size: 13px;\nlist-style-type: none;\n"]);return H=function(){return e},e}function z(){var e=Object(v.a)(["\nbackground-color: white;\ncolor: #8ab7ff;\nmargin: 3%;\n"]);return z=function(){return e},e}function A(){var e=Object(v.a)(["\nbackground-color: white;\nfont-size: 15px;\npadding: 10px;\nborder-radius: 10px;\nmargin-right: 20px;\nmargin-left: -20px;\n&:hover{\n    background-color: #8ab7ff;\n    color: white;\n"]);return A=function(){return e},e}function U(){var e=Object(v.a)(["\nflex-direction: row;\nwidth: 200px;\njustify-content: space-between;\nmargin-left: 12%;\n"]);return U=function(){return e},e}function L(){var e=Object(v.a)(["\nflex-direction: row;\njustify-content: space-evenly;\nbackground: rgb(72,131,226);\nbackground: linear-gradient(90deg, rgba(138,183,255,1) 0%, rgba(90,90,232,1) 34%, rgba(40,171,141,1) 100%);\nborder-radius: 0px;\n\n"]);return L=function(){return e},e}function V(){var e=Object(v.a)(["\nborder: none;\npadding: 5px 15px ;\nmargin-top: 3%;\nborder-radius: 10px;\ncolor: white;\nbackground-color: rgb(117, 164, 240);\ncursor: pointer;\n&:hover{\n    background-color: #8ab7ff;\n    color: white;\n"]);return V=function(){return e},e}function B(){var e=Object(v.a)(["\nborder: none;\nborder-bottom: 1px grey solid;\npadding: 1%;\nmargin: 20px;\ntext-align: center;\nfont-size: 16px;\nborder-radius: 10px;\ncolor:#8ab7ff;\n&:focus{\n    outline: none;\n"]);return B=function(){return e},e}function J(){var e=Object(v.a)(["\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\nalign-content: center;\njustify-items: center;\nalign-items: center;\ntext-align: center;\nborder-radius: 10px;\npadding: 5px;\nmargin-bottom: 10px;\nbackground: ",";\nmargin-top: ","\n\n\n"]);return J=function(){return e},e}function K(){var e=Object(v.a)(["\nfont-size: 20px;\ncolor: grey;\nfont-size: 35px;\nfont-family: Arial, Helvetica, sans-serif;\n\n"]);return K=function(){return e},e}function W(){var e=Object(v.a)(["\n    color: white;\n    font-family: Arial, Helvetica, sans-serif;\n"]);return W=function(){return e},e}function D(){var e=Object(v.a)(["\nbackground-color: rgb(240, 241, 245);\nheight: 100vh;\n"]);return D=function(){return e},e}var R=O.a.div(D()),$=O.a.h1(W()),_=O.a.h2(K()),Z=O.a.div(J(),(function(e){return e.white?"white":""}),(function(e){return e.marginTop?"100px":"0px"})),F=O.a.input(B()),M=O.a.button(V()),q=Object(O.a)(Z)(L()),G=Object(O.a)(Z)(U()),Q=Object(O.a)(Z)(A()),X=Object(O.a)(M)(z()),Y=O.a.li(H()),ee=(O.a.a(I()),O.a.li(P())),te=O.a.ul(T()),ne=O.a.div(N()),ae=O.a.div(C()),re=Object(O.a)(Z)(S()),ce=O.a.h4(k(),(function(e){return e.white?"white":"#5a5ae8;"})),ue=Object(O.a)(F)(w()),oe=Object(O.a)(M)(y()),ie=Object(O.a)(M)(x()),le=Object(O.a)(M)(E()),se=O.a.p(j(),(function(e){return e.warning?"red":"black"}));function me(){var e=Object(i.f)();return r.a.createElement("div",null,r.a.createElement(X,{onClick:function(){e.push("/login")}},"Login"))}function fe(){var e=Object(i.f)();return r.a.createElement(X,{onClick:function(){localStorage.clear(),e.push("/login")}},"Logout")}function be(){var e=Object(i.f)();return r.a.createElement("div",null,r.a.createElement(X,{onClick:function(){e.push("/home")}},"Home"))}var pe=n(7);function de(){var e=new h,t=Object(a.useContext)(s),n=t.userInfo,c=t.setUserInfo;return Object(a.useEffect)((function(){e.getUserInfo().then((function(e){return e.json()})).then((function(e){c(e)}))}),[]),r.a.createElement(pe.b,{to:"/profile"},r.a.createElement(Q,null,r.a.createElement(Y,null,n.firstName," ",n.lastName),r.a.createElement(Y,null,n.email)))}function ge(e){var t=e.children,n=new h;return r.a.createElement("div",null,r.a.createElement(q,null,r.a.createElement($,null,"Business Project"),r.a.createElement(G,null,null==n.getToken()?"":r.a.createElement(de,null),r.a.createElement(Z,null,null==n.getToken()?"":r.a.createElement(be,null),null==n.getToken()?r.a.createElement(me,null):r.a.createElement(fe,null)))),t)}function he(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),l=Object(o.a)(u,2),s=l[0],m=l[1],f=Object(a.useState)(null),b=Object(o.a)(f,2),p=b[0],d=b[1],g=new h,v=Object(i.f)();return r.a.createElement(Z,{marginTop:!0,white:!0},r.a.createElement(_,null,"Login"),r.a.createElement(ue,{placeholder:"email",value:n,onChange:function(e){return c(e.target.value)}}),r.a.createElement(ue,{type:"password",placeholder:"password",value:s,onChange:function(e){return m(e.target.value)}}),p&&r.a.createElement(se,{warning:!0},p),r.a.createElement(ie,{onClick:function(){g.login(n,s).then((function(e){return e.json()})).then((function(e){if(void 0===e.token)return d("Wrong input, please try again");g.setToken(e.token),v.push("/home")}))}},"Login"),r.a.createElement(X,{onClick:function(){v.push("/")}},"Register"))}function ve(){var e=new h,t=Object(i.f)(),n=t.location.search,c=new URLSearchParams(n),u=Object(a.useState)(c.get("uid")),l=Object(o.a)(u,2),s=l[0],m=l[1],f=Object(a.useState)(c.get("token")),b=Object(o.a)(f,2),p=b[0],d=b[1];return r.a.createElement(Z,null,p?r.a.createElement(Z,{marginTop:!0},r.a.createElement(ce,null,"Activate Account"),r.a.createElement(le,{onClick:function(){e.activateUser(s,p).then((function(){m(null),d(null),t.push("/login")}))}},"Activate user")):r.a.createElement(he,null))}function Oe(e){var t=Object(i.f)(),n=new h,c=Object(a.useContext)(l),u=c.customers,o=c.setCustomers,s=e.match.params.id;function m(){n.getCustomerList().then((function(e){return e.json()})).then((function(e){o(e.results)}))}function f(){n.deleteCustomer(s).then(m()).then(t.push("/home"))}return null===u&&m(),u&&u.map((function(e,t){if(parseInt(e.id)===parseInt(s))return r.a.createElement(Z,{key:t},r.a.createElement(ee,null,r.a.createElement(ce,{white:!0},e.name)),r.a.createElement(ee,null,"Organisation number: ",e.organisationNr),r.a.createElement(ee,null,"Vat number: ",e.vatNr),r.a.createElement(ee,null,"Reference: ",e.reference),r.a.createElement(ee,null,"Payement term: ",e.paymentTerm),r.a.createElement(ee,null,"Website: ",e.website),r.a.createElement(ee,null,"Phone number: ",e.phoneNumber),r.a.createElement(ee,null,"Email: ",e.email),r.a.createElement(M,{onClick:f},"Delete customer"))}))}function je(e,t,n,a,r,c){return""===a?t("Enter name"):""===c?t("Enter organisationNr"):""===r?t("Enter reference"):""===e||12!==e.length||!1===e.startsWith("SE")||!1===/^\d+$/.test(e.slice(2,12))?t("Wrong vatNr. Ex. SE1234567890"):""!==n&&!1!==/^\d+$/.test(n)||t("Payment term has to be a number")}function Ee(e){var t=Object(a.useContext)(l),n=t.customers,c=t.setCustomers,u=new h,i=e.match.params.id,s=Object(a.useState)(""),m=Object(o.a)(s,2),f=m[0],b=m[1],p=Object(a.useState)(""),d=Object(o.a)(p,2),g=d[0],v=d[1],O=Object(a.useState)(""),j=Object(o.a)(O,2),E=j[0],x=j[1],y=Object(a.useState)(""),w=Object(o.a)(y,2),k=w[0],S=w[1],C=Object(a.useState)(""),N=Object(o.a)(C,2),T=N[0],P=N[1],I=Object(a.useState)(""),H=Object(o.a)(I,2),z=H[0],A=H[1],U=Object(a.useState)(""),L=Object(o.a)(U,2),V=L[0],B=L[1],J=Object(a.useState)(""),K=Object(o.a)(J,2),W=K[0],D=K[1],R=Object(a.useState)(null),$=Object(o.a)(R,2),_=$[0],q=$[1];function G(){u.getCustomerList().then((function(e){return e.json()})).then((function(e){c(e.results)}))}return Object(a.useEffect)((function(){n.map((function(e){parseInt(e.id)===parseInt(i)&&(b(e.name),v(e.organisationNr),x(e.vatNr),S(e.reference),P(e.paymentTerm),A(e.website),B(e.phoneNumber),D(e.email))}))}),[]),r.a.createElement(Z,null,r.a.createElement(F,{type:"text",defaultValue:f,onChange:function(e){b(e.target.value)},placeholder:"name"}),r.a.createElement(F,{type:"text",defaultValue:g,onChange:function(e){v(e.target.value)},placeholder:"organisationNr"}),r.a.createElement(F,{type:"text",defaultValue:E,onChange:function(e){x(e.target.value)},placeholder:"vatNr"}),r.a.createElement(F,{type:"text",defaultValue:k,onChange:function(e){S(e.target.value)},placeholder:"reference"}),r.a.createElement(F,{type:"text",defaultValue:T,onChange:function(e){P(e.target.value)},placeholder:"paymentTerm"}),r.a.createElement(F,{type:"text",defaultValue:z,onChange:function(e){A(e.target.value)},placeholder:"website"}),r.a.createElement(F,{type:"text",defaultValue:V,onChange:function(e){B(e.target.value)},placeholder:"phoneNumber"}),r.a.createElement(F,{type:"text",defaultValue:W,onChange:function(e){D(e.target.value)},placeholder:"email"}),r.a.createElement(M,{onClick:function(){if(je(E,q,T,f,k,g)){var t={name:f,organisationNr:g,vatNr:E,reference:k,paymentTerm:T,website:z,phoneNumber:V,email:W};u.updateCustomer(t,i).then(G),q(null),e.setEditCustomer(!1)}}},"Update"),_&&r.a.createElement(se,{warning:!0},_))}function xe(e){var t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],u=n[1];return r.a.createElement(Z,{marginTop:!0},r.a.createElement(te,null,!0===c?r.a.createElement(Ee,Object.assign({},e,{setEditCustomer:u})):r.a.createElement(Oe,e),!1===c?r.a.createElement(M,{onClick:function(){u(!0)}},"Edit customer"):""))}function ye(e){var t=e.fetchCustomerList,n=(e.setShowCreateDiv,new h),c=Object(a.useState)(""),u=Object(o.a)(c,2),i=u[0],l=u[1],s=Object(a.useState)(""),m=Object(o.a)(s,2),f=m[0],b=m[1],p=Object(a.useState)(""),d=Object(o.a)(p,2),g=d[0],v=d[1],O=Object(a.useState)(""),j=Object(o.a)(O,2),E=j[0],x=j[1],y=Object(a.useState)(""),w=Object(o.a)(y,2),k=w[0],S=w[1],C=Object(a.useState)(""),N=Object(o.a)(C,2),T=N[0],P=N[1],I=Object(a.useState)(""),H=Object(o.a)(I,2),z=H[0],A=H[1],U=Object(a.useState)(""),L=Object(o.a)(U,2),V=L[0],B=L[1],J=Object(a.useState)(null),K=Object(o.a)(J,2),W=K[0],D=K[1],R=[["name",i,l,"text"],["organisationNr",f,b,"text"],["vatNr",g,v,"text"],["reference",E,x,"text"],["paymentTerm",k,S,"text"],["website",T,P,"text"],["phoneNumber",z,A,"text"],["email",V,B,"email"]];return r.a.createElement("div",null,r.a.createElement(Z,{white:!0},r.a.createElement(ce,null,"Create Customer"),r.a.createElement(re,null,R.map((function(e,t){return n=t,a=e[0],c=e[1],u=e[2],o=e[3],r.a.createElement("div",{key:n},r.a.createElement(ue,{type:o,placeholder:a,value:c,onChange:function(e){u(e.target.value)}}));var n,a,c,u,o}))),W&&r.a.createElement(se,{warning:!0},W),r.a.createElement(oe,{onClick:function(){if(je(g,D,k,i,E,f)){var e={name:i,organisationNr:f,vatNr:g,reference:E,paymentTerm:k,website:T,phoneNumber:z,email:V};n.createCustomer(e).then(t)}}},"Create Customer")))}function we(){var e=new h,t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],u=n[1],i=Object(a.useContext)(l),s=i.customers,m=i.setCustomers;function f(){e.getCustomerList().then((function(e){return e.json()})).then((function(e){return m(e.results)}))}return Object(a.useEffect)((function(){f()}),[]),r.a.createElement(l.Provider,{value:{customers:s,setCustomers:m}},r.a.createElement(Z,null,r.a.createElement(_,null,"Customers"),r.a.createElement(ae,{onClick:function(){u(!1===c)}},!0===c?"\ud835\ude6d":"+"),!0===c?r.a.createElement(ye,{fetchCustomerList:f,setShowCreateDiv:u}):"",r.a.createElement(Z,null,r.a.createElement(ne,null,s&&s.map((function(e,t){return r.a.createElement(te,{key:e.id},r.a.createElement(ee,null,r.a.createElement(pe.b,{to:"/customers/".concat(e.id)},e.name)),r.a.createElement(ee,null,e.organisationNr),r.a.createElement(ee,null,e.reference))}))))))}function ke(){var e=new h,t=Object(a.useState)(null),n=Object(o.a)(t,2),c=n[0],u=n[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),s=l[0],m=l[1],f=Object(a.useState)(""),b=Object(o.a)(f,2),p=b[0],d=b[1],g=Object(a.useState)(""),v=Object(o.a)(g,2),O=v[0],j=v[1],E=Object(a.useState)(""),x=Object(o.a)(E,2),y=x[0],w=x[1],k=Object(a.useState)(""),S=Object(o.a)(k,2),C=S[0],N=S[1],T=Object(a.useState)(""),P=Object(o.a)(T,2),I=P[0],H=P[1],z=Object(a.useState)(null),A=Object(o.a)(z,2),U=A[0],L=A[1];var V=[["First Name",s,m,"text"],["Last Name",p,d,"text"],["Email",O,j,"email"],["Password",y,w,"password"],["Organisation Name",C,N,"text"],["Organisation Kind",I,H,"number"]];return r.a.createElement(Z,{marginTop:!0,white:!0},r.a.createElement(_,null,"Register Page"),r.a.createElement(se,null,"Enter details to register"),V.map((function(e,t){return n=t,a=e[0],c=e[1],u=e[2],o=e[3],r.a.createElement("div",{key:n},r.a.createElement(ue,{type:o,placeholder:a,value:c,onChange:function(e){u(e.target.value)}}));var n,a,c,u,o})),U&&r.a.createElement(se,null,"A link has been sent to your email"),c&&r.a.createElement(se,{warning:!0},c),r.a.createElement(M,{onClick:function(){(function(e,t,n,a){return""===t||!1===/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)?e("Enter valid email"):""===n||n.length<8||!1===/[a-zA-z-]/.test(n)||!1===/\d/.test(n)?e("Password should consist of letters and numbers and be at least 8 characters"):""!==a&&!1!==/[0-2]/.test(a)||e("Enter organisation kind (0-2)")})(u,O,y,I)&&(e.register(s,p,O,y,C,I).then(L(!0)),u(null))}},"Register"))}function Se(){var e=new h,t=Object(a.useContext)(s),n=t.userInfo,c=t.setUserInfo;return null===n&&e.getUserInfo().then((function(e){return e.json()})).then((function(e){c(e)})),r.a.createElement(Z,{marginTop:!0},r.a.createElement(te,null,r.a.createElement(ee,null,r.a.createElement(ce,null,n.firstName," ",n.lastName)),r.a.createElement(ee,null,"Email: ",n.email),r.a.createElement(ee,null,"Organisation name:",n.organisationName),r.a.createElement(ee,null,"Organisation kind: ",n.organisationKind)))}var Ce=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)({}),m=Object(o.a)(u,2),f=m[0],b=m[1];return r.a.createElement(R,null,r.a.createElement(l.Provider,{value:{customers:n,setCustomers:c}},r.a.createElement(s.Provider,{value:{userInfo:f,setUserInfo:b}},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/customers/:id",render:function(e){return r.a.createElement(ge,null,r.a.createElement(xe,e))}}),r.a.createElement(i.a,{path:"/home"},r.a.createElement(ge,null,r.a.createElement(we,null))),r.a.createElement(i.a,{path:"/login"},r.a.createElement(ge,null,r.a.createElement(ve,null))),r.a.createElement(i.a,{path:"/profile"},r.a.createElement(ge,null,r.a.createElement(Se,null))),r.a.createElement(i.a,{path:"/"},r.a.createElement(ge,null,r.a.createElement(ke,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe.a,null,r.a.createElement(Ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.5af6755a.chunk.js.map