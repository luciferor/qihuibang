<template>
  <div class="thebox">
    <!--loginbox start-->
    <div class="loginbox">
      <div class="login-logo fl">
        <div class="logo"><img src="../assets/logo.png" width="58"  height="59" /></div>
        <div class="txt">
          <span>www.qihuibang.co</span>
        </div>
      </div>
      <div class="login-select fl">
        <!--输入框 start-->
        <div class="inputtop">
          <span>
            <div style="line-height:36px; float:left;"><img src="../assets/left.png" /></div>
            <i-button class="onstyle" type="text" style="margin-bottom:10px;" @click="gotoback">登录</i-button>
          </span>
          <Tabs active-key="key1">
            <Tab-pane label="找回密码" key="key1">
              <div class="passwordbox">
                <el-input size="small" v-model="adminphone"  placeholder="请输入手机号" style="border:none;"></el-input>
              </div>
              <div class="passwordbox">
                <el-input size="small" v-model="admincode" style="width:60%; border:none;"  placeholder="请输入验证码"></el-input>
                <i-button class="bluecolor" @click="getcode" :disabled="codegetstatus">{{codegetvalue}}</i-button>
              </div>
              <div class="passwordbox">
                <el-input size="small" v-model="adminpassword" type="password"  placeholder="设置新密码" style="border:none;"></el-input>
              </div>
              <div class="passwordbox">
                <el-input size="small" v-model="isadminpassword" type="password"  placeholder="确认密码" style="border:none;"></el-input>
              </div>
              <div class="passwordbox iph45">
                <i-button @click="savepassword" style="background-color:#ededed; width:100%;">确 认 修 改</i-button>
              </div>
            </Tab-pane>
          </Tabs>
        </div>
        <!--底 部 end-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'forget',
  data(){
    return{
      adminphone:'',//手机号
      admincode:'',//验证码
      adminpassword:'',//密码
      isadminpassword:'',//确认密码
      count:60,//一分钟
      codegetstatus:false,
      codegetvalue:'获取验证码'
    }
  },
  methods:{
    gotoback(){//返回登录
      this.$router.push({path:"/pages/login"});
    },
    getcode(){//获取验证码
      if(this.adminphone==""){
        this.error("请输入手机号再获取！");
        return;
      }
      let actype = "mod_pwd";
      let apiurl = window.localStorage.api+"/get/phone/code?mobile_phone="+this.adminphone+"&type="+actype;
      this.$http.get(apiurl).then(res=>{
        //console.log(res);
        if(res['data'].success){
          this.success('验证码发送成功，请注意查收！');
          //设置一分钟获取一次
          this.setintervalid = setInterval(this.countsum,1000);
        }else{
          this.error("发送失败，请重试");
        }
      }).catch(err=>{
        //console.log("网络错误"+err);
      })
    },
    savepassword(){//确认修改密码
      if(this.adminphone==""||this.adminphone==null||this.adminphone==undefined||this.admincode==""||this.admincode==null||this.admincode==undefined||this.adminpassword==""||this.adminpassword==null||this.adminpassword==undefined||this.isadminpassword==""||this.isadminpassword==null||this.isadminpassword==undefined){
        this.error("请检查您的数据是否输入完整！请输入必须的数据再操作！");
        return;
      }

      //忘记密码，修改密码
      let repassurl = window.localStorage.api + "/forget/pwd";//验证码登录
      let params = new URLSearchParams();
      params.append('mobile_phone',this.adminphone);//用户手机号
      params.append('code',this.admincode);//验证码
      params.append('pwd',this.adminpassword);//密码
      params.append('againpwd',this.isadminpassword);//确认密码
      this.$http.post(repassurl,params).then((res)=>{
        //console.log(res);
        if(res['data'].success){
          this.success("重置密码成功！");
          //this.loadingblack();
          this.$router.push({ path:"/pages/login" });//跳转到登录
        }else{
          this.error("修改失败"+res['data'].message);
        }
      }).catch((err)=>{
        this.error("网络错误！请稍候再试或联系系统管理员！"+err);
      })
    },
    //页面提示信息
    success(_str) {
      this.$alert(_str, '系统提示', {
          confirmButtonText: '确定',
          
        });
    },
    warning(_str) {
      this.$alert(_str, '严重警告', {
          confirmButtonText: '确定',
          
        });
    },
    error(_str) {
      this.$alert(_str, '错误提示', {
          confirmButtonText: '确定',
          
        });
    },
    countsum(){//设置验证码60秒以后才能重新获取
      this.count--;
      this.codegetstatus = true;
      this.codegetvalue = "重新发送("+this.count+")";
      if(this.count==0||this.count<0){//当他等于0时清除setinterval
        this.codegetstatus = false;
        this.codegetvalue = "获取验证码"
        this.count = 60;
        //清除setinterval
        clearInterval(this.setintervalid);
      }
      //console.log(this.count);
    },
  }

}
</script>

<style scoped>
  .thebox{
    background: url(../assets/login_bg.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height:100vh;
    /*兼容低版本*/
   filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../assets/logo.png', sizingMethod='scale');
    -ms-filter: "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='../assets/logo.png', sizingMethod='scale')";
  }


  /*适配各种尺寸-手机端*/
  @media only screen and (max-width: 767px) and (min-width: 100px)
  {
    /*登录框样式*/
    .loginbox{
      width:100%;
      height:100%;
      background: white;
    }
    /*左部分盒子样式*/
    .loginbox .login-logo{
      width:100%;
      height:30%;
      background:url(../assets/left_bg.png) repeat-x -5px;
      position: relative;
      clear: both !important;
      text-align: center;
    }

    .login-logo .logo{
      width:58px;
      height:59px;
      position: absolute;
      left:0;
      right:0;
      top: 0;
      bottom: 0;
      margin: auto;
      /*50%为自身尺寸的一半*/
    }

    .login-logo .txt{
      bottom: 5px;
      position:absolute;
      width: 107px;
      height: 10px;
      font-family: MicrosoftYaHei;
      font-size: 13px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #ffffff;
      margin: auto;
      left:0;
      right:0;
      bottom:15px;

    }

    /*右部分盒子样式*/
    .loginbox .login-select{
      width:100%;
      height: 70%;
    }


    .loginbox .login-select .inputtop{
      width:100%;
      height:85%;
      padding:60px 60px 0px 60px;
    }


    .loginbox .login-select .inputtop .phonebox{
      width:100%;
      /*border-bottom:1px solid #dedede;*/
      height: 70px;
      padding-top:30px;
    }

    .loginbox .login-select .inputtop .phonebox input{
      border:none;
      height: 39px;
      line-height: 39px;
      width:100%;
    }

    .loginbox .login-select .inputtop .passwordbox{
      width:100%;
      /*border-bottom:1px solid #dedede;*/
      height: 60px;
      padding-top:20px;
    }

      .loginbox .login-select .inputtop .passwordbox input{
        border:none !important;
        width:60px !important;
      }
      .loginbox .login-select .inputtop .passwordbox button{
        border:none !important;
        width:38%;
      }

    .loginbox .login-select .inputtop .isagree{
      width:100%;
      padding-top:20px;
    }

    .loginbox .login-select .inputtop .loginbtn{
      width:100%;
      padding-top:52px;
    }



    .loginbox .login-select .rebuttom{
      width:100%;
      height:15%;
      background:#f7f7f7;
      text-align: center;
      padding-top:23px;
      border-radius: 0px 0px 5px 0px;
    }


    .loginbox .login-select .rebuttom .rebuttomli{
      cursor: pointer;
    }

    .loginbox .login-select .rebuttom .rebuttomli span{
      cursor: pointer !important;
    }

    .iph45{
      margin-bottom: 50px;
    }

  }

  /*适配各种尺寸-平板电脑*/
  @media only screen and (max-width: 1023px) and (min-width: 768px)
  {
    /*登录框样式*/
    .loginbox{
      width:70%;
      height:70%;
      background: white;
      position: absolute;
      border-radius: 5px;
      left:0;
      right:0;
      top: 0;
      bottom: 0;
      margin: auto;
      /*50%为自身尺寸的一半*/
      -webkit-box-shadow: 2px 2px 5px #333;
      box-shadow: 2px 2px 5px #333;
    }
    /*左部分盒子样式*/
    .loginbox .login-logo{
      width:100%;
      height: 30%;
      background:url(../assets/left_bg.png) repeat-x -5px;
      position: relative;
      clear: both !important;
      text-align: center;
    }

    .login-logo .logo{
      width:58px;
      height:59px;
      position: absolute;
      left:0;
      right:0;
      top: 0;
      bottom: 0;
      margin: auto;
      /*50%为自身尺寸的一半*/
    }

    .login-logo .txt{
      bottom: 5px;
      position:absolute;
      width: 100%;
      height: 10px;
      font-family: MicrosoftYaHei;
      font-size: 13px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #ffffff;
      margin: auto;
      left:0;
      right:0;
      bottom:15px;

    }

    /*右部分盒子样式*/
    .loginbox .login-select{
      width:100%;
      height: 70%;
      clear:  both !important;
    }


    .loginbox .login-select .inputtop{
      width:100%;
      height: 85%;
      padding:60px 60px 0px 60px;
    }


    .loginbox .login-select .inputtop .phonebox{
      width:100%;
      /*border-bottom:1px solid #dedede;*/
      height: 70px;
      padding-top:30px;
    }

    .loginbox .login-select .inputtop .phonebox input{
      border:none;
      height: 39px;
      line-height: 39px;
      width:100%;
    }

    .loginbox .login-select .inputtop .passwordbox{
      width:100%;
      /*border-bottom:1px solid #dedede;*/
      height: 60px;
      padding-top:20px;
    }

      .loginbox .login-select .inputtop .passwordbox input{
        border:none !important;
        width:60px !important;
      }
      .loginbox .login-select .inputtop .passwordbox button{
        border:none !important;
        width:38%;
      }

    .loginbox .login-select .inputtop .isagree{
      width:100%;
      padding-top:20px;
    }

    .loginbox .login-select .inputtop .loginbtn{
      width:100%;
      padding-top:52px;
    }



    .loginbox .login-select .rebuttom{
      width:100%;
      height:15%;
      background:#f7f7f7;
      text-align: center;
      padding-top:23px;
      border-radius: 0px 0px 5px 0px;
    }


    .loginbox .login-select .rebuttom .rebuttomli{
      cursor: pointer;
    }

    .loginbox .login-select .rebuttom .rebuttomli span{
      cursor: pointer !important;
    }
  }

  /*适配各种尺寸-PC端小屏幕*/
  @media only screen and (max-width: 1920px) and (min-width: 1024px)
  {
    /*登录框样式*/
    .loginbox{
      width:640px;
      height:480px;
      background: white;
      position: absolute;
      border-radius: 5px;
      left:0;
      right:0;
      top: 0;
      bottom: 0;
      margin: auto;
      /*50%为自身尺寸的一半*/
      -webkit-box-shadow: 2px 2px 5px #333;
      box-shadow: 2px 2px 5px #333;
    }
    /*左部分盒子样式*/
    .loginbox .login-logo{
      width:240px;
      height:480px;
      background:url(../assets/left_bg.png) no-repeat;
      position: relative;
    }

    .login-logo .logo{
      width:58px;
      height:59px;
      position: absolute;
      left:0;
      right:0;
      top: 0;
      bottom: 0;
      margin: auto;
      /*50%为自身尺寸的一半*/
    }

    .login-logo .txt{
      bottom: 5px;
      position:absolute;
      width: 107px;
      height: 10px;
      font-family: MicrosoftYaHei;
      font-size: 13px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #ffffff;
      margin: auto;
      left:0;
      right:0;
      bottom:15px;

    }

    /*右部分盒子样式*/
    .loginbox .login-select{
      width:400px;
      height: 480px;
    }


    .loginbox .login-select .inputtop{
      width:400px;
      height:420px;
      padding:60px 60px 0px 60px;
    }


    .loginbox .login-select .inputtop .phonebox{
      width:100%;
      /*border-bottom:1px solid #dedede;*/
      height: 70px;
      padding-top:30px;
    }

    .loginbox .login-select .inputtop .phonebox input{
      border:none;
      height: 39px;
      line-height: 39px;
      width:100%;
    }

    .loginbox .login-select .inputtop .passwordbox{
      width:100%;
      /*border-bottom:1px solid #dedede;*/
      height: 60px;
      padding-top:20px;
    }

      .loginbox .login-select .inputtop .passwordbox input{
        border:none !important;
        width:60px !important;
      }
      .loginbox .login-select .inputtop .passwordbox button{
        border:none !important;
        width:38%;
      }

    .loginbox .login-select .inputtop .isagree{
      width:100%;
      padding-top:20px;
    }

    .loginbox .login-select .inputtop .loginbtn{
      width:100%;
      padding-top:52px;
    }



    .loginbox .login-select .rebuttom{
      width:400px;
      height:60px;
      background:#f7f7f7;
      text-align: center;
      padding-top:23px;
      border-radius: 0px 0px 5px 0px;
    }


    .loginbox .login-select .rebuttom .rebuttomli{
      cursor: pointer;
    }

    .loginbox .login-select .rebuttom .rebuttomli span{
      cursor: pointer !important;
    }
  }


    /*适配各种尺寸-PC端高分辨率屏幕*/
  @media only screen and (max-width: 2560px) and (min-width: 1920px)
  {
    /*登录框样式*/
    .loginbox{
      width:640px;
      height:480px;
      background: white;
      position: absolute;
      border-radius: 5px;
      left:0;
      right:0;
      top: 0;
      bottom: 0;
      margin: auto;
      /*50%为自身尺寸的一半*/
      -webkit-box-shadow: 2px 2px 5px #333;
      box-shadow: 2px 2px 5px #333;
    }
    /*左部分盒子样式*/
    .loginbox .login-logo{
      width:240px;
      height:480px;
      background:url(../assets/left_bg.png) no-repeat;
      position: relative;
    }

    .login-logo .logo{
      width:58px;
      height:59px;
      position: absolute;
      left:0;
      right:0;
      top: 0;
      bottom: 0;
      margin: auto;
      /*50%为自身尺寸的一半*/
    }

    .login-logo .txt{
      bottom: 5px;
      position:absolute;
      width: 107px;
      height: 10px;
      font-family: MicrosoftYaHei;
      font-size: 13px;
      font-weight: normal;
      font-stretch: normal;
      letter-spacing: 0px;
      color: #ffffff;
      margin: auto;
      left:0;
      right:0;
      bottom:15px;

    }

    /*右部分盒子样式*/
    .loginbox .login-select{
      width:400px;
      height: 480px;
    }


    .loginbox .login-select .inputtop{
      width:400px;
      height:420px;
      padding:60px 60px 0px 60px;
    }


    .loginbox .login-select .inputtop .phonebox{
      width:100%;
      /*border-bottom:1px solid #dedede;*/
      height: 70px;
      padding-top:30px;
    }

    .loginbox .login-select .inputtop .phonebox input{
      border:none;
      height: 39px;
      line-height: 39px;
      width:100%;
    }

    .loginbox .login-select .inputtop .passwordbox{
      width:100%;
      /*border-bottom:1px solid #dedede;*/
      height: 60px;
      padding-top:20px;
    }

      .loginbox .login-select .inputtop .passwordbox input{
        border:none !important;
        width:60px !important;
      }
      .loginbox .login-select .inputtop .passwordbox button{
        border:none !important;
        width:38%;
      }

    .loginbox .login-select .inputtop .isagree{
      width:100%;
      padding-top:20px;
    }

    .loginbox .login-select .inputtop .loginbtn{
      width:100%;
      padding-top:52px;
    }



    .loginbox .login-select .rebuttom{
      width:400px;
      height:60px;
      background:#f7f7f7;
      text-align: center;
      padding-top:23px;
      border-radius: 0px 0px 5px 0px;
    }


    .loginbox .login-select .rebuttom .rebuttomli{
      cursor: pointer;
    }

    .loginbox .login-select .rebuttom .rebuttomli span{
      cursor: pointer !important;
    }
  }
</style>
<style>
  .onstyle{
    text-align:left !important
  }
</style>
