(this.webpackJsonptravel2=this.webpackJsonptravel2||[]).push([[12],{111:function(e,t,a){"use strict";var n=a(8),r=a(9),s=a(12),c=a(10),i=a(11),l=a(0),o=a.n(l),m=(a(87),a(88),a(110)),p=function(e){return o.a.createElement("div",{className:"joinerBox"},o.a.createElement("div",{className:"joinerImgBox"},o.a.createElement("img",{src:e.item.img,alt:""})),o.a.createElement("p",{className:"joiner-name"},e.item.name))},u=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"joiners"},o.a.createElement("div",{className:"swiper-container",ref:"container"},o.a.createElement("div",{className:"swiper-wrapper"},this.props.joiner.map((function(e,t){return o.a.createElement("div",{className:"swiper-slide",key:t},o.a.createElement(p,{item:e}))})))))}},{key:"componentDidMount",value:function(){new m.a(this.refs.container,{direction:"horizontal",loop:!1,slidesPerView:5.6,spaceBetween:10,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}})}}]),t}(l.Component),f=function(e){function t(e){var a;return Object(n.a)(this,t),a=Object(s.a)(this,Object(c.a)(t).call(this,e)),console.log(e),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"applyAction",value:function(){console.log(this.props),this.props.history.push("/findTravel/apply/".concat(this.props.id))}},{key:"render",value:function(){return o.a.createElement("div",{className:"travelInfo"},o.a.createElement("div",{className:"userInfoBox"},o.a.createElement("div",{className:"imgBox"},o.a.createElement("img",{src:this.props.userImg,alt:""})),o.a.createElement("div",{className:"userNameAndOther"},o.a.createElement("p",{className:"userName"},this.props.username),o.a.createElement("p",{className:"someuserTravelInfo"}," ",o.a.createElement("span",null,"\u65f6\u95f4\uff1a",this.props.releaseTime),o.a.createElement("span",{className:"iconfont icon-dot1"}),o.a.createElement("span",null,this.props.views,"\u6b21\u6d4f\u89c8"),o.a.createElement("span",{className:"iconfont icon-dot1"}),o.a.createElement("span",{className:"iconfont icon-icon-test15"}))),o.a.createElement("span",{className:"iconfont icon-dot"})),o.a.createElement("p",{className:"tracelTitle"},this.props.title),o.a.createElement("img",{src:this.props.img,alt:""}),o.a.createElement("div",{className:"joinAndComment"},o.a.createElement("p",{className:"numberOfJoin"},o.a.createElement("span",{className:"iconfont icon-renshu1"}),o.a.createElement("span",null,this.props.numOfJoin,"\u4eba")),o.a.createElement("p",{className:"numberOfComment"},this.props.commentNum,"\u6761\u8bc4\u8bba")),o.a.createElement("hr",null),o.a.createElement("div",{className:"joiner"},o.a.createElement("p",{className:"joiner-title"},o.a.createElement("span",null,"\u53c2\u4e0e\u8005"),o.a.createElement("span",{className:"iconfont icon-jiantou1"}," \u67e5\u770b\u6240\u6709\u4eba")),o.a.createElement(u,{joiner:this.props.joiner})),o.a.createElement("hr",null),this.props.share?"":o.a.createElement("div",{className:"infoTabs"},o.a.createElement("span",{onClick:this.applyAction.bind(this),className:"iconfont icon-add"},"\xa0\u7533\u8bf7"),o.a.createElement("span",{className:"iconfont icon-comment"},"\xa0\u8bc4\u8bba"),o.a.createElement("span",{className:"iconfont icon-share"},"\xa0\u5206\u4eab")))}}]),t}(l.Component);t.a=f},174:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t),a.d(t,"ReleaseTravel",(function(){return h}));var n=a(8),r=a(9),s=a(12),c=a(10),i=a(11),l=a(0),o=a.n(l),m=(a(174),a(16)),p=a(18),u=a(111),f=a(62),E=function(){return o.a.createElement(p.Link,{to:"/releaseTravel/newTravel"},o.a.createElement("div",{className:"newTravel"},o.a.createElement("p",{className:"iconfont icon-fabu1"}),o.a.createElement("p",{className:"newTravelText"},"\u53d1\u5e03\u4e00\u6761\u65c5\u884c")))},h=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return console.log(this.props),o.a.createElement("div",{className:"page releaseTravel"},o.a.createElement(f.a,{className:"scroll"},this.props.userInfo.userTravels.map((function(e){return console.log(e),o.a.createElement(u.a,Object.assign({share:!0},e,{key:e.id}))})),o.a.createElement(E,null)))}}]),t}(l.Component);t.default=Object(m.b)((function(e){return{userInfo:e.user}}),(function(e){return{}}))(h)},62:function(e,t,a){"use strict";var n=a(8),r=a(9),s=a(12),c=a(10),i=a(11),l=a(0),o=a.n(l),m=(a(63),a(77)),p=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"content",ref:"content"},o.a.createElement("div",{className:"scroll"},this.props.children))}},{key:"componentDidMount",value:function(){var e=new m.a(this.refs.content,{tap:!0,click:!0});e.on("beforeScrollStart",(function(){e.refresh()}))}}]),t}(l.Component);t.a=p},63:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){}}]);
//# sourceMappingURL=12.165201ff.chunk.js.map