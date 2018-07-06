<template>
  <div id="app">
    <!--<div class="title">
      {{getTitle}}
    </div>-->
    <van-nav-bar
      :title="getTitle"
      left-arrow
      @click-left="onClickLeft"
      :fixed="true"
      class="title"
    ></van-nav-bar>
    <router-view class="mt-60 mb-50"></router-view>
    <van-tabbar v-show="getTabbar" v-model="active" @change="tabbarChange" replace="true">
      <van-tabbar-item icon="shop">首页</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>列表</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">工具</van-tabbar-item>
      <van-tabbar-item icon="gold-coin">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import {NavBar, Tabbar, TabbarItem} from 'vant'

  export default {
    name: 'App',
    components: {
      vanNavBar: NavBar,
      vanTabbar: Tabbar,
      vanTabbarItem: TabbarItem,
    },
    data() {
      return {
        title: null,
        active:0,
        showTabar: true,
      }
    },
    computed: {
      getTitle() {
        return this.$store.state.title
      },
      getTabbar() {
        return this.$store.state.showTabar
      },
    },
    methods: {
      onClickLeft(){
        this.$router.go(-1)
      },
      tabbarChange(active){
        if (active === 0){
          this.$router.push({name:'Home'})
        }
        if (active === 1){
          this.$router.push({name:'List'})
        }
      }
    },
    watch: {
      '$route'(to, from) {
        if (to.path === '/'){
          this.active = 0
        }
        if (to.path === '/list'){
          this.active = 1
        }
      }
    }
  }
</script>

<style lang="scss">
  .title {
    height: 50px;
    width: 100%;
    background-color: #f9284f;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
    line-height: 50px;
  }
  .van-nav-bar__text,.van-icon.van-icon-arrow.van-nav-bar__arrow{
    color: #fff;
  }
  .van-icon.van-icon-arrow.van-nav-bar__arrow:active{
    background-color: #f9284f;
  }
</style>
