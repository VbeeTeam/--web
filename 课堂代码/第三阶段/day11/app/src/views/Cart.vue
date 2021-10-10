<template>
  <div class="cart wrap">
    <div class="cart-body">
      <van-checkbox-group
        @change="groupChange"
        v-model="result"
        ref="checkboxGroup"
      >
        <van-swipe-cell
          :right-width="50"
          v-for="(item, index) in list"
          :key="index"
        >
          <div class="good-item">
            <van-checkbox :name="item.goodsId" />
            <div class="good-img"><img :src="item.goodsCoverImg" alt="" /></div>
            <div class="good-desc">
              <div class="good-title">
                <span>{{ item.goodsName }}</span>
                <span>x{{ item.goodsCount }}</span>
              </div>
              <div class="good-btn">
                <div class="price">¥{{ item.sellingPrice }}</div>
                <van-stepper v-model="item.goodsCount" />
              </div>
            </div>
          </div>
          <!-- <van-button
            slot="right"
            icon="delete"
            type="danger"
            class="delete-button"
            @click="deleteGood(item.goodsId, index)"
          /> -->
        </van-swipe-cell>
      </van-checkbox-group>
    </div>
    <van-submit-bar
      v-if="list.length > 0"
      class="submit-all"
      :price="total * 100"
      button-text="结算"
      @submit="onSubmit"
    >
      <van-checkbox @click="allCheck" v-model="checkAll">全选</van-checkbox>
    </van-submit-bar>
    <div class="empty" v-if="!list.length">
      <van-icon name="smile-o" />
      <div class="title">购物车空空空如也</div>
      <van-button color="#1baeae" type="primary" @click="goTo" block
        >前往首页</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      all: false,
      result: [],
      checkAll: false,
    };
  },
  components: {},
  mounted() {},
  computed: {
    //合计
    total() {
      let sum = 0;
      let selectList = this.list.filter((item) => this.result.includes(item.goodsId));
      selectList.forEach((item) => {
        sum += item.goodsCount * item.sellingPrice;
      });
      return sum;
    },
  },
  methods: {
    //绑定的复选框发生改变
    groupChange(result) {
      if (result.length == this.list.length) {
        this.checkAll = true;
      } else {
        this.checkAll = false;
      }
    },
    //全选、反选
    allCheck() {
      if (this.checkAll) {
        this.$refs.checkboxGroup.toggleAll(true);
      } else {
        this.$refs.checkboxGroup.toggleAll();
      }
    },
    // //删除
    // deleteGood(id, index) {
    //   this.list.splice(index, 1);
    // },
    //结算
    onSubmit() {
      if (this.total <= 0) {
        this.$toast("请选择商品");
      } else {
        this.$dialog
          .confirm({
            title: "请确认购买",
            message: "您要支付了哦",
          })
          .then(() => {
            var list = this.$store.state.successList;
            console.log(list)
            //拿到选择的数据
            var selectList = this.list.filter((item) => this.result.includes(item.goodsId));
            var newList = list.concat(selectList);
            this.$store.commit("successChange", newList);
            //更新购物车数据
            var notselectList = this.list.filter((item) => !this.result.includes(item.goodsId));
            this.$store.commit("cartChange", notselectList);
            //跳转订单
            this.$router.push({ path: "/order" });
          })
          .catch(() => {
            // on cancel
          });
      }
    },
    goTo() {
      this.$router.push({ path: "/" });
    },
  },
  created() {
    this.list = this.$store.state.cartList;
  },
};
</script>

<style lang="scss" scoped>
.cart {
  .cart-body {
    padding-left: 10px;
    .good-item {
      display: flex;
      align-items: center;
      .good-img {
        img {
          width: 50px;
          height: 50px;
          border-radius: 5px;
          margin-left: 10px;
        }
      }
      .good-desc {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        padding: 20px;
        .good-title {
          display: flex;
          justify-content: space-between;
          span {
            font-size: 12px;
          }
        }
        .good-btn {
          display: flex;
          justify-content: space-between;
          .price {
            font-size: 16px;
            color: red;
            line-height: 28px;
          }
          .van-icon-delete {
            font-size: 20px;
            margin-top: 4px;
          }
        }
      }
    }
    .delete-button {
      width: 50px;
      height: 100%;
    }
  }
  .empty {
    width: 50%;
    margin: 0 auto;
    text-align: center;
    margin-top: 200px;
    .van-icon-smile-o {
      font-size: 50px;
    }
    .title {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
  .submit-all {
    margin-bottom: 50px;
    .van-checkbox {
      margin-left: 10px;
    }
    .van-submit-bar__text {
      margin-right: 10px;
    }
    .van-submit-bar__button {
      background: #000;
    }
  }
  .van-checkbox__icon--checked .van-icon {
    background-color: #000;
    border-color: #000;
  }
}
</style>
