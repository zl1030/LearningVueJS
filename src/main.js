// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Mock from './mock'
Mock.init()

// 完整引入ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import echarts from 'echarts'

// 全局引入echarts
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
