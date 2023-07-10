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
            我的账号
          </el-button>
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
  <el-main style="display: inline-flex; padding: 0">
    <div class="main-left">
      <div class="order-title">
        订单详情
      </div>
      <div class="order-wrapper" v-for="order in orderData" :key="order">
        <div class="order-item" v-for="item in order.orderBooks" :key="item">
          <div class="cover-box">
            <img :src="item.coverURL" class="book-cover"/>
          </div>
          <div class="info-box">
            <div class="book-title">{{item.title}}</div>
            <div class="book-author">{{item.author}}</div>
            <div class="book-price">￥{{item.singlePrice}} x{{item.num}}， 小计：￥{{(item.singlePrice * item.num).toFixed(2)}}</div>
          </div>
        </div>

      </div>
    </div>
    <div class="main-right">
      <div class="order-title" style="margin-left: 0">
        收货地址选择
      </div>
      <div class="address-wrapper">
        <el-radio-group v-model="this.selectedAddress">
          <el-radio v-for="item in addresses" :key="item" :label="item.id" style="margin-top: 20px">
            <div class="radio-box" style="display: block; margin-left: 1vw">
              <div class="radio-top">
                {{item.province}} {{item.city}} {{item.district}} {{item.detail}}
              </div>
              <div class="radio-bottom">
                {{item.name}} {{item.phone}} {{item.email}}
              </div>
            </div>
          </el-radio>
        </el-radio-group>
      </div>
      <div class="order-title" style="margin-left: 0;">
        选择支付方式
      </div>
      <el-radio-group v-model="this.payType">
        <el-radio label="wechat">微信支付</el-radio>
        <el-radio label="alipay">支付宝支付</el-radio>
      </el-radio-group>
      <el-button @click="onSubmitPayment">确认支付</el-button>
    </div>
  </el-main>
</template>

<script>
import {getImageUrl, ipAddress} from "@/utils/utils.js";

export default {
  name: "CheckOut",
  data(){
    return {
      userSearchInput: '',
      showExpand: false,
      showExpandCategory: false,
      showExpandCollection: false,
      collectionBookRecommend: [],
      selectedAddress: '',
      orderData:[{
        id:'12343',
        orderBooks: [{
          coverURL: getImageUrl("../assets/book-covers/haibiandekafuka.png"),
          title: '海边的卡夫卡',
          author: '村上春树',
          singlePrice: '58.00',
          num: 2,
        },
          {
            coverURL: getImageUrl("../assets/book-covers/nuoweidesenlin.png"),
            title: '挪威的森林',
            author: '村上春树',
            singlePrice: '58.00',
            num: 1,
          }],
        totalNum: '2',
        totalPrice: '',
      }],
      addresses:[{
        province: '北京市',
        city: '北京市',
        district: '朝阳区',
        detail: '平乐园100号 北京工业大学',
        name: '赵子钰',
        phone: '13312345678',
        email: 'zhaoziyu@emails.bjut.edu.cn',
        id: '1',
      },
        {
          province: '北京市',
          city: '北京市',
          district: '海淀区',
          detail: '海淀大悦城',
          name: '赵子钰',
          phone: '13312345678',
          email: 'zhaoziyu@emails.bjut.edu.cn',
          id: '124',
        }]
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
    onSubmitPayment(){
      fetch(`http://${ipAddress}/pay_order`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: this.selectedAddress,
        }),
      })
      this.$router.push('/');
    }
  },
  mounted() {
    fetch(`http://${ipAddress}/get_current_order`, {
      method: 'get',
    })
        .then(x => x.json())
        .then(x => {
          this.orderData = x.order;
        });
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
@import "check-out.css";
</style>