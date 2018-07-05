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
    <router-view class="mt-60"></router-view>
  </div>
</template>

<script>
  import {NavBar} from 'vant'

  export default {
    name: 'App',
    components: {
      vanNavBar: NavBar
    },
    data() {
      return {
        title: null,
      }
    },
    computed: {
      getTitle() {
        return this.$store.state.title
      }
    },
    methods: {
      onClickLeft(){
        this.$router.go(-1)
      }
    },
    watch: {
      '$route'(to, from) {

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
