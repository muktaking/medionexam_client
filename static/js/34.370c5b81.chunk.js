(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[34],{143:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(10);function l(e,a){if(null==e)return{};var t,l,r=Object(n.a)(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}},161:function(e,a,t){"use strict";var n=t(5),l=t(10),r=t(129),o=t.n(r),c=t(0),i=t.n(c),s=t(210),m=t(147),u=t(131),d=i.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.active,d=e.disabled,b=e.className,E=e.variant,p=e.action,f=e.as,h=e.eventKey,v=e.onClick,y=Object(l.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(u.b)(t,"list-group-item");var g=Object(c.useCallback)((function(e){if(d)return e.preventDefault(),void e.stopPropagation();v&&v(e)}),[d,v]);return i.a.createElement(s.a,Object(n.a)({ref:a},y,{eventKey:Object(m.b)(h,y.href),as:f||(p?y.href?"a":"button":"div"),onClick:g,className:o()(b,t,r&&"active",d&&"disabled",E&&t+"-"+E,p&&t+"-action")}))}));d.defaultProps={variant:null,active:!1,disabled:!1},d.displayName="ListGroupItem",a.a=d},206:function(e,a,t){"use strict";var n=t(5),l=t(10),r=t(129),o=t.n(r),c=t(0),i=t.n(c),s=t(140),m=t(152),u=t(146),d=t(176),b=t(131),E=t(149),p=t(175),f=t(158),h={show:!0,transition:E.a,closeLabel:"Close alert"},v={show:"onClose"},y=i.a.forwardRef((function(e,a){var t=Object(s.b)(e,v),r=t.bsPrefix,c=t.show,u=t.closeLabel,d=t.className,E=t.children,f=t.variant,h=t.onClose,y=t.dismissible,g=t.transition,w=Object(l.a)(t,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),k=Object(b.b)(r,"alert"),x=Object(m.a)((function(e){h(!1,e)})),O=i.a.createElement("div",Object(n.a)({role:"alert"},g?w:void 0,{className:o()(d,k,f&&k+"-"+f,y&&k+"-dismissible")}),y&&i.a.createElement(p.a,{onClick:x,label:u}),E);return g?i.a.createElement(g,Object(n.a)({unmountOnExit:!0,ref:a},w,{in:c}),O):c?O:null})),g=Object(d.a)("h4");g.displayName="DivStyledAsH4",y.displayName="Alert",y.defaultProps=h,y.Link=Object(u.a)("alert-link",{Component:f.a}),y.Heading=Object(u.a)("alert-heading",{Component:g}),a.a=y},212:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=l.a.createContext(null)},221:function(e,a,t){"use strict";var n=t(5),l=t(10),r=t(129),o=t.n(r),c=t(0),i=t.n(c),s=(t(142),t(140)),m=t(131),u=t(209),d=t(161),b=i.a.forwardRef((function(e,a){var t,r=Object(s.b)(e,{activeKey:"onSelect"}),c=r.className,d=r.bsPrefix,b=r.variant,E=r.horizontal,p=r.as,f=void 0===p?"div":p,h=Object(l.a)(r,["className","bsPrefix","variant","horizontal","as"]);return d=Object(m.b)(d,"list-group"),t=E?!0===E?"horizontal":"horizontal-"+E:null,i.a.createElement(u.a,Object(n.a)({ref:a},h,{as:f,className:o()(c,d,b&&d+"-"+b,t&&d+"-"+t)}))}));b.defaultProps={variant:null,horizontal:null},b.displayName="ListGroup",b.Item=d.a,a.a=b},230:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var n={mobile:"+8801521500642",email:"contact@medionexam.com",location:"Sopura, Rajshahi",socials:{facebook:"https://www.facebook.com/medionexam/",twitter:"#",instagram:"#"},about:"MediOnExam (Medical Online Examination) team consists of technical, academic and advisory subteams. Members of Each subteams are dedicated to their work. Learn, Test and Success - is our motto."}},375:function(e,a,t){"use strict";t.d(a,"b",(function(){return s}));var n=t(5),l=t(10),r=t(0),o=t.n(r),c=t(147),i=t(212);function s(e,a){var t=Object(r.useContext)(i.a),n=Object(r.useContext)(c.a);return function(l){n(e===t?null:e,l),a&&a(l)}}var m=o.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"button":t,c=e.children,i=e.eventKey,m=e.onClick,u=Object(l.a)(e,["as","children","eventKey","onClick"]),d=s(i,m);return o.a.createElement(r,Object(n.a)({ref:a,onClick:d},u),c)}));a.a=m},437:function(e,a,t){"use strict";var n=t(5),l=t(10),r=t(129),o=t.n(r),c=t(0),i=t.n(c),s=t(140),m=t(131),u=t(375),d=t(147),b=t(362),E=t(212),p=i.a.forwardRef((function(e,a){var t=e.children,r=e.eventKey,o=Object(l.a)(e,["children","eventKey"]),s=Object(c.useContext)(E.a);return i.a.createElement(b.a,Object(n.a)({ref:a,in:s===r},o),i.a.createElement("div",null,i.a.Children.only(t)))}));p.displayName="AccordionCollapse";var f=p,h=i.a.forwardRef((function(e,a){var t=Object(s.b)(e,{activeKey:"onSelect"}),r=t.as,c=void 0===r?"div":r,u=t.activeKey,b=t.bsPrefix,p=t.children,f=t.className,h=t.onSelect,v=Object(l.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]);return b=Object(m.b)(b,"accordion"),i.a.createElement(E.a.Provider,{value:u},i.a.createElement(d.a.Provider,{value:h},i.a.createElement(c,Object(n.a)({ref:a},v,{className:o()(f,b)}),p)))}));h.Toggle=u.a,h.Collapse=f;a.a=h},449:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(0),l=t.n(n),r=t(136),o=t(918),c=t(230);function i(e){return l.a.createElement("div",{className:e.className},l.a.createElement("h4",null,l.a.createElement(o.a,{id:"btn.contact",defaultMessage:"Contact Info"})),l.a.createElement("p",null,l.a.createElement(r.O,{size:"1.4rem",className:"mr-2"}),l.a.createElement("span",null,c.a.mobile),l.a.createElement("br",null),l.a.createElement(r.s,{size:"1.4rem",className:"mr-2"}),l.a.createElement("span",null,c.a.email),l.a.createElement("br",null),l.a.createElement(r.J,{size:"1.4rem",className:"mr-2"}),l.a.createElement("span",null,c.a.location)),l.a.createElement("a",{href:c.a.socials.facebook,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(r.w,{size:"2.6rem"})),l.a.createElement("a",{href:c.a.socials.twitter,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(r.kb,{size:"2.6rem"})),l.a.createElement("a",{href:c.a.socials.instagram,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(r.F,{size:"2.6rem"})))}},954:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(319),o=t(315),c=t(221),i=t(161),s=t(206),m=t(373),u=t(32),d=t(143),b=t(375),E=t(617),p=t(437),f=t(212),h=t(136);function v(e){var a=e.heading,t=e.eventKey,r=e.callback,o=Object(n.useContext)(f.a),c=Object(b.b)(t,(function(){return r&&r(t)})),i=o===t;return l.a.createElement(E.a.Header,{className:"d-flex justify-content-between px-2",onClick:c},l.a.createElement("span",null,a),l.a.createElement("span",null,i?l.a.createElement(h.b,{size:"1.4rem"}):l.a.createElement(h.a,{size:"1.4rem"})))}var y=function(e){var a=e.children,t=(e.key,Object(d.a)(e,["children","key"]));return(l.a.createElement(p.a,{props:t},a))},g=function(e){var a=e.children,t=e.heading,n=e.eventKey,r=Object(d.a)(e,["children","heading","eventKey"]);return(l.a.createElement(E.a,{props:r},l.a.createElement(v,{heading:t,eventKey:n}),l.a.createElement(p.a.Collapse,{eventKey:n},l.a.createElement(E.a.Body,null,a))))},w=t(449);function k(){return l.a.createElement("div",null,l.a.createElement(r.a,null,l.a.createElement(o.a,{lg:4,md:12,className:"mb-5"},l.a.createElement("h3",null,"Login and Credentials"),l.a.createElement("hr",null),l.a.createElement("div",{className:"px-2"},l.a.createElement("p",null,"For taking the full advantage of our online based exam app, you have to create an account at first. You can sign up by filling up a signup form or login with Facebook account."),l.a.createElement(y,null,l.a.createElement(g,{heading:"Steps in Signup form",eventKey:0},l.a.createElement(c.a,null,l.a.createElement(i.a,null,"Go to ",l.a.createElement(u.Link,{to:"/signup"},"signup")," page"),l.a.createElement(i.a,null,"Fill the form with first name, last name, username, email."),l.a.createElement(i.a,null,"Give a password (minimum 6 characters and contain at least one capital and lowercase alpha value and numeric value. E.g., 123abcDEF)"),l.a.createElement(i.a,null,"Retype the password again"),l.a.createElement(i.a,null,"Select your gender"),l.a.createElement(i.a,null,"Lastly check the agreement of terms and conditions.")),l.a.createElement("p",{className:"mt-2"},"So easy!! Click on Submit button to submit the form. After successful submission you will be redirected to login page. (For Facebook login, an automatic popup will be prompted or just click on it and allow this web app.)")),l.a.createElement(g,{heading:"Steps in Login form",eventKey:1},l.a.createElement(c.a,null,l.a.createElement(i.a,null,"Go to ",l.a.createElement(u.Link,{to:"/login"},"login")," page"),l.a.createElement(i.a,null,"In login form, type your email address and password and submit."),l.a.createElement(i.a,null,"You will be redirected to the dashboard page.")),l.a.createElement("p",{className:"mt-2"},"(For Facebook login, an automatic popup will be prompted or just click on it and allow this web app.)")),l.a.createElement(g,{heading:"Update Your Profile",eventKey:2},l.a.createElement("p",null,"For getting best user experience and your academic reports, Please update your profile."),l.a.createElement(c.a,null,l.a.createElement(i.a,null,"Go to ",l.a.createElement(u.Link,{to:"/profile"},"profile")," page"),l.a.createElement(i.a,null,"Click on edit icon ",l.a.createElement(m.a,{size:"1.6rem"}),". A modal window will open."),l.a.createElement(i.a,null,"Fill up all (at least mobile number, faculty, sub faculty, your academic institution)"),l.a.createElement(i.a,null,"Click on \u2018Save Changes\u2019 Button to save your data.")),l.a.createElement("p",{className:"mt-2"},"You can also change your avatar. Click the edit button"," ",l.a.createElement(m.a,{size:"1.6rem"})," right to your profile avatar. A modal window will open with some nice avatar. Choose from it and click on it. Then click on \u2018Save Changes\u2019 Button to save your data"))))),l.a.createElement(o.a,{lg:4,md:12,className:"mb-5"},l.a.createElement("h3",null,"Courses & Exams"),l.a.createElement("hr",null),l.a.createElement("div",{className:"px-2"},l.a.createElement("p",null,"For taking part in any exam. You have to enroll for a course. After successful enrollment, you will be able to take part in exam."),l.a.createElement(y,null,l.a.createElement(g,{heading:"How to enroll from a Course",eventKey:0},l.a.createElement(c.a,null,l.a.createElement(i.a,null,"Go to ",l.a.createElement(u.Link,{to:"/courses"},"Courses")," page"),l.a.createElement(i.a,null,"Click on \u2018Enroll\u2019 button."),l.a.createElement(s.a,{variant:"info",className:"m-3"},"if free course, you will be enrolled automatically. But at paid course, first you need to pay and then message us. After verification by admin, admin will approve you. Then you can enjoy the exams."))),l.a.createElement(g,{heading:"How to take part an exam ",eventKey:1},l.a.createElement(c.a,null,l.a.createElement(i.a,null,"Go to ",l.a.createElement(u.Link,{to:"/exams"},"Exams")," page"),l.a.createElement(i.a,null,"Then click on \u2018Go to Exams\u2019 button of your desired course."),l.a.createElement(i.a,null,"You will lists of exams under the course. Click on 'Start Exam' button to start an exam or 'Rank' button to see the exam rank."),l.a.createElement(i.a,null,"A modal window will show up with exam summary and rules."),l.a.createElement(i.a,null,"Click on proceed."),l.a.createElement(s.a,{variant:"info",className:"m-3"},"Give exam. Upon ending click on \u2018Submit\u2019 button to submit your answer sheet. Then you will get an automatically generated result.")))))),l.a.createElement(o.a,{lg:4,md:12},l.a.createElement("h3",{id:"payment"},"Payement Process"),l.a.createElement("p",null,"(For easily payement process with QR code scanning, go to"," ",l.a.createElement(u.Link,{to:"/payment"},"Payment Page"),")"),l.a.createElement("hr",null),l.a.createElement("div",{className:"px-2"},l.a.createElement(y,null,l.a.createElement(g,{heading:"Steps in bKash Payement Process",eventKey:0},l.a.createElement(c.a,null,l.a.createElement(i.a,null,"Go to your bKash Mobile Menu by dialing *247# or go to your mobile bKash app"),l.a.createElement(i.a,null,"Choose \u201cSend Money\u201d"),l.a.createElement(i.a,null,"Enter the bKash Account Number: 01737313915"),l.a.createElement(i.a,null,"Enter the amount you want to send (Payment Amount of The Course)"),l.a.createElement(i.a,null,"Enter a reference about the transaction.* (Enter Your User ID)",l.a.createElement(s.a,{variant:"warning"},"You will Get Your user id at Topbar with golden color text or your ",l.a.createElement(u.Link,{to:"/profile"},"Profile")," marked with golden background at the top section")),l.a.createElement(i.a,null,"Now enter your bKash Mobile Menu PIN to confirm the transaction"),l.a.createElement(i.a,null,l.a.createElement("p",{className:"mt-2"},"Now Message at 01737313915"),l.a.createElement(s.a,{variant:"info"},"Write - Your name <Space> Your User ID / Your Email <Space> The bKash Number (From which you send money)"),l.a.createElement(s.a,{variant:"warning"},"You will Get Your user id at Topbar with golden color text or your ",l.a.createElement(u.Link,{to:"/profile"},"Profile")," marked with golden background at the top section")),l.a.createElement(i.a,null,l.a.createElement("p",null,"Or message at Facebook messenger"),l.a.createElement(s.a,{variant:"primary"},"Write - Your name <Space> Your User ID / Your Email <Space> The bKash Number (From you send money)"),l.a.createElement(s.a,{variant:"warning"},"You will Get Your user id at Topbar with golden color text or your ",l.a.createElement(u.Link,{to:"/profile"},"Profile")," marked with golden background at the top section")),l.a.createElement(i.a,null,"You will be informed through message or mobile call within 8 hours.")),l.a.createElement("p",null,"*Do not use more than one word, avoid space or special characters")))))),l.a.createElement(r.a,{className:"my-3"},l.a.createElement(o.a,null),l.a.createElement(o.a,{md:4,className:"text-center"},l.a.createElement(w.a,null)),l.a.createElement(o.a,null)))}t.d(a,"default",(function(){return k}))}}]);
//# sourceMappingURL=34.370c5b81.chunk.js.map