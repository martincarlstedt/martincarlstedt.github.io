(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(8971)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),u=n(3297),a=n(4634),f=n(4611),c=n(3794),i=n(2725),s=n(3462),d=n(1018),p=n(7190),h=n(1210),y=n(8684);let v=new Set;function _(e,t,n,o,r){if(r||a.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(v.has(l))return;v.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function b(e){return"string"==typeof e?e:f.formatUrl(e)}let m=l.default.forwardRef(function(e,t){let n,o;let{href:f,as:v,children:m,prefetch:g,passHref:x,replace:j,shallow:C,scroll:M,locale:E,onClick:k,onMouseEnter:w,onTouchStart:O,legacyBehavior:P=!1}=e,N=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,P&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let I=!1!==g,L=l.default.useContext(s.RouterContext),T=l.default.useContext(d.AppRouterContext),R=null!=L?L:T,S=!L,{href:U,as:A}=l.default.useMemo(()=>{if(!L){let e=b(f);return{href:e,as:v?b(v):e}}let[e,t]=u.resolveHref(L,f,!0);return{href:e,as:v?u.resolveHref(L,v):t||e}},[L,f,v]),D=l.default.useRef(U),H=l.default.useRef(A);P&&(o=l.default.Children.only(n));let K=P?o&&"object"==typeof o&&o.ref:t,[F,B,X]=p.useIntersection({rootMargin:"200px"}),Z=l.default.useCallback(e=>{(H.current!==A||D.current!==U)&&(X(),H.current=A,D.current=U),F(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[A,K,U,X,F]);l.default.useEffect(()=>{R&&B&&I&&_(R,U,A,{locale:E},S)},[A,U,B,E,I,null==L?void 0:L.locale,R,S]);let q={ref:Z,onClick(e){P||"function"!=typeof k||k(e),P&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,n,o,r,u,f,c,i,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i&&!a.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:u,locale:c,scroll:f}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!s})};i?l.default.startTransition(h):h()}(e,R,U,A,j,C,M,E,S,I)},onMouseEnter(e){P||"function"!=typeof w||w(e),P&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),R&&(I||!S)&&_(R,U,A,{locale:E,priority:!0,bypassPrefetchedCheck:!0},S)},onTouchStart(e){P||"function"!=typeof O||O(e),P&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),R&&(I||!S)&&_(R,U,A,{locale:E,priority:!0,bypassPrefetchedCheck:!0},S)}};if(c.isAbsoluteUrl(A))q.href=A;else if(!P||x||"a"===o.type&&!("href"in o.props)){let e=void 0!==E?E:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&h.getDomainLocale(A,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);q.href=t||y.addBasePath(i.addLocale(A,e,null==L?void 0:L.defaultLocale))}return P?l.default.cloneElement(o,q):l.default.createElement("a",Object.assign({},N,q),n)});t.default=m,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:f}=e,c=f||!l,[i,s]=o.useState(!1),d=o.useRef(null),p=o.useCallback(e=>{d.current=e},[]);o.useEffect(()=>{if(l){if(c||i)return;let e=d.current;if(e&&e.tagName){let o=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=u.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},a.push(n),u.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),u.delete(o);let e=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return o}}else if(!i){let e=r.requestIdleCallback(()=>s(!0));return()=>r.cancelIdleCallback(e)}},[c,n,t,i,d.current]);let h=o.useCallback(()=>{s(!1)},[]);return[p,i,h]};var o=n(7294),r=n(9311);let l="function"==typeof IntersectionObserver,u=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8971:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var o=n(5893),r=n(8152),l=n.n(r),u=n(1664),a=n.n(u);n(7294);let f=e=>{let{children:t}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"mx-auto px-4 py-10 max-w-7xl flex justify-between",children:(0,o.jsx)(a(),{href:"/",children:"Home"})}),t,(0,o.jsx)("div",{className:"py-8"})]})};n(2488),n(2180),n(4141);let c=e=>{let{Component:t,pageProps:n}=e;return(0,o.jsx)("main",{className:"".concat(l().className," text-gray-800"),children:(0,o.jsx)(f,{children:(0,o.jsx)(t,{...n})})})};var i=c},4141:function(){},2488:function(){},2180:function(){},8152:function(e){e.exports={style:{fontFamily:"'__Inter_4b5723', '__Inter_Fallback_4b5723'",fontStyle:"normal"},className:"__className_4b5723"}},1664:function(e,t,n){e.exports=n(8418)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(387)}),_N_E=e.O()}]);