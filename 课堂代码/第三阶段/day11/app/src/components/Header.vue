<template>
  <van-nav-bar
    :title="$route.meta.title"
    :left-text="backText"
    :left-arrow="btnBoolean"
    @click-left="onClickLeft"
    fixed
  />
</template>

<script>
export default {
  // 定义属性
  name: "Header",
  props: ["title"],
  data() {
    return {
      backText: "",
      btnBoolean: false
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  watch: {
    $route(to){
      if(to.path == "/" || to.path == "/login"){
        this.backText = ""
        this.btnBoolean = false
      }else{
        this.backText = "返回"
        this.btnBoolean = true
      }
    }
  }
};
</script>

<style lang='scss' scoped>
</style>