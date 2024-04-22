import{_ as O,a as P,b as j}from"./logoXX-Cy74BE6B.js";import{_ as z}from"./plus-B8sn_dc4.js";import{r as G,s as H}from"./common-DiLhKt0H.js";import{d as J,g as K,r as m,k as Q,E as h,c as N,b as t,e as a,w as o,F as T,f as p,p as W,h as X,o as _,v as k,n as C,i as y,x as E,_ as Y}from"./index-Dz_sQ5WR.js";const b=V=>(W("data-v-7a459389"),V=V(),X(),V),Z={class:"main"},ee=b(()=>t("span",{class:"header"}," 我的人员 ",-1)),le={class:"search"},ae={class:"left"},oe=b(()=>t("span",{style:{width:"336px",height:"32px"}},null,-1)),te={class:"right"},se=b(()=>t("img",{src:P,alt:""},null,-1)),re=b(()=>t("img",{src:j,alt:""},null,-1)),ue={class:"table_header"},ne=b(()=>t("span",{class:"left"},[t("img",{src:O,alt:""}),t("span",{class:"title"})],-1)),de={class:"right"},pe=b(()=>t("img",{src:z,alt:""},null,-1)),ie={class:"table"},me={class:"showDialog"},ce={class:"content"},_e={class:"custom-row"},ve={class:"custom-row"},be={class:"custom-row"},fe={class:"custom-row"},ge={class:"dialog-footer"},ye=J({__name:"index",setup(V){K();const w=m(),f=m(!1),r=m({userType:1,name:"",phone:""}),s=m({userType:1,name:"",phone:"",status:1,storeNo:"",storeName:"",distributorNo:"",distributorName:""}),F=m({name:[{required:!0,message:"姓名不能为空",trigger:"blur"}],phone:[{required:!0,message:"电话不能为空",trigger:"blur"},{validator:(c,l)=>/^1\d{10}$/.test(l)?Promise.resolve():Promise.reject("电话格式不正确"),trigger:"blur"}],userType:[{required:!0,message:"人员类型不能为空",trigger:"blur"}],status:[{required:!0,message:"状态不能为空",trigger:"blur"}]}),$=m([{code:1,name:"技工"},{code:2,name:"经销商用户"},{code:3,name:"配送司机"}]),I=m([{code:1,name:"在职"},{code:2,name:"离职"}]),D=m([]);Q(()=>{x()});const x=()=>{let c={userType:r.value.userType,name:r.value.name,phone:r.value.phone};G(c).then(l=>{let u=l.data;u.code=="success"?(D.value=u.data,h({message:"查询成功!",type:"success"})):console.log("失败")}).catch(l=>{h({message:"请求数据失败，请重试",type:"error"}),console.error("请求数据失败:",l)})},S=()=>{r.value={userType:1,name:"",phone:""}},q=()=>{f.value=!0},B=()=>{s.value={userType:1,name:"",phone:"",status:1,storeNo:"",storeName:"",distributorNo:"",distributorName:""},w.value.clearValidate(),f.value=!1},L=()=>{w.value.validate(c=>{if(c){let l=s.value;H(l).then(u=>{var v;((v=u==null?void 0:u.data)==null?void 0:v.code)=="success"?(r.value.userType=l.userType,s.value={userType:1,name:"",phone:"",status:1,storeNo:"",storeName:"",distributorNo:"",distributorName:""},f.value=!1,h({message:"新增成功!",type:"success"}),setTimeout(()=>{x()},500)):console.log("失败")}).catch(u=>{h({message:"新增失败!",type:"error"}),console.error("新增失败:",u)})}})};return(c,l)=>{const u=p("el-option"),v=p("el-select"),n=p("el-form-item"),i=p("el-input"),U=p("el-form"),g=p("el-button"),d=p("el-table-column"),M=p("el-table"),R=p("el-pagination"),A=p("el-dialog");return _(),N(T,null,[t("div",Z,[ee,t("span",le,[t("span",ae,[a(U,{model:r.value,rules:c.rule,"label-width":"80px","label-position":"left"},{default:o(()=>[a(n,{label:"人员类型"},{default:o(()=>[a(v,{modelValue:r.value.userType,"onUpdate:modelValue":l[0]||(l[0]=e=>r.value.userType=e),placeholder:"请选择人员类型"},{default:o(()=>[(_(!0),N(T,null,k($.value,e=>(_(),C(u,{key:e.code,label:e.name,value:e.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(n,{label:"人员姓名"},{default:o(()=>[a(i,{placeholder:"输入人员姓名",modelValue:r.value.name,"onUpdate:modelValue":l[1]||(l[1]=e=>r.value.name=e)},null,8,["modelValue"])]),_:1}),a(n,{label:"人员电话"},{default:o(()=>[a(i,{placeholder:"输入人员电话",modelValue:r.value.phone,"onUpdate:modelValue":l[2]||(l[2]=e=>r.value.phone=e)},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"]),a(U,{model:r.value,rules:c.rule,"label-width":"80px","label-position":"left"},{default:o(()=>[oe]),_:1},8,["model","rules"])]),t("span",te,[a(g,{onClick:l[3]||(l[3]=e=>x()),type:"primary",class:"search_btn"},{icon:o(()=>[se]),default:o(()=>[y("查询")]),_:1}),a(g,{type:"primary",onClick:l[4]||(l[4]=e=>S()),class:"reset_btn"},{icon:o(()=>[re]),default:o(()=>[y("重置")]),_:1})])]),t("span",ue,[ne,t("span",de,[a(g,{onClick:l[5]||(l[5]=e=>q()),type:"primary",class:"search_btn"},{icon:o(()=>[pe]),default:o(()=>[y("新建")]),_:1})])]),t("span",ie,[a(M,{class:"table_content",data:D.value,stripe:!1,style:{width:"100%"}},{default:o(()=>[a(d,{prop:"id",label:"人员编号"}),a(d,{prop:"name",label:"姓名"}),a(d,{prop:"phone",label:"电话"}),a(d,{prop:"userType",label:"人员类型"},{default:o(e=>[t("div",null,E(e.row.userType==1?"技工":e.row.userType==2?"经销商":"配送司机"),1)]),_:1}),a(d,{prop:"status",label:"人员状态"},{default:o(e=>[t("div",null,E(e.row.status==1?"在职":"离职"),1)]),_:1}),a(d,{prop:"storeNo",label:"门店编号"}),a(d,{prop:"storeName",label:"门店名称"}),a(d,{prop:"distributorNo",label:"经销商编号"}),a(d,{prop:"distributorName",label:"经销商名称"}),a(d,{prop:"createdTime",label:"创建时间"})]),_:1},8,["data"]),a(R,{class:"table_pagination","page-size":20,"pager-count":11,layout:"total, prev, pager, next",total:1e3})])]),t("div",me,[a(A,{modelValue:f.value,"onUpdate:modelValue":l[16]||(l[16]=e=>f.value=e),title:"新增人员",width:"60%","show-close":!1},{footer:o(()=>[t("div",ge,[a(g,{class:"cancel_btn",onClick:l[14]||(l[14]=e=>B())},{default:o(()=>[y("取消")]),_:1}),a(g,{onClick:l[15]||(l[15]=e=>L()),type:"primary",class:"primary_btn"},{default:o(()=>[y("确认")]),_:1})])]),default:o(()=>[t("div",ce,[a(U,{model:s.value,rules:F.value,ref_key:"formRef",ref:w,"label-width":"90px","label-position":"right"},{default:o(()=>[t("div",_e,[a(n,{label:"姓名",prop:"name"},{default:o(()=>[a(i,{placeholder:"请输入姓名",modelValue:s.value.name,"onUpdate:modelValue":l[6]||(l[6]=e=>s.value.name=e)},null,8,["modelValue"])]),_:1}),a(n,{label:"电话",prop:"phone"},{default:o(()=>[a(i,{placeholder:"请输入电话",modelValue:s.value.phone,"onUpdate:modelValue":l[7]||(l[7]=e=>s.value.phone=e)},null,8,["modelValue"])]),_:1})]),t("div",ve,[a(n,{label:"人员类型",prop:"userType"},{default:o(()=>[a(v,{modelValue:s.value.userType,"onUpdate:modelValue":l[8]||(l[8]=e=>s.value.userType=e),placeholder:"请选择人员类型"},{default:o(()=>[(_(!0),N(T,null,k($.value,e=>(_(),C(u,{key:e.code,label:e.name,value:e.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(n,{label:"人员状态",prop:"status"},{default:o(()=>[a(v,{modelValue:s.value.status,"onUpdate:modelValue":l[9]||(l[9]=e=>s.value.status=e),placeholder:"请选择人员状态"},{default:o(()=>[(_(!0),N(T,null,k(I.value,e=>(_(),C(u,{key:e.code,label:e.name,value:e.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),t("div",be,[a(n,{label:"门店编码"},{default:o(()=>[a(i,{placeholder:"请输入门店编码",modelValue:s.value.storeNo,"onUpdate:modelValue":l[10]||(l[10]=e=>s.value.storeNo=e)},null,8,["modelValue"])]),_:1}),a(n,{label:"门店名称"},{default:o(()=>[a(i,{placeholder:"请输入门店名称",modelValue:s.value.storeName,"onUpdate:modelValue":l[11]||(l[11]=e=>s.value.storeName=e)},null,8,["modelValue"])]),_:1})]),t("div",fe,[a(n,{label:"经销商编号"},{default:o(()=>[a(i,{placeholder:"请输入经销商编号",modelValue:s.value.distributorNo,"onUpdate:modelValue":l[12]||(l[12]=e=>s.value.distributorNo=e)},null,8,["modelValue"])]),_:1}),a(n,{label:"经销商名称"},{default:o(()=>[a(i,{placeholder:"请输入经销商名称",modelValue:s.value.distributorName,"onUpdate:modelValue":l[13]||(l[13]=e=>s.value.distributorName=e)},null,8,["modelValue"])]),_:1})])]),_:1},8,["model","rules"])])]),_:1},8,["modelValue"])])],64)}}}),we=Y(ye,[["__scopeId","data-v-7a459389"]]);export{we as default};