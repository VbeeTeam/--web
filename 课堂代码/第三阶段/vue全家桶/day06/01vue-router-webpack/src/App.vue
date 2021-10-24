<template>
  <div>
        <router-link to="/home">首页</router-link>
        <router-link to="/about">关于</router-link>
        <!-- 视图容器 -->
        <router-view></router-view>
  </div>
</template>
<script>
// ES6默认导出对象
export default {
  data() {
    return {};
  },
  components: {
    // 在组件注册
  },
};
</script>
<style lang="scss" scoped>
    .active{
        color: red;
    }
</style>

