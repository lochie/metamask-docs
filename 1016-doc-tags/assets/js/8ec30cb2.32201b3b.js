"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5709],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={description:"Learn about the Snaps execution environment.",sidebar_position:4},o="Snaps execution environment",s={unversionedId:"concepts/execution-environment",id:"concepts/execution-environment",title:"Snaps execution environment",description:"Learn about the Snaps execution environment.",source:"@site/snaps/concepts/execution-environment.md",sourceDirName:"concepts",slug:"/concepts/execution-environment",permalink:"/1016-doc-tags/snaps/concepts/execution-environment",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/concepts/execution-environment.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Learn about the Snaps execution environment.",sidebar_position:4},sidebar:"snapsSidebar",previous:{title:"Snaps user interface",permalink:"/1016-doc-tags/snaps/concepts/user-interface"},next:{title:"Snaps design guidelines",permalink:"/1016-doc-tags/snaps/concepts/design-guidelines"}},l={},p=[{value:"Secure ECMAScript (SES)",id:"secure-ecmascript-ses",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-execution-environment"},"Snaps execution environment"),(0,r.kt)("p",null,"Snaps are untrusted JavaScript programs that execute safely in a sandboxed environment that runs\n",(0,r.kt)("a",{parentName:"p",href:"#secure-ecmascript-ses"},"Secure ECMAScript (SES)"),".\nThere's no DOM, no Node.js built-ins, and no platform-specific APIs other than MetaMask's ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet"),"\nglobal object.\nAlmost all standard JavaScript globals contained in\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects"},"this list")," that\nare also in Node.js are available as normal.\nThis includes globals such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Math"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect"),"."),(0,r.kt)("p",null,"The following globals are also available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"console")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"crypto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fetch")," (with the\n",(0,r.kt)("a",{parentName:"li",href:"/1016-doc-tags/snaps/reference/permissions#endowmentnetwork-access"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:network-access"))," permission)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setTimeout")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"clearTimeout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setInterval")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"clearInterval")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SubtleCrypto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WebAssembly")," (with the\n",(0,r.kt)("a",{parentName:"li",href:"/1016-doc-tags/snaps/reference/permissions#endowmentwebassembly"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:webassembly"))," permission)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TextEncoder")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"TextDecoder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"atob")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"btoa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"URL"))),(0,r.kt)("p",null,"The execution environment is instrumented in this way to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Prevent Snaps from influencing any other running code, including MetaMask itself.\nThat is, prevent all Snaps from polluting the global environment and malicious Snaps from\nstealing the user's stuff."),(0,r.kt)("li",{parentName:"ol"},"Prevent Snaps from accessing sensitive JavaScript APIs (such as ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch"),") without permission."),(0,r.kt)("li",{parentName:"ol"},'Ensure that the execution environment is "fully virtualizable," that is, platform-independent.')),(0,r.kt)("p",null,"This allows you to safely execute Snaps anywhere, without the Snap needing to worry about where and\nhow it's executed."),(0,r.kt)("h2",{id:"secure-ecmascript-ses"},"Secure ECMAScript (SES)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/endojs/endo/tree/master/packages/ses"},"Secure ECMAScript (SES)"),", is a subset of\nthe JavaScript language designed to enable mutually suspicious programs to execute in the same\nJavaScript process (or more accurately, the same ",(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#realm"},"realm"),").\nYou can think of it as a more severe form of\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"},"strict mode"),"."))}u.isMDXComponent=!0}}]);