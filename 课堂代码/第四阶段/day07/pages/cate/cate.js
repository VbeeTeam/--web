// pages/cate/cate.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cateTab: ["商品分类", "主题推荐", "每周新品", "店铺热销"],
    product_list: [],
    clickIndex: 0,
    page: 1,
    size: 12,
    totalNum: 0,
    loadingBoolean: true,
    noHavaBoolean: true
  },
  // 点击切换分类数据
  clickTab: function (e) {
    console.log(e)
    let index = e.target.dataset.index;
    this.setData({
      clickIndex: index,
      page: 1,
      product_list: [],
      noHavaBoolean: true
    })
    if (index == 0) {
      this.getList()
    } else {
      this.getList(index)
    }
  },
  // 获取商品列表
  getList: function (status) {
    var obj = {};
    if (status) {
      obj = {
        product_status: status,
        page: this.data.page,
        size: this.data.size
      }
    } else {
      obj = {
        page: this.data.page,
        size: this.data.size
      }
    }
    var that = this;
    wx.request({
      url: app.globalData.baseurl + '/selectProduct',
      data: obj,
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res)
        if (res.data.code == 200) {
          const oldData = that.data.product_list;
          const newData = oldData.concat(res.data.data);
          that.setData({
            product_list: newData,
            totalNum: res.data.total,
            loadingBoolean: true
          })
          console.log(that.data.product_list)
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
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
    console.log("触底了")
    if (this.data.product_list.length < this.data.totalNum) {
      this.setData({
        page: this.data.page + 1,
        loadingBoolean: false
      })
      setTimeout(() => {
        this.getList()
      }, 1000)
    }else{
      this.setData({
        noHavaBoolean: false
      })
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})