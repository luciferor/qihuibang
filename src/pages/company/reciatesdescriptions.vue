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
      var pathSymbols={
          reindeer: 'path://M164.8,41.6c-2.4-4.3-8.3-4.8-11.4-1c-10.3,12.3-33.7,13.8-45.4,13.7c-9.4-0.1-18.8,1.2-27.7,4.2C28.7,75.8,39.9,128,39.9,128c-2.5,1.4-6.4,6-9.5,9.9c-2.8,3.6-2.9,8.6-0.2,12.2c1.1,1.5,2.3,3.1,3.4,4.6c2.2,2.8,6.4,2.7,8.5-0.2c5.1-7.1,12.8-14.1,12.8-14.1c31.5,33,86-3.5,86-4C187.1,98.3,174.7,59.7,164.8,41.6z M131.5,89.8c-0.3,2.5-2.5,4.2-5,4c-38.5-4.3-59.8,29.4-60.7,30.8c-0.9,1.4-2.3,2.1-3.8,2.1c-0.8,0-1.6-0.2-2.4-0.7c-2.1-1.3-2.8-4.1-1.5-6.2c1-1.6,25.1-40,69.3-35C130,85.1,131.7,87.4,131.5,89.8z',
          plane: 'path://M180.6,153.8L111.1,33.4c-4.9-8.5-17.2-8.5-22.2,0L19.4,153.8c-4.9,8.5,1.2,19.2,11.1,19.2h139C179.3,173,185.5,162.3,180.6,153.8z M106.6,154H93.4c-2.2,0-3.9-1.8-3.9-3.9v-13.2c0-2.2,1.8-3.9,3.9-3.9h13.2c2.2,0,3.9,1.8,3.9,3.9v13.2C110.5,152.2,108.7,154,106.6,154z M106.6,121.6H93.4c-2.2,0-3.9-1.7-3.9-3.9V77.4c0-2.2,1.7-3.9,3.9-3.9h13.2c2.2,0,3.9,1.7,3.9,3.9v40.3C110.5,119.9,108.8,121.6,106.6,121.6z',
          rocket: 'path://M51.6,140 83.5,108.1 104.5,129.1 148.8,84.8 163,99 163,55 119,55 133.2,69.2 104.5,97.9 83.5,76.9 36,124.4 36,43 12,43 12,164 31,164 36,164 188,164 188,140',
          train:'path://M106.6,18.3L121.8,33l20.9-3c5-0.7,9.7,2.7,10.6,7.7l3.7,20.8l18.7,9.9c4.5,2.4,6.3,7.9,4.1,12.5l-9.3,19l9.3,19c2.2,4.6,0.4,10.1-4.1,12.5l-18.7,9.9l-3.7,20.8c-0.9,5-5.6,8.4-10.6,7.7l-20.9-3l-15.2,14.7c-3.7,3.5-9.5,3.5-13.1,0L78.2,167l-20.9,3c-5,0.7-9.7-2.7-10.6-7.7L43,141.4l-18.7-9.9c-4.5-2.4-6.3-7.9-4.1-12.5l9.3-19l-9.3-19c-2.2-4.6-0.4-10.1,4.1-12.5L43,58.6l3.7-20.8c0.9-5,5.6-8.4,10.6-7.7l20.9,3l15.2-14.7C97.1,14.8,102.9,14.8,106.6,18.3z',
          walk: 'path://M140.5,47.7c-5.7-3.4-13.1-1.6-16.5,4.1c-3.4,5.7-1.6,13.1,4.1,16.5c16.4,10,26.2,27.3,26.2,46.5 c0,30-24.4,54.3-54.3,54.3c-30,0-54.3-24.4-54.3-54.3c0-19.2,9.8-36.6,26.2-46.5c5.7-3.5,7.5-10.8,4.1-16.5 c-3.5-5.7-10.8-7.5-16.5-4.1c-23.7,14.3-37.8,39.4-37.8,67c0,43.2,35.2,78.3,78.3,78.3c43.1,0,78.3-35.1,78.3-78.3 C178.3,87.1,164.2,62,140.5,47.7zM100,92c6.3,0,11.5-5.2,11.5-11.5v-64c0-6.3-5.2-11.5-11.5-11.5s-11.5,5.2-11.5,11.5v64 C88.5,86.8,93.7,92,100,92z'
      };
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
                    borderWidth: 1, // 图形的描边线宽。为 0 时无描边。
                    opacity: 1, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    fill:'rgba(255,0,0,0.5)'
                },
                emphasis: { // 高亮状态
                    borderType: 'solid', // 图形描边类型，默认为实线，支持 'solid'（实线）, 'dashed'(虚线), 'dotted'（点线）。
                    borderColor: 'rgba(255, 0, 0, 0.4)', // 设置图形边框为淡金色,透明度为0.4
                    borderWidth: 10, // 图形的描边线宽。为 0 时无描边。
                    opacity: 1, // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                    fill:'rgba(255,0,255,0.5)'
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
                    color: 'rgba(255, 0, 255, 0.4)',
                    width: '10', //线的粗细
                    type: 'solid', // 线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                    curveness: 0.3, // 线条的曲线程度，从0到1
                    opacity: 0.5 // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
                }
            },
            label: { // ========结点图形上的文本标签
                normal: {
                    show: true, // 是否显示标签。
                    symbol:pathSymbols.reindeer,//我加上去的。目的是显示svg图片 
                    position: 'inside', // 标签的位置。['50%', '50%'] [x,y]
                    textStyle: { // 标签的字体样式
                        color: '#d3d7d4', // 字体颜色 #cde6c7 #d1c7b7 #d9d6c3 #d3d7d4
                        fontStyle: 'normal', // 文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                        fontWeight: 'bolder', // 'normal'标准，'bold'粗的，'bolder'更粗的，'lighter'更细的，或100 | 200 | 300 | 400...
                        fontFamily: 'sans-serif', // 文字的字体系列
                        fontSize: 14, // 字体大小
                    }
                },
                emphasis: {//高亮状态

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
                    symbolSize: 114,
                    img:'<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539319705178&di=3766f8d74adf2a797dce242eea5b94b1&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2015-01-10%2F024111427.jpg" width="114" height="114" />'
                },
                {
                    category:'技术部',
                    name: '张三丰',
                    value: 0,
                    symbolSize: 100,
                    img:'<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539319705178&di=3766f8d74adf2a797dce242eea5b94b1&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2015-01-10%2F024111427.jpg" width="114" height="114" />'
                },
                {
                    category:'运营部',
                    name: '孔子',
                    value: 1000,
                    symbolSize: 80,
                    img:'<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539319705178&di=3766f8d74adf2a797dce242eea5b94b1&imgtype=0&src=http%3A%2F%2Fwww.qqzhi.com%2Fuploadpic%2F2015-01-10%2F024111427.jpg" width="114" height="114" />'
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
  
