import{_ as Y,a as F,b as q}from"./logoXX-Cy74BE6B.js";import{_ as A}from"./download-Dan4AgsM.js";import{c as L,m as J}from"./common-DUTHUj4v.js";import{d as O,g as j,r as x,m as G,o as H,E as C,c as T,f as r,i as t,w as n,k as c,p as K,l as Q,a as S,F as R,h as W,q as X,n as N,t as Z,_ as ee}from"./index-u4ky4G3-.js";import"./userinfo-CCqg8oIg.js";const _=k=>(K("data-v-3a696733"),k=k(),Q(),k),te={class:"main"},ae=_(()=>r("span",{class:"header"}," 交付任务 ",-1)),oe={class:"search"},le={class:"left"},se=_(()=>r("span",{style:{width:"336px",height:"32px"}},null,-1)),ne={class:"right"},re=_(()=>r("img",{src:F,alt:""},null,-1)),ce=_(()=>r("img",{src:q,alt:""},null,-1)),de={class:"table_header"},ie=_(()=>r("span",{class:"left"},[r("img",{src:Y,alt:""}),r("span",{class:"title"})],-1)),ue={class:"right"},me=_(()=>r("img",{src:A,alt:""},null,-1)),pe={class:"table"},_e={style:{display:"flex","align-items":"center"}},fe=["onClick"],he=O({__name:"index",setup(k){const{proxy:f}=j(),p=x({pageIndex:1,pageSize:15,total:0}),e=G({orderNo:"",customerName:"",customerPhone:"",filterMethod:"",createDate:[],orderStatus:""}),h=x([]);H(()=>{g(!1)}),x([{code:"all",name:"全部"},{code:"ServiceCase",name:"服务工单"},{code:"DispatchNote",name:"发货单"},{code:"FieldJob",name:"派工单"}]);const D=x([{code:"",name:"全部"},{code:"0",name:"待开始"},{code:"1",name:"入库"},{code:"3",name:"配送"},{code:"4",name:"安装"},{code:"5",name:"完成"}]),P=a=>{console.log(a),f.$router.push({path:"/delivery_tasks_details",query:{id:a.id,serviceCaseNeoId:a.serviceCaseId,orderId:a.orderId,taskType:a.taskType,status:a.status,distributorName:a.distributorName,followerName:a.followerName,accountName:a.accountName,createdTime:a.createdTime,createdBy:a.createdBy}})},g=a=>{const s=e.orderNo==null?"":e.orderNo,u=e.customerName==null?"":e.customerName,o=e.customerPhone==null?"":e.customerPhone;let y={status:e.orderStatus==null?"":e.orderStatus,createdTimeStart:e.createDate==null?"":e.createDate[0],createdTimeEnd:e.createDate==null?"":e.createDate[1],pageSize:p.value.pageSize,pageNo:p.value.pageIndex,accountName:u,accountPhone:o,taskNumber:s};console.log(y),L(y).then(d=>{let b=d.data.data;b.length>0?(b.forEach(m=>{m.checked=!1,m.taskType="交付"}),h.value=b,a&&C({message:"查询成功",type:"success"})):h.value=[],p.value={pageIndex:d.data.current==null?1:parseInt(d.data.current),pageSize:d.data.size,total:d.data.total}}).catch(d=>{C({message:"请求数据失败，请重试",type:"error"}),console.error("请求数据失败:",d)})},$=a=>{p.value.pageIndex=a,g(!1)},w=()=>{e.orderNo="",e.customerName="",e.customerPhone="",e.filterMethod="",e.createDate=[],e.orderStatus="",g(!1)},z=a=>{h.value.forEach(s=>{s.checked=a})},B=()=>{const a=h.value.filter(o=>o.checked);if(a.length<=0){f.$message.error("必须勾选数据!");return}let s=!1;for(let o=0;o<a.length-1;o++)(a[o].accountName!=a[o+1].accountName||a[o].distributorName!=a[o+1].distributorName)&&(s=!0);if(s){f.$message.error("所选数据并非同一客户同一经销商订单，无法合并!");return}let u={taskIds:a.map(o=>o.id)};J(u).then(o=>{o.data.code=="success"?(f.$message.success("合并成功!"),console.log("mergeTask",o),g(!1)):f.$message.error("合并失败:"+o.data.message)}).catch(o=>{C({message:"合并失败，请重试",type:"error"}),console.error("合并交付失败:",o)})};return(a,s)=>{const u=c("el-input"),o=c("el-form-item"),V=c("el-form"),y=c("el-date-picker"),d=c("el-option"),b=c("el-select"),m=c("el-button"),I=c("el-checkbox"),i=c("el-table-column"),U=c("el-table"),E=c("el-pagination");return S(),T("div",te,[ae,r("span",oe,[r("span",le,[t(V,{model:e,"label-width":"80px","label-position":"left"},{default:n(()=>[t(o,{label:"任务编号"},{default:n(()=>[t(u,{placeholder:"请输入任务编号",modelValue:e.orderNo,"onUpdate:modelValue":s[0]||(s[0]=l=>e.orderNo=l)},null,8,["modelValue"])]),_:1}),t(o,{label:"客户名称"},{default:n(()=>[t(u,{placeholder:"输入客户名称",modelValue:e.customerName,"onUpdate:modelValue":s[1]||(s[1]=l=>e.customerName=l)},null,8,["modelValue"])]),_:1}),t(o,{label:"客户电话"},{default:n(()=>[t(u,{placeholder:"请输入客户电话",modelValue:e.customerPhone,"onUpdate:modelValue":s[2]||(s[2]=l=>e.customerPhone=l)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),t(V,{model:e,"label-width":"80px","label-position":"left"},{default:n(()=>[t(o,{label:"创建时间"},{default:n(()=>[t(y,{modelValue:e.createDate,"onUpdate:modelValue":s[3]||(s[3]=l=>e.createDate=l),type:"daterange","range-separator":"~","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),t(o,{label:"交付状态"},{default:n(()=>[t(b,{modelValue:e.orderStatus,"onUpdate:modelValue":s[4]||(s[4]=l=>e.orderStatus=l),placeholder:"请选择交付状态"},{default:n(()=>[(S(!0),T(R,null,W(D.value,l=>(S(),X(d,{key:l.code,label:l.name,value:l.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),se]),_:1},8,["model"])]),r("span",ne,[t(m,{onClick:s[5]||(s[5]=l=>g(!0)),type:"primary",class:"search_btn"},{icon:n(()=>[re]),default:n(()=>[N("查询")]),_:1}),t(m,{onClick:s[6]||(s[6]=l=>w()),type:"primary",class:"reset_btn"},{icon:n(()=>[ce]),default:n(()=>[N("重置")]),_:1})])]),r("span",de,[ie,r("span",ue,[t(m,{onClick:s[7]||(s[7]=l=>B()),type:"primary",class:"search_btn"},{default:n(()=>[N("合并交付")]),_:1}),t(m,{type:"primary",class:"reset_btn"},{icon:n(()=>[me]),default:n(()=>[N("下载")]),_:1})])]),r("span",pe,[t(U,{class:"table_content",data:h.value,stripe:!1,style:{width:"100%"}},{default:n(()=>[t(i,{prop:"checked",label:"全选",width:"80px"},{header:n(()=>[t(I,{onChange:z},{default:n(()=>[N("全选")]),_:1})]),default:n(l=>[t(I,{modelValue:l.row.checked,"onUpdate:modelValue":v=>l.row.checked=v},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),t(i,{prop:"id",label:"任务编号"}),t(i,{prop:"distributorName",label:"经销商"}),t(i,{prop:"followerName",label:"经销商负责人"}),t(i,{prop:"accountName",label:"关联客户"}),t(i,{prop:"taskType",label:"任务类型"}),t(i,{prop:"createdTime",label:"创建时间"}),t(i,{prop:"status",label:"状态"},{default:n(l=>{var v;return[r("div",_e,Z(l.row.status?(v=D.value.find(M=>M.code==l.row.status))==null?void 0:v.name:"待开始"),1)]}),_:1}),t(i,{prop:"url",label:"操作",width:"80px"},{default:n(l=>[r("div",{style:{display:"flex","align-items":"center",color:"#165dff",cursor:"pointer"},onClick:v=>P(l.row)}," 查看 ",8,fe)]),_:1})]),_:1},8,["data"]),t(E,{class:"table_pagination","page-size":p.value.pageSize,"pager-count":15,layout:"total, prev, pager, next",total:p.value.total,onCurrentChange:$},null,8,["page-size","total"])])])}}}),ye=ee(he,[["__scopeId","data-v-3a696733"]]);export{ye as default};
