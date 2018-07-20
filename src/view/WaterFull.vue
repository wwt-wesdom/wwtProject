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
      this.getAllReport();
    },
    mounted(){
      /*window.onload=function(){

        waterfall('main','pin');

        let dataInt={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'}]};

        window.onscroll=function(){
          if(checkscrollside()){
            let oParent = document.getElementById('main');// 父级对象
            for(let i=0;i<dataInt.data.length;i++){
              let oPin=document.createElement('div'); //添加 元素节点
              oPin.className='pin';                   //添加 类名 name属性
              oParent.appendChild(oPin);              //添加 子节点
              let oBox=document.createElement('div');
              oBox.className='box';
              oPin.appendChild(oBox);
              let oImg=document.createElement('img');
              oImg.src='./images/'+dataInt.data[i].src;
              oBox.appendChild(oImg);
            }
            waterfall('main','pin');
          };
        }
      }

      /!*
          parend 父级id
          pin 元素id
      *!/
      function waterfall(parent,pin){
        let oParent=document.getElementById(parent);// 父级对象
        let aPin=getClassObj(oParent,pin);// 获取存储块框pin的数组aPin
        let iPinW=aPin[0].offsetWidth;// 一个块框pin的宽
        let num=Math.floor(document.documentElement.clientWidth/iPinW);//每行中能容纳的pin个数【窗口宽度除以一个块框宽度】
        oParent.style.cssText='width:'+iPinW*num+'px;ma rgin:0 auto;';//设置父级居中样式：定宽+自动水平外边距

        let pinHArr=[];//用于存储 每列中的所有块框相加的高度。
        for(let i=0;i<aPin.length;i++){//遍历数组aPin的每个块框元素
          let pinH=aPin[i].offsetHeight;
          if(i<num){
            pinHArr[i]=pinH; //第一行中的num个块框pin 先添加进数组pinHArr
          }else{
            let minH=Math.min.apply(null,pinHArr);//数组pinHArr中的最小值minH
            let minHIndex=getminHIndex(pinHArr,minH);
            aPin[i].style.position='absolute';//设置绝对位移
            aPin[i].style.top=minH+'px';
            aPin[i].style.left=aPin[minHIndex].offsetLeft+'px';
            //数组 最小高元素的高 + 添加上的aPin[i]块框高
            pinHArr[minHIndex]+=aPin[i].offsetHeight;//更新添加了块框后的列高
          }
        }
      }

      /!****
       *通过父级和子元素的class类 获取该同类子元素的数组
       *!/
      function getClassObj(parent,className){
        let obj=parent.getElementsByTagName('*');//获取 父级的所有子集
        let pinS=[];//创建一个数组 用于收集子元素
        for (let i=0;i<obj.length;i++) {//遍历子元素、判断类别、压入数组
          if (obj[i].className==className){
            pinS.push(obj[i]);
          }
        };
        return pinS;
      }
      /!****
       *获取 pin高度 最小值的索引index
       *!/
      function getminHIndex(arr,minH){
        for(let i in arr){
          if(arr[i]==minH){
            return i;
          }
        }
      }


      function checkscrollside(){
        let oParent=document.getElementById('main');
        let aPin=getClassObj(oParent,'pin');
        let lastPinH=aPin[aPin.length-1].offsetTop+Math.floor(aPin[aPin.length-1].offsetHeight/2);//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
        let scrollTop=document.documentElement.scrollTop||document.body.scrollTop;//注意解决兼容性
        let documentH=document.documentElement.clientHeight;//页面高度
        return (lastPinH<scrollTop+documentH)?true:false;//到达指定高度后 返回true，触发waterfall()函数
      }
*/
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
