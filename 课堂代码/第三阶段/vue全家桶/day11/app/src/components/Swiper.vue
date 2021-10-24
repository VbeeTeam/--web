<template>
  <van-swipe class="my-swipe" :autoplay="5000" indicator-color="#1baeae">
    <van-swipe-item v-for="(item, index) in list" :key="index">
      <img :src="item.imgurl" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: null
    }
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
  .my-swipe .van-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>