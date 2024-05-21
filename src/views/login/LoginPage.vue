<template>
  <div id="main">
    <!-- 中间盒 -->
    <div class="container">
      <div class="card cover">

      </div>
      <div class="card">
        <div class="register-form">
          <register-item />
        </div>
      </div>

      <div class="card">
        <div class="login-form">

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import RegisterItem from './RegisterItem.vue'

export default {
  components: { RegisterItem },
  name: 'LoginPage',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '../src/style/color.scss';

#main {
  font-family: "";
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

    .cover {
      position: absolute;
      opacity: 0.6;
      z-index: 3;
      background-color: rgb(92, 92, 235);
    }

    .register-form {
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
  }
}
</style>
