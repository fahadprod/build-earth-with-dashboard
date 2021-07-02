(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[155],{81875:function(e){e.exports={API_SERVER:"http://localhost:3000"}},92357:function(e,r,t){"use strict";var n=t(85893),a=t(67294),s=t(57254),i=t(85296),l=t(97183),o=t(42696),c=t(98453),d=t(41664),u=t(90244);r.Z=function(){i.Z.SubMenu,l.Z.Header,l.Z.Content,l.Z.Sider;var e=(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(i.Z.Item,{children:(0,n.jsx)(d.default,{href:"/find-properties",as:"/find-properties",children:(0,n.jsx)("a",{rel:"noopener noreferrer",children:"Find Property"})})}),(0,n.jsx)(i.Z.Item,{danger:!0,children:(0,n.jsx)("a",{onClick:u.kS,children:"Logout"})})]});return(0,n.jsx)(a.Fragment,{children:(0,n.jsx)(o.Z,{overlay:e,children:(0,n.jsx)("a",{style:{float:"right"},className:"ant-dropdown-link",onClick:function(e){return e.preventDefault()},children:(0,n.jsx)(c.C,{style:{float:"right",height:"50px",width:"50px"},src:"../img/avatar2.png",children:(0,n.jsx)(s.Z,{})})})})})}},38130:function(e,r,t){"use strict";var n=t(85893),a=(t(67294),t(85296)),s=t(97183),i=t(59271),l=t(89366),o=t(41664),c=a.Z.SubMenu,d=s.Z.Sider;r.Z=function(){return(0,n.jsx)(d,{width:200,className:"site-layout-background",children:(0,n.jsxs)(a.Z,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},children:[(0,n.jsxs)(c,{icon:(0,n.jsx)(i.Z,{}),title:"Property",children:[(0,n.jsx)(a.Z.Item,{children:(0,n.jsx)(o.default,{href:"/dashboard",as:"/dashboard",children:"All Property"})},"1"),(0,n.jsx)(a.Z.Item,{children:(0,n.jsx)(o.default,{href:"/addProperty",as:"/addProperty",children:"Add New Property"})},"2")]},"sub1"),(0,n.jsx)(c,{icon:(0,n.jsx)(l.Z,{}),title:"Profile",children:(0,n.jsx)(a.Z.Item,{children:(0,n.jsx)(o.default,{href:"/updateProfile",as:"/updateProfile",children:"Edit Profile"})},"6")},"sub2")]})})}},90244:function(e,r,t){"use strict";t.d(r,{YR:function(){return l},$D:function(){return o},kS:function(){return c}});var n=t(36808),a=t.n(n),s=t(11163),i=function(e){return a().get(e)},l=function(e,r){var t,n;t="token",n=e.data.token,a().set(t,n,{expires:1}),function(e,r){localStorage.setItem(e,JSON.stringify(r))}("user",e.data.user),r()},o=function(){if(i("token"))return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))},c=function(){var e;e="token",a().remove(e),function(e){localStorage.removeItem(e)}("user"),s.default.push("/find-properties")}},20349:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return P}});var n=t(85893),a=t(67294),s=t(97183),i=t(11700),l=t(87757),o=t.n(l),c=t(92137),d=t(96156),u=t(9669),p=t.n(u),h=t(90244),m=t(38130),f=t(11163),j=t(11382);function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach((function(r){(0,d.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var y=t(81875),v=(s.Z.Header,s.Z.Content),b=function(){var e=(0,h.$D)()&&(0,h.$D)()._id,r=(0,a.useState)({userId:e,society:"",name:"",category:"",address:"",price:"",formData:new FormData,imageUploadText:"Upload Image"}),t=r[0],i=r[1],l=(0,a.useState)(null),u=l[0],x=l[1],b=(0,a.useState)(!1),S=b[0],Z=b[1],N=t.society,P=t.name,w=t.category,C=t.address,O=t.price,k=t.formData,D=function(e){return function(r){var n="imageUpload"===e?r.target.files[0]:r.target.value;k.set(e,n),i(g(g({},t),{},(0,d.Z)({},e,n)))}},I=function(){var r=(0,c.Z)(o().mark((function r(n){var a,s;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return Z({loading:!0}),n.preventDefault(),(a=new FormData).append("file",u),a.append("society",N),a.append("name",P),a.append("category",w),a.append("address",C),a.append("price",O),a.append("userId",e),i(g({},t)),r.prev=11,r.next=14,p().post("".concat(y.API_SERVER,"/api/property/addproperty"),a,{headers:{"Content-Type":"application/json"}});case 14:s=r.sent,console.log(s),200===s.status&&(Z({loading:!1}),f.default.push("/dashboard")),i(g(g({},t),{},{society:"",name:"",category:"",address:"",imageUpload:"",price:""})),r.next=24;break;case 20:r.prev=20,r.t0=r.catch(11),console.log(r.t0),i(g({},t));case 24:case"end":return r.stop()}}),r,null,[[11,20]])})));return function(e){return r.apply(this,arguments)}}();return(0,n.jsxs)(s.Z,{children:[(0,n.jsx)(m.Z,{}),(0,n.jsx)(s.Z,{style:{padding:"0 24px 24px"},children:(0,n.jsxs)(v,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280},children:[(0,n.jsx)("h2",{children:"Add New Property"}),(0,n.jsxs)("form",{onSubmit:I,encType:"multipart/form-data",children:[(0,n.jsxs)("div",{className:"form-row",children:[(0,n.jsxs)("div",{className:"form-group col-md-6",children:[(0,n.jsx)("input",{type:"hidden",name:"userId",value:e}),(0,n.jsx)("label",{htmlFor:"inputEmail4",children:"Select Society"}),(0,n.jsxs)("select",{className:"custom-select mr-sm-2",id:"inlineFormCustomSelect",value:N,onChange:D("society"),required:!0,children:[(0,n.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Society"}),(0,n.jsx)("option",{value:"Al Jalil Garden",children:"Al Jalil Garden"}),(0,n.jsx)("option",{value:"Al Noor Orchard",children:"Al Noor Orchard"}),(0,n.jsx)("option",{value:"West Marina",children:"West Marina"})]})]}),(0,n.jsxs)("div",{className:"form-group col-md-6",children:[(0,n.jsx)("label",{htmlFor:"inputPassword4",children:"Select Type"}),(0,n.jsxs)("select",{value:P,onChange:D("name"),className:"custom-select mr-sm-2",id:"inlineFormCustomSelect",required:!0,children:[(0,n.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Type"}),(0,n.jsx)("option",{value:"Residential",children:"Residential"}),(0,n.jsx)("option",{value:"Commercial",children:"Commercial"})]})]})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"inputAddress",children:"Select Category"}),(0,n.jsxs)("select",{value:w,onChange:D("category"),className:"custom-select mr-sm-2",id:"inlineFormCustomSelect",required:!0,children:[(0,n.jsx)("option",{value:"",disabled:!0,selected:!0,children:"Select Category"}),(0,n.jsx)("option",{value:"3 Marla",children:"3 Marla"}),(0,n.jsx)("option",{value:"5 Marla",children:"5 Marla"}),(0,n.jsx)("option",{value:"10 Marla",children:"10 Marla"}),(0,n.jsx)("option",{value:"1 Kanal",children:"1 Kanal"})]})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{htmlFor:"inputAddress2",children:"Complete Address"}),(0,n.jsx)("input",{type:"text",value:C,onChange:D("address"),className:"form-control",id:"inputAddress2",placeholder:"Apartment, studio, or floor",required:!0})]}),(0,n.jsxs)("div",{className:"form-row",children:[(0,n.jsxs)("div",{className:"form-group col-md-6",children:[(0,n.jsx)("label",{htmlFor:"inputPrice",children:"Price"}),(0,n.jsx)("input",{type:"number",value:O,onChange:D("price"),className:"form-control",id:"price",min:"0",required:!0})]}),(0,n.jsxs)("div",{className:"form-group col-md-4",children:[(0,n.jsx)("label",{htmlFor:"inputPrice",children:"Image Upload"}),(0,n.jsx)("br",{}),(0,n.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){return x(e.target.files[0])},required:!0})]})]}),(0,n.jsxs)("button",{type:"submit",className:"btn btn-primary",children:["Submit   ",S?(0,n.jsx)(j.Z,{}):""]})]})]})})]})},S=t(92357),Z=s.Z.Header,N=s.Z.Footer,P=(s.Z.Sider,s.Z.Content,function(){return(0,n.jsxs)("div",{className:"admin-main",children:[(0,n.jsxs)(Z,{style:{padding:10},children:[(0,n.jsx)(S.Z,{}),(0,n.jsx)(i.Z,{style:{color:"white"},level:3,children:(0,h.$D)()&&"staff"==(0,h.$D)().role?"Staff Dashboard":"Dealer Dashboard"})]}),(0,n.jsx)(b,{}),(0,n.jsx)(N,{style:{textAlign:"center"},children:"Build Earth. Copyright@buildearth.com"})]})})},2072:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/addProperty",function(){return t(20349)}])}},function(e){e.O(0,[116,269,551,774,888,179],(function(){return r=2072,e(e.s=r);var r}));var r=e.O();_N_E=r}]);