<template>
  <div class="combox" style="height:100%;">
    <div class="comtitle">
      <span class="fl">
            <Breadcrumb>
                <Breadcrumb-item href="/components/breadcrumb">
                    <Icon type="ios-pricetags-outline"></Icon><el-button @click="returennext" style="color:gray;" type="text">组织架构</el-button>
                </Breadcrumb-item>
                <Breadcrumb-item>
                    <Icon type="ios-pricetags-outline"></Icon>岗位管理
                </Breadcrumb-item>
            </Breadcrumb>
        </span>
        <span class="fr">
            <i-button type="primary" @click="adduserwins" icon="ios-add" class="colorblue fr"  style="margin-top:15px; margin-right:20px;">添加用户</i-button>
            <i-button type="primary" @click="adddepartments" icon="ios-add" class="colorblue fr"  style="margin-top:15px; margin-right:20px;">添加岗位</i-button>
        </span>
    </div>
    <div class="comcontent">
      <ul class="menuses">
        <li v-for="item in joblist" :key="item.id">
          <div class="listboxli" :id="item.id">
            <div v-show="item.id==isid?false:true" class="listlitext">{{item.top_level}}{{item.id|convertdepname}}</div>
            <span class="posor fl"><img class="posor fl" :id="'img'+item.id" src="../../assets/right.png" style="padding-top:15px; padding-right:10px;" /><el-input @blur="saveedit(item.id,item.name)" v-show="item.id==isid?true:false" v-model="item.name" placeholder="请输入..." style="width:200px;"></el-input><label @click="showhidden(item.id)" class="posor" v-show="item.id==isid?false:true">{{item.name}}</label><el-button @click="deletedep(item.id)" style="color:gray; width:40px;" class="fr" type="text"  icon="el-icon-delete"></el-button><el-button @click="editdep(item.id)" style="color:gray; width:40px;" class="fr" type="text" icon="el-icon-edit"></el-button></span>
          </div>
          <ul class="undis">
            <li v-for="i in item.userList" :key="i.id">
              <span style="width:50px;" class="fl"><img :src="i.user_img==''?userImg:rootUrl+i.user_img|srctransformation" width="40" height="40" /></span>
              <span style="width:60px;" class="fl">{{i.name}}</span>
              <span class="fl">{{i.mobile_phone}}</span>
              <span class="fr"><el-button @click="deleteuser(i.id)" style="color:#8a8c99;" type="text">删除</el-button></span>
            </li>
          </ul>
        </li>
      </ul>
    </div>


    <!--新增岗位-->
    <div class="adddepclassbox unshow">
      <div class="adddepclassbox-title"><span class="fl">添加岗位</span><span @click="closeaddpostwins" class="posor fr"><img src="../../assets/delete.png" /></span></div>
      <div class="adddepclassbox-content">
          <div class="line10"></div>
          <!--列表开始-->
          
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">部门</div>
            <div class="list-content fl">
                <i-select v-model="addpostlist.pid">
                    <i-option v-for="item in addpostlist.deplist" :key="item.id" :value="item.id">{{item.name}}</i-option>
                </i-select>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">岗位名称</div>
            <div class="list-content fl">
                <el-input size="small" v-model="addpostlist.postname" placeholder="请输入部门名称..." style="width:100%;"></el-input>
            </div>
          </div>
          <!--列表结束-->          
          <div class="line10"></div>

          <!--列表结束-->
          <div class="linecenter"></div>
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <i-button @click="addpostaction" style="background:#6680ff; color:white; float:right;">确认添加</i-button>
          </div>
      </div>
    </div>
    <!--新增岗位结束-->

    <!--新增用户-->
    <!--添加用户窗口-->
    <div class="adduserwin unshow">
      <div class="adduserwin-title"><span class="fl">添加成员</span><span class="posor fr" @click="closeadduserwins"><img src="../../assets/delete.png" /></span></div>
      <div class="adduserwin-content">
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">姓名</div>
            <div class="list-content fl">
                <el-input size="small" placeholder="请输入姓名..." style="width:100%;" v-model="adduserlist.username"></el-input>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">电话</div>
            <div class="list-content fl">
                <el-input size="small" :maxlength="11" placeholder="请输入手机号..." style="width:100%;" v-model="adduserlist.usercall"></el-input>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">部门</div>
            <div class="list-content fl">
                <i-select @on-change="selectdepevent" v-model="adduserlist.udepid">
                    <i-option v-for="item in adduserlist.deplist" :key="item.id" :value="item.id">{{ item.name }}</i-option>
                </i-select>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">岗位</div>
            <div class="list-content fl">
                <i-select v-model="adduserlist.uldepid">
                    <i-option v-for="item in adduserlist.ldeplist" :key="item.id" :value="item.id">{{ item.name }}</i-option>
                </i-select>
            </div>
          </div>
          <!--列表结束-->
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-title fl">是否主管</div>
            <div class="list-content fl">
                <i-select v-model="adduserlist.isadmin">
                    <i-option  value="1">是</i-option>
                    <i-option  value="0">否</i-option>
                </i-select>
            </div>
          </div>
          <!--列表结束-->
          
          <div class="line10"></div>
          <!--列表开始-->
          <!--div class="boxlist">
            <div class="list-title fl">排名范围</div>
            <div class="list-content fl">
                <i-input placeholder="请输入姓名..." style="width:100%;" v-model="userinfoes.area"></i-input>
            </div>
          </div-->
          <!--列表结束-->
          <div class="linecenter"></div>
          <div class="line10"></div>
          <!--列表开始-->
          <div class="boxlist">
            <i-button @click="adduserinformations" style="background:#6680ff; color:white; float:right;">确认添加</i-button>
          </div>
      </div>
    </div>
    <!--添加用户窗口-->
  <!--新增用户结束-->

    <Modal
        width="300"
        v-model="modalo"
        class-name="vertical-center-modal">
        <p slot="header" style="color:#000;text-align:left">
            <Icon type="information-circled"></Icon>
            <span>删除确认</span>
        </p>
        <div style="text-align:center">
            <p>您确认要删除该用户吗！</p>
            <p>是否继续删除？</p>
        </div>
        <div slot="footer" style="text-align:center;">
            <i-button   style="width:80px; color:#6680ff;" @click="cancel" class="colorpar">取 消</i-button>
            <i-button type="primary" style="width:80px;"  @click="ok" class="backgroundpar">确 定</i-button>
        </div>
    </Modal>

    <Modal
        width="300"
        v-model="modalmsg"
        class-name="vertical-center-modal">
        <p slot="header" style="color:#000;text-align:left">
            <Icon type="information-circled"></Icon>
            <span>删除确认</span>
        </p>
        <div style="text-align:center">
            <p>您确认要删除该岗位吗！</p>
            <p>是否继续删除？</p>
        </div>
        <div slot="footer" style="text-align:center;">
            <i-button style="width:80px; color:#6680ff;"  @click="cancel2" class="colorpar">取 消</i-button>
            <i-button type="primary" style="width:80px;"  @click="ok2" class="backgroundpar">确 定</i-button>
        </div>
    </Modal>

  </div>
</template>

<script>
  
  export default {
    filters:{
      srctransformation:function(value){
          //console.log('-------------------------------------');
          if(value.indexOf('http://thirdwx.qlogo.cn')!=-1){
            return value.replace(window.localStorage.api,"");
          }else{
            return value;
          }
          //console.log('------------------------------------');
      },
      convertdepname:function(value){
        //console.log(window.localStorage.dep);
        //return value;
        return ''
      }
    },
    data(){
      return{
        rootUrl:window.localStorage.api,
        rootImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAEQElEQVR4nO2bYXOqOhCG34AVBBkH7P//gxWFqiFIJPfDnXCgx1rbcQn07POJdijJPA2bTTaIqqoMGDI81x347bBgYlgwMSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTMyCuoGmaSClRF3XaNsWxrgtYgsh4HkegiBAFEV4eXmhbY+ybC+lRFmWVI9/CpvNBlEUkT2fLEQ0TTN5uQBQliWapiF7PlmIkFJ210IIJEmC5XJJ1dzDGGNQVdWgf1JKbDYbkvbIBNd13V0nSYI4jqma+jbL5RJt20IpBWDY12dDFiKu12t3HQQBVTM/pv829fv6bEZJ04QQYzTzLTxvnAyV82BifpVg1zn2LcgXGpQYY3A+n6GU6lItIQSCIMBqtUIYho57OGPBdV2jKAq0bTv4vTEGSikopbBcLpGm6Wjx9hazDBGXywWHw+Evubfuy/PcaeiY3Qg2xuBwOHTShBCI4xhhGMLzPGitcT6fu9xWa42iKJCmqZP+zk7w6XTqRq4QAlmWDXJa3/cRBAGOxyNOpxMAdDGaemPnFrMLEXb1BQDr9frT5XeSJFgs/oyf/t+NyawEG2Ogte5+/ipLWK1W3TXlhs49ZiX446Tm+/7d+/vZg6uJblaCP6Zb/dF8i/4eg6tUbVaChRCDiaq/5fgRuy1pcTHBATMTDGBQfZBS3pRsjEFRFN0IFkIM4vGYzC5Ni6II5/O5Cw9lWUIpNciDpZSD8BDH8ZfxmorZCQaANE2R53k36dV1/emmeRiGSJJkzO4NmF2IAIDFYoHX19e7JSi7wnO1grPMcgQD/6do2+0WdV13KzVjTFeSX61WzsJCn9kKtgRBMMmSlGUSIWKKG+XPwtkIbtsWx+MRVVXBGIPFYoEkSSaxSf5MnIxgrTV2ux2klN3o1VrjcDjgeDy66BIZowvWWiPP809L5afTCUVRjNwrOkYNEU3TYL/ff1mJqKoKbdsiTdO7JX9bjzPGIAxDxHE8uSMCowmu63pQiXjk/v1+jyzL/pJmqxr9xUXTNKiqClmWTSI9s4wSIpRS35JrsTW1/oi/Xq/Y7XY3V25a64fekDEZRfD7+/uPU7GmabqYba/vbVPaGD8VybNYaGit8fb29vA/yY7k7XbrPCZPYqHxCN99A+yE6noRMxvBP+FyuTiX/KsFA38OqXBNjhB7zMoFZIJdTy4fUUoNJPdXkpR9JRPs8sDdZ1RVhbIs0bbtoJbXP6DybMieHATB3aqvK6SUUEoN8mTKHTyyYbZerycXJix9uZ7nzfM7Od/3kWXZJEOFRQhBfn6Y9EtPAF28U0pBa+088bef0trdN+qNIXLB/zrTfX9/CSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTAwLJoYFE/Mfuu8crG4Pn8IAAAAASUVORK5CYII=',
        userImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAgVBMVEUAAADo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjR0dHW1tbb29ve3t7i4uLY2Njk5OQwtOK3AAAAI3RSTlMAC+BHIPXxdwjb7J1PFOTWx71ZArhs6dGUFqZwmJBcKahdt2kJJfYAAAJXSURBVFjDxdkJcqswDAZghTUQKNkTkjZN32/W+x/wtZlpaUIksIHpdwCNFyHbgjrE9u64SvYe3DA4rI47OyZzs+jtgJbDWzQjAxv75ILhnuyN7uDOFkTWWWeYcz9Ep9CfU09rC71Ya+rD+Yfetg51unjQ4F26Vm8BTQtxJdMltC1TYfkCGAjYhXx/gZGXd2Z8Ujw54tMxxgGMBfGT/V1igGV7rxcYZNHKZwx0edgQDwN59xuzhaAuskxlWV7K3/VdfZHCVepbJoZcN/FmFliF+i0Hz2pKrg9Wru5V4Pk/Awzl8fUdY/g9xB2/fqpNWMcd3WwsYcJtmbCKm1tAGyz1TA2WfQt4AqdUzxRgXW9b4urMWN5o92tbImgGzMCLPgO+jhnw9TNggPGmjIAoBYZvSiNlkkZOG4HNfMdiYkt8pvSLn558FKzAYIuDaEUJGFz5kiW0B4MrsLI9eWBwR4DMI3Sri6o5pLqQi3FRiFF5ZGFUezpAVpfFL2UNWSIndpln6kHH3qz4T69JmEZ39iyE4lAoVg6Oz5evXAkqvnylfDyTiClRoDdfuW4H7CGlOtXcIRWxEzaYdMQd9KqHmjno6SquoFbuXLnLEpPRnaeVzV3nMrOA1oa7cCqzgGf2Sqx6Ya/E5I8T0GeeFRpryD0raG2Q2PljHq7lp1lZ5HmVPVNVeV60S+J22scjfWCgj4kf4MNbBNM2MYa3WaZtBDWcBAYSh1ixSTMtFtt9R2g6zkkW6TUkI+rkbNHb1pm0qTu87TxlY3x46/7vfy7c//5wAXef9Pn98R+pP67D9VcSWgAAAABJRU5ErkJggg==',
        joblist:[],//岗位和岗位下面的用户
        modalo:false,//模态删除提示框属性
        modalmsg:false,
        delid:0,
        userid:0,//用户id，用于保存需要删除和操作的用户标识
        adduserlist:{
          username:'',
          usercall:'',
          udepid:0,
          uldepid:0,
          isadmin:1,
          deplist:[],
          ldeplist:[]
        },
        addpostlist:{
          postname:'',//岗位名称
          pid:0,//部门id
          deplist:[]//部门列表，用来选择使用
        },
        isid:0,//当前选中的id
      }
    },
    methods:{
      showhidden(_id){
        $('#'+_id).siblings().slideToggle('fast',function(){
          if($(this).children('ul>li').length!=0){
            if ($('#'+_id).siblings().css("display")!="none"){
              $('#img'+_id).attr({src:'data:image/png;base64,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'});
            }else{
              $('#img'+_id).attr({src:'data:image/png;base64,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'});
            }
          }else{
            //this.error('下面没有更多信息了')
          }

        });
      },
      //返回上一页
      returennext(){
        this.$router.push({path:'/pages/company/organizationsettings'});
      },
      //获取岗位和用户列表
      getjobusers(){
        let url = window.localStorage.api+'/organization/getPostAndUser';
        this.$http.get(url).then(res=>{
          //console.log(res);
          this.joblist=res['data'].message;
        }).catch(err=>{
          //console.log(err);
        })
      },
      deleteuser(_id){
        this.modalo = true;
        this.userid = _id;
      },
      ok() {
        //根据用户id执行删除
        let url = window.localStorage.api+'/deleteOrganization';
        let params = new URLSearchParams();
        params.append('type','user');
        params.append('id',this.userid);
        this.$http.post(url,params).then(res=>{
          //console.log(res);
          if(res['data'].success){
            //如果重新加载数据
            this.success(res['data'].message);
            this.getjobusers();
          }else{
            this.error('删除失败'+res['data'].message);
          }
          this.modalo = false;
        }).catch(err=>{
          //console.log(err);
        })
      },
      cancel(){
        //取消不执行操作
        this.modalo = false;
      },
      adduserwins(){      
        $('.adduserwin').addClass('show animated fadeIn');
      },
      closeadduserwins(){
        $('.adduserwin').removeClass('show animated fadeIn');
      },
      //添加用户时获取岗位上级部门
      getorgdepinfos(){
        let url = window.localStorage.api+'/organization/getGroundDepartment?type=user';
        this.$http.get(url).then(res=>{
          this.adduserlist.deplist = res['data'].message;
        }).catch(err=>{
          //console.log(err);
        })
      },
      selectdepevent(){//根据部门查询岗位
        //console.log(this.adduserlist.depid);
        let url = window.localStorage.api+"/organization/getPostAndUser?department_id="+this.adduserlist.udepid;
        this.$http.get(url).then(res=>{
            this.adduserlist.ldeplist = res['data'].message;
            //console.log(res['data'].message);
            if(res['data'].message.length==0){//如果不存在岗位
               this.adduserlist.uldepid='';
            }
        }).catch(err=>{
          //console.log(err);
        })
      },
      adduserinformations(){//添加用户
        
        //验证
        if(this.adduserlist.usercall==""||this.adduserlist.usercall==null||this.adduserlist.usercall==undefined){
          this.error('电话号码不能为空');
          return;
        }
        if(this.adduserlist.username==""||this.adduserlist.username==null||this.adduserlist.username==undefined){
          this.error('手机号不能为空');
          return;
        }
        let addurl = window.localStorage.api+'/add/user';
        let params = new URLSearchParams();
        params.append('mobile_phone',this.adduserlist.usercall);//手机号	
        params.append('name',this.adduserlist.username);//姓名
        params.append('department_id',this.adduserlist.udepid);//部门id
        params.append('post_id',this.adduserlist.uldepid);//岗位id	
        params.append('ismanage',this.adduserlist.isadmin);//是否为主管，0不是，1是
        this.$http.post(addurl,params).then(res=>{
          //console.log(res);
          if(res['data'].success){
            this.success('添加成员成功！');
            this.adduserlist.usercall="";
            this.adduserlist.username="";
            this.adduserlist.udepid="";
            this.adduserlist.uldepid="";
            this.adduserlist.isadmin="";
            this.closeadduserwins();
            //重新加载
            this.getjobusers();//重新加载岗位和用户数据
          }else{
            this.error(res['data'].message);
          }
        }).catch(err=>{
          //console.log(err);
        })

      },
      getteams(_id){
        //console.log(_id);
        let url = window.localStorage.api+"/organization/getDepartment?="+_id;
        this.$http.get(url).then(res=>{
          //console.log(res);
          if (res['data'].message.existNext==1) {
            //console.log('存在下级部门');
          }else{
            //console.log('不存在下级部门');
            let uerurl = window.localStorage.api+'/organization/getPostAndUser?department_id='+_id;
            this.$http.get(uerurl).then(res=>{
              //console.log(res);
              this.userlist = res['data'].message;
              //console.log(this.userlist);
            }).catch(err=>{
              //console.log(err);
            })
          }
        }).catch(err=>{
          //console.log(err);
        })
      },
      //添加岗位
      adddepartments(){
          console.log('添加岗位');
          $('.adddepclassbox').addClass('show animated fadeIn');
      },
      closeaddpostwins(){
          $('.adddepclassbox').removeClass('show animated fadeIn');
      },
      //获取岗位上级部门，添加时使用
      getpostdepinfos(){
        let url = window.localStorage.api+'/organization/getGroundDepartment?type=post';
        this.$http.get(url).then(res=>{
          //console.log(res);
          this.addpostlist.deplist = res['data'].message;
          
          //JSON.stringify(this.addpostlist/deplist);
          //alert(JSON.stringify(this.adduserlist.deplist));
          
        }).catch(err=>{
          //console.log(err);
        })
      },
      //添加岗位
      addpostaction(){
        //验证数据
        if (this.addpostlist.pid==0){
          this.error('请选择部门');
          return;
        }
        if(this.addpostlist.postname==""||this.addpostlist.postname==null||this.addpostlist.postname==undefined){
          this.error('请填写岗位名称！');
          return;
        }
        let addurl = window.localStorage.api+'/admin/add/post';
        let params = new URLSearchParams();
        params.append('name',this.addpostlist.postname);
        params.append('department_id',this.addpostlist.pid);
        this.$http.post(addurl,params).then(res=>{
          //console.log(res);
          if(res['data'].success){
            this.success(res['data'].message);
            this.getjobusers();//重新加载岗位和用户数据
            //关闭窗口
            this.closeaddpostwins();
            this.addpostlist.postname="";
          }
        }).catch(err=>{
          //console.log(err);
        })
      },
      showandhidden(){
        //console.log("12311213231");
      },
      editdep(_id){//编辑岗位
        this.isid = _id;
      },
      deletedep(_id){//删除岗位
        this.modalmsg = true;
        this.delid = _id;
      },
      ok2(){
        let url = window.localStorage.api+"/deleteOrganization";
        let params = new URLSearchParams();
        params.append('type','post');
        params.append('id',this.delid);
        this.$http.post(url,params).then(res=>{
          if(res['data'].success){
            this.success(res['data'].message);
            //删除成功更新数据
            this.getjobusers();
          }else{
            this.error(res['data'].message);
          }
          this.modalmsg = false;
        }).catch(err=>{
          //console.log(err);
        })
      },
      cancel2(){
        this.modalmsg = false;
      },
      saveedit(_id,_name){//保存更改后的岗位名称
        let url = window.localStorage.api+"/admin/add/post";
        let params = new URLSearchParams();
        params.append('name',_name);
        params.append('id',_id);
        this.$http.post(url,params).then(res=>{
          if(res['data'].success){
            this.success(res['data'].message);
            this.isid = 0;
          }else{
            this.error(res['data'].message);
          }
        }).catch(err=>{
          //console.log(err);
        })
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
    },
    mounted(){
      //验证是否登录
      if(!window.sessionStorage.status){
        this.$Message.error('您没有登录，请您先登录');
        this.$router.push({path:'/pages/login'});
        return;
      }
      //加载岗位和用户
      this.getjobusers();
      //加载添加用户时的部门
      this.getorgdepinfos();
      //加载添加岗位是时的部门
      this.getpostdepinfos();
    }
  }

  $(function(){
    // $('.menuses').on('click','li',function(){
    //   alert('OK');
    // })
    // $('.post').click(function(){
    //   console.log('点击');  
    //     if($(this).siblings("li").hasClass('on')){  
    //       $(this).siblings("li").slideUp(500).removeClass("on");  
    //     }else{  
    //       // 首先要清除其他li标签的on类名
    //       $(this).parent().siblings().children("li").removeClass("on");
    //       // on类名是随便起的，也可是active什么的都行
    //       $(this).siblings("li").slideDown(500).addClass("on").parent().siblings().children("li").slideUp(500); 
    //     }  
    // }); 
  })
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
    padding-left:10px;
    font-size: 16px;
    color: #2e2f33;
    border-bottom: 1px solid #ededed;
  }

  .combox .comcontent{
    background:#FFF;
    padding:50px;
    overflow: hidden;
    min-height:885px;
  }


  .combox .comcontent ul{
    overflow: hidden;
  }

  .combox .comcontent ul li{
    overflow: hidden;
  }

  .combox .comcontent ul li:hover{
    background:#f5f6ff;
  }

  .combox .comcontent ul li span{
    display: block;
    width:100%;
    height:50px;
    line-height: 50px;
    border-bottom: 1px solid #ededed;
    padding-left:10px;
    font-size: 14px;
    color: #2e2f33;
  }


  .combox .comcontent ul li ul{
    overflow: hidden;
    padding-left:20px;
    background:#fcfcfc;
  }

  .combox .comcontent ul li ul li{
    line-height: 50px;
    background:#fcfcfc;
    width:100%;
    border-bottom: 1px solid #ededed;
  }

  .combox .comcontent ul li ul li span{
    display:block;
    padding-top:5px;
    line-height: 40px;
    width:200px;
    border-bottom: none !important;
    text-align: center;
  }

  .combox .comcontent ul li ul li span img{
    border-radius:20px;
  }
  .combox .comcontent  .userlist-box{
    overflow: hidden;
  }

  .combox .comcontent  .userlist-box .userlist{
    overflow: hidden;
    cursor: pointer;
  }

  .combox .comcontent  .userlist-box .userlist .userlist-title{
    height:70px;
    width:100%;
    line-height: 70px;
    text-indent: 55px;
    background: white;
    border-bottom:1px solid rgb(230, 230, 230);
    font-family: MicrosoftYaHei;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #2e2f33;
  }

    .combox .comcontent  .userlist-box .userlist .userlist-content{

    }

    .combox .comcontent  .userlist-box .userlist .userlist-content .userlist-content-list{
      text-indent: 52px;
      height: 80px;
      line-height: 80px;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #5c5d66;
      cursor: pointer;
    }

    /*****************************************/
    .adduserwin{
      width: 444px;
      height: 450px;
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

    .adduserwin .adduserwin-title{
      width: 444px;
      height: 50px;
      background-color: #ededed;
      border-radius: 4px 4px 0px 0px;
      line-height: 50px;
      padding:0 20px;
      font-size: 14px;
    }

    .adduserwin .adduserwin-title span{
      display: block;
      height: 50px;
      font-size: 16px;
      color:#5c5d66;
    }

    .adduserwin .adduserwin-content{
      width:444px;
      height: calc(100% - 50px);
      padding:70px 70px;
    }


    /*添加用户*/
    .adduserwin .adduserwin-content .boxlist{
      overflow: hidden;
      width:100%;
    }

    .adduserwin .adduserwin-content .boxlist .list-title{
      padding-right:20px;
      width:80px;
      line-height: 30px;
      color:#2e2f33;
    }
    .adduserwin .adduserwin-content .boxlist .list-content{
      width:220px;
    }
    .adduserwin .adduserwin-content .boxlist .list-content .list-content-img{
      margin-right:10px;
      text-align:center;
      padding:22px 42px 0px 52px;
    }
    .adduserwin .adduserwin-content .boxlist .list-content .list-content-img img{
      width:44px;
      height:44px;
      border-radius:22px;
    }
    .adduserwin .adduserwin-contentt .boxlist .list-content-upbtn{}
    .adduserwin .adduserwin-content .boxlist .list-content-upbtn span{
      text-align:center;
      display:block;
    }
    /*添加用户*/

    /*添加岗位*/
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
    /*添加岗位*/

    .unshow{
      visibility: hidden;
      z-index: -1000;
    }

    .show{
      visibility: visible;
      z-index: 1000;
    }

    .undis{
      display: none;
    }

    .menuses li label{
      display: block;
      width:calc(100% - 150px);
      float: left;
      line-height: 30px;
    }

    .listboxli{
      position: relative;
    }

    .listlitext{
      position: absolute;
      left:37px;
      top:28px;
      font-size: 8px;
      color:rgb(160, 158, 158);
    }

</style>
