import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import Resource from 'vue-resource'

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


Vue.use(Resource)
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
