"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5651],{42284:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var o=t(74848),i=t(28453);const s={description:"Authorize specific websites to automatically connect to a Snap.",sidebar_position:5},a="Allow automatic connections",c={id:"how-to/allow-automatic-connections",title:"Allow automatic connections",description:"Authorize specific websites to automatically connect to a Snap.",source:"@site/snaps/how-to/allow-automatic-connections.md",sourceDirName:"how-to",slug:"/how-to/allow-automatic-connections",permalink:"/zs/initialconnections-feature/snaps/how-to/allow-automatic-connections",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/allow-automatic-connections.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{description:"Authorize specific websites to automatically connect to a Snap.",sidebar_position:5},sidebar:"snapsSidebar",previous:{title:"Restrict RPC API methods",permalink:"/zs/initialconnections-feature/snaps/how-to/restrict-rpc-api"},next:{title:"Test a Snap",permalink:"/zs/initialconnections-feature/snaps/how-to/test-a-snap"}},l={},r=[];function p(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"allow-automatic-connections",children:"Allow automatic connections"}),"\n",(0,o.jsxs)(e.p,{children:["You can authorize specific dapps or Snaps to automatically connect to your Snap, skipping the need\nfor users to manually confirm a connection when the dapp or Snap calls\n",(0,o.jsx)(e.a,{href:"/zs/initialconnections-feature/snaps/reference/wallet-api-for-snaps#wallet_requestsnaps",children:(0,o.jsx)(e.code,{children:"wallet_requestSnaps"})}),"."]}),"\n",(0,o.jsxs)(e.p,{children:["To do so, add an ",(0,o.jsx)(e.code,{children:"initialConnections"})," field in the Snap\n",(0,o.jsx)(e.a,{href:"/zs/initialconnections-feature/snaps/learn/about-snaps/files#manifest-file",children:"manifest file"}),", specifying each website you want to\nallow to automatically connect.\nFor example:"]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialConnections": {\n  "https://my-secure-site.com": {},\n  "https://www.other-allowed-site.com": {}\n}\n'})}),"\n",(0,o.jsxs)(e.p,{children:["When a user visits a website specified in ",(0,o.jsx)(e.code,{children:"initialConnections"}),", and the website calls\n",(0,o.jsx)(e.code,{children:"wallet_requestSnaps"}),", if the Snap is already installed, the website connects immediately and can\nmake further calls to the Snap.\nIf the Snap is not installed, the user sees a confirmation to install the Snap."]}),"\n",(0,o.jsx)(e.p,{children:"When testing, you can specify the local site.\nFor example:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-json",metastring:'title="snap.manifest.json" ',children:'"initialConnections": {\n  "http://localhost:8000": {}\n}\n'})}),"\n",(0,o.jsx)(e.p,{children:"We recommend removing local sites before deploying your Snap to production."}),"\n",(0,o.jsx)(e.admonition,{title:"important",type:"caution",children:(0,o.jsxs)(e.p,{children:[(0,o.jsx)(e.code,{children:"initialConnections"})," is not a replacement for ",(0,o.jsx)(e.a,{href:"/zs/initialconnections-feature/snaps/reference/permissions#endowmentrpc",children:(0,o.jsx)(e.code,{children:"endowment:rpc"})}),".\n",(0,o.jsx)(e.code,{children:"endowment:rpc"})," is still required to allow dapps or Snaps to call RPC methods of your Snap."]})})]})}function d(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(p,{...n})}):p(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>c});var o=t(96540);const i={},s=o.createContext(i);function a(n){const e=o.useContext(s);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),o.createElement(s.Provider,{value:e},n.children)}}}]);