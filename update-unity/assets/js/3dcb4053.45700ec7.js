"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9408],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},32531:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={description:"Use an alternative discovery mechanism for multiple wallets.",sidebar_position:10},l="Discover multiple wallets",i={unversionedId:"how-to/discover-multiple-wallets",id:"how-to/discover-multiple-wallets",title:"Discover multiple wallets",description:"Use an alternative discovery mechanism for multiple wallets.",source:"@site/wallet/how-to/discover-multiple-wallets.md",sourceDirName:"how-to",slug:"/how-to/discover-multiple-wallets",permalink:"/update-unity/wallet/how-to/discover-multiple-wallets",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/discover-multiple-wallets.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{description:"Use an alternative discovery mechanism for multiple wallets.",sidebar_position:10},sidebar:"walletSidebar",previous:{title:"Access a user's MetaMask provider",permalink:"/update-unity/wallet/how-to/access-provider"},next:{title:"Use third party integrations",permalink:"/update-unity/wallet/how-to/use-3rd-party-integrations"}},s={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"discover-multiple-wallets"},"Discover multiple wallets"),(0,a.kt)("p",null,"If a user has multiple wallet browser extensions installed, your web dapp can support\n",(0,a.kt)("a",{parentName:"p",href:"/update-unity/wallet/concepts/wallet-interoperabilty"},"wallet interoperability")," by adding support for\n",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),", which enables your dapp to discover and connect\nto multiple installed wallets.\nWe recommend ",(0,a.kt)("a",{parentName:"p",href:"/update-unity/wallet/how-to/connect/set-up-sdk/javascript/"},"setting up MetaMask SDK")," in your dapp, which supports\nEIP-6963 by default."),(0,a.kt)("p",null,"If you don't have the SDK set up, you can directly update your dapp code to support EIP-6963.\nSee the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/test-dapp"},"test dapp source code")," for an example of how to\nimplement this."))}d.isMDXComponent=!0}}]);