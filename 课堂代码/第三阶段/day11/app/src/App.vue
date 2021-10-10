<template>
  <div id="app">
    <!-- 公共头部 -->
    <Header :title="title" />

    <!-- 组件容器 -->
    <router-view @child="father"/>

    <!-- 公共底部 -->
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  // 定义属性
  name: "APP",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      title: null
    };
  },
  methods: {
    father(value){
      this.title = value
    }
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrap{
  padding: 46px 0 50px;
  box-sizing: border-box;
}
</style>
