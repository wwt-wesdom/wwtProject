<template>
  <div>
    <!-- <div class="slider" ref="sliderBox">
       <span ref="box" style="left: 0">滚动条滚动条条滚动条条滚动条条滚动条条滚动条条滚动条条滚动条条滚动条条滚动条条滚动条条滚动条</span>
     </div>-->
    <!--<div v-for="item in ceshidata">
      {{item.one}}
    </div>-->
    <div class="pos-rel" style="height: 300px;width: 100%;overflow-x: hidden">
      <div class="img-box" ref="body">
        <img v-for="item in imglist" :src="item" alt="">
      </div>
    </div>
    <div ref="box" style="width: 100px;height: 100px;border-radius: 50px;background-color: red;position: fixed;left: 0;top: 0;z-index: 1000"></div>
    <div class="mt-15" @click="nextImg">下一个</div>
    <div class="mt-15" @click="prevImg">上一个</div>
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address">
    </template><br/>
    <button @click="loginType === 'username'? loginType = '':loginType = 'username'">切换</button>
  </div>
</template>
<script>
  import api from '@/config/apiConfig'
  import {Toast, Row, Col,} from 'vant'

  export default {
    name: 'tools',
    components: {
      vanRow: Row,
      vanCol: Col,
    },
    data() {
      return {
        trialReport: [],
        ceshidata: null,
        imglist: [
          '/static/img/01.JPEG',
          '/static/img/02.JPEG',
          '/static/img/03.JPEG',
        ],
        loginType: 'username',
      }
    },
    created() {
      const self = this;
      /*api.firstApi().then( res => {
          if (res.status){
            self.ceshidata = res.data
          }
        }
      )*/
    },
    mounted() {
      let self = this;
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
      let startX=0 ;
      let startY=0 ;
      let endX = 0 ;
      let endY = 0 ;
      let body = this.$refs.box;
      body.addEventListener('touchstart', function (event) {
        let touch = event.targetTouches[0];
        //滑动起点的坐标
        startX = touch.pageX;
        startY = touch.pageY;
        console.log("startX:"+startX);
      },false);
      body.addEventListener("touchmove", function (event) {
        let touch = event.targetTouches[0];
        //手势滑动时，手势坐标不断变化，取最后一点的坐标为最终的终点坐标
        endX = touch.pageX;
        endY = touch.pageY;
        // console.log("endX:"+endX);
        body.style.left = endX -startX + 'px';
        body.style.top = endY -startY  + 'px'
      },false);

      body.addEventListener("touchend", function (event) {
        let distanceX = endX - startX ;
        let distanceY = endY - startY ;
        body.style.left = endX + 'px';
        body.style.top =  endY + 'px';
        // startX = endX;
        // startY = endY;
        // console.log("distanceX:"+distanceX+","+"distanceY:"+distanceY);
        //移动端设备的屏幕宽度
        //判断是否滑动了，而不是屏幕上单击了
        if (startX === Math.abs(distanceX)) {
          //在滑动的距离超过屏幕高度的20%时，做某种操作
          distanceX = 0
        }

        // console.log(distanceX);
        if (Math.abs(distanceX) > 200){
          if (distanceX > 0){
            distanceX = 100;

            // self.imglist.push(self.imglist.shift())
          }else {
            // console.log(self.imglist);
            // distanceX = -100;
            // self.imglist.unshift(self.imglist.pop())
          }
        }
        // body.className += ' run ';
        // body.style.left = distanceX + 'px';
        // startX  = endX  = 0;
      },false)
    },
    computed: {},
    methods: {
      nextImg() {

      },
      prevImg() {

      },
      wetherScroll() {

      }
    }
  }
</script>
<style lang="scss" scoped>
  .img-box {
    width: 2000px;
    overflow-y: hidden;
    white-space: nowrap;
    /*display: inline;*/
    position: absolute;
    left: 0;
    top: 0;
    img {
      display: inline-block;
      width: 230px;
      &:first-child {
      }
      &:last-child {

      }
    }

  }

  .slider {
    width: 2000px;
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
    background-color: yellowgreen;
    color: #fff;
    font-size: 14px;
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    span {
      white-space: nowrap;
      position: absolute;
    }
    .run {
      transition: left .5s linear;
    }
    .run-slow {
      transition: left 10s linear;
    }
  }
</style>
