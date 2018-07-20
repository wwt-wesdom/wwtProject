<template>
  <div>
    <div class="box clear">
      <!--<input v-for="item in inputCount" type="text" name="" id=""/>-->
    </div>
   <!-- <div>
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
    </div>-->
    <div class="img-box">
      <img src="/static/img/test01.jpg" alt="">
    </div>
    <div style="width: 300px;overflow: auto">
      <table style="width: 300px;">
        <tr>
          <th style="width: 100px">第一列</th>
          <th style="width: 100px">第二列</th>
          <th style="width: 100px">第三列</th>
        </tr>
        <tr>
          <td>法法师浪费了</td>
          <td>发发司法局撒酒疯</td>
          <td>按房间爱上对方考虑三分</td>
        </tr>
      </table>
    </div>
    <div id="sudoku-demo" class="demo">
      <h1>Lazy Sudoku</h1>
      <p>Keep hitting the shuffle button until you win.</p>

      <button @click="shuffle">
        Shuffle
      </button>
      <transition-group name="cell" tag="div" class="container">
        <div v-for="cell in cells" :key="cell.id" class="cell">
          {{ cell.number }}
        </div>
      </transition-group>
    </div>
    <van-button  type="primary" @click="showShadow = true">弹窗</van-button>
    <new-shadow :showShadow="showShadow" @onchange="onchange">
      <div>反复拉锯放得开辣椒粉</div>
    </new-shadow>
  </div>
</template>
<script>
  import {Button} from 'vant'
  import newShadow from '@/components/newShadow.vue'
  export default {
    name: 'List',
    components:{
      vanButton: Button,
      newShadow: newShadow,
    },
    data() {
      return {
        inputCount:[],
        showShadow: false,
        cells: Array.apply(null, { length: 81 })
          .map(function (_, index) {
            return {
              id: index,
              number: index % 9 + 1
            }
          })
      }
    },
    computed: {},
    created() {
      this.inputNumber();
      this.paiXu();
    },
    methods: {
      onchange(data){
        this.showShadow = false;
      },
      inputNumber(){
        for (let i=0;i<81;i++){
          this.inputCount.push(i)
        }
      },
      paiXu(){
        let arr = [1,5,4,3,8,7,2,6,9,0];
        for (let i=0;i< arr.length;i++){
          for (let j = 0; j< arr.length -1 -i;j++){
            if (arr[j] > arr[j+1]){
              let temp = arr[j+1];
              arr[j+1] = arr[j];
              arr[j] = temp
            }
          }
        }
        console.log(arr);
      },
      shuffle: function () {
        this.cells = this.shuffle(this.cells)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    width: 238px;
    margin-top: 10px;
  }
  .cell {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 25px;
    height: 25px;
    border: 1px solid #aaa;
    margin-right: -1px;
    margin-bottom: -1px;
  }
  .cell:nth-child(3n) {
    margin-right: 0;
  }
  .cell:nth-child(27n) {
    margin-bottom: 0;
  }
  .cell-move {
    transition: transform 1s;
  }
  .shadow-background{
    width: 100%;
    /*height: 500px;*/
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
  }
  .shadow-content-none,.shadow-content{
    width: 80%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    z-index: 1001;
    background-color: #fff;
    transition: opacity 0.5s;
  }
  .shadow-content-none{
    opacity: 1;
  }
  .shadow-content{
    opacity: 0;
  }
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
  .img-box{
    background-color: yellowgreen;
    img{
      width: 100%;
      vertical-align: top;
    }
  }
  table{
    border-collapse: collapse;
    table-layout: fixed;
  }
  table tr td{
    overflow: scroll;
    height: 21px;
    white-space: nowrap;
  }
</style>
