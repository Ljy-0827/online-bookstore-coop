<template>
  <el-header class="header-wrapper">
    <el-affix>
      <div style="display: inline-flex; background-color: white">
        <div style="width: 150px; height: 56px;">
          <el-image :src="getImage('../assets/setting-png/logo-icon.png')" style="margin-top: 16px; margin-left: 20px;"></el-image>
        </div>
        <div class="header-left-menu">
          <div class="hover-expand-menu-item" @mouseenter="onMouseOverExpandCategory()" @mouseleave="onMouseOutExpandCategory" style="margin-left: 12px">
            全部分类
          </div>
          <div class="hover-expand-menu-item" @mouseenter="onMouseOverExpandCollection()" @mouseleave="onMouseOutExpandCollection">
            图书榜单
          </div>
          <div class="hover-expand-menu-item" @mouseenter="onMouseOverExpandCollection()" @mouseleave="onMouseOutExpandCollection">
            折扣专区
          </div>
        </div>
        <div class="header-searchbar-container">
          <el-input class="header-searchbar" v-model="userSearchInput" placeholder="搜索ISBN编号、书名或作者名" @keyup.enter.native="this.enterChange">
            <template #suffix>
              <i class="bi bi-search" style="color: #65156C"></i>
            </template>
          </el-input>
        </div>

        <div class="header-login-signup-container">
          <el-button class="button-primary-general" id="login-button" style="margin-top: 12px">
            <i class="bi bi-person-fill" style="margin-right: 4px;"></i>
            立即登录
          </el-button>
          <a class="sign-up-text">新用户注册</a>
        </div>
      </div>

      <!-- v-show=this.showExpandCategory  -->
      <div class="hover-expand-wrapper" v-show=this.showExpandCategory @mouseenter="onMouseOverExpandCategory"  @mouseleave="onMouseOutExpandCategory">
        <div class="hover-expand-content-container">
          <el-carousel height="374px" trigger="click">
            <div class="hover-expand-left-box">
              <el-carousel-item>
                <div class="hover-expand-left-box-title">当下最受欢迎的奇幻小说</div>
                <div class="hover-expand-left-box-button">
                  <el-button class="button-primary-general hover-expand-checknow-button">
                    立即查看
                  </el-button>
                </div>
                <div class="hover-expand-left-box-bookcover">
                  <img style="width: 100%; border-radius: 10px 10px 0 0;" :src="getImage('book-covers/loreolympus')">
                </div>
              </el-carousel-item>
              <el-carousel-item>
                <div class="hover-expand-left-box-title">当下热门中国现代文学</div>
                <div class="hover-expand-left-box-button">
                  <el-button class="button-primary-general hover-expand-checknow-button">
                    立即查看
                  </el-button>
                </div>
                <div class="hover-expand-left-box-bookcover">
                  <img style="width: 100%; border-radius: 10px 10px 0 0;" :src="getImage('book-covers/diqitian')">
                </div>
              </el-carousel-item>
            </div>

          </el-carousel>
          <div class="hover-expand-right-box">
            <div class="hover-expand-right-box-col">
              <div class="hover-expand-right-box-title">小说</div>
              <div class="hover-expand-right-box-hint">热门分类</div>
              <div class="hover-expand-right-box-item" style="margin-top: 12px">
                <a>悬疑与推理</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>惊悚</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>科幻</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>言情</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>奇幻、魔幻与玄幻</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>武侠</a>
              </div>
              <div class="hover-expand-right-box-seemore">
                <a>查看全部分类</a>
              </div>
            </div>
            <div class="hover-expand-right-box-col">
              <div class="hover-expand-right-box-title">文学</div>
              <div class="hover-expand-right-box-hint">热门分类</div>
              <div class="hover-expand-right-box-item" style="margin-top: 12px">
                <a>中国古典文学</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>中国近现代文学</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>中国当代文学</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>人物传记</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>散文与随笔</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>诗词、戏剧与歌曲</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>亚洲文学</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>美洲文学</a>
              </div>
              <div class="hover-expand-right-box-seemore">
                <a>查看全部分类</a>
              </div>
            </div>
            <div class="hover-expand-right-box-col">
              <div class="hover-expand-right-box-title">科普与工具</div>
              <div class="hover-expand-right-box-hint">热门分类</div>
              <div class="hover-expand-right-box-item" style="margin-top: 12px">
                <a>计算机与互联网</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>教育辅导</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>艺术与摄影</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>旅游与地图</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>烹饪、食谱与酒</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>养生与保健</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>体育</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>时尚杂志</a>
              </div>
              <div class="hover-expand-right-box-seemore">
                <a>查看全部分类</a>
              </div>
            </div>
            <div class="hover-expand-right-box-col">
              <div class="hover-expand-right-box-title">少儿</div>
              <div class="hover-expand-right-box-hint">热门分类</div>
              <div class="hover-expand-right-box-item" style="margin-top: 12px">
                <a>适合年龄 5 - 8</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>适合年龄 9 - 12</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>婴幼儿</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>早教</a>
              </div>
              <div class="hover-expand-right-box-item">
                <a>图画书与绘本</a>
              </div>
              <div class="hover-expand-right-box-seemore">
                <a>查看全部分类</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hover-expand-wrapper" v-show=this.showExpandCollection @mouseenter="onMouseOverExpandCollection"  @mouseleave="onMouseOutExpandCollection"></div>
    </el-affix>
  </el-header>
  <el-main style="padding: 0; margin: 0; display: block; overflow: hidden;">
    <div class="cart-header">
      <div class="cart-header-texth1">我的购物车</div>
      <div class="cart-header-texth2">全部商品 {{this.cartBook.length}}</div>
    </div>
    <div class="cart-items-title">
      <div class="select-all-wrapper">
        <el-checkbox style="margin-left: 36px; margin-top: 2px;" v-model="this.isSelectAll" @change="this.selectAllChangeHandler()"></el-checkbox>
        <div class="cart-items-title-selectall">
          全选
        </div>
      </div>
      <div class="cart-items-title-commodity">
        商品
      </div>
      <div class="cart-items-title-single-price">
        单价
      </div>
      <div class="cart-items-title-num">
        数量
      </div>
      <div class="cart-items-title-total-price">
        总价
      </div>
    </div>
    <div class="cart-items-wrapper">
      <div class="cart-item" v-for="(item, index) in cartBook" :key="index">
        <div style="display: inline-flex">
          <div class="item-select">
            <el-checkbox v-model="item.isSelected" class="cart-items-select" @change="this.selectSingleChangeHandler"></el-checkbox>
          </div>
          <div class="item-wrapper">
            <div class="item-cover-wrapper">
              <img class="item-cover-pic" :src="item.cover">
            </div>
          </div>
          <div class="item-info-wrapper">
            <div class="item-title">
              {{item.name}}
            </div>
            <div class="item-author">
              {{item.author}} [著]
            </div>
            <div class="item-publisher">
              {{item.publisher}}
            </div>
          </div>
          <div class="version-select">
            <div class="item-version">
              {{item.version}}
            </div>
          </div>
          <div class="single-price">
            <div class="item-single-price">
              ￥{{item.singlePrice}}
            </div>
          </div>

          <div class="num">
            <div class="item-num">
              <el-input-number v-model="item.itemNum" size="small" class="item-number-select" :min="1" @change="this.selectNumChangeHandler(index)">

              </el-input-number>
              <div class="item-isStock">
                {{item.isStock}}
              </div>
            </div>
          </div>

          <div class="total-price">
            <div class="item-total-price">
              ￥{{(item.singlePrice * item.itemNum)}}
            </div>
          </div>

          <div class="options">
            <div class="item-delete">
              <button class="option-text-button" @click="this.deleteItemChangeHandler(index)">删除</button>
            </div>
            <div class="item-move">
              <button class="option-text-button">移入收藏夹</button>
            </div>
          </div>
        </div>
        <el-divider class="divider" border-style="dashed"></el-divider>
      </div>
    </div>
  </el-main>
  <el-footer class="footer-wrapper">
    <el-affix position="bottom" style="width: 100vw;">
      <div style="display: inline-flex; background-color: white; width: 100%; box-shadow: 0 -2px 8px 2px rgba(0, 0, 0, 0.06); padding: 0">
        <div class="bottom-left-wrapper">
          <div class="select-all-wrapper-bottom">
            <el-checkbox style="margin-left: 36px; margin-top: 12px;" v-model="this.isSelectAll" @change="this.selectAllChangeHandler()"></el-checkbox>
            <div class="bottom-title-selectall">
              全选
            </div>
          </div>
          <div class="bottom-title-left">
            <button class="option-text-button-bottom">删除选中的商品</button>
          </div>
          <div class="bottom-title-left">
            <button class="option-text-button-bottom">移入收藏夹</button>
          </div>
        </div>
        <div class="bottom-right-wrapper">
          <div class="cart-select-count" style="padding: 0">
            已选择
            <div class="cart-select-count-num">
              {{this.cartSelectCount}}
            </div>
            件商品
          </div>
          <div class="cart-total-price" style="padding: 0">
            总价：
            <div class="cart-total-price-num">
              ￥{{this.cartTotalPrice}}
            </div>
          </div>
          <div style="font-size: 12px; line-height: 58px;">（{{ this.transportFeeCondition }}）</div>
          <div class="checkout-button-wrapper">
            <button class="checkout-button" @click="this.onSubmitCart">结算</button>
          </div>
        </div>
      </div>
    </el-affix>
  </el-footer>
</template>

<script>
import {getImageUrl} from "@/utils/utils.js";
import {ipAddress} from "@/utils/utils.js";

export default {
  name: "user-cart",
  data(){
    return{
      userSearchInput:'',
      showExpand: false,
      showExpandCategory: false,
      showExpandCollection: false,
      collectionBookRecommend: [],
      selectedBooks:[],
      isSelectAll: false,
      cartSelectCount: 0,
      cartTotalPrice: 0,
      transportFeeCondition: "不包含运费",
      cartBook: [{cover: getImageUrl("../assets/book-covers/xiaowangzidiancangban.png"),
        name: "《小王子》出版80周年MINI珍藏版（定制版）",
        author: "[法] 安托万·德·圣埃克苏佩里",
        publisher: "湖南文艺出版社",
        version: "MINI典藏版",
        singlePrice: "138.00",
        isStock: "有货",
        itemNum: 1,
        isbn: '9787572607981',
        isSelected: false,
      },
        {cover: getImageUrl("../assets/book-covers/yunbianyougexiaomaibu.png"),
          name: "云边有个小卖部",
          author: "张嘉佳",
          publisher: "湖南文艺出版社",
          version: "平装",
          singlePrice: "42.00",
          isStock: "有货",
          itemNum: 1,
          isbn: '9787540487645',
          isSelected: false,
        },
        {cover: getImageUrl("../assets/book-covers/huoluanshiqideaiqing.png"),
          name: "霍乱时期的爱情",
          author: "[哥伦比亚] 加西亚·马尔克斯",
          publisher: "南海出版公司",
          version: "平装",
          singlePrice: "69.00",
          isStock: "有货",
          itemNum: 1,
          isbn: '9787544297059',
          isSelected: false,
        },
        {cover: getImageUrl("../assets/book-covers/beixizidu.png"),
          name: "悲喜自渡",
          author: "季羡林",
          publisher: "江苏凤凰文艺出版社",
          version: "平装",
          singlePrice: "45.00",
          isStock: "有货",
          itemNum: 1,
          isbn: '9787559436658',
          isSelected: false,
        },
        {cover: getImageUrl("../assets/book-covers/fangsiqidechulianleyuan.png"),
          name: "房思琪的初恋乐园",
          author: "林奕含",
          publisher: "北京联合出版公司",
          version: "平装",
          singlePrice: "45.00",
          isStock: "有货",
          itemNum: 1,
          isbn: '9787559614636',
          isSelected: false,
        }],
    }
  },
  methods:{

    onMouseOverExpand(){
      this.showExpand = true;
    },
    onMouseOutExpand(){
      this.showExpand = false;
    },

    onMouseOverExpandCategory(){
      this.showExpandCategory = true;
    },
    onMouseOutExpandCategory(){
      this.showExpandCategory = false;
    },
    onMouseOverExpandCollection(){
      this.showExpandCollection = true;
    },
    onMouseOutExpandCollection(){
      this.showExpandCollection = false;
    },
    selectAllChangeHandler(){
      if(this.isSelectAll){
        for(let i = 0; i < this.cartBook.length; i++){
          this.cartBook[i].isSelected = true;
        }
      }
      if(!this.isSelectAll){
        for(let i = 0; i < this.cartBook.length; i++){
          this.cartBook[i].isSelected = false;
        }
      }
      this.selectSingleChangeHandler();
    },
    selectSingleChangeHandler(){
      let tmpCnt = 0;
      let tmpTotal = 0;
      this.selectedBooks = [];
      for(let i = 0; i < this.cartBook.length; i++){
        if(this.cartBook[i].isSelected){
          tmpCnt ++;
          tmpTotal += this.cartBook[i].itemNum * this.cartBook[i].singlePrice;
          this.selectedBooks.push({isbn: this.cartBook[i].isbn, num: this.cartBook[i].itemNum});
        }
      }
      this.cartSelectCount = tmpCnt;
      this.cartTotalPrice = tmpTotal;
      if(this.cartTotalPrice >= 199){
        this.transportFeeCondition = "平台免运费";
      }else{
        this.transportFeeCondition = "不包含运费";
      }
      console.log(this.selectedISBN);
    },

    selectNumChangeHandler(index){
      let tmpTotal = 0;
      for(let i = 0; i < this.cartBook.length; i++){
        if(this.cartBook[i].isSelected){
          tmpTotal += this.cartBook[i].itemNum * this.cartBook[i].singlePrice;
        }
      }
      this.cartTotalPrice = tmpTotal;
      if(this.cartTotalPrice >= 199){
        this.transportFeeCondition = "平台免运费";
      }else{
        this.transportFeeCondition = "不包含运费";
      }

      fetch(`http://${ipAddress}/cart/num_change`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isbn: this.cartBook[index].isbn,
          itemNum: this.cartBook[index].num,
        }),
      })
          .then(x => x.json())
          .then(x => {
            this.cartBook = x.cartBook;
          });
          console.log(this.cartBook);
    },

    deleteItemChangeHandler(index){
      fetch(`http://${ipAddress}/cart/delete`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isbn: this.cartBook[index].isbn,
        }),
      })
          .then(x => x.json())
          .then(x => {
            this.cartBook = x.cartBook;
          });
    },

    onSubmitCart(){
      fetch(`http://${ipAddress}/cart/submit`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          submitBooks: this.selectedBooks,
        }),
      })
      //this.$router.push({name: 'checkout', params: {itemISBN: this.selectedISBN}});
    },

    enterChange(){
      console.log(this.userSearchInput);
      this.$router.push('/search_result');
    },

  },
  mounted() {
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
@import "user-cart.css";
</style>