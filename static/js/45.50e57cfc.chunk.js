(this.webpackJsonpeexam_front=this.webpackJsonpeexam_front||[]).push([[45],{173:function(e,a,t){"use strict";var n=t(6),r=t(11),s=t(145),l=t.n(s),i=t(0),o=t.n(i),c=t(220),m=t(170),u=t(147),d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.active,d=e.disabled,p=e.className,b=e.variant,h=e.action,f=e.as,v=e.eventKey,E=e.onClick,x=Object(r.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(u.b)(t,"list-group-item");var k=Object(i.useCallback)((function(e){if(d)return e.preventDefault(),void e.stopPropagation();E&&E(e)}),[d,E]);return o.a.createElement(c.a,Object(n.a)({ref:a},x,{eventKey:Object(m.b)(v,x.href),as:f||(h?x.href?"a":"button":"div"),onClick:k,className:l()(p,t,s&&"active",d&&"disabled",b&&t+"-"+b,h&&t+"-action")}))}));d.defaultProps={variant:null,active:!1,disabled:!1},d.displayName="ListGroupItem",a.a=d},212:function(e,a,t){"use strict";var n=t(6),r=t(11),s=t(145),l=t.n(s),i=t(0),o=t.n(i),c=t(147),m=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,i=e.striped,m=e.bordered,u=e.borderless,d=e.hover,p=e.size,b=e.variant,h=e.responsive,f=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),v=Object(c.b)(t,"table"),E=l()(s,v,b&&v+"-"+b,p&&v+"-"+p,i&&v+"-striped",m&&v+"-bordered",u&&v+"-borderless",d&&v+"-hover"),x=o.a.createElement("table",Object(n.a)({},f,{className:E,ref:a}));if(h){var k=v+"-responsive";return"string"===typeof h&&(k=k+"-"+h),o.a.createElement("div",{className:k},x)}return x}));a.a=m},237:function(e,a,t){"use strict";var n=t(6),r=t(11),s=t(145),l=t.n(s),i=t(0),o=t.n(i),c=t(161),m=t(168),u=t(164),d=t(211),p=t(147),b=t(171),h=t(210),f=t(175),v={show:!0,transition:b.a,closeLabel:"Close alert"},E={show:"onClose"},x=o.a.forwardRef((function(e,a){var t=Object(c.b)(e,E),s=t.bsPrefix,i=t.show,u=t.closeLabel,d=t.className,b=t.children,f=t.variant,v=t.onClose,x=t.dismissible,k=t.transition,O=Object(r.a)(t,["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"]),g=Object(p.b)(s,"alert"),j=Object(m.a)((function(e){v(!1,e)})),N=o.a.createElement("div",Object(n.a)({role:"alert"},k?O:void 0,{className:l()(d,g,f&&g+"-"+f,x&&g+"-dismissible")}),x&&o.a.createElement(h.a,{onClick:j,label:u}),b);return k?o.a.createElement(k,Object(n.a)({unmountOnExit:!0,ref:a},O,{in:i}),N):i?N:null})),k=Object(d.a)("h4");k.displayName="DivStyledAsH4",x.displayName="Alert",x.defaultProps=v,x.Link=Object(u.a)("alert-link",{Component:f.a}),x.Heading=Object(u.a)("alert-heading",{Component:k}),a.a=x},238:function(e,a,t){"use strict";var n=t(6),r=t(11),s=t(145),l=t.n(s),i=t(0),o=t.n(i),c=(t(158),t(161)),m=t(147),u=t(219),d=t(173),p=o.a.forwardRef((function(e,a){var t,s=Object(c.b)(e,{activeKey:"onSelect"}),i=s.className,d=s.bsPrefix,p=s.variant,b=s.horizontal,h=s.as,f=void 0===h?"div":h,v=Object(r.a)(s,["className","bsPrefix","variant","horizontal","as"]);return d=Object(m.b)(d,"list-group"),t=b?!0===b?"horizontal":"horizontal-"+b:null,o.a.createElement(u.a,Object(n.a)({ref:a},v,{as:f,className:l()(i,d,p&&d+"-"+p,t&&d+"-"+t)}))}));p.defaultProps={variant:null,horizontal:null},p.displayName="ListGroup",p.Item=d.a,a.a=p},940:function(e,a,t){"use strict";t.r(a);var n=t(45),r=t(50),s=t(49),l=t(47),i=t(48),o=t(157),c=t(0),m=t.n(c),u=t(238),d=t(212),p=t(237),b=t(931),h=t(22),f=t(51),v=t(169),E=function(e){function a(){return Object(n.a)(this,a),Object(s.a)(this,Object(l.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id.includes("_")?this.props.match.params.id.split("_")[0]:null;this.props.onExamRankByLoader(this.props.match.params.id.split("_")[1],e)}},{key:"render",value:function(){var e=this;return(m.a.createElement("div",{className:"mt-5"},this.props.rankLoading&&m.a.createElement(v.a,null),m.a.createElement("h3",{className:"text-center"},m.a.createElement(b.a,{id:"btn.rank",defaultMessage:"Rank"})),m.a.createElement("div",null,this.props.exam&&m.a.createElement(u.a,{horizontal:"lg"},m.a.createElement(u.a.Item,null,m.a.createElement(b.a,{id:"exam",defaultMessage:"Exams"})," :"," ",this.props.exam.title),m.a.createElement(u.a.Item,null,m.a.createElement(b.a,{id:"db.os",defaultMessage:"Total Mark"})," :"," ",this.props.exam.singleQuestionMark*this.props.exam.questions.length),m.a.createElement(u.a.Item,null,m.a.createElement(b.a,{id:"tquestions",defaultMessage:"Total Questions"})," ",": ",this.props.exam.questions.length),m.a.createElement(u.a.Item,null,m.a.createElement(b.a,{id:"penalty mark",defaultMessage:"Penalty Mark"})," ",":"," ",(this.props.exam.penaltyMark*this.props.exam.questionStemLength).toFixed(2)),m.a.createElement(u.a.Item,null,m.a.createElement(b.a,{id:"timelimit",defaultMessage:"Time Limit"})," ",": ",this.props.exam.timeLimit," Mins"),m.a.createElement(u.a.Item,null,m.a.createElement(b.a,{id:"db.so",defaultMessage:"Started From"})," :"," ",o(this.props.exam.createdAt).format("DD-MMM-YYYY, hh:mm A")))),m.a.createElement("div",null,this.props.rank&&this.props.rank.length>0?m.a.createElement(d.a,{striped:!0,bordered:!0,hover:!0,responsive:"md",className:"mt-3"},m.a.createElement("thead",null,m.a.createElement("tr",null,m.a.createElement("th",null,"#"),m.a.createElement("th",null,"Name"),m.a.createElement("th",null,"Score"),m.a.createElement("th",null,"Attempts"))),m.a.createElement("tbody",null,this.props.rank.map((function(a,t){return m.a.createElement("tr",{key:t,className:a.user?+e.props.userId===+a.user.id?"bg-success text-light ":"":"text-danger"},m.a.createElement("td",null,t+1),m.a.createElement("td",null,a.user?a.user.name:"<-- Unknown --\x3e"),m.a.createElement("td",null,a.exam.length>0?a.exam[0].score:"Exam Not Yet Tried"),m.a.createElement("td",null,a.exam.length>0?a.exam[0].attempts:"Exam Not Yet Tried"))})))):m.a.createElement(p.a,{variant:"success",className:"text-center my-2"},"Be first by taking part in the exam."))))}}]),a}(c.Component);a.default=Object(h.b)((function(e){return{rankLoading:e.exams.rankLoading,rank:e.exams.rank,exam:e.exams.exam,userId:e.auth.userId}}),(function(e){return{onExamRankByLoader:function(a,t){return e(Object(f.c)(a,t))}}}))(E)}}]);
//# sourceMappingURL=45.50e57cfc.chunk.js.map