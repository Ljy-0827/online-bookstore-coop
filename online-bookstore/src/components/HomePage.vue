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
          <div class="hover-expand-menu-item" v-show="isLoggedIn" @click="toMyCart()">
            我的购物车
          </div>
        </div>

        <div class="header-login-signup-container">
          <el-button class="button-primary-general" id="login-button" style="margin-top: 12px" @click="pageTransfer()">
            <i class="bi bi-person-fill" style="margin-right: 4px;"></i>
            {{this.buttonText}}
          </el-button>
          <a class="sign-up-text" v-show="!this.isLoggedIn">新用户注册</a>
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
    <div class="first-sight-wrapper">
      <div class="first-sight-title">让我们为您找到您的下一本最爱</div>
      <div class="first-sight-search-box">
        <el-input v-model="userSearch" placeholder="搜索ISBN编号、书名或作者名" @keyup.enter.native="this.enterChange">
          <template #suffix>
            <i class="bi bi-search" style="color: #65156C"></i>
          </template>
        </el-input>
      </div>
      <div class="background-pic-wrapper">
        <img :src="HomepageBackground" class="first-sight-pic">
      </div>

    </div>
    <el-carousel class="book-note-carousel-wrapper">
      <el-carousel-item class="book-note-carousel-item">
        <div class="book-note-container">
          <div class="book-notes-row">
            <div class="book-note">
              <div class="book-note-cover-wrapper">
                <img :src="this.quoteBooks[0].cover" class="book-note-cover">
              </div>
              <div class="book-note-text">
                <div class="book-note-text-sign1">
                  <img :src="sign1" class="sign1">
                </div>
                <div class="book-note-text-content">
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.quoteBooks[0].quote}}</p>
                </div>
                <div class="book-note-text-sign2">
                  <img :src="sign2" class="sign2">
                </div>
                <div class="book-note-mix">
                  <div class="book-note-info">
                    <p>——{{this.quoteBooks[0].author}}《{{this.quoteBooks[0].title}}》</p>
                  </div>
                  <div class="book-note-seemore">
                    <a>查看详情</a>
                    <i class="bi bi-chevron-right" style="margin-left: 2px"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="book-note book-note-right">
              <div class="book-note-cover-wrapper">
                <img :src="this.quoteBooks[1].cover" class="book-note-cover">
              </div>
              <div class="book-note-text">
                <div class="book-note-text-sign1">
                  <img :src="sign1" class="sign1">
                </div>
                <div class="book-note-text-content">
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.quoteBooks[1].quote}}</p>
                </div>
                <div class="book-note-text-sign2">
                  <img :src="sign2" class="sign2">
                </div>
                <div class="book-note-mix">
                  <div class="book-note-info">
                    <p>——{{this.quoteBooks[1].author}}《{{this.quoteBooks[1].title}}》</p>
                  </div>
                  <div class="book-note-seemore">
                    <a>查看详情</a>
                    <i class="bi bi-chevron-right" style="margin-left: 2px"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item>
        <div class="book-note-container">
          <div class="book-notes-row">
            <div class="book-note">
              <div class="book-note-cover-wrapper">
                <img :src="this.quoteBooks[2].cover" class="book-note-cover">
              </div>
              <div class="book-note-text">
                <div class="book-note-text-sign1">
                  <img :src="sign1" class="sign1">
                </div>
                <div class="book-note-text-content">
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.quoteBooks[2].quote}}</p>
                </div>
                <div class="book-note-text-sign2">
                  <img :src="sign2" class="sign2">
                </div>
                <div class="book-note-mix">
                  <div class="book-note-info">
                    <p>——{{this.quoteBooks[2].author}}《{{this.quoteBooks[2].title}}》</p>
                  </div>
                  <div class="book-note-seemore">
                    <a>查看详情</a>
                    <i class="bi bi-chevron-right" style="margin-left: 2px"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="book-note book-note-right">
              <div class="book-note-cover-wrapper">
                <img :src="this.quoteBooks[3].cover" class="book-note-cover">
              </div>
              <div class="book-note-text">
                <div class="book-note-text-sign1">
                  <img :src="sign1" class="sign1">
                </div>
                <div class="book-note-text-content">
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.quoteBooks[3].quote}}</p>
                </div>
                <div class="book-note-text-sign2">
                  <img :src="sign2" class="sign2">
                </div>
                <div class="book-note-mix">
                  <div class="book-note-info">
                    <p>——{{this.quoteBooks[3].author}}《{{this.quoteBooks[3].title}}》</p>
                  </div>
                  <div class="book-note-seemore">
                    <a>查看详情</a>
                    <i class="bi bi-chevron-right" style="margin-left: 2px"></i>
                  </div>
                </div>
              </div>
            </div>
            <!--
          <el-carousel>
            <el-carousel-item>
              <div class="book-note">
              </div>
            </el-carousel-item>
          </el-carousel>
          -->
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="category-button-group-wrapper">
      <div class="category-button-group-title">
        热门图书分类
      </div>
      <div class="category-button-group">
        <div class="category-button">
          <a>悬疑推理</a>
        </div>
        <div class="category-button">
          <a>科幻奇幻</a>
        </div>
        <div class="category-button">
          <a>历史文化</a>
        </div>
        <div class="category-button">
          <a>言情浪漫</a>
        </div>
        <div class="category-button">
          <a>社会纪实</a>
        </div>
        <div class="category-button">
          <a>中国古典文学</a>
        </div>
        <div class="category-button">
          <a>亚洲文学</a>
        </div>
      </div>
      <el-button class="button-primary-general category-button-seeall">全部分类</el-button>
    </div>

    <!-- 月度图书部分 走马灯 12本书 数组传入 动态更新内容-->
    <div class="monthly-book-section-title">月度图书</div>
    <el-carousel class="monthly-book-carousel-wrapper" height="calc(15vw + 100px)" trigger="click" indicator-position="none">
      <el-carousel-item class="monthly-book-carousel-item">
        <div class="monthly-book-card" >
          <img class="monthly-book-card-bookcover" :src="this.monthlyBooks[0].cover">
          <div class="monthly-book-card-booktitle">{{this.monthlyBooks[0].title}}</div>
          <div class="monthly-book-card-bookauthor">{{this.monthlyBooks[0].author}}</div>
          <el-rate v-model="this.monthlyBooks[0].rate" disabled show-score text-color="#f4ae4b" size="small" class="monthly-book-card-bookrate"/>
        </div>
        <div class="monthly-book-card" >
          <img class="monthly-book-card-bookcover" :src="this.monthlyBooks[1].cover">
          <div class="monthly-book-card-booktitle">{{this.monthlyBooks[1].title}}</div>
          <div class="monthly-book-card-bookauthor">{{this.monthlyBooks[1].author}}</div>
          <el-rate v-model="this.monthlyBooks[1].rate" disabled show-score text-color="#f4ae4b" size="small" class="monthly-book-card-bookrate"/>
        </div>
        <div class="monthly-book-card" >
          <img class="monthly-book-card-bookcover" :src="this.monthlyBooks[2].cover">
          <div class="monthly-book-card-booktitle">{{this.monthlyBooks[2].title}}</div>
          <div class="monthly-book-card-bookauthor">{{this.monthlyBooks[2].author}}</div>
          <el-rate v-model="this.monthlyBooks[2].rate" disabled show-score text-color="#f4ae4b" size="small" class="monthly-book-card-bookrate"/>
        </div>
        <div class="monthly-book-card" >
          <img class="monthly-book-card-bookcover" :src="this.monthlyBooks[3].cover">
          <div class="monthly-book-card-booktitle">{{this.monthlyBooks[3].title}}</div>
          <div class="monthly-book-card-bookauthor">{{this.monthlyBooks[3].author}}</div>
          <el-rate v-model="this.monthlyBooks[3].rate" disabled show-score text-color="#f4ae4b" size="small" class="monthly-book-card-bookrate"/>
        </div>
        <div class="monthly-book-card" >
          <img class="monthly-book-card-bookcover" :src="this.monthlyBooks[4].cover">
          <div class="monthly-book-card-booktitle">{{this.monthlyBooks[4].title}}</div>
          <div class="monthly-book-card-bookauthor">{{this.monthlyBooks[4].author}}</div>
          <el-rate v-model="this.monthlyBooks[4].rate" disabled show-score text-color="#f4ae4b" size="small" class="monthly-book-card-bookrate"/>
        </div>
        <div class="monthly-book-card">
          <img class="monthly-book-card-bookcover" :src="this.monthlyBooks[5].cover">
          <div class="monthly-book-card-booktitle">{{this.monthlyBooks[5].title}}</div>
          <div class="monthly-book-card-bookauthor">{{this.monthlyBooks[5].author}}</div>
          <el-rate v-model="this.monthlyBooks[5].rate" disabled show-score text-color="#f4ae4b" size="small" class="monthly-book-card-bookrate"/>
        </div>
      </el-carousel-item>
      <el-carousel-item class="monthly-book-carousel-item">
        <div class="monthly-book-card" >
          <img class="monthly-book-card-bookcover" :src="this.monthlyBooks[6].cover">
          <div class="monthly-book-card-booktitle">{{this.monthlyBooks[6].title}}</div>
          <div class="monthly-book-card-bookauthor">{{this.monthlyBooks[6].author}}</div>
          <el-rate v-model="this.monthlyBooks[6].rate" disabled show-score text-color="#f4ae4b" size="small" class="monthly-book-card-bookrate"/>
        </div>
        <div class="monthly-book-card" >
          <img class="monthly-book-card-bookcover" :src="this.monthlyBooks[7].cover">
          <div class="monthly-book-card-booktitle">{{this.monthlyBooks[7].title}}</div>
          <div class="monthly-book-card-bookauthor">{{this.monthlyBooks[7].author}}</div>
          <el-rate v-model="this.monthlyBooks[7].rate" disabled show-score text-color="#f4ae4b" size="small" class="monthly-book-card-bookrate"/>
        </div>
        <div class="monthly-book-card" >
          <img class="monthly-book-card-bookcover" :src="this.monthlyBooks[8].cover">
          <div class="monthly-book-card-booktitle">{{this.monthlyBooks[8].title}}</div>
          <div class="monthly-book-card-bookauthor">{{this.monthlyBooks[8].author}}</div>
          <el-rate v-model="this.monthlyBooks[8].rate" disabled show-score text-color="#f4ae4b" size="small" class="monthly-book-card-bookrate"/>
        </div>
        <div class="monthly-book-card" >
          <img class="monthly-book-card-bookcover" :src="this.monthlyBooks[9].cover">
          <div class="monthly-book-card-booktitle">{{this.monthlyBooks[9].title}}</div>
          <div class="monthly-book-card-bookauthor">{{this.monthlyBooks[9].author}}</div>
          <el-rate v-model="this.monthlyBooks[9].rate" disabled show-score text-color="#f4ae4b" size="small" class="monthly-book-card-bookrate"/>
        </div>
        <div class="monthly-book-card" >
          <img class="monthly-book-card-bookcover" :src="this.monthlyBooks[10].cover">
          <div class="monthly-book-card-booktitle">{{this.monthlyBooks[10].title}}</div>
          <div class="monthly-book-card-bookauthor">{{this.monthlyBooks[10].author}}</div>
          <el-rate v-model="this.monthlyBooks[10].rate" disabled show-score text-color="#f4ae4b" size="small" class="monthly-book-card-bookrate"/>
        </div>
        <div class="monthly-book-card">
          <img class="monthly-book-card-bookcover" :src="this.monthlyBooks[11].cover">
          <div class="monthly-book-card-booktitle">{{this.monthlyBooks[11].title}}</div>
          <div class="monthly-book-card-bookauthor">{{this.monthlyBooks[11].author}}</div>
          <el-rate v-model="this.monthlyBooks[11].rate" disabled show-score text-color="#f4ae4b" size="small" class="monthly-book-card-bookrate"/>
        </div>
      </el-carousel-item>
    </el-carousel>

    <!-- 底部 探索更多 + 6个button 内容不会更新 -->
    <div class="monthly-book-section-title">探索更多</div>
    <div class="more-button-group-wrapper">
      <div class="more-button-buttons" style="margin-left: 0">
        <el-button class="more-button-buttonmix">
          <div class="more-button-iconwrapper">
            <i class="bi bi-inboxes"></i>
          </div>
          <div class="more-button-textwrapper">
            图书分类
          </div>
        </el-button>
      </div>
      <div class="more-button-buttons">
        <el-button class="more-button-buttonmix">
          <div class="more-button-iconwrapper">
            <i class="bi bi-collection"></i>
          </div>
          <div class="more-button-textwrapper">
            专题推荐
          </div>
        </el-button>
      </div>
      <div class="more-button-buttons">
        <el-button class="more-button-buttonmix">
          <div class="more-button-iconwrapper">
            <i class="bi bi-clipboard-heart"></i>
          </div>
          <div class="more-button-textwrapper">
            图书榜单
          </div>
        </el-button>
      </div>
      <div class="more-button-buttons">
        <el-button class="more-button-buttonmix">
          <div class="more-button-iconwrapper">
            <i class="bi bi-box-seam"></i>
          </div>
          <div class="more-button-textwrapper">
            新书上架
          </div>
        </el-button>
      </div>
      <div class="more-button-buttons">
        <el-button class="more-button-buttonmix">
          <div class="more-button-iconwrapper">
            <i class="bi bi-calendar-event"></i>
          </div>
          <div class="more-button-textwrapper">
            即将发售
          </div>
        </el-button>
      </div>
      <div class="more-button-buttons">
        <el-button class="more-button-buttonmix">
          <div class="more-button-iconwrapper">
            <i class="bi bi-credit-card"></i>
          </div>
          <div class="more-button-textwrapper">
            折扣专区
          </div>
        </el-button>
      </div>
    </div>

  </el-main>
</template>

<script>
import {getImageUrl, ipAddress} from "@/utils/utils.js";
import { ElButton } from 'element-plus';
export default {
  name: "HomePage",
  data(){
    return{
      userId:'',
      pageTransferRoute:'user_login',
      isLoggedIn: false,
      buttonText: '立即登录',
      userSearch:'',
      showExpand: false,
      showExpandCategory: false,
      showExpandCollection: false,
      sign1: getImageUrl('../assets/setting-png/sign1.png'),
      sign2: getImageUrl('../assets/setting-png/sign2.png'),
      quoteBooks:[{
        cover: getImageUrl('../assets/book-covers/nishiwobujidemeng.png'),
        author: "三毛",
        title: "你是我不及的梦",
        quote: "总而言之，那种灯火阑珊处的蓦然回首，至今想来仍是感动的。这件事情不来则已，一来便立即粉身碎骨，当年不顾一切的爱恋和燃烧，是一个年轻生命中极为必须的经验和明证，证明了一刹永恒的真实存在与价值。",
      },
        {
          cover: getImageUrl('../assets/book-covers/xueguo.png'),
          author: "[日] 川端康成",
          title: "雪国",
          quote: "叶子的声音美得不胜悲凉，美到消散了温度。纯粹的声音从纷扰琐碎的时光中穿越而来，从生到死，从盎然走向衰亡，镜中的影响，结霜的车窗。",
        },
        {
          cover: getImageUrl('../assets/book-covers/changandelizhi.png'),
          author: "马伯庸",
          title: "长安的荔枝",
          quote: "此事起于贵妃一句无心感叹，终于贵妃的一声轻笑。自始至终，大家都围着贵妃极力兜转，眼中不及其余。至于朝廷法度，就像个整脚的龟兹乐班，远远地隔着一层薄纱，为这盛大的胡旋舞做着伴奏。",
        },
        {
          cover: getImageUrl('../assets/book-covers/diqitian.png'),
          author: "余华",
          title: "第七天",
          quote: "我们走在寂静里，这个寂静的名字叫死亡。我们不再说话，那是因为我们的记忆不再前行。这是隔世记忆，斑驳陆离，虚无又真实。",
        }],
      bookNotesCovers:[],
      collectionBookCovers: [],
      collectionBookPrices: [],
      HomepageBackground: getImageUrl('../assets/setting-png/background.png'),
      monthlyBooks:[{
        cover: getImageUrl('../assets/book-covers/ruxuerushan.png'),
        title: "如雪如山",
        author: "张天翼",
        rate: 4.2
      },
        {
          cover: getImageUrl('../assets/book-covers/xunhuoyushiluo.png'),
          title: "寻获与失落",
          author: "[美] 厄休拉·勒古恩",
          rate: 4.5
        },
        {
          cover: getImageUrl('../assets/book-covers/jianshang.png'),
          title: "翦商：殷周之变与华夏新生",
          author: "李硕",
          rate: 4.5
        },
        {
          cover: getImageUrl('../assets/book-covers/zaijianhuili.png'),
          title: "再见绘梨",
          author: "[日] 藤本树",
          rate: 4.5
        },
        {
          cover: getImageUrl('../assets/book-covers/nidangxiangniaofeiwangnideshan.png'),
          title: "你当像鸟飞往你的山",
          author: "[美] 塔拉·韦斯特弗",
          rate: 4.3
        },
        {
          cover: getImageUrl('../assets/book-covers/kelakesendenongchang.png'),
          title: "克拉克森的农场",
          author: "[英] 杰里米·克拉克森",
          rate: 4.1
        },
        {
          cover: getImageUrl('../assets/book-covers/changandelizhi.png'),
          title: "长安的荔枝",
          author: "马伯庸",
          rate: 4.5
        },
        {
          cover: getImageUrl('../assets/book-covers/ruguowomenwufayiguangsuqianxing.png'),
          title: "如果我们无法以光速前行",
          author: "[韩] 金草叶",
          rate: 4.5
        },
        {
          cover: getImageUrl('../assets/book-covers/xunzhaobaiyoujie.png'),
          title: "寻找百优解",
          author: "陈百忧",
          rate: 4.5
        },
        {
          cover: getImageUrl('../assets/book-covers/dayirichupian.png'),
          title: "大医 · 日出篇",
          author: "马伯庸",
          rate: 4.5
        },
        {
          cover: getImageUrl('../assets/book-covers/twilight.png'),
          title: "Twilight (The Twilight Saga)",
          author: "Stephenie Meyer",
          rate: 4.5
        },
        {
          cover: getImageUrl('../assets/book-covers/wenroudeye.png'),
          title: "温柔的夜",
          author: "三毛",
          rate: 4.5
        },
      ],

    }
  },
  setup(){
    function getImage(url) {
      return getImageUrl(url);
    }

    return {
      getImage
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
    enterChange(){
      /*
      fetch(`http://${ipAddress}/search-result`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          keyword: this.userSearch,
        }),
      })
          .then(x => x.json())
          .then(x => {
            this.searchResultBooks = x.searchResult;
          });

       */

      this.$router.push({name: 'search_result', query: {word: `${this.userSearch}`}});
    },
    pageTransfer(){
      this.$router.push({name: `${this.pageTransferRoute}`, params: {userId: this.userId}});
    },
    toMyCart(){
      this.$router.push({name: 'cart', params: {userId: this.userId}})
    }
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
    }
}
</script>

<style scoped>
@import "home-page.css";
</style>