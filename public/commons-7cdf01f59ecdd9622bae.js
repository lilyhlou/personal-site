(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"2W6z":function(e,t,n){"use strict";var r=function(){};e.exports=r},"8+s/":function(e,t,n){"use strict";var r,a=n("q1tI"),o=(r=a)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var u=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function l(){c=e(s.map((function(e){return e.props}))),f.canUseDOM?t(c):n&&(c=n(c))}var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return c},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=c;return c=void 0,s=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){s.push(this),l()},i.componentDidUpdate=function(){l()},i.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),l()},i.render=function(){return o.createElement(r,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(f,"canUseDOM",u),f}}},"8ypT":function(e,t,n){},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("Wbzz");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}var c=n("TSYQ"),s=n.n(c);n("K9S6"),n("QLaP");function l(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function f(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function d(e,t){return Object.keys(t).reduce((function(n,a){var o,c=n,s=c[l(a)],d=c[a],p=u(c,[l(a),a].map(f)),v=t[a],m=function(e,t,n){var a=Object(r.useRef)(void 0!==e),o=Object(r.useState)(t),i=o[0],u=o[1],c=void 0!==e,s=a.current;return a.current=c,!c&&s&&i!==t&&u(t),[c?e:i,Object(r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),u(e)}),[n])]}(d,s,e[v]),h=m[0],y=m[1];return i({},p,((o={})[a]=h,o[v]=y,o))}),e)}var p=n("dI71");n("94VI");var v=a.a.createContext({});v.Consumer,v.Provider;function m(e,t){var n=Object(r.useContext)(v);return e||n[t]||t}var h=a.a.createContext(null);h.displayName="NavbarContext";var y=h,b=a.a.createContext(null);b.displayName="CardContext";var g=b,E=Function.prototype.bind.call(Function.prototype.call,[].slice);var x=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};var w=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=x(e),r=x(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])},T=a.a.createContext(null);T.displayName="NavContext";var C=T,O=a.a.createContext(null),S=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},A=O,j=a.a.createContext(null),N=function(){},k=a.a.forwardRef((function(e,t){var n,o,c=e.as,s=void 0===c?"ul":c,l=e.onSelect,f=e.activeKey,d=e.role,p=e.onKeyDown,v=u(e,["as","onSelect","activeKey","role","onKeyDown"]),m=Object(r.useReducer)((function(e){return!e}),!1)[1],h=Object(r.useRef)(!1),y=Object(r.useContext)(A),b=Object(r.useContext)(j);b&&(d=d||"tablist",f=b.activeKey,n=b.getControlledId,o=b.getControllerId);var g=Object(r.useRef)(null),x=function(e){var t=g.current;if(!t)return null;var n,r=(n="[data-rb-event-key]:not(.disabled)",E(t.querySelectorAll(n))),a=t.querySelector(".active");if(!a)return null;var o=r.indexOf(a);if(-1===o)return null;var i=o+e;return i>=r.length&&(i=0),i<0&&(i=r.length-1),r[i]},T=function(e,t){null!=e&&(l&&l(e,t),y&&y(e,t))};Object(r.useEffect)((function(){if(g.current&&h.current){var e=g.current.querySelector("[data-rb-event-key].active");e&&e.focus()}h.current=!1}));var O=w(t,g);return a.a.createElement(A.Provider,{value:T},a.a.createElement(C.Provider,{value:{role:d,activeKey:S(f),getControlledId:n||N,getControllerId:o||N}},a.a.createElement(s,i({},v,{onKeyDown:function(e){var t;switch(p&&p(e),e.key){case"ArrowLeft":case"ArrowUp":t=x(-1);break;case"ArrowRight":case"ArrowDown":t=x(1);break;default:return}t&&(e.preventDefault(),T(t.dataset.rbEventKey,e),h.current=!0,m())},ref:O,role:d}))))})),P=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.children,c=e.as,l=void 0===c?"div":c,f=u(e,["bsPrefix","className","children","as"]);return n=m(n,"nav-item"),a.a.createElement(l,i({},f,{ref:t,className:s()(r,n)}),o)}));P.displayName="NavItem";var L=P;var I=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};function R(e){return!e||"#"===e.trim()}var M=a.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,o=e.disabled,c=e.onKeyDown,s=u(e,["as","disabled","onKeyDown"]),l=function(e){var t=s.href,n=s.onClick;(o||R(t))&&e.preventDefault(),o?e.stopPropagation():n&&n(e)};return R(s.href)&&(s.role=s.role||"button",s.href=s.href||"#"),o&&(s.tabIndex=-1,s["aria-disabled"]=!0),a.a.createElement(r,i({ref:t},s,{onClick:l,onKeyDown:I((function(e){" "===e.key&&(e.preventDefault(),l(e))}),c)}))}));M.displayName="SafeAnchor";var D=M;var K=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function _(e){var t=K(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}n("2W6z");var q=a.a.forwardRef((function(e,t){var n=e.active,o=e.className,c=e.eventKey,l=e.onSelect,f=e.onClick,d=e.as,p=u(e,["active","className","eventKey","onSelect","onClick","as"]),v=S(c,p.href),m=Object(r.useContext)(A),h=Object(r.useContext)(C),y=n;if(h){p.role||"tablist"!==h.role||(p.role="tab");var b=h.getControllerId(v),g=h.getControlledId(v);p["data-rb-event-key"]=v,p.id=b||p.id,p["aria-controls"]=g||p["aria-controls"],y=null==n&&null!=v?h.activeKey===v:n}"tab"===p.role&&(p.tabIndex=y?p.tabIndex:-1,p["aria-selected"]=y);var E=_((function(e){f&&f(e),null!=v&&(l&&l(v,e),m&&m(v,e))}));return a.a.createElement(d,i({},p,{ref:t,onClick:E,className:s()(o,y&&"active")}))}));q.defaultProps={disabled:!1};var B=q,U={disabled:!1,as:D},F=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,o=e.className,c=e.href,l=e.eventKey,f=e.onSelect,d=e.as,p=u(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=m(n,"nav-link"),a.a.createElement(B,i({},p,{href:c,ref:t,eventKey:l,as:d,disabled:r,onSelect:f,className:s()(o,n,r&&"disabled")}))}));F.displayName="NavLink",F.defaultProps=U;var H=F,Y=a.a.forwardRef((function(e,t){var n,o,c,l=d(e,{activeKey:"onSelect"}),f=l.as,p=void 0===f?"div":f,v=l.bsPrefix,h=l.variant,b=l.fill,E=l.justify,x=l.navbar,w=l.className,T=l.children,C=l.activeKey,O=u(l,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),S=m(v,"nav"),A=!1,j=Object(r.useContext)(y),N=Object(r.useContext)(g);return j?(o=j.bsPrefix,A=null==x||x):N&&(c=N.cardHeaderBsPrefix),a.a.createElement(k,i({as:p,ref:t,activeKey:C,className:s()(w,(n={},n[S]=!A,n[o+"-nav"]=A,n[c+"-"+h]=!!c,n[S+"-"+h]=!!h,n[S+"-fill"]=b,n[S+"-justified"]=E,n))},O),T)}));Y.displayName="Nav",Y.defaultProps={justify:!1,fill:!1},Y.Item=L,Y.Link=H;var z=Y,W=/-(.)/g;var V=function(e){return e[0].toUpperCase()+(t=e,t.replace(W,(function(e,t){return t.toUpperCase()}))).slice(1);var t};var Q=a.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,o=e.as,c=u(e,["bsPrefix","className","as"]);n=m(n,"navbar-brand");var l=o||(c.href?"a":"span");return a.a.createElement(l,i({},c,{ref:t,className:s()(r,n)}))}));Q.displayName="NavbarBrand";var G=Q;function X(e){var t=function(e){return e&&e.ownerDocument||document}(e);return t&&t.defaultView||window}var Z=/([A-Z])/g;var $=/^ms-/;function J(e){return function(e){return e.replace(Z,"-$1").toLowerCase()}(e).replace($,"-ms-")}var ee=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var te=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(J(t))||function(e,t){return X(e).getComputedStyle(e,t)}(e).getPropertyValue(J(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!ee.test(e))}(a)?n+=J(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(J(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n},ne=!("undefined"==typeof window||!window.document||!window.document.createElement),re=!1,ae=!1;try{var oe={get passive(){return re=!0},get once(){return ae=re=!0}};ne&&(window.addEventListener("test",oe,oe),window.removeEventListener("test",oe,!0))}catch(Fe){}var ie=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!ae){var a=r.once,o=r.capture,i=n;!ae&&a&&(i=n.__once||function e(r){this.removeEventListener(t,e,o),n.call(this,r)},n.__once=i),e.addEventListener(t,i,re?r:o)}e.addEventListener(t,n,r)};var ue=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};var ce=function(e,t,n,r){return ie(e,t,n,r),function(){ue(e,t,n,r)}};function se(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=ce(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function le(e,t,n,r){var a,o;null==n&&(a=te(e,"transitionDuration")||"",o=-1===a.indexOf("ms")?1e3:1,n=parseFloat(a)*o||0);var i=se(e,n,r),u=ce(e,"transitionend",t);return function(){i(),u()}}var fe=n("i8i4"),de=n.n(fe),pe=!1,ve=a.a.createContext(null),me=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(p.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[de.a.findDOMNode(this),r],o=a[0],i=a[1],u=this.getTimeouts(),c=r?u.appear:u.enter;!e&&!n||pe?this.safeSetState({status:"entered"},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:"entering"},(function(){t.props.onEntering(o,i),t.onTransitionEnd(c,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:de.a.findDOMNode(this);t&&!pe?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:de.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,u(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(ve.Provider,{value:null},"function"==typeof n?n(e,r):a.a.cloneElement(a.a.Children.only(n),r))},t}(a.a.Component);function he(){}me.contextType=ve,me.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:he,onEntering:he,onEntered:he,onExit:he,onExiting:he,onExited:he},me.UNMOUNTED="unmounted",me.EXITED="exited",me.ENTERING="entering",me.ENTERED="entered",me.EXITING="exiting";var ye,be=me;var ge={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Ee(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=ge[e];return n+parseInt(te(t,r[0]),10)+parseInt(te(t,r[1]),10)}var xe=((ye={}).exited="collapse",ye.exiting="collapsing",ye.entering="collapsing",ye.entered="collapse show",ye),we={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:Ee},Te=a.a.forwardRef((function(e,t){var n=e.onEnter,o=e.onEntering,c=e.onEntered,l=e.onExit,f=e.onExiting,d=e.className,p=e.children,v=e.dimension,m=void 0===v?"height":v,h=e.getDimensionValue,y=void 0===h?Ee:h,b=u(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),g="function"==typeof m?m():m,E=Object(r.useMemo)((function(){return I((function(e){e.style[g]="0"}),n)}),[g,n]),x=Object(r.useMemo)((function(){return I((function(e){var t="scroll"+g[0].toUpperCase()+g.slice(1);e.style[g]=e[t]+"px"}),o)}),[g,o]),w=Object(r.useMemo)((function(){return I((function(e){e.style[g]=null}),c)}),[g,c]),T=Object(r.useMemo)((function(){return I((function(e){e.style[g]=y(g,e)+"px",e.offsetHeight}),l)}),[l,y,g]),C=Object(r.useMemo)((function(){return I((function(e){e.style[g]=null}),f)}),[g,f]);return a.a.createElement(be,i({ref:t,addEndListener:le},b,{"aria-expanded":b.role?b.in:null,onEnter:E,onEntering:x,onEntered:w,onExit:T,onExiting:C}),(function(e,t){return a.a.cloneElement(p,i({},t,{className:s()(d,p.props.className,xe[e],"width"===g&&"width")}))}))}));Te.defaultProps=we;var Ce=Te,Oe=a.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,o=u(e,["children","bsPrefix"]);return r=m(r,"navbar-collapse"),a.a.createElement(y.Consumer,null,(function(e){return a.a.createElement(Ce,i({in:!(!e||!e.expanded)},o),a.a.createElement("div",{ref:t,className:r},n))}))}));Oe.displayName="NavbarCollapse";var Se=Oe,Ae=a.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.children,l=e.label,f=e.as,d=void 0===f?"button":f,p=e.onClick,v=u(e,["bsPrefix","className","children","label","as","onClick"]);n=m(n,"navbar-toggler");var h=Object(r.useContext)(y)||{},b=h.onToggle,g=h.expanded,E=_((function(e){p&&p(e),b&&b()}));return"button"===d&&(v.type="button"),a.a.createElement(d,i({},v,{ref:t,onClick:E,"aria-label":l,className:s()(o,n,!g&&"collapsed")}),c||a.a.createElement("span",{className:n+"-icon"}))}));Ae.displayName="NavbarToggle",Ae.defaultProps={label:"Toggle navigation"};var je,Ne,ke,Pe,Le,Ie,Re,Me,De=Ae,Ke=(je="navbar-text",Pe=(ke=void 0===(Ne={Component:"span"})?{}:Ne).displayName,Le=void 0===Pe?V(je):Pe,Ie=ke.Component,Re=ke.defaultProps,(Me=a.a.forwardRef((function(e,t){var n=e.className,r=e.bsPrefix,o=e.as,c=void 0===o?Ie||"div":o,l=u(e,["className","bsPrefix","as"]),f=m(r,je);return a.a.createElement(c,i({ref:t,className:s()(n,f)},l))}))).defaultProps=Re,Me.displayName=Le,Me),_e=a.a.forwardRef((function(e,t){var n=d(e,{expanded:"onToggle"}),o=n.bsPrefix,c=n.expand,l=n.variant,f=n.bg,p=n.fixed,v=n.sticky,h=n.className,b=n.children,g=n.as,E=void 0===g?"nav":g,x=n.expanded,w=n.onToggle,T=n.onSelect,C=n.collapseOnSelect,O=u(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),S=m(o,"navbar"),j=Object(r.useCallback)((function(){T&&T.apply(void 0,arguments),C&&x&&w&&w(!1)}),[T,C,x,w]);void 0===O.role&&"nav"!==E&&(O.role="navigation");var N=S+"-expand";"string"==typeof c&&(N=N+"-"+c);var k=Object(r.useMemo)((function(){return{onToggle:function(){return w&&w(!x)},bsPrefix:S,expanded:!!x}}),[S,x,w]);return a.a.createElement(y.Provider,{value:k},a.a.createElement(A.Provider,{value:j},a.a.createElement(E,i({ref:t},O,{className:s()(h,S,c&&N,l&&S+"-"+l,f&&"bg-"+f,v&&"sticky-"+v,p&&"fixed-"+p)}),b)))}));_e.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},_e.displayName="Navbar",_e.Brand=G,_e.Toggle=De,_e.Collapse=Se,_e.Text=Ke;var qe=_e,Be=function(e){var t=e.siteTitle;return a.a.createElement(qe,{collapseOnSelect:!0,expand:"lg",className:"color-nav",variant:"light",sticky:"top"},a.a.createElement(qe.Brand,null,t),a.a.createElement(qe.Toggle,{"aria-controls":"basic-navbar-nav"}),a.a.createElement(qe.Collapse,{id:"basic-navbar-nav"},a.a.createElement(z,{className:"ml-auto",activeKey:"/home"},a.a.createElement(z.Link,{href:"/#main"},"Home"),a.a.createElement(z.Link,{href:"/#code"},"Code"),a.a.createElement(z.Link,{href:"/#writing"},"Writing"),a.a.createElement(z.Link,{href:"/#about"},"About"))))};Be.defaultProps={siteTitle:""};var Ue=Be;n("8ypT"),t.a=function(e){var t=e.children,n=Object(o.useStaticQuery)("3649515864");return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ue,{siteTitle:n.site.siteMetadata.title}),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},a.a.createElement("main",null,t),a.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",a.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))}},K9S6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,o.default)(r)};var r,a=n("pvIh"),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},ZhWT:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,a="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,i){if(t===i)return!0;if(t&&i&&"object"==typeof t&&"object"==typeof i){if(t.constructor!==i.constructor)return!1;var u,c,s,l;if(Array.isArray(t)){if((u=t.length)!=i.length)return!1;for(c=u;0!=c--;)if(!e(t[c],i[c]))return!1;return!0}if(r&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!i.has(c.value[0]))return!1;for(l=t.entries();!(c=l.next()).done;)if(!e(c.value[1],i.get(c.value[0])))return!1;return!0}if(a&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(l=t.entries();!(c=l.next()).done;)if(!i.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if((u=t.length)!=i.length)return!1;for(c=u;0!=c--;)if(t[c]!==i[c])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if((u=(s=Object.keys(t)).length)!==Object.keys(i).length)return!1;for(c=u;0!=c--;)if(!Object.prototype.hasOwnProperty.call(i,s[c]))return!1;if(n&&t instanceof Element)return!1;for(c=u;0!=c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!e(t[s[c]],i[s[c]]))return!1;return!0}return t!=t&&i!=i}(e,t)}catch(i){if((i.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw i}}},pvIh:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var u=a||"<<anonymous>>",c=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+c+"` was not specified in `"+u+"`."):null;for(var s=arguments.length,l=Array(s>6?s-6:0),f=6;f<s;f++)l[f-6]=arguments[f];return e.apply(void 0,[n,r,u,o,c].concat(l))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return me}));var r,a,o,i,u=n("17x9"),c=n.n(u),s=n("8+s/"),l=n.n(s),f=n("ZhWT"),d=n.n(f),p=n("q1tI"),v=n.n(p),m=n("6qGY"),h=n.n(m),y="bodyAttributes",b="htmlAttributes",g="titleAttributes",E={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},x=(Object.keys(E).map((function(e){return E[e]})),"charset"),w="cssText",T="href",C="http-equiv",O="innerHTML",S="itemprop",A="name",j="property",N="rel",k="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",R="defer",M="encodeSpecialCharacters",D="onChangeClientState",K="titleTemplate",_=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),q=[E.NOSCRIPT,E.SCRIPT,E.STYLE],B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},W=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=$(e,E.TITLE),n=$(e,K);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,I);return t||r||void 0},Q=function(e){return $(e,D)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[E.BASE]})).map((function(e){return e[E.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i],c=u.toLowerCase();-1===t.indexOf(c)||n===N&&"canonical"===e[n].toLowerCase()||c===N&&"stylesheet"===e[c].toLowerCase()||(n=c),-1===t.indexOf(u)||u!==O&&u!==w&&u!==S||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][s]&&(a[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var u=o[i],c=h()({},r[u],a[u]);r[u]=c}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},J=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){J(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:e.requestAnimationFrame||J,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;ce(E.BODY,r),ce(E.HTML,a),ue(f,d);var p={baseTag:se(E.BASE,n),linkTags:se(E.LINK,o),metaTags:se(E.META,i),noscriptTags:se(E.NOSCRIPT,u),scriptTags:se(E.SCRIPT,s),styleTags:se(E.STYLE,l)},v={},m={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(v[e]=n),r.length&&(m[e]=p[e].oldTags)})),t&&t(),c(e,v,m)},ie=function(e){return Array.isArray(e)?e.join(""):e},ue=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ce(E.TITLE,t)},ce=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),u=0;u<i.length;u++){var c=i[u],s=t[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===a.indexOf(c)&&a.push(c);var l=o.indexOf(c);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==i.join(",")&&n.setAttribute("data-react-helmet",i.join(","))}},se=function(e,t){var n=document.head||document.querySelector(E.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===O)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case E.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,a=fe(n,r),[v.a.createElement(E.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=le(n),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+W(o,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+W(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case b:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===O||n===w){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),v.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===O||e===w)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+W(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,c=e.scriptTags,s=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(E.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(b,a,r),link:de(E.LINK,o,r),meta:de(E.META,i,r),noscript:de(E.NOSCRIPT,u,r),script:de(E.SCRIPT,c,r),style:de(E.STYLE,s,r),title:de(E.TITLE,{title:f,titleAttributes:d},r)}},ve=l()((function(e){return{baseTag:X([T,P],e),bodyAttributes:G(y,e),defer:$(e,R),encode:$(e,M),htmlAttributes:G(b,e),linkTags:Z(E.LINK,[N,T],e),metaTags:Z(E.META,[A,x,C,j,S],e),noscriptTags:Z(E.NOSCRIPT,[O],e),onChangeClientState:Q(e),scriptTags:Z(E.SCRIPT,[k,O],e),styleTags:Z(E.STYLE,[w],e),title:V(e),titleAttributes:G(g,e)}}),(function(e){ae&&ne(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),pe)((function(){return null})),me=(a=ve,i=o=function(e){function t(){return U(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case E.SCRIPT:case E.NOSCRIPT:return{innerHTML:t};case E.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},a,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(r.type){case E.TITLE:return H({},a,((t={})[r.type]=i,t.titleAttributes=H({},o),t));case E.BODY:return H({},a,{bodyAttributes:H({},o)});case E.HTML:return H({},a,{htmlAttributes:H({},o)})}return H({},a,((n={})[r.type]=H({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return v.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(Y(a,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case E.LINK:case E.META:case E.NOSCRIPT:case E.SCRIPT:case E.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),v.a.createElement(a,r)},F(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(v.a.Component),o.propTypes={base:c.a.object,bodyAttributes:c.a.object,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),defaultTitle:c.a.string,defer:c.a.bool,encodeSpecialCharacters:c.a.bool,htmlAttributes:c.a.object,link:c.a.arrayOf(c.a.object),meta:c.a.arrayOf(c.a.object),noscript:c.a.arrayOf(c.a.object),onChangeClientState:c.a.func,script:c.a.arrayOf(c.a.object),style:c.a.arrayOf(c.a.object),title:c.a.string,titleAttributes:c.a.object,titleTemplate:c.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);me.renderStatic=me.rewind}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("Wbzz");function u(e){var t=e.description,n=e.lang,r=e.meta,u=e.title,c=Object(i.useStaticQuery)("63159454").site,s=t||c.siteMetadata.description;return a.a.createElement(o.a,{htmlAttributes:{lang:n},title:u,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:u},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:s}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},t.a=u},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-7cdf01f59ecdd9622bae.js.map