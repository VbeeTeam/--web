<template>
  <van-tabbar v-model="active" route v-show="type">
    <van-tabbar-item to="/" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
    <van-tabbar-item to="/cart" icon="shopping-cart-o" :badge="$store.state.cartList.length">购物车</van-tabbar-item>
    <van-tabbar-item to="/my" icon="user-o">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  // 定义属性
  name: "Footer",
  data() {
    return {
      active: 0,
      type: true
    };
  },
  methods: {},
  watch: {
    $route(to) {
      if(to.path == "/" || to.path == "/cart" || to.path == "/category" || to.path == "/my"){
        this.type = true
      }else{
        this.type = false
      }
    }
  }
};
</script>

<style lang='scss' scoped>
</style>