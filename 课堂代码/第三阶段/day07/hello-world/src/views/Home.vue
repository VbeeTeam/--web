<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <van-checkbox v-model="checked">
      <!-- 使用组件提供的 icon 插槽 -->
      <!-- 将默认图标替换为个性化图片 -->
      <template #icon="props">
        <img :src="props.checked ? activeIcon : inactiveIcon" />
      </template>
    </van-checkbox>
    
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      checked: true,
      activeIcon: "https://img01.yzcdn.cn/vant/user-active.png",
      inactiveIcon: "https://img01.yzcdn.cn/vant/user-inactive.png",
    };
  },
};
</script>
