(this.webpackJsonptravel2=this.webpackJsonptravel2||[]).push([[14],{196:function(e,t,n){},237:function(e,t,n){"use strict";n.r(t);n(175);var a=n(180),r=n.n(a),o=(n(78),n(194)),i=n.n(o),s=(n(89),n(92)),l=n.n(s),c=n(8),m=n(9),u=n(12),g=n(10),h=n(11),f=(n(107),n(108)),d=n.n(f),p=n(0),j=n.n(p),v=(n(196),n(64)),I=(n(197),n(199)),b=n.n(I),O=(n(200),n(204)),w=n.n(O),E=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={files:[],multiple:!1},n.onChange=function(e,t,a){console.log(e,t,a),n.setState({files:e})},n.onSegChange=function(e){var t=e.nativeEvent.selectedSegmentIndex;n.setState({multiple:1===t})},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.files;return j.a.createElement(b.a,null,j.a.createElement(w.a,{files:e,length:1,onChange:this.onChange,onImageClick:function(e,t){return console.log(e,t)},selectable:e.length<1,multiple:this.state.multiple}))}}]),t}(p.Component),k=n(16);function y(e){var t=new Date(+e);return t.getFullYear()+"-"+t.getMonth()+"-"+t.getDate()}n.d(t,"NewTravel",(function(){return x}));var N=d.a.alert,C=function(e,t){N(e,t,[{text:"\u53d6\u6d88",onPress:function(){return console.log("cancel")},style:"default"},{text:"\u597d\u7684",onPress:function(){return console.log("ok")}}])},M=Date.now(),T=new Date(M),S=[{name:"\u4f60\u7684\u6545\u4e8b",img:"/img/joinersImg/j1.png"},{name:"drake your",img:"/img/joinersImg/j2.png"},{name:"\u6e10\u53d8",img:"/img/joinersImg/j3.png"},{name:"\u4e00\u76f4\u5f80\u5357",img:"/img/joinersImg/j4.png"},{name:"silence",img:"/img/joinersImg/j5.png"},{name:"JOJO",img:"/img/joinersImg/j6.png"},{name:"mengHi",img:"/img/joinersImg/j7.png"},{name:"\u798f\u5dde\u731b",img:"/img/joinersImg/j8.png"},{name:"\u5173\u5173\u96ce\u9e20",img:"/img/joinersImg/j9.png"}],D=Math.floor(1e8*Math.random()),F=Math.floor(1e3*Math.random()),L=Math.floor(8*Math.random()+2),J=Math.floor(100*Math.random()),x=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(g.a)(t).call(this,e))).state={date:T},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"SmtAction",value:function(){console.log(),this.imgLoader.state.files[0]?this.autoFocusInst.state.value?this.customFocusInst.state.value?this.state.date!==T?(this.props.addNewTravel({id:D,username:this.props.userInfo.name,userImg:this.props.userInfo.img,releaseTime:y(Number(this.state.date)),title:this.autoFocusInst.state.value,img:this.imgLoader.state.files[0].url,views:F,numOfJoin:L,commentNum:J,joiner:S.slice(L)}),this.props.history.goBack()):C("\u65f6\u95f4","\u4f60\u786e\u5b9a\u65f6\u95f4\u6ca1\u9519\u5417"):C("\u63cf\u8ff0","\u6211\u4eec\u627e\u4e0d\u5230\u63cf\u8ff0\u5462"):C("\u5730\u70b9","\u6211\u4eec\u627e\u4e0d\u5230\u5730\u70b9\u5462"):C("\u56fe\u7247","\u6211\u4eec\u627e\u4e0d\u5230\u56fe\u7247\u5462")}},{key:"getImgUrl",value:function(){}},{key:"render",value:function(){var e=this;return j.a.createElement("div",{className:"newTravel page subpage"},j.a.createElement(v.a,this.props),j.a.createElement("div",{className:"newTravelContent"},j.a.createElement("div",{className:"imgLoaderBox"},j.a.createElement(E,{ref:function(t){return e.imgLoader=t},getImgUrl:!0,className:"imgLoader"})),j.a.createElement(l.a,{title:"\u5730\u70b9",placeholder:"\u586b\u5199\u65c5\u884c\u7684 \u6807\u9898","data-seed":"logId",ref:function(t){return e.autoFocusInst=t},autoHeight:!0,rows:1,count:15}),j.a.createElement("hr",null),j.a.createElement(l.a,{title:"\u63cf\u8ff0",placeholder:"\u53bb\u65c5\u884c\u7684\u611f\u60f3\u548c\u76f8\u5bf9\u5927\u5bb6\u8bf4\u7684\u8bdd","data-seed":"logId",autoHeight:!0,rows:4,ref:function(t){return e.customFocusInst=t}}),j.a.createElement(r.a,{minDate:new Date(M),mode:"date",value:this.state.date,onChange:function(t){return e.setState({date:t})}},j.a.createElement(i.a.Item,{arrow:"horizontal"},"\u65f6\u95f4")),j.a.createElement("p",{className:"newTravelSMT",onClick:this.SmtAction.bind(this)},"\u53d1\u5e03")))}}]),t}(p.Component);t.default=Object(k.b)((function(e){return{userInfo:e.user}}),(function(e){return{addNewTravel:function(t){e({type:"addNewTravel",data:t})}}}))(x)},64:function(e,t,n){"use strict";var a=n(8),r=n(9),o=n(12),i=n(10),s=n(11),l=n(0),c=n.n(l),m=(n(65),function(e){function t(){return Object(a.a)(this,t),Object(o.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"headerBack"},c.a.createElement("span",{className:"iconfont icon-Left",onClick:this.props.history.goBack}),c.a.createElement("img",{src:"/img/logo.png",alt:""}))}}]),t}(l.Component));t.a=m},65:function(e,t,n){}}]);
//# sourceMappingURL=14.5c7961ef.chunk.js.map