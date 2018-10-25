/**
 * Created by ycb on 2017/4/26.
 */
import axiosConfig from '../config/axiosConfig'
export default {
  /**
   * first api
   */
  firstApi(){
    return axiosConfig.get("/api/wwt.json")
  },
  secondApi(){
    return axiosConfig.get('/api/first-api.json')
  }
}
