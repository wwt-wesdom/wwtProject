<template>
  <div>
    <div id="main" class="pos-rel">
      <div class="pin" v-for="(item,index) in trialReport">
        <div class="box">
          <p class="text-ct">法拉电视剧{{index}}</p>
          <img :src="item.trialReportImages"/>
        </div>
      </div>
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
        trialReport:[]
      }
    },
    created(){
      // this.getAllReport();
    },
    mounted(){

    },
    computed:{

    },
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
            self.trialReport.forEach(function (item) {
              item.trialReportImages = JSON.parse(item.trialReportImages)[0]
            })
            // self.trialReport.trialReportImages = JSON.parse(res.data.trialReportImages)[0]
          }else {
            Toast(res.msg)
          }
        })
      },
    }
  }
</script>
<style lang="scss">
  #main{
    column-count: 4;
    /*column-gap: 0;*/
  }
  .pin{
    padding: 5px;
    /*float:left;*/
    width:100px;
    box-sizing: border-box;
    margin-top: 5px;
    break-inside: avoid;
  }
  .box{
    padding: 10px;
    border:1px solid #ccc;
    box-shadow: 0 0 6px #ccc;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:auto;
  }
  .box img{
    width:100%;
    height:auto;
  }
</style>
