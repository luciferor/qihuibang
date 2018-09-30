<template>
  <div class="combox" style="height:100%;">
    <div class="comtitle">
        <span class="fl">
            <Breadcrumb>
                <Breadcrumb-item href="/components/breadcrumb">
                    <Icon type="ios-pricetags-outline"></Icon><el-button @click="returennext" style="color:gray;" type="text">组织架构</el-button>
                </Breadcrumb-item>
                <Breadcrumb-item>
                    <Icon type="ios-pricetags-outline"></Icon> 部门管理
                </Breadcrumb-item>
            </Breadcrumb>
        </span>
        <span class="fr">
            <i-button @click="adddepartments" type="primary" icon="ios-add" class="colorblue fr"  style="margin-top:15px; margin-right:20px;">添加部门</i-button>
        </span>
    </div>
    <div class="comcontent">
        <div class="comcontent-list">
            <ul>
               <li v-for="item in deplist" :key="item.id" v-if="item.pid==0&&item.level==0">
                   <span class="fl"><i-input @on-blur="saveedit(item.id,item.name)" v-show="item.id==isid?true:false" v-model="item.name" placeholder="请输入..." style="width:200px;"></i-input><label v-show="item.id==isid?false:true">{{item.name}}</label><el-button @click="deletedep(item.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(item.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                   <ul>
                       <li v-for="items in deplist" :key="items.id" v-if="items.pid==item.id&&items.level==1">
                           <span class="fl"><i-input @on-blur="saveedit(items.id,items.name)" v-show="items.id==isid?true:false" v-model="items.name" placeholder="请输入..." style="width:200px;"></i-input><label v-show="items.id==isid?false:true">{{items.name}}</label><el-button @click="deletedep(items.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(items.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                            <ul>
                                <li v-for="itemss in deplist" :key="itemss.id" v-if="itemss.pid===items.id&&itemss.level===2">
                                    <span class="fl"><i-input @on-blur="saveedit(itemss.id,itemss.name)" v-show="itemss.id==isid?true:false" v-model="itemss.name" placeholder="请输入..." style="width:200px;"></i-input><label v-show="itemss.id==isid?false:true">{{itemss.name}}</label><el-button @click="deletedep(itemss.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(itemss.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                                    <ul>
                                        <li v-for="itemsss in deplist" :key="itemsss.id" v-if="itemsss.pid==itemss.id&&itemsss.level==3">
                                            <span class="fl"><i-input @on-blur="saveedit(itemsss.id,itemsss.name)" v-show="itemsss.id==isid?true:false" v-model="itemsss.name" placeholder="请输入..." style="width:200px;"></i-input><label v-show="itemsss.id==isid?false:true">{{itemsss.name}}</label><el-button @click="deletedep(itemsss.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(itemsss.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                                            <ul>
                                                <li v-for="itemssss in deplist" :key="itemssss.id" v-if="itemssss.pid==itemsss.id&&itemssss.level==4">
                                                    <span class="fl"><i-input @on-blur="saveedit(itemssss.id,itemssss.name)" v-show="itemssss.id==isid?true:false" v-model="itemssss.name" placeholder="请输入..." style="width:200px;"></i-input><label v-show="itemssss.id==isid?false:true">{{itemssss.name}}</label><el-button @click="deletedep(itemssss.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(itemssss.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                                                    <ul>
                                                        <li v-for="itemsssss in deplist" :key="itemsssss.id" v-if="itemsssss.pid==itemssss.id&&itemsssss.level==5">
                                                            <span class="fl"><i-input @on-blur="saveedit(itemsssss.id,itemsssss.name)" v-show="itemsssss.id==isid?true:false" v-model="itemsssss.name" placeholder="请输入..." style="width:200px;"></i-input><label v-show="itemsssss.id==isid?false:true">{{itemsssss.name}}</label><el-button @click="deletedep(itemsssss.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(itemsssss.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                                                            <ul>
                                                                <li v-for="itemssssss in deplist" :key="itemssssss.id" v-if="itemssssss.pid==itemsssss.id&&itemssssss.level==6">
                                                                    <span class="fl"><i-input @on-blur="saveedit(itemssssss.id,itemssssss.name)" v-show="itemssssss.id==isid?true:false" v-model="itemssssss.name" placeholder="请输入..." style="width:200px;"></i-input><label v-show="itemssssss.id==isid?false:true">{{itemssssss.name}}</label><el-button @click="deletedep(itemssssss.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(itemssssss.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                                                                    <ul>
                                                                        <li v-for="itemsssssss in deplist" :key="itemsssssss.id" v-if="itemsssssss.pid==itemssssss.id&&itemsssssss.level==7">
                                                                            <span class="fl"><i-input @on-blur="saveedit(itemsssssss.id,itemsssssss.name)" v-show="itemsssssss.id==isid?true:false" v-model="itemsssssss.name" placeholder="请输入..." style="width:200px;"></i-input><label v-show="itemsssssss.id==isid?false:true">{{itemsssssss.name}}</label><el-button @click="deletedep(itemsssssss.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(itemsssssss.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                                                                            <ul>
                                                                                <li v-for="itemssssssss in deplist" :key="itemssssssss.id" v-if="itemssssssss.pid==itemsssssss.id&&itemssssssss.level==8">
                                                                                    <span class="fl"><i-input @on-blur="saveedit(itemssssssss.id,itemssssssss.name)" v-show="itemssssssss.id==isid?true:false" v-model="itemssssssss.name" placeholder="请输入..." style="width:200px;"></i-input><label v-show="itemssssssss.id==isid?false:true">{{itemssssssss.name}}</label><el-button @click="deletedep(itemssssssss.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(itemssssssss.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
                                                                                </li>
                                                                            </ul>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                       </li>
                   </ul>
               </li>
            </ul>
            
        </div>
    </div>


    <!--添加部门-->
    <div class="adddepclassbox unshow">
      <div class="adddepclassbox-title"><span class="fl">添加部门</span><span @click="closeadduserwins" class="posor fr"><img src="../../assets/delete.png" /></span></div>
      <div class="adddepclassbox-content">
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">顶级部门</div>
            <div class="list-content fl" style="padding-top:5px;">
                 <el-radio @change="test" v-model="isfather" :label="true">是</el-radio>
                 <el-radio @change="test" v-model="isfather" :label="false">否</el-radio>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">部门</div>
            <div class="list-content fl">
                <i-select :disabled="isfather" @on-change="changedep" v-model="bigdepid">
                    <i-option v-for="item in adddepinglist" :key="item.id" :value="item.id">{{item.name}}</i-option>
                </i-select>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">部门名称</div>
            <div class="list-content fl">
                <i-input v-model="littledep" placeholder="请输入部门名称..." style="width:100%;"></i-input>
            </div>
          </div>
          <!--列表结束-->          
          <div class="line10"></div>

          <!--列表结束-->
          <div class="linecenter"></div>
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <i-button @click="adddepinfoes" style="background:#6680ff; color:white; float:right;">确认添加</i-button>
          </div>
      </div>
    </div>
    <!--添加部门-->
    <Modal
        width="300"
        v-model="modalmsg"
        class-name="vertical-center-modal">
        <p slot="header" style="color:#000;text-align:left">
            <Icon type="information-circled"></Icon>
            <span>删除确认</span>
        </p>
        <div style="text-align:center">
            <p>您确认要删除该部门吗！</p>
            <p>是否继续删除？</p>
        </div>
        <div slot="footer" style="text-align:center;">
            <i-button type="ghost" style="width:80px; color:#6680ff;" @click="cancel" class="colorpar">取 消</i-button>
            <i-button type="primary" style="width:80px;" @click="ok" class="backgroundpar">确 定</i-button>
        </div>
    </Modal>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        rootUrl:window.localStorage.api,
        rootImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAEQElEQVR4nO2bYXOqOhCG34AVBBkH7P//gxWFqiFIJPfDnXCgx1rbcQn07POJdijJPA2bTTaIqqoMGDI81x347bBgYlgwMSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTMyCuoGmaSClRF3XaNsWxrgtYgsh4HkegiBAFEV4eXmhbY+ybC+lRFmWVI9/CpvNBlEUkT2fLEQ0TTN5uQBQliWapiF7PlmIkFJ210IIJEmC5XJJ1dzDGGNQVdWgf1JKbDYbkvbIBNd13V0nSYI4jqma+jbL5RJt20IpBWDY12dDFiKu12t3HQQBVTM/pv829fv6bEZJ04QQYzTzLTxvnAyV82BifpVg1zn2LcgXGpQYY3A+n6GU6lItIQSCIMBqtUIYho57OGPBdV2jKAq0bTv4vTEGSikopbBcLpGm6Wjx9hazDBGXywWHw+Evubfuy/PcaeiY3Qg2xuBwOHTShBCI4xhhGMLzPGitcT6fu9xWa42iKJCmqZP+zk7w6XTqRq4QAlmWDXJa3/cRBAGOxyNOpxMAdDGaemPnFrMLEXb1BQDr9frT5XeSJFgs/oyf/t+NyawEG2Ogte5+/ipLWK1W3TXlhs49ZiX446Tm+/7d+/vZg6uJblaCP6Zb/dF8i/4eg6tUbVaChRCDiaq/5fgRuy1pcTHBATMTDGBQfZBS3pRsjEFRFN0IFkIM4vGYzC5Ni6II5/O5Cw9lWUIpNciDpZSD8BDH8ZfxmorZCQaANE2R53k36dV1/emmeRiGSJJkzO4NmF2IAIDFYoHX19e7JSi7wnO1grPMcgQD/6do2+0WdV13KzVjTFeSX61WzsJCn9kKtgRBMMmSlGUSIWKKG+XPwtkIbtsWx+MRVVXBGIPFYoEkSSaxSf5MnIxgrTV2ux2klN3o1VrjcDjgeDy66BIZowvWWiPP809L5afTCUVRjNwrOkYNEU3TYL/ff1mJqKoKbdsiTdO7JX9bjzPGIAxDxHE8uSMCowmu63pQiXjk/v1+jyzL/pJmqxr9xUXTNKiqClmWTSI9s4wSIpRS35JrsTW1/oi/Xq/Y7XY3V25a64fekDEZRfD7+/uPU7GmabqYba/vbVPaGD8VybNYaGit8fb29vA/yY7k7XbrPCZPYqHxCN99A+yE6noRMxvBP+FyuTiX/KsFA38OqXBNjhB7zMoFZIJdTy4fUUoNJPdXkpR9JRPs8sDdZ1RVhbIs0bbtoJbXP6DybMieHATB3aqvK6SUUEoN8mTKHTyyYbZerycXJix9uZ7nzfM7Od/3kWXZJEOFRQhBfn6Y9EtPAF28U0pBa+088bef0trdN+qNIXLB/zrTfX9/CSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTAwLJoYFE/Mfuu8crG4Pn8IAAAAASUVORK5CYII=',
        modalmsg:false,
        delid:0,
        deplist:[],//所有部门
        adddepinglist:[],//添加时的所有部门
        bigdepid:'',//上一级部门，需要选择
        littledep:'',//添加的部门，需要输入
        isfather:false,
        isedit:false,//是否是编辑状态
        isid:0,//编辑的id
        render: function (createElement) {
            //console.log("OK");
            return createElement('span', 'hello'),'world'
        }
      }
    },
    methods:{
        //跳转到上一页
        returennext(){
            this.$router.push({path:'/pages/company/organizationsettings'});
        },
        //加载所有部门
        loadalldeparments(){
            this.deplist =[];//每次push前先清空
            let list=[];
            let url = window.localStorage.api+'/organization/getAllDepartment';

            this.$http.get(url).then(res=>{
                //console.log(res);
                //this.deplist = res['data'].message;
                list = res['data'].message;
                this.deplist = list;
               //-------------------------------------------------------------------
                
               //------------------------------------------------------------------
                
            }).catch(err=>{ 
                //console.log(err);
            })
        },
        //添加部门时的所有部门
        loadeping(){
            let url = window.localStorage.api+'/organization/getGroundDepartment?type=department';
            this.$http.get(url).then(res=>{
                //console.log(res);
                this.adddepinglist = res['data'].message;
            }).catch(err=>{ 
                //console.log(err);
            })
        },
        //添加部门
        adddepartments(){
            //console.log('添加部门');
            $('.adddepclassbox').addClass('show animated fadeIn');
        },
        closeadduserwins(){
            $('.adddepclassbox').removeClass('show animated fadeIn');
        },
        adddepinfoes(){
            if(this.littledep==""||this.littledep==null||this.littledep==undefined){
                this.error('部门名称不能为空');
                return;
            }
            let url=window.localStorage.api+'/organization/addDepartment';
            let params = new URLSearchParams();
            if(this.isfather){
                //console.log('顶级部门');
                //不用传上级id，为顶级部门
                params.append('name',this.littledep);
                this.$http.post(url,params).then(res=>{
                    //console.log(res);
                    if(res['data'].success){
                        this.success(res['data'].message);
                        this.loadalldeparments();
                        this.loadeping();
                        this.littledep = "";
                        this.closeadduserwins();
                    }else{
                        this.error(res['data'].message);
                    }
                }).catch(err=>{
                    //console.log(err);
                });                
            }else{
                //console.log('下级部门');
                params.append('name',this.littledep);
                params.append('pid',this.bigdepid);
                this.$http.post(url,params).then(res=>{
                    //console.log(res);
                    if(res['data'].success){
                        this.success(res['data'].message);
                        this.loadalldeparments();
                        this.loadeping();
                        this.littledep = '';
                        this.bigdepid = '';
                        this.closeadduserwins();
                    }else{
                        this.error(res['data'].message);
                    }
                }).catch(err=>{
                    //console.log(err);
                });
            }
        },
        changedep(){
            //console.log(this.bigdepid);
        },
        //页面提示信息
        success(_str) {
            this.$alert(_str, '系统提示', {
                confirmButtonText: '确定',
            });
        },
        warning(_str) {
            this.$alert(_str, '系统提示', {
                confirmButtonText: '确定',
            });
        },
        error(_str) {
            this.$alert(_str, '系统提示', {
                confirmButtonText: '确定',
            });
        },
        test(){
            //console.log(this.isfather);
        },
        editdep(_id){
            this.isid = _id;
            //console.log('编辑'+_id);
        },
        saveedit(_id,_name){
            this.isid = 0;
            //console.log('编辑'+_id+"名称"+_name);
            let url = window.localStorage.api+'/organization/addDepartment';
            let params = new URLSearchParams();
            params.append('name',_name);
            params.append('id',_id);
            this.$http.post(url,params).then(res=>{
                if(res['data'].success){
                    this.success(res['data'].message);
                    this.loadalldeparments();//重新加载部门
                }else{
                    this.error(res['data'].message);
                }
            }).catch(err=>{

            })
        },
        deletedep(_id){
            this.modalmsg = true;
            this.delid = _id;
        },
        ok(){
            //console.log('删除');
            let url = window.localStorage.api+'/deleteOrganization';
            let params = new URLSearchParams();
            params.append('type','department');
            params.append('id',this.delid);
            this.$http.post(url,params).then(res=>{
                //console.log(res);
                if(res['data'].success){
                    this.success(res['data'].message);
                    //重新刷新部门列表
                    this.loadalldeparments();
                    this.delid = 0;
                    this.modalmsg = false;
                }else{
                    this.error(res['data'].message);
                }
            }).catch(err=>{
                //console.log(err);
            })
        },
        cancel(){
            this.modalmsg = false;
        }
    },
    mounted(){
      //验证是否登录
      if(!window.sessionStorage.status){
        this.$Message.error('您没有登录，请您先登录');
        this.$router.push({path:'/pages/login'});
        return;
      }
      //加载所有部门
      this.loadalldeparments();
      this.loadeping();//编辑部门时使用
    }
  }
</script>


<style scoped>
  .combox{
    width:100%;
    height:100%;
    border: solid 1px #ededed;
    background: #FFF;
  }

  .combox .comtitle{
    height:62px;
    line-height: 62px;
    font-size: 16px;
    color: #2e2f33;
    border-bottom: 1px solid #ededed;
    padding-left:10px;
  }

  .combox .comcontent{
    background:#FFF;
    padding:50px;
    overflow: hidden;
    min-height:885px;
  }

  .combox .comcontent .comcontent-list{
      overflow: hidden;
  }
  .combox .comcontent .comcontent-list ul{
      overflow: hidden;
  }
  .combox .comcontent .comcontent-list ul li{
      list-style: none;
      width:100%;
      overflow: hidden;
  }

  .combox .comcontent .comcontent-list ul li span{
      display:block;
      height:50px;
      line-height: 50px;
      text-indent: 20px;
      border-bottom: 1px solid #E0E0E0;
      width:100%;
      font-size: 14px;
  }

  .combox .comcontent .comcontent-list ul li ul{
      width:100%;
      overflow: hidden;
  }
  .combox .comcontent .comcontent-list ul li ul li{
      list-style: none;
      width:100%;
      overflow: hidden;
      padding-left:20px;
  }


  .combox .comcontent .comcontent-list ul li ul li span{
      display:block;
      height:50px;
      line-height: 50px;
      text-indent: 20px;
      border-bottom: 1px solid #E0E0E0;
      width:100%;
      font-size: 14px;
  }


    /*添加部门*/
    .combox .adddepclassbox{
      width: 444px;
      height: 360px;
      background-color: #ffffff;
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
      border-radius: 4px;
      position: absolute;
      left:0;
      top:0;
      right:0;
      bottom:0;
      margin:auto;
    }

    .combox .adddepclassbox .adddepclassbox-title{
      width: 444px;
      height: 50px;
      background-color: #ededed;
      border-radius: 4px 4px 0px 0px;
      line-height: 50px;
      padding:0 20px;
      font-size: 14px;
    }

    .combox .adddepclassbox .adddepclassbox-title span{
      display: block;
      height: 50px;
      font-size: 16px;
      color:#5c5d66;
    }

    .combox .adddepclassbox .adddepclassbox-content{
      width:444px;
      height: calc(100% - 50px);
      padding:70px 70px;
    }


    /*添加用户*/
    .combox .adddepclassbox .adddepclassbox-content .boxlist{
      overflow: hidden;
      width:100%;
    }

    .combox .adddepclassbox .adddepclassbox-content .boxlist .list-title{
      padding-right:20px;
      width:80px;
      line-height: 30px;
      color:#2e2f33;
    }
    .combox .adddepclassbox .adddepclassbox-content .boxlist .list-content{
      width:220px;
    }
    .combox .adddepclassbox .adddepclassbox-content .boxlist .list-content .list-content-img{
      margin-right:10px;
      text-align:center;
      padding:22px 42px 0px 52px;
    }
    .combox .adddepclassbox .adddepclassbox-content .boxlist .list-content .list-content-img img{
      width:44px;
      height:44px;
      border-radius:22px;
    }
    .combox .adddepclassbox .adddepclassbox-contentt .boxlist .list-content-upbtn{}
    .combox .adddepclassbox .adddepclassbox-content .boxlist .list-content-upbtn span{
      text-align:center;
      display:block;
    }
    /*添加用户*/
    /*添加部门*/

    .unshow{
      visibility: hidden;
      z-index: -1000;
    }

    .show{
      visibility: visible;
      z-index: 1000;
    }

    

</style>
<style>
.comcontent-list .ivu-input-wrapper .ivu-input-wrapper-default .ivu-input-type input{
    border:none !important;
    float:left !important;
}
</style>
