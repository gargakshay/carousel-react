(this["webpackJsonpcarousel-project"]=this["webpackJsonpcarousel-project"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),i=a(2),n=a.n(i),r=(a(13),a(14),a(6)),o=a(3),m=a(4),l=a(7),g=a(5),h=(a(15),function(e){Object(l.a)(a,e);var t=Object(g.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).onPrev=function(){var e=s.state.index-1;0===e?s.setState({index:s.state.list.length-2}):s.setState({index:e})},s.onNext=function(){var e=(s.state.index+1)%(s.state.list.length-1);0===e?s.setState({index:1}):s.setState({index:e})},s.state={index:1,length:s.props.list.length,width:s.props.width||200,list:s.processList(s.props.list)},s}return Object(m.a)(a,[{key:"processList",value:function(e){if(Array.isArray(e)){var t=Object(r.a)(e);return t.unshift(e[e.length-1]),t.push(e[0]),t}}},{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"carousel",style:{width:"".concat(3*this.state.width,"px")}},c.a.createElement("div",{className:"arrow arrow-left",onClick:this.onPrev}),c.a.createElement("div",{className:"slider-wrapper"},c.a.createElement("div",{className:"slides",style:{transform:"translateX(-".concat(this.state.index*this.state.width-.75*this.state.width,"px)")}},this.state.list.map((function(t,a){return c.a.createElement("div",{className:"slide",style:{width:e.state.width+"px",minWidth:e.state.width+"px"},key:a},t)})))),c.a.createElement("div",{className:"arrow arrow-right",onClick:this.onNext})))}}]),a}(s.Component));var p=function(){for(var e=[c.a.createElement("img",{src:"assets/images/photo-1544194215-541c2d3561a4.jpeg",className:"image-c"}),c.a.createElement("img",{src:"assets/images/photo-1544210163-257effe9399e.jpeg",className:"image-c"}),c.a.createElement("img",{src:"assets/images/photo-1546430783-fe4b9c159e52.jpeg",className:"image-c"}),c.a.createElement("img",{src:"assets/images/photo-1548438294-1ad5d5f4f063.jpeg",className:"image-c"}),c.a.createElement("img",{src:"assets/images/photo-1553374402-559e8b431161.jpeg",className:"image-c"}),c.a.createElement("img",{src:"assets/images/photo-1554290712-e640351074bd.jpeg",className:"image-c"}),c.a.createElement("img",{src:"assets/images/photo-1544194215-541c2d3561a4.jpeg",className:"image-c"}),c.a.createElement("img",{src:"assets/images/photo-1544210163-257effe9399e.jpeg",className:"image-c"}),c.a.createElement("img",{src:"assets/images/photo-1546430783-fe4b9c159e52.jpeg",className:"image-c"}),c.a.createElement("img",{src:"assets/images/photo-1548438294-1ad5d5f4f063.jpeg",className:"image-c"}),c.a.createElement("img",{src:"assets/images/photo-1553374402-559e8b431161.jpeg",className:"image-c"}),c.a.createElement("img",{src:"assets/images/photo-1554290712-e640351074bd.jpeg",className:"image-c"})],t=[],a=0;a<30;a++)t.push(c.a.createElement("div",{className:"block"},c.a.createElement("span",{className:"block-area"},a)));return c.a.createElement("div",{className:"App"},c.a.createElement(h,{list:e,width:300}),c.a.createElement(h,{list:t,width:200}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.19309e72.chunk.js.map