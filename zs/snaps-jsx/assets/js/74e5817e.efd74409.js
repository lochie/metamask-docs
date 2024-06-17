"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[53],{10939:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=t(74848),s=t(28453),a=t(40267),o=t(19365);const i={description:"Schedule periodic actions for your users.",sidebar_position:1},c="Cron jobs",l={id:"features/cron-jobs",title:"Cron jobs",description:"Schedule periodic actions for your users.",source:"@site/snaps/features/cron-jobs.md",sourceDirName:"features",slug:"/features/cron-jobs",permalink:"/zs/snaps-jsx/snaps/features/cron-jobs",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/cron-jobs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Schedule periodic actions for your users.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Features",permalink:"/zs/snaps-jsx/snaps/features"},next:{title:"Custom EVM accounts",permalink:"/zs/snaps-jsx/snaps/features/custom-evm-accounts/"}},u={},d=[{value:"Steps",id:"steps",level:2},{value:"1. Configure a cron job",id:"1-configure-a-cron-job",level:3},{value:"2. Implement a cron job handler",id:"2-implement-a-cron-job-handler",level:3},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"cron-jobs",children:"Cron jobs"}),"\n",(0,r.jsx)(n.p,{children:'You can schedule actions to run periodically at fixed times or intervals, also known as "cron jobs."\nFor example, you can display a dialog or notification in MetaMask at a specific time each day.'}),"\n",(0,r.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,r.jsx)(n.h3,{id:"1-configure-a-cron-job",children:"1. Configure a cron job"}),"\n",(0,r.jsxs)(n.p,{children:["To configure a cron job, request the ",(0,r.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/permissions#endowmentcronjob",children:(0,r.jsx)(n.code,{children:"endowment:cronjob"})}),"\npermission, specifying one or more cron jobs in the ",(0,r.jsx)(n.code,{children:"jobs"})," array.\nDefine each job with a ",(0,r.jsx)(n.a,{href:"https://docs.oracle.com/cd/E12058_01/doc/doc.1014/e12030/cron_expressions.htm",children:"cron expression"}),"\nand a request object, which MetaMask sends to the Snap's cron job handler when the job is executed."]}),"\n",(0,r.jsx)(n.p,{children:"For example, to configure a job that executes every minute, add the following to your Snap's manifest file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialPermissions": {\n  "endowment:cronjob": {\n    "jobs": [\n      {\n        "expression": "* * * * *",\n        "request": {\n          "method": "execute"\n        }\n      }\n    ]\n  }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"2-implement-a-cron-job-handler",children:"2. Implement a cron job handler"}),"\n",(0,r.jsxs)(n.p,{children:["Expose an ",(0,r.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/entry-points#oncronjob",children:(0,r.jsx)(n.code,{children:"onCronjob"})})," entry point, which is triggered at\nthe specified schedule with the requests defined in the ",(0,r.jsx)(n.code,{children:"endowment:cronjob"})," permission.\nThe following example handles the ",(0,r.jsx)(n.code,{children:"execute"})," method specified in the previous example:"]}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsx)(o.A,{value:"JSX",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="index.tsx"',children:'import type { OnCronjobHandler } from "@metamask/snaps-sdk";\nimport { Box, Heading, Text } from \'@metamask/snaps-sdk/jsx\';\n\nexport const onCronjob: OnCronjobHandler = async ({ request }) => {\n  switch (request.method) {\n    case "execute":\n      // Cron jobs can execute any method that is available to the Snap.\n      return snap.request({\n        method: "snap_dialog",\n        params: {\n          type: "alert",\n          content: (\n            <Box>\n              <Heading>Cron job</Heading>\n              <Text>This dialog was triggered by a cron job.</Text>\n            </Box>\n          ),\n        },\n      });\n\n    default:\n      throw new Error("Method not found.");\n  }\n};\n'})})}),(0,r.jsx)(o.A,{value:"Functions",deprecated:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",metastring:'title="index.ts"',children:'import type { OnCronjobHandler } from "@metamask/snaps-sdk";\nimport { panel, heading, text } from "@metamask/snaps-sdk";\n\nexport const onCronjob: OnCronjobHandler = async ({ request }) => {\n  switch (request.method) {\n    case "execute":\n      // Cron jobs can execute any method that is available to the Snap.\n      return snap.request({\n        method: "snap_dialog",\n        params: {\n          type: "alert",\n          content: panel([\n            heading("Cron job"),\n            text("This dialog was triggered by a cron job."),\n          ]),\n        },\n      });\n\n    default:\n      throw new Error("Method not found.");\n  }\n};\n'})})})]}),"\n",(0,r.jsxs)(n.admonition,{title:"Access data from cron jobs",type:"tip",children:[(0,r.jsxs)(n.p,{children:["When accessing ",(0,r.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/features/data-storage#2-use-encrypted-storage",children:"encrypted data"})," from cron jobs, MetaMask\nrequires the user to enter their password if the wallet is locked.\nThis interaction can be confusing to the user, since the Snap accesses the data in the background\nwithout the user being aware."]}),(0,r.jsxs)(n.p,{children:["If the cron job requires access to encrypted state, use\n",(0,r.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/reference/snaps-api#snap_getclientstatus",children:(0,r.jsx)(n.code,{children:"snap_getClientStatus"})})," to ensure that MetaMask is\nunlocked before accessing state.\nThis will prevent an unexpected password request, improving the user's experience."]}),(0,r.jsxs)(n.p,{children:["If the cron job does not require access to sensitive data, store that data in\n",(0,r.jsx)(n.a,{href:"/zs/snaps-jsx/snaps/features/data-storage#3-use-unencrypted-storage",children:"unencrypted state"}),"."]})]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["See the ",(0,r.jsx)(n.a,{href:"https://github.com/MetaMask/snaps/tree/main/packages/examples/packages/cronjobs",children:(0,r.jsx)(n.code,{children:"@metamask/cronjob-example-snap"})}),"\npackage for a full example of implementing cron jobs."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(18215);const s={tabItem:"tabItem_Ymn6"};var a=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t,children:n})}},40267:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),s=t(20053),a=t(23104),o=t(56347),i=t(205),c=t(57485),l=t(31682),u=t(89466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=p(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,d]=m({queryString:t,groupId:s}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),j=(()=>{const e=l??f;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=t(92303);const j={tabList:"tabList_TRJ7",tabItem:"tabItem_hGfb",flaskOnly:"flaskOnly_bhbK",deprecated:"deprecated_lQ7v"};var x=t(74848),g=t(96763);function v(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;g.log(i);const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),s=i[t].value;s!==r&&(l(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=f(e),t={...n,tabValues:n.tabValues.map(((n,t)=>({...n,attributes:{...n.attributes,className:(0,s.A)(n.attributes?.className,{[j.flaskOnly]:e.children[t]?.props.flaskOnly,[j.deprecated]:e.children[t]?.props.deprecated})}})))};return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",j.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(y,{...t,...e})]})}function k(e){const n=(0,b.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(n))}},20053:(e,n,t)=>{function r(e){var n,t,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(s&&(s+=" "),s+=t);else for(n in e)e[n]&&(s&&(s+=" "),s+=n);return s}t.d(n,{A:()=>s});const s=function(){for(var e,n,t=0,s="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(s&&(s+=" "),s+=n);return s}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(96540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);