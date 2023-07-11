<template style="padding: 0">
  <div class="main">
    <div class="left">
      <div style="width: 150px; height: 56px;">
        <el-image :src="getImage('/setting-png/logo-icon')" style="margin-top: 16px; margin-left: 20px;"></el-image>
      </div>
      <div class="login-title">
        用户登录
      </div>
      <div class="form-wrapper">
        <el-form :model="userLoginInfo" label-width="80px" label-position="top">
          <el-form-item label="邮箱" class="form-item">
            <el-input class="form-input" v-model="userLoginInfo.email"></el-input>
          </el-form-item>
          <el-form-item label="密码" class="form-item">
            <el-input class="form-input" v-model="userLoginInfo.password" type="password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <div class="forget-password">忘记密码？</div>
          </el-form-item>
          <el-form-item class="form-button">
            <el-button class="submit-button" @click="this.submitLogin">确认登录</el-button>
          </el-form-item>
        </el-form>
        <div class="no-account" style="display: inline-flex">
          <div class="no-account-text">新用户没有账号？</div>
          <div class="no-account-signup">点我注册</div>
        </div>
      </div>

      <div class="login-switch">
        <div class="user-login" :style="userStyle" @click="this.onSwitchToUserLogin">
          平台用户登录
        </div>
        <el-divider direction="vertical"></el-divider>
        <div class="admin-login" :style="adminStyle" @click="this.onSwitchToAdminLogin">
          管理员登录
        </div>
      </div>

    </div>
    <div class="right">
      <img :src="getImage('../assets/setting-png/login-background.png')" class="login-background-img"/>
    </div>
  </div>
</template>

<script>
import {getImageUrl} from "@/utils/utils.js";
import {ipAddress} from "@/utils/utils.js";
import { ElMessage } from 'element-plus'

export default {
  name: "UserLogin",
  data(){
    return{
      userLoginInfo:{
        email:'',
        password: '',
      },

      loginResult:{
        id: '',
        status: '',
      },

      adminStyle: 'color: #333333',
      userStyle: 'color: #65156C',
      isAdmin: false,
    }
  },
  methods:{
    onSwitchToUserLogin(){
      this.$router.push('/login/0');
      this.isAdmin = false;
      this.changeColor();
    },
    onSwitchToAdminLogin(){
      this.$router.push('/login/1');
      this.isAdmin = true;
      this.changeColor();
    },
    changeColor(){
      if(!this.isAdmin){
        this.userStyle = 'color: #65156C';
        this.adminStyle = 'color: #333333';
      }else{
        this.userStyle = 'color: #333333';
        this.adminStyle = 'color: #65156C';
      }
    },

    submitLogin(){
      fetch(`http://${ipAddress}/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.userLoginInfo.email,
          password: this.userLoginInfo.password,
        }),
      })
          .then(x => x.json())
          .then(x => {
            this.loginResult = x;
            if(this.loginResult.status === 1){
              this.$router.push('/');
            }else if(this.loginResult.status === -1){
              ElMessage.error('用户不存在');
            }else if(this.loginResult.status === 0){
              ElMessage.error('密码错误');
            }
          });

    }
  },
  onMounted(){
    this.changeColor();
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
@import "user-login.css";
</style>