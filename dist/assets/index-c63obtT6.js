import{_ as Ze,a as et,b as tt}from"./tips-DfmWQaVF.js";import{_ as ne}from"./add-CRTT_dyr.js";import{d as at,g as st,r as f,z as lt,a as L,o as ot,y as nt,E as y,c as $,h as e,v as m,j as b,s as T,w as n,q as k,t as N,b as l,F as G,m as K,A as be,e as P,p as it,f as rt,i as h,u as v,x as oe,_ as dt}from"./index-BNw8j_YZ.js";import{f as ct,h as ut,i as pt,j as mt,k as _t,u as ft,n as ge,e as vt}from"./common-DZytvcl-.js";import"./userinfo-CbCawm5q.js";const d=M=>(it("data-v-be79950c"),M=M(),rt(),M),ht={class:"header"},bt=d(()=>e("span",{class:"title"},"任务状态",-1)),gt={class:"step"},yt={class:"item"},Tt={class:"item"},Ct={class:"item"},wt={class:"item"},Vt={class:"item"},kt={class:"task_info"},Nt={class:"title"},Dt={class:"main_field"},xt={class:"row_field"},Pt={class:"field"},St=d(()=>e("span",{class:"label"},"任务编号：",-1)),It={class:"value"},Ot={class:"field"},Et=d(()=>e("span",{class:"label"},"经销商：",-1)),qt={class:"value"},Ut={class:"field"},Lt=d(()=>e("span",{class:"label"},"经销商负责人：",-1)),$t={class:"value"},Jt={class:"row_field"},Rt={class:"field"},Bt=d(()=>e("span",{class:"label"},"客户名称：",-1)),Ft={class:"value"},Yt={class:"field"},Ht=d(()=>e("span",{class:"label"},"当前负责人：",-1)),Mt={class:"value"},zt={class:"field"},At=d(()=>e("span",{class:"label"},"创建时间：",-1)),jt={class:"value"},Wt={class:"row_field"},Gt={class:"field"},Kt=d(()=>e("span",{class:"label"},"客户电话：",-1)),Qt={class:"value"},Xt={class:"field"},Zt=d(()=>e("span",{class:"label"},"客户地址：",-1)),ea={class:"value"},ta=d(()=>e("span",{class:"field"},[e("span",{class:"label"}),e("span",{class:"value"})],-1)),aa={class:"order_status"},sa=d(()=>e("span",{class:"title"},"订单状态",-1)),la={class:"step"},oa={class:"item"},na={class:"related_item_order"},ia=d(()=>e("span",{class:"table_title"},"相关项>订单",-1)),ra={class:"table_content"},da=["onClick"],ca={class:"related_item_invoice"},ua=d(()=>e("span",{class:"table_title"},"相关项>包装清单",-1)),pa={class:"table_content"},ma=["onClick"],_a=d(()=>e("span",null,"查看",-1)),fa=[_a],va={class:"related_item_invoice"},ha=d(()=>e("span",{class:"table_title"},"相关项>派工单",-1)),ba={class:"table_content"},ga={style:{display:"flex","align-items":"center",color:"#165dff",cursor:"pointer"}},ya=["onClick"],Ta={style:{color:"blue"}},Ca={style:{display:"flex","align-items":"center"}},wa={class:"action_list"},Va=d(()=>e("img",{src:Ze,alt:""},null,-1)),ka={class:"right"},Na={class:"userinfo"},Da=d(()=>e("img",{src:et,alt:""},null,-1)),xa={class:"username"},Pa={class:"content"},Sa={class:"date"},Ia=d(()=>e("span",{class:"reply"},"回复",-1)),Oa=d(()=>e("img",{class:"tips",src:tt,alt:""},null,-1)),Ea={class:"deliveryOrderDialog"},qa={class:"step"},Ua={class:"item"},La=d(()=>e("span",{class:"remark"},"选择配送货品的司机",-1)),$a={class:"item"},Ja=d(()=>e("span",{class:"remark"},"如有,请填写关键备注",-1)),Ra={class:"item"},Ba=d(()=>e("span",{class:"remark"},"等待司机配送",-1)),Fa={class:"content"},Ya=d(()=>e("img",{src:ne,alt:""},null,-1)),Ha=[Ya],Ma={class:"dialog-footer"},za={class:"installationOrderDialog"},Aa={class:"step"},ja={class:"item"},Wa=d(()=>e("span",{class:"remark"},"选择负责安装的技工",-1)),Ga={class:"item"},Ka=d(()=>e("span",{class:"remark"},"如有,请填写关键备注",-1)),Qa={class:"item"},Xa=d(()=>e("span",{class:"remark"},"等待现场服务",-1)),Za={class:"content"},es=d(()=>e("img",{src:ne,alt:""},null,-1)),ts=[es],as={style:{width:"300px"}},ss=d(()=>e("span",{class:"custom_item"},[e("img",{src:ne,alt:""})],-1)),ls={class:"dialog-footer"},os={class:"problemReportingDialog"},ns={class:"step"},is={class:"item"},rs=d(()=>e("span",{class:"name"},[b("完善提报信息 "),e("span",{class:"remark"},"完善问题提报的信息")],-1)),ds={class:"item"},cs=d(()=>e("span",{class:"name"},[b("完成创建 "),e("span",{class:"remark"},"等待售服部处理")],-1)),us={class:"content"},ps={class:"dialog-footer"},ms=at({__name:"index",setup(M){const{proxy:O}=st(),ie=f(4),re=f([]),z=new Date,w=lt();w.query.id;const ye=w.query.orderId,de=w.query.status!=null?parseInt(w.query.status.toString(),0)+1:1;w.query.taskType;const S=w.query.mergedOrderNo,E=f({taskid:w.query.id,orderId:w.query.orderId,taskStatus:de,accountName:w.query.accountName,distributorName:w.query.distributorName,followerName:w.query.followerName,createdTime:w.query.createdTime,createdBy:w.query.createdBy}),Te=f([{code:"0",name:"配送派工单"},{code:"1",name:"安装派工单"},{code:"2",name:"维修派工单"}]),g=f(de),D=f(1),x=f(1),ce=f(1),ue=f();f([{code:"1",name:"最高级"},{code:"2",name:"高"},{code:"3",name:"中"},{code:"4",name:"低"}]);let c=L({fieldJobContactName:"",contactTelephone:"",type:"配送派工",remark:"",appointmentStartTime:"",appointmentEndTime:"",haveInstallConditions:!1,fieldJobOrderId:w.query.orderId,fieldJobType__c:0,stage__c:0,name:E.value.accountName+"的配送派工单",fileList:[],filePath:[],followerId:null,address:""});const pe=L({followerId:[{required:!0,message:"Please input username",trigger:"blur"}],fieldJobContactName:[{required:!0,message:"Please input username",trigger:"blur"}],contactTelephone:[{required:!0,message:"Please input phone",trigger:"blur"}],appointmentStartTime:[{required:!0,message:"Please input appointment start time",trigger:"blur"}],appointmentEndTime:[{required:!0,message:"Please input appointment end time",trigger:"blur"}]}),r=L({username:"",phone:"",remark:"",installationTeam:!1,appointmentStartTime:"",appointmentEndTime:"",fileList:[],filePath:[],fieldJobContactName:""}),me=L({username:[{required:!0,message:"Please input username",trigger:"blur"}],phone:[{required:!0,message:"Please input phone",trigger:"blur"}],appointmentStartTime:[{required:!0,message:"Please input appointment start time",trigger:"blur"}],appointmentEndTime:[{required:!0,message:"Please input appointment end time",trigger:"blur"}]}),u=f({}),p=L({orderNo:"",customerName:"",customerPhone:"",desc:"",fileList:[],filePath:[]}),Ce=L({customerName:[{required:!0,message:"Please input customer name",trigger:"blur"}],customerPhone:[{required:!0,message:"Please input customer phone",trigger:"blur"}],desc:[{required:!0,message:"Please input problem description",trigger:"blur"}]}),J=f(!1),R=f(!1),B=f(!1),Q=f([]),_e=f([]),A=f([]),F=f(null),X=f({Content:"application/json",Authorization:"",isImage:"true",needFileId:"true","Trace-Id":""}),fe=f({files:[],name:"files"}),we=f({files:[],name:"files"}),Z=f({files:[],name:"files"}),ee=a=>{D.value=a},te=a=>{x.value=a},Ve=()=>{J.value=!0},ke=()=>{R.value=!0},Ne=()=>{D.value=2},De=()=>{x.value=2},q=f([]),xe=async()=>{console.log(r);let a={fieldJobContactName:u.value.accountName__C==null?"":u.value.accountName__C,contactTelephone:u.value.contactTel==null?"":u.value.contactTel,remark:r.remark,haveInstallConditions:!1,fieldJobOrderId:u.value.neoid,orderNo__c:u.value.po,mergedOrderNo:S??"",name:u.value.accountName__C+"的安装派工单",type:"安装派工",fieldJobType__c:1,stage__c:0,docPicture:r.filePath,appointmentStartTime:r.appointmentStartTime,appointmentEndTime:r.appointmentEndTime,followerId:r.username,address:u.value.customerAddress==null?"":u.value.customerAddress,status:1,source__c:1};ge(a).then(t=>{let o=t.data.data;A.value.push(o),o!=null?(y({message:"新增派工单成功",type:"success"}),R.value=!1,x.value=1,g.value=5,r.username="",r.phone="",r.remark="",r.appointmentStartTime="",r.appointmentEndTime="",r.fileList=[],r.filePath=[],r.fieldJobContactName="",r.contactTelephone=""):y({message:"新增派工单失败",type:"error"})}).catch(t=>{y({message:"请求新增派工单失败，请重试",type:"error"})})},Pe=a=>{O.$router.push({path:"/dispatch_details",query:{id:a.id}})},Se=a=>{O.$router.push({path:"/historical_orders_details",query:{id:a.id,po:a.po,status_c:a.status_c}})},Ie=()=>{let a=c;a.fieldJobContactName=u.value.accountName__C==null?"":u.value.accountName__C.toString(),a.contactTelephone=u.value.contactTel==null?"":u.value.contactTel.toString(),a.address=u.value.customerAddress==null?"":u.value.customerAddress,a.picture=a.filePath,a.goodsPicture=a.filePath,a.name=u.value.accountName__C+"的配送派工单",a.status=1,a.orderNo__c=u.value.po,a.source__c=1,a.fieldJobOrderId=u.value.neoid,a.mergedOrderNo=S??"",ge(a).then(t=>{let o=t.data.data;A.value.push(o),o!=null?y({message:"新增派工单成功",type:"success"}):y({message:"新增派工单失败",type:"error"}),Object.keys(c).forEach(i=>{!i.includes("type")&&!i.includes("haveInstallConditions")&&i!=="fieldJobOrderId"&&i!=="fieldJobType__c"&&i!=="stage__c"&&i!=="name"&&(c[i]=""),i==="haveInstallConditions"&&(c[i]=!1),(i=="fileList"||i=="filePath")&&(c[i]=[])})}).catch(t=>{y({message:"请求新增派工单失败，请重试",type:"error"}),Object.keys(c).forEach(o=>{o!=="type"&&o!=="haveInstallConditions"&&o!=="fieldJobOrderId"&&o!=="fieldJobType__c"&&o!=="stage__c"&&o!=="name"&&(c[o]=""),o=="haveInstallConditions"&&(c[o]=!1),(o=="fileList"||o=="filePath")&&(c[o]=[])}),console.error("请求新增派工单失败:",t)}),J.value=!1,D.value=1},Oe=()=>{B.value=!0},Ee=()=>{console.log("problemReportingForm",p);for(let t in p)if(t!="orderNo"&&t!="fileList"&&t!="filePath"&&p[t]==""){O.$message.error("必填字段不能为空!");return}let a={orderNeoId:u.value.neoid,customerName:p.customerName,phone:p.customerPhone,problemDescription:p.desc,picture:p.filePath,caseStatus:"1",questionType:1,complaintSourceC:4,caseSource:11,clientCaseStatusC:1};vt(a).then(t=>{let o=t.data;o.code=="success"?(p.orderNo="",p.customerName="",p.customerPhone="",p.desc="",p.fileList=[],p.filePath=[],B.value=!1,O.$message.success("提交成功!")):O.$message.error(o==null?void 0:o.message)})},qe=()=>{be.prompt("请填写评论内容","发起评论",{inputPattern:/\S/,inputErrorMessage:"评论内容不能为空!",confirmButtonText:"确认",cancelButtonText:"取消"}).then(({value:a})=>{re.value.push({userName:"经销商",text:a,date:new Date().toLocaleString()})}).catch(()=>{})};ot(()=>{Je(!1,ye),Be(!1);const a="100%"/"100%";if(window.addEventListener("resize",nt.debounce(function(){const o=document.body.clientHeight,i=document.body.clientWidth;if(i<1680){const C=o/i;let[I,U]=[0,0];if(C<a){I=o/1080;const _=1920*I,V=i-_;U=V>0?`translate(${V/2}px, 0)`:""}else{I=(i-20)/1920;const _=1080*I,V=o-_;U=V>0?`translate(0, ${V/2}px)`:""}F.value&&(F.value.style.height=`calc(${document.body.clientHeight/I}px - ${40*I}px - 10px)`)}else F.value&&(F.value.style.height=`calc(${document.body.clientHeight}px - 40px)`)},0)),document.createEvent){var t=document.createEvent("HTMLEvents");t.initEvent("resize",!0,!0),window.dispatchEvent(t)}else typeof Event=="function"&&window.dispatchEvent(new Event("resize"))});const Ue=a=>{if(console.log(a),a.code=="success"){let t=a.data.map(o=>o.fileId);t[0]&&c.filePath.push(t[0])}},Le=a=>{a.response},$e=a=>{if(a.size/1024/1024>2)return y.error("上传图片大小不能超过80MB!"),!1;fe.value.files=[a]},Je=(a,t)=>{if(ct(t).then(o=>{let i=o.data.data;i!=null?(u.value=i,p.orderNo=u.value.po,Re(!1,u.value.neoid),S&&S!=""?ve(!1,S):(ve(!1,u.value.po),Q.value.push(i)),a&&y({message:"查询成功",type:"success"})):a&&y({message:"获取数据失败",type:"error"})}),S&&S!=""){let o={orderNo:S.toString().split(";")};ut(o).then(i=>{let C=i.data.data;C!=null&&(console.log("orderlist:",C),Q.value=C)})}},Re=(a,t)=>{if(t==null)return;pt({fieldJobOrderId:t}).then(i=>{let C=i.data.data;C!=null?(A.value=C,a&&y({message:"查询成功",type:"success"})):a&&y({message:"获取数据失败",type:"error"})})},ve=(a,t)=>{if(t==null)return;let o={orderNo:t.split(";")};mt(o).then(i=>{let C=i.data.data;C!=null?(_e.value=C,a&&y({message:"查询成功",type:"success"})):a&&y({message:"获取数据失败",type:"error"})})},Be=a=>{_t({userType:1,name:"",phone:""}).then(o=>{let i=o.data.data;i!=null&&i.length>0?(q.value=i,a&&y({message:"查询成功",type:"success"})):a&&y({message:"获取数据失败",type:"error"})})},Fe=a=>{if(console.log(a),a.code=="success"){let t=a.data.map(o=>o.fileId);t[0]&&r.filePath.push(t[0])}},Ye=a=>{a.response},He=a=>{Z.value.files=[a]},Me=a=>{if(console.log(a),a.code=="success"){let t=a.data.map(o=>o.fileId);t[0]&&p.filePath.push(t[0])}},ze=a=>{a.response},Ae=a=>{if(a.size/1024/1024>2)return y.error("上传图片大小不能超过80MB!"),!1;Z.value.files=[a]},je=a=>{let t=q.value.find(o=>o.id==a);t&&(r.fieldJobContactName=t.name,r.phone=t.phone)},We=a=>{let t=q.value.find(o=>o.id==a);t&&(c.fieldJobContactName=t.name,c.contactTelephone=t.phone)},Ge=a=>{let t=q.value.find(o=>o.id==a);t&&(p.customerName=t.name,p.customerPhone=t.phone)},Ke=()=>{if(g.value>=4){O.$message.warning("配送已完成，无法点击配送");return}be.confirm("确认到货后，再进行派单?","配送",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(()=>{let a={id:E.value.taskid,status:3};ft(a).then(t=>{(t.data.code="success")&&(g.value=4)})}).catch(()=>{})},j=a=>a.getTime()<Date.now()-24*60*60*1e3,he=()=>{O.$router.push("my_personnel")};return(a,t)=>{const o=P("el-button"),i=P("el-table-column"),C=P("el-table"),I=P("el-option"),U=P("el-select"),_=P("el-form-item"),V=P("el-input"),W=P("el-date-picker"),Y=P("el-form"),ae=P("el-icon"),se=P("el-upload"),le=P("el-dialog"),Qe=P("el-checkbox");return h(),$("div",{ref_key:"mainRef",ref:F,class:"main"},[e("span",ht,[bt,e("span",gt,[e("span",yt,[e("span",{class:m(g.value==1?"num_selected":"num")},"1",2),e("span",{class:m(g.value>=1?"name_selected":"name")},"待处理",2)]),e("span",Tt,[e("span",{class:m(g.value==3?"num_selected":"num")},"2",2),e("span",{class:m(g.value>=3?"name_selected":"name")},"入库",2)]),e("span",Ct,[e("span",{onClick:Ke,class:m(g.value==4?"num_selected":"num")},"3",2),e("span",{class:m(g.value>=4?"name_selected":"name")},"配送",2)]),e("span",wt,[e("span",{class:m(g.value==5?"num_selected":"num")},"4",2),e("span",{class:m(g.value>=5?"name_selected":"name")},"安装",2)]),e("span",Vt,[e("span",{class:m(g.value==6?"num_selected":"num")},"5",2),e("span",{class:m(g.value>=6?"name_selected":"name")},"完成",2)])])]),e("span",kt,[e("span",Nt,[b("任务详情 "),g.value>=5?(h(),T(o,{key:0,type:"primary",class:"primary_blue_btn"},{default:n(()=>[b("已派工配送")]),_:1})):k("",!0),g.value==6?(h(),T(o,{key:1,type:"primary",class:"primary_green_btn"},{default:n(()=>[b("已派工安装")]),_:1})):k("",!0)]),e("span",Dt,[e("span",xt,[e("span",Pt,[St,e("span",It,N(E.value.taskid),1),k("",!0)]),e("span",Ot,[Et,e("span",qt,N(E.value.distributorName),1)]),e("span",Ut,[Lt,e("span",$t,N(E.value.followerName),1)])]),e("span",Jt,[e("span",Rt,[Bt,e("span",Ft,N(u.value.accountName__C),1)]),e("span",Yt,[Ht,e("span",Mt,N(E.value.createdBy),1)]),e("span",zt,[At,e("span",jt,N(E.value.createdTime),1)])]),e("span",Wt,[e("span",Gt,[Kt,e("span",Qt,N(u.value.contactTel),1)]),e("span",Xt,[Zt,e("span",ea,N(u.value.customerAddress),1)]),ta])])]),e("span",aa,[sa,e("span",la,[e("span",oa,[e("span",{class:m(ie.value==1?"num_selected":"num")},"1",2),e("span",{class:m(ie.value>=1?"name_selected":"name")},N(u.value.status__c),3)])])]),e("span",na,[ia,e("span",ra,[l(C,{data:Q.value,stripe:!1,style:{width:"100%"},"max-height":"115"},{default:n(()=>[l(i,{prop:"id",label:"操作",width:"80px"},{default:n(s=>[e("div",{style:{display:"flex","align-items":"center",color:"#165dff",cursor:"pointer"},onClick:H=>Se(s.row)}," 查看 ",8,da)]),_:1}),l(i,{prop:"po",label:"订单编号"}),l(i,{prop:"orderFlow",label:"订单流程"}),l(i,{prop:"estimatedDeliveryDays",label:"交期天数"}),l(i,{prop:"orderDate",label:"订货日期"}),l(i,{prop:"planedDeliveryDate",label:"计划交货日期"}),l(i,{prop:"createdTime",label:"创建时间"})]),_:1},8,["data"])])]),e("span",ca,[ua,e("span",pa,[l(C,{data:_e.value,stripe:!1,style:{width:"100%"},"max-height":"115"},{default:n(()=>[l(i,{prop:"id",label:"操作",width:"160px"},{default:n(s=>[e("div",{style:{display:"flex","align-items":"center",color:"#165dff",cursor:"pointer"},onClick:H=>console.log(s)},fa,8,ma)]),_:1}),l(i,{prop:"name",label:"发货单编号"}),l(i,{prop:"status",label:"发货单状态"}),l(i,{prop:"shipVia",label:"出库方式"}),l(i,{prop:"shipCarrier",label:"供应基地"}),l(i,{prop:"createdTime",label:"创建时间"})]),_:1},8,["data"])])]),e("span",va,[ha,e("span",ba,[l(C,{data:A.value,stripe:!1,style:{width:"100%"},"max-height":"115"},{default:n(()=>[l(i,{prop:"view",label:"操作",width:"160px"},{default:n(s=>[e("div",ga,[e("span",{onClick:H=>Pe(s.row)},"查看",8,ya)])]),_:1}),l(i,{prop:"caseNo",label:"派工单编号"}),l(i,{prop:"stage__c",label:"状态"},{default:n(s=>[e("span",Ta,N(s.row.stage__c=="0"?"待开始":s.row.stage__c=="1"?"进行中":"已完成"),1)]),_:1}),l(i,{prop:"fieldJobType__c",label:"派工种类"},{default:n(s=>{var H;return[e("div",Ca,N(s.row.fieldJobType__c?(H=Te.value.find(Xe=>Xe.code==s.row.fieldJobType__c))==null?void 0:H.name:"配送派工单"),1)]}),_:1}),l(i,{prop:"appointmentStartTime",label:"计划开始时间"}),l(i,{prop:"appointmentEndTime",label:"计划结束时间"}),l(i,{prop:"createdTime",label:"创建时间"})]),_:1},8,["data"])])]),e("div",wa,[e("div",{class:"left"},[Va,e("span",{class:"initiate_comments",onClick:qe},"发起评论")]),e("div",ka,[g.value==4?(h(),T(o,{key:0,type:"primary",onClick:Ve,class:"primary_btn"},{default:n(()=>[b("创建配送派工单")]),_:1})):k("",!0),g.value==5?(h(),T(o,{key:1,type:"primary",onClick:ke,class:"primary_btn"},{default:n(()=>[b("创建安装派工单")]),_:1})):k("",!0),l(o,{type:"primary",onClick:Oe,class:"primary_btn"},{default:n(()=>[b("问题提报")]),_:1})])]),(h(!0),$(G,null,K(re.value,s=>(h(),$("div",{class:"comment",key:s.date},[e("div",Na,[Da,e("span",xa,N(s.userName),1)]),e("div",Pa,N(s.text),1),e("div",Sa,N(s.date),1),Ia,Oa]))),128)),e("div",Ea,[l(le,{modelValue:J.value,"onUpdate:modelValue":t[11]||(t[11]=s=>J.value=s),title:"新建配送派工单",width:"80%","show-close":!1},{footer:n(()=>[e("div",Ma,[l(o,{class:"cancel_btn",onClick:t[10]||(t[10]=s=>J.value=!1)},{default:n(()=>[b("取消")]),_:1}),D.value==1?(h(),T(o,{key:0,type:"primary",class:"primary_btn",onClick:Ne},{default:n(()=>[b("下一步")]),_:1})):k("",!0),D.value==2?(h(),T(o,{key:1,type:"primary",class:"primary_btn",onClick:Ie},{default:n(()=>[b("完成")]),_:1})):k("",!0)])]),default:n(()=>[e("div",qa,[e("span",Ua,[e("span",{onClick:t[0]||(t[0]=s=>ee(1)),class:m(D.value==1?"num_selected":"num")},"1",2),e("span",{class:m(D.value>=1?"name_selected":"name")},[b("选择配送司机 "),La],2)]),e("span",$a,[e("span",{onClick:t[1]||(t[1]=s=>ee(2)),class:m(D.value==2?"num_selected":"num")},"2",2),e("span",{class:m(D.value>=2?"name_selected":"name")},[b("输入派工单注意事项 "),Ja],2)]),e("span",Ra,[e("span",{onClick:t[2]||(t[2]=s=>ee(3)),class:m(D.value==3?"num_selected":"num")},"3",2),e("span",{class:m(D.value>=3?"name_selected":"name")},[b("完成创建 "),Ba],2)])]),e("div",Fa,[D.value==1?(h(),T(Y,{key:0,model:v(c),rules:pe,ref_key:"deliveryOrderFormRef",ref:ue,"label-width":"90px","label-position":"left"},{default:n(()=>[l(_,{label:"人员名称",prop:"followerId"},{default:n(()=>[l(U,{modelValue:v(c).followerId,"onUpdate:modelValue":t[3]||(t[3]=s=>v(c).followerId=s),onChange:We,placeholder:"查找或输入服务人员姓名"},{default:n(()=>[(h(!0),$(G,null,K(q.value,s=>(h(),T(I,{key:s.name,label:s.name,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),e("span",{class:"custom_item",onClick:he},Ha)]),_:1}),l(_,{label:"联系方式",prop:"contactTelephone"},{default:n(()=>[l(V,{modelValue:v(c).contactTelephone,"onUpdate:modelValue":t[4]||(t[4]=s=>v(c).contactTelephone=s),placeholder:"查找或输入配送司机手机号码"},null,8,["modelValue"])]),_:1}),l(_,{label:"预约开始",prop:"appointmentStartTime"},{default:n(()=>[l(W,{modelValue:v(c).appointmentStartTime,"onUpdate:modelValue":t[5]||(t[5]=s=>v(c).appointmentStartTime=s),type:"datetime",placeholder:"日期/时间","value-format":"YYYY-MM-DD HH:mm:ss","default-time":v(z),"disabled-date":j},null,8,["modelValue","default-time"])]),_:1}),l(_,{label:"预约结束",prop:"appointmentEndTime"},{default:n(()=>[l(W,{modelValue:v(c).appointmentEndTime,"onUpdate:modelValue":t[6]||(t[6]=s=>v(c).appointmentEndTime=s),type:"datetime",placeholder:"日期/时间","value-format":"YYYY-MM-DD HH:mm:ss","default-time":v(z),"disabled-date":j},null,8,["modelValue","default-time"])]),_:1})]),_:1},8,["model","rules"])):k("",!0),D.value==2?(h(),T(Y,{key:1,model:v(c),rules:pe,ref_key:"deliveryOrderFormRef",ref:ue,"label-width":"90px","label-position":"left"},{default:n(()=>[l(_,{label:"派工类型",prop:"type"},{default:n(()=>[l(V,{disabled:"",placeholder:"配送派工",modelValue:v(c).type,"onUpdate:modelValue":t[7]||(t[7]=s=>v(c).type=s)},null,8,["modelValue"])]),_:1}),l(_,{label:"派工单备注",class:"customLayout"},{default:n(()=>[l(V,{modelValue:v(c).remark,"onUpdate:modelValue":t[8]||(t[8]=s=>v(c).remark=s),rows:5,type:"textarea",maxlength:"500",placeholder:"请填写派工单备注","show-word-limit":""},null,8,["modelValue"])]),_:1}),l(_,{label:"上传图片",class:"custom_upload"},{default:n(()=>[l(se,{"on-success":Ue,"on-remove":Le,"auto-upload":!0,data:fe.value,headers:X.value,"before-upload":$e,"file-list":v(c).fileList,"onUpdate:fileList":t[9]||(t[9]=s=>v(c).fileList=s),class:"avatar-uploader",action:"https://sh.mengtian.com.cn:9595/md/api/common/file/upload","show-file-list":!0,"list-type":"picture-card"},{default:n(()=>[l(ae,{class:"avatar-uploader-icon"},{default:n(()=>[l(v(oe))]),_:1})]),_:1},8,["data","headers","file-list"])]),_:1})]),_:1},8,["model","rules"])):k("",!0)])]),_:1},8,["modelValue"])]),e("div",za,[l(le,{modelValue:R.value,"onUpdate:modelValue":t[22]||(t[22]=s=>R.value=s),title:"新建安装派工单",width:"80%","show-close":!1},{footer:n(()=>[e("div",ls,[l(o,{class:"cancel_btn",onClick:t[21]||(t[21]=s=>R.value=!1)},{default:n(()=>[b("取消")]),_:1}),x.value==1?(h(),T(o,{key:0,type:"primary",class:"primary_btn",onClick:De},{default:n(()=>[b("下一步")]),_:1})):k("",!0),x.value==2?(h(),T(o,{key:1,type:"primary",class:"primary_btn",onClick:xe},{default:n(()=>[b("完成")]),_:1})):k("",!0)])]),default:n(()=>[e("div",Aa,[e("span",ja,[e("span",{onClick:t[12]||(t[12]=s=>te(1)),class:m(x.value==1?"num_selected":"num")},"1",2),e("span",{class:m(x.value>=1?"name_selected":"name")},[b("选择安装技工 "),Wa],2)]),e("span",Ga,[e("span",{onClick:t[13]||(t[13]=s=>te(2)),class:m(x.value==2?"num_selected":"num")},"2",2),e("span",{class:m(x.value>=2?"name_selected":"name")},[b("输入安装派工单注意事项 "),Ka],2)]),e("span",Qa,[e("span",{onClick:t[14]||(t[14]=s=>te(3)),class:m(x.value==3?"num_selected":"num")},"3",2),e("span",{class:m(x.value>=3?"name_selected":"name")},[b("完成创建 "),Xa],2)])]),e("div",Za,[x.value==1?(h(),T(Y,{key:0,model:r,rules:me,"label-width":"80px","label-position":"left"},{default:n(()=>[l(_,{label:"人员名称",prop:"username"},{default:n(()=>[l(U,{modelValue:r.username,"onUpdate:modelValue":t[15]||(t[15]=s=>r.username=s),onChange:je,placeholder:"查找或输入服务人员姓名"},{default:n(()=>[(h(!0),$(G,null,K(q.value,s=>(h(),T(I,{key:s.name,label:s.name,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),e("span",{class:"custom_item1",onClick:he},ts)]),_:1}),l(_,{label:"联系方式",prop:"phone"},{default:n(()=>[l(V,{placeholder:"输入联系方式",modelValue:r.phone,"onUpdate:modelValue":t[16]||(t[16]=s=>r.phone=s)},null,8,["modelValue"])]),_:1}),l(_,{label:"预约开始",prop:"appointmentStartTime"},{default:n(()=>[l(W,{modelValue:r.appointmentStartTime,"onUpdate:modelValue":t[17]||(t[17]=s=>r.appointmentStartTime=s),type:"datetime",placeholder:"日期/时间","value-format":"YYYY-MM-DD HH:mm:ss",":default-time":v(z),"disabled-date":j},null,8,["modelValue",":default-time"])]),_:1}),l(_,{label:"预约结束",prop:"appointmentEndTime"},{default:n(()=>[l(W,{modelValue:r.appointmentEndTime,"onUpdate:modelValue":t[18]||(t[18]=s=>r.appointmentEndTime=s),type:"datetime",placeholder:"日期/时间","value-format":"YYYY-MM-DD HH:mm:ss","default-time":v(z),"disabled-date":j},null,8,["modelValue","default-time"])]),_:1}),l(_,{label:"安装小组"},{default:n(()=>[e("span",as,[l(Qe,{modelValue:r.installationTeam,"onUpdate:modelValue":t[19]||(t[19]=s=>r.installationTeam=s)},null,8,["modelValue"])])]),_:1}),r.installationTeam?(h(),T(_,{key:0,label:"添加组员"},{default:n(()=>[ss]),_:1})):k("",!0)]),_:1},8,["model","rules"])):k("",!0),x.value==2?(h(),T(Y,{key:1,model:r,rules:me,"label-width":"90px","label-position":"left"},{default:n(()=>[l(_,{label:"派工单备注",class:"customLayout"},{default:n(()=>[l(V,{modelValue:r.remark,"onUpdate:modelValue":t[20]||(t[20]=s=>r.remark=s),rows:5,type:"textarea",maxlength:"500",placeholder:"请填写派工单备注","show-word-limit":""},null,8,["modelValue"])]),_:1}),l(_,{label:"上传图片",class:"custom_upload"},{default:n(()=>[l(se,{"on-success":Fe,"on-remove":ze,"auto-upload":!0,data:we.value,headers:X.value,"before-upload":Ae,"file-list":r.fileList,"list-type":"picture-card",class:"avatar-uploader",action:"https://sh.mengtian.com.cn:9595/md/api/common/file/upload","show-file-list":!0},{default:n(()=>[l(ae,{class:"avatar-uploader-icon"},{default:n(()=>[l(v(oe))]),_:1})]),_:1},8,["data","headers","file-list"])]),_:1})]),_:1},8,["model","rules"])):k("",!0)])]),_:1},8,["modelValue"])]),e("div",os,[l(le,{modelValue:B.value,"onUpdate:modelValue":t[28]||(t[28]=s=>B.value=s),title:"问题提报",width:"80%","show-close":!1},{footer:n(()=>[e("div",ps,[l(o,{class:"cancel_btn",onClick:t[27]||(t[27]=s=>B.value=!1)},{default:n(()=>[b("取消")]),_:1}),l(o,{type:"primary",class:"primary_btn",onClick:Ee},{default:n(()=>[b("提交")]),_:1})])]),default:n(()=>[e("span",ns,[e("span",is,[e("span",{class:m(ce.value==1?"num_selected":"num")},"1",2),rs]),e("span",ds,[e("span",{class:m(ce.value==2?"num_selected":"num")},"2",2),cs])]),e("div",us,[l(Y,{model:p,rules:Ce,"label-width":"90px","label-position":"left"},{default:n(()=>[l(_,{label:"订单编号",prop:"orderNo"},{default:n(()=>[l(V,{placeholder:"请选择订单编号",modelValue:p.orderNo,"onUpdate:modelValue":t[23]||(t[23]=s=>p.orderNo=s)},null,8,["modelValue"])]),_:1}),l(_,{label:"客户姓名",prop:"customerName"},{default:n(()=>[l(U,{modelValue:p.customerName,"onUpdate:modelValue":t[24]||(t[24]=s=>p.customerName=s),onChange:Ge,placeholder:"查找或选择服务人员姓名"},{default:n(()=>[(h(!0),$(G,null,K(q.value,s=>(h(),T(I,{key:s.name,label:s.name,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(_,{label:"客户电话",prop:"customerPhone"},{default:n(()=>[l(V,{placeholder:"请输入客户电话",modelValue:p.customerPhone,"onUpdate:modelValue":t[25]||(t[25]=s=>p.customerPhone=s)},null,8,["modelValue"])]),_:1}),l(_,{label:"问题描述",class:"customLayout",prop:"desc"},{default:n(()=>[l(V,{modelValue:p.desc,"onUpdate:modelValue":t[26]||(t[26]=s=>p.desc=s),rows:5,type:"textarea",maxlength:"500",placeholder:"请输入问题描述","show-word-limit":""},null,8,["modelValue"])]),_:1}),l(_,{label:"上传图片",class:"custom_upload"},{default:n(()=>[l(se,{"on-success":Me,"on-remove":Ye,"auto-upload":!0,data:Z.value,headers:X.value,"before-upload":He,"file-list":p.fileList,"list-type":"picture-card",class:"avatar-uploader",action:"https://sh.mengtian.com.cn:9595/md/api/common/file/upload","show-file-list":!0},{default:n(()=>[l(ae,{class:"avatar-uploader-icon"},{default:n(()=>[l(v(oe))]),_:1})]),_:1},8,["data","headers","file-list"])]),_:1})]),_:1},8,["model","rules"])])]),_:1},8,["modelValue"])])],512)}}}),gs=dt(ms,[["__scopeId","data-v-be79950c"]]);export{gs as default};