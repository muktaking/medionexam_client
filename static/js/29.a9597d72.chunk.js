(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[29],{151:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t(0),r=t.n(n),l=t(321),s=t.n(l);function c(){return r.a.createElement("div",{className:s.a.content},r.a.createElement("span",{className:s.a.loader}))}},198:function(e,a,t){"use strict";t.d(a,"f",(function(){return n})),t.d(a,"c",(function(){return r})),t.d(a,"a",(function(){return l})),t.d(a,"e",(function(){return s})),t.d(a,"d",(function(){return c})),t.d(a,"b",(function(){return m}));var n=[{name:"Residency (MD/MS)",id:2,courseIds:[1,2,3,5],imageName:"residency.jpg"},{name:"FCPS",id:1,courseIds:[2,3,4],imageName:"bcps.jpg"},{name:"Diploma",id:"3",courseIds:[2,3],imageName:"diploma.jpg"}],r={all:0,basic:1,medicine:2,surgery:3,gynecology:4,paediatrics:5},l={All:0,Fellowship:1,Residency:2,Diploma:3,MembershipOfRoyalColledge:4,Usmle:5,Others:6};function s(e){switch(e){case 1:return"FCPS";case 2:return"Residency (MD/MS)";case 3:return"Diploma";case 4:return"MRCP/ MRCS";case 5:return"USMLE";case 6:return"Others";case 0:return"Miscellaneous";default:return"Null"}}function c(e){switch(e){case 1:return"Basic Science & Paraclinical Science";case 2:return"Medicine";case 3:return"Surgery";case 4:return"Gynecology";case 5:return"Paediatrics";case 0:return"Miscellaneous";default:return"Null"}}function m(e){switch(e){case 0:return"Assignment";case 1:return"Weekly";case 2:return"Monthly";case 3:return"Assesment";case 4:return"Term";case 5:return"Test";case 6:return"Final";default:return"Null"}}},200:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(335),r=t.n(n);function l(e,a,t){var n=(a-1)*t;return r()(e).slice(n).take(t).value()}},321:function(e,a,t){e.exports={content:"circleLoader_content__3D3cc",loader:"circleLoader_loader__1gZEe",rotate:"circleLoader_rotate__u3nN8"}},369:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(132),r=t(0),l=t.n(r),s=t(135),c=t(370),m=t.n(c);function i(){var e=Object(r.useState)(!1),a=Object(n.a)(e,2),t=a[0],c=a[1];Object(r.useEffect)((function(){window.addEventListener("scroll",(function(){window.scrollY>400?c(!0):c(!1)}))}),[]);return l.a.createElement("div",{className:m.a.topToBtm},t&&l.a.createElement(s.c,{className:m.a.iconPosition+" "+m.a.iconStyle,onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}}))}},370:function(e,a,t){e.exports={topToBtm:"scrollToTop_topToBtm__3-3uk",iconPosition:"scrollToTop_iconPosition__3XUjB",iconStyle:"scrollToTop_iconStyle__1_ayY",movebtn:"scrollToTop_movebtn__1ObLZ"}},404:function(e,a,t){"use strict";var n=t(132),r=t(28),l=t.n(r),s=t(0),c=t.n(s),m=t(705),i=t(500),o=t(290),u=t(725),d=t(420),E=t(22),b=t(57),p=t(16),h=t(150),f=t(198);function N(e){var a=e.firstName,t=e.lastName,n=e.email,r=e.mobile,l=e.userFrom,s=e.address,m=e.institution,i=e.faculty;return(c.a.createElement("div",{className:"card mb-3"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3"},c.a.createElement("h6",{className:"mb-0"},"Full Name")),c.a.createElement("div",{className:"col-sm-9 text-secondary"},a+" "+t)),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3"},c.a.createElement("h6",{className:"mb-0"},"Email")),c.a.createElement("div",{className:"col-sm-9 text-secondary"},n)),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3"},c.a.createElement("h6",{className:"mb-0"},"Mobile")),c.a.createElement("div",{className:"col-sm-9 text-secondary"},r)),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3"},c.a.createElement("h6",{className:"mb-0"},"User From")),c.a.createElement("div",{className:"col-sm-9 text-secondary"},h(l).format("DD, MMM YYYY"))),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3"},c.a.createElement("h6",{className:"mb-0"},"Institution")),c.a.createElement("div",{className:"col-sm-9 text-secondary"},m)),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3"},c.a.createElement("h6",{className:"mb-0"},"Faculty")),c.a.createElement("div",{className:"col-sm-9 text-secondary"},Object(f.d)(i))),c.a.createElement("hr",null),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-sm-3"},c.a.createElement("h6",{className:"mb-0"},"Address")),c.a.createElement("div",{className:"col-sm-9 text-secondary"},s)))))}var v=t(748),g=t(354);function x(e){var a=e.user,t=e.updater,r=e.show,i=e.handleClose,u=Object(s.useState)(null),d=Object(n.a)(u,2),E=d[0],b=d[1],p=Object(s.useRef)(),h=Object(s.useRef)(),f=Object(s.useRef)(),N=Object(s.useRef)(),x=Object(s.useRef)(),y=Object(s.useRef)(),z=Object(s.useRef)(),j=Object(s.useRef)(),k=Object(s.useRef)();return c.a.createElement("div",null,c.a.createElement(v.a,{show:E,onClose:function(){b(null)},style:{position:"absolute",top:"20px",left:"10px",zIndex:"11111"}},c.a.createElement(v.a.Header,null,c.a.createElement("strong",{className:"mr-auto"},"Server Response")),c.a.createElement(v.a.Body,null,E)),c.a.createElement(m.a,{show:r,onHide:i},c.a.createElement(m.a.Header,{closeButton:!0},c.a.createElement(m.a.Title,null,"Edit Your Profile")),c.a.createElement(m.a.Body,null,c.a.createElement(g.a,null,c.a.createElement(g.a.Group,{controlId:"formBasicFirstName"},c.a.createElement(g.a.Label,null,"FirstName"),c.a.createElement(g.a.Control,{ref:p,type:"text",placeholder:"FirstName",defaultValue:a.firstName})),c.a.createElement(g.a.Group,{controlId:"formBasicLastName"},c.a.createElement(g.a.Label,null,"LastName"),c.a.createElement(g.a.Control,{ref:h,type:"text",placeholder:"LastName",defaultValue:a.lastName})),c.a.createElement(g.a.Group,{controlId:"formBasicUserName"},c.a.createElement(g.a.Label,null,"UserName"),c.a.createElement(g.a.Control,{ref:f,type:"text",placeholder:"UserName",defaultValue:a.userName})),c.a.createElement(g.a.Group,{controlId:"formBasicEmail"},c.a.createElement(g.a.Label,null,"Email address"),c.a.createElement(g.a.Control,{ref:N,type:"email",placeholder:"Enter email",defaultValue:a.email,disabled:!0}),c.a.createElement(g.a.Text,{className:"text-muted"},"To change email address please contact with admin.")),c.a.createElement(g.a.Group,{controlId:"formBasicMobile"},c.a.createElement(g.a.Label,null,"Mobile(+88)"),c.a.createElement(g.a.Control,{ref:x,type:"text",placeholder:"mobile",defaultValue:a.mobile})),c.a.createElement(g.a.Group,null,c.a.createElement(g.a.Label,null,"Faculty"),c.a.createElement(g.a.Control,{ref:y,as:"select",name:"faculty",defaultValue:a.faculty},c.a.createElement("option",{value:"0"},"Basic"),c.a.createElement("option",{value:"1"},"Medicine"),c.a.createElement("option",{value:"2"},"Surgery"),c.a.createElement("option",{value:"3"},"Gynecology"),c.a.createElement("option",{value:"4"},"Paediatrics"))),c.a.createElement(g.a.Group,{controlId:"formBasicInstitution"},c.a.createElement(g.a.Label,null,"Institution"),c.a.createElement(g.a.Control,{ref:j,type:"text",placeholder:"Institution",defaultValue:a.institution})),c.a.createElement(g.a.Group,{controlId:"formBasicAddress"},c.a.createElement(g.a.Label,null,"Address"),c.a.createElement(g.a.Control,{ref:k,type:"text",placeholder:"Address",defaultValue:a.address})),c.a.createElement(g.a.Group,{controlId:"formGridState"},c.a.createElement(g.a.Label,null,"Gender"),c.a.createElement(g.a.Control,{ref:z,name:"gender",as:"select",defaultValue:a.gender},c.a.createElement("option",{value:"male"},"Male"),c.a.createElement("option",{value:"female"},"Female"))))),c.a.createElement(m.a.Footer,null,c.a.createElement(o.a,{variant:"secondary",onClick:i},"Close"),c.a.createElement(o.a,{variant:"primary",onClick:function(e){e.preventDefault();var n={id:a.id,firstName:p.current.value,lastName:h.current.value,userName:f.current.value,email:N.current.value,mobile:x.current.value,faculty:y.current.value,institution:j.current.value,address:k.current.value,gender:z.current.value};l.a.put("https://backend.medionexam.com/users/"+a.id,n).then((function(e){b(e.data.message),t(),i()})).catch((function(e){console.log(e),b(e.message)}))}},"Save Changes"))))}t.d(a,"a",(function(){return z}));var y=["boy","boy1","girl","girl1","hacker","man","woman","woman1","woman2","soccer-player","bear"];function z(e){var a=e.isProfile,t=e.size,r=void 0===t?"100":t,h=Object(E.c)(),f=Object(E.d)((function(e){return e.user})),v=Object(s.useState)(!1),g=Object(n.a)(v,2),z=g[0],j=g[1],k=Object(s.useState)(!1),O=Object(n.a)(k,2),I=O[0],L=O[1],C=Object(s.useState)(f.avatar),w=Object(n.a)(C,2),B=w[0],P=w[1],M=function(){return j(!1)};return c.a.createElement("div",null,c.a.createElement(x,{user:f,updater:function(){h(Object(b.b)())},show:I,handleClose:function(){return L(!1)}}),c.a.createElement(m.a,{show:z,onHide:M},c.a.createElement(m.a.Header,{closeButton:!0},c.a.createElement(m.a.Title,null,"Pick Your desired avatar")),c.a.createElement(m.a.Body,null,c.a.createElement("div",null,y.map((function(e,a){return c.a.createElement(i.a,{key:a,thumbnail:!0,src:"/assets/image/avatar/"+e+".png",roundedCircle:!0,className:"mb-2 mr-2 "+(B===e&&"bg-primary p-2"),style:{width:"64px",height:"64px",cursor:"pointer"},onClick:function(){P(e)}})})))),c.a.createElement(m.a.Footer,null,c.a.createElement(o.a,{variant:"secondary",onClick:M},"Close"),c.a.createElement(o.a,{variant:"primary",onClick:function(){setTimeout(M,500),l.a.post("https://backend.medionexam.com/users/avatar/"+B).then((function(e){h(Object(b.b)())})).catch((function(e){console.log(e)}))}},"Save Changes"))),c.a.createElement("div",{className:"d-flex flex-column align-items-center text-center mb-3"+(a?"":" bottom-border")},c.a.createElement("div",null,c.a.createElement("img",{src:f.avatar&&f.avatar.includes(".")?f.avatar:"/assets/image/avatar/"+(f.avatar?f.avatar:"boy")+".png",alt:"Avatar",className:"rounded-circle",width:r,height:r}),a&&c.a.createElement(d.a,{size:"1.7rem",style:{cursor:"pointer"},onClick:function(){return j(!0)}})),c.a.createElement("div",{className:a?"mt-3":"mt-3 text-white"},c.a.createElement("h4",null,f.userName),c.a.createElement("p",{className:"mb-1"},Object(p.f)(f.role)),c.a.createElement("p",{className:"font-size-sm"},f.address),c.a.createElement("p",{className:a?"lead":"text-white lead"},f.id&&c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"User ID No. ")," ",c.a.createElement(u.a,{variant:"warning",className:"p-1"},f.id))))),a&&c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{size:"1.7rem",style:{cursor:"pointer"},onClick:function(){return L(!0)},className:"mb-2 ml-3"}),c.a.createElement(N,{firstName:f.firstName,lastName:f.lastName,email:f.email,userFrom:f.userFrom,mobile:f.mobile,address:f.address,institution:f.institution,faculty:f.faculty})))}},517:function(e,a,t){},518:function(e,a,t){e.exports={arrow:"domHistory_arrow__2RFIg"}},749:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(173),s=t(417),c=t(215),m=t(501),i=t(22),o=t(17),u=(t(517),t(151)),d=t(132),E=t(135),b=t(518),p=t.n(b),h=/(\/exams\/\d+_\d+)|(\/dashboard)/g;function f(){var e=Object(n.useState)(0),a=Object(d.a)(e,2),t=a[0],l=a[1],s=Object(o.k)();return-1===s.location.pathname.search(h)&&r.a.createElement("div",{className:"my-2"},r.a.createElement(E.d,{onClick:function(){l(t+1),s.goBack()},className:"".concat(p.a.arrow," link-hover")}))}var N=t(42),v=t(48),g=t(47),x=t(44),y=t(45),z=t(167),j=t(315),k=t(498),O=t(32),I=t(16),L=t(404),C=function(e){function a(){var e,t;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(x.a)(a)).call.apply(e,[this].concat(r)))).classes={sideNav:["flex-column","mt-4"].join(" "),sideNavLink:["text-white","p-3","mb-2"].join(" "),fa:["text-light","fa-lg","mr-3"].join(" ")},t.faIcons=[],t.menuName=[],t.navLinks=[],t.menuIntlId=[],t}return Object(y.a)(a,e),Object(v.a)(a,[{key:"render",value:function(){var e=this;return Object(I.a)(I.e.student,this.props.token)&&(this.faIcons=[r.a.createElement(E.z,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.p,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.h,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.k,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.eb,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.M,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.cb,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Courses","Exams","Reports","Profile","Help","Settings"],this.menuIntlId=["btn.db","btn.courses","btn.exams","btn.reports","profile","btn.help","settings"],this.navLinks=["/dashboard","/courses","/exams","/reports","/profile","/help","/settings"]),Object(I.a)(I.e.mentor,this.props.token)&&(this.faIcons=[r.a.createElement(E.z,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.N,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.eb,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.M,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.cb,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Question Builder","Profile","Help","Settings"],this.menuIntlId=[],this.navLinks=["/dashboard","/question","/profile","/help","/settings"]),Object(I.a)(I.e.moderator,this.props.token)&&(this.faIcons=[r.a.createElement(E.z,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.o,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.i,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.N,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.q,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.eb,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.M,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.cb,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Category Builder","Routine Builder","Question Builder","Exam Builder","Profile","Help","Settings"],this.menuIntlId=[],this.navLinks=["/dashboard","/category","/routine","/question","/exambuilder","/profile","/help","/settings"]),Object(I.a)(I.e.coordinator,this.props.token)&&(this.faIcons=[r.a.createElement(E.z,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.o,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.p,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.i,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.N,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.q,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.g,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.eb,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.M,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.cb,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Category Builder","Course Builder","Routine Builder","Question Builder","Exam Builder","Notification Builder","Profile","Help","Settings"],this.menuIntlId=[],this.navLinks=["/dashboard","/category","coursebuilder","/routine","/question","/exambuilder","/notificationbuilder","/profile","/help","/settings"]),r.a.createElement("div",{className:"px-4"},r.a.createElement(O.NavLink,{exact:!0,to:"/",className:"text-white"},r.a.createElement(j.a.Brand,{className:"text-white d-block mx-auto text-center py-3 mb-4 bottom-border"},"MediOnExam")),r.a.createElement("h3",{className:"text-white text-center mb-2"},r.a.createElement(k.a,{id:"goodDay",defaultMessage:"Good Day"})),r.a.createElement(L.a,null),r.a.createElement(z.a,{className:this.classes.sideNav},this.faIcons.map((function(a,t){return r.a.createElement(z.a.Item,{key:t},r.a.createElement(O.NavLink,{to:e.navLinks[t],className:"nav-link "+e.classes.sideNavLink+" sidebar-link",activeClassName:"current"},a,e.menuIntlId.length>1?r.a.createElement(k.a,{id:e.menuIntlId[t],defaultMessage:e.menuName[t]}):e.menuName[t]))}))))}}]),a}(n.Component),w=Object(i.b)((function(e){return{token:e.auth.token}}))(C),B=t(725),P=t(25),M={position:"absolute",fontSize:".6rem",marginTop:"-.3rem"};function S(){var e=Object(i.c)(),a=Object(i.d)((function(e){return e.notification.freshNoti}));return Object(n.useEffect)((function(){e(Object(P.c)())}),[e]),r.a.createElement(r.a.Fragment,null,a.length>0&&r.a.createElement(B.a,{variant:"danger",style:M},a.length))}var _=t(63),F=t(57),T=function(e){function a(){var e,t;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(x.a)(a)).call.apply(e,[this].concat(r)))).classes={sideNav:["flex-column","mt-2"].join(" "),sideNavLink:["text-white","p-1","mb-2"].join(" "),fa:["text-light","fa-lg","mr-3"].join(" ")},t.faIcons=[],t.menuName=[],t.navLinks=[],t.menuIntlId=[],t}return Object(y.a)(a,e),Object(v.a)(a,[{key:"componentDidMount",value:function(){this.props.onGetUserLoader(),this.props.onUserExamStatLoader()}},{key:"render",value:function(){var e=this;return this.faIcons=[r.a.createElement(E.z,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.p,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.J,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.eb,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.eb,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.M,{size:"1.6em",className:"mr-2"})],this.menuName=["Home","Courses","Exams","Signup","Login","Help"],this.menuIntlId=["btn.home","btn.courses","btn.exams","btn.signup","btn.login","btn.help"],this.navLinks=["/","/courses","/exams","/signup","/login","/help"],Object(I.a)(I.e.student,this.props.token)&&(this.faIcons=[r.a.createElement(E.z,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.p,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.h,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.k,{size:"1.6em",className:"mr-2"}),r.a.createElement("span",{className:"mr-2"},r.a.createElement(E.g,{size:"1.6em"}),r.a.createElement(S,null)),r.a.createElement(E.eb,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.M,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.cb,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Courses","Exams","Reports","Notification","Profile","Help","Settings"],this.menuIntlId=["btn.db","btn.courses","btn.exams","btn.reports","btn.noti","profile","btn.help","settings"],this.navLinks=["/dashboard","/courses","/exams","/reports","/notification","/profile","/help","/settings"]),Object(I.a)(I.e.mentor,this.props.token)&&(this.faIcons=[r.a.createElement(E.z,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.N,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.J,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.eb,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.M,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.cb,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Question","Exam Builder","Profile","Settings"],this.menuIntlId=[],this.navLinks=["/dashboard","/question","/exambuilder","/profile","/settings"]),Object(I.a)(I.e.moderator,this.props.token)&&(this.faIcons=[r.a.createElement(E.z,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.o,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.i,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.N,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.q,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.eb,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.M,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.cb,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Category Builder","Routine Builder","Question Builder","Exam Builder","Profile","Help","Settings"],this.menuIntlId=[],this.navLinks=["/dashboard","/category","/routine","/question","/exambuilder","/profile","/help","/settings"]),Object(I.a)(I.e.coordinator,this.props.token)&&(this.faIcons=[r.a.createElement(E.z,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.o,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.p,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.i,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.N,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.q,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.o,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.eb,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.M,{size:"1.6em",className:"mr-2"}),r.a.createElement(E.cb,{size:"1.6em",className:"mr-2"})],this.menuName=["Dashboard","Category Builder","Course Builder","Routine Builder","Question Builder","Exam Builder","Exam Edit","Profile","Help","Settings"],this.menuIntlId=[],this.navLinks=["/dashboard","/category","coursebuilder","/routine","/question","/exambuilder","/examedit","/profile","/help","/settings"]),r.a.createElement("div",{style:D},r.a.createElement(L.a,null),r.a.createElement(z.a,{className:this.classes.sideNav},this.faIcons.map((function(a,t){return r.a.createElement(z.a.Item,{key:t},r.a.createElement(O.NavLink,{exact:!0,to:e.navLinks[t],className:"nav-link "+e.classes.sideNavLink+" sidebar-link",activeClassName:"current"},a,e.menuIntlId.length>1?r.a.createElement(k.a,{id:e.menuIntlId[t],defaultMessage:e.menuName[t]}):e.menuName[t]))})),r.a.createElement("div",{className:"hideInMd"},this.props.token?r.a.createElement(z.a.Item,{className:"ml-md-auto"},r.a.createElement(O.NavLink,{to:{pathname:"/logout"},className:"nav-link"},r.a.createElement(E.X,{className:"text-danger"}))):r.a.createElement(r.a.Fragment,null))))}}]),a}(n.Component),R=Object(i.b)((function(e){return{token:e.auth.token,user:e.user}}),(function(e){return{onGetUserLoader:function(){return e(Object(F.b)())},onUserExamStatLoader:function(){return e(_.b)}}}))(T),D={fontSize:"14px"},H=function(e){var a=Object(i.d)((function(e){return e.auth.token})),t=Object(i.d)((function(e){return e.user}));return r.a.createElement("div",{className:"bg-dark py-2 top-navbar mb-3 w-100"},r.a.createElement(c.a,{className:"align-items-center"},r.a.createElement(l.a,{md:4,style:{paddingLeft:"3rem"}},r.a.createElement("div",{className:"d-flex"},r.a.createElement("h4",{className:"text-light text-uppercase mb-0 mr-2"},r.a.createElement(k.a,{id:e.pageName,defaultMessage:e.pageName})),r.a.createElement("p",{className:"text-white"},r.a.createElement("span",{className:"ml-2 text-warning"},t.id&&"User ID. ".concat(t.id))))),r.a.createElement(l.a,{md:8,className:"hideInSm pr-5"},r.a.createElement(z.a,{style:{fontSize:"1.2rem"}},r.a.createElement(z.a.Item,{className:""},r.a.createElement(O.NavLink,{exact:!0,to:{pathname:"/"},className:"nav-link"},r.a.createElement(k.a,{id:"btn.home",defaultMessage:"Home"}))),r.a.createElement(z.a.Item,{className:""},r.a.createElement(O.NavLink,{exact:!0,to:{pathname:"/courses"},activeClassName:"activeLink",className:"nav-link"},r.a.createElement(k.a,{id:"btn.courses",defaultMessage:"Courses"}))),r.a.createElement(z.a.Item,{className:""},r.a.createElement(O.NavLink,{to:{pathname:"/exams"},activeClassName:"activeLink",className:"nav-link"},r.a.createElement(k.a,{id:"btn.exams",defaultMessage:"Exams"}))),r.a.createElement(z.a.Item,{className:""},r.a.createElement(O.NavLink,{to:{pathname:"/help"},className:"nav-link"},r.a.createElement(k.a,{id:"btn.help",defaultMessage:"Help"}))),a?r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a.Item,null,r.a.createElement(O.NavLink,{exact:!0,to:{pathname:"/notification"},activeClassName:"activeLink",className:"nav-link"},r.a.createElement(E.g,{className:""}),r.a.createElement(S,null))),r.a.createElement(z.a.Item,{className:""},r.a.createElement(O.NavLink,{to:{pathname:"/logout"},className:"nav-link"},r.a.createElement(E.X,null)))):r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a.Item,{className:""},r.a.createElement(O.NavLink,{to:{pathname:"/signup"},className:"nav-link"},r.a.createElement(k.a,{id:"btn.signup",defaultMessage:"Signup"}))),r.a.createElement(z.a.Item,{className:""},r.a.createElement(O.NavLink,{to:{pathname:"/login"},className:"nav-link"},r.a.createElement(k.a,{id:"btn.login",defaultMessage:"Login"}))))))))},G=t(369),U=t(150),A=t(356),q=t(290),V=t(49),Y=t(304),Q=t.n(Y),J=t(200),W=t(293),X=t(217);function Z(e){e.landing;var a=Object(i.c)(),t=Object(n.useState)(1),l=Object(d.a)(t,2),s=l[0],c=l[1],m=Object(i.d)((function(e){return e.courses})),o=m?m.courses:[];Object(n.useEffect)((function(){a(Object(V.a)()),a(Object(V.e)())}),[a]);var E=Object(J.a)(o,s,5);return(r.a.createElement("div",null,r.a.createElement("h3",{className:"text-center heading"},"Exams Under Courses"),m.loading&&r.a.createElement(u.a,null),r.a.createElement("div",{className:"d-flex justify-content-around flex-wrap"},m.error?r.a.createElement("p",{className:"text-danger"},r.a.createElement("span",null,"Courses can not be retrived.")):E.map((function(e){return r.a.createElement(A.a,{className:"my-3",style:{width:"350px"}},r.a.createElement(A.a.Body,null,r.a.createElement(A.a.Title,{className:"text-center",style:{fontSize:"1.4rem",fontWeight:"900"}},e.title),r.a.createElement(A.a.Text,{className:"text-center mt-2"},r.a.createElement(O.Link,{to:"/exams/courses/"+e.id},r.a.createElement(q.a,{variant:"primary"},"Go to Exams")))))}))),r.a.createElement("div",{className:"d-flex justify-content-center mt-3"},r.a.createElement(Q.a,{activePage:s,itemsCountPerPage:5,totalItemsCount:o.length,pageRangeDisplayed:2,onChange:function(e){c(e)},itemClass:"page-item",linkClass:"page-link",prevPageText:"Previous",nextPageText:"Next"}))))}U.extend(X),U.extend(W);var K=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(49)]).then(t.bind(null,731))})),$=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(5),t.e(30),t.e(48)]).then(t.bind(null,758))})),ee=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(14)]).then(t.bind(null,745))})),ae=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(3),t.e(4),t.e(37)]).then(t.bind(null,481))})),te=Object(n.lazy)((function(){return Promise.all([t.e(1),t.e(2),t.e(4),t.e(7),t.e(22)]).then(t.bind(null,732))})),ne=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4),t.e(27)]).then(t.bind(null,753))})),re=Object(n.lazy)((function(){return Promise.all([t.e(1),t.e(2),t.e(9),t.e(11),t.e(44)]).then(t.bind(null,733))})),le=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(18)]).then(t.bind(null,314))})),se=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(17)]).then(t.bind(null,323))})),ce=(Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(7),t.e(26),t.e(35)]).then(t.bind(null,480))})),Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(3),t.e(4),t.e(33)]).then(t.bind(null,734))}))),me=Object(n.lazy)((function(){return Promise.all([t.e(60),t.e(46)]).then(t.bind(null,735))})),ie=Object(n.lazy)((function(){return Promise.all([t.e(1),t.e(2),t.e(3),t.e(9),t.e(25)]).then(t.bind(null,754))})),oe=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(4),t.e(7),t.e(32),t.e(47)]).then(t.bind(null,751))})),ue=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(3),t.e(4),t.e(16)]).then(t.bind(null,747))})),de=Object(n.lazy)((function(){return t.e(41).then(t.bind(null,736))})),Ee=Object(n.lazy)((function(){return Promise.all([t.e(3),t.e(4),t.e(5),t.e(7),t.e(20)]).then(t.bind(null,744))})),be=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(50)]).then(t.bind(null,737))})),pe=Object(n.lazy)((function(){return Promise.all([t.e(1),t.e(2),t.e(9),t.e(11),t.e(39)]).then(t.bind(null,759))})),he=Object(n.lazy)((function(){return Promise.all([t.e(0),t.e(10),t.e(34)]).then(t.bind(null,752))})),fe=Object(n.lazy)((function(){return t.e(40).then(t.bind(null,738))})),Ne=Object(n.lazy)((function(){return t.e(31).then(t.bind(null,760))})),ve=Object(n.lazy)((function(){return Promise.all([t.e(7),t.e(55)]).then(t.bind(null,739))})),ge=Object(n.lazy)((function(){return t.e(59).then(t.bind(null,740))})),xe=Object(n.lazy)((function(){return Promise.all([t.e(1),t.e(2),t.e(3),t.e(57)]).then(t.bind(null,755))})),ye=Object(n.lazy)((function(){return t.e(51).then(t.bind(null,741))})),ze=(a.default=Object(i.b)((function(e){return{token:e.auth.token,isAuthenticated:null!==e.auth.token}}))((function(e){var a=e.match.url.split("/",2)[1];return(r.a.createElement(r.a.Fragment,null,r.a.createElement(m.slide,{styles:ze},r.a.createElement(R,null)),r.a.createElement(s.a,{fluid:"true"},r.a.createElement(c.a,{className:"no-gutters"},r.a.createElement(l.a,{xl:2,lg:3,md:4,className:"sidebar"},r.a.createElement(w,null)),r.a.createElement(l.a,{xl:10,lg:9,md:8,sm:12},r.a.createElement("div",null,r.a.createElement(H,{pageName:a}),r.a.createElement("div",{className:"px-1 ml-md-4",style:{marginTop:"70px"}},r.a.createElement(n.Suspense,{fallback:r.a.createElement(u.a,null)},r.a.createElement(f,null),r.a.createElement(o.d,{path:"/dashboard",exact:!0,component:ee}),r.a.createElement(o.d,{path:"/courses",exact:!0,component:ae}),r.a.createElement(o.d,{path:"/courses/:id",exact:!0,component:te}),r.a.createElement(o.d,{path:"/coursebuilder",exact:!0,component:ne}),r.a.createElement(o.d,{path:"/profile",exact:!0,component:K}),r.a.createElement(o.d,{path:"/category",exact:!0,component:$}),r.a.createElement(o.d,{path:"/routine",exact:!0,component:re}),r.a.createElement(o.d,{path:"/question",exact:!0,component:ue}),r.a.createElement(o.d,{path:"/exambuilder",exact:!0,component:le}),r.a.createElement(o.d,{path:"/examedit",exact:!0,component:se}),r.a.createElement(o.d,{path:"/exams/:id",exact:!0,render:function(e){return r.a.createElement(oe,Object.assign({free:!1},e))}}),r.a.createElement(o.d,{path:"/exams",exact:!0,component:e.isAuthenticated&&Object(I.a)(I.e.student,e.token)?ce:Z}),r.a.createElement(o.d,{path:"/exams/courses/:id",exact:!0,component:ie}),r.a.createElement(o.d,{path:"/exams/category/:id",exact:!0,component:me}),r.a.createElement(o.d,{path:"/exams/free/:id",exact:!0,render:function(e){return r.a.createElement(oe,Object.assign({free:!0},e))}}),r.a.createElement(o.d,{path:"/result",exact:!0,component:Ee}),r.a.createElement(o.d,{path:"/result/rank/:id",exact:!0,component:de}),r.a.createElement(o.d,{path:"/reports",exact:!0,component:he}),r.a.createElement(o.d,{path:"/reports/actions",exact:!0,component:fe}),r.a.createElement(o.d,{path:"/settings",exact:!0,component:be}),r.a.createElement(o.d,{path:"/help",exact:!0,component:Ne}),r.a.createElement(o.d,{path:"/payment",exact:!0,component:ve}),r.a.createElement(o.d,{path:"/notificationbuilder",exact:!0,component:xe}),r.a.createElement(o.d,{path:"/notification",exact:!0,component:ye}),r.a.createElement(o.d,{path:"/print",exact:!0,component:pe}),r.a.createElement(o.d,{path:"/terms",exact:!0,component:ge}))),r.a.createElement(G.a,null)))))))})),{bmBurgerButton:{position:"fixed",width:"30px",height:"25px",right:"28px",top:"10px"},bmBurgerBars:{background:"#67aaaa"},bmBurgerBarsHover:{background:"#a90000"},bmCrossButton:{height:"24px",width:"24px"},bmCross:{background:"#bdc3c7"},bmMenuWrap:{position:"fixed",height:"100%"},bmMenu:{background:"#373a47",padding:"2.5em 1.5em 0",fontSize:"1.15em"},bmMorphShape:{fill:"#373a47"},bmItemList:{color:"#b8b7ad",padding:"0.8em"},bmItem:{display:"inline-block"},bmOverlay:{background:"rgba(0, 0, 0, 0.3)"}})}}]);
//# sourceMappingURL=29.a9597d72.chunk.js.map