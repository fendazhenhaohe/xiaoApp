// pages/floorInfo/floorInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled:true,
    latitude: 23.099994,
    longitude: 113.324520,
    tel:'156****3601',
    close:false,
    check: 1,
    mask:true,
    maskView:true,
    shuju: [
      {
        txt: '3室',
        check: 1,
      },
      {
        txt: '4室',
        check: 2,
      },
    ],
  },
  //楼盘更多
  more:function(){
    wx.navigateTo({
      url: '../floorDetail/floorDetail',
    })
  },
  //动态查看更多
  dynamic:function(){
    wx.navigateTo({
      url: '../dongtai/dongtai',
    })
  },
  //查看更多
  move:function(){
    wx.navigateTo({
      url: '../floorPhoto/floorPhoto',
    })
  },
  hxInfo:function(){
    wx.navigateTo({
      url: '../hxInfo/hxInfo',
    })
  },
  //打开弹窗
  openView:function(e){
    var title= e.currentTarget.dataset.title;
    var tags = e.currentTarget.dataset.tags;
    var tips = e.currentTarget.dataset.tips;
    this.setData({
      mask: false,
      maskView: false,
      title:title,
      tags:tags,
      tips:tips,
    })
  },
  //蒙层关闭
  close:function(){
    this.setData({
      mask: true,
      maskView: true,
    })
  },
  // 电话号码点击
  change:function(){
    this.setData({
      disabled: false,
      tel:'',
      close:true,
      focus:true,
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