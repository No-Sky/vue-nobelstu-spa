import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import { Search } from 'mint-ui';
import { IndexList, IndexSection } from 'mint-ui';
import {Cell} from 'mint-ui'
import 'mint-ui/lib/style.css';
import clipper from './assets/clipper/clipper.js'

Vue.use(MuseUI);
Vue.component(Search.name, Search);
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
Vue.component(Cell.name, Cell);
Vue.use(clipper);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
