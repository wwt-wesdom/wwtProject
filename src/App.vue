<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <!--<div class="top">这里是头部</div>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  .top {
    height: 50px;
    width: 100%;
    background-color: yellowgreen;
    color: #fff;
    font-weight: bold;
    line-height: 50px;
    text-align: center;
  }
</style>
