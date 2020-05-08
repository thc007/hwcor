import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Main from '@/pages/mine/mine'
import Subtoll from '@/pages/subtool/subtool'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      component:Home
      // component: resolve=>require(["@/pages/home/home"],resolve)
    },
    {
      path:"/home",
      component:Home

      // component:resolve=>require(["@/pages/home/home"],resolve)
    },
    {
      path:"/mine",
      component:Main
      // component: resolve=>require(["@/pages/mine/mine"],resolve)
    },
    {
      path:"/subtoll",
      component:Subtoll
      // component: resolve=>require(["@/pages/mine/mine"],resolve)
    },
    {path: '*',
    component: resolve=>require(["@/pages/home/home"],resolve)
    }
  ]
})
