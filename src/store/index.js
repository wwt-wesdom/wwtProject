/** Created buy wwt on 2018/06/21. ...*/
import Vue from  'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
Vue.use(Vuex);
const state ={
  storeFirstData: 'vuex的数据',
  title: null,//页面的title,
  showTabar: true,//显示tabbar栏
};
export default new Vuex.Store({
  state,
  mutations,
  actions
})
