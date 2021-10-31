(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),i=(r(0),r(91)),c={sidebar_position:1},o={unversionedId:"performance/zkp-performance",id:"performance/zkp-performance",isDocsHomePage:!1,title:"Manta Zero-Knowledge Proof Performance",description:"Verifer Time",source:"@site/docs/performance/zkp-performance.md",sourceDirName:"performance",slug:"/performance/zkp-performance",permalink:"/docs/performance/zkp-performance",editUrl:"https://github.com/Manta-Network/docs/edit/main/docs/performance/zkp-performance.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1}},l=[{value:"Verifer Time",id:"verifer-time",children:[]},{value:"Prover Time",id:"prover-time",children:[]}],b={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"verifer-time"},"Verifer Time"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Circuit"),Object(i.b)("th",{parentName:"tr",align:null},"x86-64 Native Time (ms)"),Object(i.b)("th",{parentName:"tr",align:null},"WASM Time (ms)"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Transfer"),Object(i.b)("td",{parentName:"tr",align:null},"10.9"),Object(i.b)("td",{parentName:"tr",align:null},"109")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Exchange"),Object(i.b)("td",{parentName:"tr",align:null},"11"),Object(i.b)("td",{parentName:"tr",align:null},"110")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Reclaim"),Object(i.b)("td",{parentName:"tr",align:null},"8.3"),Object(i.b)("td",{parentName:"tr",align:null},"89")))),Object(i.b)("p",null,"Note: All verifier time are obtained from ",Object(i.b)("inlineCode",{parentName:"p"},"frame-benchmark"),".\nThe WASM time is substrate flavored WASM time using compiled setting. "),Object(i.b)("h2",{id:"prover-time"},"Prover Time"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Circuit"),Object(i.b)("th",{parentName:"tr",align:null},"x86-64 Native Time (sec)"),Object(i.b)("th",{parentName:"tr",align:null},"WASM Time (sec)"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"pedersen comm."),Object(i.b)("td",{parentName:"tr",align:null},"0.86"),Object(i.b)("td",{parentName:"tr",align:null},"2.61")))),Object(i.b)("p",null,"Benchmark code can be found ",Object(i.b)("a",{parentName:"p",href:"https://github.com/stechu/wasm-prover"},"here"),".\nThe WASM time is measured using Brave browser ",Object(i.b)("inlineCode",{parentName:"p"},"Version 1.25.68 Chromium: 91.0.4472.77 (Official Build) (64-bit)"),"."))}p.isMDXComponent=!0},91:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?a.a.createElement(f,o(o({ref:t},b),{},{components:r})):a.a.createElement(f,o({ref:t},b))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<i;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);