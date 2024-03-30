"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4467],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=r,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return t?a.createElement(k,i(i({ref:n},m),{},{components:t})):a.createElement(k,i({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},50288:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const o={description:"Learn about the Snaps execution environment.",sidebar_position:3},i="Snaps execution environment",s={unversionedId:"learn/about-snaps/execution-environment",id:"learn/about-snaps/execution-environment",title:"Snaps execution environment",description:"Learn about the Snaps execution environment.",source:"@site/snaps/learn/about-snaps/execution-environment.md",sourceDirName:"learn/about-snaps",slug:"/learn/about-snaps/execution-environment",permalink:"/855-nodejs-modules/snaps/learn/about-snaps/execution-environment",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/learn/about-snaps/execution-environment.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Learn about the Snaps execution environment.",sidebar_position:3},sidebar:"snapsSidebar",previous:{title:"Snaps files",permalink:"/855-nodejs-modules/snaps/learn/about-snaps/files"},next:{title:"Tutorials",permalink:"/855-nodejs-modules/snaps/learn/tutorials"}},l={},p=[{value:"Supported globals",id:"supported-globals",level:2},{value:"Secure ECMAScript (SES)",id:"secure-ecmascript-ses",level:2}],m={toc:p},u="wrapper";function c(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-execution-environment"},"Snaps execution environment"),(0,r.kt)("p",null,"Snaps are untrusted JavaScript programs that execute safely in a sandboxed environment that runs\n",(0,r.kt)("a",{parentName:"p",href:"#secure-ecmascript-ses"},"Secure ECMAScript (SES)"),".\nThis allows MetaMask to restrict access to global JavaScript APIs and to isolate a Snap's code from\nother parts of the application."),(0,r.kt)("p",null,"This environment does not have a DOM, Node.js built-ins, or platform-specific APIs other than the\ndefault ",(0,r.kt)("inlineCode",{parentName:"p"},"snap")," global and MetaMask's ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," global."),(0,r.kt)("p",null,"The execution environment is designed to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Prevent Snaps from polluting the global environment."),(0,r.kt)("li",{parentName:"ul"},"Prevent malicious Snaps from stealing from users."),(0,r.kt)("li",{parentName:"ul"},"Prevent Snaps from accessing sensitive JavaScript global APIs (such as ",(0,r.kt)("inlineCode",{parentName:"li"},"fetch"),") without permission."),(0,r.kt)("li",{parentName:"ul"},'Be "fully virtualizable," or platform-independent.')),(0,r.kt)("p",null,"This allows you to safely execute Snaps anywhere, without the Snap needing to worry about where and\nhow it's executed."),(0,r.kt)("h2",{id:"supported-globals"},"Supported globals"),(0,r.kt)("p",null,"A Snap can access the ",(0,r.kt)("a",{parentName:"p",href:"/855-nodejs-modules/snaps/learn/about-snaps/apis#snaps-api"},"Snaps API")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"snap")," global, and the\n",(0,r.kt)("a",{parentName:"p",href:"/855-nodejs-modules/snaps/learn/about-snaps/apis#metamask-json-rpc-api"},"MetaMask JSON-RPC API")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," global.\nTo access the ",(0,r.kt)("inlineCode",{parentName:"p"},"ethereum")," global, a Snap must request the\n",(0,r.kt)("a",{parentName:"p",href:"/855-nodejs-modules/snaps/reference/permissions#endowmentethereum-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:ethereum-provider"))," permission."),(0,r.kt)("p",null,"Almost all\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects"},"standard JavaScript globals"),"\nthat are also in Node.js are available to Snaps.\nThis includes globals such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Math"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Set"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Reflect"),"."),(0,r.kt)("p",null,"The following globals are also available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"console")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fetch")," (with the\n",(0,r.kt)("a",{parentName:"li",href:"/855-nodejs-modules/snaps/reference/permissions#endowmentnetwork-access"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:network-access"))," permission)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setTimeout")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"clearTimeout")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setInterval")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"clearInterval")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SubtleCrypto")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"WebAssembly")," (with the\n",(0,r.kt)("a",{parentName:"li",href:"/855-nodejs-modules/snaps/reference/permissions#endowmentwebassembly"},(0,r.kt)("inlineCode",{parentName:"a"},"endowment:webassembly"))," permission)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TextEncoder")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"TextDecoder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"atob")," / ",(0,r.kt)("inlineCode",{parentName:"li"},"btoa")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"URL"))),(0,r.kt)("admonition",{title:"note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To use Node.js built-in modules such as ",(0,r.kt)("inlineCode",{parentName:"p"},"crypto")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"path"),", set the\n",(0,r.kt)("a",{parentName:"p",href:"/855-nodejs-modules/snaps/reference/cli/options#polyfills"},(0,r.kt)("inlineCode",{parentName:"a"},"polyfills"))," option to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,r.kt)("h2",{id:"secure-ecmascript-ses"},"Secure ECMAScript (SES)"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/endojs/endo/tree/master/packages/ses"},"Secure ECMAScript (SES)")," is a subset of\nJavaScript designed to enable mutually suspicious programs to execute in the same JavaScript process\n(or the same ",(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma262/#realm"},"realm"),").\nYou can think of it as a more severe form of\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode"},"JavaScript strict mode"),"."))}c.isMDXComponent=!0}}]);