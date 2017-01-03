// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'common/stylus/index.styl'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import {router} from 'common/js/router'

// 注册路由扩展插件
Vue.use(VueRouter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
