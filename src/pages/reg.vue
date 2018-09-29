<template>
<!--外部盒子-->
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
          <Tabs active-key="key1">
            <Tab-pane label="企业注册" key="key1">
              <div class="phonebox">
                <el-input  placeholder="请输入手机号" style="border:none;" v-model="adminphone"></el-input>
              </div>
              <div class="passwordbox">
                <el-input size="small" type="text" style="width:60%; border:none;"  placeholder="请输入验证码" v-model="admincode"></el-input>
                <i-button class="bluecolor" @click="getcode" size="small" style="border:1px solid #6680ff; color:#6680ff;" :disabled="codegetstatus">{{codegetvalue}}</i-button>
              </div>
              <div class="isagree">
                <Radio @change="ischanggeradio" v-model="cisagree" style="color:#8a8c99;">同意企汇邦企业协议</Radio>
              </div>
              <div class="loginbtn">
                <i-button @click="regover" style="background-color:#ededed; width:100%;">马 上 注 册</i-button>
              </div>
            </Tab-pane>
          </Tabs>
        </div>
        <!--底 部 end-->
        <div class="rebuttom">
          <span class="graycolor posor">已有企汇邦账号？</span> | <span @click="gotologin" class="bluecolor posor">去登录</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "reg",
  data(){
    return{
      adminphone:'',//手机号
      admincode:'',//验证码
      codegetstatus:false,//获取验证码的按钮状态
      codegetvalue:'获取验证码',//按钮文字
      count:60,//获取验证码时间
      setintervalid:'',//setinterval的id，用于清除他
      cisagree:false,//同意企业协议
    }
  },
  methods:{
    gotologin(){//去登录
      this.$router.push({path:"/pages/login"});
    },
    regover(){//提交
      //验证手机号是否为空
      if (this.adminphone==""||this.adminphone==null||this.adminphone==undefined) {
        this.error('手机号码不能为空！');
        return;
      }
      if(this.admincode==""||this.admincode==null||this.admincode==undefined){
        this.error("验证码不能为空！");
        return;
      }

      if(!this.cisagree){
        this.error('请先同意企汇邦使用协议');
        return;
      }
      //检测验证码是否正确
      let apiurl = window.localStorage.api + "/verify/phone/code?mobile_phone="+this.adminphone+"&code="+this.admincode;
      this.$http.get(apiurl).then(res=>{
        //console.log(res);
        //console.log(res['data'].success);
        if(res['data'].success){
          //--执行跳转---------------------------------------------------------------

          this.$router.push({path:"/pages/creatinfo",query:{ adminphones:this.adminphone,admincodes:this.admincode}});

          //-------------------------------------------------------------------------
        }else{
          //提示验证码错误
          this.error("您输入验证码不正确，请核实之后重新操作！");
          return;
        }
      }).catch(err=>{
        console.log(err);
      })
    },
    getcode(){// 获取验证码
      if(this.adminphone==""||this.adminphone==null||this.adminphone==undefined){
        this.error("请输入手机号");
        return;
      }
      let actype = "admin";//后台注册传 admin, 前台登录传home_login,后台忘记密码传mod_pwd
      let apiurl = window.localStorage.api+"/get/phone/code?mobile_phone="+this.adminphone+"&type="+actype;
      this.$http.get(apiurl).then(res=>{
        console.log(res);
        if(res['data'].success){
          this.success('验证码发送成功，请注意查收！');
          //设置一分钟获取一次
          this.setintervalid = setInterval(this.countsum,1000);
        }else{
          this.error(res['data'].message+",发送失败，请重试");
        }
      }).catch(err=>{
        console.log("网络错误"+err);
      })
    },
    ischanggeradio(){
      console.log(this.cisagree);
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
            this.$alert(_str, '错误信息', {
          confirmButtonText: '确定',
      });

    },
    countsum(){//设置验证码60秒以后才能重新获取
      this.count--;
      this.codegetstatus = true;
      this.codegetvalue = "("+this.count+")秒后重新发送";
      if(this.count==0||this.count<0){//当他等于0时清除setinterval
        this.codegetstatus = false;
        this.codegetvalue = "重新获取"
        this.count = 60;
        //清除setinterval
        clearInterval(this.setintervalid);
      }
      console.log(this.count);

    },
    loadingblack(){//加载动画，用于增加用户体验
      const loading = this.$loading({
          lock: true,
          text: '正在加载...',
          //spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
      }, 500);
    }
  }
};
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
  @media only screen and (max-width: 767px) and (min-width: 320px)
  {

  }

  /*适配各种尺寸-平板电脑*/
  @media only screen and (max-width: 1023px) and (min-width: 768px)
  {
    /*登录框样式*/
    .loginbox{
      width:100%;
      height:100%;
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
      height:20%;
      background:url(../assets/left_bg.png) repeat-x -5px;
      position: relative;
      clear: both !important;
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
      height: 80%;
      clear: both !important;
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
  @media only screen and (max-width: 1920px) and (min-width: 2560px)
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
