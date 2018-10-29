import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/style/reset.css';
import './assets/style/iconfont.css';
import './assets/style/border.css';
import 'swiper/dist/css/swiper.css'
import { Tabbar, TabbarItem,Actionsheet } from 'vant';
import 'vant/lib/vant-css/index.css';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper)
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Actionsheet);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
