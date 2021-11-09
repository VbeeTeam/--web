// pages/week/week.js
// 获取APP应用实例
const app = getApp();
Page({
    /**
     * 页面的初始数据
     */
    data: {},
    /**
     * 生命周期函数--监听页面加载
     */
    // 页面实例创建完成，用于ajax数据请求及通过options参数进行接收页面传递的参数
    onLoad: function (options) {
        console.log("1-onLoad:页面加载")
        console.log("app实例：", app.globalData.baseUrl)
        // ajax请求
        wx.request({
            url: app.globalData.baseUrl + "/selectProduct", //仅为示例，并非真实的接口地址
            data: {},
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                console.log("响应结果",res.data)
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成，一般用于dom元素监听
     */
    onReady: function () {
        console.log("3-onReady:页面渲染完成")
    },
    /**
     * 生命周期函数--监听页面显示
     */
    // 一般用于页面显示刷新数据
    onShow: function () {
        console.log("2-onShow:页面显示")
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    // 一般用于页面隐藏卸载dom监听,在页面跳转之后触发,navigate
    onHide: function () {
        console.log("4-onHide:页面隐藏")
    },
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        //也面跳转卸载时触发：reLaunch，redirect,switchTab
        console.log("5-onUnload:页面卸载")
    },
    /**
     * 页面相关事件处理函数--监听用户下拉动作
     * 一般用于刷新数据
     */
    onPullDownRefresh: function () {
        console.log("下拉：onPullDownRefresh")
    },
    /**
     * 页面上拉触底事件的处理函数
     * 用于上拉分页加载
     */
    onReachBottom: function () {
        console.log("onReachBottom:上拉")
    },
    /**
     * 用户点击右上角分享
     * 用户页面有回传参数时触发
     */
    onShareAppMessage: function () {
        console.log("分享：onShareAppMessage")
    },
    onPageScroll: function () {
        console.log("页面滚动触发:onPageScroll")
    },
    onResize: function () {
        console.log("页面尺寸发生改变触发：onResize")
    }

})