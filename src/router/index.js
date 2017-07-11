import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Home from '@/components/Home'

import Test1 from '@/components/Test1'
import Echarts from '@/components/echarts'

import OnlineData from '@/components/onlineData/OnlineData'
import NewPlayer from '@/components/operationData/NewPlayer'
import ActivePlayer from '@/components/operationData/ActivePlayer'

import Config from '@/../static/Config'

Vue.use(Router)

let router = new Router({
  // 路由规则
  routes: [
    {
      path: '/login',
      name: 'Login',
      leaf: true,
      component: Login
    }, {
      path: '/',
      component: Home,
      // 左侧一级菜单栏
      name: '在线数据',
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
      leaf: true,
      // 左侧二级菜单栏
      children: [
        {path: '/onlineData', component: OnlineData, name: '在线数据', menuShow: true}
      ]
    }, {
      path: '/',
      component: Home,
      // 左侧一级菜单栏
      name: '运营数据',
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
      // 左侧二级菜单栏
      children: [
        {path: '/operationData/1', component: NewPlayer, name: '新增玩家', menuShow: true},
        {path: '/operationData/2', component: ActivePlayer, name: '活跃用户', menuShow: true},
        {path: '/operationData/3', component: Echarts, name: '玩家留存', menuShow: true},
        {path: '/operationData/4', component: Echarts, name: '流失统计', menuShow: true},
        {path: '/operationData/5', component: Echarts, name: '充值统计', menuShow: true},
        {path: '/operationData/6', component: Echarts, name: '新增付费', menuShow: true}
      ]
    }, {
      path: '/',
      component: Home,
      // 左侧一级菜单栏
      name: '游戏数据',
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
      // 左侧二级菜单栏
      children: [
        {path: '/playerData/1', component: Test1, name: '玩家信息查询', menuShow: true},
        {path: '/playerData/2', component: Test1, name: '玩家日志查询', menuShow: true},
        {path: '/playerData/3', component: Echarts, name: '玩家行为日志查询', menuShow: true},
        {path: '/playerData/4', component: Echarts, name: '公会信息查询', menuShow: true},
        {path: '/playerData/5', component: Echarts, name: '邮件信息查询', menuShow: true},
        {path: '/playerData/6', component: Echarts, name: '金币产出与消耗', menuShow: true},
        {path: '/playerData/7', component: Echarts, name: '钻石产出与消耗', menuShow: true}
      ]
    }, {
      path: '/',
      component: Home,
      // 左侧一级菜单栏
      name: 'GM工具',
      menuShow: true,
      iconCls: 'iconfont icon-home', // 图标样式class
      // 左侧二级菜单栏
      children: [
        {path: '/GMTools/1', component: Test1, name: '充值记录查询', menuShow: true},
        {path: '/GMTools/2', component: Test1, name: '账号封停信息', menuShow: true},
        {path: '/GMTools/3', component: Echarts, name: '发送邮件', menuShow: true},
        {path: '/GMTools/4', component: Echarts, name: '线上公告', menuShow: true},
        {path: '/GMTools/5', component: Echarts, name: '登录公告', menuShow: true}
      ]
    }
  ]
})

// 路由过滤
// 检查session是否有用户登录信息，如果没有则跳转到login
router.beforeEach((to, from, next) => {
  console.log('to:' + to.path)
  if (to.path.startsWith('/login')) {
    window.sessionStorage.removeItem('access-user')
    next()
  } else {
    if (Config.Auth) {
      let user = JSON.parse(window.sessionStorage.getItem('access-user'))
      if (!user) {
        next({path: '/login'})
      } else {
        next()
      }
    } else {
      next()
    }
  }
})

export default router
