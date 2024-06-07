"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4687],{89650:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>o});var n=t(74848),i=t(28453);const a={description:"Include and retrieve static files in the Snap bundle.",sidebar_position:12},l="Static files",c={id:"features/static-files",title:"Static files",description:"Include and retrieve static files in the Snap bundle.",source:"@site/snaps/features/static-files.md",sourceDirName:"features",slug:"/features/static-files",permalink:"/update-react-tutorials-86-mm-detect-2/snaps/features/static-files",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/static-files.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{description:"Include and retrieve static files in the Snap bundle.",sidebar_position:12},sidebar:"snapsSidebar",previous:{title:"Signature insights",permalink:"/update-react-tutorials-86-mm-detect-2/snaps/features/signature-insights"},next:{title:"Transaction insights",permalink:"/update-react-tutorials-86-mm-detect-2/snaps/features/transaction-insights"}},r={},o=[{value:"Steps",id:"steps",level:2},{value:"1. Specify static files in the Snap&#39;s manifest file",id:"1-specify-static-files-in-the-snaps-manifest-file",level:3},{value:"2. Load static files using <code>snap_getFile</code>",id:"2-load-static-files-using-snap_getfile",level:3},{value:"Example",id:"example",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"static-files",children:"Static files"}),"\n",(0,n.jsxs)(s.p,{children:["You can handle static files in your Snap bundle using the\n",(0,n.jsx)(s.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/snaps-api#snap_getfile",children:(0,n.jsx)(s.code,{children:"snap_getFile"})})," API method.\nThis is useful to load Wasm modules, ZK circuits, or any other files that must be lazily loaded."]}),"\n",(0,n.jsx)(s.h2,{id:"steps",children:"Steps"}),"\n",(0,n.jsx)(s.h3,{id:"1-specify-static-files-in-the-snaps-manifest-file",children:"1. Specify static files in the Snap's manifest file"}),"\n",(0,n.jsxs)(s.p,{children:["Specify static files as an array in the ",(0,n.jsx)(s.code,{children:"source.files"})," field of your Snap's\n",(0,n.jsx)(s.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/learn/about-snaps/files#manifest-file",children:"manifest file"}),".\nFile paths are relative to the Snap package root, that is, one level above the ",(0,n.jsx)(s.code,{children:"src"})," directory.\nFor example:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"source": {\n  "shasum": "xxx",\n  "location": {\n    // ...\n  },\n  "files": [\n    "./files/myfile.bin"\n  ]\n}\n'})}),"\n",(0,n.jsxs)(s.h3,{id:"2-load-static-files-using-snap_getfile",children:["2. Load static files using ",(0,n.jsx)(s.code,{children:"snap_getFile"})]}),"\n",(0,n.jsxs)(s.p,{children:["In your Snap code, load static files using ",(0,n.jsx)(s.a,{href:"/update-react-tutorials-86-mm-detect-2/snaps/reference/snaps-api#snap_getfile",children:(0,n.jsx)(s.code,{children:"snap_getFile"})}),".\nThis method returns a string in the encoding specified, with a default of Base64 if no encoding is specified.\nFor example:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",metastring:'title="index.js"',children:'const contents = await snap.request({\n  method: "snap_getFile",\n  params: {\n    path: "./files/myfile.bin",\n    encoding: "hex",\n  },\n});\n\n// "0x..."\nconsole.log(contents);\n'})}),"\n",(0,n.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(s.p,{children:["See the ",(0,n.jsx)(s.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/get-file",children:(0,n.jsx)(s.code,{children:"@metamask/get-file-example-snap"})}),"\npackage for a full example of handling static files."]})]})}function p(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>c});var n=t(96540);const i={},a=n.createContext(i);function l(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);