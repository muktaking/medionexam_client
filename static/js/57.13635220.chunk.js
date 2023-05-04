(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[57],{947:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(245),c=a(209),o=a(61),i=a(133),u=a(28),m=a.n(u),s=a(189),d=a(645),E=a(940),f=a(690),p=a(414),h=a(217),b=a.n(h),y=(a(216),a(136));function g(e){var t=e.defaultValue,a=void 0===t?null:t,r=Object(n.useState)(!1),c=Object(i.a)(r,2),u=c[0],h=c[1],g=Object(n.useState)(null),v=Object(i.a)(g,2),D=v[0],S=v[1],j=Object(n.useState)(a?a.startDate&&a.startDate:new Date),O=Object(i.a)(j,2),C=O[0],w=O[1],I=Object(n.useState)(a?a.startDate&&a.endDate:new Date),x=Object(i.a)(I,2),k=x[0],B=x[1],N=Object(n.useState)([]),T=Object(i.a)(N,2),M=T[0],z=T[1];return Object(n.useEffect)((function(){m.a.get("https://backend.medionexam.com/courses/auth").then((function(e){z(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",null,u&&l.a.createElement(d.a,null),l.a.createElement(E.a,{show:D,onClose:function(){S(null)},style:{position:"absolute"}},l.a.createElement(E.a.Header,null,l.a.createElement("strong",{className:"mr-auto"},"Message")),l.a.createElement(E.a.Body,null,D)),l.a.createElement("h4",null,"Notification Builder"),l.a.createElement(s.a,{enableReinitialize:!0,initialValues:{title:a?a.title:"",priority:a?a.priority.toString():"1",courseId:a&&a.courseId?a.courseId.id.toString():"0",description:a?a.description:""},onSubmit:function(e){!function(e){h(!0),a?m.a.patch("https://backend.medionexam.com/notification/"+a.id,Object(o.a)({id:a.id.toString(),startDate:C,endDate:k},e)).then((function(e){h(!1),S(e.data.message)})).catch((function(e){h(!1),S(e.message)})):m.a.post("https://backend.medionexam.com/notification",Object(o.a)({startDate:C,endDate:k},e)).then((function(e){h(!1),S(e.data.message)})).catch((function(e){h(!1),S(e.message)}))}(e)}},(function(e){var t=e.values,a=(e.errors,e.touched,e.handleChange),n=e.handleBlur,r=e.handleSubmit;e.isSubmitting;return(l.a.createElement(f.a,null,l.a.createElement(f.a.Group,{controlId:"formTitle"},l.a.createElement(f.a.Label,null,"Notification Title"),l.a.createElement(f.a.Control,{type:"textarea",name:"title",value:t.title,onChange:a,onBlur:n,placeholder:"Enter title"})),l.a.createElement(f.a.Group,{controlId:"formPriority"},l.a.createElement(f.a.Label,null,"Select Priority "),l.a.createElement(f.a.Control,{as:"select",name:"priority",value:t.priority,onChange:a,onBlur:n},l.a.createElement("option",{value:"1"},"Urgent"),l.a.createElement("option",{value:"2"},"Immediate"),l.a.createElement("option",{value:"3"},"Normal"))),l.a.createElement(f.a.Group,{controlId:"formCourseId"},l.a.createElement(f.a.Label,null,"Select A Course"),l.a.createElement(f.a.Control,{as:"select",name:"courseId",value:t.courseId,onChange:a,onBlur:n},l.a.createElement("option",{value:"0"},"All Courses"),M.map((function(e){return l.a.createElement("option",{value:e.id},e.title)})))),l.a.createElement(f.a.Group,{controlId:"formdescription"},l.a.createElement(f.a.Label,null,"Notification Description"),l.a.createElement(f.a.Control,{type:"textarea",name:"description",value:t.description,onChange:a,onBlur:n,placeholder:"Enter description"})),l.a.createElement("div",{className:"d-flex"},l.a.createElement("div",{className:"my-3 mr-5"},l.a.createElement("p",null,"Start Date"),l.a.createElement(b.a,{selected:new Date(C),onzChange:function(e){w(e)},showTimeSelect:!0,minDate:new Date,dateFormat:"yyyy-MMM-dd, hh:mm a"}),l.a.createElement(y.S,{size:"1.7rem"})),l.a.createElement("div",{className:"my-3"},l.a.createElement("p",null,"End Date"),l.a.createElement(b.a,{selected:new Date(k),onChange:function(e){B(e)},showTimeSelect:!0,minDate:new Date,dateFormat:"yyyy-MMM-dd, hh:mm a"}),l.a.createElement(y.S,{size:"1.7rem"}))),l.a.createElement(p.a,{variant:"primary",type:"submit",onClick:r},"Submit")))})))}var v=a(934),D=a(434),S=a(915);function j(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),u=Object(i.a)(c,2),s=u[0],d=u[1],E=Object(n.useState)(!1),f=Object(i.a)(E,2),h=f[0],b=f[1],y=function(){m.a.get("https://backend.medionexam.com/notification/raw").then((function(e){r(e.data)})).catch((function(e){return console.log(e)})),b(!1)};return Object(n.useEffect)((function(){m.a.get("https://backend.medionexam.com/notification/raw").then((function(e){r(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",null,l.a.createElement(v.a,{show:h,onHide:y},l.a.createElement(v.a.Header,{closeButton:!0},l.a.createElement(v.a.Title,null,"Modal heading")),l.a.createElement(v.a.Body,null,l.a.createElement(g,{defaultValue:s})),l.a.createElement(v.a.Footer,null,l.a.createElement(p.a,{variant:"secondary",onClick:y},"Close"))),a.map((function(e){return l.a.createElement(D.a,{className:"mb-2"},l.a.createElement(D.a.Body,null,l.a.createElement(D.a.Title,null,e.title),l.a.createElement(D.a.Text,null,l.a.createElement(S.a,{variant:"primary mr-2"},C(e.priority)),l.a.createElement(S.a,{variant:"primary"},e.courseId&&e.courseId.title)),l.a.createElement(D.a.Text,null,e.description)),l.a.createElement(D.a.Footer,null,l.a.createElement(p.a,{variant:"primary",onClick:function(){d(Object(o.a)({startDate:e.startDate,endDate:e.endDate},e)),b(!0)}},"Edit")))})))}function O(){return l.a.createElement(r.a,null,l.a.createElement(c.a,{lg:"6"},l.a.createElement(g,null)),l.a.createElement(c.a,{lg:"6"},l.a.createElement(j,null)))}function C(e){switch(e){case 1:return"Urgent";case 2:return"Immediate";case 3:default:return"Normal"}}a.d(t,"default",(function(){return O})),a.d(t,"priorityToString",(function(){return C}))}}]);
//# sourceMappingURL=57.13635220.chunk.js.map