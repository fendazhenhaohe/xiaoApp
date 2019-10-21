// pages/wode/wode.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    imgUrl: '/img/bg.png',

  },

  setPhotoInfo: function() {
    wx.showActionSheet({
      itemList: ['拍照', '相册'],
      itemColor: '#007aff',
      success(res) {
        console.log(res.tapIndex);
        if (res.tapIndex === 0) {
          wx.chooseVideo({
            sourceType: ['camera'],
            success(res) {
              console.log(res.tempFilePath);
            }
          })
        } else if (res.tapIndex === 1) {
          wx.chooseImage({
            count: 3, // 设置最多三张
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
              var tempFilePaths = res.tempFilePaths;
              // 图片预览
              that.setData({
                imgUrl: tempFilePaths
              })
              // wx.previewImage({
              //     current: res.tempFilePaths[0],
              //     urls: res.tempFilePaths
              // })
            }
          })
        }
      }
    })
  },
  //   setPhotoInfo: function () {
  //       var that = this;
  //       wx.chooseImage({
  //           count: 1,
  //           sizeType: ['orginal', 'compressed'],
  //           sourceType: ['album', 'camera'],
  //           success: function (res) {
  //               var tempFilePaths = res.tempFilePaths
  //               that.setData({ imgUrl: tempFilePaths })
  //           },
  //       }),
  //           wx.previewImage({
  //           current: '../../img/dalit.png', // 当前显示图片的http链接
  //               urls: [] // 需要预览的图片http链接列表
  //           })
  //   },
  //去订阅
  Todingyue:function(){
    wx.navigateTo({
      url: 'dingyue/dingyue',
    })
  },
  //去关注
  Toguanzhu:function(){
    wx.navigateTo({
      url: 'guanzhu/guanzhu',
    })
  },
  //去浏览
  Toliulan:function(){
    wx.navigateTo({
      url: 'history/history',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})