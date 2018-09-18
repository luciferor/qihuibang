<template>
<!--外部盒子-->
  <div class="thebox">
    <!--loginbox start-->
    <div class="loginbox">
      <div class="login-logo fl">
        <div class="logo"><img src="../assets/logo.png" width="58"  height="59" /></div>
        <div class="txt">
          <span>www.exlnren.com</span>
        </div>
      </div>
      <div class="login-select fl">
        <!--输入框 start-->
        <div class="inputtop">
              <div style="padding-top:50px; text-align:center;">
                <img src="../assets/success.png" />
              </div>
              <div style="font-size:16px; font-weight:bold; text-align:center; padding:30px;">
                企业创建成功
              </div>
              <div style="text-align:center; color:#E0E0E0;">去登录管理您的企业吧</div>
              <div class="loginbtn">
                <i-button @click="gotologin()" type="Primary" style="background-color:#ededed; width:100%;">企 业 登 录</i-button>
              </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "success",
  data:{
    return(){}
  },
  methods:{
    gotologin(){
      this.$router.push({path:"/pages/login"});
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



  /*适配各种尺寸-手机端*/
  @media only screen and (max-width: 768px) and (min-width: 320px)
  {

  }

  /*适配各种尺寸-平板电脑*/
  @media only screen and (max-width: 1024px) and (min-width: 768px)
  {

  }

  /*适配各种尺寸-PC端小屏幕*/
  @media only screen and (max-width: 1920px) and (min-width: 1024px)
  {

  }


    /*适配各种尺寸-PC端高分辨率屏幕*/
  @media only screen and (max-width: 1920px) and (min-width: 2560px)
  {

  }

</style>
