// pages/router/router.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabList: ["推荐","好评","特价","最新"],
        tabIndex: 0
    },
    // 跳转about
    toAbout: function(){
        // switchTab跳转无法进行传递参数
        wx.switchTab({
          url: '/pages/about/about',
        })
    },
    toStudy: function(){
        // 关闭所有页面记录,允许跳转到tabbar页面，可以进行参数传递
        // wx.reLaunch({
        //   url: '/pages/study/study?id=1',
        // })
        wx.reLaunch({
            url: '/pages/my/my?id=1',
          })
    },
    toMy: function(){
        // 关闭当前页面，不允许跳转到tabbar页，可以进行参数传递
        // wx.redirectTo({
        //   url: '/pages/my/my',
        // })
        wx.redirectTo({
            url: '/pages/study/study?id=2',
          })
    },
    toStudy2: function(){
        // 默认跳转方式可以返回，可以携带参数，但是页面堆栈层数不能超过十层，不可以跳转到tabbar页
        wx.navigateTo({
          url: '/pages/study/study?id=3'
        })
    },
    // 接收子组件传递的参数
    fromTab: function(e){
        console.log("fromTab", e.detail)
        this.setData({
            tabIndex: e.detail
        })
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