<template>
  <div class="combox" style="height:100%;">
    <div class="comtitle">
      <span class="fl">
        <Breadcrumb>
          <Breadcrumb-item>
              <Icon type="ios-pricetags-outline"></Icon> 审批权限设置
          </Breadcrumb-item>
        </Breadcrumb>
      </span>
    </div>
    <div class="comcontent">
      
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        rootUrl:window.localStorage.api,
      }
    },
    mounted(){
      //页面启动动画
      $('combox').addClass('animated lightSpeedIn');
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
    padding-left:10px;
    font-size: 16px;
    color: #2e2f33;
    border-bottom: 1px solid #ededed;
  }

  .combox .comcontent{
    background:#FFF;
    padding:50px;
    overflow: hidden;
    min-height:858px;
  }
</style>
