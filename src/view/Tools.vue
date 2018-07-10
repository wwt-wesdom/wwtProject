<template>
  <div>
    <van-row>
      <van-col span="12" v-for="item in trialReport" :key="item.id">
        <img :src="JSON.parse(item.trialReportImages)[0]" alt="" width="100%">
        <p>{{item.trialReportText}}</p>
      </van-col>
    </van-row>
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
      this.getAllReport()
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
      }
    }
  }
</script>
