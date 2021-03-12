import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '@/layout/Home.vue'),
      meta: { title: '自述文件' },
      children: [
          {
            path: '/dashboard',
            component: () => import(/* webpackChunkName: "dashboard" */ '@/page/Dashboard.vue'),
            meta: { title: '系统首页' }
        }
      ]
    },{
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '@/page/Login.vue'),
      meta: { title: '登录' }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
