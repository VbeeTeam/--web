Page({
    data: {

    },
    getUser:function(e){
        console.log(e)
    },
    getPhone: function(e){
        console.log(e)
    },
    toLogin: function(e){
        console.log(e)
    },
    toContact: function(e){
        console.log(e)
    },
    toAddress: function(e){
        console.log(e)
    },
    toTitle: function(e){
        console.log(e)
    },
    onInit: function () {
        // 监听页面初始化的生命周期函数
        console.log("页面初始化")
    },
    onLoad: function () {
        // 监听页面加载的生命周期函数
        console.log(getApp())
        console.log("页面加载")
    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
        console.log("页面初次渲染完成，用于监听dom，启动定时器")
    },
    onShow: function() {
        // 监听页面显示的生命周期函数
    },
    onHide: function() {
        // 监听页面隐藏的生命周期函数
    },
    onUnload: function() {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function() {
        // 监听用户下拉动作
        console.log("下拉")
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
        console.log("触底")
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
        console.log("分享")
    },
    onError: function () {
        // 错误监听函数
    },
    onForceReLaunch(){
        console.log("重启6666")
    }
});