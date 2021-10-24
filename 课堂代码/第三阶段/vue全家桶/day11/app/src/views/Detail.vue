<template>
  <div class="detail wrap">
    <div class="detail-content">
      <div class="detail-img">
        <van-image width="100" height="100" :src="detail.goodsCoverImg" />
      </div>
      <div class="product-info">
        <h5>
          {{ detail.goodsName }}
        </h5>
        <p>{{ detail.goodsIntro }}</p>
        <div class="product-desc">免邮费 顺丰快递</div>
        <div class="product-price">
          <span>¥{{ detail.sellingPrice }}</span>
        </div>
      </div>
    </div>
    <van-goods-action>
      <van-goods-action-button
        type="warning"
        @click="addCart"
        text="加入购物车"
      />
      <van-goods-action-button
        type="danger"
        @click="goToCart"
        text="立即购买"
      />
    </van-goods-action>
  </div>
</template>

<script>
export default {
  // 定义属性
  name: "Details",
  data() {
    return {
      detail: null,
    };
  },
  methods: {
    //添加购物车
    addCart() {
      var list = this.$store.state.cartList;
      list.push(this.detail);
      this.$store.commit("cartChange", list);
      this.$router.push({ path: "/cart" });
    },
    //立即购买
    goToCart() {
      this.$dialog
        .confirm({
          title: "请确认购买",
          message: "您要支付了哦",
        })
        .then(() => {
          // on confirm
          var list = this.$store.state.successList;
          list.push(this.detail);
          this.$store.commit("successChange", list);
          this.$router.push({ path: "/order" });
        })
        .catch(() => {
          // on cancel
        });
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // this.detail = this.$route.query.info;
    this.detail = this.$store.state.detailObj;
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>

<style lang='scss' scoped>
.detail {
  .detail-content {
    .detail-img {
      text-align: center;
    }
    .product-info {
      padding: 0 10px;
      h5 {
        font-size: 18px;
        text-align: left;
        color: #333;
      }
      p {
        font-size: 14px;
        text-align: left;
        color: #333;
      }
      .product-desc {
        font-size: 14px;
        text-align: left;
        color: #999;
        padding: 5px 0;
      }
      .product-price {
        span:nth-child(1) {
          color: #f63515;
          font-size: 22px;
        }
        span:nth-child(2) {
          color: #999;
          font-size: 16px;
        }
      }
    }
    .product-intro {
      width: 100%;
      ul {
        width: 100%;
        margin: 10px 0;
        li {
          flex: 1;
          padding: 5px 0;
          text-align: center;
          font-size: 15px;
          border-right: 1px solid #999;
          box-sizing: border-box;
          &:last-child {
            border-right: none;
          }
        }
      }
      .product-content {
        padding: 0 20px;
        img {
          width: 100%;
        }
      }
    }
  }
  .van-goods-action-button--warning {
    background: #6bd8d8;
  }
  .van-goods-action-button--danger {
    background: #0dc3c3;
  }
}
</style>