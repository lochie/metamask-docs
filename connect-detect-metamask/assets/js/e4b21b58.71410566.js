"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),i=n(86010),o=n(12466),l=n(70989),s=n(72389);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=d.indexOf(t),a=p[n].value;a!==l&&(u(t),s(a))},h=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:h,onClick:m},o,{className:(0,i.Z)("tabs__item",c.tabItem,o?.className,{"tabs__item--active":l===t})}),n??t)})))}function d(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function u(e){const t=(0,l.Y)(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",c.tabList)},r.createElement(p,(0,a.Z)({},e,t)),r.createElement(d,(0,a.Z)({},e,t)))}function m(e){const t=(0,s.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},70989:(e,t,n)=>{n.d(t,{Y:()=>u});var a=n(67294),r=n(16550),i=n(91980),o=n(67392),l=n(50012);function s(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function c(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??s(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const o=(0,r.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(o.location.search);t.set(l,e),o.replace({...o.location,search:t.toString()})}),[l,o])]}function u(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=c(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[u,m]=d({queryString:n,groupId:r}),[h,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,l.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),k=(()=>{const e=u??h;return p({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),m(e),v(e)}),[m,v,i]),tabValues:i}}},39078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),i=n(65488),o=n(85162);const l={description:"Connect to MetaMask via EIP-6963.",sidebar_position:1},s="Connect to MetaMask",c={unversionedId:"how-to/connect/index",id:"how-to/connect/index",title:"Connect to MetaMask",description:"Connect to MetaMask via EIP-6963.",source:"@site/wallet/how-to/connect/index.md",sourceDirName:"how-to/connect",slug:"/how-to/connect/",permalink:"/connect-detect-metamask/wallet/how-to/connect/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/connect/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Connect to MetaMask via EIP-6963.",sidebar_position:1},sidebar:"walletSidebar",previous:{title:"How to",permalink:"/connect-detect-metamask/wallet/how-to"},next:{title:"Detect MetaMask",permalink:"/connect-detect-metamask/wallet/how-to/connect/detect-metamask"}},p={},d=[{value:"Use third-party libraries",id:"use-third-party-libraries",level:2},{value:"Connect to MetaMask with ViteJS",id:"connect-to-metamask-with-vitejs",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create a Vite project with the EIP-6963 interfaces and types",id:"create-a-vite-project-with-the-eip-6963-interfaces-and-types",level:4},{value:"Vite + Vanilla TypeScript Code",id:"vite--vanilla-typescript-code",level:3},{value:"Vite + Vanilla TypeScript Code",id:"vite--vanilla-typescript-code-1",level:3},{value:"Examples",id:"examples",level:4},{value:"Vanilla TypeScript Repo",id:"vanilla-typescript-repo",level:5},{value:"React + TypeScript Repo",id:"react--typescript-repo",level:5},{value:"Next steps",id:"next-steps",level:3}],u={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"connect-to-metamask"},"Connect to MetaMask"),(0,r.kt)("p",null,"You can connect your dapp to users' MetaMask wallets by detecting MetaMask in their browsers and\nconnecting to their accounts."),(0,r.kt)("p",null,"The best practice for detecting MetaMask or any other browser extension wallet (wallet provider) uses the wallet detection mechanism introduced by ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6963"},"EIP-6963"),". If a user has multiple wallet browser extensions installed, you can detect multiple wallets and connect to each one without conflicts."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193")," aimed to standardize the wallet interface, but conflicts emerged among implementations, causing race conditions. Wallets injecting providers clashed impacting user experience. This created UX issues for wallet discovery, onboarding, and connection, when multiple wallet extensions are enabled in the same browser. EIP-6963 solves this."),(0,r.kt)("p",{parentName:"admonition"},"EIP-6963 enables ",(0,r.kt)("a",{parentName:"p",href:"/connect-detect-metamask/wallet/concepts/wallet-interoperability"},"wallet interoperability"),", and shifts\ndapps from relying solely on ",(0,r.kt)("a",{parentName:"p",href:"/connect-detect-metamask/wallet/how-to/connect/detect-metamask"},(0,r.kt)("inlineCode",{parentName:"a"},"window.ethereum"))," for wallet detection.")),(0,r.kt)("p",null,"You can connect to MetaMask ",(0,r.kt)("a",{parentName:"p",href:"#use-third-party-libraries"},"using third-party libraries")," or\n",(0,r.kt)("a",{parentName:"p",href:"#connect-to-metamask-directly"},"directly using the Wallet API"),"."),(0,r.kt)("h2",{id:"use-third-party-libraries"},"Use third-party libraries"),(0,r.kt)("p",null,"You can connect to MetaMask using the following third-party libraries that support EIP-6963:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wagmi.sh"},"Wagmi 2+")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.walletconnect.com/web3modal/about"},"Web3Modal 3+")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/wevm/mipd"},"MIPD Store")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.rainbowkit.com"},"RainbowKit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://onboard.blocknative.com"},"Web3Onboard"))),(0,r.kt)("h2",{id:"connect-to-metamask-with-vitejs"},"Connect to MetaMask with ViteJS"),(0,r.kt)("p",null,"For connecting to MetaMask, we suggest implementing support for EIP-6963 in JavaScript/TypeScript or React and use the\n",(0,r.kt)("a",{parentName:"p",href:"/connect-detect-metamask/wallet/concepts/wallet-api"},"Wallet API's")," ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts")," RPC endpoint. "),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Review and understand the ",(0,r.kt)("a",{parentName:"li",href:"/connect-detect-metamask/wallet/concepts/wallet-interoperability#eip-6963-interfaces"},"EIP-6963 interfaces"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://v3.vitejs.dev/guide/#scaffolding-your-first-vite-project"},"Set up a Vanilla TypeScript or React TypeScript Vite project"),".")),(0,r.kt)("h4",{id:"create-a-vite-project-with-the-eip-6963-interfaces-and-types"},"Create a Vite project with the EIP-6963 interfaces and types"),(0,r.kt)("p",null,"This page will walk you through basic examples using Vite + Vanilla TypScript and Vite + React & TypeScript. Choose the correct following step for you're adventure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Create a Vanilla JavaScript/TypeScript Vite project"',title:'"Create',a:!0,Vanilla:!0,"JavaScript/TypeScript":!0,Vite:!0,'project"':!0},"npm create vite@latest vanilla-ts-6963 -- --template vanilla-ts\n")),(0,r.kt)("p",null,"or "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Create a React JavaScript/TypeScript Vite project"',title:'"Create',a:!0,React:!0,"JavaScript/TypeScript":!0,Vite:!0,'project"':!0},"npm create vite@latest react-ts-6963 -- --template react-ts\n")),(0,r.kt)("h3",{id:"vite--vanilla-typescript-code"},"Vite + Vanilla TypeScript Code"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"vite-env.d.ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="vite-env.d.ts"',title:'"vite-env.d.ts"'},'/// <reference types="vite/client" />\n\ninterface EIP6963ProviderInfo {\n  rdns: string;\n  uuid: string;\n  name: string;\n  icon: string;\n}\n\ninterface EIP6963ProviderDetail {\n  info: EIP6963ProviderInfo;\n  provider: EIP1193Provider;\n}\n\ntype EIP6963AnnounceProviderEvent = {\n  detail:{\n    info: EIP6963ProviderInfo,\n    provider: Readonly<EIP1193Provider>\n  }\n}\n\ninterface EIP1193Provider {\n  isStatus?: boolean;\n  host?: string;\n  path?: string;\n  sendAsync?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n  send?: (request: { method: string, params?: Array<unknown> }, callback: (error: Error | null, response: unknown) => void) => void\n  request: (request: { method: string, params?: Array<unknown> }) => Promise<unknown>\n}\n')),(0,r.kt)("p",null,"In addition to the EIP-6963 interfaces, you need a ",(0,r.kt)("inlineCode",{parentName:"p"},"EIP1193Provider")," interface (defined by ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1193"},"EIP-1193"),"), which is the foundational structure for Ethereum wallet providers and represents the essential properties and methods for interacting with MetaMask with JavaScript.")),(0,r.kt)(o.Z,{value:"main.ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="main.ts"',title:'"main.ts"'},"import './style.css'\nimport { listProviders } from './providers.ts'\n\ndocument.querySelector<HTMLDivElement>('#app')!.innerHTML = `\n  <div>\n    <div id=\"providerButtons\"></div>\n  </div>\n`\n\nlistProviders(document.querySelector<HTMLDivElement>('#providerButtons')!)\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"querySelector")," finds and returns the first HTML element that matches the CSS selector ",(0,r.kt)("inlineCode",{parentName:"p"},"app")," and set its innerHTML\nto include a basic HMTL structure with an inner div that we can inject a list of buttons each representing any wallet provider we have discovered."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"listProviders")," function is what we will create next and we need to pass an argument which represents the div element\nThis function will be responsible for connecting to the specific provider using ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts"),"\nthen using appendChild to add each button to the element within the div with the id of ",(0,r.kt)("inlineCode",{parentName:"p"},"providerButtons"))),(0,r.kt)(o.Z,{value:"providers.ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="providers.ts"',title:'"providers.ts"'},'declare global {\n  interface WindowEventMap {\n    "eip6963:announceProvider": CustomEvent;\n  }\n}\n\nconst connectWithProvider = async (wallet: EIP6963AnnounceProviderEvent[\'detail\']) => {\n  try {\n    await wallet.provider\n      .request({ method: \'eth_requestAccounts\' })\n  } catch (error) {\n    console.error("Failed to connect to provider:", error);\n  }\n};\n\nexport function listProviders(element: HTMLDivElement) {\n  window.addEventListener(\'eip6963:announceProvider\',\n    (event: EIP6963AnnounceProviderEvent) => {\n      const button = document.createElement(\'button\');\n    \n      button.innerHTML = `\n        <img src="${event.detail.info.icon}" alt="${event.detail.info.name}" />\n        <div>${event.detail.info.name}</div>`;\n    \n      button.onclick = () => connectWithProvider(event.detail);\n      element.appendChild(button);\n    }\n  );\n\n  window.dispatchEvent(new Event("eip6963:requestProvider"));\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"connectWithProvider")," function is responsible for connecting to the provider using ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts"),".\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet")," object is passed as an argument to the function indicating the detail of its type as the argument type."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"listProviders")," function we've opted for a simplified approach (over mapping and joining an entire block of HTML).\nAnd we are directly passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"event.detail")," object to the ",(0,r.kt)("inlineCode",{parentName:"p"},"connectWithProvider")," function when a provider is announced."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"connectWithProvider")," is then called when the button is clicked."),(0,r.kt)("p",null,"We ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatchEvent")," on ",(0,r.kt)("inlineCode",{parentName:"p"},"window")," to notify other parts of the dapp that a provider is being requested, and that any event listeners set up to listen for this event, respond accordingly."),(0,r.kt)("p",null,"At this point you could run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run dev")," to test the Vite project in a browser."))),(0,r.kt)("h3",{id:"vite--vanilla-typescript-code-1"},"Vite + Vanilla TypeScript Code"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"App.tsx",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.tsx"',title:'"App.tsx"'},"import './App.css'\nimport { DiscoverWalletProviders } from './components/DiscoverWalletProviders'\n\nfunction App() {\n  return (\n    <DiscoverWalletProviders/>\n  )\n}\n\nexport default App\n")),(0,r.kt)("p",null,"In our App.tsx we are simply rendering the DiscoverWalletProviders component that contains the logic for detecting and connecting to wallet providers.")),(0,r.kt)(o.Z,{value:"DiscoverWalletProviders.tsx",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/components/DiscoverWalletProviders.tsx"',title:'"/components/DiscoverWalletProviders.tsx"'},"import { useState } from 'react'\nimport { useSyncProviders } from '../hooks/useSyncProviders'\nimport { formatAddress } from '~/utils'\n\nexport const DiscoverWalletProviders = () => {\n  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>()\n  const [userAccount, setUserAccount] = useState<string>('')\n  const providers = useSyncProviders()\n\n  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {\n    try {\n      const accounts = await providerWithInfo.provider.request({ \n        method: 'eth_requestAccounts' \n      });\n\n      setSelectedWallet(providerWithInfo);\n      setUserAccount(accounts?.[0]);\n    } catch (error) {\n      console.error(error);\n    }\n  }\n\n  return (\n    <>\n      <h2>Wallets Detected:</h2>\n      <div>\n        {\n          providers.length > 0 ? providers?.map((provider: EIP6963ProviderDetail) => (\n            <button key={provider.info.uuid} onClick={() => handleConnect(provider)} >\n              <img src={provider.info.icon} alt={provider.info.name} />\n              <div>{provider.info.name}</div>\n            </button>\n          )) :\n            <div>\n              No Announced Wallet Providers\n            </div>\n        }\n      </div>\n      <hr />\n      <h2>{userAccount ? \"\" : \"No \"}Wallet Selected</h2>\n      {userAccount &&\n        <div>\n          <div>\n            <img src={selectedWallet.info.icon} alt={selectedWallet.info.name} />\n            <div>{selectedWallet.info.name}</div>\n            <div>({formatAddress(userAccount)})</div>\n          </div>\n        </div>\n      }\n    </>\n  )\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"selectedWallet")," is a state variable that holds the users most recent selected wallet.\n",(0,r.kt)("inlineCode",{parentName:"p"},"userAccount")," is a state variable that holds the users connected wallet's address.\n",(0,r.kt)("inlineCode",{parentName:"p"},"useSyncProviders")," is a custom hook that returns the providers array (wallets extensions installed in the browser)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"handleConnect")," function takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"providerWithInfo")," which is an ",(0,r.kt)("inlineCode",{parentName:"p"},"EIP6963ProviderDetail")," object.\nThat object is then used to request the users accounts from the provider using the ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_requestAccounts")," RPC method."),(0,r.kt)("p",null,"If the request is ",(0,r.kt)("strong",{parentName:"p"},"successful")," we set the ",(0,r.kt)("inlineCode",{parentName:"p"},"selectedWallet")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"userAccount")," local state variables\nIf we encounter an ",(0,r.kt)("strong",{parentName:"p"},"error")," we log it using ",(0,r.kt)("inlineCode",{parentName:"p"},"error.log")," a console function."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," we are mapping over the providers array and rendering a button for each provider detected unless there are no providers in which case we display a message: ",(0,r.kt)("strong",{parentName:"p"},'"No Announced Wallet Providers"'),"."),(0,r.kt)("p",null,"Finally,  if the ",(0,r.kt)("inlineCode",{parentName:"p"},"userAccount")," state variable is not empty we display the selected wallet icon, name, and ",(0,r.kt)("inlineCode",{parentName:"p"},"selectedWallet")," address. When displaying the address we use the ",(0,r.kt)("inlineCode",{parentName:"p"},"formatAddress")," utility function to only show the beginning and end of the address for readability.")),(0,r.kt)(o.Z,{value:"store.ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="hooks/store.ts"',title:'"hooks/store.ts"'},'declare global{\n  interface WindowEventMap {\n    "eip6963:announceProvider": CustomEvent\n  }\n}\n\nlet providers: EIP6963ProviderDetail[] = []\n\nexport const store = {\n  value: ()=> providers,\n  subscribe: (callback: ()=> void) => {\n    function onAnnouncement(event: EIP6963AnnounceProviderEvent){\n      if(providers.map(p => p.info.uuid).includes(event.detail.info.uuid)) return\n      providers = [...providers, event.detail]\n      callback()\n    }\n\n    window.addEventListener("eip6963:announceProvider", onAnnouncement);\n    window.dispatchEvent(new Event("eip6963:requestProvider"));\n    \n    return () => window.removeEventListener("eip6963:announceProvider", onAnnouncement)\n  }\n}\n')),(0,r.kt)("p",null,"We ",(0,r.kt)("inlineCode",{parentName:"p"},"declare")," the ",(0,r.kt)("inlineCode",{parentName:"p"},"global")," window event map to include the ",(0,r.kt)("inlineCode",{parentName:"p"},'"eip6963:announceProvider"')," event as it is not standard.\nWe need an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"EIP6963ProviderDetail")," objects to store the wallet providers that we will discover."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"store")," is an object that contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," methods that we use with the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSyncExternalStore")," hook as it allows us to subscribe, read updated values from this store, and update components if necessary."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," method returns the providers array (wallets extensions detected installed in the browser)\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," method takes a callback function that creates an event listener for the ",(0,r.kt)("inlineCode",{parentName:"p"},'"eip6963:announceProvider"')," event\nWe listen for the ",(0,r.kt)("inlineCode",{parentName:"p"},'"eip6963:announceProvider"')," event and call the ",(0,r.kt)("inlineCode",{parentName:"p"},"onAnnouncement")," function when the event is triggered."),(0,r.kt)("p",null,"Next we  dispatch the ",(0,r.kt)("inlineCode",{parentName:"p"},'"eip6963:requestProvider"')," event which triggers the event listener in the MetaMask wallet\nFinally we are returning a function that removes the event listener.")),(0,r.kt)(o.Z,{value:"useSyncProviders.ts",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="hooks/useSyncProviders.ts"',title:'"hooks/useSyncProviders.ts"'},'import { useSyncExternalStore } from "react";\nimport { store } from "./store";\n\nexport const useSyncProviders = ()=> useSyncExternalStore(store.subscribe, store.value, store.value)\n')),(0,r.kt)("p",null,"This hook allows us to subscribe, read updated values from, and update components if necessary using the ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," and its subscribe and value methods."),(0,r.kt)("p",null,"In our case the external store is MetaMask wallet state and events."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," object contains the ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe")," methods:\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," method returns the providers array (wallets extensions detected installed in the browser).\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribe"),' method takes a callback function that creates an event listener for the "eip6963:announceProvider" event.')),(0,r.kt)(o.Z,{value:"Utility Functions",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="util/index.ts"',title:'"util/index.ts"'},"export const formatBalance = (rawBalance: string) => {\n  const balance = (parseInt(rawBalance) / 1000000000000000000).toFixed(2)\n  return balance\n}\n\nexport const formatChainAsNum = (chainIdHex: string) => {\n  const chainIdNum = parseInt(chainIdHex)\n  return chainIdNum\n}\n\nexport const formatAddress = (addr: string) => {\n  const upperAfterLastTwo = addr.slice(0,2) + addr.slice(2)\n  return `${upperAfterLastTwo.substring(0, 5)}...${upperAfterLastTwo.substring(39)}`\n}\n")),(0,r.kt)("p",null,"This is a good place to store utility functions that we might need to reuse throughout our dapps.\nWe are only using the ",(0,r.kt)("inlineCode",{parentName:"p"},"formatAddress")," function, but the others are useful in a dapp so we left them in."))),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"For both Vanilla TypeScript and React + TypeScript examples, feel free to clone the repos and try them out locally."),(0,r.kt)("h5",{id:"vanilla-typescript-repo"},"Vanilla TypeScript Repo"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/vite-vanilla-ts-eip-6963"},"Vanilla TypeScript Repo Link")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the code"',title:'"Run',the:!0,'code"':!0},"git clone https://github.com/MetaMask/vite-vanilla-ts-eip-6963 && cd vite-vanilla-ts-eip-6963 &&\nnpm i && npm run dev\n")),(0,r.kt)("h5",{id:"react--typescript-repo"},"React + TypeScript Repo"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/vite-react-ts-eip-6963"},"React + TypeScript Repo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the code"',title:'"Run',the:!0,'code"':!0},"git clone https://github.com/MetaMask/vite-react-ts-eip-69633 && cd vite-react-ts-eip-6963 &&\nnpm i && npm run dev\n")),(0,r.kt)("h3",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"After connecting to MetaMask directly, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../manage-networks"},"Detect, add, and switch networks"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/connect-detect-metamask/wallet/how-to/send-transactions"},"Send transactions"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/connect-detect-metamask/wallet/how-to/sign-data/"},"Sign data"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../display"},"Display tokens, contract methods, and icons in MetaMask"),".")))}h.isMDXComponent=!0}}]);