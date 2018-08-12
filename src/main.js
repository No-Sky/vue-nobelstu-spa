import Vue from 'vue'
import App from './App.vue'
import router from './router/router'

import axios from 'axios';

import  './filter/filter.js'


//md5
import md5 from 'js-md5'

//vuex
import store from './store/index.js'

//api列表
import Api from './api/api.js'

//muse-ui框架
import MuseUI from 'muse-ui'
import Message from 'muse-ui-message'
import Toast from 'muse-ui-toast'
import 'muse-ui/dist/muse-ui.css'

//照片裁剪插件
import clipper from './assets/clipper/clipper.js'

/*axios.interceptors.request.use(
  config => {
    // 这里写死一个token，你需要在这里取到你设置好的token的值
    const token = localStorage.getItem('token');
    console.log(token)
    if (token) {
      // 这里将token设置到headers中，header的key是Authorization，这个key值根据你的需要进行修改即可
      config.headers.token = token;
    }
    return config
  },
  error => {
    return Promise.reject(error)
  });*/

axios.defaults.withCredentials=true;
Vue.prototype.$http = axios;
Vue.use(MuseUI);
Vue.use(Message);
Vue.use(Toast);
Vue.use(clipper);
Vue.prototype.$api = Api;
Vue.prototype.$md5 = md5;

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
    let session = localStorage.getItem('user')
    if (to.meta.requireLogin) {
        if (session) {
            next();
        } else {
            next({
                path: '/login',
                query: {
                    redirect: to.fullPath
                }
            })
        }

    } else {
        next();
    }
});
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
