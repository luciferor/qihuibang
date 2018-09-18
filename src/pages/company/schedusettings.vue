<template>
  <div class="combox" style="height:100%;">
    <div class="comtitle">
      <span class="fl">
        <Breadcrumb>
          <Breadcrumb-item>
              <Icon type="ios-pricetags-outline"></Icon> 排班设置
          </Breadcrumb-item>
        </Breadcrumb>
      </span>
    </div>
    <div class="comcontent">
      <div class="listbox">
        <Row>
          <i-col span="6">
            <div class="spantitle">公司常规排班</div>
            <div class="spandes">白班 09：00-18：00</div>
          </i-col>
          <i-col span="6">
            <div class="spantitle">考勤地址</div>
            <div class="spandes">深圳市西乡商会大厦</div>
          </i-col>
          <i-col span="6">
            <div class="spantitle">考勤范围</div>
            <div class="spandes">有效范围100米</div>
          </i-col>
          <i-col span="6" style="padding:20px;">
            <i-button style="color:#6680ff;">编辑</i-button>
          </i-col>
        </Row>
      </div>

      <div class="line10"></div>
      <div class="listbox">
        <Row>
          <i-col span="6">
            <div class="spantitle">公司常规排班</div>
            <div class="spandes">白班 09：00-18：00</div>
          </i-col>
          <i-col span="6">
            <div class="spantitle">考勤地址</div>
            <div class="spandes">深圳市西乡商会大厦</div>
          </i-col>
          <i-col span="6">
            <div class="spantitle">考勤范围</div>
            <div class="spandes">有效范围100米</div>
          </i-col>
          <i-col span="6" style="padding:20px;">
            <i-button style="color:#6680ff;">编辑</i-button>
          </i-col>
        </Row>
      </div>

      <div class="line10"></div>
      <div class="listbox">
        <Row>
          <i-col span="6">
            <div class="spantitle">公司常规排班</div>
            <div class="spandes">白班 09：00-18：00</div>
          </i-col>
          <i-col span="6">
            <div class="spantitle">考勤地址</div>
            <div class="spandes">深圳市西乡商会大厦</div>
          </i-col>
          <i-col span="6">
            <div class="spantitle">考勤范围</div>
            <div class="spandes">有效范围100米</div>
          </i-col>
          <i-col span="6" style="padding:20px;">
            <i-button style="color:#6680ff;">编辑</i-button>
          </i-col>
        </Row>
      </div>

      <div class="line10"></div>
      <div class="listbox">
        <Row>
          <i-col span="6">
            <div class="spantitle">公司常规排班</div>
            <div class="spandes">白班 09：00-18：00</div>
          </i-col>
          <i-col span="6">
            <div class="spantitle">考勤地址</div>
            <div class="spandes">深圳市西乡商会大厦</div>
          </i-col>
          <i-col span="6">
            <div class="spantitle">考勤范围</div>
            <div class="spandes">有效范围100米</div>
          </i-col>
          <i-col span="6" style="padding:20px;">
            <i-button style="color:#6680ff;">编辑</i-button>
          </i-col>
        </Row>
      </div>

      <div class="line10"></div>
      <div class="listbox">
        <Row>
          <i-col span="6">
            <div class="spantitle">公司常规排班</div>
            <div class="spandes">白班 09：00-18：00</div>
          </i-col>
          <i-col span="6">
            <div class="spantitle">考勤地址</div>
            <div class="spandes">深圳市西乡商会大厦</div>
          </i-col>
          <i-col span="6">
            <div class="spantitle">考勤范围</div>
            <div class="spandes">有效范围100米</div>
          </i-col>
          <i-col span="6" style="padding:20px;">
            <i-button style="color:#6680ff;">编辑</i-button>
          </i-col>
        </Row>
      </div>


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

  .combox .comcontent .listbox{
    background-color: #ffffff;
    box-shadow: 0px 2px 6px 0px
      rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    border: solid 1px #ededed;
    padding:10px;
  }

  .combox .comcontent .listbox .spantitle{
    font-family: MicrosoftYaHei;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #2e2f33;
    line-height: 40px;
  }

  .combox .comcontent .listbox .spandes{
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #8a8c99;
    line-height: 30px;
  }
</style>
