<template>
  <div class="home wrap">
    <!-- 轮播图组件 -->
    <Swiper :list="swiperList"></Swiper>
    <!-- 分类 -->
    <div class="category-list">
      <div v-for="item in navList" v-bind:key="item.categoryId" @click="toHref(item.href)">
        <img :src="item.imgUrl" />
        <span>{{ item.name }}</span>
      </div>
    </div>
    <!-- 商品列表 -->
    <div class="good">
      <header class="good-header">新品上线</header>
      <div class="good-box">
        <div
          class="good-item"
          v-for="item in newGoodses"
          :key="item.goodsId"
          @click="goToDetail(item)"
        >
          <img :src="item.coverImg" alt="" />
          <div class="good-desc">
            <div class="title">{{ item.name }}</div>
            <div class="price">¥ {{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="good">
      <header class="good-header">热门商品</header>
      <div class="good-box">
        <div
          class="good-item"
          v-for="item in hotGoodses"
          :key="item.goodsId"
          @click="goToDetail(item)"
        >
          <img :src="item.coverImg" alt="" />
          <div class="good-desc">
            <div class="title">{{ item.name }}</div>
            <div class="price">¥ {{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="good">
      <header class="good-header">最新推荐</header>
      <div class="good-box">
        <div
          class="good-item"
          v-for="item in recommendGoodses"
          :key="item.goodsId"
          @click="goToDetail(item)"
        >
          <img :src="item.coverImg" alt="" />
          <div class="good-desc">
            <div class="title">{{ item.name }}</div>
            <div class="price">¥ {{ item.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "@/components/Swiper";

export default {
  name: "Home",
  components: {
    Swiper,
  },
  data() {
    return {
      swiperList: [],
      navList: [],
      hotGoodses: [],
      newGoodses: [],
      recommendGoodses: [],
    };
  },
  methods: {
    //nav
    toHref(href){
     window.location.href = href;
    },
    //detail
    goToDetail(item){
      this.$store.commit("detailInfo", item)
      this.$router.push({path:"/detail", query:{info: item}})
    }
  },
  created() {
    // this.axios.get("/data").then((res) => {
    //   this.swiperList = res.data.swiperList;
    //   this.hotGoodses = res.data.hotGoodses;
    //   this.newGoodses = res.data.newGoodses;
    //   this.recommendGoodses = res.data.recommendGoodses;
    //   this.navList = res.data.navList;
    // });
    this.axios.get("http://62.234.129.169:3000/list").then((res) => {
      console.log(res.data)
      this.swiperList = res.data.swiperList;
      this.hotGoodses = res.data.hotList;
      this.newGoodses = res.data.newList;
      this.recommendGoodses = res.data.recommendList;
      this.navList = res.data.navList;
    });
  },
};
</script>
<style lang="scss" scoped>
.home {
  .category-list {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 13px;
    div {
      display: flex;
      flex-direction: column;
      width: 20%;
      text-align: center;
      img {
        width: 40px;
        height: 40px;
        margin: 13px auto 8px auto;
      }
      span {
        font-size: 16px;
      }
    }
  }
  .good {
    .good-header {
      background: #f9f9f9;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: #1baeae;
      font-size: 16px;
      font-weight: 500;
    }
    .good-box {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .good-item {
        box-sizing: border-box;
        width: 50%;
        border-bottom: 1PX solid #e9e9e9;
        padding: 10px 10px;
        img {
          display: block;
          width: 120px;
          margin: 0 auto;
        }
        .good-desc {
          text-align: center;
          font-size: 14px;
          padding: 10px 0;
          .title {
            color: #222333;
          }
          .price {
            color: #1baeae;
          }
        }
        &:nth-child(2n + 1) {
          border-right: 1PX solid #e9e9e9;
        }
      }
    }
  }

}
</style>
