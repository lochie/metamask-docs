"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[2741],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30817:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={description:"Learn about convenience libraries.",sidebar_position:4},i="Convenience libraries",s={unversionedId:"concepts/convenience-libraries",id:"concepts/convenience-libraries",title:"Convenience libraries",description:"Learn about convenience libraries.",source:"@site/wallet/concepts/convenience-libraries.md",sourceDirName:"concepts",slug:"/concepts/convenience-libraries",permalink:"/1016-doc-tags/wallet/concepts/convenience-libraries",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/convenience-libraries.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Learn about convenience libraries.",sidebar_position:4},sidebar:"walletSidebar",previous:{title:"About the MetaMask APIs",permalink:"/1016-doc-tags/wallet/concepts/apis"},next:{title:"Signing methods",permalink:"/1016-doc-tags/wallet/concepts/signing-methods"}},c={},p=[],l={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"convenience-libraries"},"Convenience libraries"),(0,a.kt)("p",null,"Various convenience libraries exist for dapp developers.\nSome of them simplify the creation of specific user interface elements, some entirely manage the\nuser account onboarding, and others give you a variety of methods for interacting with smart\ncontracts, for a variety of API preferences (for example, promises, callbacks, and strong types)."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/1016-doc-tags/wallet/concepts/apis#ethereum-provider-api"},"MetaMask Ethereum provider API")," is very simple, and wraps\n",(0,a.kt)("a",{parentName:"p",href:"/1016-doc-tags/wallet/concepts/apis#json-rpc-api"},"Ethereum JSON-RPC")," formatted messages, which is why\nsome developers use a convenience library for interacting with the provider, such as\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ethers"},"Ethers"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/web3"},"web3.js"),", and\n",(0,a.kt)("a",{parentName:"p",href:"https://framework.embarklabs.io/"},"Embark"),".\nYou can refer to those tools' documentation to use them."),(0,a.kt)("admonition",{title:"Use MetaMask SDK",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We recommend using ",(0,a.kt)("a",{parentName:"p",href:"/1016-doc-tags/wallet/concepts/sdk/"},"MetaMask SDK"),", which provides a reliable, secure, and seamless\nconnection from your dapp to the MetaMask wallet.\nIt onboards users smoothly from multiple dapp platforms using the MetaMask browser extension or\nMetaMask Mobile, and your dapp can call any ",(0,a.kt)("a",{parentName:"p",href:"/1016-doc-tags/wallet/reference/provider-api"},"provider API method"),"\nwith the SDK installed.\nGet started by ",(0,a.kt)("a",{parentName:"p",href:"/1016-doc-tags/wallet/how-to/connect/set-up-sdk/"},"setting up the SDK"),".")),(0,a.kt)("p",null,"You can also ",(0,a.kt)("a",{parentName:"p",href:"/1016-doc-tags/wallet/how-to/use-3rd-party-integrations/web3-onboard"},"use Web3-Onboard with MetaMask SDK"),"\nin your JavaScript dapp."))}u.isMDXComponent=!0}}]);