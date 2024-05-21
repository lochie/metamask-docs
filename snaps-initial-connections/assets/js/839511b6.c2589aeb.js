"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5044],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>m});var a=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),p=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(t),h=r,m=c["".concat(i,".").concat(h)]||c[h]||d[h]||s;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=h;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<s;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},86530:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=t(58168),r=(t(96540),t(15680)),s=t(4865),o=t(19365);const l={description:"Connect your dapp to existing, third-party Snaps.",sidebar_position:9},i="Connect to a Snap",p={unversionedId:"how-to/connect-to-a-snap",id:"how-to/connect-to-a-snap",title:"Connect to a Snap",description:"Connect your dapp to existing, third-party Snaps.",source:"@site/snaps/how-to/connect-to-a-snap.md",sourceDirName:"how-to",slug:"/how-to/connect-to-a-snap",permalink:"/snaps-initial-connections/snaps/how-to/connect-to-a-snap",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/connect-to-a-snap.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{description:"Connect your dapp to existing, third-party Snaps.",sidebar_position:9},sidebar:"snapsSidebar",previous:{title:"Get allowlisted",permalink:"/snaps-initial-connections/snaps/how-to/get-allowlisted"},next:{title:"Reference",permalink:"/snaps-initial-connections/snaps/reference"}},u={},c=[{value:"Detect wallet",id:"detect-wallet",level:2},{value:"Detect MetaMask Flask",id:"detect-metamask-flask",level:3},{value:"Connect to a Snap",id:"connect-to-a-snap-1",level:2},{value:"User rejects the installation request",id:"user-rejects-the-installation-request",level:3},{value:"User approves the installation request",id:"user-approves-the-installation-request",level:3},{value:"Snap is already installed",id:"snap-is-already-installed",level:3},{value:"Determine whether a Snap is installed",id:"determine-whether-a-snap-is-installed",level:2},{value:"Reconnect to a Snap",id:"reconnect-to-a-snap",level:2}],d={toc:c},h="wrapper";function m(e){let{components:n,...t}=e;return(0,r.yg)(h,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"connect-to-a-snap"},"Connect to a Snap"),(0,r.yg)("p",null,"Dapps can connect to Snaps designed to communicate with dapps.\nDapps can use these Snaps to take advantage of new features enabled by Snaps.\nThis is possible because Snaps can expose a ",(0,r.yg)("a",{parentName:"p",href:"/snaps-initial-connections/snaps/learn/about-snaps/apis#custom-json-rpc-apis"},"custom JSON-RPC API"),"."),(0,r.yg)("h2",{id:"detect-wallet"},"Detect wallet"),(0,r.yg)("p",null,"To connect to a Snap, dapps must first detect MetaMask in the user's browser.\nSee the Wallet documentation on ",(0,r.yg)("a",{parentName:"p",href:"/wallet/how-to/connect"},"how to connect to MetaMask"),"."),(0,r.yg)("h3",{id:"detect-metamask-flask"},"Detect MetaMask Flask"),(0,r.yg)("p",null,"When developing your Snap, you might need to require\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-initial-connections/snaps/get-started/install-flask"},"MetaMask Flask")," in your dapp.\nWe recommend detecting MetaMask Flask using the\n",(0,r.yg)("a",{parentName:"p",href:"/wallet/concepts/wallet-interoperability"},"multi-wallet detection mechanism")," specified by EIP-6963.\nAlternatively, you can use the ",(0,r.yg)("inlineCode",{parentName:"p"},"window.ethereum")," injected provider, but this might fail if the user\nis running multiple wallet extensions simultaneously. "),(0,r.yg)("p",null,"To detect MetaMask Flask, you can add the following to ",(0,r.yg)("inlineCode",{parentName:"p"},"window.onload"),": "),(0,r.yg)(s.A,{mdxType:"Tabs"},(0,r.yg)(o.A,{value:"EIP-6963 example",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'window.addEventListener("eip6963:announceProvider", (event) => {\n  /* event.detail contains the discovered provider interface. */\n  const providerDetail = event.detail;\n\n  /* providerDetail.info.rdns is the best way to distinguish a wallet extension. */\n  if (providerDetail.info.rdns === "io.metamask.flask") {\n    console.log("MetaMask Flask successfully detected!");\n    // Now you can use Snaps!\n  } else { \n    console.error("Please install MetaMask Flask!");\n  }\n});\n\nwindow.dispatchEvent(new Event("eip6963:requestProvider"));\n'))),(0,r.yg)(o.A,{value:"Injected provider example",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},'const provider = window.ethereum; \n\nconst isFlask = ( \n  await provider?.request({ method: "web3_clientVersion" })\n)?.includes("flask"); \n\nif (provider && isFlask) {\n  console.log("MetaMask Flask successfully detected!");\n  // Now you can use Snaps!\n} else {\n  console.error("Please install MetaMask Flask!", error);\n}\n')))),(0,r.yg)("h2",{id:"connect-to-a-snap-1"},"Connect to a Snap"),(0,r.yg)("p",null,"Connect to a Snap by calling the ",(0,r.yg)("a",{parentName:"p",href:"/snaps-initial-connections/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_requestSnaps")),"\nmethod from your dapp.\nIf a user doesn't have the Snap installed in their MetaMask wallet, MetaMask prompts the user to\ninstall the Snap."),(0,r.yg)("p",null,"The following are different possible outcomes from calling ",(0,r.yg)("inlineCode",{parentName:"p"},"wallet_requestSnaps"),"."),(0,r.yg)("h3",{id:"user-rejects-the-installation-request"},"User rejects the installation request"),(0,r.yg)("p",null,"If the user rejects the installation request, the call to ",(0,r.yg)("inlineCode",{parentName:"p"},"wallet_requestSnaps")," throws the following error:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{ "code": 4001, "message": "User rejected the request." }\n')),(0,r.yg)("h3",{id:"user-approves-the-installation-request"},"User approves the installation request"),(0,r.yg)("p",null,"If the user approves the installation request, the call to ",(0,r.yg)("inlineCode",{parentName:"p"},"wallet_requestSnaps")," returns an object\nwith the following shape:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "SNAP_ID": {\n    "blocked": false,\n    "enabled": true,\n    "id": "SNAP_ID",\n    "initialPermissions": {\n      // The permissions in the Snap\'s manifest file.\n    },\n    "version": "SNAP_VERSION"\n  }\n}\n')),(0,r.yg)("h3",{id:"snap-is-already-installed"},"Snap is already installed"),(0,r.yg)("p",null,"If the Snap is already installed, the call to ",(0,r.yg)("inlineCode",{parentName:"p"},"wallet_requestSnaps")," returns the same object as for a\nnew installation of the Snap, but the user won't see a confirmation pop-up asking them to install the Snap."),(0,r.yg)("h2",{id:"determine-whether-a-snap-is-installed"},"Determine whether a Snap is installed"),(0,r.yg)("p",null,"Determine whether a Snap is installed by calling the\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-initial-connections/snaps/reference/wallet-api-for-snaps#wallet_getsnaps"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_getSnaps"))," method from your dapp.\nThis method returns a list of only those Snaps that are connected to your current dapp."),(0,r.yg)("p",null,"The response is in the form of an object keyed by the ID of the Snap.\nEach value is a nested object with additional information, such as the version of the Snap that is installed."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"wallet_getSnaps")," only returns the Snaps that are connected to your dapp.\nThe user may have other Snaps installed that your dapp is not aware of. ")),(0,r.yg)("p",null,"The following example verifies whether a Snap with ID ",(0,r.yg)("inlineCode",{parentName:"p"},"npm:super-snap")," is installed:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts",metastring:'title="index.ts"',title:'"index.ts"'},'const snaps = await ethereum.request({\n    method: "wallet_getSnaps"\n});\n\nconst isMySnapInstalled = Object.keys(snaps).includes("npm:super-snap");\n')),(0,r.yg)("p",null,"If you need to work with a specific version of a Snap, you can instead iterate over\n",(0,r.yg)("inlineCode",{parentName:"p"},"Object.values(snaps)"),", and use the ",(0,r.yg)("inlineCode",{parentName:"p"},"id")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"version")," properties inside each object to determine\nwhether the Snap is installed with the required version."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"A user cannot install multiple versions of a Snap into a single MetaMask instance.\nYou should avoid requiring a specific version of a Snap unless you absolutely need to.\nIn most cases, you should request the latest version of the Snap and architect your dapp to be able\nto work with that version.")),(0,r.yg)("h2",{id:"reconnect-to-a-snap"},"Reconnect to a Snap"),(0,r.yg)("p",null,"At any time, a user can open their MetaMask Snaps settings menu and see all the dapps connected to a Snap.\nFrom that menu they can revoke a dapp connection.\nIf your dapp loses the connection to a Snap, you can reconnect by calling\n",(0,r.yg)("a",{parentName:"p",href:"/snaps-initial-connections/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps"},(0,r.yg)("inlineCode",{parentName:"a"},"wallet_requestSnaps")),".\nSince the Snap is already installed, this returns a success response without MetaMask showing a pop-up.\nHowever, if the user has disabled the Snap, the response has ",(0,r.yg)("inlineCode",{parentName:"p"},"enabled")," set to ",(0,r.yg)("inlineCode",{parentName:"p"},"false")," for your ",(0,r.yg)("inlineCode",{parentName:"p"},"SNAP_ID"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "SNAP_ID": {\n    "blocked": false,\n    "enabled": false,\n    "id": "SNAP_ID",\n    "initialPermissions": {\n      // The permissions in the Snap\'s manifest file.\n    },\n    "version": "SNAP_VERSION"\n  }\n}\n')))}m.isMDXComponent=!0},19365:(e,n,t)=>{t.d(n,{A:()=>o});var a=t(96540),r=t(20053);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t},n)}},4865:(e,n,t)=>{t.d(n,{A:()=>h});var a=t(58168),r=t(96540),s=t(20053),o=t(23104),l=t(47751),i=t(92303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function u(e){let{className:n,block:t,selectedValue:l,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),h=e=>{const n=e.currentTarget,t=c.indexOf(n),a=u[t].value;a!==l&&(d(n),i(a))},m=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>c.push(e),onKeyDown:m,onClick:h},o,{className:(0,s.A)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":l===n})}),t??n)})))}function c(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function d(e){const n=(0,l.u)(e);return r.createElement("div",{className:(0,s.A)("tabs-container",p.tabList)},r.createElement(u,(0,a.A)({},e,n)),r.createElement(c,(0,a.A)({},e,n)))}function h(e){const n=(0,i.A)();return r.createElement(d,(0,a.A)({key:String(n)},e))}},47751:(e,n,t)=>{t.d(n,{u:()=>d});var a=t(96540),r=t(56347),s=t(57485),o=t(31682),l=t(89466);function i(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??i(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function c(e){let{queryString:n=!1,groupId:t}=e;const o=(0,r.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(o.location.search);n.set(l,e),o.replace({...o.location,search:n.toString()})}),[l,o])]}function d(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[d,h]=c({queryString:t,groupId:r}),[m,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,l.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),f=(()=>{const e=d??m;return u({value:e,tabValues:s})?e:null})();(0,a.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),h(e),y(e)}),[h,y,s]),tabValues:s}}}}]);