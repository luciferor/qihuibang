// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入juqery
import $ from 'jquery'
//引入view
import iView from 'iview'
//使用iviewcss样式
import 'iview/dist/styles/iview.css'
//引入axios组件
import axios from 'axios'
//引入ElementUI滚动条
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入animate动画特效
import animate from 'animate.css'
//引入拖拽插件
import VueDND from 'awe-dnd'
//引入高德地图
import VueAMap from "vue-amap";
Vue.use(VueAMap);

//引入zll的js.api||
/********************************/
import api from './services/api.js'
import echarts from 'echarts'//百度echart
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import vuescroll from 'vuescroll';


//---------------------------------------------------组件引入
import Map from './components/map'
//---------------------------------------------------组件引入

import 'babel-polyfill'//让vue支持ie兼容

import vueDrag from 'vue-dragging'//div拖动
Vue.use(vueDrag)


HighchartsMore(Highcharts)
Vue.prototype.$api = api
Vue.prototype.$echarts=echarts
/********************************/
/*高德地图插件*******************************/
VueAMap.initAMapApiLoader({
  key: "1b443fa122dc68aa86c0c941620d5bd4",
  plugin: [
    "AMap.Autocomplete", //输入提示插件
    "AMap.PlaceSearch", //POI搜索插件
    "AMap.Scale", //右下角缩略图插件 比例尺
    "AMap.OverView", //地图鹰眼插件
    "AMap.ToolBar", //地图工具条
    "AMap.MapType", //类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
    "AMap.PolyEditor", //编辑 折线多，边形
    "AMap.CircleEditor", //圆形编辑器插件
    "AMap.Geolocation" //定位控件，用来获取和展示用户主机所在的经纬度位置
  ],
  uiVersion: "1.0"
});
/*高德地图插件*******************************/
Vue.use(VueDND)
Vue.use(ElementUI)
Vue.config.productionTip = false
//使用iview
Vue.use(iView)
Vue.prototype.$http = axios
Vue.prototype.$echarts=echarts
Vue.prototype.$hightChart = Highcharts

let vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
