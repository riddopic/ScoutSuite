(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[25,120],{580:function(e,t,c){"use strict";c.r(t);var a=c(1),n=(c(0),c(55));t.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(n.c,{label:"Region",valuePath:"region"}),Object(a.jsx)(n.c,{label:"VPC",valuePath:"vpc"}),Object(a.jsx)(n.c,{label:"ID",valuePath:"id"}),Object(a.jsx)(n.c,{label:"Availability Zone",valuePath:"Ec2InstanceAttributes.Ec2AvailabilityZone"}),Object(a.jsx)(n.c,{label:"Status",valuePath:"Status.State"}),Object(a.jsx)(n.c,{label:"Instance Profile",valuePath:"Ec2InstanceAttributes.IamInstanceProfile"}),Object(a.jsx)(n.c,{label:"Visibile to all users",valuePath:"VisibleToAllUsers"})]})}},621:function(e,t,c){"use strict";c.r(t);var a=c(1),n=(c(0),c(14)),r=c.n(n),i=c(29),s=c.n(i),l=c(44),u=c(20),b=c(21),o=c(780),j=c(55),d=c(769),v=c(64),f=c(766),O=c(580);t.default=function(e){var t=e.data,c=r()(t,["item","path"],""),n=Object(o.a)(c),i=Object(o.b)(c),h=Object(u.a)(Object(b.i)("services.ec2.regions.".concat(n,".vpcs.").concat(i))),m=h.data,p=h.loading;if(!t||p)return null;s()(m)||(t.item.vpc="".concat(m.name," (").concat(i,")"),t.item.region=n);var x=r()(t,["item","Ec2InstanceAttributes"]),S=function(e,t){return Object(a.jsx)(v.a,{service:"ec2",resource:"security_groups",id:e,name:t})};return Object(a.jsxs)(j.a,{data:t,children:[Object(a.jsx)(f.a,{children:Object(a.jsx)(O.default,{})}),Object(a.jsxs)(d.b,{children:[Object(a.jsx)(d.a,{title:"Master",children:Object(a.jsxs)("div",{children:[Object(a.jsx)(j.c,{label:"Public DNS",valuePath:"MasterPublicDnsName",renderValue:l.q}),Object(a.jsx)(j.c,{label:"Security Group",value:r()(m,["security_groups",x.EmrManagedMasterSecurityGroup,"name"]),renderValue:function(e){return S(x.EmrManagedMasterSecurityGroup,e)}})]})}),Object(a.jsx)(d.a,{title:"Slave",disabled:s()(x.EmrManagedSlaveSecurityGroup),children:Object(a.jsx)(j.c,{label:"Security Group",value:r()(m,["security_groups",x.EmrManagedSlaveSecurityGroup,"name"]),renderValue:function(e){return S(x.EmrManagedSlaveSecurityGroup,e)}})})]})]})}},766:function(e,t,c){"use strict";var a=c(1);c(0),c(767);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},767:function(e,t,c){},768:function(e,t,c){},769:function(e,t,c){"use strict";c.d(t,"a",(function(){return o})),c.d(t,"b",(function(){return l.b}));var a=c(1),n=c(13),r=c(0),i=c(8),s=c.n(i),l=c(79),u=c(80),b=c(63),o=(c(768),function(e){var t=e.title,c=e.isSelected,i=e.disabled,o=e.onClick,j=e.children,d=Object(r.useState)(""),v=Object(n.a)(d,2),f=v[0],O=v[1],h=f?Object(a.jsxs)(a.Fragment,{children:[t,b.a[f].icon]}):t;return Object(a.jsx)(u.c.Provider,{value:O,children:Object(a.jsx)(l.a,{title:h,className:s()("partial-tab-pane",f),isSelected:c,disabled:i,onClick:o,children:j})})})},780:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c.d(t,"b",(function(){return i}));var a=c(14),n=c.n(a),r=function(e){return n()(e.match(/regions\.([^.]*)/),1)},i=function(e){return n()(e.match(/vpcs\.([^.]*)/),1)}}}]);
//# sourceMappingURL=25.64e8fc7c.chunk.js.map