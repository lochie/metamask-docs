"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6752],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={description:"Configure and connect to a Ganache development network.",sidebar_position:2},i="Run a development network",l={unversionedId:"how-to/get-started-building/run-devnet",id:"how-to/get-started-building/run-devnet",title:"Run a development network",description:"Configure and connect to a Ganache development network.",source:"@site/wallet/how-to/get-started-building/run-devnet.md",sourceDirName:"how-to/get-started-building",slug:"/how-to/get-started-building/run-devnet",permalink:"/contract-interaction/wallet/how-to/get-started-building/run-devnet",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/get-started-building/run-devnet.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Configure and connect to a Ganache development network.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Set up your development environment",permalink:"/contract-interaction/wallet/how-to/get-started-building/set-up-dev-environment"},next:{title:"Secure your dapp",permalink:"/contract-interaction/wallet/how-to/get-started-building/secure-dapp"}},p={},c=[{value:"Connect to Hardhat Network",id:"connect-to-hardhat-network",level:2},{value:"Reset your local nonce calculation",id:"reset-your-local-nonce-calculation",level:2},{value:"Next steps",id:"next-steps",level:2}],s={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-a-development-network"},"Run a development network"),(0,r.kt)("p",null,"You can run a personal Ethereum development network using ",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-network/docs/overview#hardhat-network"},"Hardhat"),",\nwhich allows you to develop a dapp in a secure test environment."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When using a local development blockchain such as Hardhat Network or\n",(0,r.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/anvil/#overview-of-anvil"},"anvil"),", your node must calculate gas to make\ntransactions on MetaMask.")),(0,r.kt)("h2",{id:"connect-to-hardhat-network"},"Connect to Hardhat Network"),(0,r.kt)("p",null,"Follow these steps to connect MetaMask to Hardhat Network."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-runner/docs/guides/project-setup"},"Set up a Hardhat project."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new\n",(0,r.kt)("a",{parentName:"p",href:"https://support.metamask.io/hc/en-us/articles/360060826432-What-is-a-Secret-Recovery-Phrase-and-how-to-keep-your-crypto-wallet-secure#:~:text=Your%20Secret%20Recovery%20Phrase%20(SRP,are%20connected%20to%20that%20phrase.)"},"MetaMask seed phrase"),"\nspecifically for development."),(0,r.kt)("admonition",{parentName:"li",title:"important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Your seed phrase controls all your accounts, so we recommend keeping at least one seed phrase for\ndevelopment, separate from any used to store real value.\nYou can manage multiple seed phrases by using multiple browser profiles, each with its own\nMetaMask installation."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," file, specify a\n",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-runner/docs/config#networks-configuration"},(0,r.kt)("inlineCode",{parentName:"a"},"networks")," configuration"),"\nwith a ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat")," network.\nIn this ",(0,r.kt)("inlineCode",{parentName:"p"},"networks.hardhat")," configuration:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Specify your MetaMask seed phrase in the\n",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-network/docs/reference#accounts"},(0,r.kt)("inlineCode",{parentName:"a"},"accounts.mnemonic"))," field."),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Alternatively, to prevent committing your seed phrase, we recommend adding your seed phrase to a\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.infura.io/tutorials/developer-tools/javascript-dotenv"},(0,r.kt)("inlineCode",{parentName:"a"},".env")," file")," and using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"process.env")," global variable in ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Specify the ",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-network/docs/metamask-issue"},"chain ID ",(0,r.kt)("inlineCode",{parentName:"a"},"1337"))," in the\n",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-network/docs/reference#chainid"},(0,r.kt)("inlineCode",{parentName:"a"},"chainId"))," field."))),(0,r.kt)("p",{parentName:"li"},"For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="hardhat.config.js"',title:'"hardhat.config.js"'},"module.exports = {\n  networks: {\n    hardhat: {\n      accounts: {\n        mnemonic: process.env.SEED_PHRASE,\n      },\n      chainId: 1337\n    },\n  },\n};\n")),(0,r.kt)("p",{parentName:"li"},"Hardhat automatically gives each of your first 20 accounts 10000 test ether (you can modify\nthese numbers in the ",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/hardhat-network/docs/reference#accounts"},(0,r.kt)("inlineCode",{parentName:"a"},"accounts")),"\nconfiguration), which makes it easy to start development.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"npx hardhat node")," to run Hardhat Network and expose a JSON-RPC interface.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can now connect MetaMask to your Hardhat Network RPC URL, ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8545/"),".\nIn the MetaMask extension:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the upper left corner, select the network you're currently connected to.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Add network"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Add a network manually"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter your Hardhat Network RPC URL, ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8545/")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8545"),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter your Hardhat Network chain ID, ",(0,r.kt)("inlineCode",{parentName:"p"},"1337")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"0x539")," in hexadecimal format)."))),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Alternatively, you can add Hardhat Network to MetaMask using\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/reference/wallet_addethereumchain/?AddEthereumChainParameter%5BrpcUrls%5D%5B0%5D=http://127.0.0.1:8545&AddEthereumChainParameter%5BchainId%5D=0x539&AddEthereumChainParameter%5BchainName%5D=Hardhat&AddEthereumChainParameter%5BnativeCurrency%5D%5Bname%5D=testEth&AddEthereumChainParameter%5BnativeCurrency%5D%5Bsymbol%5D=testEth&AddEthereumChainParameter%5BnativeCurrency%5D%5Bdecimals%5D=18"},(0,r.kt)("inlineCode",{parentName:"a"},"wallet_addEthereumChain")),"\nin the interactive API playground.")))),(0,r.kt)("h2",{id:"reset-your-local-nonce-calculation"},"Reset your local nonce calculation"),(0,r.kt)("p",null,"If you restart your development network, you can accidentally confuse MetaMask\nbecause it calculates the next ",(0,r.kt)("a",{parentName:"p",href:"/contract-interaction/wallet/how-to/send-transactions#nonce"},"nonce")," based on both the\nnetwork state ",(0,r.kt)("em",{parentName:"p"},"and")," the known sent transactions."),(0,r.kt)("p",null,"To clear MetaMask's transaction queue and reset its nonce calculation, go to ",(0,r.kt)("strong",{parentName:"p"},"Settings > Advanced"),"\nand select ",(0,r.kt)("strong",{parentName:"p"},"Reset account"),"."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"Once you have your development environment set up and development network running, you can\n",(0,r.kt)("a",{parentName:"p",href:"/wallet/how-to/connect"},"connect your dapp to MetaMask")," by setting up MetaMask SDK, detecting\nMetaMask, detecting a user's network, and accessing a user's accounts."),(0,r.kt)("p",null,"For an end-to-end example, you can also follow the\n",(0,r.kt)("a",{parentName:"p",href:"/contract-interaction/wallet/tutorials/react-dapp-local-state"},"Create a simple React dapp")," tutorial."))}u.isMDXComponent=!0}}]);