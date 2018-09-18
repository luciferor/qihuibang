<template>
  <div class="combox" style="height:100%;">
    <div class="comtitle">
      <span class="fl">
        <Breadcrumb>
          <Breadcrumb-item>
              <Icon type="ios-pricetags-outline"></Icon>部门管理
          </Breadcrumb-item>
        </Breadcrumb>
      </span>
    </div>
    <div class="comcontent">
      <!--创建一个echarts的容器-->
      <div id="echartContainer" style="width:500px; height:500px"></div>
    </div>
  </div>
</template>

<script>
var echarts = require('echarts')

  export default {
    data(){
      return{
        rootUrl:window.localStorage.api,
      }
    },
    mounted(){
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echartContainer'));
      // 绘制图表
      myChart.setOption({
          title: { text: 'ECharts 入门示例' },
          tooltip: {},
          xAxis: {
              data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      });
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
