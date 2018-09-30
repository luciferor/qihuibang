<template>
  <div id="app" style="height:100%;">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data(){
    return{

    }
  },
  mounted(){
    //获取地址
    let url = window.location.href.split('/');
    window.localStorage["api"] = "https://"+url[2];//获取到网址，并取得借口地址

    if(url[2]=='192.168.0.183:8888'||url[2]=='localhost:8888'){
      window.localStorage["api"] = "https://devqypyp.xiaohuibang.com";//测试环境
      //console.log('当前测试环境');
    }
  }
}
</script>

<style>

*{
  margin:0;
  padding:0;
}

html{
  height:100%;
}

body{
  height:100%;
}

#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #181818;
  padding: 0;
  margin:0;
}
</style>

<style>

  /*最大盒子样式*/
  .thebox{
    width:100%;
    height:100%;
    position: relative;
    background: blue;
    background-size: 100vh;
  }

  /*通用左浮动*/
  .fl{
    float: left;
  }
  /*通用右浮动*/
  .fr{
    float:right;
  }
  /*灰色字体颜色*/
  .graycolor{
    color:#b8bbcc;
  }
  /*蓝色字体颜色*/
  .bluecolor{
    color:#6680ff;
  }
  /*去掉滚动条横向滚动*/
  .el-scrollbar .el-scrollbar__wrap {overflow-x: hidden;}
  .el-scrollbar__wrap {
     overflow-x: hidden;
  }
  /*分割元素*/
  .line10{
    height:10px;
    overflow: hidden;
    width:100%;
  }
  /*实现分割线*/
  .linecenter{
    height: 10px;
    overflow: hidden;
    border-bottom:1px solid #E0E0E0;
    margin-bottom:10px;
  }

  .colorpar{
    color:#6680ff;
  }

  .backgroundpar{
    background:#6680ff;
  }



  /*动画*/
  /*第一种动画--使用bounce*/
  .bounce-enter-active {
  animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }
  /*第二种动画--使用fade*/
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  /*第三种动画--使用slide-fade*/
  /* 可以设置不同的进入和离开动画*/
  /* 设置持续时间和动画函数 */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  /*鼠标手指头*/
  .posor{
    cursor: pointer;
  }

  /*去掉边框*/
  input,input:active{
    /* border: none !important;
    border-bottom: 1px solid #d2d2d2 !important;
    outline: none;
    box-shadow: none;
    width: 100%; */
  }

  .schedule-table-container .ivu-input-number-input{
    border:none !important;
  }
  .schedule-table-container .ivu-input-number-input:hover{
    border:1px solid #d2d2d2 !important;
  }
  .schedule-table-container .ivu-input-number-input:active{
    border:1px solid #d2d2d2 !important;
  }
</style>
