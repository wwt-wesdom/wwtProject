import * as types from './mutation-types'

export default {
  [types.STORE_FIRST_DATA](state, {result}){
    state.storeFirstData = result;
  },
  [types.TITLE](state, {title}){
    state.title = title;
  },
  [types.SHOW_TABBAR](state, {result}){
    state.showTabar = result;
  }
}
