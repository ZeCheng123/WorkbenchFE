import{_ as Y,a as $,b as F,c as L}from"./download-B3fRz18S.js";import{g as q}from"./common-Bv_4f9YQ.js";import{d as J,g as O,r as b,a as j,k as A,E as D,c as I,b as l,e as t,w as o,f as r,p as G,h as H,o as V,F as K,v as Q,n as R,i as S,x as T,_ as W}from"./index-zSdT-s-c.js";const u=f=>(G("data-v-8e8623ee"),f=f(),H(),f),X={class:"main"},Z=u(()=>l("span",{class:"header"}," 交付任务 ",-1)),ee={class:"search"},te={class:"left"},ae=u(()=>l("span",{style:{width:"336px",height:"32px"}},null,-1)),oe={class:"right"},le=u(()=>l("img",{src:$,alt:""},null,-1)),se=u(()=>l("img",{src:F,alt:""},null,-1)),ne={class:"table_header"},re=u(()=>l("span",{class:"left"},[l("img",{src:Y,alt:""}),l("span",{class:"title"})],-1)),de={class:"right"},ce=u(()=>l("img",{src:L,alt:""},null,-1)),ie={class:"table"},pe={style:{display:"flex","align-items":"center"}},ue={style:{display:"flex","align-items":"center"}},me=["onClick"],_e=J({__name:"index",setup(f){const{proxy:P}=O(),m=b({pageIndex:1,pageSize:5,total:0}),e=j({orderNo:"",customerName:"",customerPhone:"",filterMethod:"",createDate:[],orderStatus:""}),v=b([]);A(()=>{y(!1)});const w=b([{code:"all",name:"全部"},{code:"ServiceCase",name:"服务工单"},{code:"DispatchNote",name:"发货单"},{code:"FieldJob",name:"派工单"}]),C=b([{code:"",name:"全部"},{code:"0",name:"待开始"},{code:"1",name:"提货"},{code:"2",name:"入库"},{code:"3",name:"配送"},{code:"4",name:"安装"},{code:"5",name:"完成"}]),z=s=>{console.log(s),P.$router.push({path:"/delivery_tasks_details",query:{id:s.id,serviceCaseNeoId:s.serviceCaseId,orderId:s.orderId,taskType:s.taskType,status:s.status,distributorName:s.distributorName,followerName:s.followerName,accountName:s.accountName,createdTime:s.createdTime,createdBy:s.createdBy}})},y=s=>{const n=e.orderNo==null?"":e.orderNo,_=e.customerName==null?"":e.customerName,i=e.customerPhone==null?"":e.customerPhone;let g={status:e.orderStatus==null?"":e.orderStatus,createdTimeStart:e.createDate==null?"":e.createDate[0],createdTimeEnd:e.createDate==null?"":e.createDate[1],pageSize:5,pageNo:m.value.pageIndex,accountName:_,accountPhone:i,taskNumber:n};console.log(g),q(g).then(d=>{let h=d.data.data;h.length>0?(v.value=h,s&&D({message:"查询成功",type:"success"})):v.value=[],m.value={pageIndex:d.data.current==null?1:parseInt(d.data.current),pageSize:d.data.size,total:d.data.total}}).catch(d=>{D({message:"请求数据失败，请重试",type:"error"}),console.error("请求数据失败:",d)})},B=s=>{m.value.pageIndex=s,y(!0)},M=()=>{e.orderNo="",e.customerName="",e.customerPhone="",e.filterMethod="",e.createDate=[],e.orderStatus=""};return(s,n)=>{const _=r("el-input"),i=r("el-form-item"),N=r("el-form"),g=r("el-date-picker"),d=r("el-option"),h=r("el-select"),x=r("el-button"),c=r("el-table-column"),U=r("el-table"),E=r("el-pagination");return V(),I("div",X,[Z,l("span",ee,[l("span",te,[t(N,{model:e,"label-width":"80px","label-position":"left"},{default:o(()=>[t(i,{label:"任务编号"},{default:o(()=>[t(_,{placeholder:"请输入任务编号",modelValue:e.orderNo,"onUpdate:modelValue":n[0]||(n[0]=a=>e.orderNo=a)},null,8,["modelValue"])]),_:1}),t(i,{label:"客户名称"},{default:o(()=>[t(_,{placeholder:"输入客户名称",modelValue:e.customerName,"onUpdate:modelValue":n[1]||(n[1]=a=>e.customerName=a)},null,8,["modelValue"])]),_:1}),t(i,{label:"客户电话"},{default:o(()=>[t(_,{placeholder:"请输入客户电话",modelValue:e.customerPhone,"onUpdate:modelValue":n[2]||(n[2]=a=>e.customerPhone=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"]),t(N,{model:e,"label-width":"80px","label-position":"left"},{default:o(()=>[t(i,{label:"创建时间"},{default:o(()=>[t(g,{modelValue:e.createDate,"onUpdate:modelValue":n[3]||(n[3]=a=>e.createDate=a),type:"daterange","range-separator":"~","start-placeholder":"开始时间","end-placeholder":"结束时间","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1}),t(i,{label:"订单状态"},{default:o(()=>[t(h,{modelValue:e.orderStatus,"onUpdate:modelValue":n[4]||(n[4]=a=>e.orderStatus=a),placeholder:"请选择订单状态"},{default:o(()=>[(V(!0),I(K,null,Q(C.value,a=>(V(),R(d,{key:a.code,label:a.name,value:a.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),ae]),_:1},8,["model"])]),l("span",oe,[t(x,{onClick:n[5]||(n[5]=a=>y(!0)),type:"primary",class:"search_btn"},{icon:o(()=>[le]),default:o(()=>[S("查询")]),_:1}),t(x,{onClick:n[6]||(n[6]=a=>M()),type:"primary",class:"reset_btn"},{icon:o(()=>[se]),default:o(()=>[S("重置")]),_:1})])]),l("span",ne,[re,l("span",de,[t(x,{type:"primary",class:"reset_btn"},{icon:o(()=>[ce]),default:o(()=>[S("下载")]),_:1})])]),l("span",ie,[t(U,{class:"table_content",data:v.value,stripe:!1,style:{width:"100%"}},{default:o(()=>[t(c,{prop:"id",label:"任务编号"}),t(c,{prop:"distributorName",label:"经销商"}),t(c,{prop:"followerName",label:"经销商负责人"}),t(c,{prop:"accountName",label:"关联客户"}),t(c,{prop:"taskType",label:"任务类型"},{default:o(a=>{var p;return[l("div",pe,T(a.row.taskType?(p=w.value.find(k=>k.code==a.row.taskType))==null?void 0:p.name:""),1)]}),_:1}),t(c,{prop:"createdTime",label:"创建时间"}),t(c,{prop:"status",label:"状态"},{default:o(a=>{var p;return[l("div",ue,T(a.row.status?(p=C.value.find(k=>k.code==a.row.status))==null?void 0:p.name:"待开始"),1)]}),_:1}),t(c,{prop:"url",label:"操作",width:"80px"},{default:o(a=>[l("div",{style:{display:"flex","align-items":"center",color:"#165dff",cursor:"pointer"},onClick:p=>z(a.row)}," 查看 ",8,me)]),_:1})]),_:1},8,["data"]),t(E,{class:"table_pagination","page-size":m.value.pageSize,"pager-count":5,layout:"total, prev, pager, next",total:m.value.total,onCurrentChange:B},null,8,["page-size","total"])])])}}}),be=W(_e,[["__scopeId","data-v-8e8623ee"]]);export{be as default};