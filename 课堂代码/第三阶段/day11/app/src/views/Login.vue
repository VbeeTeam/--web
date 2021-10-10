<template>
  <div class="login">
    <!-- <img class="logo" src="../assets/images/cart.png" alt=""> -->
    <div v-if="type == '登录'" class="login-body login">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <div class="link-register" @click="toggle('注册')">立即注册</div>
          <van-button round block type="info" color="#1baeae" native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
    <div v-else class="login-body register">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px;">
          <div class="link-login" @click="toggle('登录')">已有登录账号</div>
          <van-button round block type="info" color="#1baeae" native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      username: '',
      password: '',
      type: '登录',
      userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : []
    }
  },
  components: {
  },
  methods: {
    //切换视图
    toggle(str) {
      this.type = str
    },
    //提交
    onSubmit(values) {
      if (this.type == '登录') {
        if(this.userInfo.length > 0){
          this.userInfo.forEach((item) => {
            if(item.username == values.username && item.password == values.password){
              this.$router.push({path: "/"})
            }else{
              this.$toast("请输入正确账号和密码")
            }
          })
          
        }else{
          this.$toast("没有账号，请去注册")
        }
      } else {
        this.userInfo.push(values)
        localStorage.setItem("userInfo",JSON.stringify(this.userInfo));
        this.type = '登录'
      }
    },
   
  
  },
}
</script>

<style lang="scss" scoped>
  .login {
    .logo {
      width: 120px;
      height: 120px;
      display: block;
      margin: 80px auto 30px;
    }
    .login-body {
      padding: 0 20px;
    }
    .login {
      .link-register {
        font-size: 14px;
        margin-bottom: 20px;
        color: #1989fa;
        display: inline-block;
      }
    }
    .register {
      .link-login {
        font-size: 14px;
        margin-bottom: 20px;
        color: #1989fa;
        display: inline-block;
      }
    }
    .verify-bar-area {
      margin-top: 24px;
      .verify-left-bar {
        border-color: #1baeae;
      }
      .verify-move-block {
        background-color: #1baeae;
        color: #fff;
      }
    }
   
  }
</style>
