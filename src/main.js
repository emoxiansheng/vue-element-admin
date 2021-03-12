// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' // elemenUI
import 'element-ui/lib/theme-chalk/index.css' // elementUI主题样式
import 'font-awesome/css/font-awesome.min.css' // 奥森图标库
import '@/assets/css/icon.css';
import '@/layout/directives';

Vue.config.productionTip = false

Vue.use(ElementUI) // 全局注册

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
