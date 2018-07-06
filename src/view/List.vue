<template>
  <div>
    <div class="box clear">
      <input v-for="item in inputCount" type="text" name="" id=""/>
    </div>
    <div>
      <span>1-巨人</span>
      <span>2-野猪</span>
      <span>3-弓手</span>
      <span>4-黄人</span>
      <span>5-格布</span>
      <span>6-法师</span>
      <span>7-炸弹</span>
      <span>8-气球</span>
      <span>9-飞龙</span>
      <span>10-皮卡</span>
      <span>11-小龙</span>
      <span>12-天使</span>
      <span>13-掘地</span>
      <span>14-亡灵</span>
      <span>15-武神</span>
      <span>16-雷龙</span>
      <span>17-天狗</span>
      <span>18-投手</span>
      <span>19-石头</span>
      <span>20-女巫</span>
      <span>21-蛮王</span>
      <span>22-女王</span>
      <span>23-守护</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'List',
    data() {
      return {
        inputCount:[],
      }
    },
    computed: {},
    created() {
      this.inputNumber();
    },
    methods: {
      inputNumber(){
        for (let i=0;i<81;i++){
          this.inputCount.push(i)
        }
      }
    }
  }
</script>
<style>
  .box{
    width: 360px;
  }
  input{
    width: 40px;
    height: 40px;
    border: 1px solid #eee;
    float: left;
    box-sizing: border-box;
    text-align: center;
  }
  span{
    padding: 5px 10px;
  }
</style>
