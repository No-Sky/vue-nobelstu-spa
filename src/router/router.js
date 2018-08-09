import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/Recommed.vue'
import Search from '../components/Search.vue'
import Record from '../components/Record.vue'
import Teacher from '../components/Teacher.vue'
import FreeTime from '../components/FreeTime.vue'
import Order from '../components/Order.vue'
import RecordDetail from '../components/RecordDetail.vue'
import Grade from '../components/Grade.vue'
import Userinfo from '../components/Userinfo.vue'
import About from '../components/About.vue'
import Login from '../components/Login.vue'
import Reg from '../components/Reg.vue'
import ForgetPwd from '../components/ForgetPwd.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    }, {
      path: '/index',
      name: 'index',
      meta: {
        title: '主页',
        keep_alive: true  // true 表示需要使用缓存
      },
      component: Recommend
    },{
      path: '/search',
      name: 'search',
      meta: {
        title: '搜索页',
        keep_alive: true  // true 表示需要使用缓存
      },
      component: Search
    },{
      path: '/record',
      name: 'record',
      // 路由元信息 meta
      meta: {
        requireLogin: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Record
    },{
      path: '/teacher',
      name: 'teacher',
      component: Teacher
    },{
      path: '/freetime',
      name: 'freetime',
      // 路由元信息 meta
      meta: {
        requireLogin: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: FreeTime
    },{
      path: '/order',
      name: 'order',
      // 路由元信息 meta
      meta: {
        requireLogin: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Order
    },{
      path: '/recorddetail',
      name: 'recorddetail',
      // 路由元信息 meta
      meta: {
        requireLogin: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: RecordDetail
    },{
      path: '/grade',
      name: 'grade',
      // 路由元信息 meta
      meta: {
        requireLogin: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Grade
    },{
      path: '/userinfo',
      name: 'userinfo',
      // 路由元信息 meta
      meta: {
        requireLogin: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Userinfo
    },{
      path: '/about',
      name: 'about',
      meta: {
        title: '用户信息页',
        keep_alive: true  // true 表示需要使用缓存
      },
      component: About
    },{
      path: '/login',
      name: 'login',
      component: Login
    },{
      path: '/reg',
      name: 'reg',
      component: Reg
    },{
      path: '/forgetpwd',
      name: 'foegetpwd',
      component: ForgetPwd
    }
  ]
})
