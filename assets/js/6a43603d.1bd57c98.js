"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[506],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8396:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],p={},l="\ud83d\udc2c DolphinPay",s={unversionedId:"dolphin/DolphinPay",id:"dolphin/DolphinPay",isDocsHomePage:!1,title:"\ud83d\udc2c DolphinPay",description:"DolphinPay enables BYOT (Bring your own token) private payment for Polkadot ecosystem assets. Below is the overview of DolphinPay:",source:"@site/docs/dolphin/DolphinPay.md",sourceDirName:"dolphin",slug:"/dolphin/DolphinPay",permalink:"/docs/dolphin/DolphinPay",editUrl:"https://github.com/Manta-Network/docs/edit/main/docs/dolphin/DolphinPay.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\ud83d\udcdd Overview",permalink:"/docs/dolphin/Overview"},next:{title:"\ud83e\udd3f Private Payment",permalink:"/docs/dolphin/PrivatePayment"}},m=[{value:"Try Dolphin (version Boto)",id:"try-dolphin-version-boto",children:[],level:2},{value:"FAQ",id:"faq",children:[],level:2}],d={toc:m};function c(e){var t=e.components,p=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-dolphinpay"},"\ud83d\udc2c DolphinPay"),(0,i.kt)("p",null,"DolphinPay enables BYOT (Bring your own token) private payment for Polkadot ecosystem assets. Below is the overview of DolphinPay:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"overview",src:n(4559).Z})),(0,i.kt)("h2",{id:"try-dolphin-version-boto"},"Try Dolphin (version Boto)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download ",(0,i.kt)("em",{parentName:"p"},"Signer"),", an native app to turbo-charge zero-knowledge proof generation."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/Manta-Network/manta-signer/releases/download/0.4.1/Manta.Signer_0.4.1_x64-macOS.dmg"},"macOS"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ubuntu/Debian: in testing phase, to be released")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Windows: in testing phase, to be released"),(0,i.kt)("p",{parentName:"li"},"For macOS, you might need to go to ",(0,i.kt)("inlineCode",{parentName:"p"},"System Preferences -> Security & Privacy -> General")," to run the ",(0,i.kt)("em",{parentName:"p"},"Signer")," (we are working to get the app approved by Apple, but it takes time)."))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"signer-security",src:n(2005).Z})),(0,i.kt)("p",{parentName:"li"},"When you first open ",(0,i.kt)("em",{parentName:"p"},"Signer"),", it will ask you to create a password and to memorize a 12-word mnemonic.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Get Testnet Tokens:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Join ",(0,i.kt)("a",{parentName:"li",href:"https://t.co/5BacMMLSCW"},"Manta&Calamari's Discord")),(0,i.kt)("li",{parentName:"ul"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"#dolphin-faucet")," channel"),(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"/gimme")," and you will see a faucet options prompt:")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"faucet",src:n(3997).Z})),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You should first claim ",(0,i.kt)("inlineCode",{parentName:"li"},"DOL"),", since you need ",(0,i.kt)("inlineCode",{parentName:"li"},"DOL")," to pay gas fees. Then, you can claim your favorite testnet tokens like ",(0,i.kt)("inlineCode",{parentName:"li"},"BTC"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ETH"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"DOT"),", etc."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("a",{parentName:"p",href:"https://app.dolphin.manta.network/"},"Dolphin App"),", try these hot baked Dolphin (version Boto) features:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Convert public tokens to private:")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"to-private",src:n(7462).Z})),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can see your private token balance by switching to ",(0,i.kt)("inlineCode",{parentName:"li"},"private")," option:")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"private-transfer",src:n(3314).Z})),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Send private tokens: private tokens are attached to a ",(0,i.kt)("inlineCode",{parentName:"p"},"One-Time Shielded Address"),", which means before sending tokens to your friend, you need to get their one time shielded address through some secure communication channel, such as Signal or Telegram.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"To receive private tokens, get your own ",(0,i.kt)("inlineCode",{parentName:"p"},"One-Time Shielded Address")," by going to ",(0,i.kt)("inlineCode",{parentName:"p"},"private -> receive -> new address"),":"))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"shielded-address",src:n(4370).Z})),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Convert private tokens to public tokens:")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"to-public",src:n(1452).Z})))),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Why do I need a ",(0,i.kt)("em",{parentName:"p"},"Signer"),"? Can I trust it?"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},(0,i.kt)("em",{parentName:"em"},"Signer")," serves two purposes: first is to protect your spending secrets, and second is to use native code to build zero-knowledge proofs. The ",(0,i.kt)("em",{parentName:"em"},"Signer")," runs locally and will never share your secrets. The ",(0,i.kt)("em",{parentName:"em"},"Signer")," is ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/Manta-Network/manta-signer"},"fully open source software")," and will be audited for security."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Is the private token in ",(0,i.kt)("em",{parentName:"p"},"Signer")," secure?"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"All the secrets used to spend private tokens is stored locally in your computer and encrypted using ",(0,i.kt)("a",{parentName:"em",href:"https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"},"AES"),". ",(0,i.kt)("em",{parentName:"em"},"Signer")," will never send your secrets online."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"What is a one time shielded address? How is the shielded address different from my generic Polkadot/Manta address?"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Dolphin (Boto) uses a one-time shielded address. This is a one-time address for your private tokens. For privacy and security, the address is longer than a typical generic Polkadot/Manta address. In the next version of the testnet, we will switch to reusable shielded addresses."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"How can I recover private tokens if I forgot my ",(0,i.kt)("em",{parentName:"p"},"Signer")," password?"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"We will add recover feature to the ",(0,i.kt)("em",{parentName:"em"},"Signer")," soon."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"How does private payment work?"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"/docs/dolphin/PrivatePayment"},"Find out more."))))))}c.isMDXComponent=!0},4559:function(e,t,n){t.Z=n.p+"assets/images/DolphinPay-8fcdb4143497fced68ad0500987787cb.svg"},2005:function(e,t,n){t.Z=n.p+"assets/images/allow-signer-df67cb71fc1760138be238d668990b27.png"},3997:function(e,t,n){t.Z=n.p+"assets/images/faucet-e6f5f328e6fb2bee004fc621362d08db.png"},3314:function(e,t,n){t.Z=n.p+"assets/images/private-transfer-365701f29dcd4cd665c0e827bf8b8f46.png"},4370:function(e,t,n){t.Z=n.p+"assets/images/shielded-address-dea1f5c7d0b6c609afdd330dd8627034.png"},7462:function(e,t,n){t.Z=n.p+"assets/images/to-private-3af1875520becf30e93e43e22630afaf.png"},1452:function(e,t,n){t.Z=n.p+"assets/images/to-public-6c183f206c9d608c7f7a2793cbd5231e.png"}}]);