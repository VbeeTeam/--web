<template>
  <div class="my wrap">
    <div class="user-info">
      <div class="info">
        <img src="http://s.weituibao.com/1583583975067/user-graduate%20(1).png"/>
        <div class="user-desc">
          <span>登录名：{{ user[0].username }}</span>
        </div>
      </div>
    </div>
    <ul class="user-list">
      <li @click="goTo('order')">
        <span>我的订单</span>
        <van-icon name="arrow" />
      </li>
      <li @click="goTo('about')">
        <span>关于我们</span>
        <van-icon name="arrow" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "My",
  components: {
  },
  data() {
    return {
      user: {}
    }
  },
  methods: {
    goTo(r) {
      this.$router.push({ path: r })
    }
  },
  created(){
   this.user = JSON.parse(localStorage.getItem("userInfo"));
  }

}
</script>

<style lang="scss" scoped>
  .my {
    .user-info {
      width: 94%;
      margin: 10px;
      background: #51c7c7;
      box-shadow: 0 2px 5px #269090;
      border-radius: 6px;
      .info {
        position: relative;
        display: flex;
        padding: 25px 20px;
       
        img {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin-top: 4px;
        }
        .user-desc {
          display: flex;
          margin-left: 10px;
          font-size: 14px;
          color: #fff;
          align-items: center;
          span {
            color: #fff;
            font-size: 14px;
            padding: 2px 0;
          }
        }
        .account-setting {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 13px;
          color: #fff;
          .van-icon-setting-o {
            font-size: 16px;
            vertical-align: -3px;
            margin-right: 4px;
          }
        }
      }
    }
    .user-list {
      padding: 0 20px;
      margin-top: 20px;
      li {
        height: 40px;
        line-height: 40px;
        border-bottom: 1px solid #e9e9e9;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        .van-icon-arrow {
          margin-top: 13px;
        }
      }
    }
  }
</style>
