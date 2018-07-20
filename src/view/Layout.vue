<template>
  <div>
    <div class="box clear">
      <div class="left">left</div>
      <div class="center">center</div>
      <div class="right">right</div>
    </div>
  </div>
</template>
<script>
  import api from '@/config/apiConfig'
  import {Toast, Row, Col} from 'vant'
  export default {
    name:'tools',
    components: {
      vanRow: Row,
      vanCol: Col,
    },
    data(){
      return{

      }
    },
    created(){

    },
    mounted(){


    },
    computed:{},
    methods:{

    }
  }
</script>
<style lang="scss">
  .box {
    padding: 0 100px;
  }
  .left,.center,.right{
    float: left;
    min-width: 100px;
    /*position: relative;*/
  }
  .left{
    background-color: #f9284f;
    width: 100px;
    margin-left: -100px;
    /*<!--left: -100px;-->*/
  }
  .center{
    background-color: #3399ff;
    width: 100%;
  }
  .right{
    background-color: yellowgreen;
    width: 100px;
    margin-right: -100px;
    /*<!--right: -100px;-->*/
  }
</style>
