(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[14],{108:function(e,t,n){},109:function(e){e.exports=JSON.parse("{}")},127:function(e,t,n){"use strict";n.r(t);var a=n(44),o=n(7),r=n(0),c=n.n(r),u=n(33),l=n.n(u),i=n(138),s=n(22),d=n(46),m=n(50),p=n(49),f=n(47),y=n(48),h=n(32),E=(n(94),n(1));function g(){var e=Object(E.l)().pathname;return Object(r.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var b=n(65),x=n(18),S=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutologin()}},{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.BrowserRouter,null,c.a.createElement(g,null),c.a.createElement(b.b,null)))}}]),t}(r.Component),k=Object(s.b)(null,(function(e){return{onTryAutologin:function(){e(Object(x.g)())}}}))(S),O=(n(108),n(109),n(13)),j=n(2),v=n(55),I=n(52),T=n(64),q=n(62),C=n(53),w=n(25),M=n(51),R=n(56),B=Object(O.c)({api:j.d,auth:x.i,user:R.a,category:v.b,question:M.b,examPaper:q.a,exams:C.a,dashboard:T.a,courses:I.b,notification:w.a}),P=function(e,t){return"RESET_APP"===t.type&&(e=void 0),B(e,t)},A=n(35),N=n.n(A),L=n(28),Q=n.n(L),D=n(66),F=n(76),z=Object(o.a)({reducer:P,middleware:[].concat(Object(a.a)(Object(o.c)()),[function(e){var t=e.getState,n=e.dispatch;return function(e){return function(a){var o,r,c,u,l,i,s,d,m,p,f,y;return N.a.async((function(h){for(;;)switch(h.prev=h.next){case 0:if(a.type===j.a.type){h.next=2;break}return h.abrupt("return",e(a));case 2:return o=a.payload,r=o.url,c=o.method,u=o.data,l=o.config,i=o.onStart,s=o.onSuccess,d=o.onError,m=o.sendToken,i&&n({type:i}),e(a),h.prev=5,m&&Object(F.a)(t().auth.token),h.next=9,N.a.awrap(Q.a.request({baseURL:"https://backend.medionexam.com",url:r,method:c,data:u,config:l}));case 9:p=h.sent,n(Object(j.c)(p.data)),s&&(s===x.f.type?(f=new Date((new Date).getTime()+1e3*p.data.expireIn),localStorage.setItem("jwtToken",p.data.accessToken),localStorage.setItem("expirationDate",f),localStorage.setItem("userId",p.data.id),n(Object(x.h)(p.data.expireIn)),n({type:x.f.type,payload:p.data})):s===w.d.type?(n({type:w.d.type,payload:p.data}),n(Object(w.b)())):n({type:s,payload:p.data})),h.next=19;break;case 14:h.prev=14,h.t0=h.catch(5),y=Object(D.a)(h.t0),n(Object(j.b)(y)),d&&n({type:d,payload:y});case 19:case"end":return h.stop()}}),null,null,[[5,14]])}}}])});l.a.hydrate(c.a.createElement(s.a,{store:z},c.a.createElement(i.a,{locale:"en",defaultLocale:"en",messages:!1},c.a.createElement(k,null))),document.getElementById("root"))},17:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return s}));var a=n(80),o=n.n(a),r={guest:0,student:1,mentor:2,moderator:3,coordinator:4,admin:5},c=["Student","Mentor","Moderator","Coordinator","Admin"];function u(e){switch(e){case 1:return"Student";case 2:return"Mentor";case 3:return"Modarator";case 4:return"Coordinator";case 5:return"Admin";default:return"Guest"}}function l(e){switch(e){case 0:return"Unchecked";case 1:return"Checked";case 2:default:return"Unrequired"}}function i(e){switch(e){case 0:return"Local";case 1:return"Facebook";default:return"Local"}}var s=function(e,t){return(t?o()(t).role:-1)>=e}},18:function(e,t,n){"use strict";n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"f",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return p})),n.d(t,"h",(function(){return f})),n.d(t,"g",(function(){return y})),n.d(t,"j",(function(){return h}));var a=n(7),o=n(2),r=Object(a.b)({name:"auth",initialState:{loading:!1,token:null,userId:null,role:null,error:null},reducers:{authStart:function(e){e.loading=!0},authEnd:function(e){e.loading=!1},authSuccess:function(e,t){e.loading=!1,e.token=t.payload.accessToken,e.userId=t.payload.id,e.role=t.payload.role,e.expireIn=t.payload.expireIn,e.error=null},authFail:function(e,t){e.loading=!1,e.error=t.payload},authReset:function(e){e.error=null},logout:function(e){e.token=null,e.userId=null,e.expireIn=null}}}),c=r.actions,u=c.authStart,l=c.authEnd,i=c.authSuccess,s=c.authFail,d=c.authReset,m=c.logout;t.i=r.reducer;var p=function(e,t){return function(n){var a={username:e,password:t};n(Object(o.a)({url:"/auth/login",method:"post",data:a,onStart:u.type,onSuccess:i.type,onError:s.type}))}},f=function(e){return function(t){setTimeout((function(){t(h())}),1e3*e)}},y=function(){return function(e){var t=localStorage.getItem("jwtToken");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n>new Date){var a=localStorage.getItem("userId");e(i({accessToken:t,id:a})),e(f((n.getTime()-(new Date).getTime())/1e3))}else e(h())}else e(m())}},h=function(){return function(e){localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),localStorage.removeItem("jwtToken"),e(m())}}},2:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return l}));var a=n(7),o=Object(a.b)({name:"api",initialState:{result:null,error:null},reducers:{apiCallBegun:function(e,t){},apiCallSuccess:function(e,t){e.result=t.payload},apiCallFail:function(e,t){e.error=t.payload},apiCallReset:function(e){e.result=null,e.error=null}}}),r=o.actions,c=r.apiCallBegun,u=r.apiCallSuccess,l=r.apiCallFail;r.apiCallReset;t.d=o.reducer},25:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(7),o=n(2),r=Object(a.b)({name:"Notification",initialState:{loading:!1,notification:[],freshNoti:[]},reducers:{getNotification:function(e,t){e.notification=t.payload,e.loading=!1},getFreshNotification:function(e,t){e.freshNoti=t.payload},loadingStart:function(e,t){e.loading=!0}}}),c=r.actions,u=c.getNotification,l=c.getFreshNotification,i=c.loadingStart;t.a=r.reducer;var s=function(){return function(e){e(Object(o.a)({url:"/notification",method:"get",onStart:i.type,onSuccess:u.type}))}},d=function(){return function(e,t){var n=JSON.parse(localStorage.getItem("noti")),a=t().notification.notification,o=[];n?(new Date).getTime()>n.expiry?(localStorage.removeItem("noti"),e(l(a))):(o=a.filter((function(e){return!n.value.includes(e.id)})),e(l(o))):e(l(a))}}},51:function(e,t,n){"use strict";n.d(t,"g",(function(){return d})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return y})),n.d(t,"c",(function(){return h}));var a=n(7),o=n(2),r=Object(a.b)({name:"Question",initialState:{questions:[],error:null,response:null,loading:!1},reducers:{getQuestions:function(e,t){e.questions=t.payload},loadingStart:function(e,t){e.loading=!0},getResponse:function(e,t){e.response=t.payload,e.loading=!1},resetResponse:function(e,t){e.response=null,e.loading=!1}}}),c=r.actions,u=c.getQuestions,l=c.loadingStart,i=c.getResponse,s=c.resetResponse;t.b=r.reducer;var d=function(){return function(e){e({type:s.type})}},m=function(){return function(e){e(Object(o.a)({url:"/questions",method:"get",onSuccess:u.type}))}},p=function(e){return function(t){t(Object(o.a)({url:"/questions/category/"+e,method:"get",onSuccess:u.type}))}},f=function(e){return function(t){var n=new FormData;Object.keys(e).forEach((function(t){e[t]&&n.append(t,e[t])})),t(Object(o.a)({url:"/questions",method:"post",sendToken:!0,data:e,config:{headers:{"Content-Type":"multipart/form-data"}},onStart:l.type,onSuccess:i.type,onError:i.type}))}},y=function(e,t){return function(n){var a=new FormData;Object.keys(t).forEach((function(e){t[e]&&a.append(e,t[e])})),n(Object(o.a)({url:"/questions/"+e,method:"patch",sendToken:!0,data:t,config:{headers:{"Content-Type":"multipart/form-data"}},onStart:l.type,onSuccess:i.type,onError:i.type}))}},h=function(e){return function(t){t(Object(o.a)({url:"/questions/"+e,method:"delete",sendToken:!0,onStart:l.type,onSuccess:i.type,onError:i.type}))}}},52:function(e,t,n){"use strict";n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return f})),n.d(t,"a",(function(){return y}));var a=n(7),o=n(2),r=Object(a.b)({name:"Courses",initialState:{loading:!1,courses:null,coursesEnrolledByStu:null,expectedEnrolledStuIds:null,error:null},reducers:{getCourses:function(e,t){e.courses=t.payload,e.loading=!1},getCoursesEnrolledByStu:function(e,t){e.coursesEnrolledByStu=t.payload,e.loading=!1},loadingStart:function(e,t){e.loading=!0},courseError:function(e,t){e.loading=!1,e.error=t.payload},courseReset:function(e,t){e.loading=!1,e.error=null}}}),c=r.actions,u=c.getCourses,l=c.getCoursesEnrolledByStu,i=c.loadingStart,s=c.courseError,d=c.courseReset;t.b=r.reducer;var m=function(){return function(e){e(Object(o.a)({url:"/courses",method:"get",onStart:i.type,onSuccess:u.type,onError:s.type}))}},p=function(e,t,n){return function(a){console.log(n),a(Object(o.a)({url:"/courses/filter?"+(e?"pgCourseType="+e+"&":"")+(t?"faculty="+t+"&":" ")+(n?"&search="+n:""),method:"get",onStart:i.type,onSuccess:u.type,onError:s.type}))}},f=function(){return function(e){e(Object(o.a)({url:"/courses/enrolled/courses/",method:"get",onStart:i.type,onSuccess:l.type}))}},y=function(){return function(e){e(d())}}},53:function(e,t,n){"use strict";n.d(t,"i",(function(){return m})),n.d(t,"b",(function(){return E})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return b})),n.d(t,"f",(function(){return x})),n.d(t,"g",(function(){return S})),n.d(t,"h",(function(){return k})),n.d(t,"c",(function(){return O})),n.d(t,"j",(function(){return j}));var a=n(7),o=n(2),r=Object(a.b)({name:"Exams",initialState:{id:null,questions:[],questionIdsByOrder:[],examId:null,singleQuestionMark:null,singleStemMark:null,penaltyMark:null,timeLimit:null,type:null,isAnswerRestricted:!0,examResult:null,totalMark:null,totalScore:null,totalPenaltyMark:null,totalScorePercentage:null,timeTakenToComplete:null,rankLoading:!1,rank:null,exam:null,error:null,examError:null,exams:[],disableQuestions:[]},reducers:{resetExamResult:function(e){e.examId=null,e.examResult=null,e.totalMark=null,e.totalScore=null,e.totalPenaltyMark=null,e.totalScorePercentage=null,e.timeTakenToComplete=null,e.timeLimit=null,e.type=null,e.isAnswerRestricted=!0,e.rankLoading=!1,e.rank=null,e.exam=null,e.error=null,e.questionIdsByOrder=[],e.disableQuestions=[]},getAllExams:function(e,t){e.exams=t.payload},getExamById:function(e,t){e.questions=t.payload.questions,t.payload.questions.forEach((function(t){e.questionIdsByOrder.push(t.id)})),e.id=t.payload.exam.id,e.singleQuestionMark=t.payload.exam.singleQuestionMark,e.singleStemMark=t.payload.exam.singleStemMark,e.timeLimit=t.payload.exam.timeLimit,e.type=t.payload.exam.type,e.penaltyMark=t.payload.exam.penaltyMark,e.isAnswerRestricted=t.payload.exam.isAnswerRestricted},getFreeExamById:function(e,t){e.questions=t.payload.questions,t.payload.questions.forEach((function(t){e.questionIdsByOrder.push(t.id)})),e.id=t.payload.exam.id,e.singleQuestionMark=t.payload.exam.singleQuestionMark,e.singleStemMark=t.payload.exam.singleStemMark,e.timeLimit=t.payload.exam.timeLimit,e.penaltyMark=t.payload.exam.penaltyMark},getExamError:function(e,t){e.examError=t.payload},resetExamError:function(e){e.examError=null},postExamById:function(e,t){e.examId=t.payload.examId,e.examResult=t.payload.resultArray,e.totalMark=t.payload.totalMark,e.totalScore=t.payload.totalScore,e.totalPenaltyMark=t.payload.totalPenaltyMark,e.totalScorePercentage=t.payload.totalScorePercentage,e.timeTakenToComplete=t.payload.timeTakenToComplete},examRankStart:function(e){e.rankLoading=!0},examRankById:function(e,t){e.rankLoading=!1,e.rank=t.payload.rank,e.exam=t.payload.exam},postExamError:function(e,t){e.rankLoading=!1,e.error=t.payload},disableQuestionsAdd:function(e,t){e.disableQuestions.push(t.payload)},resetDisableQuestions:function(e){e.disableQuestions=[]}}}),c=r.actions,u=c.resetExamResult,l=c.getAllExams,i=c.getExamById,s=c.getFreeExamById,d=c.getExamError,m=c.resetExamError,p=c.postExamById,f=c.examRankStart,y=c.examRankById,h=c.postExamError,E=c.disableQuestionsAdd;c.resetDisableQuestions;t.a=r.reducer;var g=function(){return function(e){e(Object(o.a)({url:"/exams/",method:"get",sendToken:!0,onSuccess:l.type,onError:d.type}))}},b=function(e){return function(t){t(Object(o.a)({url:"/exams/questions/"+e,method:"get",sendToken:!0,onSuccess:i.type,onError:d.type}))}},x=function(e){return function(t){t(Object(o.a)({url:"/exams/free/questions/"+e,method:"get",sendToken:!0,onSuccess:s.type,onError:d.type}))}},S=function(e){return function(t){t(Object(o.a)({url:"/postexams",method:"post",data:e,sendToken:!0,onSuccess:p.type,onError:h.type}))}},k=function(e){return function(t){t(Object(o.a)({url:"/postexams/free",method:"post",data:e,onSuccess:p.type,onError:h.type}))}},O=function(e,t){return function(n){n(Object(o.a)({url:"/postexams/rank/"+e,data:{id:e,courseId:t},method:"post",onStart:f.type,onSuccess:y.type,onError:h.type}))}},j=function(){return function(e){e({type:u.type})}}},55:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return i}));var a=n(7),o=n(2),r=Object(a.b)({name:"Category",initialState:{categories:[],catHierarchy:[]},reducers:{getCategory:function(e,t){e.categories=t.payload.categories,e.catHierarchy=t.payload.catHierarchy}}}),c=r.actions.getCategory;t.b=r.reducer;var u="/categories",l=function(){return function(e){e(Object(o.a)({url:u,method:"get",onSuccess:c.type}))}},i=function(e){return function(t){t(Object(o.a)({url:u,method:"post",data:e,sendToken:!0}))}}},56:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var a=n(7),o=n(2),r=Object(a.b)({name:"user",initialState:{id:null,firstName:null,lastName:null,userName:null,email:null,role:null,mobile:null,userFrom:Date.now(),address:null,avatar:null,gender:null,faculty:null,institution:null},reducers:{getUser:function(e,t){e.id=t.payload.id,e.firstName=t.payload.firstName,e.lastName=t.payload.lastName,e.userName=t.payload.userName,e.email=t.payload.email,e.mobile=t.payload.mobile,e.userFrom=t.payload.createdAt,e.role=t.payload.role,e.address=t.payload.address,e.avatar=t.payload.avatar,e.gender=t.payload.gender,e.faculty=t.payload.faculty,e.institution=t.payload.institution}}}),c=r.actions.getUser;t.a=r.reducer;var u=function(){return function(e){e(Object(o.a)({url:"/users",method:"get",onSuccess:c.type,sendToken:!0}))}}},62:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return m}));var a=n(63),o=n(7),r=n(2),c=Object(o.b)({name:"ExamPaper",initialState:{loading:!1,questions:[],ids:[],success:null,error:null},reducers:{selectedQuestions:function(e,t){e.questions=t.payload.questions,e.ids=t.payload.ids},onLoading:function(e){e.loading=!0},onSuccess:function(e,t){e.success=t.payload,e.loading=!1},onError:function(e,t){e.error=t.payload,e.loading=!1}}}),u=c.actions,l=(u.selectedQuestions,u.onSuccess),i=u.onError,s=u.onLoading;t.a=c.reducer;var d=function(){return function(e){e({type:s.type})}},m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return function(o){o(Object(r.a)({url:n?"/exams/".concat(n):"/exams",method:n?"patch":"post",data:Object(a.a)({},e,{questions:t}),onSuccess:l.type,onError:i.type,sendToken:!0}))}}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var a=n(7),o=n(2),r=Object(a.b)({name:"dashboard",initialState:{featuredExams:[],userExamInfo:{totalExam:[0,0],rank:[1,100],upcomingExam:["No Exam","01-02-03",null],result:[0,100]},userExamStat:null},reducers:{dashboardStudent:function(e,t){e.featuredExams=t.payload.featuredExams,e.userExamInfo=t.payload.userExamInfo,e.userExamStat=t.payload.userExamStat},userExamStat:function(e,t){e.userExamStat=t.payload.userExamStat}}}),c=r.actions,u=(c.dashboardStudent,c.userExamStat);t.a=r.reducer;var l=function(){return function(e){e(Object(o.a)({url:"/dashboard/examstat",method:"get",onSuccess:u.type,sendToken:!0}))}}},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(42),o=n(79),r=n(37),c=n(20),u=n.n(c),l=n(0),i=n.n(l),s=n(22),d=n(1),m=n(27),p=n.n(m),f=n(17);function y(){var e=Object(o.a)(["\n  display: block;\n  margin: 45vh auto;\n  bordeClimbingBoxLoader\n  r-color: red;\n"]);return y=function(){return e},e}var h=Object(l.lazy)((function(){return u()(Promise.all([n.e(5),n.e(6),n.e(11),n.e(44)]).then(n.bind(null,131)),500)})),E=Object(l.lazy)((function(){return u()(Promise.all([n.e(0),n.e(5),n.e(6),n.e(11),n.e(29)]).then(n.bind(null,134)),500)})),g=Object(l.lazy)((function(){return u()(Promise.all([n.e(5),n.e(6),n.e(30),n.e(11),n.e(32)]).then(n.bind(null,135)),500)})),b=Object(l.lazy)((function(){return u()(Promise.all([n.e(0),n.e(4),n.e(5),n.e(6),n.e(26)]).then(n.bind(null,136)),500)})),x=Object(l.lazy)((function(){return u()(n.e(58).then(n.bind(null,132)),500)})),S=Object(l.lazy)((function(){return u()(Promise.all([n.e(0),n.e(4),n.e(5),n.e(6),n.e(27)]).then(n.bind(null,133)),500)})),k=Object(l.lazy)((function(){return u()(Promise.all([n.e(4),n.e(5),n.e(13),n.e(39),n.e(51)]).then(n.bind(null,137)),500)})),O=Object(r.css)(y()),j=Object(l.createContext)();t.b=Object(s.b)((function(e){return{token:e.auth.token,isAuthenticated:null!==e.auth.token}}))((function(e){var t=Object(l.useState)(!0),n=Object(a.a)(t,2),o=n[0],r=n[1],c=i.a.createElement(l.Suspense,{fallback:i.a.createElement(p.a,{css:O})},i.a.createElement(d.g,null,i.a.createElement(d.d,{path:"/login",component:b}),i.a.createElement(d.d,{path:"/signup",component:S}),i.a.createElement(d.d,{path:"/reset/:id",component:k}),i.a.createElement(d.d,{path:"/exams",exact:!0,component:g}),i.a.createElement(d.d,{path:"/exams/courses/:id",component:g}),i.a.createElement(d.d,{path:"/exams/:id",component:g}),i.a.createElement(d.d,{path:"/courses",exact:!0,component:g}),i.a.createElement(d.d,{path:"/courses/:id",exact:!0,component:g}),i.a.createElement(d.d,{path:"/exams/category/:id",exact:!0,component:g}),i.a.createElement(d.d,{path:"/exams/free/:id",component:g}),i.a.createElement(d.d,{path:"/result",component:g}),i.a.createElement(d.d,{path:"/result/rank/:id",component:g}),i.a.createElement(d.d,{path:"/print",component:g}),i.a.createElement(d.d,{path:"/help",component:g}),i.a.createElement(d.d,{path:"/payment",component:g}),i.a.createElement(d.d,{path:"/terms",component:g}),i.a.createElement(d.d,{path:"/error",render:function(e){return i.a.createElement(h,e)}}),i.a.createElement(d.d,{path:"/",exact:!0,component:E}),i.a.createElement(d.d,{render:function(e){return i.a.createElement(h,e)}})));return e.isAuthenticated&&Object(f.a)(f.e.student,e.token)&&(c=i.a.createElement(l.Suspense,{fallback:i.a.createElement(p.a,{css:O})},i.a.createElement(d.g,null,i.a.createElement(d.d,{path:"/dashboard",component:g}),i.a.createElement(d.d,{path:"/courses",component:g}),i.a.createElement(d.d,{path:"/courses/:id",exact:!0,component:g}),i.a.createElement(d.d,{path:"/reports",component:g}),i.a.createElement(d.d,{path:"/reports/actions",component:g}),i.a.createElement(d.d,{path:"/profile",component:g}),i.a.createElement(d.d,{path:"/exams",component:g}),i.a.createElement(d.d,{path:"/exams/courses/:id",component:g}),i.a.createElement(d.d,{path:"/notification",component:g}),i.a.createElement(d.d,{path:"/exams/:id",component:g}),i.a.createElement(d.d,{path:"/exams/free/:id",component:g}),i.a.createElement(d.d,{path:"/result",component:g}),i.a.createElement(d.d,{path:"/rank",component:g}),i.a.createElement(d.d,{path:"/settings",component:g}),i.a.createElement(d.d,{path:"/print",component:g}),i.a.createElement(d.d,{path:"/logout",component:x}),i.a.createElement(d.d,{path:"/help",component:g}),i.a.createElement(d.d,{path:"/payment",component:g}),i.a.createElement(d.d,{path:"/terms",component:g}),i.a.createElement(d.d,{path:"/",exact:!0,component:E}),i.a.createElement(d.c,{to:"/dashboard"})))),Object(f.a)(f.e.mentor,e.token)&&(c=i.a.createElement(l.Suspense,{fallback:i.a.createElement(p.a,{css:O})},i.a.createElement(d.g,null,i.a.createElement(d.d,{path:"/dashboard",component:g}),i.a.createElement(d.d,{path:"/profile",component:g}),i.a.createElement(d.d,{path:"/question",component:g}),i.a.createElement(d.d,{path:"/settings",component:g}),i.a.createElement(d.d,{path:"/print",component:g}),i.a.createElement(d.d,{path:"/logout",component:x}),i.a.createElement(d.d,{path:"/help",component:g}),i.a.createElement(d.d,{path:"/payment",component:g}),i.a.createElement(d.d,{path:"/terms",component:g}),i.a.createElement(d.d,{path:"/",exact:!0,component:E}),i.a.createElement(d.c,{to:"/dashboard"})))),Object(f.a)(f.e.moderator,e.token)&&(c=i.a.createElement(l.Suspense,{fallback:i.a.createElement(p.a,{css:O})},i.a.createElement(d.g,null,i.a.createElement(d.d,{path:"/dashboard",component:g}),i.a.createElement(d.d,{path:"/profile",component:g}),i.a.createElement(d.d,{path:"/category",component:g}),i.a.createElement(d.d,{path:"/question",component:g}),i.a.createElement(d.d,{path:"/reports",component:g}),i.a.createElement(d.d,{path:"/reports/user/:id",component:g}),i.a.createElement(d.d,{path:"/reports/actions",component:g}),i.a.createElement(d.d,{path:"/routine",exact:!0,component:g}),i.a.createElement(d.d,{path:"/exambuilder",component:g}),i.a.createElement(d.d,{path:"/settings",component:g}),i.a.createElement(d.d,{path:"/print",component:g}),i.a.createElement(d.d,{path:"/logout",component:x}),i.a.createElement(d.d,{path:"/help",component:g}),i.a.createElement(d.d,{path:"/payment",component:g}),i.a.createElement(d.d,{path:"/terms",component:g}),i.a.createElement(d.d,{path:"/",exact:!0,component:E}),i.a.createElement(d.c,{to:"/dashboard"})))),Object(f.a)(f.e.coordinator,e.token)&&(c=i.a.createElement(l.Suspense,{fallback:i.a.createElement(p.a,{css:O})},i.a.createElement(d.g,null,i.a.createElement(d.d,{path:"/dashboard",component:g}),i.a.createElement(d.d,{path:"/profile",component:g}),i.a.createElement(d.d,{path:"/category",component:g}),i.a.createElement(d.d,{path:"/routine",exact:!0,component:g}),i.a.createElement(d.d,{path:"/reports",component:g}),i.a.createElement(d.d,{path:"/reports/actions",component:g}),i.a.createElement(d.d,{path:"/question",component:g}),i.a.createElement(d.d,{path:"/coursebuilder",component:g}),i.a.createElement(d.d,{path:"/exambuilder",component:g}),i.a.createElement(d.d,{path:"/examedit",component:g}),i.a.createElement(d.d,{path:"/settings",component:g}),i.a.createElement(d.d,{path:"/print",component:g}),i.a.createElement(d.d,{path:"/logout",component:x}),i.a.createElement(d.d,{path:"/help",component:g}),i.a.createElement(d.d,{path:"/payment",component:g}),i.a.createElement(d.d,{path:"/terms",component:g}),i.a.createElement(d.d,{path:"/notificationbuilder",component:g}),i.a.createElement(d.d,{path:"/",exact:!0,component:E}),i.a.createElement(d.c,{to:"/dashboard"})))),i.a.createElement(j.Provider,{value:{stickyState:o,setStickyState:r}},c)}))},66:function(e,t,n){"use strict";function a(e){if(e.response){var t=e.response.data;return t.statusCode,t.message}return"Server may be down. Please try sometime later"}n.d(t,"a",(function(){return a}))},76:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(28),o=n.n(a);function r(e){e?o.a.defaults.headers.common.Authorization="Bearer ".concat(e):delete o.a.defaults.headers.common.Authorization}},87:function(e,t,n){e.exports=n(127)},94:function(e,t,n){}},[[87,15,19]]]);
//# sourceMappingURL=main.bc24da60.chunk.js.map