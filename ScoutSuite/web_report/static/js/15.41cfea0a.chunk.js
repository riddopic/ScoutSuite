(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[15,123],{583:function(e,t,n){"use strict";n.r(t);var a=n(1),c=(n(0),n(55)),r=n(44);t.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(c.c,{label:"ID",valuePath:"id"}),Object(a.jsx)(c.c,{label:"ARN",valuePath:"arn"}),Object(a.jsx)(c.c,{label:"Description",valuePath:"description",renderValue:r.q}),Object(a.jsx)(c.c,{label:"Creation Date",valuePath:"CreateDate",renderValue:r.h}),Object(a.jsx)(c.c,{label:"Status",valuePath:"key_enabled",renderValue:r.c}),Object(a.jsx)(c.c,{label:"Origin",valuePath:"origin",renderValue:r.q}),Object(a.jsx)(c.c,{label:"Key Manager",valuePath:"key_manager",renderValue:r.q}),Object(a.jsx)(c.c,{label:"Rotation",valuePath:"rotation_enabled",renderValue:r.c})]})}},627:function(e,t,n){"use strict";n.r(t);var a=n(1),c=(n(0),n(14)),r=n.n(c),i=n(29),l=n.n(i),s=(n(44),n(55)),j=n(769),u=n(766),b=n(583),d=n(770);t.default=function(e){var t=e.data;if(!t)return null;var n=r()(t,["item","aliases"]),c=r()(t,["item","policy"]);return Object(a.jsxs)(s.a,{data:t,children:[Object(a.jsx)(u.a,{children:Object(a.jsx)(b.default,{})}),Object(a.jsxs)(j.b,{children:[Object(a.jsx)(j.a,{title:"Aliases",disabled:l()(n),children:Object(a.jsx)("ul",{children:n.map((function(e,t){return Object(a.jsx)("li",{children:e.name},t)}))})}),Object(a.jsx)(j.a,{title:"Key Policy",disabled:l()(c),children:Object(a.jsx)(d.a,{policy:c})})]})]})}},766:function(e,t,n){"use strict";var a=n(1);n(0),n(767);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},767:function(e,t,n){},768:function(e,t,n){},769:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return s.b}));var a=n(1),c=n(13),r=n(0),i=n(8),l=n.n(i),s=n(79),j=n(80),u=n(63),b=(n(768),function(e){var t=e.title,n=e.isSelected,i=e.disabled,b=e.onClick,d=e.children,o=Object(r.useState)(""),O=Object(c.a)(o,2),h=O[0],x=O[1],f=h?Object(a.jsxs)(a.Fragment,{children:[t,u.a[h].icon]}):t;return Object(a.jsx)(j.c.Provider,{value:x,children:Object(a.jsx)(s.a,{title:f,className:l()("partial-tab-pane",h),isSelected:n,disabled:i,onClick:b,children:d})})})},770:function(e,t,n){"use strict";var a=n(1),c=n(13),r=n(0),i=n(8),l=n.n(i),s=n(776),j=n.n(s),u=n(798),b=n(789),d=n(790),o=n(772),O=n.n(o),h=n(777),x=n.n(h),f=n(159),p=n.n(f),m=n(29),v=n.n(m),g=n(80),y=n(227),P=n(44),S=(n(771),function(e){var t=e.name,n=e.policy,i=e.policyPath,s=e.defaultOpen,o=Object(r.useContext)(g.a).path_to_issues.some((function(e){return e.includes(i)}));if(v()(n))return null;var h=Object(a.jsx)("h4",{className:"policy-title",children:t}),f=function(e,t){return Object(a.jsx)(y.a,{value:(n=e,JSON.stringify(n,null,2).replace(/ /gm,"&nbsp;").replace(/\n/gm,"<br/>")),errorPath:t,renderValue:function(e){return Object(P.p)(e)}});var n},m=Object(a.jsxs)("code",{children:["{",Object.entries(n).map((function(e,t){var r=Object(c.a)(e,2),s=r[0],u=r[1];return Object(a.jsxs)("div",{className:l()({inline:"string"===typeof u}),children:['"'.concat(s,'":\xa0'),"Statement"===s?Object(a.jsxs)(a.Fragment,{children:["[",Object(a.jsx)("br",{}),u.map((function(e,t){return Object(a.jsx)(j.a,{trigger:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(O.a,{fontSize:"inherit"}),Object(a.jsx)("span",{children:"{...}"})]}),triggerWhenOpen:Object(a.jsx)(x.a,{fontSize:"inherit"}),transitionTime:1,open:!0,children:f(e,"".concat(i,".Statement.").concat(t))},t)})),"]"]}):Object(a.jsx)(a.Fragment,{children:f(u)}),t<p()(n)-1&&",",Object(a.jsx)("br",{})]},t)})),"}"]});return Object(a.jsx)("div",{className:"policy",children:t?Object(a.jsxs)(u.a,{defaultExpanded:s||o,children:[Object(a.jsx)(b.a,{expandIcon:Object(a.jsx)(O.a,{}),children:h}),Object(a.jsx)(d.a,{children:m})]}):m})});S.defaultProps={defaultOpen:!1},t.a=S},771:function(e,t,n){}}]);
//# sourceMappingURL=15.41cfea0a.chunk.js.map