<template>
  <div>
   <!-- <div class="slider" ref="sliderBox">
      <span ref="box" style="left: 0">滚动条滚动条条滚动条条滚动条条滚动条条滚动条条滚动条条滚动条条滚动条条滚动条条滚动条条滚动条</span>
    </div>-->
    <div v-for="item in ceshidata">
      {{item.one}}
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
        trialReport:[],
        ceshidata: null,
      }
    },
    created(){
      const self = this;
      api.firstApi().then( res => {
          if (res.status){
            self.ceshidata = res.data
          }
        }
      )
    },
    mounted(){
      /*let self = this;
      let count = 0;
      if (this.$refs.sliderBox.offsetWidth < this.$refs.box.offsetWidth){
        this.$refs.box.style.left = -this.$refs.box.offsetWidth + 'px';
        this.$refs.box.className += 'run';
      }
      function slider() {
        count ++;
        if ( self.$refs.box.style.left === -self.$refs.box.offsetWidth + 'px'){
          self.$refs.box.className = '';
          self.$refs.box.style.left = self.$refs.box.offsetWidth + 'px';
          setTimeout(function () {
            self.$refs.box.className += 'run-slow';
            self.$refs.box.style.left = -self.$refs.box.offsetWidth + 'px';
          },400)
        }
      }
      setInterval(function () {
        slider();
      },10400)*/
    },
    computed:{},
    methods:{
      getAllReport(){
        let self = this;
        api.getALLTrialReport({
          itemCatalogname:null,
          page: 0,
          size: 16
        }).then( res => {
          if (res.status){
            self.trialReport = res.data;
            // self.trialReport.trialReportImages = JSON.parse(res.data.trialReportImages)[0]
          }else {
            Toast(res.msg)
          }
        })
      },
      sliderFun(){
        let self = this;

      },

    }
  }
</script>
<style lang="scss" scoped>
  .slider{
    width: 100%;
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
    background-color: yellowgreen;
    color: #fff;
    font-size: 14px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    span{
      white-space: nowrap;
      position: absolute;
    }
    .run{
      transition: left 5s linear;
    }
    .run-slow{
      transition: left 10s linear;
    }
  }
</style>
