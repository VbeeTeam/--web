// pages/my/my.js
const utils = require("../../utils/util")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer: null,
    lastTime: 0
  },
  bindGetuserinfo() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于学习', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
      }
    })
  },

  clickBtn() {
    // 所谓防抖，就是指触发事件后在 n 秒内函数只能执行一次，
    // 如果在 n 秒内又触发了事件，则事件不执行。
    //上来的给他清理掉哦，感兴趣的同学可以去研究下
    clearTimeout(this.data.timer)
    //在这个时间内我只调用一次事件处理函数，是不是达到防抖的目的呢。
    this.data.timer = setTimeout(() => {
      console.log(666)
    }, 2000)

    // 所谓节流，先执行一次函数，然后连续触发事件但是在 n 秒中只执行一次函数
    //定义一个事件为0，第一次肯定会执行 data=>time = 0
    //拿到从1970年到现在的时间戳
    // let nowTime = new Date().getTime()
    //在这个时间内我才触发事件处理函数，是不是起到节流的目的呢。
    // if (nowTime - this.data.lastTime > 2000) {
    //   console.log(666)
    //   this.setData({
    //     lastTime: nowTime
    //   })
    // }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})