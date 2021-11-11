// index.js
Page({
  data: {},
  // 跳转搜索
  toSearch: function () {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  //去扫码
  toSao() {
    // 允许从相机和相册扫码
    wx.scanCode({
      success(res) {
        console.log(res)
        // 扫码成功出结果在result结果中，发送给服务端拿到扫码的对应信息，根据业务逻辑进行处理
      }
    })
  }
})