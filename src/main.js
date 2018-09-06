// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './store'
import '@/css/common.scss'
import { Toast } from 'vant';

Vue.prototype.$Toast = Toast;

Vue.config.productionTip = false;

router.beforeEach((to,from,next) => {
  store.commit("SHOW_TABBAR",{result:to.meta.showTabbar});
  next()
});
router.afterEach( to => {
  document.title = to.meta.title;
  store.commit('TITLE',{title:to.meta.title});
  // store.commit('SHOW_TABBAR',{result:to.meta.showTabbar})
});
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});













