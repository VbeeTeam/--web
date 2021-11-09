// pages/my/my.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        msg: "",
        htmlContent: '<div><img src="//m.360buyimg.com/mobilecms/s120x120_jfs/t1/175540/24/19329/6842/60ec0b0aEf35f7384/ec560dbf9b82b90b.png!q70.jpg.dpg" /><div>',
        htmlArray: [
            {
                name: "div",
                attrs: {
                    class: "boss",
                    style: "color: blue;"
                },
                children: [
                    {
                        name: "p",
                        children:[
                            {
                                type: "text",
                                text: "我是段落里的文本"
                            }
                        ]
                    },
                    {
                        name: "h1",
                        children:[
                            {
                                type: "text",
                                text: "我是h1里的内容"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    // 输入框发生改变时触发的事件
    inputEvent: function (e) {
        console.log("自定义属性",e.target.dataset.num)
        console.log("内容:",e.detail.value)
        // 修改data里的数据
       this.setData({
           msg: e.detail.value
       })
    },
    inputConfirm: function(e){
        console.log("确认", e.detail.value)
    },
    clickEvent: function(e){
        console.log("我被点击了",e)
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