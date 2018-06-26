<template>
  <div class="text-ct">
    <div class="top">
      <span class="top-title ">这里是home页</span>
    </div>
    <div><span>vuex的数据：</span><span>{{getStoreFirstData}}</span></div>
    <div @click="changeStatus">点击改变vuex的值</div>
  </div>

</template>
<script>
  import store from '../store'
  import api from '@/config/apiConfig'
  export default {
    name:'home',
    created(){
      this.getNewOutCommodityFunc();
    },
    data(){
      return{
        newCommodity: null,
        outCommen: null,
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
</style>
