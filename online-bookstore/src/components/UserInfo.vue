<template>
  <div class="main-wrapper">
  <div class="top-wrapper">
    <div class="top-left">
      <div class="panel-title">会员积分</div>
      <div class="point-box">
        <div class="user-point">{{this.userForm.point}}</div>
        <div class="user-point-chn">积分点数</div>
          <div class="point-info">
            <div class="point-info-title">等级</div>
            <div class="point-info-grade">{{this.grade}}</div>
            <el-icon class="point-info-icon"><QuestionFilled /></el-icon>
          </div>
          <div class="point-info">
            <div class="point-info-title">会员权益</div>
            <div class="point-rights">
              <div class="point-right-item">1. {{this.right1}}</div>
              <div class="point-right-item">2. {{this.right2}}</div>
            </div>
        </div>
      </div>
    </div>
    <div class="top-right">
      <div class="panel-title" style="margin-bottom: 22px">账号信息</div>
      <div class="form-wrapper">
      <el-form :model="userForm" label-width="80px" label-position="left" :rules="formRule" ref="refFormRule">
        <el-form-item label="用户ID">
          <el-input class="form-input" v-model="userForm.id" disabled/>
        </el-form-item>
        <el-form-item label="用户名" prop="name">
          <el-input class="form-input" v-model="userForm.name" :disabled="this.isBanned"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="phone">
          <el-input class="form-input" v-model="userForm.phone" :disabled="this.isBanned"></el-input>
        </el-form-item>
        <el-form-item label="电子邮箱" prop="email">
          <el-input class="form-input" v-model="userForm.email" :disabled="this.isBanned"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="this.onModifyInfo" class="form-button">修改账号信息</el-button>
          <el-button v-show="isModify" @click="this.onSaveInfo()" class="form-button">保存信息</el-button>
        </el-form-item>
      </el-form>
      </div>
    </div>
  </div>
  <div class="bottom-wrapper">
    <div class="panel-title" id="coupon-title">会员优惠券</div>

    <div class="coupon-wrapper">
      <div class="coupon-box" v-for="item in couponInfo" :key="item">
        <div class="coupon-top-box">
          <div class="coupon-name">{{this.grade}}季度优惠券</div>
          <div class="coupon-title">{{item.title}}</div>
        </div>
        <div class="coupon-bottom-box">
          <div class="start-date">日期：{{item.startDate}} 至</div>
          <div class="end-date">{{item.endDate}}</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import {ipAddress} from "@/utils/utils.js";

export default {
  name: "UserInfo",
  data(){
    return{
      point: 158,
      grade: '铜级会员',
      right1:'加入会员即可周期性获得优惠券',
      right2:'加入会员积累积分，升级以获取更多优惠',
      userForm: {id: '3537612548', name: '赵子钰', phone: '13312345678', email: 'zhaoziyu@bjut.edu.cn', point: 158},
      isBanned: true,
      isModify: false,
      couponInfo:[],
      couponInfoBronze:[
        {
          title: '单笔订单9折',
          startDate: '2023.07.01',
          endDate: '2023.09.30',
          isGet: false,
        },
        {
          title: '单笔订单9折',
          startDate: '2023.07.01',
          endDate: '2023.09.30',
          isGet: false,
        },
        {
          title: '免配送费',
          startDate: '2023.07.01',
          endDate: '2023.09.30',
          isGet: false,
        },
        {
          title: '免配送费',
          startDate: '2023.07.01',
          endDate: '2023.09.30',
          isGet: false,
        }
      ],
      couponInfoSilver:[
          {
        title: '单笔订单9折',
        startDate: '2023.07.01',
        endDate: '2023.09.30',
        isGet: false,
      },
        {
          title: '单笔订单9折',
          startDate: '2023.07.01',
          endDate: '2023.09.30',
          isGet: false,
        },
        {
          title: '免配送费',
          startDate: '2023.07.01',
          endDate: '2023.09.30',
          isGet: false,
        },
        {
          title: '免配送费',
          startDate: '2023.07.01',
          endDate: '2023.09.30',
          isGet: false,
        },
        {
          title: '免配送费',
          startDate: '2023.07.01',
          endDate: '2023.09.30',
          isGet: false,
        }],
      couponInfoGold:[
        {
          title: '单笔订单8.5折',
          startDate: '2023.07.01',
          endDate: '2023.09.30',
          isGet: false,
        },
        {
          title: '单笔订单8.5折',
          startDate: '2023.07.01',
          endDate: '2023.09.30',
          isGet: false,
        },
        {
          title: '免配送费',
          startDate: '2023.07.01',
          endDate: '2023.09.30',
          isGet: false,
        },
        {
          title: '免配送费',
          startDate: '2023.07.01',
          endDate: '2023.09.30',
          isGet: false,
        },
        {
          title: '免配送费',
          startDate: '2023.07.01',
          endDate: '2023.09.30',
          isGet: false,
        },
        {
          title: '免配送费',
          startDate: '2023.07.01',
          endDate: '2023.09.30',
          isGet: false,
        }],
      formRule:{
        name: {required: true, message: '请输入用户名', trigger: 'blur'},
        phone:[{required: true, message: '请输入手机号码', trigger: 'blur'},
          {pattern: /(^((\+86)|(86))?(1[3-9])\d{9}$)| (^(0\d{2,3})-?(\d{7,8})$)/ , message:'请输入正确的手机号', trigger: 'blur'}],
        email:[{required: true, message: '请输入电子邮箱', trigger: 'blur'},
          {pattern:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9_\.\-])+\.)+([a-zA-Z0-9]{2,4})+$/, message: '请输入正确的邮箱', trigger: 'blur'}]
      }
    }
  },
  methods: {
    gradeCalculate(){
      if(this.userForm.point === 0){
        this.grade = '您尚未成为会员';
        this.right1 = '加入会员即可周期性获得优惠券';
        this.right2 = '加入会员积累积分，升级以获取更多优惠';
      }else if(this.userForm.point > 0 && this.userForm.point <= 100){
        this.grade = '铜级会员';
        this.right1 = '每季度可以领取2张单笔订单9.5折优惠券';
        this.right2 = '每季度可以享受2次免运费配送服务';
        this.couponInfo = this.couponInfoBronze;
      }else if(this.userForm.point > 100 && this.userForm.point <= 200){
        this.grade = '银级会员';
        this.right1 = '每季度可以领取2张单笔订单9折优惠券';
        this.right2 = '每季度可以享受3次免运费配送服务';
        this.couponInfo = this.couponInfoSilver;
      }else{
        this.grade = '金级会员';
        this.right1 = '每季度可以领取2张单笔订单8.5这折优惠券';
        this.right2 = '每季度可以享受4次免运费配送服务';
        this.couponInfo = this.couponInfoGold;
      }
    },
    onModifyInfo(){
      this.isBanned = false;
      this.isModify = true
    },

    onSaveInfo(){
      if(!this.$refs.refFormRule){
        return
      }
      this.$refs.refFormRule.validate((valid) => {
        if(valid)
        {
          console.log("success");
          this.isModify = false;
          this.isBanned = true;
          fetch(`http://${ipAddress}/account/info`, {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: this.userForm.name,
              phone:this.userForm.phone,
              email:this.userForm.email,
            }),
          })
              .then(x => x.json())
              .then(x => {
                this.userForm = x.info;
              });
        } else{
          console.log("fail");
          return false;
        }
      })
    },
    firstFetch(){
      fetch(`http://${ipAddress}/account/info`, {
        method: 'get',
      })
          .then(x => x.json())
          .then(x => {
            this.userForm = x.info;
          });
    }
  },
  mounted() {
    this.firstFetch();
    this.gradeCalculate();
  }
}
</script>

<style scoped>
@import "user-info.css";
</style>