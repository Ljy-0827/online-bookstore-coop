<template>
<div style="display: block;">
      <div class="panel-title">订单</div>
      <el-radio-group v-model="orderRadio">
        <el-radio-button label="全部订单" />
        <el-radio-button label="待付款订单" />
        <el-radio-button label="待收货订单" />
        <el-radio-button label="已完成订单" />
        <el-radio-button label="已取消订单" />
      </el-radio-group>
      <div class="order-canvas">
        <div class="simple-order-container" v-for="item in simpleOrders" :key="item">
          <div class="simple-order-top-box">
            <div class="simple-order-top-box-left">
              <div class="simple-order-info-item-wrapper">
                <div class="simple-order-info-item-name">
                  订单生成日期
                </div>
                <div class="simple-order-info-item-info">
                  {{ item.createDate }}
                </div>
              </div>
              <div class="simple-order-info-item-wrapper">
                <div class="simple-order-info-item-name">
                  订单总价
                </div>
                <div class="simple-order-info-item-info">
                  ￥{{ item.totalPrice.toFixed(2) }}
                </div>
              </div>
              <div class="simple-order-info-item-wrapper">
                <div class="simple-order-info-item-name">
                  商品件数
                </div>
                <div class="simple-order-info-item-info">
                  {{ item.totalNum }}件
                </div>
              </div>
              <div class="simple-order-info-item-wrapper">
                <div class="simple-order-info-item-name">
                  送货地址
                </div>
                <div class="simple-order-info-item-info">
                  {{ item.addressVague }}
                </div>
              </div>
              <div class="simple-order-info-item-wrapper">
                <div class="simple-order-info-item-name">
                  订单状态
                </div>
                <div class="simple-order-info-item-info-status">
                  {{ item.status }}
                </div>
              </div>
            </div>

            <div class="simple-order-info-function-wrapper">
              <div class="simple-order-info-id">订单编号：{{item.id}}</div>
              <div class="simple-order-links">
                <button class="simple-order-link-button">查看详细订单</button>
                <el-divider direction="vertical" style="margin-top: 6px"/>
                <button class="simple-order-link-button">售后服务</button>
              </div>
            </div>
          </div>
          <div class="simple-order-bottom-box">
            <div class="simple-order-book-wrapper" v-for="bookItem in item.orderBooks" :key="bookItem">
              <div class="simple-order-book-cover-wrapper">
                <img :src="bookItem.cover" class="simple-order-book-cover">
              </div>
              <div class="simple-order-book-info-left">
                <div class="simple-order-book-title">
                  {{bookItem.title}} - {{bookItem.version}}
                </div>
                <div class="simple-order-book-author">
                  {{bookItem.author}} 著
                </div>
                <div class="simple-order-book-publisher">
                  {{bookItem.publisher}}
                </div>
                <div class="simple-order-book-single-price">
                  ￥{{bookItem.singlePrice.toFixed(2)}}
                </div>
              </div>
              <div class="simple-order-book-info-right">
                <div class="simple-order-book-num">
                  共 {{bookItem.num}} 件
                </div>
                <div class="simple-order-book-total-price">
                  ￥{{(bookItem.num * bookItem.singlePrice).toFixed(2)}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
</template>

<script>
import {getImageUrl} from "@/utils/utils.js";

export default {
  name: "UserOrder",
  data(){
    return{
      userSearch:'',
      showExpand: false,
      showExpandCategory: false,
      showExpandCollection: false,
      orderRadio: "全部订单",
      simpleOrders:[{
        id: "2983714071",
        createDate: "2023年6月25日",
        totalPrice: 218,
        totalNum: 5,
        addressVague: "北京市，海淀区",
        status: "已完成",
        orderBooks:[{
          cover: getImageUrl("book-covers/menglihualuozhiduoshao"),
          title: "梦里花落知多少",
          author: "三毛",
          publisher: "南海出版公司",
          num: 1,
          version: "平装",
          singlePrice: 68,
        },
          {
            cover: getImageUrl("book-covers/fangsiqidechulianleyuan"),
            title: "房思琪的初恋乐园",
            author: "林奕含",
            publisher: "北京联合出版公司",
            num: 1,
            version: "平装",
            singlePrice: 45,
          },
          {
            cover: getImageUrl("book-covers/reyezhimeng"),
            title: "热夜之梦",
            author: "[美] 乔治·R·R.马丁",
            publisher: "湖南文艺出版社",
            num: 1,
            version: "平装",
            singlePrice: 68,
          },
          {
            cover: getImageUrl("book-covers/aizailimingpoxiaoqian"),
            title: "爱在黎明破晓前，爱在日落黄昏后",
            author: "[美] 金·克里",
            publisher: "中信出版社",
            num: 2,
            version: "平装",
            singlePrice: 28,
          },
        ]
      },
        {
          id: "2983714029",
          createDate: "2023年6月22日",
          totalPrice: 98.5,
          totalNum: 2,
          addressVague: "北京市，朝阳区",
          status: "已完成",
          orderBooks:[{
            cover: getImageUrl("book-covers/xusanguanmaixueji"),
            title: "许三观卖血记",
            author: "余华",
            publisher: "北京十月文艺出版社",
            num: 1,
            version: "平装",
            singlePrice: 39.5,
          },
            {
              cover: getImageUrl("book-covers/xuwudeshizijia"),
              title: "虚无的十字架",
              author: "[日] 东野圭吾",
              publisher: "南海出版公司",
              num: 1,
              version: "平装",
              singlePrice: 59,
            }
          ]
        }],
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
      console.log(this.userSearch);
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
@import "user-order.css";
</style>