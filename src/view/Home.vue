<template>
  <div class="text-ct">
   <!-- <div class="top">
      <span class="top-title ">这里是home页</span>
    </div>-->
    <div class="mt-20"><span>vuex的数据：</span><span>{{getStoreFirstData}}</span></div>
    <div @click="changeStatus" class="mt-20">点击改变vuex的值</div>
    <div class="mt-20">
      <button class="btn-01" @click="timeDown" :disabled="disabled">{{time}}</button>
    </div>
    <div class="mt-20">
      时间戳转换：{{nowTime}}
    </div>
    <div class="text-ct mt-20 mb-20">{{num}}</div>
    <div class="mt-20">
      <ul>
        <li v-for="item in phoneArr">{{item}}</li>
      </ul>
    </div>
    <van-button type="primary" size="normal" @click="getPhoneNumber">刷新号码</van-button>
    <van-button type="primary" size="normal" @click="changRouter('List')">list页</van-button>
  </div>

</template>
<script>
  import store from '../store'
  import axiosConfig from '@/config/axiosConfig'
  import api from '@/config/apiConfig'
  import {Button} from 'vant'
  import {setStorage,getStorage} from "@/config/utils";

  export default {
    name: 'home',
    components: {
      vanButton: Button,
    },
    created() {
      // this.getNewOutCommodityFunc();
      this.getNowTime();
      this.mapFunction();
      this.getPhoneNumber();
      api.firstApi().then( res => {
        console.log(res);
      })
      this.getTodayData();
      /*api.secondApi().then(res => {

      })*/
    },
    data() {
      return {
        newCommodity: null,
        outCommen: null,
        time: '倒计时',
        disabled: false,
        nowTime: null,
        phoneArr: [],
        num:9856,
      }
    },
    computed: {
      getStoreFirstData() {
        return this.$store.state.storeFirstData
      },

    },
    methods: {
      getTodayData(){
        let self = this;
        let d = new Date();
        let time = d.getTime();
        let Y = d.getFullYear();
        let M = d.getMonth() + 1;
        let day = d.getDate();
        let uom = new Date(`${Y}-${M}-${day} 23:59:59`).getTime();
        if (getStorage('tomorrowUom')){
          let tomorrowDate = getStorage('tomorrowUom');
          if (tomorrowDate - time >= 0){
            if (getStorage('Number')){
              self.num = getStorage('Number')
            }
            // self.$Toast('不修改时间')
          }else {
            // self.$Toast('修改时间');
            let number = Math.floor(Math.random()*3000 + 5000);
            setStorage('Number',number);
            self.num = getStorage('Number');
            setStorage('tomorrowUom',uom)
          }
        }else {
          setStorage('tomorrowUom',uom)
        }
      },
      changRouter(type){
        this.$router.push({name:type})
      },
      changeStatus() {
        // store.commit("STORE_FIRST_DATA",{
        //   result: 'vuex的值改变了！'
        // })
        this.$store.commit({
          type: 'STORE_FIRST_DATA',
          result: '换了一种方式改变！'
        })
      },
      getNewOutCommodityFunc() {
        let self = this;
        api.getNewOutCommodityFunc().then(res => {
          if (res.status) {
            self.newCommodity = res.newCommodity;
            self.outCommen = res.outCommodity;
          } else {
            alert(res.msg);
          }
        })
      },
      timeDown() {
        const self = this;
        let times = 60;
        let init = setInterval(function () {
          if (times < 1) {
            clearInterval(init);
            self.time = '倒计时';
            self.disabled = false;
          } else {
            self.time = --times + "s";
            self.disabled = true;
          }
        }, 1000)
      },
      timestampToTime(timestamp) {
        let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
        let h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        let m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        let s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y + M + D + h + m + s;
      },
      getNowTime() {
        let self = this;
        // axiosConfig.get("http://api.avatardata.cn/IpAddress/Lookup?key=02c31a15f1524f19ba9814e5bac8154d");
        setInterval(function () {
          let date = new Date();
          self.nowTime = self.timestampToTime(date.getTime())
        }, 1000)
      },
      mapFunction() {
        // let arr = [{'one':1},{'two':2},{'three':3}];
        let arr = [['one', 1], ['two', 2], ['three', 3]];
        let map = new Map(arr);
        /*console.log(map);
        for (let key of map.keys()) {
          console.log(key);
        }

        for (let value of map.values()) {
          console.log(value);
        }

        for (let item of map.entries()) {
          console.log(item[0], item[1]);
        }*/
      },
      getPhoneNumber() {
        this.phoneArr.length = 0;
        for (let i = 0; i < 30; i++) {
          let arr = [3, 5, 6, 7, 8];
          let phone = "1" +
            (arr[Math.floor(Math.random() * 5)]).toString() +
            (Math.floor(Math.random() * 10)).toString() +
            "****" +
            (Math.floor(Math.random() * 10)).toString() +
            (Math.floor(Math.random() * 10)).toString() +
            (Math.floor(Math.random() * 10)).toString() +
            (Math.floor(Math.random() * 10)).toString();
          this.phoneArr.push(phone)
        }
      }
    }
  }
</script>
<style lang="scss">
  .top {
    height: 50px;
    width: 100%;
    background-color: yellowgreen;
    font-weight: bold;
    line-height: 50px;
    text-align: center;
    .top-title {
      color: #fff;
    }
  }

  .btn-01 {
    width: 200px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background-color: #f9284f;
    color: #fff;
    border-radius: 5px;
    font-size: 18px;
    font-weight: bold;
    outline: #f9284f;
  }
</style>
