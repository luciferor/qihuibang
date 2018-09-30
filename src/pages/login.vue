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
          <Tabs @on-click="codeandpassword" v-model="cp" active-key="key1">
            <Tab-pane label="手机登录" key="key1">
              <div class="phonebox">
                <el-input size="small"  placeholder="请输入手机号" @on-change="checkphone" v-model="adminphone" style="border:none;"></el-input>
              </div>
              <div class="passwordbox">
                <el-input size="small" @keyup.enter.native="submitlogin" style="width:60%; border:none;" v-model="admincode"  placeholder="请输入验证码"></el-input>
                <i-button class="bluecolor" @click="getcode" size="small" :disabled="codegetstatus">{{codegetvalue}}</i-button>
              </div>
              <div class="isagree">
                <Radio @on-change="test" v-model="agreeseleced" style="color:#8a8c99;">同意企汇邦企业协议</Radio>
              </div>
              <div class="loginbtn">
                <i-button @click="codelogin" style="background-color:#ededed; width:100%;">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</i-button>
              </div>
            </Tab-pane>
            <Tab-pane label="密码登录" key="key2">
              <div class="phonebox">
                <el-input size="small" @change="checkphone" placeholder="请输入手机号" v-model="adminphone" style="border:none;"></el-input>
              </div>
              <div class="passwordbox">
                <el-input size="small" @keyup.enter.native="submitlogin" type="password" style="border:none;" v-model="adminpassword" :aria-disabled="false" placeholder="请输入密码"></el-input>
              </div>
              <div class="isagree">
                <Radio @on-change="test" v-model="agreeseleced" style="color:#8a8c99;">同意企汇邦企业协议</Radio>
              </div>
              <div class="loginbtn">
                <i-button @click="passwordlogin" style="background-color:#ededed; width:100%;">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</i-button>
              </div>
            </Tab-pane>
          </Tabs>
        </div>
        <!--底 部 end-->
        <div class="rebuttom">
          <span @click="forgetpas" class="graycolor posor">忘记密码</span> | <span  @click="gotoreg" class="bluecolor posor">企业注册</span>
        </div>
      </div>
    </div>
    <!--loginbox end-->

    <!-- start-->

    <!-- end-->

    <!-- start-->

    <!-- end-->

    <!-- start-->

    <!-- end-->

    <!-- start-->

    <!-- end-->

    <!-- start-->

    <!-- end-->

    <!--用户协议窗口 start-->
    <div class="userprotocol unshow">

    </div>
    <!-- end-->

  </div>
</template>

<script>
export default {
  name:'login',
  data(){
    return{
      adminphone:'',//手机号
      admincode:'',//验证码
      adminpassword:'',//密码
      agreeseleced:true,//同意用户协议状态||默认为选中
      codegetstatus:false,//获取验证码的按钮状态
      codegetvalue:'获取验证码',//按钮文字
      count:60,//获取验证码时间
      setintervalid:'',//setinterval的id，用于清除他
      osinfos:navigator.platform,//系统信息
      commill:navigator.product,//厂商
      infounique:navigator.userAgent,//硬件唯一标识
      cp:0
    }
  },
  methods:{
    codelogin(){
      if(!this.agreeseleced){
        this.error('您需要同意企汇邦企业协议！');
        return;
      }
      //首先验证数据
      if(this.adminphone==""||this.adminphone==null||this.adminphone==undefined){
        this.error("您没有输入手机号！请您输入手机号再重试！");
        return;
      }else{
        if(this.admincode==""||this.admincode==null||this.admincode==undefined){
          this.error("您没有输入验证码,请您输入验证码再进行操作！");
          return;
        }else{
          var _this = this;
          //检测验证码是否正确
          let apiurl = window.localStorage.api + "/verify/phone/code?mobile_phone="+this.adminphone+"&code="+this.admincode;
          this.$http.get(apiurl).then(res=>{
            //console.log(res);
            //console.log(res['data'].success);
            if(res['data'].success){
              //console.log('执行登录');
              //提交登录请求
              //已经登录的根据session判断
              //console.log("---------------------------------------------------------");
              let loginurl = window.localStorage.api + "/verify/login";//验证码登录
              let params = new URLSearchParams();
              params.append('mobile_phone',this.adminphone);//用户手机号
              params.append('code',this.admincode);//验证码
              params.append('unique',this.infounique);//手机唯一标识
              params.append('system',this.osinfos);//系统
              params.append('mill',this.commill);//厂商
              params.append('type','admin');
              this.$http.post(loginurl,params).then((res)=>{
                //console.log(res.data);
                if(res['data'].success){
                  this.success("登录成功！");             
                  this.loadingblack();
                  window.sessionStorage['status'] = true;
                  this.$router.push({ path:"/" });//跳转到主页
                }else{
                  this.error(res['data'].message);
                  window.sessionStorage['status'] = false;
                }
              }).catch((err)=>{
                //console.log(err);
              })
              //console.log("---------------------------------------------------------");
            }else{
              //提示验证码错误
              this.error("您输入验证码不正确，请核实之后重新操作！");
              return;
            }
          }).catch(err=>{
            //console.log(err);
          })
        }
      }
    },
    passwordlogin(){
      //首先验证数据
      if(this.adminphone==""||this.adminphone==null||this.adminphone==undefined){
        this.error("您没有输入手机号！请您输入手机号再重试！");
        return;
      }else{
        if(this.adminpassword==""||this.adminpassword==null||this.adminpassword==undefined){
          this.error("密码不能为空,请您输入密码再进行操作！");
          return;
        }else{
              if(!this.agreeseleced){
                this.error('您需要同意企汇邦企业协议！');
                return;
              }
              //console.log('执行登录');
              //提交登录请求
              //已经登录的根据session判断
              //console.log("---------------------------------------------------------");
              let loginurl = window.localStorage.api + "/auth/login";//验证码登录
              let params = new URLSearchParams();
              
              params.append('mobile_phone',this.adminphone);//用户手机号
              params.append('password',this.adminpassword);//验证码
              
              this.$http.post(loginurl,params).then((res)=>{
                //console.log(res);
                if(res['data'].success){
                  this.success("登录成功！");
                  this.loadingblack();
                  //在此拦截ajax
                  sessionStorage['status'] = true;
                  this.$router.push({ path:"/" });//跳转到主页
                }else{
                  this.error(res['data'].message);
                  return;
                }
              }).catch((err)=>{
                //console.log(err);
                this.error('网络错误，请稍候重试！'+err);
                return;
              })
              //console.log("---------------------------------------------------------");
        }
      }
    },
    //获取验证码
    getcode(){
      if(this.adminphone==""||this.adminphone==null||this.adminphone==undefined){
        this.error("请输入手机号");
        return;
      }
      
      let actype = "home_login";
      let apiurl = window.localStorage.api+"/get/phone/code?mobile_phone="+this.adminphone+"&type="+actype;
      this.$http.get(apiurl).then(res=>{
        //console.log(res);
        if(res['data'].success){
          this.success('验证码发送成功，请注意查收!');
          //设置一分钟获取一次
          this.setintervalid = setInterval(this.countsum,1000);
        }else{
          this.error(res['data'].message+",发送失败，请重试");
        }
      }).catch(err=>{
        //console.log("网络错误"+err);
      })
    },
    forgetpas(){
      this.$router.push({path:"/pages/getpassword"});
    },
    gotoreg(){
      this.$router.push({ path:"/pages/register" });
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
      //console.log(this.count);

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
    },
    checkphone(){
      var telReg = !!this.adminphone.match(/^(0|86|17951)?(1[0-9][0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/);
      //如果手机号码不能通过验证
      if(this.adminphone.length==11){
        if(telReg == false){
          this.error('您输入的手机号不符合，请重新输入');
          this.adminphone = '';
        }else{
          //console.log("是手机号");
        }
      }
      if(this.adminphone.length>11){
        this.error('手机号不能超过11位数');
        //this.adminphone='';
      }
    },
    //按回车实现登录
    submitlogin(){
      if(this.cp==0){
        this.codelogin();
      }else{
        this.passwordlogin();
      }
    },
    codeandpassword(){
      //console.log(this.cp);
    },
    test(){
      //console.log(this.agreeseleced);
    }
  },
  mounted(){

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

    .userprotocol{
      width:40%;
      height:60%;
      background: white;
      position: absolute;
      left:0;
      top:0;
      right:0;
      bottom:0;
      margin: auto;
      z-index: 1000;
    }
  }


  .unshow{
    visibility: hidden;
    z-index: -1000;
  }

  .show{
    visibility: visible;
    z-index: 1000;
  }


</style>
