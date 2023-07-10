<template>
  <div class="right-content">
    <div class="content-title">添加书籍至库</div>
    <el-form :model="addBookForm" label-width="90px" label-position="left" :inline="true" ref="addBookForm">
      <el-form-item label="书名" class="single-line-item" prop="title">
        <el-input v-model="addBookForm.title" style="width: 100%"></el-input>
      </el-form-item>
      <el-form-item label="非中文书籍" class="inline-item" prop="notChnBook">
        <el-switch v-model="addBookForm.notChnBook" />
      </el-form-item>
      <el-form-item label="作者国籍" class="inline-item" v-show="addBookForm.notChnBook" prop="nationality">
        <el-input v-model="addBookForm.nationality" style="width: 100%"></el-input>
      </el-form-item>
      <el-form-item label="作者" class="inline-item" prop="author">
        <el-input v-model="addBookForm.author" style="width: 100%"></el-input>
      </el-form-item>
      <el-form-item label="译者" class="inline-item" v-show="addBookForm.notChnBook" prop="translator">
        <el-input v-model="addBookForm.translator" style="width: 100%"></el-input>
      </el-form-item>
      <el-form-item label="ISBN" class="single-line-item" prop="isbn">
        <el-input v-model="addBookForm.isbn" style="width: 100%"></el-input>
      </el-form-item>
      <el-form-item label="书籍简介" class="single-line-item" prop="introduction">
        <el-input
            v-model="addBookForm.introduction"
            :autosize="{minRows: 2}"
            type="textarea"
        />
      </el-form-item>
      <el-form-item label="出版社" class="inline-item" prop="publisher">
        <el-input v-model="addBookForm.publisher" style="width: 100%"></el-input>
      </el-form-item>
      <el-form-item label="出版年份" class="inline-item" prop="publishYear">
        <el-input v-model="addBookForm.publishYear" style="width: 100%"></el-input>
      </el-form-item>
      <el-form-item label="单价" class="inline-item" prop="singlePrice">
        <el-input v-model="addBookForm.singlePrice" style="width: 100%"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="submit-button" @click="this.onSubmit">确认添加</el-button>
        <el-button class="reset-button" @click="this.onReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {ipAddress} from "@/utils/utils.js";

export default {
  name: "AdminAddBook",
  data(){
    return{
      addBookForm:{
        title: '',
        notChnBook: false,
        author: '',
        isbn: '',
        nationality:'',
        translator: '',
        introduction: '',
        publisher:'',
        publishYear: '',
        singlePrice:'',
      }
    }
  },
  methods:{
    onSubmit(){
      fetch(`http://${ipAddress}/admin_control/add_book`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.addBookForm.title,
          author: this.addBookForm.author,
          isbn: this.addBookForm.isbn,
          nationality: this.addBookForm.nationality,
          translator: this.addBookForm.translator,
          introduction: this.addBookForm.introduction,
          publisher: this.addBookForm.publisher,
          publishYear: this.addBookForm.publishYear,
          singlePrice: this.addBookForm.singlePrice,
        }),
      })
      this.$refs.addBookForm.resetFields();
    },
    onReset(){
      console.log(this.$refs.addBookForm);
      this.$refs.addBookForm.resetFields();
    },
  }
}
</script>

<style scoped>
@import "admin-add-book.css";
</style>