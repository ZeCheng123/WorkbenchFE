import{_ as I}from"./clock-CgggoxE6.js";import{_ as B,a as M,b as $,c as F}from"./download-B3fRz18S.js";import{d as O,g as z,a as E,r as x,c as b,b as a,i as _,e,w as l,f as n,p as L,h as P,o as u,F as g,v as y,n as S,_ as T}from"./index-CgC3c9Jg.js";const p=c=>(L("data-v-6e41a0de"),c=c(),P(),c),j={class:"main"},q={class:"header"},G=p(()=>a("span",{class:"title"},"售后工单",-1)),J=p(()=>a("img",{src:I,alt:""},null,-1)),K={class:"search"},Q={class:"left"},R={class:"right"},W=p(()=>a("img",{src:M,alt:""},null,-1)),X=p(()=>a("img",{src:$,alt:""},null,-1)),Y={class:"table_header"},Z=p(()=>a("span",{class:"left"},[a("img",{src:B,alt:""}),a("span",{class:"title"},"经销商名称：梦天慈溪经销商")],-1)),ee={class:"right"},te=p(()=>a("img",{src:F,alt:""},null,-1)),le={class:"table"},ae=["onClick"],oe=O({__name:"index",setup(c){const{proxy:k}=z(),o=E({workNo:"",customerName:"",customerPhone:"",filterMethod:"",createDate:[],orderStatus:""}),C=x([{value:"all",label:"全部"}]),w=x([{value:"all",label:"全部"}]),N=x([{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"H404304",text4:"李女士",text5:"售后重做",text6:"2021-02-28 10:30",text7:"已提报",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"H404304",text4:"李女士",text5:"售后重做",text6:"2021-02-28 10:30",text7:"已提报",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"H404304",text4:"李女士",text5:"售后重做",text6:"2021-02-28 10:30",text7:"已提报",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"H404304",text4:"李女士",text5:"售后重做",text6:"2021-02-28 10:30",text7:"已提报",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"H404304",text4:"李女士",text5:"售后重做",text6:"2021-02-28 10:30",text7:"已提报",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"H404304",text4:"李女士",text5:"售后重做",text6:"2021-02-28 10:30",text7:"已提报",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"H404304",text4:"李女士",text5:"售后重做",text6:"2021-02-28 10:30",text7:"已提报",text8:""}]),A=()=>{k.$router.push("/aftersales_workorder_details")};return(f,s)=>{const i=n("el-button"),m=n("el-input"),d=n("el-form-item"),h=n("el-form"),v=n("el-option"),V=n("el-select"),H=n("el-date-picker"),r=n("el-table-column"),U=n("el-table"),D=n("el-pagination");return u(),b("div",j,[a("span",q,[G,_(),e(i,{type:"primary",class:"tips_btn"},{icon:l(()=>[J]),default:l(()=>[_("售后工单草稿箱")]),_:1})]),a("span",K,[a("span",Q,[e(h,{model:o,rules:f.rule,"label-width":"80px","label-position":"left"},{default:l(()=>[e(d,{label:"工单编号"},{default:l(()=>[e(m,{placeholder:"请输入工单编号",modelValue:o.workNo,"onUpdate:modelValue":s[0]||(s[0]=t=>o.workNo=t)},null,8,["modelValue"])]),_:1}),e(d,{label:"客户名称"},{default:l(()=>[e(m,{placeholder:"输入客户名称",modelValue:o.customerName,"onUpdate:modelValue":s[1]||(s[1]=t=>o.customerName=t)},null,8,["modelValue"])]),_:1}),e(d,{label:"客户电话"},{default:l(()=>[e(m,{placeholder:"请输入客户电话",modelValue:o.customerName,"onUpdate:modelValue":s[2]||(s[2]=t=>o.customerName=t)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),e(h,{model:o,rules:f.rule,"label-width":"80px","label-position":"left"},{default:l(()=>[e(d,{label:"筛选方式"},{default:l(()=>[e(V,{modelValue:o.filterMethod,"onUpdate:modelValue":s[3]||(s[3]=t=>o.filterMethod=t),placeholder:"请选择筛选方式"},{default:l(()=>[(u(!0),b(g,null,y(C.value,t=>(u(),S(v,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(d,{label:"创建时间"},{default:l(()=>[e(H,{modelValue:o.createDate,"onUpdate:modelValue":s[4]||(s[4]=t=>o.createDate=t),type:"daterange","range-separator":"~","start-placeholder":"开始时间","end-placeholder":"结束时间"},null,8,["modelValue"])]),_:1}),e(d,{label:"订单状态"},{default:l(()=>[e(V,{modelValue:o.orderStatus,"onUpdate:modelValue":s[5]||(s[5]=t=>o.orderStatus=t),placeholder:"请选择订单状态"},{default:l(()=>[(u(!0),b(g,null,y(w.value,t=>(u(),S(v,{key:t.value,label:t.label,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),a("span",R,[e(i,{type:"primary",class:"search_btn"},{icon:l(()=>[W]),default:l(()=>[_("查询")]),_:1}),e(i,{type:"primary",class:"reset_btn"},{icon:l(()=>[X]),default:l(()=>[_("重置")]),_:1})])]),a("span",Y,[Z,a("span",ee,[e(i,{type:"primary",class:"reset_btn"},{icon:l(()=>[te]),default:l(()=>[_("下载")]),_:1})])]),a("span",le,[e(U,{class:"table_content",data:N.value,stripe:!0,style:{width:"100%"}},{default:l(()=>[e(r,{prop:"text1",label:"售后工单编号"}),e(r,{prop:"text2",label:"专卖店名称"}),e(r,{prop:"text3",label:"生产单号"}),e(r,{prop:"text4",label:"客户名称"}),e(r,{prop:"text5",label:"处理方式"}),e(r,{prop:"text6",label:"创建时间"}),e(r,{prop:"text7",label:"售后状态"}),e(r,{prop:"text8",label:"操作",width:"80px"},{default:l(t=>[a("div",{style:{display:"flex","align-items":"center",color:"#165dff",cursor:"pointer"},onClick:se=>A(t)}," 查看 ",8,ae)]),_:1})]),_:1},8,["data"]),e(D,{class:"table_pagination","page-size":20,"pager-count":11,layout:"total, prev, pager, next",total:1e3})])])}}}),pe=T(oe,[["__scopeId","data-v-6e41a0de"]]);export{pe as default};
