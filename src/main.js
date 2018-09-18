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

//引入zll的js.api||
/********************************/
import api from './services/api.js'
import echarts from 'echarts'//百度echart
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
HighchartsMore(Highcharts)
Vue.prototype.$api = api
Vue.prototype.$echarts=echarts
/********************************/

Vue.use(ElementUI)
Vue.config.productionTip = false
//使用iview
Vue.use(iView)
Vue.prototype.$http = axios
Vue.prototype.$echarts=echarts
Vue.prototype.$hightChart = Highcharts

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})