import{_ as A,a as D,b as I,c as U}from"./download-B3fRz18S.js";import{d as B,g as F,a as P,r as u,c as h,b as a,e,w as t,f as n,p as $,h as z,o as x,F as E,v as L,n as M,i as m,_ as T}from"./index-yO3R9-1p.js";const d=c=>($("data-v-445d705d"),c=c(),z(),c),j={class:"main"},q=d(()=>a("span",{class:"header"}," 订单中心 ",-1)),G={class:"search"},H={class:"left"},J=d(()=>a("span",{style:{width:"336px",height:"32px"}},null,-1)),K={class:"right"},O=d(()=>a("img",{src:D,alt:""},null,-1)),Q=d(()=>a("img",{src:I,alt:""},null,-1)),R={class:"table_header"},W=d(()=>a("span",{class:"left"},[a("img",{src:A,alt:""}),a("span",{class:"title"})],-1)),X={class:"right"},Y=d(()=>a("img",{src:U,alt:""},null,-1)),Z={class:"table"},ee=["onClick"],te=B({__name:"index",setup(c){const{proxy:S}=F(),o=P({orderNo:"",customerName:"",customerPhone:"",filterMethod:"",createDate:[],orderStatus:""});u([{value:"all",label:"全部"}]);const C=u([{value:"all",label:"全部"}]),g=u([{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"CS0011",text4:"李女士",text5:"83047",text6:"2021-02-28 10:30",text7:"已财务批准",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"CS0011",text4:"李女士",text5:"83047",text6:"2021-02-28 10:30",text7:"已财务批准",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"CS0011",text4:"李女士",text5:"83047",text6:"2021-02-28 10:30",text7:"已财务批准",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"CS0011",text4:"李女士",text5:"83047",text6:"2021-02-28 10:30",text7:"已财务批准",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"CS0011",text4:"李女士",text5:"83047",text6:"2021-02-28 10:30",text7:"已财务批准",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"CS0011",text4:"李女士",text5:"83047",text6:"2021-02-28 10:30",text7:"已财务批准",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"CS0011",text4:"李女士",text5:"83047",text6:"2021-02-28 10:30",text7:"已财务批准",text8:""}]),v=()=>{S.$router.push("/historical_orders_details")};return(b,s)=>{const _=n("el-input"),p=n("el-form-item"),f=n("el-form"),V=n("el-date-picker"),y=n("el-option"),N=n("el-select"),i=n("el-button"),r=n("el-table-column"),w=n("el-table"),k=n("el-pagination");return x(),h("div",j,[q,a("span",G,[a("span",H,[e(f,{model:o,rules:b.rule,"label-width":"80px","label-position":"left"},{default:t(()=>[e(p,{label:"订单编号"},{default:t(()=>[e(_,{placeholder:"请输入任务编号",modelValue:o.orderNo,"onUpdate:modelValue":s[0]||(s[0]=l=>o.orderNo=l)},null,8,["modelValue"])]),_:1}),e(p,{label:"客户姓名"},{default:t(()=>[e(_,{placeholder:"输入客户姓名",modelValue:o.customerName,"onUpdate:modelValue":s[1]||(s[1]=l=>o.customerName=l)},null,8,["modelValue"])]),_:1}),e(p,{label:"客户电话"},{default:t(()=>[e(_,{placeholder:"请输入客户电话",modelValue:o.customerName,"onUpdate:modelValue":s[2]||(s[2]=l=>o.customerName=l)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),e(f,{model:o,rules:b.rule,"label-width":"80px","label-position":"left"},{default:t(()=>[e(p,{label:"创建时间"},{default:t(()=>[e(V,{modelValue:o.createDate,"onUpdate:modelValue":s[3]||(s[3]=l=>o.createDate=l),type:"daterange","range-separator":"~","start-placeholder":"开始时间","end-placeholder":"结束时间"},null,8,["modelValue"])]),_:1}),e(p,{label:"订单状态"},{default:t(()=>[e(N,{modelValue:o.orderStatus,"onUpdate:modelValue":s[4]||(s[4]=l=>o.orderStatus=l),placeholder:"请选择订单状态"},{default:t(()=>[(x(!0),h(E,null,L(C.value,l=>(x(),M(y,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),J]),_:1},8,["model","rules"])]),a("span",K,[e(i,{type:"primary",class:"search_btn"},{icon:t(()=>[O]),default:t(()=>[m("查询")]),_:1}),e(i,{type:"primary",class:"reset_btn"},{icon:t(()=>[Q]),default:t(()=>[m("重置")]),_:1})])]),a("span",R,[W,a("span",X,[e(i,{type:"primary",class:"reset_btn"},{icon:t(()=>[Y]),default:t(()=>[m("下载")]),_:1})])]),a("span",Z,[e(w,{class:"table_content",data:g.value,stripe:!1,style:{width:"100%"}},{default:t(()=>[e(r,{prop:"text1",label:"订单编号"}),e(r,{prop:"text2",label:"专卖店名称"}),e(r,{prop:"text3",label:"装卖店编号"}),e(r,{prop:"text4",label:"客户名称"}),e(r,{prop:"text5",label:"生产单号"}),e(r,{prop:"text6",label:"创建时间"}),e(r,{prop:"text7",label:"状态"}),e(r,{prop:"text8",label:"操作",width:"80px"},{default:t(l=>[a("div",{style:{display:"flex","align-items":"center",color:"#165dff",cursor:"pointer"},onClick:le=>v(l)}," 查看 ",8,ee)]),_:1})]),_:1},8,["data"]),e(k,{class:"table_pagination","page-size":20,"pager-count":11,layout:"total, prev, pager, next",total:1e3})])])}}}),se=T(te,[["__scopeId","data-v-445d705d"]]);export{se as default};