"use strict";(self.webpackChunkreact_movies_app=self.webpackChunkreact_movies_app||[]).push([[212],{212:function(t,e,n){n.d(e,{a:function(){return b}});var r=n(433),o=n(439),s=n(689),i=n(87),a=n(806),l=n(791),c="List_list__AK7hC",u=n(975),p=n(287),h=function(t,e){return h=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},h(t,e)};var d=function(){return d=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},d.apply(this,arguments)};var f="Pixel",v="Percent",m={unit:v,value:.8};function g(t){return"number"===typeof t?{unit:v,value:100*t}:"string"===typeof t?t.match(/^(\d*(\.\d+)?)px$/)?{unit:f,value:parseFloat(t)}:t.match(/^(\d*(\.\d+)?)%$/)?{unit:v,value:parseFloat(t)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),m):(console.warn("scrollThreshold should be string or number"),m)}var w=function(t){function e(e){var n=t.call(this,e)||this;return n.lastScrollTop=0,n.actionTriggered=!1,n.startY=0,n.currentY=0,n.dragging=!1,n.maxPullDownDistance=0,n.getScrollableTarget=function(){return n.props.scrollableTarget instanceof HTMLElement?n.props.scrollableTarget:"string"===typeof n.props.scrollableTarget?document.getElementById(n.props.scrollableTarget):(null===n.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},n.onStart=function(t){n.lastScrollTop||(n.dragging=!0,t instanceof MouseEvent?n.startY=t.pageY:t instanceof TouchEvent&&(n.startY=t.touches[0].pageY),n.currentY=n.startY,n._infScroll&&(n._infScroll.style.willChange="transform",n._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},n.onMove=function(t){n.dragging&&(t instanceof MouseEvent?n.currentY=t.pageY:t instanceof TouchEvent&&(n.currentY=t.touches[0].pageY),n.currentY<n.startY||(n.currentY-n.startY>=Number(n.props.pullDownToRefreshThreshold)&&n.setState({pullToRefreshThresholdBreached:!0}),n.currentY-n.startY>1.5*n.maxPullDownDistance||n._infScroll&&(n._infScroll.style.overflow="visible",n._infScroll.style.transform="translate3d(0px, "+(n.currentY-n.startY)+"px, 0px)")))},n.onEnd=function(){n.startY=0,n.currentY=0,n.dragging=!1,n.state.pullToRefreshThresholdBreached&&(n.props.refreshFunction&&n.props.refreshFunction(),n.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){n._infScroll&&(n._infScroll.style.overflow="auto",n._infScroll.style.transform="none",n._infScroll.style.willChange="unset")}))},n.onScrollListener=function(t){"function"===typeof n.props.onScroll&&setTimeout((function(){return n.props.onScroll&&n.props.onScroll(t)}),0);var e=n.props.height||n._scrollableNode?t.target:document.documentElement.scrollTop?document.documentElement:document.body;n.actionTriggered||((n.props.inverse?n.isElementAtTop(e,n.props.scrollThreshold):n.isElementAtBottom(e,n.props.scrollThreshold))&&n.props.hasMore&&(n.actionTriggered=!0,n.setState({showLoader:!0}),n.props.next&&n.props.next()),n.lastScrollTop=e.scrollTop)},n.state={showLoader:!1,pullToRefreshThresholdBreached:!1,prevDataLength:e.dataLength},n.throttledOnScrollListener=function(t,e,n,r){var o,s=!1,i=0;function a(){o&&clearTimeout(o)}function l(){var l=this,c=Date.now()-i,u=arguments;function p(){i=Date.now(),n.apply(l,u)}function h(){o=void 0}s||(r&&!o&&p(),a(),void 0===r&&c>t?p():!0!==e&&(o=setTimeout(r?h:p,void 0===r?t-c:t)))}return"boolean"!==typeof e&&(r=n,n=e,e=void 0),l.cancel=function(){a(),s=!0},l}(150,n.onScrollListener).bind(n),n.onStart=n.onStart.bind(n),n.onMove=n.onMove.bind(n),n.onEnd=n.onEnd.bind(n),n}return function(t,e){function n(){this.constructor=t}h(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.componentDidMount=function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')},e.prototype.componentWillUnmount=function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))},e.prototype.componentDidUpdate=function(t){this.props.dataLength!==t.dataLength&&(this.actionTriggered=!1,this.setState({showLoader:!1}))},e.getDerivedStateFromProps=function(t,e){return t.dataLength!==e.prevDataLength?d(d({},e),{prevDataLength:t.dataLength}):null},e.prototype.isElementAtTop=function(t,e){void 0===e&&(e=.8);var n=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,r=g(e);return r.unit===f?t.scrollTop<=r.value+n-t.scrollHeight+1:t.scrollTop<=r.value/100+n-t.scrollHeight+1},e.prototype.isElementAtBottom=function(t,e){void 0===e&&(e=.8);var n=t===document.body||t===document.documentElement?window.screen.availHeight:t.clientHeight,r=g(e);return r.unit===f?t.scrollTop+n>=t.scrollHeight-r.value:t.scrollTop+n>=r.value/100*t.scrollHeight},e.prototype.render=function(){var t=this,e=d({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),r=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return l.createElement("div",{style:r,className:"infinite-scroll-component__outerdiv"},l.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(e){return t._infScroll=e},style:e},this.props.pullDownToRefresh&&l.createElement("div",{style:{position:"relative"},ref:function(e){return t._pullDown=e}},l.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))},e}(l.Component),T=w,y=n(184),b=function(t){var e=t.getMovies,n=t.params,h=(0,s.TH)(),d=(0,l.useState)([]),f=(0,o.Z)(d,2),v=f[0],m=f[1],g=(0,l.useState)(1),w=(0,o.Z)(g,2),b=w[0],E=w[1],S=(0,l.useState)(!1),_=(0,o.Z)(S,2),L=_[0],x=_[1],D=(0,l.useState)(""),Y=(0,o.Z)(D,2),M=Y[0],R=Y[1];return(0,l.useEffect)((function(){var t;if(!n||n.query){var o;if((null===n||void 0===n||null===(t=n.query)||void 0===t?void 0:t.trim())!==M)return R(null===n||void 0===n||null===(o=n.query)||void 0===o?void 0:o.trim()),E(1),void m([]);x(!1),e(b).then((function(t){var e=t.results,n=t.page,o=t.total_pages;m((function(t){return[].concat((0,r.Z)(t),(0,r.Z)(e))})),x(o>n)})).catch(console.error)}}),[n,b,M,e]),(0,y.jsx)(T,{dataLength:v.length,next:function(){return E((function(t){return t+1}))},hasMore:L,loader:(0,y.jsx)(p.a,{}),children:v.length>0&&(0,y.jsx)("ul",{className:c,children:null===v||void 0===v?void 0:v.map((function(t){var e=t.id,n=t.title,r=t.release_date,o=t.poster_path;return(0,y.jsxs)(i.rU,{to:a.wz.replace(":id",e),state:{from:h},children:[(0,y.jsx)("img",{src:(0,u.gJ)(o,"w300"),alt:"poster",width:"100%"}),(0,y.jsxs)("p",{children:[n," (",null===r||void 0===r?void 0:r.slice(0,4),")"]})]},e)}))})})}},975:function(t,e,n){n.d(e,{Df:function(){return d},M1:function(){return g},TP:function(){return v},XT:function(){return f},gJ:function(){return w},tx:function(){return m}});var r=n(861),o=n(757),s=n.n(o),i=n(294),a="https://image.tmdb.org/t/p/",l="https://golftec-cms.s3.amazonaws.com/coachImages/no_image_available.jpg",c="trending/movie/day",u="movie/",p="search/movie",h=i.Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"894d7d0a519bf37c451c0d145e723359",include_adult:!1}}),d=function(){var t=(0,r.Z)(s().mark((function t(){var e,n=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:1,t.next=3,h.get(c,{params:{page:e}});case 3:return t.abrupt("return",t.sent.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(s().mark((function t(e){var n,r=arguments;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:1,t.next=3,h.get(p,{params:{query:e,page:n}});case 3:return t.abrupt("return",t.sent.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get(u+e);case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("".concat(u).concat(e,"/").concat("reviews"));case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=(0,r.Z)(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.get("".concat(u).concat(e,"/").concat("credits"));case 2:return t.abrupt("return",t.sent.data);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"original";return t?"".concat(a+e,"/").concat(t):l}}}]);
//# sourceMappingURL=212.e128632f.chunk.js.map