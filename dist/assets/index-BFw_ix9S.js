import{_ as U,a as w,b as B,c as M}from"./download-B3fRz18S.js";import{g as $}from"./common-hUTK0VmG.js";import{d as E,g as L,a as F,r as _,k as q,E as f,c as N,b as n,e,w as a,f as r,p as z,h as j,o as b,F as A,v as G,n as H,i as h,_ as J}from"./index-C_grwOdM.js";const u=i=>(z("data-v-b734cf70"),i=i(),j(),i),K={class:"main"},O=u(()=>n("span",{class:"header"}," 交付任务 ",-1)),Q={class:"search"},R={class:"left"},W=u(()=>n("span",{style:{width:"336px",height:"32px"}},null,-1)),X={class:"right"},Y=u(()=>n("img",{src:w,alt:""},null,-1)),Z=u(()=>n("img",{src:B,alt:""},null,-1)),ee={class:"table_header"},te=u(()=>n("span",{class:"left"},[n("img",{src:U,alt:""}),n("span",{class:"title"})],-1)),le={class:"right"},ae=u(()=>n("img",{src:M,alt:""},null,-1)),oe={class:"table"},se=["onClick"],ne=E({__name:"index",setup(i){const{proxy:V}=L(),t=F({orderNo:"",customerName:"",customerPhone:"",filterMethod:"",createDate:[],orderStatus:""}),g=_([]);q(()=>{v(!1)}),_([{value:"all",label:"全部"}]);const k=_([{value:"all",label:"全部"}]),x=o=>{console.log(o),V.$router.push({path:"/delivery_tasks_details",query:{id:o.id,serviceCaseNeoId:o.serviceCaseId,orderId:o.orderId,taskType:o.taskType,status:o.status,distributorName:o.distributorName,follower_name:o.follower_name,accountName:o.accountName,createdTime:o.created_time}})},v=o=>{t.orderNo,t.customerName,t.customerPhone,$({status:"",createdTime:""}).then(c=>{let d=c.data.data;d.length>0?(g.value=d,o&&f({message:"查询成功",type:"success"})):f({message:"获取数据失败",type:"error"})}).catch(c=>{f({message:"请求数据失败，请重试",type:"error"}),console.error("请求数据失败:",c)})},C=()=>{t.orderNo=null,t.customerName=null,t.customerPhone=null,t.filterMethod=null,t.createDate=[],t.orderStatus=null};return(o,s)=>{const c=r("el-input"),d=r("el-form-item"),y=r("el-form"),I=r("el-date-picker"),S=r("el-option"),D=r("el-select"),m=r("el-button"),p=r("el-table-column"),P=r("el-table"),T=r("el-pagination");return b(),N("div",K,[O,n("span",Q,[n("span",R,[e(y,{model:t,rules:o.rule,"label-width":"80px","label-position":"left"},{default:a(()=>[e(d,{label:"任务编号"},{default:a(()=>[e(c,{placeholder:"请输入任务编号",modelValue:t.orderNo,"onUpdate:modelValue":s[0]||(s[0]=l=>t.orderNo=l)},null,8,["modelValue"])]),_:1}),e(d,{label:"客户名称"},{default:a(()=>[e(c,{placeholder:"输入客户名称",modelValue:t.customerName,"onUpdate:modelValue":s[1]||(s[1]=l=>t.customerName=l)},null,8,["modelValue"])]),_:1}),e(d,{label:"客户电话"},{default:a(()=>[e(c,{placeholder:"请输入客户电话",modelValue:t.customerPhone,"onUpdate:modelValue":s[2]||(s[2]=l=>t.customerPhone=l)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),e(y,{model:t,rules:o.rule,"label-width":"80px","label-position":"left"},{default:a(()=>[e(d,{label:"创建时间"},{default:a(()=>[e(I,{modelValue:t.createDate,"onUpdate:modelValue":s[3]||(s[3]=l=>t.createDate=l),type:"daterange","range-separator":"~","start-placeholder":"开始时间","end-placeholder":"结束时间"},null,8,["modelValue"])]),_:1}),e(d,{label:"订单状态"},{default:a(()=>[e(D,{modelValue:t.orderStatus,"onUpdate:modelValue":s[4]||(s[4]=l=>t.orderStatus=l),placeholder:"请选择订单状态"},{default:a(()=>[(b(!0),N(A,null,G(k.value,l=>(b(),H(S,{key:l.value,label:l.label,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),W]),_:1},8,["model","rules"])]),n("span",X,[e(m,{onClick:s[5]||(s[5]=l=>v(!0)),type:"primary",class:"search_btn"},{icon:a(()=>[Y]),default:a(()=>[h("查询")]),_:1}),e(m,{onClick:s[6]||(s[6]=l=>C()),type:"primary",class:"reset_btn"},{icon:a(()=>[Z]),default:a(()=>[h("重置")]),_:1})])]),n("span",ee,[te,n("span",le,[e(m,{type:"primary",class:"reset_btn"},{icon:a(()=>[ae]),default:a(()=>[h("下载")]),_:1})])]),n("span",oe,[e(P,{class:"table_content",data:g.value,stripe:!1,style:{width:"100%"}},{default:a(()=>[e(p,{prop:"id",label:"任务编号"}),e(p,{prop:"distributorName",label:"经销商"}),e(p,{prop:"follower_name",label:"经销商负责人"}),e(p,{prop:"accountName",label:"关联客户"}),e(p,{prop:"taskType",label:"任务类型"}),e(p,{prop:"status",label:"状态"}),e(p,{prop:"url",label:"操作",width:"80px"},{default:a(l=>[n("div",{style:{display:"flex","align-items":"center",color:"#165dff",cursor:"pointer"},onClick:re=>x(l.row)}," 查看 ",8,se)]),_:1})]),_:1},8,["data"]),e(T,{class:"table_pagination","page-size":20,"pager-count":11,layout:"total, prev, pager, next",total:1e3})])])}}}),ue=J(ne,[["__scopeId","data-v-b734cf70"]]);export{ue as default};