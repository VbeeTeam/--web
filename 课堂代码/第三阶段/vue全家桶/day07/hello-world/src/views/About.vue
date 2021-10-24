<template>
  <div class="about">
    <!-- <video controls autoplay="autoplay" id="video">
        <source src="../assets/video/mp4.mp4" />
        <source src="../assets/video/movie04.ogg" />
        您的浏览器不支持视频播放
     </video> -->
    <van-swipe @change="onChange" :loop="false" :width="150">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <template #indicator>
        <div class="custom-indicator"></div>
      </template>
    </van-swipe>
  </div>
</template>

<script>
// import data from "@/assets/js/address.js"
export default {
  // 定义属性
  name: "",
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>

<style lang='scss' scoped>
.about {
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    margin-right: 10px;
  }
}
</style>