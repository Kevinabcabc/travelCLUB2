(this.webpackJsonptravel2=this.webpackJsonptravel2||[]).push([[8],{106:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=t.canUseDOM=!("undefined"===typeof window||!window.document||!window.document.createElement);t.IS_IOS=a&&/iphone|ipad|ipod/i.test(window.navigator.userAgent)},173:function(e,t,n){},232:function(e,t,n){"use strict";n.r(t),n.d(t,"Apply",(function(){return y}));n(89);var a=n(92),r=n.n(a),o=n(13),l=n(8),i=n(9),s=n(12),u=n(10),c=n(11),f=(n(107),n(108)),p=n.n(f),d=n(0),m=n.n(d),h=(n(173),n(64)),v=n(16);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var g=p.a.alert,y=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={id:"",reason:""},n.travelInfo=e.travelList.list.filter((function(t){return t.id===Number(e.match.params.id)}))[0],n.imgUrl=n.travelInfo.img,n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"applySmtAction",value:function(){this.customFocusInst.state.value?this.setState(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.state,{id:this.props.userinfo.id,reason:this.customFocusInst.state.value}),(function(){this.props.applyOneTravel(this.travelInfo),this.props.history.push("/myTravel");var e={id:(new Date).getTime(),user:this.props.userinfo,travel:this.travelInfo,reason:this.state.reason};this.props.addTravelJoiner(e)})):g("\u7533\u8bf7\u7406\u7531","\u8bf7\u586b\u5199\u7533\u8bf7\u7684\u7406\u7531",[{text:"\u53d6\u6d88",onPress:function(){return console.log("cancel")},style:"default"},{text:"\u597d\u7684",onPress:function(){return console.log("ok")}}])}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"page subpage apply"},m.a.createElement(h.a,this.props),m.a.createElement("div",{className:"applyWrapper"},m.a.createElement("div",{className:"imgBox"},m.a.createElement("img",{src:this.imgUrl,alt:""})),m.a.createElement("div",{className:"userInfo"},m.a.createElement("div",{className:"imgbox"},m.a.createElement("img",{src:this.travelInfo.userImg,alt:""}),m.a.createElement("p",{className:"name"},this.travelInfo.username)),m.a.createElement("span",null,"nothing")),m.a.createElement("div",{className:"intro"},m.a.createElement(r.a,{title:"\u5730\u70b9",value:this.travelInfo.title,"data-seed":"logId",ref:function(t){return e.autoFocusInst=t},autoHeight:!0,rows:1,editable:!1,count:15}),m.a.createElement("hr",null),m.a.createElement(r.a,{title:"\u65f6\u95f4",value:this.travelInfo.releaseTime,"data-seed":"logId",ref:function(t){return e.autoFocusInst=t},autoHeight:!0,rows:1,editable:!1,count:15}),m.a.createElement("hr",null),m.a.createElement(r.a,{title:"\u7533\u8bf7",placeholder:"\u53bb\u65c5\u884c\u7684\u611f\u60f3\u548c\u76f8\u5bf9\u5927\u5bb6\u8bf4\u7684\u8bdd","data-seed":"logId",autoHeight:!0,rows:4,ref:function(t){return e.customFocusInst=t}})),m.a.createElement("div",{className:"applyBtn",onClick:this.applySmtAction.bind(this)},"\u53d1\u9001\u7533\u8bf7")))}}]),t}(d.Component);t.default=Object(v.b)((function(e){return{travelList:e.travels,userinfo:e.user}}),(function(e){return{applyOneTravel:function(t){e({type:"applyOneTravel",val:t})},addTravelJoiner:function(t){e({type:"addTravelJoiner",val:t})}}}))(y)},64:function(e,t,n){"use strict";var a=n(8),r=n(9),o=n(12),l=n(10),i=n(11),s=n(0),u=n.n(s),c=(n(65),function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"headerBack"},u.a.createElement("span",{className:"iconfont icon-Left",onClick:this.props.history.goBack}),u.a.createElement("img",{src:"/img/logo.png",alt:""}))}}]),t}(s.Component));t.a=c},65:function(e,t,n){},78:function(e,t,n){"use strict";n(58),n(90)},89:function(e,t,n){"use strict";n(58),n(78),n(91)},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n(56)),r=d(n(70)),o=d(n(52)),l=d(n(53)),i=d(n(54)),s=d(n(55)),u=d(n(57)),c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(0)),f=d(n(75)),p=n(106);function d(e){return e&&e.__esModule?e:{default:e}}var m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n};function h(){}var v=/[\uD800-\uDBFF][\uDC00-\uDFFF]|\n/g;var b=function(e){function t(e){(0,o.default)(this,t);var n=(0,i.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.focus=function(){n.textareaRef.focus()},n.reAlignHeight=function(){var e=n.textareaRef;e.style.height="",e.style.height=e.scrollHeight+"px"},n.onChange=function(e){var t=e.target.value;"value"in n.props?n.setState({value:n.props.value}):n.setState({value:t});var a=n.props.onChange;a&&a(t),n.componentDidUpdate()},n.onBlur=function(e){n.debounceTimeout=setTimeout((function(){document.activeElement!==n.textareaRef&&n.setState({focus:!1})}),100);var t=e.currentTarget.value;n.props.onBlur&&(setTimeout((function(){document.body&&(document.body.scrollTop=document.body.scrollTop)}),100),n.props.onBlur(t))},n.onFocus=function(e){n.debounceTimeout&&(clearTimeout(n.debounceTimeout),n.debounceTimeout=null),n.setState({focus:!0});var t=e.currentTarget.value;n.props.onFocus&&n.props.onFocus(t)},n.onErrorClick=function(){n.props.onErrorClick&&n.props.onErrorClick()},n.clearInput=function(){n.setState({value:""}),n.props.onChange&&n.props.onChange("")},n.state={focus:!1,value:e.value||e.defaultValue||""},n}return(0,s.default)(t,e),(0,l.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t;"value"in e&&this.setState({value:(t=e.value,"undefined"===typeof t||null===t?"":t)})}},{key:"componentDidMount",value:function(){this.props.autoHeight&&this.reAlignHeight()}},{key:"componentDidUpdate",value:function(){this.props.autoHeight&&this.state.focus&&this.reAlignHeight()}},{key:"componentWillUnmount",value:function(){this.debounceTimeout&&(clearTimeout(this.debounceTimeout),this.debounceTimeout=null)}},{key:"render",value:function(){var e,t,n=this,o=this.props,l=o.prefixCls,i=o.prefixListCls,s=o.editable,d=o.style,h=o.clear,b=(o.children,o.error),g=o.className,y=o.count,O=o.labelNumber,E=o.title,j=(o.onErrorClick,o.autoHeight),C=(o.defaultValue,m(o,["prefixCls","prefixListCls","editable","style","clear","children","error","className","count","labelNumber","title","onErrorClick","autoHeight","defaultValue"])),w=C.disabled,k=this.state,I=k.value,T=k.focus,x=y>0&&this.props.rows>1,N=(0,u.default)(g,i+"-item",l+"-item",(e={},(0,r.default)(e,l+"-disabled",w),(0,r.default)(e,l+"-item-single-line",1===this.props.rows&&!j),(0,r.default)(e,l+"-error",b),(0,r.default)(e,l+"-focus",T),(0,r.default)(e,l+"-has-count",x),e)),P=(0,u.default)(l+"-label",(t={},(0,r.default)(t,l+"-label-2",2===O),(0,r.default)(t,l+"-label-3",3===O),(0,r.default)(t,l+"-label-4",4===O),(0,r.default)(t,l+"-label-5",5===O),(0,r.default)(t,l+"-label-6",6===O),(0,r.default)(t,l+"-label-7",7===O),t)),S=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").replace(v,"_").length}(I),_={};if(y>0)if(p.IS_IOS){var F=I?I.replace(v,"_"):"",D=F?F.split("_").length-1:0;_.maxLength=y+D-S+(I?I.length:0)}else _.maxLength=y-S+(I?I.length:0);return c.createElement("div",{className:N},E&&c.createElement("div",{className:P},E),c.createElement("div",{className:l+"-control"},c.createElement("textarea",(0,a.default)({ref:function(e){return n.textareaRef=e}},_,C,{value:I,onChange:this.onChange,onBlur:this.onBlur,onFocus:this.onFocus,readOnly:!s,style:d}))),h&&s&&I&&S>0&&c.createElement(f.default,{activeClassName:l+"-clear-active"},c.createElement("div",{className:l+"-clear",onClick:this.clearInput})),b&&c.createElement("div",{className:l+"-error-extra",onClick:this.onErrorClick}),x&&c.createElement("span",{className:l+"-count"},c.createElement("span",null,I?S:0),"/",y))}}]),t}(c.Component);t.default=b,b.defaultProps={prefixCls:"am-textarea",prefixListCls:"am-list",autoHeight:!1,editable:!0,disabled:!1,placeholder:"",clear:!1,rows:1,onChange:h,onBlur:h,onFocus:h,onErrorClick:h,error:!1,labelNumber:5},e.exports=t.default}}]);
//# sourceMappingURL=8.fe34e11f.chunk.js.map