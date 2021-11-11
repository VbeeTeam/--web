// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart_list: [{
        cart_id: 1,
        checked: false,
        cart_img: "/images/goods.jpg",
        title: "ONEMORE的连衣裙春季款长袖花边十分好看就爱看大飒飒的打底裤都是看到蝌蚪都开始拉客",
        style: "图片色，L",
        price: 10,
        num: 1
      },
      {
        cart_id: 2,
        checked: false,
        cart_img: "/images/goods.jpg",
        title: "ONEMORE的连衣裙春季款长袖花边十分好看就爱看大飒飒的打底裤都是看到蝌蚪都开始拉客",
        style: "图片色，L",
        price: 20,
        num: 3
      },
      {
        cart_id: 3,
        checked: false,
        cart_img: "/images/goods.jpg",
        title: "ONEMORE的连衣裙春季款长袖花边十分好看就爱看大飒飒的打底裤都是看到蝌蚪都开始拉客",
        style: "图片色，L",
        price: 30,
        num: 2
      }
    ],
    allBoolean: false,
    totalMoney: 0,
    totalNum: 0
  },

  // 选择全选按钮
  allCheckChange: function (e) {
    let {
      allBoolean,
      cart_list
    } = this.data;
    allBoolean = !allBoolean;
    cart_list.forEach((item) => {
      item.checked = allBoolean
    })
    // 调用求和方法
    this.setSum(cart_list);
  },
  // 选择单选
  checkChange: function (e) {
    console.log(e)
    // 根据当前行下标改变当前行checked布尔值，是否选中
    let index = e.target.dataset.index;
    const {
      cart_list
    } = this.data;
    // 取反checked的布尔值
    cart_list[index].checked = !cart_list[index].checked;
    console.log(cart_list)
   
    // 调用求和方法
    this.setSum(cart_list);
  },
  // 合计
  setSum: function (cart_list) {
    let allBoolean = true; //默认全选按钮选中
    let totalMoney = 0; //合计价格
    let totalNum = 0; //选择的商品数量
    console.log("1", totalMoney, cart_list)
    // 什么时候进行合计，当复选框选中的时候进行合计
    cart_list.forEach((item) => {
      if (item.checked) {
        totalMoney += item.price * item.num
        totalNum += item.num
      } else {
        allBoolean = false
      }
    })
    console.log("2", totalMoney)
    allBoolean = cart_list.length != 0 ? allBoolean : false
    this.setData({
      totalMoney,
      allBoolean,
      cart_list,
      totalNum
    })
  },
  // 数量加减
  reduce: function(e){
    console.log("index:",e.target.dataset.index)
    let index = e.target.dataset.index
    const {cart_list} = this.data;
    console.log("num",cart_list[index].num)
   if(cart_list[index].num > 1){
    cart_list[index].num -= 1;
   }
    console.log("num===",cart_list[index].num)
    // 调用合计
    this.setSum(cart_list);
  },
  add: function(e){
    console.log(1)
    let index = e.target.dataset.index;
    const {cart_list} = this.data;
    cart_list[index].num += 1;
    // 调用合计
    this.setSum(cart_list);
    },
    // 去掏钱
    toMoney: function(){
      console.log(this.data.totalNum)
      if(this.data.totalNum > 0){
        wx.showToast({
          title: '购买成功',
          icon: 'success',
          duration: 2000
        })
      }else{
        wx.showToast({
          title: '请选择商品',
          icon: 'none',
          duration: 2000
        })
      }
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