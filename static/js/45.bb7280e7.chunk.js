(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[45],{337:function(e,a,t){},449:function(e,a,t){"use strict";var s=t(0),n=t.n(s),r=t(165),c=t(435),l=t(707),o=t(22),i=t(32),m=t(632),d=t(633),u={position:"fixed",top:"0px",left:"0px",width:"100%",zIndex:"1000"};a.a=Object(o.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))((function(e){var a=Object(l.a)(),t=[a.formatMessage({id:"btn.home",defaultMessage:"home"}),a.formatMessage({id:"btn.contact",defaultMessage:"contact"})],s=e.isAuthenticated?[a.formatMessage({id:"btn.db",defaultMessage:"dashboard"}),a.formatMessage({id:"btn.courses",defaultMessage:"courses"}),a.formatMessage({id:"btn.exams",defaultMessage:"exams"}),a.formatMessage({id:"btn.help",defaultMessage:"help"}),a.formatMessage({id:"btn.logout",defaultMessage:"logout"})]:[a.formatMessage({id:"btn.courses",defaultMessage:"courses"}),a.formatMessage({id:"btn.exams",defaultMessage:"exams"}),a.formatMessage({id:"btn.help",defaultMessage:"help"}),a.formatMessage({id:"btn.signup",defaultMessage:"signup"}),a.formatMessage({id:"btn.login",defaultMessage:"login"})],o=e.isAuthenticated?["dashboard","courses","exams","help","logout"]:["courses","exams","help","signup","login"];return n.a.createElement("div",{style:u},n.a.createElement(c.a,{bg:"dark",variant:"dark",expand:"md"},n.a.createElement(i.Link,{to:"/",className:"navbar-brand"},"MediOnExam"),n.a.createElement(c.a.Toggle,{"aria-controls":"navbarResponsive"}),n.a.createElement(c.a.Collapse,{id:"navbarResponsive"},n.a.createElement(r.a,{className:"ml-auto"},["home","contact"].map((function(a,s){return n.a.createElement(r.a.Item,{key:a,as:"li",className:"mr-3"},e.isLanding?n.a.createElement(d.Link,{activeClass:"active",to:a,spy:!0,smooth:!0,offset:-100,duration:500,href:"home"===a?"/":"/#".concat(a),className:"nav-link"},t[s]):n.a.createElement(m.HashLink,{to:"/#"+a,className:"nav-link",activeClassName:"active"},t[s]))})),o.map((function(e,a){return n.a.createElement(r.a.Item,{key:e,as:"li",className:"mr-3"},n.a.createElement(i.NavLink,{to:{pathname:"/"+e},className:"nav-link"},s[a]))}))))))}))},921:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return E}));var s=t(133),n=t(5),r=t(28),c=t.n(r),l=t(0),o=t.n(l),i=t(647),m=t(646),d=t(184),u=t(378),p=t(732),g=t(17),b=t(185),f=t.n(b),h=(t(337),t(449));function E(e){var a=Object(n.a)({},e),t=Object(g.m)().id,r=Object(l.useState)(null),b=Object(s.a)(r,2),E=b[0],v=b[1],w=Object(l.useState)(null),M=Object(s.a)(w,2),k=M[0],x=M[1],N=Object(l.useState)(""),P=Object(s.a)(N,2),y=P[0],O=P[1],j=Object(l.useState)("danger"),R=Object(s.a)(j,2),C=R[0],L=R[1],T=function(e){var a=e.target.name,t=e.target.value,s="";switch(a){case"password":s+=f.a.matches(t,/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/)?"":"Password should be minimum 6 characters and contain atleast one capital and lowercase alpha, neumeric value",v(t);break;case"repeatPassword":s+=t===E?"":"Repeat Password is not matched ",x(t)}O(s)};return o.a.createElement("div",{className:"registration"},o.a.createElement(h.a,{isLanding:!1}),o.a.createElement("div",{className:"landing"},o.a.createElement("div",{className:"home-inner"})),o.a.createElement("div",{className:"caption text-center"},o.a.createElement("h1",null,"Reset Password"),o.a.createElement("div",{className:"heading-underline"}),o.a.createElement("div",null,o.a.createElement(i.a,{className:"mb-3"},o.a.createElement(i.a.Prepend,null,o.a.createElement(i.a.Text,{id:"password"},o.a.createElement(p.a,null))),o.a.createElement(m.a,{placeholder:"Password",type:"password",name:"password","aria-label":"Password","aria-describedby":"password",onChange:T})),o.a.createElement(i.a,{className:"mb-3"},o.a.createElement(i.a.Prepend,null,o.a.createElement(i.a.Text,{id:"repeatPassword"},o.a.createElement(p.a,null))),o.a.createElement(m.a,{placeholder:"Repeat Password",type:"password",name:"repeatPassword","aria-label":"RepeatPassword","aria-describedby":"repeatPassword",onChange:T})),""!==y&&o.a.createElement(d.a,{className:"my-2",variant:C}," ",y," "),o.a.createElement(u.a,{variant:"primary",onClick:function(){E?E===k?y||c.a.post("https://backend.medionexam.com/auth/reset/"+t,{password:E,token:t}).then((function(e){O(e.data.message+" . Redirecting to login page..."),L("success"),setTimeout((function(){a.history.push({pathname:"/login"})}),3e3)})).catch((function(e){O("Reset can not be done.Token may be expired"),L("danger")})):O("Two Password fields must be matched"):O("Password can not be empty")}},"Submit"))))}}}]);
//# sourceMappingURL=45.bb7280e7.chunk.js.map