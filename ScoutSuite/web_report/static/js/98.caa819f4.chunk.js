(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[98],{582:function(e,t,c){"use strict";c.r(t);var n=c(1),r=(c(0),c(14)),a=c.n(r),s=c(29),l=c.n(s),i=c(44),u=c(55),j=c(47),o=(c(786),c(228));t.default=function(e){var t=e.mfaDevices,c=e.accessKeys,r=e.loginProfile;return Object(n.jsxs)("div",{className:"authentication-methods",children:[Object(n.jsx)(u.c,{label:"Password enabled",valuePath:"LoginProfile",renderValue:function(e){return Object(i.e)(!l()(e))}}),Object(n.jsx)(u.c,{label:"Multi-Factor enabled",valuePath:"MFADevices",errorPath:"mfa_enabled",renderValue:function(e){return Object(i.e)(!l()(e))}}),!l()(t)&&Object(n.jsx)("ul",{children:t.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)(j.a,{label:"Serial Number",value:e.SerialNumber})},t)}))}),Object(n.jsx)(u.c,{label:"Access Keys",valuePath:"AccessKeys",errorPath:"multiple_api_keys",renderValue:function(e){return a()(e,"length",0)}}),!l()(c)&&Object(n.jsx)("ul",{children:c.map((function(e,t){return Object(n.jsx)("li",{children:Object(n.jsx)(u.c,{errorPath:"AccessKeys.".concat(t),renderValue:function(){return Object(n.jsxs)("ul",{className:"key-infos",children:[e.AccessKeyId,Object(n.jsx)("li",{children:e.Status}),Object(n.jsx)("li",{children:"Created on ".concat(Object(i.h)(e.CreateDate))})]})}})},t)}))}),Object(n.jsxs)("div",{className:"warnings",children:[!l()(r)&&c.length>0&&Object(n.jsx)(u.c,{errorPath:"password_and_keys",renderValue:function(){return Object(n.jsx)(o.a,{message:"Review the need for password-based and key-based authentication"})}}),c.length>1&&Object(n.jsx)(u.c,{errorPath:"multiple_active_api_keys",renderValue:function(){return Object(n.jsx)(o.a,{message:"Review the need for multiple active access keys"})}})]})]})}},786:function(e,t,c){}}]);
//# sourceMappingURL=98.caa819f4.chunk.js.map