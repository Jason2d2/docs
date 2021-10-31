(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(91)),i={sidebar_position:3,title:"Governance Deep Dive"},l={unversionedId:"calamari/GovernanceDeepdive",id:"calamari/GovernanceDeepdive",isDocsHomePage:!1,title:"Governance Deep Dive",description:"This doc is a more technical dive into how governance of Calamari operates.",source:"@site/docs/calamari/GovernanceDeepdive.md",sourceDirName:"calamari",slug:"/calamari/GovernanceDeepdive",permalink:"/docs/calamari/GovernanceDeepdive",editUrl:"https://github.com/Manta-Network/docs/edit/main/docs/calamari/GovernanceDeepdive.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Governance Deep Dive"}},s=[{value:"Concepts to know",id:"concepts-to-know",children:[]},{value:"System Actors",id:"system-actors",children:[]},{value:"Launch Phase",id:"launch-phase",children:[{value:"1. Public token holder proposals",id:"1-public-token-holder-proposals",children:[]},{value:"2. Council motions",id:"2-council-motions",children:[]}]},{value:"Voting Phase",id:"voting-phase",children:[]},{value:"Enactment Phase",id:"enactment-phase",children:[]},{value:"The Treasury",id:"the-treasury",children:[]},{value:"API Reference",id:"api-reference",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This doc is a more technical dive into how governance of Calamari operates.\nCalamari is build on Polkadot and Substrate, the governance system is\ndirectly inspired by what Polkadot uses. The main difference is that\nour Council manages its own membership."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Note: not everything documented here is released yet. Check our\n",Object(o.b)("a",{parentName:"em",href:"https://emphasized-seed-161.notion.site/3b1b61e0aee8484396d674f4653e0813?v=451a4ad2105d4f9cb35fb74680359c1d"},"roadmap"),"\nfor the up to date status of features.")),Object(o.b)("h2",{id:"concepts-to-know"},"Concepts to know"),Object(o.b)("p",null,"If you're reading this doc we're assuming you know what an\n",Object(o.b)("a",{parentName:"p",href:"https://docs.substrate.io/v3/concepts/extrinsics/"},"extrinsics")," is, and that\nyou're generally familiar with\n",Object(o.b)("a",{parentName:"p",href:"https://docs.substrate.io/v3/concepts/runtime/"},"how Substrate runtimes work"),"."),Object(o.b)("h2",{id:"system-actors"},"System Actors"),Object(o.b)("p",null,"There are three kinds of actors that can participate in the governance\nof Calamari: public token holders, the Council, and the Technical Committee.\nThey all have different permissions on what extrinsics they can submit\nto the chain."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Public token holders")," are anyone who owns a Calamari token. They can use\ntheir stake to second proposals that are trying to become referendums, and\nvote on referendums proportional to the amount of stake they have."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The Council")," represents passive token holders and exists because democratic\nsystems usually have issues with low voter turnout. There are three council\nmembers, and their responsibility is to submit common sense proposals for the\nregular development and maintenance of the system. In our case the Council is\nalso responsible for bootstrapping the Manta Network and is thus made up of\nmembers of the Manta Core Development Team. The Council manages the membership\nof the Technical Committee."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The Technical Committee"),": is responsible for handling emergencies. They\nhave the ability to fast track all three periods, and how much the periods\nare shortened depends on how many committee members believe the action is necessary.\nUnanimous agreement is required for instantaneous changes. There are three\ntechnical committee members, and they are also part of the Manta Core\nDevelopment Team."),Object(o.b)("h2",{id:"launch-phase"},"Launch Phase"),Object(o.b)("p",null,"The process of submitting a proposal starts out by getting the preimage hash\nof the proposal, in order to verify that it doesn't change at any point during\nthe process. "),Object(o.b)("p",null,"There are two ways to submit a proposal, and the launch periods alternate\nbetween the two methods."),Object(o.b)("h3",{id:"1-public-token-holder-proposals"},"1. Public token holder proposals"),Object(o.b)("p",null,"Public token holders can submit a preimage hash using the\n",Object(o.b)("inlineCode",{parentName:"p"},"democracy.externalProposeDefault()")," extrinsic. These proposals all go\ninto the ",Object(o.b)("inlineCode",{parentName:"p"},"public proposal queue"),". Then stakeholders can second proposals,\nand the proposal with the most stake backing it at the end of the period\nis promoted to a referendum."),Object(o.b)("h3",{id:"2-council-motions"},"2. Council motions"),Object(o.b)("p",null,'The council can create "council motions" also called "external proposals".\nThey can submit the preimage hash using three methods,'),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"democracy.externalPropose()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"democracy.externalProposeMajority()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"democracy.externalProposeDefault()"),",  ")),Object(o.b)("p",null,"which have differences in voting thresholds that we'll cover in the Voting Phase\nsection below. The council votes on the proposal internally, with one vote per\ncouncil member, and if it passes the proposal moves to the ",Object(o.b)("inlineCode",{parentName:"p"},"external propose queue"),"\nwhere it waits to the end of the period and automatically is promoted to a referendum."),Object(o.b)("p",null,"We only promote one proposal at a time to avoid the situation where two opposing\nproposals pass simultaneously. "),Object(o.b)("p",null,"During this period the Technical Committee has the ability to cancel any proposal\nand fast track proposals made using the ",Object(o.b)("inlineCode",{parentName:"p"},"democracy.externalPropose()")," or\n",Object(o.b)("inlineCode",{parentName:"p"},"democracy.externalProposeDefault()")," extrinsics."),Object(o.b)("h2",{id:"voting-phase"},"Voting Phase"),Object(o.b)("p",null,"At the start of the Voting Period a referendum has been tabled either from the\nexternal proposal queue or the public proposal queue. Now token holders have\nthe opportunity to vote on the referendum with an ",Object(o.b)("inlineCode",{parentName:"p"},"aye")," to pass or ",Object(o.b)("inlineCode",{parentName:"p"},"nay")," to\nreject."),Object(o.b)("p",null,"The percent of ayes needed for a referendum to pass depends on the extrinsic\nused to submit the proposal, and varies based on voter turnout using a method\ncalled ",Object(o.b)("strong",{parentName:"p"},"Adaptive Quorum Biasing"),". The idea is to anticipate that in practice\nvoter turnout is not 100%, and that different proposals will have varying\nlevels of contentiousness and trustworthiness."),Object(o.b)("p",null,"If a ",Object(o.b)("strong",{parentName:"p"},"positive turnout bias")," is applied, then a super-majority threshold is\nrequired to ",Object(o.b)("em",{parentName:"p"},"pass")," at low levels of turnout, and the threshold decreases as\nturnout increases. On the other hand applying a ",Object(o.b)("strong",{parentName:"p"},"negative turnout bias")," means\nthat a super majority is needed to ",Object(o.b)("em",{parentName:"p"},"reject")," at low levels of turnout, and the\nthreshold increases as turnout increases. In all cases these biasings work out\nso that if 51% of the total stake votes in one direction (a simple majority),\nthen that choice is executed."),Object(o.b)("p",null,"Now let's look at the different biases that are applied to the different extrinsics:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Extrinsic"),Object(o.b)("th",{parentName:"tr",align:null},"Vote Bias"),Object(o.b)("th",{parentName:"tr",align:null},"Low turnout behavior"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"externalPropose")),Object(o.b)("td",{parentName:"tr",align:null},"no bias"),Object(o.b)("td",{parentName:"tr",align:null},"always simple 50% +1")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},"public proposal"),Object(o.b)("td",{parentName:"tr",align:null},"positive turnout bias"),Object(o.b)("td",{parentName:"tr",align:null},"threshold to pass starts high")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"externalProposeMajority")),Object(o.b)("td",{parentName:"tr",align:null},"positive turnout bias"),Object(o.b)("td",{parentName:"tr",align:null},"threshold to pass starts high")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"externalProposeDefault")),Object(o.b)("td",{parentName:"tr",align:null},"negative turnout bias"),Object(o.b)("td",{parentName:"tr",align:null},"threshold to pass starts low")))),Object(o.b)("p",null,"Let's consider an example of an external proposal generated by ",Object(o.b)("inlineCode",{parentName:"p"},"democracy.externalProposeDefault()"),".\nConsulting the table above we see that this extrinsic has a negative turnout bias applied.\nIn other words, the threshold for passing starts low and increases as turnout increases.\nFor example at 25% turnout it needs 34% ayes to pass, at 75% turnout it needs 46% ayes to pass.\nAs turnout increases it becomes harder to pass approaching simple-majority of 50% + 1 of the turnout."),Object(o.b)("p",null,"During the Voting Period the Technical Committee can fast-track external proposals created using\nthe ",Object(o.b)("inlineCode",{parentName:"p"},"democracy.externalPropose()")," or ",Object(o.b)("inlineCode",{parentName:"p"},"democracy.externalProposeDefault()")," extrinsics.\nThe Council also has the ability to cancel a referendum."),Object(o.b)("h2",{id:"enactment-phase"},"Enactment Phase"),Object(o.b)("p",null,"Once a referendum passes the chain automatically implements the referendum code\nusing the ",Object(o.b)("inlineCode",{parentName:"p"},"pallet_scheduler"),". There's a delay before the implementation starts so that\nstake holders can prepare for the change."),Object(o.b)("p",null,"As with the previous periods, the Technical Committee can fast-track the delay on\nexternal proposals created using the ",Object(o.b)("inlineCode",{parentName:"p"},"democracy.externalPropose()")," or\n",Object(o.b)("inlineCode",{parentName:"p"},"democracy.externalProposeDefault()"),"."),Object(o.b)("h2",{id:"the-treasury"},"The Treasury"),Object(o.b)("p",null,"The Treasury is a reserve of tokens that is controlled by the Council and\nused to fund community projects. The goal of the is to have a source of funds\nthat can incentivize projects in the network. Anyone can submit a treasury\nspend proposal with a 1% deposit of the total spend amount, and the proposal\nwill be approved or denied by the council. "),Object(o.b)("p",null,"The funds in the treasury are collected through:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Transaction fees")," - 100% of on-chain transaction fees are transferred to the Treasury."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Treasury slashing"),' - when a treasury spend proposal doesn\'t pass, the\ndeposit amount (1% of the total proposed amount) is "slashed", which means\nthat it is transferred to the Treasury. '),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Democracy slashing")," - when any democracy proposal is canceled the\npreimage deposit fee is transferred to the Treasury instead of being returned.")),Object(o.b)("h2",{id:"api-reference"},"API Reference"),Object(o.b)("p",null,"The naming of functions here follows the Substrate invocation method, ",Object(o.b)("inlineCode",{parentName:"p"},"[pallet].[extrinsic]"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"Extrinsic"),Object(o.b)("th",{parentName:"tr",align:null},"Who can invoke"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"democracy.propose(preImageHash)")),Object(o.b)("td",{parentName:"tr",align:null},"Public Token Holders")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"democracy.externalPropose(preImageHash)")),Object(o.b)("td",{parentName:"tr",align:null},"Council")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"democracy.externalProposeDefault(preImageHash)")),Object(o.b)("td",{parentName:"tr",align:null},"Council")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"democracy.externalProposeMajority(preImageHash)")),Object(o.b)("td",{parentName:"tr",align:null},"Council")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"democracy.emergencyCancel(index)")),Object(o.b)("td",{parentName:"tr",align:null},"Technical Committee")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"democracy.fastTrack(proposalHash)")),Object(o.b)("td",{parentName:"tr",align:null},"Technical Committee")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"democracy.vetoExternal(proposalHash)")),Object(o.b)("td",{parentName:"tr",align:null},"Technical Committee")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"democracy.cancelProposal(index)")),Object(o.b)("td",{parentName:"tr",align:null},"Technical Committee")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"treasury.approveSpend(index)")),Object(o.b)("td",{parentName:"tr",align:null},"Council")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"treasury.rejectSpend(index)")),Object(o.b)("td",{parentName:"tr",align:null},"Council")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"treasury.proposeSpend()")),Object(o.b)("td",{parentName:"tr",align:null},"Treasury")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"councilMembership.add()")),Object(o.b)("td",{parentName:"tr",align:null},"Council")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"councilMembership.remove()")),Object(o.b)("td",{parentName:"tr",align:null},"Council")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"councilMembership.swap()")),Object(o.b)("td",{parentName:"tr",align:null},"Council")))))}p.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);