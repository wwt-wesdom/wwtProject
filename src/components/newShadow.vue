<template>
  <div>
    <div class="shadow-background" v-show="showShadow" @click="change"></div>
    <div :class="[showShadow?'shadow-content-none':'shadow-content']">
      <div class=""></div>
    </div>
  </div>
</template>
<script>
  import {Button} from 'vant'
  export default {
    name: 'List',
    components:{
      vanButton: Button,
    },
    props:{
      showShadow:{
        type:Boolean,
        default:false,
      }
    },
    data() {
      return {

      }
    },
    computed: {},
    created() {

    },
    methods: {
      change(){
        this.$emit('onchange',false)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .shadow-background{
    width: 100%;
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

</style>
