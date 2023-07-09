<template>
  <div class="wrapper">
    <div class="panel-title">收货地址管理</div>
    <div class="add-address-box" @click="this.onClickAdd">
      <el-icon class="plus-icon"><Plus /></el-icon>
      <div class="add-title">新增收货地址</div>
    </div>
    <div class="show-add-box" v-show="showAddInfoBox">
      <el-form :model="addForm" :inline="true" label-width="80px" label-position="left" class="add-box-form">
        <el-form-item label="省份" class="inline-item">
          <el-input v-model="addForm.addProvince" class="form-input"></el-input>
        </el-form-item>
        <el-form-item label="城市" class="inline-item">
          <el-input v-model="addForm.addCity" class="form-input"></el-input>
        </el-form-item>
        <el-form-item label="区县" class="inline-item">
          <el-input v-model="addForm.addDistrict" class="form-input"></el-input>
        </el-form-item>
        <el-form-item label="邮编" class="inline-item">
          <el-input v-model="addForm.addPostcode" class="form-input"></el-input>
        </el-form-item>
        <el-form-item label="详细地址" class="single-line-item">
          <el-input v-model="addForm.addDetail" class="form-input" style="width: 100%;"></el-input>
        </el-form-item>
        <el-form-item label="收件人姓名" class="inline-item">
          <el-input v-model="addForm.addName" class="form-input"></el-input>
        </el-form-item>
        <el-form-item label="收件人电话" class="inline-item">
          <el-input v-model="addForm.addPhone" class="form-input"></el-input>
        </el-form-item>
        <el-form-item label="收件人邮箱" class="single-line-item">
          <el-input v-model="addForm.addEmail" class="form-input"  style="width: 100%;"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="this.onClickSubmit">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="address-box-wrapper">
      <div class="address-box" v-for="(item, index) in address" :key="index">
        <div class="address-top">
          <div class="top-line-1">
            <div class="item-box">
              <div class="item-title">省份</div>
              <div class="item-content">{{item.province}}</div>
            </div>
            <div class="item-box">
              <div class="item-title">城市</div>
              <div class="item-content">{{item.city}}</div>
            </div>
            <div class="item-box">
              <div class="item-title">区县</div>
              <div class="item-content">{{item.district}}</div>
            </div>
            <div class="item-box">
              <div class="item-title">邮编</div>
              <div class="item-content">{{item.postal_code}}</div>
            </div>
          </div>
          <div class="top-line-2">
            <div class="item-box">
              <div class="item-title">详细地址</div>
              <div class="item-content">{{item.detail}}</div>
            </div>
          </div>
        </div>
        <div class="address-bottom">
          <div class="top-line-1">
            <div class="item-box">
              <div class="item-title">收件人姓名</div>
              <div class="item-content">{{item.name}}</div>
            </div>
            <div class="item-box">
              <div class="item-title">收件人电话</div>
              <div class="item-content">{{item.phone}}</div>
            </div>
          </div>
          <div class="top-line-2">
            <div class="item-box">
              <div class="item-title">收件人邮箱</div>
              <div class="item-content">{{item.email}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {ipAddress} from "@/utils/utils.js";

export default {
  name: "UserAddress",
  data(){
    return{
      showAddInfoBox: false,
      addForm:{
        addProvince: '',
        addCity: '',
        addDistrict:'',
        addPostcode: '',
        addDetail: '',
        addName: '',
        addPhone: '',
        addEmail: '',
      },
      address:[{
        province: '北京市',
        city: '北京市',
        district: '朝阳区',
        postal_code: '100124',
        detail:'南磨房镇 平乐园100号 北京工业大学',
        name: '赵子钰',
        phone: '13312345678',
        email: 'zhaoziyu@emails.bjut.edu.cn',
      },
        {
          province: '北京市',
          city: '北京市',
          district: '朝阳区',
          postal_code: '100124',
          detail:'南磨房镇 平乐园100号 北京工业大学',
          name: '刘珺瑶',
          phone: '13387654321',
          email: 'liujunyao@emails.bjut.edu.cn',
        },
      ]
    }
  },
  methods:{
    onClickAdd(){
      this.showAddInfoBox = !this.showAddInfoBox;
    },
    onClickSubmit(){
      this.address.push({province: this.addForm.addProvince,
        city: this.addForm.addCity,
        district: this.addForm.addDistrict,
        postal_code: this.addForm.addPostcode,
        detail: this.addForm.addDetail,
        name: this.addForm.addName,
        phone: this.addForm.addPhone,
        email: this.addForm.addEmail
      })
      this.showAddInfoBox = false;
      fetch('http://127.0.0.1:5000/address/add', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          province: this.address[this.address.length - 1].addProvince,
          city: this.address[this.address.length - 1].addCity,
          district: this.address[this.address.length - 1].addDistrict,
          postal_code: this.address[this.address.length - 1].addPostcode,
          detail: this.address[this.address.length - 1].addDetail,
          name: this.address[this.address.length - 1].addName,
          phone: this.address[this.address.length - 1].addPhone,
          email: this.address[this.address.length - 1].addEmail,
        }),
      })
          .then(x => x.json())
          .then(x => {
            this.address = x;
          });
    },
  },
  mounted() {
    fetch(`http://${ipAddress}/address/get`)
        .then(x => x.json())
        .then(x => {
          this.address = x;
        });
  }
}
</script>

<style scoped>
@import "user-address.css";
</style>