import * as types from './mutation-types'

export default {
  [types.STORE_FIRST_DATA](state, {result}){
    state.storeFirstData = result;
  }
}
