<template>
  <div class="combox" style="height:100%;">
    <div class="comtitle">
      <span class="fl">
        <Breadcrumb>
          <Breadcrumb-item>
              <span><img src="../../assets/iMenu/sMenu/icon_fuli.png" /></span><span class="posor" @click="goback">赞赏设置</span>
              <span>&nbsp;>&nbsp;</span>
              <span><img src="../../assets/iMenu/sMenu/icon_zanshangxianqing.png" /></span>
              <span>十月赞赏设置</span>
          </Breadcrumb-item>
        </Breadcrumb>
      </span>
    </div>
    <div class="comcontent">
      <div class="welfarecontent">
        <div>
          <div class="reciatelist">
              <el-row>
                <el-col :span="8" :xs="24">
                  <div class="oneclass">
                    <div class="dateclass fl">
                      <div class="yearclass">2018</div>
                      <div class="monthclass">十月</div>
                    </div>
                    <div class="titledesclass">
                      <div class="titleclass">已经分配的邦分：2000邦分</div>
                      <div class="desclass">分配的人数：10人</div>
                    </div>
                  </div>
                </el-col>
                <el-col :span="8" :xs="24">
                  <div class="twoclass">
                    <div class="titleclass">已经分配的邦分：2000邦分</div>
                    <div class="desclass">分配的人数：10人</div>
                  </div>
                </el-col>
                <el-col :span="8" :xs="24">
                  <div class="threeclass"><span>已回收邦分：</span><span style="color:#ff6666;">200邦分</span></div>
                </el-col>
              </el-row>
          </div>
          <div style="height:10px; overflow:hidden;"></div>
        </div>

        <div>
          <div id="echartContainer" style="width:100%; height:800px"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var echarts = require('echarts')
  export default {
    data(){
      return{
        viewid:this.$route.params.id,
        rootUrl:window.localStorage.api,
        rootImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAYAAABxlTA0AAAEQElEQVR4nO2bYXOqOhCG34AVBBkH7P//gxWFqiFIJPfDnXCgx1rbcQn07POJdijJPA2bTTaIqqoMGDI81x347bBgYlgwMSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTMyCuoGmaSClRF3XaNsWxrgtYgsh4HkegiBAFEV4eXmhbY+ybC+lRFmWVI9/CpvNBlEUkT2fLEQ0TTN5uQBQliWapiF7PlmIkFJ210IIJEmC5XJJ1dzDGGNQVdWgf1JKbDYbkvbIBNd13V0nSYI4jqma+jbL5RJt20IpBWDY12dDFiKu12t3HQQBVTM/pv829fv6bEZJ04QQYzTzLTxvnAyV82BifpVg1zn2LcgXGpQYY3A+n6GU6lItIQSCIMBqtUIYho57OGPBdV2jKAq0bTv4vTEGSikopbBcLpGm6Wjx9hazDBGXywWHw+Evubfuy/PcaeiY3Qg2xuBwOHTShBCI4xhhGMLzPGitcT6fu9xWa42iKJCmqZP+zk7w6XTqRq4QAlmWDXJa3/cRBAGOxyNOpxMAdDGaemPnFrMLEXb1BQDr9frT5XeSJFgs/oyf/t+NyawEG2Ogte5+/ipLWK1W3TXlhs49ZiX446Tm+/7d+/vZg6uJblaCP6Zb/dF8i/4eg6tUbVaChRCDiaq/5fgRuy1pcTHBATMTDGBQfZBS3pRsjEFRFN0IFkIM4vGYzC5Ni6II5/O5Cw9lWUIpNciDpZSD8BDH8ZfxmorZCQaANE2R53k36dV1/emmeRiGSJJkzO4NmF2IAIDFYoHX19e7JSi7wnO1grPMcgQD/6do2+0WdV13KzVjTFeSX61WzsJCn9kKtgRBMMmSlGUSIWKKG+XPwtkIbtsWx+MRVVXBGIPFYoEkSSaxSf5MnIxgrTV2ux2klN3o1VrjcDjgeDy66BIZowvWWiPP809L5afTCUVRjNwrOkYNEU3TYL/ff1mJqKoKbdsiTdO7JX9bjzPGIAxDxHE8uSMCowmu63pQiXjk/v1+jyzL/pJmqxr9xUXTNKiqClmWTSI9s4wSIpRS35JrsTW1/oi/Xq/Y7XY3V25a64fekDEZRfD7+/uPU7GmabqYba/vbVPaGD8VybNYaGit8fb29vA/yY7k7XbrPCZPYqHxCN99A+yE6noRMxvBP+FyuTiX/KsFA38OqXBNjhB7zMoFZIJdTy4fUUoNJPdXkpR9JRPs8sDdZ1RVhbIs0bbtoJbXP6DybMieHATB3aqvK6SUUEoN8mTKHTyyYbZerycXJix9uZ7nzfM7Od/3kWXZJEOFRQhBfn6Y9EtPAF28U0pBa+088bef0trdN+qNIXLB/zrTfX9/CSyYGBZMDAsmhgUTw4KJYcHEsGBiWDAxLJgYFkwMCyaGBRPDgolhwcSwYGJYMDEsmBgWTAwLJoYFE/Mfuu8crG4Pn8IAAAAASUVORK5CYII=',
      }
    },
    methods:{
      goback(){//返回赞赏设置
        this.$router.push({path:'/pages/company/reciatesettings'});
      }
    },
    mounted(){
        console.log(this.viewid);
      //验证是否登录
      if(!window.sessionStorage.status){
        this.$Message.error('您没有登录，请您先登录');
        this.$router.push({path:'/pages/login'});
        return;
      }

      //验证是否登录
      if(!window.sessionStorage.status){
        this.$Message.error('您没有登录，请您先登录');
        this.$router.push({path:'/pages/login'});
        return;
      }
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echartContainer'));
      // 绘制图表
      myChart.setOption({
          title: { 
            text: '用户赞赏关系图',
            subtext: '用户与用户之间的赞赏关系',
            top:'top',
            left:'left'
          },
          legend: { // 图例显示（显示在右上角），name:类别名称，icon:图例的形状（默认是roundRect圆角矩形）。
              show: true,
              data: [{
                      name: '财务部'
                  },
                  {
                      name: '技术部'
                  },
                  {
                      name: '市场部'
                  },
                  {
                      name: '运营部'
                  }
              ]
          },
          tooltip: { formatter: function (x) { return x.data.des; } },
          animationDuration: 1500,
          animationEasingUpdate: 'quinticInOut',
          series: [{
          type: 'graph', // 关系图
                  name: '关系图:', // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
                  layout: 'force', // 图的布局，类型为力导图，'circular' 采用环形布局，见示例 Les Miserables
                  legendHoverLink: true, // 是否启用图例 hover(悬停) 时的联动高亮。
                  hoverAnimation: true, // 是否开启鼠标悬停节点的显示动画
                  coordinateSystem: null, // 坐标系可选
                  xAxisIndex: 0, // x轴坐标 有多种坐标系轴坐标选项
                  yAxisIndex: 0, // y轴坐标 
                  force: { // 力引导图基本配置
                      // initLayout: , // 力引导的初始化布局，默认使用xy轴的标点
                      repulsion: 500, // 节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
                      gravity: 0.02, // 节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
                      edgeLength: 200, // 边的两个节点之间的距离，这个距离也会受 repulsion影响 。值越大则长度越长
                      layoutAnimation: true // 因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画
                      // 在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。                        
                  },
                  roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启，true 为都开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'
                  nodeScaleRatio: 0.6, // 鼠标漫游缩放时节点的相应缩放比例，当设为0时节点不随着鼠标的缩放而缩放
                  draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用。
                  focusNodeAdjacency: true, // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
                  // symbol:'roundRect', // 关系图节点标记的图形。
                  // ECharts 提供的标记类型包括：'circle'(圆形), 'rect'（矩形）, 'roundRect'（圆角矩形）,
                  // 'triangle'（三角形）, 'diamond'（菱形）, 'pin'（大头针）, 'arrow'（箭头）
                  // 也可以通过 'image://url' 设置为图片，其中 url 为图片的链接。'path:// 这种方式可以任意改变颜色并且抗锯齿
                  // symbolSize: 10 , // 也可以用数组分开表示宽和高，例如 [20, 10] 如果需要每个数据的图形大小不一样，
                  // 可以设置为如下格式的回调函数：(value: Array|number, params: Object) => number|Array
                  // symbolRotate:, // 关系图节点标记的旋转角度。注意在 markLine 中当 symbol 为 'arrow' 时会忽略 symbolRotate 强制设置为切线的角度。
                  // symbolOffset:[0,0], // 关系图节点标记相对于原本位置的偏移。[0, '50%']
                  edgeSymbol: ['none', 'none'], // 边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。
                  // 默认不显示标记，常见的可以设置为箭头，如下：edgeSymbol: ['circle', 'arrow']
                  edgeSymbolSize: 10, // 边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。

                  itemStyle: { // ========图形样式，有 normal 和 emphasis 两个状态。
                      // normal 是图形在默认状态下的样式；
                      // emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                      normal: { // 默认样式
                          label: {
                              show: true
                          },
                          borderType: 'solid', // 图形描边类型，默认为实线，支持 'solid'（实线）, 'dashed'(虚线), 'dotted'（点线）。
                          borderColor: 'rgba(255, 0, 0, 0.4)', // 设置图形边框为淡金色,透明度为0.4
                          borderWidth: 2, // 图形的描边线宽。为 0 时无描边。
                          opacity: 1, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                          fill:'rgba(255,0,0,0.5)'
                      },
                      emphasis: { // 高亮状态

                      }
                  },
                  lineStyle: { // ========关系边的公用线条样式。
                      normal: {
                          color: 'rgba(255, 0, 255, 0.4)',
                          width: '2', //线的粗细
                          type: 'solid', // 线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                          curveness: 0.3, // 线条的曲线程度，从0到1
                          opacity: 0.5 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                      },
                      emphasis: { // 高亮状态

                      }
                  },
                  label: { // ========结点图形上的文本标签
                      normal: {
                          show: true, // 是否显示标签。
                          position: 'inside', // 标签的位置。['50%', '50%'] [x,y]
                          textStyle: { // 标签的字体样式
                              color: '#d3d7d4', // 字体颜色 #cde6c7 #d1c7b7 #d9d6c3 #d3d7d4
                              fontStyle: 'normal', // 文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                              fontWeight: 'bolder', // 'normal'标准，'bold'粗的，'bolder'更粗的，'lighter'更细的，或100 | 200 | 300 | 400...
                              fontFamily: 'sans-serif', // 文字的字体系列
                              fontSize: 12, // 字体大小
                          }
                      },
                      emphasis: { // 高亮状态

                      }
                  },
                  edgeLabel: { // ========连接线上的文本标签 
                      normal: {
                          show: false // 不显示连接线上的文字，如果显示只能显示结点的value值，而不是连接线的值
                      },
                      emphasis: { // 高亮状态

                      }
                  },
                  categories: [ // name(类别名称)要同legend(图例）按次序一致
                      {
                          name: '财务部'
                      },
                      {
                          name: '技术部'
                      },
                      {
                          name: '市场部'
                      },
                      {
                          name: '运营部'
                      },
                  ],
                  // 设置结点node的数据
                  // category: 类别序号，从0开始
                  // name: 结点图形显示的文字
                  // value: 鼠标点击结点，显示的数字
                  // symbolSize: 结点图形的大小
                  // symbol: 类目节点标记图形，默然为圆形
                  // label: 标签样式
                  data: [{
                          category: '市场部',
                          name: '许乐',
                          value: 1475,
                          symbolSize: 114
                      },
                      {
                          category:'技术部',
                          name: '张三丰',
                          value: 0,
                          symbolSize: 100
                      },
                      {
                          category:'运营部',
                          name: '孔子',
                          value: 1000,
                          symbolSize: 30
                      }
                  ],
                  links: [ // 设置连线edges的数据
                      {
                          source: '许乐',
                          target: '张三丰',
                          value: 437
                      },
                      {
                          source:'张三丰',
                          target:'',
                          value:1000
                      },
                      {
                          source:'孔子',
                          target:'',
                          value:1000
                      }
                  ]
          }]
      });
    },
    
  }
</script>


<style scoped>
  .combox{
    width:100%;
    height:100%;
    border: solid 1px #ededed;
    position: relative;
  }

  .combox .comtitle{
    height:69px;
    line-height: 69px;
    padding-left:10px;
    font-size: 16px;
    color: #2e2f33;
    border-bottom: 1px solid #ededed;
    background:white;
  }

  .combox .comtitle span{
      display: block;
      height: 69px;
      line-height: 72px;
      float: left;
      padding-right:5px;
  }

    .combox .comtitle span img{
        height: 69px;
        padding:27px 0;
        width:16px;
    }

  .combox .comcontent{
    background:#FFF;
    /* padding:50px; */
    overflow: hidden;
    min-height:885px;
    margin:10px;
  }


  .combox .comcontent .welfarecontent{
    width:100%;
    height:100%;
    overflow: hidden;
    padding:10px;
  }

  .combox .welfarecontent .reciatelist{
    box-shadow: 0px 2px 6px 0px 
		rgba(0, 0, 0, 0.04);
    border-radius: 4px;
    border: solid 1px #ededed;
    padding:10px;
    background:#f7f7f7;
  }

  .combox .welfarecontent .reciatelist .oneclass{
    width:100%;
    height: 100%;
  }

  .combox .welfarecontent .reciatelist .oneclass .dateclass{
    width:80px;
    height:80px;
    background:#f7f7f7;
  }
  .combox .welfarecontent .reciatelist .oneclass .dateclass .yearclass{
    color:#8a8c99;
    text-align: center;
    height: 40px;
    line-height: 50px;
    font-size: 12px;
  }
  .combox .welfarecontent .reciatelist .oneclass .dateclass .monthclass{
    color:#6680ff;
    text-align: center;
    height: 40px;
    line-height: 30px;
    font-size: 16px;
  }
  .combox .welfarecontent .reciatelist .oneclass .titledesclass{
    height: 80px;
    width:calc(100% - 80px);
    padding-left:20px;
    overflow: hidden;
  }
  .combox .welfarecontent .reciatelist .oneclass .titledesclass .titleclass{
    width:100%;
    height: 40px;
    line-height: 45px;
    color:#2e2f33;
    font-size: 16px;
  }
  .combox .welfarecontent .reciatelist .oneclass .titledesclass .desclass{
    width:100%;
    height: 40px;
    line-height: 35px;
    color:#8a8c99;
    font-size: 16px;
  }

  .combox .welfarecontent .reciatelist .twoclass{
    width:100%;
    height:100%;
    padding-left:20px;
  }
  .combox .welfarecontent .reciatelist .twoclass .titleclass{
    width:100%;
    height: 40px;
    line-height: 45px;
    color:#2e2f33;
    font-size: 16px;
  }
  .combox .welfarecontent .reciatelist .twoclass .desclass{
    width:100%;
    height: 40px;
    line-height: 35px;
    color:#8a8c99;
    font-size: 16px;
  }

  .combox .welfarecontent .reciatelist .threeclass{
    width:100%;
    height:80px;
    padding:20px;
    line-height: 40px;
    font-size: 16px;
    color: #2e2f33;
  }



  .unshow{
    visibility: hidden;
  }

  .show{
    visibility: visible;
  }
  </style>
  
