<template>
  <div class="register-item">
    <div>
      <p class="messageOne">开始你的 Travels 之旅</p>
      <h1 class="messageTwo">
        注册到

        <span class="T"> Travels </span>
      </h1>
      <p class="messagethree">
        是否已经拥有账户
        <span class="toLoginMessage" @click="pageChangeSubmit">登录</span>
      </p>

      <el-form id="form" ref="formRef" :model="form" :rules="rules" label-width="auto">
        <el-form-item class="lineFeed" label="用户名" prop="name">
          <el-input class="input" v-model="form.name" />
        </el-form-item>
        <el-form-item class="lineFeed" label="E-Mail" prop="email">
          <el-input class="input" v-model="form.email" />
        </el-form-item>
        <el-form-item class="lineFeed" label="密码" prop="password">
          <el-input class="input" v-model="form.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button class="submitButton input" type="primary" @click="onSubmit">注 册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, defineEmits } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  email: '',
  password: ''
})

// 表单规则
const rules = {
  name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能小于 6 个字符', trigger: 'blur' }
  ]
}

const formRef = ref(null)

const onSubmit = () => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 提交表单
      console.log('表单验证通过，可以提交')
    } else {
      console.log('表单验证失败')
      return false
    }
  })
}

// 定义 emit 可能的事件
const emit = defineEmits(['pageChange'])

// click 登录的事件
const pageChangeSubmit =  () => {
  emit('pageChange')
}
</script>

<style lang="scss" scope>
$pur: #6a3ccd;
$pur2: #9c82d5;
.register-item {
  //   border: 2px solid salmon;
  padding: 5%;
  justify-content: center;

  .messageOne {
    font-size: 1.7vw;
    font-weight: 700;
    margin-top: 24%;
  }
  .messageTwo {
    font-size: 2vw;
    font-weight: 700;
    margin-top: 5%;
    .T {
      color: $pur;
      font-size: 1.2em;
    }
  }
  .messagethree {
    margin-top: 3%;
    margin-bottom: 10%;
    font-size: 0.7vw;
    opacity: 60%;
  }
  .toLoginMessage {
    color: $pur;
    font-weight: 700;
    font-size: 1.2em;
    margin-left: 10px;
    &:hover {
      cursor: pointer;
    }
  }

  .submitButton {
    margin-top: 2%;
    width: 100%;
  }
}

#form {
  font-size: 24px;

  .lineFeed {
    font-size: 1vw;
    display: block;

    justify-content: flex-start;
  }
  .input {
    height: 45px;
    margin-bottom: 4%;
  }

  .submitButton {
    background-color: $pur;
    font-size: 1vw !important;
    opacity: 1;
    border: 1px solid $pur;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 1;
    }
  }
}

.el-form-item__label-wrap {
  margin-left: 0 !important;
}

.el-form-item__label {
  font-size: 1vw !important;
  font-weight: 700;
}
.el-form-item.is-error .el-input__wrapper {
  box-shadow: 0 0 0 1px $pur !important;
}
.el-form-item__error {
  color: $pur !important;
  font-size: 0.9vw !important;
}
.is-focus {
  box-shadow: 0 0 0 2px $pur2 inset !important;
}
</style>
