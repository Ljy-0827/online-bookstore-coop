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
  <el-main style="display: block; padding: 0">
    <div class="top" style="display: inline-flex">
      <div class="top-left">
        <div class="cover-wrapper">
          <img class="cover" :src="this.mainPic" :style="this.mainPicStyle">
        </div>
        <div class="small-images">
          <div class="small-image-wrapper" @click="this.smallCoverClicked" :style="smallCoverStyle">
            <img class="small-cover-pic" :src="this.bookInfo.coverURL">
          </div>
          <div class="small-image-wrapper" v-show="this.bookInfo.detailPicURL1" @click="this.smallDetail1Clicked" :style="smallDetail1Style">
              <img class="small-detail-pic" :src="this.bookInfo.detailPicURL1"/>
          </div>
          <div class="small-image-wrapper" v-show="this.bookInfo.detailPicURL2" @click="this.smallDetail2Clicked" :style="smallDetail2Style">
            <img class="small-detail-pic" :src="this.bookInfo.detailPicURL2"/>
          </div>
        </div>

      </div>
      <div class="top-right">
        <div class="book-title">
          {{this.bookInfo.title}}
        </div>
        <div class="book-box">
        <div class="book-left-box">
          <div class="author-box">
            <div class="author-text">
              作者
            </div>
            <div class="book-author">
              [{{this.bookInfo.nationality}}] {{this.bookInfo.author}}
            </div>
            <div class="translator-text" v-show="this.bookInfo.translator">
              译者
            </div>
            <div class="book-translator" v-show="this.bookInfo.translator">
              {{this.bookInfo.translator}}
            </div>
          </div>
          <div class="rating-box">
            <el-rate v-model="this.bookInfo.rating" disabled show-score text-color="#65156C" class="book-rating"/>
          </div>
          <div class="price-box">
            <div class="price-text">
              常规零售价
            </div>
            <div class="book-price">
              ￥{{this.bookInfo.singlePrice}}
            </div>
          </div>
          <el-button class="add-to-cart-button">加入购物车</el-button>
        </div>
          <div class="book-right-box">
            <img :src="getImage('../assets/setting-png/read-online.png')"  class="read-online-img" />
            <el-button class="read-online-button">在线试读</el-button>
          </div>
        </div>
        <div class="content-box" :style="this.contentBoxStyle">
          <div class="quote-box">
            {{this.bookInfo.quote}}
          </div>
          <div class="intro-box-small">
            {{this.bookInfo.introduction}}
          </div>
        </div>
        <div class="read-more-box">
          <el-icon style="color: #65156C; margin-top: 1px"><ArrowDown /></el-icon>
          <el-button link class="read-more-button" @click="this.toReadMore">阅读更多</el-button>
        </div>
        <div class="author-info-box" style="display: inline-flex">
          <img class="author-img" :src="this.bookInfo.authorURL">
          <div class="author-name">{{this.bookInfo.author}}</div>
          <div class="see-more-author">
            查看该作者的更多内容
            <el-icon class="see-more-author-icon"><ArrowRight /></el-icon>
          </div>
        </div>
      </div>
    </div>

  </el-main>
</template>

<script>
import {getImageUrl} from "@/utils/utils.js";

export default {
  name: "BookDetail",
  data(){
    return{
      bookInfo:{
        coverURL: getImageUrl("../assets/book-covers/haibiandekafuka.png"),
        detailPicURL1: getImageUrl("../assets/book-details/haibiandekafuka-detail1.png"),
        detailPicURL2: getImageUrl("../assets/book-details/haibiandekafuka-detail2.png"),
        title: '海边的卡夫卡',
        nationality: '日本',
        author: '村上春树',
        rating: 4.1,
        translator: '林少华',
        singlePrice: '58.00',
        authorURL: getImageUrl("../assets/authors/cunshangchunshu.png"),
        quote:'背负命运诅咒的少年远走异乡，心在希望与绝望之间碰撞，世界在现实性与虚拟性之间游移。小说力图通过十五岁少年的眼睛来描绘这样一个世界。',
        introduction:'本书是村上春树仅次于《挪威的森林》的重要长篇小说，以其独特风格的两条平行线展开。一条平行线是少年“田村卡夫卡”，为了挣脱“你要亲手杀死父亲，与母亲乱伦”的诅咒，离开家乡投入成人世界。此后父亲在家被杀，他却疑心自己是在睡梦中杀父。他在一座旧图书馆遇到一位50岁的优雅女性，梦中却与这位女性的少女形象交合，而这位女性又可能是他的生母。一条平行线是一名失忆老人中田，因为一桩离奇的杀人事件走上逃亡之路，在汽车司机星野的帮助下恢复了遥远的战争记忆。',
      },
      collapseStyle: 'overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical;',
      expandStyle: 'height:auto;',
      contentBoxStyle: 'overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical;',
      mainPic: '',
      userSearchInput:'',
      showExpand: false,
      showExpandCategory: false,
      showExpandCollection: false,
      isCoverSelected: true,
      mainPicStyle: 'margin-left: calc((100% - 14.3vw) / 2); margin-top: calc((30vw - 22vw) / 2);',
      mainCoverStyle: 'margin-left: calc((100% - 14.3vw) / 2); margin-top: calc((30vw - 22vw) / 2);',
      mainDetailStyle: 'margin-left: calc((100% - 22vw) / 2); margin-top: calc((30vw - 22vw) / 2);',
      smallCoverStyle : 'border: solid 1px #65156C',
      smallDetail1Style: 'border: solid 1px #FAFAFC',
      smallDetail2Style: 'border: solid 1px #FAFAFC',
      smallBorderStyle: 'border: solid 1px #65156C',
      smallNoBorderStyle: 'border: solid 1px #FAFAFC',
      isDetail1Selected: false,
      isDetail2Selected: false,
      isCollapse: true,
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
    enterChange(){
      console.log(this.userSearchInput);
      this.$router.push('/search_result');
    },
    smallCoverClicked(){
      this.isCoverSelected = true;
      this.mainPic = this.bookInfo.coverURL;
      this.mainPicStyle = this.mainCoverStyle;
      this.isDetail1Selected = false;
      this.isDetail2Selected = false;
      this.smallCoverStyle = this.smallBorderStyle;
      this.smallDetail1Style = this.smallNoBorderStyle;
      this.smallDetail2Style = this.smallNoBorderStyle;
    },
    smallDetail1Clicked(){
      this.mainPic = this.bookInfo.detailPicURL1;
      this.mainPicStyle = this.mainDetailStyle;
      this.isDetail1Selected = true;
      this.isDetail2Selected = false;
      this.isCoverSelected = false;
      this.smallCoverStyle = this.smallNoBorderStyle;
      this.smallDetail1Style = this.smallBorderStyle;
      this.smallDetail2Style = this.smallNoBorderStyle;
    },
    smallDetail2Clicked(){
      this.mainPic = this.bookInfo.detailPicURL2;
      this.mainPicStyle = this.mainDetailStyle;
      this.isDetail2Selected = true;
      this.isDetail1Selected = false;
      this.isCoverSelected = false;
      this.smallCoverStyle = this.smallNoBorderStyle;
      this.smallDetail2Style = this.smallBorderStyle;
      this.smallDetail1Style = this.smallNoBorderStyle;
    },
    toReadMore(){
      this.isCollapse = !this.isCollapse;
      if(this.isCollapse){
        this.contentBoxStyle = this.collapseStyle;
      }else{
        this.contentBoxStyle = this.expandStyle;
      }
      console.log(this.contentBoxStyle);
    }
  },
  mounted() {
    this.mainPic = this.bookInfo.coverURL;
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
@import "book-detail.css";
</style>