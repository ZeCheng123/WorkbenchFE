import{_ as M,a as $,b as F,c as z}from"./download-B3fRz18S.js";import{e as L}from"./common-C989s-vj.js";import{d as O,g as q,a as P,r as x,k as j,E as b,c as g,b as o,e as t,w as a,f as n,p as G,h as K,o as m,F as N,v as W,n as A,i as y,x as D,_ as Q}from"./index-yO3R9-1p.js";const _=u=>(G("data-v-06f4d428"),u=u(),K(),u),R={class:"main"},X=_(()=>o("span",{class:"header"}," 派工单 ",-1)),Y={class:"search"},Z={class:"left"},ee=_(()=>o("span",{style:{width:"336px",height:"32px"}},null,-1)),te={class:"right"},ae=_(()=>o("img",{src:$,alt:""},null,-1)),le=_(()=>o("img",{src:F,alt:""},null,-1)),oe={class:"table_header"},se=_(()=>o("span",{class:"left"},[o("img",{src:M,alt:""}),o("span",{class:"title"})],-1)),ne={class:"right"},re=_(()=>o("img",{src:z,alt:""},null,-1)),ce={class:"table"},ie={style:{display:"flex","align-items":"center"}},de={style:{display:"flex","align-items":"center"}},pe=["onClick"],_e=O({__name:"index",setup(u){const{proxy:H}=q(),l=P({dispatchWorkerNo:"",technicianName:"",technicianType:"",filterMethod:"",createDate:[],dispatchWorkerStatus:""});x([{value:"all",label:"全部"}]);const v=x([{code:"all",name:"全部"},{code:"0",name:"配送派工单"},{code:"1",name:"安装派工单"},{code:"2",name:"维修派工单"}]),k=x([{code:"all",name:"全部"},{code:"0",name:"待开始"},{code:"1",name:"进行中"},{code:"2",name:"已完成"}]),S=x([{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"H404304",text4:"李女士",text5:"安装派工",text6:"2021-02-28 10:30",text7:"已派工",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"H404304",text4:"李女士",text5:"安装派工",text6:"2021-02-28 10:30",text7:"已派工",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"H404304",text4:"李女士",text5:"安装派工",text6:"2021-02-28 10:30",text7:"已派工",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"H404304",text4:"李女士",text5:"安装派工",text6:"2021-02-28 10:30",text7:"已派工",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"H404304",text4:"李女士",text5:"安装派工",text6:"2021-02-28 10:30",text7:"已派工",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"H404304",text4:"李女士",text5:"安装派工",text6:"2021-02-28 10:30",text7:"已派工",text8:""},{text1:"CS0011-06665-01",text2:"梦天慈溪经销商-专卖店A",text3:"H404304",text4:"李女士",text5:"安装派工",text6:"2021-02-28 10:30",text7:"已派工",text8:""}]),B=i=>{H.$router.push({path:"/dispatch_details",query:{id:i.id}})};j(()=>{V(!1)});const V=i=>{L({fieldJobType__c:"",appointmentEndTime:"",createdTime:"",status:"",caseNo:"",artisanName:"",pageNo:0,pageSize:20}).then(d=>{let r=d.data.data;r.length>0?(S.value=r,i&&b({message:"查询成功",type:"success"})):b({message:"获取数据失败",type:"error"})}).catch(d=>{b({message:"请求数据失败，请重试",type:"error"}),console.error("请求数据失败:",d)})},E=()=>{l.dispatchWorkerNo="",l.technicianName="",l.technicianType="",l.filterMethod="",l.createDate=[],l.dispatchWorkerStatus=""};return(i,s)=>{const d=n("el-input"),r=n("el-form-item"),w=n("el-option"),C=n("el-select"),T=n("el-form"),I=n("el-date-picker"),f=n("el-button"),c=n("el-table-column"),J=n("el-table"),U=n("el-pagination");return m(),g("div",R,[X,o("span",Y,[o("span",Z,[t(T,{model:l,rules:i.rule,"label-width":"80px","label-position":"left"},{default:a(()=>[t(r,{label:"派工编号"},{default:a(()=>[t(d,{placeholder:"请输入派工编号",modelValue:l.dispatchWorkerNo,"onUpdate:modelValue":s[0]||(s[0]=e=>l.dispatchWorkerNo=e)},null,8,["modelValue"])]),_:1}),t(r,{label:"技工姓名"},{default:a(()=>[t(d,{placeholder:"输入技工姓名",modelValue:l.technicianName,"onUpdate:modelValue":s[1]||(s[1]=e=>l.technicianName=e)},null,8,["modelValue"])]),_:1}),t(r,{label:"技工种类"},{default:a(()=>[t(C,{modelValue:l.technicianType,"onUpdate:modelValue":s[2]||(s[2]=e=>l.technicianType=e),placeholder:"请选择派工种类"},{default:a(()=>[(m(!0),g(N,null,W(v.value,e=>(m(),A(w,{key:e.code,label:e.name,value:e.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),t(T,{model:l,rules:i.rule,"label-width":"80px","label-position":"left"},{default:a(()=>[t(r,{label:"创建时间"},{default:a(()=>[t(I,{modelValue:l.createDate,"onUpdate:modelValue":s[3]||(s[3]=e=>l.createDate=e),type:"daterange","range-separator":"~","start-placeholder":"开始时间","end-placeholder":"结束时间"},null,8,["modelValue"])]),_:1}),t(r,{label:"派工状态"},{default:a(()=>[t(C,{modelValue:l.dispatchWorkerStatus,"onUpdate:modelValue":s[4]||(s[4]=e=>l.dispatchWorkerStatus=e),placeholder:"请选择派工状态"},{default:a(()=>[(m(!0),g(N,null,W(k.value,e=>(m(),A(w,{key:e.code,label:e.name,value:e.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),ee]),_:1},8,["model","rules"])]),o("span",te,[t(f,{onClick:s[5]||(s[5]=e=>V(!0)),type:"primary",class:"search_btn"},{icon:a(()=>[ae]),default:a(()=>[y("查询")]),_:1}),t(f,{onClick:s[6]||(s[6]=e=>E()),type:"primary",class:"reset_btn"},{icon:a(()=>[le]),default:a(()=>[y("重置")]),_:1})])]),o("span",oe,[se,o("span",ne,[t(f,{type:"primary",class:"reset_btn"},{icon:a(()=>[re]),default:a(()=>[y("下载")]),_:1})])]),o("span",ce,[t(J,{class:"table_content",data:S.value,stripe:!1,style:{width:"100%"}},{default:a(()=>[t(c,{prop:"case_no",label:"派工编号"}),t(c,{prop:"appointmentStartTime",label:"计划开始时间"}),t(c,{prop:"appointmentEndTime",label:"计划结束时间"}),t(c,{prop:"follower__c",label:"技工名称"}),t(c,{prop:"fieldJobType__c",label:"派工种类"},{default:a(e=>{var p;return[o("div",ie,D(e.row.fieldJobType__c?(p=v.value.find(h=>h.code==e.row.fieldJobType__c))==null?void 0:p.name:"配送派工单"),1)]}),_:1}),t(c,{prop:"createdTime",label:"创建时间"}),t(c,{prop:"stage__c",label:"派工状态"},{default:a(e=>{var p;return[o("div",de,D(e.row.stage__c?(p=k.value.find(h=>h.code==e.row.stage__c))==null?void 0:p.name:"待开始"),1)]}),_:1}),t(c,{prop:"text8",label:"操作",width:"80px"},{default:a(e=>[o("div",{style:{display:"flex","align-items":"center",color:"#165dff",cursor:"pointer"},onClick:p=>B(e.row)}," 查看 ",8,pe)]),_:1})]),_:1},8,["data"]),t(U,{class:"table_pagination","page-size":20,"pager-count":11,layout:"total, prev, pager, next",total:1e3})])])}}}),fe=Q(_e,[["__scopeId","data-v-06f4d428"]]);export{fe as default};