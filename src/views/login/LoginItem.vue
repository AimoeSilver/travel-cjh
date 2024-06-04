<template>
  <div class="register-item">
    <div>
      <p class="messageOne">继续你的 Travels 之旅</p>
      <h1 class="messageTwo">
        登录到

        <span class="T"> Travels </span>
      </h1>
      <p class="messagethree">
        是否还未拥有账户
        <span class="toLoginMessage" @click="pageChangeSubmit">注册</span>
      </p>

      <el-form id="form" ref="formRef" :model="form" :rules="rules" label-width="auto">
        <el-form-item class="lineFeed" label="用户名" prop="name">
          <el-input class="input" v-model="form.name" />
        </el-form-item>
        <el-form-item class="lineFeed" label="密码" prop="password">
          <el-input class="input" v-model="form.password" type="password" autocomplete="off" />
        </el-form-item>
        
        <el-form-item>
          <el-button class="submitButton input" type="primary" @click="onSubmit">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, defineEmits, onMounted } from 'vue'
import { useStore  } from 'vuex'
import { useRouter } from 'vue-router' 

// 拿到 store instance
const store = useStore()

// get router instance
const router = useRouter()

// do not use same name with ref
const form = reactive({
  name: '',
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
      console.log('表单验证通过，可以提交,数据为 ', form)
      
      store.dispatch('user/login', form).then(() => {
        // 执行跳转
        router.push('/about')
      }).catch(() => {
        console.log(`登录失败`)
      })
      
      
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

// 挂载执行
onMounted(() => {
  // console.log('Mounted!')
  
})

</script>

<style lang="scss" scoped>
$pur: #6a3ccd;
$pur2: #9c82d5;
.register-item {
  //   border: 2px solid salmon;
  padding: 5%;
  justify-content: center;

  .messageOne {
    font-size: 1.7vw;
    font-weight: 700;
    margin-top: 36%;
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


</style>
