<template style="padding: 0">
  <div class="main">
    <div class="left">
      <div style="width: 150px; height: 56px;">
        <el-image :src="getImage('../assets/setting-png/logo-icon.png')" style="margin-top: 16px; margin-left: 20px;"></el-image>
      </div>
      <div class="login-title">
        用户注册
      </div>
      <div class="form-wrapper">
        <el-form :model="signUpInfo" label-width="80px" label-position="top">
          <el-form-item label="邮箱" class="form-item">
            <el-input class="form-input" v-model="signUpInfo.email"></el-input>
          </el-form-item>
          <el-form-item label="用户名" class="form-item">
            <el-input class="form-input" v-model="signUpInfo.nickname"></el-input>
          </el-form-item>
          <el-form-item label="手机号" class="form-item">
            <el-input class="form-input" v-model="signUpInfo.phone"></el-input>
          </el-form-item>
          <el-form-item label="密码" class="form-item">
            <el-input class="form-input" v-model="signUpInfo.password"></el-input>
          </el-form-item>
          <el-form-item class="form-button">
            <el-button class="submit-button" @click="submitSignup">确认注册</el-button>
          </el-form-item>
        </el-form>
        <div class="no-account" style="display: inline-flex">
          <div class="no-account-text">已有账号？</div>
          <div class="no-account-signup" @click="this.$router.push('/login/0')">点我登录</div>
        </div>
      </div>

    </div>
    <div class="right">
      <img :src="getImage('../assets/setting-png/login-background.png')" class="login-background-img"/>
    </div>
  </div>
</template>

<script>
import {getImageUrl, ipAddress} from "@/utils/utils.js";
import { ElMessage } from 'element-plus'

export default {
  name: "UserSignUp",
  data(){
    return{
      signUpInfo:{
        nickname:'',
        email: '',
        phone: '',
        password: '',
      },
      status:'',
    }
  },
  methods:{
    submitSignup(){
      fetch(`http://${ipAddress}/register/0`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nickname: this.signUpInfo.nickname,
          email: this.signUpInfo.email,
          phone: this.signUpInfo.phone,
          password: this.signUpInfo.password,
        }),
      })
          .then(x => x.json())
          .then(x => {
            this.status = x.status;
            if(this.status === 1){
              this.$router.push('/login/0');
            }else if(this.status === 0) {
              ElMessage.error('邮箱已被注册');
            }
          });
    }
  },

  setup(){
    function getImage(url) {
      return getImageUrl(url);
    }

    return {
      getImage
    }
  },
}
</script>

<style scoped>
@import "user-sign-up.css";
</style>