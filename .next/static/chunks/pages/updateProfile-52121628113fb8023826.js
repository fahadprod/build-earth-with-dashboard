(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[517],{81875:function(e){e.exports={API_SERVER:"http://localhost:3000"}},92357:function(e,r,t){"use strict";var n=t(85893),s=t(67294),a=t(57254),i=t(85296),o=t(97183),l=t(42696),c=t(98453),d=t(41664),u=t(90244);r.Z=function(){i.Z.SubMenu,o.Z.Header,o.Z.Content,o.Z.Sider;var e=(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(i.Z.Item,{children:(0,n.jsx)(d.default,{href:"/find-properties",as:"/find-properties",children:(0,n.jsx)("a",{rel:"noopener noreferrer",children:"Find Property"})})}),(0,n.jsx)(i.Z.Item,{danger:!0,children:(0,n.jsx)("a",{onClick:u.kS,children:"Logout"})})]});return(0,n.jsx)(s.Fragment,{children:(0,n.jsx)(l.Z,{overlay:e,children:(0,n.jsx)("a",{style:{float:"right"},className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()},children:(0,n.jsx)(c.C,{style:{float:"right",height:"50px",width:"50px"},src:"../img/avatar2.png",children:(0,n.jsx)(a.Z,{})})})})})}},38130:function(e,r,t){"use strict";var n=t(85893),s=(t(67294),t(85296)),a=t(97183),i=t(59271),o=t(89366),l=t(41664),c=s.Z.SubMenu,d=a.Z.Sider;r.Z=function(){return(0,n.jsx)(d,{width:200,className:"site-layout-background",children:(0,n.jsxs)(s.Z,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},children:[(0,n.jsxs)(c,{icon:(0,n.jsx)(i.Z,{}),title:"Property",children:[(0,n.jsx)(s.Z.Item,{children:(0,n.jsx)(l.default,{href:"/dashboard",as:"/dashboard",children:"All Property"})},"1"),(0,n.jsx)(s.Z.Item,{children:(0,n.jsx)(l.default,{href:"/addProperty",as:"/addProperty",children:"Add New Property"})},"2")]},"sub1"),(0,n.jsx)(c,{icon:(0,n.jsx)(o.Z,{}),title:"Profile",children:(0,n.jsx)(s.Z.Item,{children:(0,n.jsx)(l.default,{href:"/updateProfile",as:"/updateProfile",children:"Edit Profile"})},"6")},"sub2")]})})}},90244:function(e,r,t){"use strict";t.d(r,{YR:function(){return o},$D:function(){return l},kS:function(){return c}});var n=t(36808),s=t.n(n),a=t(11163),i=function(e){return s().get(e)},o=function(e,r){var t,n;t="token",n=e.data.token,s().set(t,n,{expires:1}),function(e,r){localStorage.setItem(e,JSON.stringify(r))}("user",e.data.user),r()},l=function(){if(i("token"))return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))},c=function(){var e;e="token",s().remove(e),function(e){localStorage.removeItem(e)}("user"),a.default.push("/find-properties")}},16739:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return w}});var n=t(85893),s=t(67294),a=t(97183),i=t(11700),o=t(96156),l=t(87757),c=t.n(l),d=t(92137),u=t(9669),p=t.n(u),h=t(90244),m=t(11163),f=t(38130),x=t(11382);function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?j(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var g=t(81875),N=(a.Z.Header,a.Z.Content),b=function(){var e=(0,s.useState)({firstName:"",lastName:"",address:"",cellPhone:"",cnicNumber:"",city:"",country:""}),r=e[0],t=e[1],i=(0,s.useState)(!1),l=i[0],u=i[1];(0,s.useEffect)((0,d.Z)(c().mark((function e(){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,h.$D)()&&(0,h.$D)()._id,e.prev=1,e.next=4,p().get("".concat(g.API_SERVER,"/api/profile/getUser/").concat(r));case 4:n=e.sent,console.log(n),t({firstName:n.data.firstName,lastName:n.data.lastName,address:n.data.address,cellPhone:n.data.cellPhone,cnicNumber:n.data.cnicNumber,city:n.data.city,country:n.data.country}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),[]);var j=r.firstName,b=r.lastName,v=r.address,P=r.cellPhone,Z=r.cnicNumber,w=r.city,C=r.country,S=function(e){return function(n){var s="imageUpload"===e?n.target.files[0]:n.target.value;t(y(y({},r),{},(0,o.Z)({},e,s)))}},O=function(){var e=(0,d.Z)(c().mark((function e(n){var s,a,i;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),u({loading:!0}),s=(0,h.$D)()&&(0,h.$D)()._id,a={firstName:j,lastName:b,address:v,cellPhone:P,cnicNumber:Z,city:w,country:C},t(y({},r)),console.log(a),e.prev=6,e.next=9,p().put("".concat(g.API_SERVER,"/api/profile/updateUser/").concat(s),a,{headers:{"Content-Type":"application/json"}});case 9:i=e.sent,console.log(i),200===i.status&&(u({loading:!1}),m.default.push("/dashboard"),t(y(y({},r),{},{firstName:"",lastName:"",address:"",cellPhone:"",cnicNumber:"",city:"",country:""}))),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0),t(y({},r));case 18:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(r){return e.apply(this,arguments)}}();return(0,n.jsxs)(a.Z,{children:[(0,n.jsx)(f.Z,{}),(0,n.jsx)(a.Z,{style:{padding:"0 24px 24px"},children:(0,n.jsxs)(N,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280},children:[(0,n.jsx)("h2",{children:"Edit Profile"}),(0,n.jsxs)("form",{onSubmit:O,encType:"multipart/form-data",children:[(0,n.jsxs)("div",{className:"form-row",children:[(0,n.jsxs)("div",{className:"form-group col-md-6",children:[(0,n.jsx)("label",{htmlFor:"inputEmail4",children:"First Name"}),(0,n.jsx)("input",{type:"text",value:j,onChange:S("firstName"),className:"form-control",id:"inputAddress2",placeholder:"First Name",required:!0})]}),(0,n.jsxs)("div",{className:"form-group col-md-6",children:[(0,n.jsx)("label",{htmlFor:"inputPassword4",children:"Last Name"}),(0,n.jsx)("input",{type:"text",value:b,onChange:S("lastName"),className:"form-control",id:"inputAddress2",placeholder:"Last Name",required:!0})]})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"inputAddress",children:"Address"}),(0,n.jsx)("input",{type:"text",value:v,onChange:S("address"),className:"form-control",id:"inputAddress2",placeholder:"Enter Your Address",required:!0})]}),(0,n.jsxs)("div",{className:"form-row",children:[(0,n.jsxs)("div",{className:"form-group col-md-6",children:[(0,n.jsx)("label",{htmlFor:"inputEmail4",children:"Cell Phone"}),(0,n.jsx)("input",{type:"number",value:P,onChange:S("cellPhone"),className:"form-control",id:"inputAddress2",placeholder:"Cell Phone",min:"0",required:!0})]}),(0,n.jsxs)("div",{className:"form-group col-md-6",children:[(0,n.jsx)("label",{htmlFor:"inputPassword4",children:"CNIC Number"}),(0,n.jsx)("input",{type:"number",value:Z,onChange:S("cnicNumber"),className:"form-control",id:"inputAddress2",placeholder:"CNIC Number",min:"0",required:!0})]})]}),(0,n.jsxs)("div",{className:"form-row",children:[(0,n.jsxs)("div",{className:"form-group col-md-6",children:[(0,n.jsx)("label",{htmlFor:"inputEmail4",children:"City"}),(0,n.jsx)("input",{type:"text",value:w,onChange:S("city"),className:"form-control",id:"inputAddress2",placeholder:"City",required:!0})]}),(0,n.jsxs)("div",{className:"form-group col-md-6",children:[(0,n.jsx)("label",{htmlFor:"inputPassword4",children:"Country"}),(0,n.jsx)("input",{type:"text",value:C,onChange:S("country"),className:"form-control",id:"inputAddress2",placeholder:"Country",required:!0})]})]}),(0,n.jsxs)("button",{type:"submit",className:"btn btn-primary",children:["Update ",l?(0,n.jsx)(x.Z,{}):""]})]})]})})]})},v=t(92357),P=a.Z.Header,Z=a.Z.Footer,w=(a.Z.Sider,a.Z.Content,function(){return(0,n.jsxs)("div",{className:"admin-main",children:[(0,n.jsxs)(P,{style:{padding:10},children:[(0,n.jsx)(v.Z,{}),(0,n.jsx)(i.Z,{style:{color:"white"},level:3,children:(0,h.$D)()&&"staff"==(0,h.$D)().role?"Staff Dashboard":"Dealer Dashboard"})]}),(0,n.jsx)(b,{}),(0,n.jsx)(Z,{style:{textAlign:"center"},children:"Build Earth. Copyright@buildearth.com"})]})})},94257:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/updateProfile",function(){return t(16739)}])}},function(e){e.O(0,[116,269,551,774,888,179],(function(){return r=94257,e(e.s=r);var r}));var r=e.O();_N_E=r}]);