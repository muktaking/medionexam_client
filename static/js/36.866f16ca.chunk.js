(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[36],{153:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(11);function r(e,t){if(null==e)return{};var a,r,s=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}},169:function(e,t,a){"use strict";var n=a(6),r=a(11),s=a(141),o=a.n(s),i=a(0),l=a.n(i),c=a(208),u=a(164),m=a(143),d=l.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.active,d=e.disabled,p=e.className,f=e.variant,h=e.action,v=e.as,g=e.eventKey,y=e.onClick,b=Object(r.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);a=Object(m.b)(a,"list-group-item");var E=Object(i.useCallback)((function(e){if(d)return e.preventDefault(),void e.stopPropagation();y&&y(e)}),[d,y]);return l.a.createElement(c.a,Object(n.a)({ref:t},b,{eventKey:Object(u.b)(g,b.href),as:v||(h?b.href?"a":"button":"div"),onClick:E,className:o()(p,a,s&&"active",d&&"disabled",f&&a+"-"+f,h&&a+"-action")}))}));d.defaultProps={variant:null,active:!1,disabled:!1},d.displayName="ListGroupItem",t.a=d},232:function(e,t,a){"use strict";var n=a(6),r=a(11),s=a(141),o=a.n(s),i=a(0),l=a.n(i),c=(a(152),a(150)),u=a(143),m=a(207),d=a(169),p=l.a.forwardRef((function(e,t){var a,s=Object(c.b)(e,{activeKey:"onSelect"}),i=s.className,d=s.bsPrefix,p=s.variant,f=s.horizontal,h=s.as,v=void 0===h?"div":h,g=Object(r.a)(s,["className","bsPrefix","variant","horizontal","as"]);return d=Object(u.b)(d,"list-group"),a=f?!0===f?"horizontal":"horizontal-"+f:null,l.a.createElement(m.a,Object(n.a)({ref:t},g,{as:v,className:o()(i,d,p&&d+"-"+p,a&&d+"-"+a)}))}));p.defaultProps={variant:null,horizontal:null},p.displayName="ListGroup",p.Item=d.a,t.a=p},264:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(6),o=a(11),i=a(141),l=a.n(i),c=a(143),u=a(15),m=a(168),d=r.a.forwardRef((function(e,t){var a=e.active,n=e.disabled,i=e.className,c=e.style,u=e.activeLabel,d=e.children,p=Object(o.a)(e,["active","disabled","className","style","activeLabel","children"]),f=a||n?"span":m.a;return r.a.createElement("li",{ref:t,style:c,className:l()(i,"page-item",{active:a,disabled:n})},r.a.createElement(f,Object(s.a)({className:"page-link",disabled:n},p),d,a&&u&&r.a.createElement("span",{className:"sr-only"},u)))}));d.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},d.displayName="PageItem";var p=d;function f(e,t,a){var n,s;return void 0===a&&(a=e),s=n=function(e){function n(){return e.apply(this,arguments)||this}return Object(u.a)(n,e),n.prototype.render=function(){var e=this.props,n=e.children,s=Object(o.a)(e,["children"]);return delete s.active,r.a.createElement(d,s,r.a.createElement("span",{"aria-hidden":"true"},n||t),r.a.createElement("span",{className:"sr-only"},a))},n}(r.a.Component),n.displayName=e,s}var h=f("First","\xab"),v=f("Prev","\u2039","Previous"),g=f("Ellipsis","\u2026","More"),y=f("Next","\u203a"),b=f("Last","\xbb"),E=r.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.children,u=e.size,m=Object(o.a)(e,["bsPrefix","className","children","size"]),d=Object(c.b)(a,"pagination");return r.a.createElement("ul",Object(s.a)({ref:t},m,{className:l()(n,d,u&&d+"-"+u)}),i)}));E.First=h,E.Prev=v,E.Ellipsis=g,E.Item=p,E.Next=y,E.Last=b;var S=E;t.a=function(e){var t=e.itemsCount,a=e.pageSize,n=e.onPageHandler,s=e.currentPage,o=Math.ceil(t/a);if(1===o)return null;for(var i=[],l=function(e){i.push(r.a.createElement(S.Item,{key:e,onClick:function(){n(e)},active:e===s,className:"my-2 mr-2 text-center",style:{width:"40px",height:"30px"}},e))},c=1;c<=o;c++)l(c);return(r.a.createElement(S,{className:"justify-content-start align-content-start flex-wrap"},i))}},381:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(189),o=a(22),i=a(32);t.a=Object(o.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))((function(e){var t=e.isAuthenticated?["dashboard","courses","exams","logout","help"]:["courses","exams","signup","login","help"];return(r.a.createElement(s.a,{className:"bg-light"},r.a.createElement(s.a.Item,{as:"li",className:"mr-3"},r.a.createElement(i.NavLink,{to:{pathname:"/"},className:"nav-link link-hover"},"Home".toUpperCase())),t.map((function(e){return r.a.createElement(s.a.Item,{key:e,as:"li",className:"mr-3"},r.a.createElement(i.NavLink,{to:{pathname:"/"+e},className:"nav-link link-hover"},e.toUpperCase()))})),r.a.createElement(s.a.Item,{as:"li",className:"mr-3"},r.a.createElement(i.NavLink,{to:"/#contact",className:"nav-link link-hover"},"Contact".toUpperCase()))))}))},391:function(e,t,a){"use strict";var n=a(6),r=a(11),s=a(141),o=a.n(s),i=a(0),l=a.n(i),c=a(143),u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,s=e.className,i=e.striped,u=e.bordered,m=e.borderless,d=e.hover,p=e.size,f=e.variant,h=e.responsive,v=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),g=Object(c.b)(a,"table"),y=o()(s,g,f&&g+"-"+f,p&&g+"-"+p,i&&g+"-striped",u&&g+"-bordered",m&&g+"-borderless",d&&g+"-hover"),b=l.a.createElement("table",Object(n.a)({},v,{className:y,ref:t}));if(h){var E=g+"-responsive";return"string"===typeof h&&(E=E+"-"+h),l.a.createElement("div",{className:E},b)}return b}));t.a=u},944:function(e,t,a){"use strict";a.r(t);var n=a(42),r=a(46),s=a(50),o=a(49),i=a(47),l=a(48),c=a(0),u=a.n(c),m=a(938),d=a(419),p=a(210),f=a(696),h=a(267),v=a(266),g=a(647),y=a(23);function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function S(e,t,a){return t&&E(e.prototype,t),a&&E(e,a),e}function x(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=T(e);if(t){var r=T(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return O(this,a)}}function P(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return C(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return C(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,a=String(e);if(0===t)return a;var n=a.match(/(.*?)([0-9]+)(.*)/),r=n?n[1]:"",s=n?n[3]:"",o=n?n[2]:a,i=o.length>=t?o:(P(Array(t)).map((function(){return"0"})).join("")+o).slice(-1*t);return"".concat(r).concat(i).concat(s)}var N={daysInHours:!1,zeroPadTime:2};function D(e,t){var a=e.days,n=e.hours,r=e.minutes,s=e.seconds,o=Object.assign(Object.assign({},N),t),i=o.daysInHours,l=o.zeroPadTime,c=o.zeroPadDays,u=void 0===c?l:c,m=Math.min(2,l),d=i?j(n+24*a,l):j(n,m);return{days:i?"":j(a,u),hours:d,minutes:j(r,m),seconds:j(s,m)}}var I=function(e){x(a,e);var t=k(a);function a(){var e;return b(this,a),(e=t.apply(this,arguments)).state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval((function(){0===e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState((function(e){return{count:e.count-1}}))}),1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState((function(e){return{count:e.count+t}}),e.startCountdown)},e}return S(a,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?Object(c.cloneElement)(this.props.children,{count:this.state.count}):null}}]),a}(c.Component);I.propTypes={count:y.number,children:y.element,onComplete:y.func};var M=function(e){x(a,e);var t=k(a);function a(e){var n;if(b(this,a),(n=t.call(this,e)).mounted=!1,n.initialTimestamp=n.calcOffsetStartTimestamp(),n.offsetStartTimestamp=n.props.autoStart?0:n.initialTimestamp,n.offsetTime=0,n.legacyMode=!1,n.legacyCountdownRef=Object(c.createRef)(),n.tick=function(){var e=n.calcTimeDelta(),t=e.completed&&!n.props.overtime?void 0:n.props.onTick;n.setTimeDeltaState(e,void 0,t)},n.start=function(){if(!n.isStarted()){var e=n.offsetStartTimestamp;n.offsetStartTimestamp=0,n.offsetTime+=e?n.calcOffsetStartTimestamp()-e:0;var t=n.calcTimeDelta();n.setTimeDeltaState(t,"STARTED",n.props.onStart),n.props.controlled||t.completed&&!n.props.overtime||(n.clearTimer(),n.interval=window.setInterval(n.tick,n.props.intervalDelay))}},n.pause=function(){n.isPaused()||(n.clearTimer(),n.offsetStartTimestamp=n.calcOffsetStartTimestamp(),n.setTimeDeltaState(n.state.timeDelta,"PAUSED",n.props.onPause))},n.stop=function(){n.isStopped()||(n.clearTimer(),n.offsetStartTimestamp=n.calcOffsetStartTimestamp(),n.offsetTime=n.offsetStartTimestamp-n.initialTimestamp,n.setTimeDeltaState(n.calcTimeDelta(),"STOPPED",n.props.onStop))},n.isStarted=function(){return n.isStatus("STARTED")},n.isPaused=function(){return n.isStatus("PAUSED")},n.isStopped=function(){return n.isStatus("STOPPED")},n.isCompleted=function(){return n.isStatus("COMPLETED")},n.handleOnComplete=function(e){n.props.onComplete&&n.props.onComplete(e)},e.date){var r=n.calcTimeDelta();n.state={timeDelta:r,status:r.completed?"COMPLETED":"STOPPED"}}else n.legacyMode=!0;return n}return S(a,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.shallowCompare(this.props,e)||(this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0),this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,a=e.now,n=e.precision,r=e.controlled,s=e.overtime;return function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.now,r=void 0===n?Date.now:n,s=a.precision,o=void 0===s?0:s,i=a.controlled,l=a.offsetTime,c=void 0===l?0:l,u=a.overtime;t="string"===typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,i||(t+=c);var m=i?t:t-r(),d=Math.min(20,Math.max(0,o)),p=Math.round(1e3*parseFloat(((u?m:Math.max(0,m))/1e3).toFixed(d))),f=Math.abs(p)/1e3;return{total:p,days:Math.floor(f/86400),hours:Math.floor(f/3600%24),minutes:Math.floor(f/60%60),seconds:Math.floor(f%60),milliseconds:Number((f%1*1e3).toFixed()),completed:p<=0}}(t,{now:a,precision:n,controlled:r,offsetTime:this.offsetTime,overtime:s})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"shallowCompare",value:function(e,t){var a=Object.keys(e);return a.length===Object.keys(t).length&&!a.some((function(a){var n=e[a],r=t[a];return!t.hasOwnProperty(a)||!(n===r||n!==n&&r!==r)}))}},{key:"setTimeDeltaState",value:function(e,t,a){var n=this;if(this.mounted){var r;!this.state.timeDelta.completed&&e.completed&&(this.props.overtime||this.clearTimer(),r=this.handleOnComplete);return this.setState((function(a){var r=t||a.status;return e.completed&&!n.props.overtime?r="COMPLETED":t||"COMPLETED"!==r||(r="STOPPED"),{timeDelta:e,status:r}}),(function(){a&&a(n.state.timeDelta),r&&r(n.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,t=e.daysInHours,a=e.zeroPadTime,n=e.zeroPadDays,r=this.state.timeDelta;return Object.assign(Object.assign({},r),{api:this.getApi(),props:this.props,formatted:D(r,{daysInHours:t,zeroPadTime:a,zeroPadDays:n})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,a=e.children,n=e.onComplete;return Object(c.createElement)(I,{ref:this.legacyCountdownRef,count:t,onComplete:n},a)}var r=this.props,s=r.className,o=r.overtime,i=r.children,l=r.renderer,u=this.getRenderProps();if(l)return l(u);if(i&&this.state.timeDelta.completed&&!o)return Object(c.cloneElement)(i,{countdown:u});var m=u.formatted,d=m.days,p=m.hours,f=m.minutes,h=m.seconds;return Object(c.createElement)("span",{className:s},u.total<0?"-":"",d,d?":":"",p,":",f,":",h)}}]),a}(c.Component);M.defaultProps=Object.assign(Object.assign({},N),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),M.propTypes={date:Object(y.oneOfType)([Object(y.instanceOf)(Date),y.string,y.number]),daysInHours:y.bool,zeroPadTime:y.number,zeroPadDays:y.number,controlled:y.bool,intervalDelay:y.number,precision:y.number,autoStart:y.bool,overtime:y.bool,className:y.string,children:y.element,renderer:y.func,now:y.func,onMount:y.func,onStart:y.func,onPause:y.func,onStop:y.func,onTick:y.func,onComplete:y.func};var q=M,R=a(192),z=a(77),H=a(387),L=a.n(H),A=a(22),F=a(1),B=a(166),Y=a(153),G=a(232),Q=a(920),U=a(391),K=a(921),W=a(270),J=a(630),V=a(249),$=function(e){var t=e.id,a=e.qType,n=e.stem,r=e.index,s=e.handleChange,o=e.defaultChecked,i=e.isAnswerRestricted,l=Object(A.d)((function(e){return e.exams.disableQuestions}));return u.a.createElement(h.a,{className:"px-md-4 px-xs-2 exam-taker-stem"},u.a.createElement(v.a,{xs:"9"},r+". "+n),u.a.createElement(f.a.Group,{as:v.a,controlId:"formGroupQuestionStemAnswer",className:"d-flex flex-nowarp mb-0"},"matrix"===a?u.a.createElement(u.a.Fragment,null,u.a.createElement(f.a.Check,{type:"radio",className:"mr-4"},u.a.createElement(f.a.Check.Input,{disabled:!!i&&(l&&l.includes(t+"_"+r)),type:"radio",name:t+"_"+r,id:"formHorizontalRadios1",value:1,defaultChecked:"1"===o,onChange:s}),u.a.createElement(f.a.Check.Label,{className:"mt-1 ml-1"},"True")),u.a.createElement(f.a.Check,{type:"radio"},u.a.createElement(f.a.Check.Input,{disabled:!!i&&(l&&l.includes(t+"_"+r)),type:"radio",name:t+"_"+r,id:"formHorizontalRadios2",value:0,defaultChecked:"0"===o,onChange:s,className:"mb-0"}),u.a.createElement(f.a.Check.Label,{className:"mt-1 ml-1"},"False"))):u.a.createElement(f.a.Check,null,u.a.createElement(f.a.Check.Input,{disabled:!!i&&(l&&l.includes(t.toString())),type:"radio",name:t,id:"formHorizontalRadios1",value:r,defaultChecked:o==r,onChange:s,className:"mb-0"}))))},X=function(e){var t=e.question,a=e.handleChange,n=e.defaultChecked,r=e.index,s=e.isAnswerRestricted;return console.log(r),u.a.createElement(G.a,{as:"ul",className:"mt-3"},u.a.createElement(G.a.Item,{className:"lead",as:"li",active:!0},u.a.createElement(Q.a,{variant:"danger"},"Question No. ",r),u.a.createElement(J.a,{remarkPlugins:[V.a],components:{table:function(e){e.node;var t=e.children;Object(Y.a)(e,["node","children"]);return(u.a.createElement(U.a,{bordered:!0,responsive:!0,className:"text-white w-50",children:t}))},img:function(e){e.node;var t=e.src,a=e.alt;Object(Y.a)(e,["node","src","alt"]);return(u.a.createElement(W.LazyLoadComponent,null,u.a.createElement(K.a,{src:t,alt:a,width:350,fluid:!0})))}}},t.qText)),t.stems.map((function(e,r){return u.a.createElement(G.a.Item,{as:"li",key:r},u.a.createElement($,{qType:t.qType,stem:e,index:r+1,id:t.id,handleChange:a,defaultChecked:n?"matrix"===t.qType?n[r]:n[0]:null,isAnswerRestricted:s}))})))},Z=a(381),ee=a(264),te=a(53),ae=a(251),ne=a(190);function re(e){var t=e.examStartDialogueHandler,a=e.exams,r=Object(F.k)(),s=Object(c.useState)(!0),o=Object(n.a)(s,2),i=o[0],l=o[1],f=Object(c.useState)(!1),h=Object(n.a)(f,2),v=h[0],g=h[1],y=function(){t(),l(!1)};return u.a.createElement("div",null,u.a.createElement(m.a,{show:i,onHide:y},u.a.createElement(m.a.Header,{closeButton:!0},u.a.createElement(m.a.Title,null,"Do You want to Proceed to Exam?")),u.a.createElement(m.a.Body,null,u.a.createElement("p",null,"Exam's Stats"),a&&u.a.createElement(G.a,null,u.a.createElement(G.a.Item,null,"Total Questions:"," ",u.a.createElement(Q.a,null,a.questions&&a.questions.length)),u.a.createElement(G.a.Item,null,"Total Mark:"," ",u.a.createElement(Q.a,null,a.questions&&a.singleQuestionMark&&a.questions.length*a.singleQuestionMark)),u.a.createElement(G.a.Item,null,"Time Limit: ",u.a.createElement(Q.a,null,a.timeLimit&&a.timeLimit)," ","Mins"),u.a.createElement(G.a.Item,null,"Penalty Mark: ",u.a.createElement(Q.a,null,a.penaltyMark)," (for each wrong stem)")),u.a.createElement(U.a,{striped:!0,bordered:!0,className:"mt-3"},u.a.createElement("thead",null,u.a.createElement("tr",null,u.a.createElement("th",null,"Question Type"),u.a.createElement("th",null,"Number"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"True/False questions"),u.a.createElement("td",null,a.questions.filter((function(e){return"matrix"===e.qType})).length)),u.a.createElement("tr",null,u.a.createElement("td",null,"SBA questions"),u.a.createElement("td",null,a.questions.filter((function(e){return"sba"===e.qType})).length)))),u.a.createElement(d.a,{onClick:function(){g(!v)},variant:"dark"},"Exam's Rules"),v&&u.a.createElement(p.a,{variant:"warning",className:"mt-3"},u.a.createElement("p",null,"* First"," ",a.questions.filter((function(e){return"matrix"===e.qType})).length," ","questions are True/False type. Rest"," ",a.questions.filter((function(e){return"sba"===e.qType})).length," ","questions are SBA type."),a.isAnswerRestricted&&u.a.createElement("p",{className:"text-danger"},"* You can not modify your answer after clicking an option."),u.a.createElement("p",null,"* After timelimit you will push to result page or you can submit your answer anytime."),a.type>=ne.b[4].value?u.a.createElement("p",{className:"text-danger"},"* This Exam can be taken only one time."):u.a.createElement(u.a.Fragment,null))),u.a.createElement(m.a.Footer,null,u.a.createElement(d.a,{variant:"secondary",onClick:function(){r.goBack()}},"Go Back"),u.a.createElement(d.a,{variant:"primary",onClick:y},"Proceed"))))}function se(e){var t=e.hours,a=e.minutes,n=e.seconds;return e.completed?u.a.createElement("span",{className:"text-danger"},"Your Time is Finished"):u.a.createElement("span",null,["".concat(t," H"),"".concat(a," M"),"".concat(n," S")].map((function(e,n){return u.a.createElement(u.a.Fragment,null,u.a.createElement(Q.a,{variant:t<1&a<5?"danger":"success",style:{fontSize:"1rem"}},e),n<2&&u.a.createElement(Q.a,{variant:"light",style:{fontSize:".8rem"}},":"))})))}var oe=function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={loading:!1,pageSize:1,currentPage:1,date:Date.now(),timeExpired:!1,modalShow:!1,arrowState:!0,showPagination:!0,examStartDialogue:!0},a.timeTakenToComplete=0,a.answers=[],a.answerIds=new Set,a.modalShow=function(){a.setState({modalShow:!0})},a.modalHide=function(){a.setState({modalShow:!1})},a.examStartDialogueHandler=function(){a.setState({examStartDialogue:!1}),a.setState({date:Date.now()})},a.onPageHandler=function(e){g.animateScroll.scrollTo(100,{duration:500}),a.setState({currentPage:e})},a.onHandleChange=function(e){var t=e.target.name,r=e.target.value;if(a.props.onDisableQuestionsAddLoader(t),t.includes("_")){var s=t.split("_"),o=Object(n.a)(s,2),i=o[0],l=o[1];a.setState((function(e){e[i]||(e[i]=[]),e[i][l-1]=r,a.answerIds.add(i)}))}else a.setState((function(e){e[t]=[r],a.answerIds.add(t)}))},a.onSwithchHandleChange=function(e){e.target.checked?a.setState({pageSize:a.props.exams.questions.length,currentPage:1,showPagination:!1}):a.setState({pageSize:1,showPagination:!0})},a.onSubmitHandler=function(){var e=a.props.match.params.id.split("_")[0],t=a.props.match.params.id.split("_")[1];a.setState({loading:!0}),a.answerIds.forEach((function(e){a.answers.push({id:e,stems:a.state[e],type:_.find(a.props.exams.questions,(function(t){return t.id===+e})).qType})})),a.props.free?a.props.onPostFreeExamByIdLoader({examId:e,timeTakenToComplete:(a.timeTakenToComplete/60).toFixed(4),answers:a.answers,questionIdsByOrder:a.props.exams.questionIdsByOrder}):a.props.onPostExamByIdLoader({examId:e,courseId:t,timeTakenToComplete:Math.ceil(a.timeTakenToComplete/60).toFixed(4),answers:a.answers,questionIdsByOrder:a.props.exams.questionIdsByOrder})},a}return Object(l.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onResetExamLoader(),this.props.free?this.props.onGetFreeExamByIdLoader(this.props.match.params.id):this.props.onGetExamByIdLoader(this.props.match.params.id)}},{key:"render",value:function(){var e=this,t=Object(ae.a)(this.props.exams.questions,this.state.currentPage,this.state.pageSize);return u.a.createElement(u.a.Fragment,null,u.a.createElement(R.a,null,u.a.createElement("title",null,"Exam- test your knowledge")),(this.props.exams.examResult||this.props.exams.error)&&u.a.createElement(F.c,{to:"/result"}),this.props.exams.questions.length<1&&!this.props.exams.examError&&u.a.createElement(B.a,null),u.a.createElement(m.a,{show:this.state.modalShow,onHide:this.modalHide},this.state.loading?u.a.createElement("p",{className:"lead mt-5 text-center"},"Your submitted Exam is processing..."):this.state.timeExpired?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a.Header,null,u.a.createElement(m.a.Title,{className:"text-danger"},"Time Expired")),u.a.createElement(m.a.Body,null,u.a.createElement("div",null,u.a.createElement("p",{className:"lead"},"You will Taken To Result Page."),u.a.createElement(q,{date:Date.now()+5e3,renderer:function(e){var t=e.seconds;return(u.a.createElement("p",{className:"text-center text-danger",style:{fontSize:"2rem"}},t))},onComplete:this.onSubmitHandler})))):u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a.Header,{closeButton:!0},u.a.createElement(m.a.Title,null,this.props.intl.formatMessage({id:"btn.sas",defaultMessage:"Submit Answer Sheet"}))),u.a.createElement(m.a.Body,null,u.a.createElement("div",null,u.a.createElement("p",{className:"lead"},this.props.intl.formatMessage({id:"et.agree",defaultMessage:"Are You Sure ? You will Taken To Result Page. "}),"You do no answer",u.a.createElement("span",{className:"text-danger"}," ",this.props.exams.questions.length-this.answerIds.size," ")," questions."),u.a.createElement(q,{date:Date.now()+1e4,renderer:function(e){var t=e.seconds;return(u.a.createElement("p",{className:"text-center text-danger",style:{fontSize:"2rem"}},t))},onComplete:this.onSubmitHandler}))),u.a.createElement(m.a.Footer,null,u.a.createElement(d.a,{variant:"secondary",onClick:this.modalHide},this.props.intl.formatMessage({id:"et.no",defaultMessage:"Go Back"})),u.a.createElement(d.a,{variant:"primary",onClick:this.onSubmitHandler},this.props.intl.formatMessage({id:"et.yes",defaultMessage:"Yes, I Want."}))))),this.props.exams.examError?u.a.createElement(u.a.Fragment,null,u.a.createElement(p.a,{variant:"danger",className:"text-center mt-5"},u.a.createElement("h2",null,this.props.exams.examError),u.a.createElement("h4",null,"Possible Solution"),this.props.auth.token?u.a.createElement("p",null,"You may not enrolled for the course. Please enroll first."):u.a.createElement("p",null," You are not logged in. So you can not participate exams other than free. So login or participate free exam only.")),u.a.createElement(Z.a,null)):this.props.exams.timeLimit&&(this.state.examStartDialogue?u.a.createElement(re,{exams:this.props.exams,examStartDialogueHandler:this.examStartDialogueHandler}):u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"text-dark text-center px-2 pt-3 pb-2 mt-1 bg-light sticky-top"},u.a.createElement("div",{className:"d-flex justify-content-around mb-2"},u.a.createElement(f.a.Switch,{id:"custom-switch",label:this.props.intl.formatMessage({id:"btn.aqv",defaultMessage:"Switch to All Questions View"}),className:"mr-2",onChange:this.onSwithchHandleChange}),u.a.createElement(d.a,{onClick:this.modalShow,className:"btn-md"},this.props.intl.formatMessage({id:"btn.sas",defaultMessage:"Submit Answer"}))),u.a.createElement(q,{date:this.state.date+60*this.props.exams.timeLimit*1e3,renderer:se,onTick:function(){e.timeTakenToComplete++},onComplete:function(){e.setState({timeExpired:!0,modalShow:!0})}})),u.a.createElement(h.a,{id:"et-top"},u.a.createElement(v.a,{lg:9},t.map((function(t,a){return u.a.createElement(X,{key:t.id,question:t,handleChange:e.onHandleChange,defaultChecked:e.state[t.id]?e.state[t.id]:null,index:e.state.showPagination?e.state.currentPage*e.state.pageSize:a+1,isAnswerRestricted:e.props.exams.isAnswerRestricted})})),u.a.createElement("div",{className:"mt-2 d-flex justify-content-center"},this.state.showPagination&&u.a.createElement(L.a,{activePage:this.state.currentPage,itemsCountPerPage:1,totalItemsCount:this.props.exams.questions.length,pageRangeDisplayed:1,onChange:this.onPageHandler,itemClass:"page-item",linkClass:"page-link",prevPageText:"Previous",nextPageText:"Next"}))),u.a.createElement(v.a,{lg:3,className:"mt-3",id:"qNavigator"},this.state.showPagination&&u.a.createElement(ee.a,{itemsCount:this.props.exams.questions.length,pageSize:this.state.pageSize,currentPage:this.state.currentPage,onPageHandler:this.onPageHandler}))))))}}]),t}(c.Component);t.default=Object(z.c)(Object(A.b)((function(e){return{exams:e.exams,auth:e.auth}}),(function(e){return{onGetExamByIdLoader:function(t){return e(Object(te.e)(t))},onGetFreeExamByIdLoader:function(t){return e(Object(te.f)(t))},onPostExamByIdLoader:function(t){return e(Object(te.g)(t))},onPostFreeExamByIdLoader:function(t){return e(Object(te.h)(t))},onResetExamLoader:function(){return e({type:te.i.type})},onDisableQuestionsAddLoader:function(t){return e({type:te.b.type,payload:t})}}}))(Object(F.o)(oe)))}}]);
//# sourceMappingURL=36.866f16ca.chunk.js.map