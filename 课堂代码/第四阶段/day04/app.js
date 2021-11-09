// app.js
App({
  // 小程序第一次启动就会触发这个事件
  // 一般用于微信小程序登录
  onLaunch: function(){
    console.log("小程序启动")
    // wx.navigateTo({
    //   url: '/123/123',
    // })
    wx.login({
      success(res){
        console.log("code:", res.code)
        // 通过ajax请求将code码发送给服务端，换取用户信息就可以了
      }
    })
  },
  // 显示小程序
  // 一般用于效果重置、数据重置、定时器重置
  onShow: function(){
    console.log("onShow小程序显示")
  },
  // 小程序的隐藏
  // 暂停或清空定时器
  onHide: function(){
    console.log("onHide小程序隐藏")
  },
  // 小程序报错
  // 一般用于用户提示
  onError: function(err){
    console.log("onError",err)
    wx.showToast({
      title: '小程序发生错误',
      icon: "error",
      duration: 2000
    })
  },
  // 页面不存在触发
  // 一般用于用户提示
  onPageNotFound: function(){
    console.log("onPageNotFound:页面不存在")
    wx.navigateTo({
      url: '/123/123',
    })
    wx.showToast({
      title: '小程序未找到该页面',
      icon: "error",
      duration: 2000
    })
  },

  // 全局的变量或状态定义在这个对象里
  globalData: {
    userInfo: null,
    baseUrl: "http://101.34.234.58:3000"
  }
})
