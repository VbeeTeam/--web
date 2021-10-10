<template>
  <div class="order wrap">
    <van-tabs
      @change="onChangeTab"
      :color="'#1baeae'"
      :title-active-color="'#1baeae'"
      class="order-tab"
      v-model="status"
    >
      <van-tab title="全部" name="0"></van-tab>
      <van-tab title="待付款" name="1"></van-tab>
      <van-tab title="交易完成" name="2"></van-tab>
    </van-tabs>
    <van-pull-refresh v-model="refreshing" class="order-list-refresh">
      <van-list>
        <div class="order-item-box" v-for="(item, index) in list" :key="index">
          <img :src="item.goodsCoverImg" alt="" />
          <div class="item-right">
            <h3>{{ item.goodsName }}</h3>
            <p>{{ item.goodsIntro }}</p>
            <b>￥{{ item.sellingPrice }}</b>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "0",
      loading: false,
      finished: false,
      refreshing: false,
      list: [],
      totalList: []
    };
  },
  components: {},
  methods: {
    onChangeTab(name) {
      this.status = name;
      if(name == 0){
        this.list = this.$store.state.cartList.concat(this.$store.state.successList);
      }else if(name == 1){
        this.list = this.$store.state.cartList;
      }else{
        this.list = this.$store.state.successList;
      }
    },
  },
  created() {
    this.list = this.$store.state.cartList.concat(this.$store.state.successList);
  },
};
</script>

<style lang="scss" scoped>
.order {
  .order-list-refresh {
    .van-card__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .van-pull-refresh__head {
      background: #f9f9f9;
    }
    .van-list {
      min-height: calc(100vh - 88px);
      background: #f9f9f9;
      margin-top: 20px;
    }
    .order-item-box {
      margin: 20px 10px;
      background-color: #fff;
      display: flex;
      align-items: center;
      .item-right{
        margin-left: 10px;
      }
      img {
        width: 50px;
        height: 50px;
      }
      h3 {
        font-size: 16px;
        padding: 0;
        margin: 0;
      }
      p {
        font-size: 14px;
        padding: 0;
        margin: 0;
      }
      b {
        font-size: 12px;
        padding: 0;
        margin: 0;
        color: red;
      }
    }
  }
}
</style>
