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
</template>

<script>
import {getImageUrl} from "@/utils/utils.js";

export default {
  name: "HeaderGeneral",
  data(){
    return{
      userSearchInput:'',
      showExpand: false,
      showExpandCategory: false,
      showExpandCollection: false,
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

</style>