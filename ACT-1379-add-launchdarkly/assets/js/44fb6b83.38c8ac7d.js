"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[9588],{84806:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=a(74848),t=a(28453);const i={description:"Display custom user interface components.",sidebar_position:4},l="Custom UI",d={id:"features/custom-ui/index",title:"Custom UI",description:"Display custom user interface components.",source:"@site/snaps/features/custom-ui/index.md",sourceDirName:"features/custom-ui",slug:"/features/custom-ui/",permalink:"/ACT-1379-add-launchdarkly/snaps/features/custom-ui/",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/custom-ui/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{description:"Display custom user interface components.",sidebar_position:4},sidebar:"snapsSidebar",previous:{title:"Custom name resolution",permalink:"/ACT-1379-add-launchdarkly/snaps/features/custom-name-resolution"},next:{title:"Interactive UI",permalink:"/ACT-1379-add-launchdarkly/snaps/features/custom-ui/interactive-ui"}},r={},c=[{value:"Components",id:"components",level:2},{value:"<code>address</code>",id:"address",level:3},{value:"Example",id:"example",level:4},{value:"<code>button</code>",id:"button",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>copyable</code>",id:"copyable",level:3},{value:"Example",id:"example-2",level:4},{value:"<code>divider</code>",id:"divider",level:3},{value:"Example",id:"example-3",level:4},{value:"<code>form</code>",id:"form",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Example",id:"example-4",level:4},{value:"<code>heading</code>",id:"heading",level:3},{value:"Example",id:"example-5",level:4},{value:"<code>image</code>",id:"image",level:3},{value:"Example",id:"example-6",level:4},{value:"<code>input</code>",id:"input",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Example",id:"example-7",level:4},{value:"<code>panel</code>",id:"panel",level:3},{value:"Example",id:"example-8",level:4},{value:"<code>row</code>",id:"row",level:3},{value:"Example",id:"example-9",level:4},{value:"<code>spinner</code>",id:"spinner",level:3},{value:"Example",id:"example-10",level:4},{value:"<code>text</code>",id:"text",level:3},{value:"Example",id:"example-11",level:4},{value:"Markdown",id:"markdown",level:2},{value:"Example",id:"example-12",level:4},{value:"Links",id:"links",level:2},{value:"Example",id:"example-13",level:4},{value:"Emojis",id:"emojis",level:2},{value:"Example",id:"example-14",level:4},{value:"Examples",id:"examples",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"custom-ui",children:"Custom UI"}),"\n",(0,s.jsxs)(n.p,{children:["You can display custom user interface (UI) components using the\n",(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/snaps-sdk",children:(0,s.jsx)(n.code,{children:"@metamask/snaps-sdk"})})," module when\nimplementing the following features:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/ACT-1379-add-launchdarkly/snaps/features/custom-ui/dialogs",children:"Dialogs"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/ACT-1379-add-launchdarkly/snaps/features/custom-ui/home-pages",children:"Home pages"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/ACT-1379-add-launchdarkly/snaps/reference/entry-points#ontransaction",children:"Transaction insights"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/ACT-1379-add-launchdarkly/snaps/features/signature-insights",children:"Signature insights"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To use custom UI, first install ",(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/snaps-sdk",children:(0,s.jsx)(n.code,{children:"@metamask/snaps-sdk"})}),"\nusing the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn add @metamask/snaps-sdk\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then, whenever you're required to return a custom UI component, import the components from the\nSDK and build your UI with them.\nFor example, to display a ",(0,s.jsx)(n.a,{href:"#panel",children:(0,s.jsx)(n.code,{children:"panel"})})," using ",(0,s.jsx)(n.a,{href:"/ACT-1379-add-launchdarkly/snaps/reference/snaps-api#snap_dialog",children:(0,s.jsx)(n.code,{children:"snap_dialog"})}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'import { panel, heading, text } from "@metamask/snaps-sdk";\n\nawait snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "alert",\n    content: panel([\n      heading("Alert heading"),\n      text("Something happened in the system."),\n    ]),\n  },\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"components",children:"Components"}),"\n",(0,s.jsx)(n.p,{children:"The following custom UI components are available:"}),"\n",(0,s.jsx)(n.h3,{id:"address",children:(0,s.jsx)(n.code,{children:"address"})}),"\n",(0,s.jsx)(n.p,{children:"Outputs a formatted text field for an Ethereum address.\nThe address is automatically displayed with a jazzicon and truncated value.\nHovering the address shows the full value in a tooltip."}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'import { panel, heading, address } from "@metamask/snaps-sdk";\n\nawait snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "alert",\n    content: panel([\n      heading("Are you sure you want to send tokens to this address?"),\n      address("0x000000000000000000000000000000000000dEaD"),\n    ]),\n  },\n});\n'})}),"\n",(0,s.jsxs)("div",{class:"row",children:[(0,s.jsx)("div",{class:"column",children:(0,s.jsx)("img",{src:a(22370).A,alt:"Address UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})}),(0,s.jsx)("div",{class:"column",children:(0,s.jsx)("img",{src:a(83272).A,alt:"Address tooltip UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})})]}),"\n",(0,s.jsx)(n.h3,{id:"button",children:(0,s.jsx)(n.code,{children:"button"})}),"\n",(0,s.jsxs)(n.p,{children:["Outputs a button that the user can select.\nFor use in ",(0,s.jsx)(n.a,{href:"/ACT-1379-add-launchdarkly/snaps/features/custom-ui/interactive-ui",children:"interactive UI"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"An object containing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"value"}),": ",(0,s.jsx)(n.code,{children:"string"})," - The text of the button."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"buttonType"}),": ",(0,s.jsx)(n.code,{children:"string"})," - (Optional) Possible values are ",(0,s.jsx)(n.code,{children:"button"})," or ",(0,s.jsx)(n.code,{children:"submit"}),".\nThe default is ",(0,s.jsx)(n.code,{children:"button"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": ",(0,s.jsx)(n.code,{children:"string"})," - (Optional) The name that will be sent to ",(0,s.jsx)(n.a,{href:"/ACT-1379-add-launchdarkly/snaps/reference/entry-points#onuserinput",children:(0,s.jsx)(n.code,{children:"onUserInput"})}),"\nwhen a user selects the button."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"variant"})," - (Optional) Determines the appearance of the button.\nPossible values are ",(0,s.jsx)(n.code,{children:"primary"})," or ",(0,s.jsx)(n.code,{children:"secondary"}),".\nThe default is ",(0,s.jsx)(n.code,{children:"primary"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'import { button, panel, heading } from "@metamask/snaps-sdk";\n\nconst interfaceId = await snap.request({\n  method: "snap_createInterface",\n  params: {\n    ui: panel([\n      heading("Interactive interface"),\n      button({\n        value: "Click me",\n        name: "interactive-button",\n      }),\n    ]),\n  },\n});\n\nawait snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "Alert",\n    id: interfaceId,\n  },\n});\n'})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:a(30112).A,alt:"Button UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(n.h3,{id:"copyable",children:(0,s.jsx)(n.code,{children:"copyable"})}),"\n",(0,s.jsx)(n.p,{children:"Outputs a read-only text field with a copy-to-clipboard shortcut."}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'import { text, copyable } from "@metamask/snaps-sdk";\n\nawait snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "alert",\n    content: panel([\n      text("Your address:"),\n      copyable("0x000000000000000000000000000000000000dEaD"),\n    ]),\n  },\n});\n'})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:a(82383).A,alt:"Copyable UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(n.h3,{id:"divider",children:(0,s.jsx)(n.code,{children:"divider"})}),"\n",(0,s.jsx)(n.p,{children:"Outputs a horizontal divider."}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'import type { OnHomePageHandler } from "@metamask/snaps-sdk";\nimport { panel, divider, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onHomePage = async () => {\n  return {\n    content: panel([\n      heading("Hello world!"),\n      divider(),\n      text("Welcome to my Snap home page!"),\n    ]),\n  };\n};\n'})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:a(71265).A,alt:"Divider UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(n.h3,{id:"form",children:(0,s.jsx)(n.code,{children:"form"})}),"\n",(0,s.jsxs)(n.p,{children:["Outputs a form for use in ",(0,s.jsx)(n.a,{href:"/ACT-1379-add-launchdarkly/snaps/features/custom-ui/interactive-ui",children:"interactive UI"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"An object containing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": ",(0,s.jsx)(n.code,{children:"string"})," - The name that will be sent to ",(0,s.jsx)(n.a,{href:"/ACT-1379-add-launchdarkly/snaps/reference/entry-points#onuserinput",children:(0,s.jsx)(n.code,{children:"onUserInput"})}),"\nwhen a user interacts with the form."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"children"}),": ",(0,s.jsx)(n.code,{children:"array"})," - An array of ",(0,s.jsx)(n.a,{href:"#input",children:(0,s.jsx)(n.code,{children:"input"})})," or ",(0,s.jsx)(n.a,{href:"#button",children:(0,s.jsx)(n.code,{children:"button"})})," components."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { input, button, form } from "@metamask/snaps-sdk";\n\nconst interfaceId = await snap.request({\n  method: "snap_createInterface",\n  params: {\n    ui: form({\n      name: "form-to-fill",\n      children: [\n        input({\n          name: "user-name",\n          placeholder: "Your name",\n        }),\n        button({\n          value: "Submit",\n          buttonType: "submit",\n        }),\n      ],\n    }),\n  },\n});\n\nawait snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "Alert",\n    id: interfaceId,\n  },\n});\n'})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:a(89838).A,alt:"Form UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(n.h3,{id:"heading",children:(0,s.jsx)(n.code,{children:"heading"})}),"\n",(0,s.jsxs)(n.p,{children:["Outputs a heading.\nThis is useful for ",(0,s.jsx)(n.a,{href:"#panel",children:(0,s.jsx)(n.code,{children:"panel"})})," titles."]}),"\n",(0,s.jsx)(n.h4,{id:"example-5",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'import type { OnHomePageHandler } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onHomePage = async () => {\n  return {\n    content: panel([\n      heading("Hello world!"),\n      text("Welcome to my Snap home page!"),\n    ]),\n  };\n};\n'})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:a(18532).A,alt:"Divider UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(n.h3,{id:"image",children:(0,s.jsx)(n.code,{children:"image"})}),"\n",(0,s.jsx)(n.p,{children:"Outputs an image.\nThis component takes an inline SVG.\nIt does not support remote URLs."}),"\n",(0,s.jsxs)(n.p,{children:["You can import SVG, PNG, and JPEG files using an import statement.\nThese files are automatically imported as SVG strings, so you can pass them directly to the ",(0,s.jsx)(n.code,{children:"image"})," component."]}),"\n",(0,s.jsxs)(n.p,{children:["The SVG is rendered within an ",(0,s.jsx)(n.code,{children:"<img>"})," tag, which prevents JavaScript or interaction events from\nbeing supported."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["To disable image support, set the ",(0,s.jsx)(n.a,{href:"/ACT-1379-add-launchdarkly/snaps/reference/cli/options#featuresimages",children:(0,s.jsx)(n.code,{children:"features.images"})}),"\nconfiguration option to ",(0,s.jsx)(n.code,{children:"false"}),".\nThe default is ",(0,s.jsx)(n.code,{children:"true"}),"."]})}),"\n",(0,s.jsx)(n.h4,{id:"example-6",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'import type { OnHomePageHandler } from "@metamask/snaps-sdk";\nimport { panel, heading, text, image } from "@metamask/snaps-sdk";\nimport svgIcon from "./path/to/icon.svg";\n\nmodule.exports.onHomePage = async () => {\n  return {\n    content: panel([\n      heading("Hello world!"),\n      text("Welcome to my Snap home page!"),\n      image(svgIcon),\n    ]),\n  };\n};\n'})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:a(43213).A,alt:"Divider UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(n.h3,{id:"input",children:(0,s.jsx)(n.code,{children:"input"})}),"\n",(0,s.jsxs)(n.p,{children:["Outputs an input component for use in ",(0,s.jsx)(n.a,{href:"/ACT-1379-add-launchdarkly/snaps/features/custom-ui/interactive-ui",children:"interactive UI"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"An object containing:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"name"}),": ",(0,s.jsx)(n.code,{children:"string"})," - The name that will be used as a key to the event sent to\n",(0,s.jsx)(n.a,{href:"/ACT-1379-add-launchdarkly/snaps/reference/entry-points#onuserinput",children:(0,s.jsx)(n.code,{children:"onUserInput"})})," when the containing form is submitted."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"inputType"}),": ",(0,s.jsx)(n.code,{children:"string"})," - (Optional) Type of input.\nPossible values are ",(0,s.jsx)(n.code,{children:"text"}),", ",(0,s.jsx)(n.code,{children:"number"}),", or ",(0,s.jsx)(n.code,{children:"password"}),".\nThe default is ",(0,s.jsx)(n.code,{children:"text"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"placeholder"}),": ",(0,s.jsx)(n.code,{children:"string"})," - (Optional) The text displayed when the input is empty."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"label"}),": ",(0,s.jsx)(n.code,{children:"string"})," (Optional) The text displayed alongside the input to label it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"value"}),": ",(0,s.jsx)(n.code,{children:"string"})," (Optional) The default value of the input."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-7",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { input, form } from "@metamask/snaps-sdk";\n\nconst interfaceId = await snap.request({\n  method: "snap_createInterface",\n  params: {\n    ui: form({\n      name: "form-to-fill",\n      children: [\n        input({\n          name: "user-name",\n          placeholder: "Your name",\n        }),\n        button({\n          value: "Submit",\n          buttonType: "submit",\n        }),\n      ],\n    }),\n  },\n});\n\nawait snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "Alert",\n    id: interfaceId,\n  },\n});\n'})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:a(89838).A,alt:"Form UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/images",children:(0,s.jsx)(n.code,{children:"@metamask/images-example-snap"})}),"\npackage for a full example of implementing images."]})}),"\n",(0,s.jsx)(n.h3,{id:"panel",children:(0,s.jsx)(n.code,{children:"panel"})}),"\n",(0,s.jsx)(n.p,{children:"Outputs a panel, which can be used as a container for other components.\nThis component takes an array of custom UI components."}),"\n",(0,s.jsx)(n.h4,{id:"example-8",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'import type { OnTransactionHandler } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onTransaction = async ({ transaction }) => {\n  const gasFeesPercentage = /* Calculate gas fees percentage */;\n  return {\n    content: panel([\n      heading("Transaction insights"),\n      text(\n        `As set up, you are paying **${gasFeesPercentage.toFixed(\n          2,\n        )}%** in gas fees for this transaction.`,\n      ),\n    ]),\n  };\n};\n'})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:a(88764).A,alt:"Panel UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(n.h3,{id:"row",children:(0,s.jsx)(n.code,{children:"row"})}),"\n",(0,s.jsxs)(n.p,{children:["Outputs a row with a label and value, which can be used for key-value data.\nThe label must be a string. The value can be a child component of type\n",(0,s.jsx)(n.a,{href:"#text",children:(0,s.jsx)(n.code,{children:"text"})})," or ",(0,s.jsx)(n.a,{href:"#address",children:(0,s.jsx)(n.code,{children:"address"})}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"example-9",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'import { panel, row, text, address } from "@metamask/snaps-sdk";\n\nawait snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "alert",\n    content: panel([\n      row("Address", address("0x000000000000000000000000000000000000dEaD")),\n      row("Balance", text("1.78 ETH")),\n    ]),\n  },\n});\n'})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:a(5346).A,alt:"Row UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(n.h3,{id:"spinner",children:(0,s.jsx)(n.code,{children:"spinner"})}),"\n",(0,s.jsx)(n.p,{children:"Outputs a loading indicator."}),"\n",(0,s.jsx)(n.h4,{id:"example-10",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'import { panel, heading, spinner } from "@metamask/snaps-sdk";\n\nawait snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "alert",\n    content: panel([\n      heading("Please wait..."),\n      spinner(),\n    ]),\n  },\n});\n'})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:a(31286).A,alt:"Spinner UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(n.h3,{id:"text",children:(0,s.jsx)(n.code,{children:"text"})}),"\n",(0,s.jsx)(n.p,{children:"Outputs text."}),"\n",(0,s.jsx)(n.h4,{id:"example-11",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'import type { OnHomePageHandler } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onHomePage = async () => {\n  return {\n    content: panel([\n      heading("Hello world!"),\n      text("Welcome to my Snap home page!"),\n    ]),\n  };\n};\n'})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:a(18532).A,alt:"Text UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(n.h2,{id:"markdown",children:"Markdown"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"#text",children:(0,s.jsx)(n.code,{children:"text"})})," components accept bold and italic inline Markdown."]}),"\n",(0,s.jsx)(n.h4,{id:"example-12",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'import { panel, heading, text } from "@metamask/snaps-sdk";\n\nawait snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "alert",\n    content: panel([\n      heading("Hello world!"),\n      text("This is **bold** and this is _italic_."),\n    ]),\n  },\n});\n'})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:a(82703).A,alt:"Markdown UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"#text",children:(0,s.jsx)(n.code,{children:"text"})})," components accept inline links."]}),"\n",(0,s.jsx)(n.h4,{id:"example-13",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'import type { OnHomePageHandler } from "@metamask/snaps-sdk";\nimport { panel, text } from "@metamask/snaps-sdk";\n\nmodule.exports.onHomePage = async () => {\n  return {\n    content: panel([\n      heading("Hello world!"),\n      text("Download [MetaMask](https://metamask.io)."),\n      text("Read the MetaMask docs at [](https://docs.metamask.io)."),\n    ]),\n  };\n};\n'})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:a(98745).A,alt:"Links UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(n.h2,{id:"emojis",children:"Emojis"}),"\n",(0,s.jsxs)(n.p,{children:["Text-based components (such as ",(0,s.jsx)(n.a,{href:"#heading",children:(0,s.jsx)(n.code,{children:"heading"})})," and ",(0,s.jsx)(n.a,{href:"#text",children:(0,s.jsx)(n.code,{children:"text"})}),") accept emojis."]}),"\n",(0,s.jsx)(n.h4,{id:"example-14",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="index.js"',children:'import { panel, heading, text } from "@metamask/snaps-sdk";\n\nawait snap.request({\n  method: "snap_dialog",\n  params: {\n    type: "alert",\n    content: panel([\n      heading("Hello world!"),\n      text("This is an apple \ud83c\udf4e and this is an orange \ud83c\udf4a."),\n    ]),\n  },\n});\n'})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:a(55445).A,alt:"Emojis UI example",width:"450px",style:{border:"1px solid #DCDCDC"}})}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"See the following packages for full examples of implementing custom UI:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/dialogs",children:(0,s.jsx)(n.code,{children:"@metamask/dialog-example-snap"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/transaction-insights",children:(0,s.jsx)(n.code,{children:"@metamask/transaction-insight-example-snap"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/home-page",children:(0,s.jsx)(n.code,{children:"@metamask/home-page-example-snap"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/images",children:(0,s.jsx)(n.code,{children:"@metamask/images-example-snap"})})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},83272:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/custom-ui-address-tooltip-c0b648ad133522ae5df738c778ce607c.png"},22370:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/custom-ui-address-ba820915e5b30a4fa2444c0218775d79.png"},30112:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/custom-ui-button-517c7881c2a77b20fbe9578eb50ca7a1.png"},82383:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/custom-ui-copyable-7a43ac4224f0c82ed081a124e26f4b36.png"},71265:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/custom-ui-divider-bcab9f6e1e050f4816d965cfe4f635e0.png"},55445:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/custom-ui-emojis-7c8bfebfdc0f15a054279edb40b4570e.png"},89838:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/custom-ui-form-63f67a64dca694d56647d4723ba50ad4.png"},18532:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/custom-ui-heading-39190ca0fc87ce734cecc2d1da3ff561.png"},43213:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/custom-ui-image-d5d912daf08c5a0e45291974baf662bd.png"},98745:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/custom-ui-links-8190eead9124615dd2a4388492bd8144.png"},82703:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/custom-ui-markdown-9f23c69906bf2052570b625c0a005ca7.png"},88764:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/custom-ui-panel-81c6419831b577f87f2dc974e4073777.png"},5346:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/custom-ui-row-c12f694fc1db2e08563d0a6d0b8891f9.png"},31286:(e,n,a)=>{a.d(n,{A:()=>s});const s=a.p+"assets/images/custom-ui-spinner-a8fe5ebf65de1dda20bc58e3fcf31e52.gif"},28453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>d});var s=a(96540);const t={},i=s.createContext(t);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);