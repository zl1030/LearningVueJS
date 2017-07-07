<template>
  <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
    <h3 class="title">ZL-Admin</h3>
    <el-form-item prop="username">
      <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <!--<el-checkbox :checked="checked" class="remember">记住密码</el-checkbox>-->
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin" :loading="logining">登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import { requestLogin } from '../api/api'

  export default {
    data () {
      return {
        // 设置登录按钮loading状态
        logining: false,
        // 登录账号数据
        account: {
          username: '',
          pwd: ''
        },
        // 登录表单数据验证规则
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        },
        // 记住密码选项状态
        checked: false
      }
    },
    methods: {
      // 登录按钮逻辑
      handleLogin () {
        this.$refs.AccountFrom.validate((valid) => {
          if (valid) {
            // 登录按钮转菊花
            this.logining = true

            // 按登录协议拼数据
            var loginParams = {username: this.account.username, password: this.account.pwd}

            // 把帐密发给服务器验证
            requestLogin(loginParams).then(data => {
              // 登录按钮菊花关闭
              this.logining = false

              let {msg, code, user} = data
              if (code !== 200) {
                this.$message({
                  message: msg,
                  type: 'error'
                })
              } else {
                // 账密验证成功
                // 把本次登录账户信息存到Session中
                sessionStorage.setItem('access-user', JSON.stringify(user))

                // 整个页面跳转到Hello
                this.$router.push({path: '/'})
              }
            })
          } else {
            return false
          }
        })
      }
    }

  }
</script>

<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>
