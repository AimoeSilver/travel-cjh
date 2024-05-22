<template>
  <div id="main">
    <!-- 中间盒 -->
    <div class="container">
      <div
        ref="cover"
        class="card cover"
        @animationend="handleAnimationEnd"
        :style="{
          'animation-play-state': isPaused ? 'paused' : 'running'
        }"
      >
        <!-- <img  src="@/assets/develop1.svg" alt=""> -->
        <carousel ref="carousel">
          <img  src="@/assets/develop1.svg" alt="">
          <img  src="@/assets/develop2.svg" alt="">
          
        </carousel>
      </div>
      <div class="card">
        <div class="register-login">
          <register-item @pageChange="handleChange" />
        </div>
      </div>

      <div class="card">
        <div class="register-login">
          <login-item></login-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import RegisterItem from './RegisterItem.vue'
import LoginItem from './LoginItem.vue'
import Carousel from '@/components/login/LittleCarousel.vue'
import { ref } from 'vue'

// animation 状态
const isPaused = ref(true)
const clickStatus = ref(false)

const cover = ref(null)
const carousel = ref(null)
// login or register status 状态码


// Click Login 执行的事件
const handleChange = () => {
  // 防止重复点击
  
  if (!clickStatus.value) {
    clickStatus.value = true
    isPaused.value = !isPaused.value
    carousel.value.nextSlide();

    setTimeout(() => {
      clickStatus.value = false
    }, 1100)
    console.log('Page Change')
  }
}

const handleAnimationEnd = () => {
  console.log('动画播放完成了！')
}
</script>

<style lang="scss" scoped>
@import '../src/style/color.scss';

#main {
  font-family: '';
  width: 100vw;
  height: 100vh;
  background-size: 20%;
  background-repeat: repeat;
  background-image: url('../src/assets/backgrouond-login.svg');

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
    width: 80%;
    height: 80%;
    background-color: #fff;
    position: relative;

    .register-login {
      width: 75%;
      height: 100%;
    }

    .card {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 30px;
      height: 100%;
      width: 40%;
      color: $primary;
      // background-color: rgb(113, 113, 113);
    }

    .cover {
      width: 60%;
      position: absolute;
      left: 40%;
      overflow: hidden;
      // opacity: 0.6;
      z-index: 3;
      border-radius: 70px 30px 30px 70px;
      background-color: rgb(92, 92, 235);
      animation-name: moveTo;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in-out;
      animation-iteration-count: 1;
      animation-direction: alternate;
      animation-play-state: paused;
      img {
        width: 100%;
        height: 100%;
      }

      img {
        min-width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2em;
      }
    }
  }
}

@keyframes moveTo {
  0% {
    left: 40%;
    border-radius: 70px 30px 30px 70px;
  }

  100% {
    left: 0%;
    border-radius: 30px 70px 70px 30px;
  }
}
</style>
