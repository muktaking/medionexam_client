(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[32],{141:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(279),l=a(280),s=a(22),i=a(1),m=a(170),o=a(31),u=a(152),d=a(758),b=a.n(d);function p(){var e=Object(n.useState)(0),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(i.k)();return r.a.createElement("div",{className:"my-2"},r.a.createElement(u.d,{onClick:function(){c(a+1),l.goBack()},className:"".concat(b.a.arrow," link-hover")}))}var h=a(46),f=a(51),E=a(50),x=a(48),N=a(49),g=a(219),j=a(655),v=a(931),y=a(34),O=a(17),k=a(380),z=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(E.a)(this,(e=Object(x.a)(t)).call.apply(e,[this].concat(r)))).classes={sideNav:["flex-column","mt-4"].join(" "),sideNavLink:["text-white","p-3","mb-2"].join(" "),fa:["text-light","fa-lg","mr-3"].join(" ")},a.faIcons=[],a.menuName=[],a.navLinks=[],a.menuIntlId=[],a}return Object(N.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return Object(O.a)(O.e.student,this.props.token)&&(this.faIcons=[r.a.createElement(u.F,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.kb,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.gb,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.i,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.l,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.qb,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.R,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.nb,{size:"1.6em",className:"mr-2"})],this.menuName=["Home","Dashboard","Courses","Exams","Reports","Profile","Help","Settings"],this.menuIntlId=["db.home","btn.db","btn.courses","btn.exams","btn.reports","profile","btn.help","settings"],this.navLinks=["/","/dashboard","/courses","/exams","/reports","/profile","/help","/settings"]),Object(O.a)(O.e.mentor,this.props.token)&&(this.faIcons=[r.a.createElement(u.F,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.kb,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.S,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.qb,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.R,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.nb,{size:"1.6em",className:"mr-2"})],this.menuName=["Home","Dashboard","Question Builder","Profile","Help","Settings"],this.menuIntlId=[],this.navLinks=["/","/dashboard","/question","/profile","/help","/settings"]),Object(O.a)(O.e.moderator,this.props.token)&&(this.faIcons=[r.a.createElement(u.F,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.kb,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.q,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.j,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.S,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.t,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.qb,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.R,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.nb,{size:"1.6em",className:"mr-2"})],this.menuName=["Home","Dashboard","Category Builder","Routine Builder","Question Builder","Exam Builder","Profile","Help","Settings"],this.menuIntlId=[],this.navLinks=["/","/dashboard","/category","/routine","/question","/exambuilder","/profile","/help","/settings"]),Object(O.a)(O.e.coordinator,this.props.token)&&(this.faIcons=[r.a.createElement(u.F,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.kb,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.q,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.gb,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.j,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.S,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.t,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.h,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.qb,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.R,{size:"1.6em",className:"mr-2"}),r.a.createElement(u.nb,{size:"1.6em",className:"mr-2"})],this.menuName=["Home","Dashboard","Category Builder","Course Builder","Routine Builder","Question Builder","Exam Builder","Notification Builder","Profile","Help","Settings"],this.menuIntlId=[],this.navLinks=["/","/dashboard","/category","coursebuilder","/routine","/question","/exambuilder","/notificationbuilder","/profile","/help","/settings"]),r.a.createElement("div",{className:"px-4"},r.a.createElement(y.NavLink,{exact:!0,to:"/",className:"text-white"},r.a.createElement(j.a.Brand,{className:"text-white d-block mx-auto text-center py-3 mb-4 bottom-border"},"MediOnExam")),r.a.createElement("h3",{className:"text-white text-center mb-2"},r.a.createElement(v.a,{id:"goodDay",defaultMessage:"Good Day"})),r.a.createElement(k.a,null),r.a.createElement(g.a,{className:this.classes.sideNav},this.faIcons.map((function(t,a){return r.a.createElement(g.a.Item,{key:a},r.a.createElement(y.NavLink,{to:e.navLinks[a],className:"nav-link "+e.classes.sideNavLink+" sidebar-link",activeClassName:"current",isActive:function(e){if(e)return""!==e.url}},t,e.menuIntlId.length>1?r.a.createElement(v.a,{id:e.menuIntlId[a],defaultMessage:e.menuName[a]}):e.menuName[a]))}))))}}]),t}(n.Component),P=Object(s.b)((function(e){return{token:e.auth.token}}))(z),w=a(288),I=a(289),_=a(463),S=a(158),C=a(673),L=a(929),T=a(933),B=a(54),D=a(386),R=a.n(D),H=a(261),q=a(658),A=a(429),F=a(292);function K(e){var t=e.courses,a=Object(F.a)(),c=a.getPageNumberQueryValue,l=Object(n.useState)(c||1),s=Object(o.a)(l,2),i=s[0],m=s[1],u=Object(H.a)(t,i,6);return r.a.createElement("div",{className:"mt-3"},r.a.createElement("div",{className:"d-flex justify-content-around flex-wrap"},u.map((function(e){return r.a.createElement(q.a,{className:"mb-3 bg-dark text-white",style:{width:"350px"}},r.a.createElement(q.a.Body,null,r.a.createElement(q.a.Title,{className:"text-center",style:{fontSize:"1.4rem",fontWeight:"900"}},e.title),r.a.createElement(q.a.Text,{className:"text-center mt-2"},S().isAfter(e.endDate)?r.a.createElement(L.a,{variant:"danger",className:"p-2"},"This Course is ended"):r.a.createElement(y.Link,{to:"/exams/courses/"+e.id},r.a.createElement(A.a,{variant:"primary"},"Go to Exams")))))}))),r.a.createElement("div",{className:"d-flex justify-content-center mt-3"},r.a.createElement(R.a,{activePage:i,itemsCountPerPage:6,totalItemsCount:t&&t.length,pageRangeDisplayed:2,onChange:function(e){a.add(e),m(e)},itemClass:"page-item",linkClass:"page-link",prevPageText:"Previous",nextPageText:"Next"})))}var Q=a(294),M=a(281);function U(e){e.landing;var t=Object(s.c)(),a=Object(s.d)((function(e){return null!==e.auth.token})),c=Object(s.d)((function(e){return e.courses.loading})),l=Object(s.d)((function(e){return e.courses.courses})),i=Object(s.d)((function(e){return e.courses.coursesEnrolledByStu})),o=Object(s.d)((function(e){return e.courses.error}));Object(n.useEffect)((function(){t(Object(B.a)()),t(Object(B.e)()),a&&t(Object(B.d)())}),[t,a]);var u=l?l.filter((function(e){return null===e.price})):null,d=l?l.filter((function(e){return null!==e.price})):null;return r.a.createElement("div",null,r.a.createElement("h3",{className:"text-center heading"},"Exams Under Courses"),c&&r.a.createElement(m.a,null),o?r.a.createElement("p",{className:"text-danger"},r.a.createElement("span",null,"Courses can not be retrived.")):r.a.createElement("div",{className:"my-3 mox-custom-tabs"},r.a.createElement(C.a,{defaultActiveKey:a?"enrolled":"all"},r.a.createElement(g.a,{className:"d-flex justify-content-center"},r.a.createElement(g.a.Item,null,a?r.a.createElement(g.a.Link,{eventKey:"enrolled"},r.a.createElement("span",null,"Enrolled Courses")," ",i&&r.a.createElement(L.a,{variant:"light"},i.length)):r.a.createElement(g.a.Link,{eventKey:"all"},r.a.createElement("span",null,"All Courses"),l&&r.a.createElement(L.a,{variant:"light"},l.length))),r.a.createElement(g.a.Item,null,r.a.createElement(g.a.Link,{eventKey:"free"},r.a.createElement("span",null,"Free Courses"),l&&r.a.createElement(L.a,{variant:"light"},u.length))),r.a.createElement(g.a.Item,null,r.a.createElement(g.a.Link,{eventKey:"paid"},r.a.createElement("span",null,"Premium Courses"),l&&r.a.createElement(L.a,{variant:"light"},d.length)))),r.a.createElement(T.a.Content,null,a?r.a.createElement(T.a.Pane,{eventKey:"enrolled"},r.a.createElement(K,{courses:i})):r.a.createElement(T.a.Pane,{eventKey:"all"},r.a.createElement(K,{courses:l})),r.a.createElement(T.a.Pane,{eventKey:"free"},r.a.createElement(K,{courses:l&&l.filter((function(e){return null===e.price}))})),r.a.createElement(T.a.Pane,{eventKey:"paid"},r.a.createElement(K,{courses:l&&l.filter((function(e){return null!==e.price}))}))))))}S.extend(M),S.extend(Q);var V=a(465),G=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(52)]).then(a.bind(null,936))})),J=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(4),a.e(33),a.e(51)]).then(a.bind(null,961))})),Y=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(18)]).then(a.bind(null,950))})),Z=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(8),a.e(9),a.e(38)]).then(a.bind(null,962))})),W=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(3),a.e(6),a.e(22)]).then(a.bind(null,937))})),X=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(23)]).then(a.bind(null,957))})),$=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(3),a.e(11),a.e(36)]).then(a.bind(null,938))})),ee=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(21)]).then(a.bind(null,389))})),te=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(20)]).then(a.bind(null,474))})),ae=(Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(6),a.e(28),a.e(44)]).then(a.bind(null,726))})),Object(n.lazy)((function(){return Promise.all([a.e(66),a.e(54)]).then(a.bind(null,939))}))),ne=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(3),a.e(8),a.e(30)]).then(a.bind(null,958))})),re=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(6),a.e(9),a.e(13),a.e(39)]).then(a.bind(null,954))})),ce=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(16)]).then(a.bind(null,951))})),le=Object(n.lazy)((function(){return a.e(45).then(a.bind(null,940))})),se=Object(n.lazy)((function(){return Promise.all([a.e(4),a.e(6),a.e(8),a.e(9),a.e(24)]).then(a.bind(null,955))})),ie=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(53)]).then(a.bind(null,941))})),me=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(3),a.e(11),a.e(35)]).then(a.bind(null,963))})),oe=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(12),a.e(41)]).then(a.bind(null,956))})),ue=Object(n.lazy)((function(){return Promise.all([a.e(6),a.e(9),a.e(25),a.e(64)]).then(a.bind(null,942))})),de=Object(n.lazy)((function(){return a.e(37).then(a.bind(null,964))})),be=Object(n.lazy)((function(){return a.e(43).then(a.bind(null,943))})),pe=Object(n.lazy)((function(){return Promise.all([a.e(59),a.e(46)]).then(a.bind(null,965))})),he=Object(n.lazy)((function(){return Promise.all([a.e(6),a.e(62)]).then(a.bind(null,944))})),fe=Object(n.lazy)((function(){return a.e(65).then(a.bind(null,945))})),Ee=Object(n.lazy)((function(){return Promise.all([a.e(1),a.e(2),a.e(3),a.e(8),a.e(61)]).then(a.bind(null,959))})),xe=Object(n.lazy)((function(){return a.e(55).then(a.bind(null,946))})),Ne=/(\/exams\/(free\/)?\d+(_\d+)?)/g;t.default=Object(s.b)((function(e){return{token:e.auth.token,isAuthenticated:null!==e.auth.token}}))((function(e){var t=Object(i.k)(),a=e.match.url.split("/",2)[1],s=t.location.pathname;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null),r.a.createElement("div",null,r.a.createElement(l.a,{className:"no-gutters"},r.a.createElement(c.a,{xl:2,lg:3,md:4,className:"sidebar d-print-none"},r.a.createElement(P,null)),r.a.createElement(c.a,{xl:10,lg:9,md:8,sm:12},r.a.createElement("div",{className:"mb-5"},r.a.createElement(I.a,{pageName:a,className:"d-print-none"}),r.a.createElement("div",{className:"px-3 ml-md-4",style:{marginTop:"70px"}},r.a.createElement(n.Suspense,{fallback:r.a.createElement(m.a,null)},-1===s.search(Ne)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{className:"d-print-none"}),r.a.createElement(V.a,null)),r.a.createElement(i.d,{path:"/dashboard",exact:!0,component:Y}),r.a.createElement(i.d,{path:"/courses",exact:!0,component:Z}),r.a.createElement(i.d,{path:"/courses/:id",exact:!0,component:W}),r.a.createElement(i.d,{path:"/coursebuilder",exact:!0,component:X}),r.a.createElement(i.d,{path:"/profile",exact:!0,component:G}),r.a.createElement(i.d,{path:"/category",exact:!0,component:J}),r.a.createElement(i.d,{path:"/routine",exact:!0,component:$}),r.a.createElement(i.d,{path:"/question",exact:!0,component:ce}),r.a.createElement(i.d,{path:"/exambuilder",exact:!0,component:ee}),r.a.createElement(i.d,{path:"/examedit",exact:!0,component:te}),r.a.createElement(i.d,{path:"/exams/:id",exact:!0,render:function(e){return r.a.createElement(re,Object.assign({free:!1},e))}}),r.a.createElement(i.d,{path:"/exams",exact:!0,component:(e.isAuthenticated&&Object(O.a)(O.e.student,e.token),U)}),r.a.createElement(i.d,{path:"/exams/courses/:id",exact:!0,component:ne}),r.a.createElement(i.d,{path:"/exams/category/:id",exact:!0,component:ae}),r.a.createElement(i.d,{path:"/exams/free/:id",exact:!0,render:function(e){return r.a.createElement(re,Object.assign({free:!0},e))}}),r.a.createElement(i.d,{path:"/result",exact:!0,component:se}),r.a.createElement(i.d,{path:"/result/rank/:id",exact:!0,component:le}),r.a.createElement(i.d,{path:"/reports",exact:!0,component:oe}),r.a.createElement(i.d,{path:"/reports/actions",exact:!0,component:ue}),r.a.createElement(i.d,{path:"/settings",exact:!0,component:ie}),r.a.createElement(i.d,{path:"/help",exact:!0,component:de}),r.a.createElement(i.d,{path:"/payment",exact:!0,component:e.isAuthenticated&&Object(O.a)(O.e.coordinator,e.token)?pe:be}),r.a.createElement(i.d,{path:"/paymentfaq",exact:!0,component:he}),r.a.createElement(i.d,{path:"/notificationbuilder",exact:!0,component:Ee}),r.a.createElement(i.d,{path:"/notification",exact:!0,component:xe}),r.a.createElement(i.d,{path:"/print",exact:!0,component:me}),r.a.createElement(i.d,{path:"/terms",exact:!0,component:fe}))),r.a.createElement(_.a,null))))))}))},170:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(0),r=a.n(n),c=a(395),l=a.n(c);function s(){return r.a.createElement("div",{className:l.a.content},r.a.createElement("span",{className:l.a.loader}))}},261:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(432),r=a.n(n);function c(e,t,a){var n=(t-1)*a;return r()(e).slice(n).take(a).value()}},291:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(28),r=a.n(n),c=a(0),l=a.n(c),s=a(61),i=a(22),m=a(18);function o(e){var t=e.useOneTap,a=void 0!==t&&t,n=Object(i.c)();return l.a.createElement("div",{className:"d-flex justify-content-center"},l.a.createElement(s.a,{onSuccess:function(e){!function(e,t){r.a.post("https://backend.medionexam.com/auth/google",{idToken:e.credential}).then((function(e){t(Object(m.f)(e.data));var a=new Date((new Date).getTime()+1e3*e.data.expireIn);localStorage.setItem("jwtToken",e.data.accessToken),localStorage.setItem("expirationDate",a),localStorage.setItem("userId",e.data.id),localStorage.setItem("socialAvatar",e.data.avatar),t(Object(m.h)(e.data.expireIn))})).catch((function(e){console.log(e),t(Object(m.c)(e.message))}))}(e,n)},onError:function(e){console.log(e),function(e,t){t(Object(m.c)(e.error))}(e,n)},theme:"outline",useOneTap:a}))}},292:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return b}));var n=a(46),r=a(51),c=a(50),l=a(48),s=a(49),i=a(0),m=a.n(i),o=a(1),u=a(293);function d(){var e=Object(u.a)().get("pageNumber"),t=Object(o.k)(),a=Object(o.l)();return{getPageNumberQueryValue:e,add:function(e){if(a.search.includes("pageNumber=")){var n=a.search.replace(/pageNumber=\d+/,"pageNumber=".concat(e));t.replace(a.pathname+n)}else a.search?t.replace("".concat(a.pathname+a.search,"&pageNumber=").concat(e)):t.replace("".concat(a.pathname,"?pageNumber=").concat(e))}}}function b(e){var t=function(t){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(s.a)(a,t),Object(r.a)(a,[{key:"render",value:function(){var t=this.props,a=t.history,n=t.location,r=new URLSearchParams(n.search,[n.search]).get("pageNumber");return m.a.createElement(e,Object.assign({getPageNumberQueryValue:r,addPageNumberQueryValue:function(e){if(n.search.includes("pageNumber=")){var t=n.search.replace(/pageNumber=\d+/,"pageNumber=".concat(e));a.replace(n.pathname+t)}else n.search?a.replace("".concat(n.pathname+n.search,"&pageNumber=").concat(e)):a.replace("".concat(n.pathname,"?pageNumber=").concat(e))}},this.props))}}]),a}(i.Component);return Object(o.o)(t)}},293:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),r=a.n(n),c=a(1);function l(){var e=Object(c.l)().search;return r.a.useMemo((function(){return new URLSearchParams(e)}),[e])}},395:function(e,t,a){e.exports={content:"circleLoader_content__3D3cc",loader:"circleLoader_loader__1gZEe",writeDown:"circleLoader_writeDown__2oGN1"}},463:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(31),r=a(0),c=a.n(r),l=a(152),s=a(464),i=a.n(s);function m(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],s=t[1];Object(r.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>400?s(!0):s(!1)}))}),[]);return c.a.createElement("div",{className:i.a.topToBtm},a&&c.a.createElement(l.c,{className:i.a.iconPosition+" "+i.a.iconStyle,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}}))}},464:function(e,t,a){e.exports={topToBtm:"scrollToTop_topToBtm__3-3uk",iconPosition:"scrollToTop_iconPosition__3XUjB",iconStyle:"scrollToTop_iconStyle__1_ayY",movebtn:"scrollToTop_movebtn__1ObLZ"}},465:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n),c=a(152),l=a(22),s=a(1),i=a(34),m=a(67),o=a(291);function u(){var e=Object(l.d)((function(e){return null!==e.auth.token})),t=Object(n.useContext)(m.a),a=t.stickyState,u=t.setStickyState,d=Object(s.l)(),b=[{title:"Home",icon:r.a.createElement(c.F,{className:"mr-1",size:"1.6rem"}),link:"/"},{title:e?"Dashboard":"Courses",icon:e?r.a.createElement(c.kb,{className:"mr-1",size:"1.6rem"}):r.a.createElement(c.gb,{className:"mr-1",size:"1.6rem"}),link:e?"/dashboard":"/courses"},{title:"Exams",icon:r.a.createElement(c.i,{className:"mr-1",size:"1.6rem"}),link:"/exams"},{title:"Help",icon:r.a.createElement(c.R,{className:"mr-1",size:"1.6rem"}),link:"/help"}];return r.a.createElement("div",{className:"bg-dark text-white",style:{position:"fixed",bottom:0,left:0,zIndex:20,width:"100%"}},a&&!e&&r.a.createElement("div",{className:"mb-2 pt-2"},r.a.createElement("p",{className:"text-center"},"Dear User, Please sign in."),r.a.createElement("div",{className:"d-flex justify-content-center text-center"},r.a.createElement(o.a,null),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center bg-danger ml-2",style:{width:"2rem"}},r.a.createElement(c.mb,{onClick:function(){u(!a)},color:"white",size:"1.4rem",className:"shadow",style:{cursor:"pointer"}})))),r.a.createElement("div",{className:"hideInMd border-top border-light"},r.a.createElement("div",{className:"py-2 d-flex flex-wrap justify-content-around align-items-center"},b.map((function(e,t){return r.a.createElement(i.Link,{key:e+t,to:e.link,className:"text-white ".concat(d.pathname===e.link&&"activeLink")},r.a.createElement("div",{className:"mr-2 d-flex justify-content-center align-items-center"},e.icon))})),r.a.createElement("div",{className:"mr-2 d-flex justify-content-center align-items-center"},r.a.createElement("a",{href:"https://api.whatsapp.com/send?phone=".concat(8801521500642,"&text=").concat("Hello, MediOnExam"),target:"_blank",rel:"noreferrer",className:"text-white d-flex justify-content-center align-items-center",style:{backgroundColor:"#25d366",width:"30px",height:"30px",borderRadius:"30px",boxShadow:"2px 2px 3px #999"}},r.a.createElement(c.tb,{size:"1.4rem"}))))))}},758:function(e,t,a){e.exports={arrow:"domHistory_arrow__2RFIg"}}}]);
//# sourceMappingURL=32.e9f1f124.chunk.js.map