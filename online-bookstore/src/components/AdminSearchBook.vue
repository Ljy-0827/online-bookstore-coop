<template>
  <div class="right-content">
    <div class="content-title">检索库中的书籍</div>
    <div class="search-input-wrapper">
      <div class="search-text">检索内容</div>
      <el-input v-model="this.searchContent" class="search-input"></el-input>
      <el-button class="search-button" @click="this.onSearch">确认检索</el-button>
    </div>
    <div class="table-wrapper">
      <el-table :data="this.bookData" stripe style="width: 100%" border>
        <el-table-column prop="title" label="书名" width="180" class="table-column"/>

        <el-table-column prop="nationality" label="国家" width="100" />
        <el-table-column prop="author" label="作者" width="120" />
        <el-table-column prop="translator" label="译者" width="90" />
        <el-table-column prop="publisher" label="出版社" width="140" />
        <el-table-column prop="singlePrice" label="单价" width="70" />
        <el-table-column prop="publishYear" label="出版年份" width="80" />
        <el-table-column prop="isbn" label="ISBN"/>
        <el-table-column prop="inventory" label="库存" width="60"/>
        <el-table-column fixed="right" label="操作" width="130">
          <template #default="scope">
            <el-button
                link
                type="primary"
                size="small"
                @click.prevent="this.deleteRow(scope.$index)"
            >
              删除
            </el-button>
            <el-popover
                placement="top-start"
                title="修改库存"
                :width="200"
                trigger="hover"
                content="this is content, this is content, this is content"
            >
              <el-input v-model="this.changeNum">

              </el-input>
              <el-button @click="this.onChangeInventory(scope.$index)">确认修改</el-button>
              <template #reference>
                <el-button
                link
                type="primary"
                size="small"
                >
                  修改库存
                </el-button>
              </template>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import {ipAddress} from "@/utils/utils.js";

export default {
  name: "AdminSearchBook",
  data(){
    return{
      searchContent:'',
      changeNum:'',
      bookData:[{
        title: '去中国的小船',
        author: '村上春树',
        isbn: '9787532788033',
        nationality: '日本',
        singlePrice: '52.00',
        publishYear: '2021',
        publisher: '上海译文出版社',
        translator: '林少华',
        inventory: '124',
      },
        {
          title: '热夜之梦',
          author: '乔治·R·R.马丁',
          isbn: '9787572606519',
          nationality: '美国',
          singlePrice: '68.00',
          publishYear: '2022',
          publisher: '湖南文艺出版社',
          translator: '姚向辉',
          inventory: '79',
        }]


    }
  },
  methods:{
    deleteRow(index){
      fetch(`http://${ipAddress}/admin_control/search_book/delete`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isbn: this.bookData[index].isbn,
        }),
      })
          .then(x => x.json())
          .then(x => {
            this.bookData = x.bookData;
          });
      //this.bookData.splice(index, 1);
    },
    onChangeInventory(index){
      fetch(`http://${ipAddress}/change_inventory`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isbn: this.bookData[index].isbn,
          inventory: this.changeNum,
        }),
      })
          .then(x => x.json())
          .then(x => {
            this.bookData = x.bookData;
          });

},

    onSearch(){
      fetch(`http://${ipAddress}/admin_control/search_book/search`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keyword: this.searchContent,
        }),
      })
          .then(x => x.json())
          .then(x => {
            this.bookData = x.bookData;
          });
    }
  }
}
</script>

<style scoped>
@import "admin-search-book.css";
</style>