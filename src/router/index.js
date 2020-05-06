import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/index/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve=>require(["@/pages/home/home"],resolve)
    },
    {path: '*',
    component: resolve=>require(["@/pages/home/home"],resolve)
    }
  ]
})
