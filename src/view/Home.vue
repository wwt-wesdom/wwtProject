<template>
  <div class="text-ct">
    <div class="top">
      <span class="top-title ">这里是home页</span>
    </div>
    <div class="mt-20"><span>vuex的数据：</span><span>{{getStoreFirstData}}</span></div>
    <div @click="changeStatus" class="mt-20">点击改变vuex的值</div>
    <div class="mt-60">
      <button class="btn-01" @click="timeDown" :disabled="disabled">{{time}}</button>
    </div>
    <div class="mt-20">
      时间戳转换：{{nowTime}}
    </div>
  </div>

</template>
<script>
  import store from '../store'
  import axiosConfig from '@/config/axiosConfig'
  import api from '@/config/apiConfig'
  export default {
    name:'home',
    created(){
      // this.getNewOutCommodityFunc();
      this.timestampToTime(1530535620000);
      this.getNowTime();
      console.log(this.timestampToTime(1530535620000));
    },
    data(){
      return{
        newCommodity: null,
        outCommen: null,
        time: '倒计时',
        disabled: false,
        nowTime: null,
      }
    },
    computed:{
      getStoreFirstData(){
        return this.$store.state.storeFirstData
      }
    },
    methods:{
      changeStatus(){
        // store.commit("STORE_FIRST_DATA",{
        //   result: 'vuex的值改变了！'
        // })
        this.$store.commit({
          type:'STORE_FIRST_DATA',
          result:'换了一种方式改变！'
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
      timeDown(){
        const self  = this;
        let times = 60;
        let init = setInterval(function () {
          if (times<1){
            clearInterval(init);
            self.time = '倒计时';
            self.disabled = false;
          }else {
            self.time = --times+"s";
            self.disabled = true;
          }
        },1000)
      },
      timestampToTime(timestamp){
          let  date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
          let Y = date.getFullYear() + '-';
          let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
          let D = (date.getDate() < 10 ? '0'+ date.getDate() : date.getDate()) + ' ';
          let h = (date.getHours() < 10 ? '0'+date.getHours():date.getHours()) + ':';
          let m = (date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes()) + ':';
          let s = (date.getSeconds() <10? '0'+date.getSeconds():date.getSeconds());
          return Y+M+D+h+m+s;
      },
      getNowTime(){
        let self = this;
       /* let ajax = new XMLHttpRequest();
        ajax.open('POST',' http://api.avatardata.cn/BeijingTime/LookUp?key=e9142f8192d748bba8dd694a59090f4c',true);
        ajax.onreadystatechange = success;
        ajax.send();
        console.log(ajax);
        function success () {
          console.log(ajax.responseText);
        }*/
       /* axiosConfig.get('http://api.avatardata.cn/BeijingTime/LookUp',{key:'e9142f8192d748bba8dd694a59090f4c',dtype:'JSON',format:true}).then(res=>{
          console.log(111);
          console.log(res);
        });*/
        /*if (ajax.readyState === 4 && ajax.status = 200){
          console.log(ajax.responseText);
        }*/
        setInterval(function () {
          let date = new Date();
          self.nowTime = self.timestampToTime(date.getTime())
        },1000)
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
    .top-title{
      color: #fff;
    }
  }
  .btn-01{
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
