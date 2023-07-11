<template>
  <el-header style="display: inline-flex">
    <div style="width: 150px; height: 56px;">
      <el-image :src="getImage('../assets/setting-png/logo-icon.png')" style="margin-top: 16px; margin-left: 20px;"></el-image>
    </div>
    <div class="logout-button-wrapper">
      <el-button class="logout-button" @click="onLogOut">登出</el-button>
    </div>


  </el-header>
  <el-main style="display: inline-flex">
    <div class="left">
      <el-menu default-active="1" class="menu">
        <el-menu-item index="1" @click="this.$router.push('/admin_control/add_book')">新增书籍</el-menu-item>
        <el-menu-item index="2" @click="this.$router.push('/admin_control/search_book')">查看书籍信息</el-menu-item>
        <el-menu-item index="3">发放优惠券</el-menu-item>
      </el-menu>
    </div>
    <div class="right">
      <RouterView class="router-view">

      </RouterView>
    </div>

  </el-main>
</template>

<script>
import {getImageUrl, ipAddress} from "@/utils/utils.js";

export default {
  name: "AdminControl",
  data(){
    return{

    }
  },
  methods:{
    onLogOut(){
      fetch(`http://${ipAddress}/logout`)
          .then(this.$router.push('/'));
    },
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
@import "admin-control.css";
</style>