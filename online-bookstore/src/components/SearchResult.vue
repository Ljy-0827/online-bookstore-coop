<template>
  <el-header class="header-wrapper">
    <el-affix>
      <div style="display: inline-flex; background-color: white">
        <div style="width: 150px; height: 56px;">
          <el-image :src="getImage('../assets/setting-png/logo-icon.png')" style="margin-top: 16px; margin-left: 20px;" @click="this.$router.push('/')"></el-image>
        </div>
        <div class="header-left-menu">
          <div class="hover-expand-menu-item" @mouseenter="onMouseOverExpandCategory()" @mouseleave="onMouseOutExpandCategory" style="margin-left: 12px">
            全部分类
          </div>
          <div class="hover-expand-menu-item" v-show="this.isLoggedIn" @click="this.$router.push('/cart')">
            我的购物车
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
          <el-button class="button-primary-general" id="login-button" style="margin-top: 12px" @click="pageTransfer()">
            <i class="bi bi-person-fill" style="margin-right: 4px;"></i>
            {{this.buttonText}}
          </el-button>
          <a class="sign-up-text" v-show="!this.isLoggedIn" @click="this.$router.push('/register')">新用户注册</a>
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
                  <img style="width: 100%; border-radius: 10px 10px 0 0;" :src="getImage('../assets/book-covers/loreolympus.png')">
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
                  <img style="width: 100%; border-radius: 10px 10px 0 0;" :src="getImage('../assets/book-covers/diqitian.png')">
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
    <div class="result-title" >
      <div class="result-title-text">搜索结果</div>
      <div class="result-title-num">共{{this.searchResultBooks.length}}条</div>
    </div>
    <div class="result-attribute-bar" >
      <div class="result-attribute-text">
        关键词：
      </div>
      <div class="result-attribute-keyword">
        "{{ this.keyword }}"
      </div>
    </div>
    <div class="content-container" style="display: inline-flex">
      <div class="book-container" style="background-color: transparent">
        <div class="book-item-container" v-for="(item, index) in searchResultBooks" :key="index">
          <div class="book-item-cover-wrapper" @click="toDetail(index)">
            <img class="book-item-cover-pic" :src='item.coverURL'>
          </div>
          <div class="book-item-title" @click="toDetail(index)">
            {{item.title}}
          </div>
          <div class="book-item-info">
            {{item.author}}, {{item.publishYear}}
          </div>
          <div class="book-rating-price">
            <div class="book-rating">
              <el-icon size="17" style="margin-top: 3px; margin-right: 3px">
                <StarFilled style="color: #F4AE4B;"/>
              </el-icon>
              {{item.rating}}
            </div>
            <div class="book-price">
              ￥{{item.singlePrice}}
            </div>
          </div>
          <div class="book-button-container">
            <div class="book-button-like">
              <button class="book-button-style">
                <i class="bi bi-heart" style="line-height: 24px;"></i>
              </button>
            </div>
            <div class="book-button-addtocart">
              <button class="book-button-style" @click="onAddToCart(index)">
                加入购物车
              </button>
            </div>
          </div>

        </div>
      </div>
      <div class="category-container">
        <el-collapse class="collapse-wrapper" v-model="this.collapseActiveNames">
          <el-collapse-item class="collapse-wrapper-item" title="图书分类" id="first-item" name="category">
            <el-tree :data="this.categoryTreeData" node-key="id" :default-expanded-keys="[1]" style="margin-left: 8px"/>
          </el-collapse-item>
          <el-collapse-item class="collapse-wrapper-item" title="价格区间" id="price-control-panel" name="price">
            <el-input-number class="price-control" controls-position="right" v-model="this.siftPrice[0]" size="small" style="margin-right: 4px;"></el-input-number>
            <div style="line-height: 26px; color: #A091B2">-</div>
            <el-input-number class="price-control" controls-position="right" v-model="this.siftPrice[1]" size="small" style="margin-left: 4px;"></el-input-number>
          </el-collapse-item>
          <el-collapse-item class="collapse-wrapper-item" title="语言" name="language">
            <el-checkbox v-model="this.selectLanguage.SimpleChinese" label="简体中文" class="language-checkbox"></el-checkbox>
            <el-checkbox v-model="this.selectLanguage.English" label="英文" class="language-checkbox"></el-checkbox>
            <el-checkbox v-model="this.selectLanguage.ComplexChinese" label="繁体中文" class="language-checkbox"></el-checkbox>
          </el-collapse-item>
          <el-collapse-item class="collapse-wrapper-item" title="评分" id="last-item" name="rate">
            <div class="rate-collapse" style="display: inline-flex">
              <el-rate v-model="this.rateCollapse[3]" disabled text-color="#F4AE4B" size="small"></el-rate>
              <div class="rate-collapse-text">> 4.0</div>
            </div>
            <div class="rate-collapse" style="display: inline-flex">
              <el-rate v-model="this.rateCollapse[2]" disabled text-color="#F4AE4B" size="small"></el-rate>
              <div class="rate-collapse-text">> 3.0</div>
            </div>
            <div class="rate-collapse" style="display: inline-flex">
              <el-rate v-model="this.rateCollapse[1]" disabled text-color="#F4AE4B" size="small"></el-rate>
              <div class="rate-collapse-text">> 2.0</div>
            </div>
            <div class="rate-collapse" style="display: inline-flex">
              <el-rate v-model="this.rateCollapse[0]" disabled text-color="#F4AE4B" size="small"></el-rate>
              <div class="rate-collapse-text">> 1.0</div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </el-main>
</template>

<script>
import {getImageUrl} from "@/utils/utils.js";
import {ipAddress} from "@/utils/utils.js";
import { ElMessage } from 'element-plus'

export default {
  name: "SearchResult",
  data(){
    return{
      userId:'',
      pageTransferRoute:'user_login',
      isLoggedIn: false,
      buttonText: '立即登录',
      userSearchInput:'',
      collapseActiveNames:['category','language'],
      rateCollapse:[1.0,2.0,3.0,4.0],
      userSearch:'',
      keyword: '村上春树',
      showExpand: false,
      showExpandCategory: false,
      showExpandCollection: false,
      collectionBookRecommend: [],
      selectLanguage: {SimpleChinese: false, ComplexChinese: false, English: false},
      siftPrice: ['',''],
      categoryTreeData:[
        {
          id: 1,
          label: '小说',
          children: [
            {id:5, label: '悬疑与推理'},{id:6, label: '惊悚'},{id:7, label: '科幻'},{id:8, label: '言情'},{id:9, label: '奇幻与玄幻'},{id:10,label: '武侠'}
          ],
        },
        {
          id: 2,
          label: '文学',
          children: [{id: 11, label: '占位1'}],
        },
        {
          id: 3,
          label: '科普与工具',
          children: [{id:12, label: '占位1'}],
        },
        {
          id: 4,
          label:'少儿',
          children: [{id:13, label: '占位1'}]
        }
      ],
      searchResultBooks:[],
      /*
      searchResultBooks:[
        {
          coverURL: getImageUrl("../assets/book-covers/haibiandekafuka.png"),
          title: "海边的卡夫卡",
          author: "[日] 村上春树",
          publishYear: "2018",
          rating: 4.1,
          singlePrice: '59.00',
          isbn:'',
        },
        {
          coverURL: getImageUrl("../assets/book-covers/nuoweidesenlin.png"),
          title: "挪威的森林",
          author: "[日] 村上春树",
          publishYear: "2018",
          rating: 4.1,
          singlePrice: '59.00',
          isbn:'',
        },
        {
          coverURL: getImageUrl("../assets/book-covers/qimao.png"),
          title: "弃猫：当我谈起父亲时",
          author: "[日] 村上春树",
          publishYear: "2021",
          rating: 3.7,
          singlePrice: '48.00',
          isbn:'',
        },
        {
          coverURL: getImageUrl("../assets//book-covers/qietingfengyin.png"),
          title: "且听风吟",
          author: "[日] 村上春树",
          publishYear: "2018",
          rating: 3.8,
          singlePrice: '28.00',
          isbn:'',
        },
        {
          coverURL: getImageUrl("../assets/book-covers/cishaqishituanzhang.png"),
          title: "刺杀骑士团长",
          author: "[日] 村上春树",
          publishYear: "2018",
          rating: 3.8,
          singlePrice: '98.00',
          isbn:'',
        },
        {
          coverURL: getImageUrl("../assets/book-covers/meiyousecaideduoqizuo.png"),
          title: "没有色彩的多崎作和他的巡礼之年",
          author: "[日] 村上春树",
          publishYear: "2013",
          rating: 3.8,
          singlePrice: '39.50',
          isbn:'',
        },
        {
          coverURL: getImageUrl("../assets/book-covers/wodezhiyeshixiaoshuojia.png"),
          title: "我的职业是小说家",
          author: "[日] 村上春树",
          publishYear: "2017",
          rating: 4.1,
          singlePrice: '45.00',
          isbn:'',
        },
        {
          coverURL: getImageUrl("../assets/book-covers/liekexingdundeyouling.png"),
          title: "列克星敦的幽灵",
          author: "[日] 村上春树",
          publishYear: "2021",
          rating: 3.6,
          singlePrice: '45.00',
          isbn:'',
        },
        {
          coverURL: getImageUrl("../assets/book-covers/yudaobaifenzhibaidenvhai.png"),
          title: "遇到百分之百的女孩",
          author: "[日] 村上春树",
          publishYear: "2021",
          rating: 3.7,
          singlePrice: '48.00',
          isbn:'',
        },
        {
          coverURL: getImageUrl("../assets/book-covers/quzhongguodexiaochuan.png"),
          title: "去中国的小船",
          author: "[日] 村上春树",
          publishYear: "2021",
          rating: 3.7,
          singlePrice: '52.00',
          isbn:'',
        },
        {
          coverURL: getImageUrl("../assets/book-covers/shendehaiziquantiaowu.png"),
          title: "神的孩子全跳舞",
          author: "[日] 村上春树",
          publishYear: "2021",
          rating: 3.8,
          singlePrice: '48.00',
          isbn:'',
        },
        {
          coverURL: getImageUrl("../assets/book-covers/wuwuwu.png"),
          title: "舞！舞！舞！",
          author: "[日] 村上春树",
          publishYear: "2018",
          rating: 4.2,
          singlePrice: '52.00',
          isbn:'',
        },
        {
          coverURL: getImageUrl("../assets/book-covers/yijiuqisanniandetanziqiu.png"),
          title: "1973年的弹子球",
          author: "[日] 村上春树",
          publishYear: "2018",
          rating: 3.6,
          singlePrice: '37.00',
          isbn:'',
        },
      ]

       */
    }
  },
  methods: {
    onMouseOverExpand() {
      this.showExpand = true;
    },
    onMouseOutExpand() {
      this.showExpand = false;
    },

    onMouseOverExpandCategory() {
      this.showExpandCategory = true;
    },
    onMouseOutExpandCategory() {
      this.showExpandCategory = false;
    },
    onMouseOverExpandCollection() {
      this.showExpandCollection = true;
    },
    onMouseOutExpandCollection() {
      this.showExpandCollection = false;
    },
    pageTransfer(){
      this.$router.push({name: `${this.pageTransferRoute}`, query: {userId: this.userId}});
    },
    toMyCart(){
      this.$router.push({name: 'cart', query: {userId: this.userId}})
    },
    toDetail(index){
      this.$router.push({name: 'detail', query: {isbn: `${this.searchResultBooks[index].isbn}`}})
    },

    onAddToCart(index){
      if(this.userId === ''){
        ElMessage({
          message: '您尚未登录',
          type: 'error',
        })
      }else{
        fetch(`http://${ipAddress}/add-to-cart`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            isbn: this.searchResultBooks[index].isbn,
          }),
        })
            .then(
                ElMessage({
                  message: '加入购物车成功',
                  type: 'success',
                })
            )
      }

    },

    enterChange(){
      this.$router.push({name: 'search_result', query: {word: `${this.userSearchInput}`}});
      this.keyword = this.userSearchInput;
      fetch(`http://${ipAddress}/search-result`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keyword: this.keyword,
        }),
      })
          .then(x => x.json())
          .then(x => {
            this.searchResultBooks = x.searchResult;
          });
    },

  },
  mounted(){
    fetch(`http://${ipAddress}/user`)
        .then(x => x.json())
        .then(x => {
          this.userId = x.id;
          if(this.userId === ''){
            this.isLoggedIn = false;
            this.pageTransferRoute = 'user_login';
            this.buttonText = '立即登录';
          }else{
            this.isLoggedIn = true;
            this.pageTransferRoute = 'info';
            this.buttonText = '我的账号';
          }
        })


    this.keyword = this.$route.query.word;

    fetch(`http://${ipAddress}/search-result`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        keyword: this.keyword,
      }),
    })
        .then(x => x.json())
        .then(x => {
          this.searchResultBooks = x.searchResult;
        });
    /*
    fetch('http://${ipAddress}/search-result', {
      method: 'post',
      body: JSON.stringify({
        keyword: this.keyword,
      }),
    })
        .then(x => x.json())
        .then(x => {
          this.searchResultBooks = x.searchResult;
        });

     */
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
@import "search-result.css";
</style>