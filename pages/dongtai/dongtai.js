// pages/dongtai/dongtai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    check: 1,
    mask:true,
    maskView:true,
    shuju: [
      {
        txt: '全部动态',
        check: 1,
      },
      {
        txt: '销控信息',
        check: 2,
      },
    ],
  },
  //免责声明
  open:function(){
    this.setData({
      mask: false,
      maskView:false,
    })
  },
  //关闭和知道
  close:function(){
    this.setData({
      mask: true,
      maskView: true,
    })
  },
  check: function (e) {
    var check = e.currentTarget.dataset.check;
    this.setData({
      check: check
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