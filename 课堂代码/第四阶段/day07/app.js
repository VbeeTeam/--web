// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.onNetworkStatusChange(function (res) {
      console.log("dddd", res.isConnected)
      console.log(res.networkType)
      if (res.networkType == "none") {
        wx.showLoading({
          title: '加载中',
        })
      } else {
        wx.hideLoading()
      }
    })
  },
  globalData: {
    userInfo: null,
    baseurl: "http://101.34.234.58:3000"
  }
})
