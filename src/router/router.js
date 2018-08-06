import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/Recommed.vue'
import Search from '../components/Search.vue'

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
    }
  ]
})
