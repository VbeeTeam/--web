<template>
  <div class="category wrap">
    <div class="category-left" ref="left">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item
          :title="item.goodsName"
          v-for="item in cateList"
          :key="item.categoryId"
        />
      </van-sidebar>
    </div>
    <div class="category-right" ref="right">
      <div v-for="item in rightList" :key="item.categoryId">
        <h3>{{ item.goodsName }}</h3>
        <van-grid :column-num="3">
          <van-grid-item
            v-for="child in item.thirdLevelCategoryVOS"
            :key="child.categoryId"
            @click="toDetail(child)"
          >
            <img :src="child.goodsCoverImg" alt="">
            <span>{{ child.goodsName }}</span>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  // 定义属性
  name: "Category",
  data() {
    return {
      activeKey: 0,
      cateList: [],
      rightList: []
    };
  },
  methods: {
    onChange(index) {
      this.rightList = this.cateList[index].secondLevelCategoryVOS;
    },
    toDetail(obj) {
      this.$store.commit("detailInfo", obj)
      this.$router.push({path: "/detail", query:{info: obj}})
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.axios.get("/category").then((res) => {
      this.cateList = res.data.data;
      this.rightList = res.data.data[0].secondLevelCategoryVOS;
    });
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>

<style lang='scss' scoped>
.category {
  .category-left {
    width: 30%;
    position: fixed;
    left: 0;
    top: 46px;
    .van-sidebar {
      width: 120px;
    }
  }

  .category-right {
    width: 70%;
    position: absolute;
    right: 0;
    top: 46px;
    padding-bottom: 50px;
    h3 {
      font-size: 16px;
      padding-left: 20px;
    }
    img{
      width: 50px;
      height: 50px;
    }
    span {
      font-size: 9px;
      margin-top: 10px;
    }
  }
}
</style>