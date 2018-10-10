<template>
  <div class="mainbox">
    <!--遮罩层开始-->
    <div @click="lightboxevents" class="lightblackbox unshow posor"></div>
    <!--遮罩层结束-->
    <div class="menuleft menuunshow fl">
      <div class="menutop">
        <div class="logoimg fl"><img :src="companyinfo.logo==''?rootImg:rootUrl+companyinfo.logo" /></div>
        <div class="searchbox fl">
          <div class="inbox">
            <div style="height:40px; line-height:40px; font-size:14px;">{{(companyinfo.name)}}</div>
            <el-input v-show="false" icon="ios-search" style="width:100%; height:100%; border:none;" placeholder="请输入搜索关键字..."></el-input> 
          </div>
        </div>
      </div>
      <div class="menuunder">
        <!--左侧菜单开始-->
        <div class="leftmenulist fl">
          <ul>
            <li v-show="false" @click="Statistics()" name="company"><span><img src="..\assets\iMenu\normal\icon_tab_renwu_normal.png" width="20" height="20" /></span></li>
            <li @click="showmenu('some')" name="some"><span><img src="..\assets\iMenu\normal\icon_tab_renwu_normal.png" width="20" height="20" /></span></li>
            <li @click="showmenu('task')" name="task"><span><img src="..\assets\iMenu\normal\icon_tab_paimin_normal.png" width="20" height="20" /></span></li>
            <li @click="showmenu('ranking')" name="ranking"><span><img src="..\assets\iMenu\normal\icon_tab_xiaoxin_normal.png" width="20" height="20" /></span></li>
            <li @click="showmenu('glory')" name="glory"><span><img src="..\assets\iMenu\normal\icon_tab_bangong_normal.png" width="20" height="20" /></span></li>
            <div @click="showmenu('company')" class="setting" ><span class="settingbox"><img src="..\assets\iMenu\normal\icon_tab_guangli_normal.png" width="18" height="18" /></span></div>
            <div class="userimg">
              <Poptip width="100" placement="right-end">
                  <img :src="userinfolist.user_img==''?userImg:rootUrl+userinfolist.user_img | srctransformation" width="40" height="40" />
                  <div class="api"  slot="content">
                      <div class="menulist"><el-button style="color:red; font-weight:bold;" type="text">{{userinfolist.name}}</el-button></div>
                      <div class="menulist"><el-button @click="ownnerinfos" type="text">更改密码</el-button></div>
                      <div class="menulist"><el-button @click="companyinfos" type="text">公司信息</el-button></div>
                      <div style="height: 1px; background-color: #ededed;"></div>
                      <div class="menulist"><el-button @click="companyedit" type="text">企业设置</el-button></div>
                      <div class="menulist"><el-button @click="bangfensetting" type="text">邦分设置</el-button></div>
                      <div style="height: 1px; background-color: #ededed;"></div>
                      <div class="menulist"><el-button @click="loginout" type="text">退出登录</el-button></div>
                  </div>
              </Poptip>
            </div>
          </ul>
        </div>
        <div class="rightmenubox fl">
          <div class="rightmenulist">
            <div class="menu-title">
              管理后台
            </div>
            
            <div v-show="a" name="company" class="childlist" style="height:calc(100% - 50px); backgroud:red; padding:10px;">
              <el-scrollbar style="height:100%;">
                <div class="rightmenulistbox"  style="backgroun:red;">
                  <ul>
                    <li @click="cominfosset"><span class="pic"><img width="20" height="20" src="..\assets\iMenu\sMenu\icon_gongshi.png" /></span><span>公司信息</span></li>
                    <li @click="exammanset"><span class="pic"><img width="20" height="20" src="..\assets\iMenu\sMenu\icon_shenpi.png" /></span><span>审批设置</span></li>
                    <li @click="integralset"><span class="pic"><img width="20" height="20" src="..\assets\iMenu\sMenu\icon_bangfeng.png" /></span><span>邦分设置</span></li>
                    <li @click="welfareset"><span class="pic"><img width="20" height="20" src="..\assets\iMenu\sMenu\icon_fuli.png" /></span><span>福利设置</span></li>
                    <li @click="taskset"><span class="pic"><img width="20" height="20" src="..\assets\iMenu\sMenu\icon_changgui.png" /></span><span>常规任务设置</span></li>
                    <li @click="scheduset"><span class="pic"><img width="20" height="20" src="..\assets\iMenu\sMenu\icon_paibang.png" /></span><span>排班设置</span></li>
                    <li v-show="false" @click="rightset"><span class="pic"><img width="20" height="20" src="..\assets\iMenu\sMenu\icon_quanxiang.png" /></span><span>审批权限设置</span></li>
                    <li @click="organiset"><span class="pic"><img width="20" height="20" src="..\assets\iMenu\sMenu\icon_zuzhijiagou.png" /></span><span>组织架构设置</span></li>
                    <li v-show="false" @click="projectset"><span class="pic"><img width="20" height="20" src="..\assets\iMenu\sMenu\icon_xiangmu.png" /></span><span>项目管理</span></li>
                    <li v-show="false" @click="dataset"><span class="pic"><img width="20" height="20" src="..\assets\iMenu\sMenu\icon_shuju.png" /></span><span>数据统计</span></li>
                    <li @click="noticeset"><span class="pic"><img width="20" height="20" src="..\assets\iMenu\sMenu\icon_tongzhi.png" /></span><span>通知设置</span></li>
                  </ul>
                </div>
              </el-scrollbar>
            </div>
            


            <!--菜单复制开始--任务---------------------------------------------------------------------------->
            
            <div v-show="b" name="task" class="childlist">
              <el-scrollbar style="height:90%;">
                <div class="rightmenulistbox">
                  <ul>
                    <li @click="developing" ><span class="pic"><img width="20" height="20" src="..\assets\iMenu\sMenu\icon_gongshi.png" /></span><span>1功能开发中</span></li>
                  </ul>
                </div>
              </el-scrollbar>
            </div>
           
            <!--菜单复制结束------------------------------------------------------------------------------>


            <!--菜单复制开始--排名---------------------------------------------------------------------------->
            
            <div v-show="c" name="ranking" class="childlist" style="height:calc(100% - 50px); backgroud:red; padding:10px;">
              <el-scrollbar style="height:90%;">
                <div class="rightmenulistbox">
                  <ul>
                    <li @click="developing" ><span class="pic"><img width="20" height="20" src="..\assets\iMenu\sMenu\icon_shuju.png" /></span><span>2功能开发中</span></li>
                  </ul>
                </div>
              </el-scrollbar>
            </div>
            
            <!--菜单复制结束------------------------------------------------------------------------------>

            <!--菜单复制开始--荣耀墙---------------------------------------------------------------------------->
            
            <div v-show="d" name="glory" class="childlist" style="height:calc(100% - 50px); backgroud:red; padding:10px;">
              <el-scrollbar style="height:90%;">
                <div class="rightmenulistbox">
                  <ul>
                    <li @click="developing" ><span class="pic"><img width="20" height="20" src="..\assets\iMenu\sMenu\icon_gongshi.png" /></span><span>功能开发中</span></li>
                  </ul>
                </div>
              </el-scrollbar>
            </div>
            
            <!--菜单复制结束------------------------------------------------------------------------------>

            <!--菜单复制开始--统计---------------------------------------------------------------------------->
            
            <div v-show="e" name="task" class="childlist">
              <el-scrollbar style="height:90%;">
                <div class="rightmenulistbox">
                  <ul>
                    <li @click="openblank"><span class="pic"><img width="20" height="20" src="..\assets\iMenu\sMenu\icon_xiangmu.png" /></span><span>项目管理</span></li>
                  </ul>
                </div>
              </el-scrollbar>
            </div>
           
            <!--菜单复制结束------------------------------------------------------------------------------>
            
          </div>
        </div>
        <!--左侧菜单结束-->
      </div>
    </div>
    <div class="contentright fr">
      <div class="admintop">
        <el-button type="text" @click="showmenutoggle"><i style="font-size:20px; line-height:42px; font-weight:bold; color:white;" class="iconfont icon-caidan"></i></el-button>
      </div>
      <div class="admincontentbox">
          <el-scrollbar style="height:100%;">
              <router-view></router-view>
          </el-scrollbar>
      </div>
    </div>



    <div class="ownnerinfosclass unshow">
      <div class="addwelfare-title">
        <span class="fl">&nbsp;&nbsp;&nbsp;&nbsp;更改密码</span>
        <span class="fr" style="padding-right:10px;"><el-button @click="closeownnerinfosclass" type="text"><img src="../assets/delete.png" /></el-button></span>
      </div>
      <div class="addwelfare-content">
        <div>
          <!--列表结束-->
          <div class="line10" style="background:#fafafa;"></div>
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-content" style="padding:0px 30px;">
              <span class="spanlist fl">用户名 :</span>
              <span class="spanlist fl">{{userinfolist.name}}</span>
            </div>
          </div>
          <!--列表结束-->
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-content" style="padding:0px 30px;">
              <span class="spanlist fl">旧密码</span>
              <span class="spanlist fl"><el-input size="small" type="password" v-model="userinfo.oldpass" style="width:195px;" placeholder="请输入旧密码..." ></el-input></span>
            </div>
          </div>
          <!--列表结束-->
          <!--列表开始-->
          <div class="boxlist">
            <div class="list-content" style="padding:0px 30px;">
              <span class="spanlist fl">新密码</span>
              <span class="spanlist fl"><el-input size="small" type="password" v-model="userinfo.newpass" style="width:195px;" placeholder="请输入新密码..." ></el-input></span>
            </div>
          </div>
          <!--列表结束-->

          <!--列表结束-->
          <div class="line10" style="background:#fafafa;"></div>
          <!--列表结束-->
          <div class="boxlist">
            <div class="list-content fr">
              <span class="spanlist fr"><i-button type="primary" @click="saveeditinformations"  class="backgroundpar" style="width:120px;">保 存</i-button></span>
            </div>
          </div>
          <!--列表结束-->

        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  filters:{
    srctransformation:function(value){
        //console.log('-------------------------------------');
        if(value.indexOf('http://thirdwx.qlogo.cn')!=-1){
          return value.replace(window.localStorage.api,"");
        }else{
          return value;
        }
        //console.log('------------------------------------');
    }
  },
  data() {
    return {
      companyinfo:[],
      rootUrl:window.localStorage.api,
      rootImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAEQElEQVR4nO2bYXOqOhCG34AVBBkH7P//gxWFqiFIJPfDnXCgx1rbcQn07POJdijJPA2bTTaIqqoMGDI81x347bBgYlgwMSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTMyCuoGmaSClRF3XaNsWxrgtYgsh4HkegiBAFEV4eXmhbY+ybC+lRFmWVI9/CpvNBlEUkT2fLEQ0TTN5uQBQliWapiF7PlmIkFJ210IIJEmC5XJJ1dzDGGNQVdWgf1JKbDYbkvbIBNd13V0nSYI4jqma+jbL5RJt20IpBWDY12dDFiKu12t3HQQBVTM/pv829fv6bEZJ04QQYzTzLTxvnAyV82BifpVg1zn2LcgXGpQYY3A+n6GU6lItIQSCIMBqtUIYho57OGPBdV2jKAq0bTv4vTEGSikopbBcLpGm6Wjx9hazDBGXywWHw+Evubfuy/PcaeiY3Qg2xuBwOHTShBCI4xhhGMLzPGitcT6fu9xWa42iKJCmqZP+zk7w6XTqRq4QAlmWDXJa3/cRBAGOxyNOpxMAdDGaemPnFrMLEXb1BQDr9frT5XeSJFgs/oyf/t+NyawEG2Ogte5+/ipLWK1W3TXlhs49ZiX446Tm+/7d+/vZg6uJblaCP6Zb/dF8i/4eg6tUbVaChRCDiaq/5fgRuy1pcTHBATMTDGBQfZBS3pRsjEFRFN0IFkIM4vGYzC5Ni6II5/O5Cw9lWUIpNciDpZSD8BDH8ZfxmorZCQaANE2R53k36dV1/emmeRiGSJJkzO4NmF2IAIDFYoHX19e7JSi7wnO1grPMcgQD/6do2+0WdV13KzVjTFeSX61WzsJCn9kKtgRBMMmSlGUSIWKKG+XPwtkIbtsWx+MRVVXBGIPFYoEkSSaxSf5MnIxgrTV2ux2klN3o1VrjcDjgeDy66BIZowvWWiPP809L5afTCUVRjNwrOkYNEU3TYL/ff1mJqKoKbdsiTdO7JX9bjzPGIAxDxHE8uSMCowmu63pQiXjk/v1+jyzL/pJmqxr9xUXTNKiqClmWTSI9s4wSIpRS35JrsTW1/oi/Xq/Y7XY3V25a64fekDEZRfD7+/uPU7GmabqYba/vbVPaGD8VybNYaGit8fb29vA/yY7k7XbrPCZPYqHxCN99A+yE6noRMxvBP+FyuTiX/KsFA38OqXBNjhB7zMoFZIJdTy4fUUoNJPdXkpR9JRPs8sDdZ1RVhbIs0bbtoJbXP6DybMieHATB3aqvK6SUUEoN8mTKHTyyYbZerycXJix9uZ7nzfM7Od/3kWXZJEOFRQhBfn6Y9EtPAF28U0pBa+088bef0trdN+qNIXLB/zrTfX9/CSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTAwLJoYFE/Mfuu8crG4Pn8IAAAAASUVORK5CYII=',
      userImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAgVBMVEUAAADo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6Ojo6OjR0dHW1tbb29ve3t7i4uLY2Njk5OQwtOK3AAAAI3RSTlMAC+BHIPXxdwjb7J1PFOTWx71ZArhs6dGUFqZwmJBcKahdt2kJJfYAAAJXSURBVFjDxdkJcqswDAZghTUQKNkTkjZN32/W+x/wtZlpaUIksIHpdwCNFyHbgjrE9u64SvYe3DA4rI47OyZzs+jtgJbDWzQjAxv75ILhnuyN7uDOFkTWWWeYcz9Ep9CfU09rC71Ya+rD+Yfetg51unjQ4F26Vm8BTQtxJdMltC1TYfkCGAjYhXx/gZGXd2Z8Ujw54tMxxgGMBfGT/V1igGV7rxcYZNHKZwx0edgQDwN59xuzhaAuskxlWV7K3/VdfZHCVepbJoZcN/FmFliF+i0Hz2pKrg9Wru5V4Pk/Awzl8fUdY/g9xB2/fqpNWMcd3WwsYcJtmbCKm1tAGyz1TA2WfQt4AqdUzxRgXW9b4urMWN5o92tbImgGzMCLPgO+jhnw9TNggPGmjIAoBYZvSiNlkkZOG4HNfMdiYkt8pvSLn558FKzAYIuDaEUJGFz5kiW0B4MrsLI9eWBwR4DMI3Sri6o5pLqQi3FRiFF5ZGFUezpAVpfFL2UNWSIndpln6kHH3qz4T69JmEZ39iyE4lAoVg6Oz5evXAkqvnylfDyTiClRoDdfuW4H7CGlOtXcIRWxEzaYdMQd9KqHmjno6SquoFbuXLnLEpPRnaeVzV3nMrOA1oa7cCqzgGf2Sqx6Ya/E5I8T0GeeFRpryD0raG2Q2PljHq7lp1lZ5HmVPVNVeV60S+J22scjfWCgj4kf4MNbBNM2MYa3WaZtBDWcBAYSh1ixSTMtFtt9R2g6zkkW6TUkI+rkbNHb1pm0qTu87TxlY3x46/7vfy7c//5wAXef9Pn98R+pP67D9VcSWgAAAABJRU5ErkJggg==',
      userinfolist:[],
      userinfo:{
        oldpass:'',
        repass:'',
        newpass:''
      },
      a:true,
      b:false,
      c:false,
      d:false,
      e:false,
      isphone:false,//手机端时候显示
    };
  },
  mounted(){
    this.islogin();
    this.loaduserinformation();
    //jquery代码实现菜单特效
    $(function(){//实现鼠标点击实现哪一项是选中状态
      $('.rightmenulistbox>ul>li').click(function(){
        $('.rightmenulistbox>ul>li').removeClass('selectedclass');
        $(this).addClass('selectedclass');
      });
    })

    this.getcompanyinfos();
    //监听窗口变化
    const that = this;
    window.onresize = () => {
      return (() => {
        if(document.body.clientWidth>=1024){
          $('.menuleft').removeClass('animated slideOutLeft menushow');
          $('.menuleft').addClass('animated slideInLeft menushow');
          //$('.contentright').addClass('animated slideInLeft contentrightnewwidth');
        }else{
          this.showmenutoggle();
        }
      })();
    };
  },
  methods:{
    getcompanyinfos(){
        let geturl = window.localStorage.api+'/get/company';
        this.$http.get(geturl).then(res=>{
          if(res['data'].success){
            //console.log(res['data'].message);
            this.companyinfo = res['data'].message;
          }
        }).catch(err=>{
          //console.log(err);
        })
    },
    showmenutoggle(){
      if($('.menuleft').css('visibility')!='visible'){
        $('.menuleft').removeClass('animated slideOutLeft menushow');
        $('.menuleft').addClass('animated slideInLeft menushow');
        $('.lightblackbox').addClass('animated slideOut show');
      }else{
        $('.menuleft').removeClass('animated slideInLeft menushow');
        $('.menuleft').addClass('animated slideOutLeft menushow');
        $('.lightblackbox').removeClass('animated slideOut show');
      }
    },
    lightboxevents(){
      if(document.body.clientWidth<=1023){
        $('.menuleft').removeClass('animated slideInLeft menushow');
        $('.menuleft').addClass('animated slideOutLeft menushow');
        $('.lightblackbox').removeClass('animated slideOut show');
      }
    },
    loaduserinformation(){
      let url = window.localStorage.api+'/get/user/info';
      this.$http.get(url).then(res=>{
        //console.log(res);
        this.userinfolist = res['data'].message;
      }).catch(err=>{
        //console.log(err);
      })
    },
    saveeditinformations(){
      if(this.userinfo.oldpass==""||this.userinfo.oldpass==null||this.userinfo.oldpass==undefined){
        this.error('旧密码不能为空');
        return;
      }
      if(this.userinfo.newpass==""||this.userinfo.newpass==null||this.userinfo.newpass==undefined){
        this.error('请输入新密码！');
        return;
      }
      

      //修改密码
      let url = window.localStorage.api+'/save/pwd';
      let params = new URLSearchParams();
      params.append('pwd',this.userinfo.newpass);
      params.append('oldpwd',this.userinfo.oldpass);
      this.$http.post(url,params).then(res=>{
        //console.log(res);
        if(res['data'].success){
          this.success('密码修改成功！需要重新登录');
          //跳转到登录页面
          this.$router.push({path:'/pages/login'});
          sessionStorage.status = false;
        }else{
          this.error('密码修改失败：'+res['data'].message);
          
        }
      }).catch(err=>{
        //console.log('网络错误，请稍候重试！'+err);
      })
    },
    openblank(){
      let routeData = this.$router.resolve({path:'/pages/company/statisticsview'});
      window.open(routeData.href, "_blank");
    },
    Statistics(){

    },
    openlink(_str){
      this.$router.push({path:'/pages/company/'+_str});
    },
    //检测用户是否已经登录
    islogin(){
      if (
        sessionStorage.status == "" ||sessionStorage.status == null ||sessionStorage.status == undefined||sessionStorage.status==false) {
        //如果没有登录的session就跳转到登录页面
        this.$router.push({ path:"/pages/login" });
      } else {
        //已经是登录状态不需要做
        //this.instance("susscess","成功登录","现在您可以继续操作！");
         this.$router.push({path:'/pages/company/informations'});
      }
    },
    //给页面打开是一个动画
    showanimate(){
      $('.mainbox').addClass('animated fadeInRight');
    },
    //提示框
    instance(_type,_title,_content) {
      const title = _title;
      const content = _content;
      switch (_type) {
        case "info":
          this.$Modal.info({
            title: title,
            content: content
          });
          break;
        case "success":
          this.$Modal.success({
            title: title,
            content: content
          });
          break;
        case "warning":
          this.$Modal.warning({
            title: title,
            content: content
          });
          break;
        case "error":
          this.$Modal.error({
            title: title,
            content: content
          });
          break;
      }
    },
    //一级菜单显示二级菜单
    showmenu(_str){
      if (_str=="company") {
        this.a = true;
        this.b = false;
        this.c = false;
        this.d = false;
        this.e = false;
      }
      if(_str=="task"){
        this.a = false;
        this.b = true;
        this.c = false;
        this.d = false;
        this.e = false;
      }
      if(_str=="ranking"){
        this.a = false;
        this.b = false;
        this.c = true;
        this.d = false;
        this.e = false;
      }
      if(_str=="glory"){
        this.a = false;
        this.b = false;
        this.c = false;
        this.d = true;
        this.e = false;
      }
      if (_str=="some"){
        this.a = false;
        this.b = false;
        this.c = false;
        this.d = false;
        this.e = true;
      }
      // let arr = $('.childlist');
      // for (let i = 0; i < arr.length; i++) {
      //   if (arr.eq(i).attr('name')==_str) {
      //     console.log(arr.eq(i).attr('v-show'));
      //   }else{
          
      //   }
      // }

    },
    //公司信息
    cominfosset(){
      this.$router.push({path:'/pages/company/informations'});
      this.lightboxevents();
    },
    //审批设置
    exammanset(){
      this.$router.push({path:'/pages/company/examsettings'});
      this.lightboxevents();
    },
    //邦分设置
    integralset(){
      this.$router.push({path:'/pages/company/integralsettings'});
      this.lightboxevents();
    },
    //福利设置
    welfareset(){
      this.$router.push({path:'/pages/company/welfaresettings'});
      this.lightboxevents();
    },
    //常规任务设置
    taskset(){
      this.$router.push({path:'/pages/company/tasksettings'});
      this.lightboxevents();
    },
    //排班设置
    scheduset(){
      this.$router.push({path:'/pages/company/schedusettings'});
      this.lightboxevents();
    },
    //审批权限设置
    rightset(){
      this.$router.push({path:'/pages/company/rightsettings'});
      this.lightboxevents();
    },
    //组织架构设置
    organiset(){
      this.$router.push({path:'/pages/company/organizationsettings'});
      this.lightboxevents();
    },
    //项目管理
    projectset(){
      this.$router.push({path:'/pages/company/projectmanagers'});
      this.lightboxevents();
      //this.$router.push({path:'/pages/company/statisticsview'});
    },
    //数据统计
    dataset(){
      this.$router.push({path:'/pages/company/datastatistics'});
      this.lightboxevents();
    },
    //退出登录
    loginout(){
      this.$router.push({path:'/pages/login'});
      this.sessionStorage.status = false;
      this.sessionStorage.status = "";
      
    },
    //个人信息
    ownnerinfos(){
      $('.ownnerinfosclass').addClass('show animated fadeIn');
      this.lightboxevents();
    },
    closeownnerinfosclass(){
      $('.ownnerinfosclass').removeClass('show animated fadeIn');
    },
    //公司信息
    companyinfos(){
      this.$router.push({path:'/pages/company/informations'});
      this.lightboxevents();
    },
    //公司设置
    companyedit(){
      this.$router.push({path:'/pages/company/editinfos'});
      this.lightboxevents();
    },
    //邦分设置
    bangfensetting(){
      this.$router.push({path:'/pages/company/integralsettings'});
      this.lightboxevents();
    },
    //通知设置
    noticeset(){
      this.$router.push({path:'/pages/company/notice'});
      this.lightboxevents();
    },
    //显示功能开发中
     developing(){
      this.$router.push({path:'/pages/company/none'});
      this.lightboxevents();
     },
    //
    //
    //
        //--上传图片--------------------------------------------
        ophandleBeforeUpload(file) {//logo
          this.uploadimg(file,'add');
        },
        handleFormatError(file) {
          this.$Notice.warning({
            title: '文件格式不正确',
            desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
          })
        },
        uploadimg(_img,_type){
          let upurl = window.localStorage.api + "/api/upload";//上传图片
          let params = new FormData();
          params.append('file',_img,_img.name);//图片
          let config = {
            headers: {'Content-Type': 'multipart/form-data'}
          }
          //console.log(_img);
          this.$http.post(upurl,params).then((res)=>{
            //console.log(res['data'].message.fileurl);
            this.userinfo.userimg = res['data'].message.fileurl;
          }).catch((err)=>{
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
        //--上传图片--------------------------------------------
  }
};

//jquery代码实现菜单特效
$(function(){
  $('.rightmenulistbox>ul>li').click(function(){
    $('.rightmenulistbox>ul>li').removeClass('selectedclass');
    $(this).addClass('selectedclass');
  });
})
</script>

<style scoped>

    /*适配各种尺寸-手机端*/
    @media only screen and (max-width: 767px) and (min-width: 320px)
    {
      .mainbox{
        width:100%;
        height:100%;
        position: relative;
      }

      .mainbox .admintop{
        height:70px;
        background:white;
        border-left:1px solid #E0E0E0;
        border-bottom: 1px solid #E0E0E0;
        line-height: 70px;
        text-indent: 20px;
        font-size: 16px;
        background:#6680ff;
      }

      .mainbox .admincontentbox{
        height:100%;
        padding:10px;
      }

      .menuleft{
        height:100%;
        width:281px;
        border-right:1px solid #ededed;
        position: absolute;
        z-index: 1000;
        background:white;
      }

      .menubutton{
        width:30px;
        height:30px;
        position:absolute;
        opacity: 0.5;
        background:#E0E0E0;
        text-align: center;
        line-height:30px;
        left:5px;
        top:72px;
        cursor: pointer;
        border-radius: 4px;
        -webkit-transform:3s;
      }

      .menubutton:hover{
        opacity:1;
      }

      .menuunshow{
        visibility: hidden;
        z-index:-1000;
      }

      .menushow{
        visibility:visible;
        z-index: 1000;
      }

      .lightblackbox{
        position: absolute;
        width:100%;
        height:100%;
        opacity: 0.9;
        background:rgb(0, 0, 0);
        z-index: 999;
      }

      .unlightbox{
        background: transparent;
        z-index: -999;
      }

      .menuleft .menutop{
        height:70px;
        border-bottom:1px solid #E0E0E0;  }



      .menuleft .menutop .logoimg{
        height: 70px;
        width:50px;
        /* background-image: linear-gradient(-90deg, 
        #3355ff 0%, 
        #667fff 100%); */
        position: relative;
        border-right:1px solid #E0E0E0;
      }

      .menuleft .menutop .logoimg img{
        height: 40px;
        width:40px;
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin: auto;
      }

      /*菜单*/
      .menuleft .menuunder{
        width:100%;
        height:calc(100% - 71px);
      }
      /*左侧菜单栏样式*/
      .menuleft .menuunder .leftmenulist{
        width:50px;
        height:100%;
        border-right:1px solid #E0E0E0;
      }

      .leftmenulist ul{
        width:50px;
        height: 100%;
        position: relative;
      }

      .leftmenulist ul li{
        display:block;
        width:50px;
        height:50px;
        cursor: pointer;
        transition: all 1s ease 0s;
      }

      .leftmenulist ul li:hover{
        background:#f5f6ff;
        transition:background-color 0.3s #d8d8d8;
      }

      .leftmenulist ul li span{
        display: block;
        width:50px;
        height:50px;
        padding: 14px;
      }

      .leftmenulist ul .setting{
        position:absolute;
        bottom: 70px;
        width:50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
      }

      .leftmenulist ul .setting .settingbox{
        display: block;
        text-align: center;
        line-height: 30px;
        width: 30px;
        height: 30px;
        background-color: #6680ff;
        border-radius: 5px;
        margin:auto;
        bottom: 0;
        left:0;
        right:0;
        top:0;
        position: absolute;
        cursor: pointer;
      }

      .leftmenulist ul .setting .settingbox img{
          clear: both;
          position: absolute;
          left:0;
          top:0;
          right:0;
          bottom:0;
          margin: auto;
      }


      .leftmenulist ul .userimg{
        position:absolute;
        width:50px;
        height: 50px;
        bottom: 20px;
        text-align: center;
        line-height: 50px;
      }

      .leftmenulist ul .userimg img{
        clear: both;
        border-radius: 20px !important;
        width:30px !important;
        height:30px !important;
        background:gray !important;
        text-align: center;
        margin-top:10px;
        cursor: pointer;
      }

      .menuleft .menuunder .rightmenubox{
        width:calc(100% - 51px);
        height:100%;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist{
        width:100%;
        height: 100%;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .childlist{
        height:calc(100% - 70px);
        padding:10px;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .menu-title{
        height:50px;
        width:100%;
        border-bottom: 1px solid #E0E0E0;
        line-height: 50px;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #2e2f33;
        background:red;
        text-indent: 20px;
        background:url(..\assets\iMenu\normal\icon_tab_guangli_normal.png) no-repeat 170px 13px;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .rightmenulistbox ul li{
          width:100%;
          height:50px;
          line-height: 50px;
          text-indent: 31px;
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          color: #2e2f33;
          cursor: pointer;
          transition: all 0.3s ease 0s;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .rightmenulistbox ul li:hover{
        color:#667fff;
        background: #ebeeff;
        border-left:3px solid #6680ff;
        transition:background-color #ebeeff;
        transition:border-left #6680ff;
        text-indent: 35px;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .rightmenulistbox ul li .pic{
          display: block;
          height:50px;
          width:50px;
          line-height: 50px;
          text-align: center;
          float: left;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .rightmenulistbox ul li span{
          display: block;
          float: left;
      }





      .menuleft .menutop .searchbox{
        width:calc(100% - 50px);
        height: 70px;
        position: relative;
      }

      .menuleft .menutop .searchbox .inbox{
        position: absolute;
        width:80%;
        height: 40px;
        margin:auto;
        left:0;
        right:0;
        top:0;
        bottom:0;
      }

      .menuleft .menutop .searchbox .inbox input{
        width:100px;
        height:40px;
      }

      .contentright{
        height:calc(100% - 70px);
        width:100%;
        background: #f7f7f7;
      }

      .contentrightnewwidth{
        width:calc(100% - 281px) !important;
      }

      .menulist{
        text-align: left;
        color:gray;
        font-size: 12px;
      }

      .menulist button{
        font-size: 12px;
        color:gray;
      }

      .selectedclass{
        color:#667fff;
        background: #ebeeff;
        border-left:3px solid #6680ff;
        transition:background-color #ebeeff;
        transition:border-left #6680ff;
        text-indent: 35px;
      }

      .unselectedclass{
        color:#f7f7f7;
        background: #ffffff;
        border-left:3px solid #ffffff;
        transition:background-color #ffffff;
        transition:border-left #ffffff;
        text-indent: 35px;
      }


      /*个人信息*/
      .ownnerinfosclass{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        margin:auto;
        width: 340px;
        height: 310px;
        background-color: #ffffff;
        box-shadow: 0px 0px 20px 0px 
          rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        z-index:1000;
      }

      .ownnerinfosclass .addwelfare-title{
        height: 50px;
        width:100%;
        line-height: 50px;
        background-color: #ededed;
        border-radius: 5px 5px 0px 0px;
      }

      .ownnerinfosclass .addwelfare-title span{
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #5c5d66;
      }


      .ownnerinfosclass .addwelfare-content{
        height:calc(100% - 50px);
        width:100%;
      }



      .ownnerinfosclass .addwelfare-content .boxlist{
        padding:10px;
        overflow: hidden;
        width:100%;
      }


      .ownnerinfosclass .addwelfare-content .boxlist .list-content{
        overflow: hidden;
        width:100%;
      }

      .ownnerinfosclass .addwelfare-content .boxlist .list-content .spanlist{
        display: block;
        line-height: 40px;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #2e2f33;
        padding-right:10px;
        text-align: left;
        
      }

      .ownnerinfosclass .addwelfare-content .boxlist .list-content .list-content-img{
        margin-right:10px;
      }
      .ownnerinfosclass .addwelfare-content .boxlist .list-content .list-content-img img{
        width:88px;
        height:88px;
      }

      .ownnerinfosclass .addwelfare-content .boxlist .list-content-upbtn span{
        text-align: center;
      }
      /*个人信息*/

      .unshow{
        visibility: hidden;
        z-index:-1000;
      }

      .show{
        visibility: visible;
        z-index: 1000;
      }
    }

    /*适配各种尺寸-平板电脑*/
    @media only screen and (max-width: 1023px) and (min-width: 768px)
    {
      .mainbox{
        width:100%;
        height:100%;
        position: relative;
      }

      .mainbox .admintop{
        height:70px;
        background:#6680ff;
        border-left:1px solid #E0E0E0;
        border-bottom: 1px solid #E0E0E0;
        line-height: 70px;
        text-indent: 20px;
      }

      .mainbox .admincontentbox{
        height:100%;
        padding:10px;
      }

      .menuleft{
        height:100%;
        width:281px;
        border-right:1px solid #ededed;
        position: absolute;
        z-index: 1000;
        background:white;
      }

      .menuunshow{
        visibility: hidden;
        z-index:-1000;
      }

      .menuleft .menutop{
        height:70px;
        border-bottom:1px solid #E0E0E0;  }



      .menuleft .menutop .logoimg{
        height: 70px;
        width:50px;
        /* background-image: linear-gradient(-90deg, 
        #3355ff 0%, 
        #667fff 100%); */
        position: relative;
        border-right:1px solid #E0E0E0;
      }

      .menuleft .menutop .logoimg img{
        height: 40px;
        width:40px;
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin: auto;
      }

      /*菜单*/
      .menuleft .menuunder{
        width:100%;
        height:calc(100% - 71px);
      }
      /*左侧菜单栏样式*/
      .menuleft .menuunder .leftmenulist{
        width:50px;
        height:100%;
        border-right:1px solid #E0E0E0;
      }

      .leftmenulist ul{
        width:50px;
        height: 100%;
        position: relative;
      }

      .leftmenulist ul li{
        display:block;
        width:50px;
        height:50px;
        cursor: pointer;
        transition: all 1s ease 0s;
      }

      .leftmenulist ul li:hover{
        background:#f5f6ff;
        transition:background-color 0.3s #d8d8d8;
      }

      .leftmenulist ul li span{
        display: block;
        width:50px;
        height:50px;
        padding: 14px;
      }

      .leftmenulist ul .setting{
        position:absolute;
        bottom: 70px;
        width:50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
      }

      .leftmenulist ul .setting .settingbox{
        display: block;
        text-align: center;
        line-height: 30px;
        width: 30px;
        height: 30px;
        background-color: #6680ff;
        border-radius: 5px;
        margin:auto;
        bottom: 0;
        left:0;
        right:0;
        top:0;
        position: absolute;
        cursor: pointer;
      }

      .leftmenulist ul .setting .settingbox img{
          clear: both;
          position: absolute;
          left:0;
          top:0;
          right:0;
          bottom:0;
          margin: auto;
      }


      .leftmenulist ul .userimg{
        position:absolute;
        width:50px;
        height: 50px;
        bottom: 20px;
        text-align: center;
        line-height: 50px;
      }

      .leftmenulist ul .userimg img{
        clear: both;
        border-radius: 20px !important;
        width:30px !important;
        height:30px !important;
        background:gray !important;
        text-align: center;
        margin-top:10px;
        cursor: pointer;
      }


      .menuleft .menuunder .rightmenubox{
        width:calc(100% - 51px);
        height:100%;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist{
        width:100%;
        height: 100%;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .childlist{
        height:calc(100% - 70px);
        padding:10px;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .menu-title{
        height:50px;
        width:100%;
        border-bottom: 1px solid #E0E0E0;
        line-height: 50px;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #2e2f33;
        background:red;
        text-indent: 20px;
        background:url(..\assets\iMenu\normal\icon_tab_guangli_normal.png) no-repeat 170px 13px;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .rightmenulistbox ul li{
          width:100%;
          height:50px;
          line-height: 50px;
          text-indent: 31px;
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          color: #2e2f33;
          cursor: pointer;
          transition: all 0.3s ease 0s;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .rightmenulistbox ul li:hover{
        color:#667fff;
        background: #ebeeff;
        border-left:3px solid #6680ff;
        transition:background-color #ebeeff;
        transition:border-left #6680ff;
        text-indent: 35px;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .rightmenulistbox ul li .pic{
          display: block;
          height:50px;
          width:50px;
          line-height: 50px;
          text-align: center;
          float: left;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .rightmenulistbox ul li span{
          display: block;
          float: left;
      }

      .menubutton{
        width:30px;
        height:30px;
        position:absolute;
        opacity: 0.5;
        background:#E0E0E0;
        text-align: center;
        line-height:30px;
        left:5px;
        top:72px;
        cursor: pointer;
        border-radius: 4px;
        -webkit-transform:3s;
      }

      .menubutton:hover{
        opacity:1;
      }

      .menuunshow{
        visibility: hidden;
        z-index:-1000;
      }

      .menushow{
        visibility:visible;
        z-index: 1000;
      }

      .lightblackbox{
        position: absolute;
        width:100%;
        height:100%;
        opacity: 0.9;
        background:rgb(0, 0, 0);
        z-index: 999;
      }

      .unlightbox{
        background: transparent;
        z-index: -999;
      }



      .menuleft .menutop .searchbox{
        width:calc(100% - 50px);
        height: 70px;
        position: relative;
      }

      .menuleft .menutop .searchbox .inbox{
        position: absolute;
        width:80%;
        height: 40px;
        margin:auto;
        left:0;
        right:0;
        top:0;
        bottom:0;
      }

      .menuleft .menutop .searchbox .inbox input{
        width:100px;
        height:40px;
      }

      .contentright{
        height:calc(100% - 70px);
        width:100%;
        background: #f7f7f7;
      }


      .menulist{
        text-align: left;
        color:gray;
        font-size: 12px;
      }

      .menulist button{
        font-size: 12px;
        color:gray;
      }

      .selectedclass{
        color:#667fff;
        background: #ebeeff;
        border-left:3px solid #6680ff;
        transition:background-color #ebeeff;
        transition:border-left #6680ff;
        text-indent: 35px;
      }

      .unselectedclass{
        color:#f7f7f7;
        background: #ffffff;
        border-left:3px solid #ffffff;
        transition:background-color #ffffff;
        transition:border-left #ffffff;
        text-indent: 35px;
      }


      /*个人信息*/
      .ownnerinfosclass{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        margin:auto;
        width: 340px;
        height: 310px;
        background-color: #ffffff;
        box-shadow: 0px 0px 20px 0px 
          rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        z-index:1000;
      }

      .ownnerinfosclass .addwelfare-title{
        height: 50px;
        width:100%;
        line-height: 50px;
        background-color: #ededed;
        border-radius: 5px 5px 0px 0px;
      }

      .ownnerinfosclass .addwelfare-title span{
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #5c5d66;
      }


      .ownnerinfosclass .addwelfare-content{
        height:calc(100% - 50px);
        width:100%;
      }



      .ownnerinfosclass .addwelfare-content .boxlist{
        padding:10px;
        overflow: hidden;
        width:100%;
      }


      .ownnerinfosclass .addwelfare-content .boxlist .list-content{
        overflow: hidden;
        width:100%;
      }

      .ownnerinfosclass .addwelfare-content .boxlist .list-content .spanlist{
        display: block;
        line-height: 40px;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #2e2f33;
        padding-right:10px;
        text-align: left;
        
      }

      .ownnerinfosclass .addwelfare-content .boxlist .list-content .list-content-img{
        margin-right:10px;
      }
      .ownnerinfosclass .addwelfare-content .boxlist .list-content .list-content-img img{
        width:88px;
        height:88px;
      }

      .ownnerinfosclass .addwelfare-content .boxlist .list-content-upbtn span{
        text-align: center;
      }
      /*个人信息*/

      .unshow{
        visibility: hidden;
        z-index:-1000;
      }

      .show{
        visibility: visible;
        z-index: 1000;
      }
    }

    /*适配各种尺寸-PC端小屏幕*/
    @media only screen and (max-width: 2560px) and (min-width: 1024px)
    {
      .mainbox{
        width:100%;
        height:100%;
        position: relative;
      }

      .mainbox .admintop{
        display: none;
        height:70px;
        background:white;
        border-left:1px solid #E0E0E0;
        border-bottom: 1px solid #E0E0E0;
        line-height: 70px;
        text-indent: 20px;
      }

      .mainbox .admincontentbox{
        height:100%;
        padding:10px;
      }

      .menuleft{
        height:100%;
        width:281px;
        border-right:1px solid #ededed;
      }

      

      .menuleft .menutop{
        height:70px;
        border-bottom:1px solid #E0E0E0;  }



      .menuleft .menutop .logoimg{
        height: 70px;
        width:50px;
        /* background-image: linear-gradient(-90deg, 
        #3355ff 0%, 
        #667fff 100%); */
        position: relative;
        border-right:1px solid #E0E0E0;
      }

        .menuleft .menutop .logoimg img{
        height: 40px;
        width:40px;
        position: absolute;
        left:0;
        right:0;
        top:0;
        bottom:0;
        margin: auto;
      }

      /*菜单*/
      .menuleft .menuunder{
        width:100%;
        height:calc(100% - 71px);
      }
      /*左侧菜单栏样式*/
      .menuleft .menuunder .leftmenulist{
        width:50px;
        height:100%;
        border-right:1px solid #E0E0E0;
      }

      .leftmenulist ul{
        width:50px;
        height: 100%;
        position: relative;
      }

      .leftmenulist ul li{
        display:block;
        width:50px;
        height:50px;
        cursor: pointer;
        transition: all 1s ease 0s;
      }

      .leftmenulist ul li:hover{
        background:#f5f6ff;
        transition:background-color 0.3s #d8d8d8;
      }

      .leftmenulist ul li span{
        display: block;
        width:50px;
        height:50px;
        padding: 14px;
      }

      .leftmenulist ul .setting{
        position:absolute;
        bottom: 70px;
        width:50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
      }

      .leftmenulist ul .setting .settingbox{
        display: block;
        text-align: center;
        line-height: 30px;
        width: 30px;
        height: 30px;
        background-color: #6680ff;
        border-radius: 5px;
        margin:auto;
        bottom: 0;
        left:0;
        right:0;
        top:0;
        position: absolute;
        cursor: pointer;
      }

      .leftmenulist ul .setting .settingbox img{
          clear: both;
          position: absolute;
          left:0;
          top:0;
          right:0;
          bottom:0;
          margin: auto;
      }


      .leftmenulist ul .userimg{
        position:absolute;
        width:50px;
        height: 50px;
        bottom: 20px;
        text-align: center;
        line-height: 50px;
      }

      .leftmenulist ul .userimg img{
        clear: both;
        border-radius: 20px !important;
        width:30px !important;
        height:30px !important;
        background:gray !important;
        text-align: center;
        margin-top:10px;
        cursor: pointer;
      }





      .menuleft .menuunder .rightmenubox{
        width:calc(100% - 51px);
        height:100%;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist{
        width:100%;
        height: 100%;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .childlist{
        height:calc(100% - 70px);
        padding:10px;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .menu-title{
        height:50px;
        width:100%;
        border-bottom: 1px solid #E0E0E0;
        line-height: 50px;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        font-weight: bold;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #2e2f33;
        background:red;
        text-indent: 20px;
        background:url(..\assets\iMenu\normal\icon_tab_guangli_normal.png) no-repeat 170px 13px;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .rightmenulistbox ul li{
          width:100%;
          height:50px;
          line-height: 50px;
          text-indent: 31px;
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          color: #2e2f33;
          cursor: pointer;
          transition: all 0.3s ease 0s;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .rightmenulistbox ul li:hover{
        color:#667fff;
        background: #ebeeff;
        border-left:3px solid #6680ff;
        transition:background-color #ebeeff;
        transition:border-left #6680ff;
        text-indent: 35px;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .rightmenulistbox ul li .pic{
          display: block;
          height:50px;
          width:50px;
          line-height: 50px;
          text-align: center;
          float: left;
      }

      .menuleft .menuunder .rightmenubox .rightmenulist .rightmenulistbox ul li span{
          display: block;
          float: left;
      }





      .menuleft .menutop .searchbox{
        width:calc(100% - 50px);
        height: 70px;
        position: relative;
      }

      .menuleft .menutop .searchbox .inbox{
        position: absolute;
        width:80%;
        height: 40px;
        margin:auto;
        left:0;
        right:0;
        top:0;
        bottom:0;
      }

      .menuleft .menutop .searchbox .inbox input{
        width:100px;
        height:40px;
      }

      .contentright{
        height:100%;
        width:calc(100% - 281px);
        background: #f7f7f7;
      }


      .menulist{
        text-align: left;
        color:gray;
        font-size: 12px;
      }

      .menulist button{
        font-size: 12px;
        color:gray;
      }

      .selectedclass{
        color:#667fff;
        background: #ebeeff;
        border-left:3px solid #6680ff;
        transition:background-color #ebeeff;
        transition:border-left #6680ff;
        text-indent: 35px;
      }

      .unselectedclass{
        color:#f7f7f7;
        background: #ffffff;
        border-left:3px solid #ffffff;
        transition:background-color #ffffff;
        transition:border-left #ffffff;
        text-indent: 35px;
      }


      /*个人信息*/
      .ownnerinfosclass{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom: 0;
        margin:auto;
        width: 340px;
        height: 310px;
        background-color: #ffffff;
        box-shadow: 0px 0px 20px 0px 
          rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        z-index:1000;
      }

      .ownnerinfosclass .addwelfare-title{
        height: 50px;
        width:100%;
        line-height: 50px;
        background-color: #ededed;
        border-radius: 5px 5px 0px 0px;
      }

      .ownnerinfosclass .addwelfare-title span{
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #5c5d66;
      }


      .ownnerinfosclass .addwelfare-content{
        height:calc(100% - 50px);
        width:100%;
      }



      .ownnerinfosclass .addwelfare-content .boxlist{
        padding:10px;
        overflow: hidden;
        width:100%;
      }


      .ownnerinfosclass .addwelfare-content .boxlist .list-content{
        overflow: hidden;
        width:100%;
      }

      .ownnerinfosclass .addwelfare-content .boxlist .list-content .spanlist{
        display: block;
        line-height: 40px;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        letter-spacing: 0px;
        color: #2e2f33;
        padding-right:10px;
        text-align: left;
        
      }

      .ownnerinfosclass .addwelfare-content .boxlist .list-content .list-content-img{
        margin-right:10px;
      }
      .ownnerinfosclass .addwelfare-content .boxlist .list-content .list-content-img img{
        width:88px;
        height:88px;
      }

      .ownnerinfosclass .addwelfare-content .boxlist .list-content-upbtn span{
        text-align: center;
      }
      /*个人信息*/

      .unshow{
        visibility: hidden;
        z-index:-1000;
      }

      .show{
        visibility: visible;
        z-index: 1000;
      }
    }


</style>


<style>
.el-tabs__nav{
  padding-top:20px !important;
}
</style>
