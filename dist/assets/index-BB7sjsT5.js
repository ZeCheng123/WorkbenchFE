import{_ as ae,a as te,b as oe,c as se}from"./download-B3fRz18S.js";import{_ as ne}from"./plus-B8sn_dc4.js";import{d as re,g as ue,r as u,a as ce,k as de,c as k,b as o,e as l,w as t,f as c,p as ie,h as pe,o as h,F as U,v as $,n as R,i as _,x as z,s as O,u as me,t as _e,_ as fe}from"./index-BJQKT2Ll.js";import{c as ve,d as be,e as ge}from"./common-BMFbHTFR.js";const p=N=>(ie("data-v-1e453575"),N=N(),pe(),N),he={class:"main"},Ne=p(()=>o("span",{class:"header"},[o("span",{class:"title"},"服务评价")],-1)),Ve={class:"search"},ye={class:"left"},Pe=p(()=>o("span",{style:{width:"336px",height:"32px"}},null,-1)),Se={class:"right"},xe=p(()=>o("img",{src:te,alt:""},null,-1)),we=p(()=>o("img",{src:oe,alt:""},null,-1)),ke={class:"table_header"},Ce=p(()=>o("span",{class:"left"},[o("img",{src:ae,alt:""}),o("span",{class:"title"})],-1)),De={class:"right"},Ie=p(()=>o("img",{src:ne,alt:""},null,-1)),Le=p(()=>o("img",{src:se,alt:""},null,-1)),Ue={class:"table"},$e={style:{display:"flex","align-items":"center"}},Re={style:{display:"flex","align-items":"center"}},ze=["onClick"],Oe={class:"problemReportingDialog"},Te={class:"step"},Be={class:"item"},Fe=p(()=>o("span",{class:"name"},[_("完善提报信息 "),o("span",{class:"remark"},"完善问题提报的信息")],-1)),qe={class:"item"},Ae=p(()=>o("span",{class:"name"},[_("完成创建 "),o("span",{class:"remark"},"等待售服部处理")],-1)),je={class:"content"},Me={class:"dialog-footer"},Ee=re({__name:"index",setup(N){const{proxy:f}=ue(),V=u({pageIndex:0,pageSize:100,total:0}),T=u({Content:"application/json",Authorization:"",isImage:"true",needFileId:"true","Trace-Id":""}),C=u({files:[],name:"files"}),d=ce({problemNo:"",customerName:"",customerPhone:"",filterMethod:"",createDate:[],orderStatus:""});u([{value:"all",label:"全部"}]);const B=u([{value:"all",label:"全部"}]),F=u([{name:"品质",code:"1"},{name:"交期",code:"2"},{name:"服务",code:"3"},{name:"销售",code:"4"}]),q=u([{name:"待分配",code:"1"},{name:"待处理",code:"2"},{name:"处理中",code:"3"},{name:"待回复",code:"4"},{name:"已完成",code:"4"}]),g=u(!1),D=u(1),n=u({orderNo:"",customerName:"",customerPhone:"",desc:"",fileList:[],filePath:[]}),A=u({customerName:[{required:!0,message:"Please input customer name",trigger:"blur"}],customerPhone:[{required:!0,message:"Please input customer phone",trigger:"blur"}],desc:[{required:!0,message:"Please input problem description",trigger:"blur"}]}),y=u([]),P=u([]);de(()=>{setTimeout(()=>{S(),G()},500)});const j=r=>{let e=r.id,s=r.neoid;f.$router.push(`/problem_report_details?id=${e}&neoid=${s}`)},M=()=>{g.value=!0},E=()=>{for(let e in n.value)if(e!="fileList"&&e!="orderNo"&&n.value[e]==""){f.$message.error("必填字段不能为空!");return}let r={caseNo:n.value.orderNo,caseAccountId:n.value.customerName,phone:n.value.customerPhone,problemDescription:n.value.desc,picture:n.value.filePath.join(";"),caseStatus:"1"};ge(r).then(e=>{let s=e.data;s.code=="success"?(n.value={orderNo:"",customerName:"",customerPhone:"",desc:"",fileList:[],filePath:[]},g.value=!1,f.$message.success("提交成功!"),S()):f.$message.error(s==null?void 0:s.message)})},S=()=>{ve({caseStatus:"",caseNo:"",name:""}).then(e=>{let s=e.data;s.code=="success"?(y.value=s.data,V.value={pageIndex:0,pageSize:100,total:s.data.length}):(f.$message.error(s==null?void 0:s.message),y.value=[],V.value={pageIndex:0,pageSize:100,total:0})})},G=()=>{be({deliveryDate:"",status__c:"",orderType__c:"",transactionDate:"",po:"",accountName:"",accountPhone:""}).then(e=>{let s=e.data;s.code=="success"?P.value=s.data:f.$message.error(s==null?void 0:s.message)})},H=r=>{let e=P.value.find(s=>s.po==r);e&&(n.value.customerName=e.accountName,n.value.customerPhone=e.accountPhone)},J=r=>{if(console.log(r),r.code=="success"){let e=r.data.map(s=>s.fileUrl);n.value.filePath=n.value.filePath.concat(e)}},K=r=>{var e=r.response;console.log(e)},Q=r=>{C.value.files.push(r)};return(r,e)=>{const s=c("el-input"),i=c("el-form-item"),x=c("el-form"),W=c("el-date-picker"),I=c("el-option"),L=c("el-select"),v=c("el-button"),m=c("el-table-column"),X=c("el-table"),Y=c("el-pagination"),Z=c("el-icon"),ee=c("el-upload"),le=c("el-dialog");return h(),k("div",he,[Ne,o("span",Ve,[o("span",ye,[l(x,{model:d,rules:r.rule,"label-width":"80px","label-position":"left"},{default:t(()=>[l(i,{label:"问题编号"},{default:t(()=>[l(s,{placeholder:"请输入问题编号",modelValue:d.problemNo,"onUpdate:modelValue":e[0]||(e[0]=a=>d.problemNo=a)},null,8,["modelValue"])]),_:1}),l(i,{label:"客户名称"},{default:t(()=>[l(s,{placeholder:"输入客户名称",modelValue:d.customerName,"onUpdate:modelValue":e[1]||(e[1]=a=>d.customerName=a)},null,8,["modelValue"])]),_:1}),l(i,{label:"客户电话"},{default:t(()=>[l(s,{placeholder:"请输入客户电话",modelValue:d.customerName,"onUpdate:modelValue":e[2]||(e[2]=a=>d.customerName=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),l(x,{model:d,rules:r.rule,"label-width":"80px","label-position":"left"},{default:t(()=>[l(i,{label:"创建时间"},{default:t(()=>[l(W,{modelValue:d.createDate,"onUpdate:modelValue":e[3]||(e[3]=a=>d.createDate=a),type:"daterange","range-separator":"~","start-placeholder":"开始时间","end-placeholder":"结束时间"},null,8,["modelValue"])]),_:1}),l(i,{label:"订单状态"},{default:t(()=>[l(L,{modelValue:d.orderStatus,"onUpdate:modelValue":e[4]||(e[4]=a=>d.orderStatus=a),placeholder:"请选择订单状态"},{default:t(()=>[(h(!0),k(U,null,$(B.value,a=>(h(),R(I,{key:a.value,label:a.label,value:a.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),Pe]),_:1},8,["model","rules"])]),o("span",Se,[l(v,{type:"primary",onClick:S,class:"search_btn"},{icon:t(()=>[xe]),default:t(()=>[_("查询")]),_:1}),l(v,{type:"primary",class:"reset_btn"},{icon:t(()=>[we]),default:t(()=>[_("重置")]),_:1})])]),o("span",ke,[Ce,o("span",De,[l(v,{onClick:M,type:"primary",class:"search_btn"},{icon:t(()=>[Ie]),default:t(()=>[_("新建")]),_:1}),l(v,{type:"primary",class:"reset_btn"},{icon:t(()=>[Le]),default:t(()=>[_("下载")]),_:1})])]),o("span",Ue,[l(X,{class:"table_content",data:y.value,stripe:!1,style:{width:"100%"}},{default:t(()=>[l(m,{prop:"caseNo",label:"问题编号"}),l(m,{prop:"caseAccountId",label:"客户姓名"}),l(m,{prop:"problemDescription",label:"问题描述"}),l(m,{prop:"sourceOfProblem",label:"来源"},{default:t(a=>{var b;return[o("div",$e,z(a.row.sourceOfProblem?(b=F.value.find(w=>w.code==a.row.sourceOfProblem))==null?void 0:b.name:""),1)]}),_:1}),l(m,{prop:"distributorName",label:"提报人"}),l(m,{prop:"actualResolutionDate",label:"创建时间"}),l(m,{prop:"caseStatus",label:"问题状态"},{default:t(a=>{var b;return[o("div",Re,z(a.row.caseStatus?(b=q.value.find(w=>w.code==a.row.caseStatus))==null?void 0:b.name:""),1)]}),_:1}),l(m,{prop:"",label:"操作",width:"80px"},{default:t(a=>[o("div",{style:{display:"flex","align-items":"center",color:"#165dff",cursor:"pointer"},onClick:b=>j(a.row)}," 查看 ",8,ze)]),_:1})]),_:1},8,["data"]),l(Y,{class:"table_pagination","page-size":V.value.pageSize,"pager-count":5,layout:"total, prev, pager, next",total:V.value.total},null,8,["page-size","total"])]),o("div",Oe,[l(le,{modelValue:g.value,"onUpdate:modelValue":e[11]||(e[11]=a=>g.value=a),title:"问题提报",width:"80%","show-close":!1},{footer:t(()=>[o("div",Me,[l(v,{class:"cancel_btn",onClick:e[10]||(e[10]=a=>g.value=!1)},{default:t(()=>[_("取消")]),_:1}),l(v,{type:"primary",class:"primary_btn",onClick:E},{default:t(()=>[_("提交")]),_:1})])]),default:t(()=>[o("span",Te,[o("span",Be,[o("span",{class:O(D.value==1?"num_selected":"num")},"1",2),Fe]),o("span",qe,[o("span",{class:O(D.value==2?"num_selected":"num")},"2",2),Ae])]),o("div",je,[l(x,{model:n.value,rules:A.value,"label-width":"90px","label-position":"left"},{default:t(()=>[l(i,{label:"订单编号",prop:"orderNo"},{default:t(()=>[l(L,{modelValue:n.value.orderNo,"onUpdate:modelValue":e[5]||(e[5]=a=>n.value.orderNo=a),filterable:"",onChange:H,placeholder:"请选择订单编号"},{default:t(()=>[(h(!0),k(U,null,$(P.value,a=>(h(),R(I,{key:a.po,label:a.po,value:a.po},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(i,{label:"客户姓名",prop:"customerName"},{default:t(()=>[l(s,{placeholder:"请输入客户姓名",modelValue:n.value.customerName,"onUpdate:modelValue":e[6]||(e[6]=a=>n.value.customerName=a)},null,8,["modelValue"])]),_:1}),l(i,{label:"客户电话",prop:"customerPhone"},{default:t(()=>[l(s,{placeholder:"请输入客户电话",modelValue:n.value.customerPhone,"onUpdate:modelValue":e[7]||(e[7]=a=>n.value.customerPhone=a)},null,8,["modelValue"])]),_:1}),l(i,{label:"问题描述",class:"customLayout",prop:"desc"},{default:t(()=>[l(s,{modelValue:n.value.desc,"onUpdate:modelValue":e[8]||(e[8]=a=>n.value.desc=a),rows:5,type:"textarea",maxlength:"500",placeholder:"请输入问题描述","show-word-limit":""},null,8,["modelValue"])]),_:1}),l(i,{label:"上传图片",class:"custom_upload"},{default:t(()=>[l(ee,{"on-success":J,"on-remove":K,"auto-upload":!0,data:C.value,headers:T.value,"before-upload":Q,"list-type":"picture-card",class:"avatar-uploader",action:"https://sh.mengtian.com.cn:9595/md/api/common/file/upload","show-file-list":!0,"file-list":n.value.fileList,"onUpdate:fileList":e[9]||(e[9]=a=>n.value.fileList=a)},{default:t(()=>[l(Z,null,{default:t(()=>[l(me(_e))]),_:1})]),_:1},8,["data","headers","file-list"])]),_:1})]),_:1},8,["model","rules"])])]),_:1},8,["modelValue"])])])}}}),Qe=fe(Ee,[["__scopeId","data-v-1e453575"]]);export{Qe as default};
