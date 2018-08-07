import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/Recommed.vue'
import Search from '../components/Search.vue'
import Record from '../components/Record.vue'
import User from '../components/User.vue'
import Teacher from '../components/Teacher.vue'
import FreeTime from '../components/FreeTime.vue'
import Order from '../components/Order.vue'
import RecordDetail from '../components/RecordDetail.vue'
import Grade from '../components/Grade.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    }, {
      path: '/index',
      name: 'index',
      component: Recommend
    },{
      path: '/search',
      name: 'search',
      component: Search
    },{
      path: '/record',
      name: 'record',
      component: Record
    },{
      path: '/user',
      name: 'user',
      component: User
    },{
      path: '/teacher',
      name: 'teacher',
      component: Teacher
    },{
      path: '/freetime',
      name: 'freetime',
      component: FreeTime
    },{
      path: '/order',
      name: 'order',
      component: Order
    },{
      path: '/recorddetail',
      name: 'recorddetail',
      component: RecordDetail
    },{
      path: '/grade',
      name: 'grade',
      component: Grade
    }
  ]
})
