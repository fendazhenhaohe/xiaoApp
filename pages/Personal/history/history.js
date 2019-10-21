// pages/Personal/dingyue/dingyue.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    shuju: [{
      index: 0,
      name: '瑶海万达',
      state: '在售',
      address: '瑶海-方庙',
      tag: [
        '商业',
        '贴心物业'
      ],
      price: '11000',
      info: [
        '2室/102-135㎡',
        '2室/102-135㎡',
      ],
      change: false,
      newHouseInfo: true,
    },
    {
      index: 1,
      name: '瑶海万达',
      state: '在售',
      address: '瑶海-方庙',
      tag: [
        '商业',
        '贴心物业'
      ],
      price: '11000',
      info: [
        '2室/102-135㎡',
        '2室/102-135㎡',
      ],
      change: false,
      newHouseInfo: true,
    }, {
      index: 2,
      name: '瑶海万达',
      state: '在售',
      address: '瑶海-方庙',
      tag: [
        '商业',
        '贴心物业'
      ],
      price: '11000',
      info: [
        '2室/102-135㎡',
        '2室/102-135㎡',
      ],
      change: false,
      newHouseInfo: true,
    }
    ]
  },
  //当前下的函数
  newHouseInfos: function (e) {
    var that = this;
    var oIndex = e.currentTarget.dataset.index;
    var array = that.data.shuju;
    if (array[oIndex].change == false) {
      array[oIndex].change = true;
      array[oIndex].newHouseInfo = false;
      that.setData({
        shuju: array
      });
    } else {
      array[oIndex].change = false;
      array[oIndex].newHouseInfo = true;
      that.setData({
        shuju: array
      });
    }
  },
  clickTab: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current,
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