Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    allCity: [{
      cityName: '合肥',
      cityIndex: 0
    },
    {
      cityName: '成都',
      cityIndex: 1
    },
    {
      cityName: '重庆',
      cityIndex: 2
    },
    {
      cityName: '苏州',
      cityIndex: 3
    },
    {
      cityName: '南京',
      cityIndex: 4
    },
    {
      cityName: '杭州',
      cityIndex: 5
    }
    ],
    cityName: '合肥',
    cityList: false,
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
  newHouseInfos: function(e) {
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
  //跳转到我的
  Tomy:function(){
    wx.navigateTo({
      url: '../Personal/Personal',
    })
  },
  //房贷计算
  ToCount:function(){
    wx.navigateTo({
      url: '../HouseCount/HouseCount',
    })
  },
  //新房列表页
  Tolist: function() {
    wx.navigateTo({
      url: '../xfList/xfList',
    })
  },
  //城市列表选择
  cityList: function () {
    if (this.data.cityList == false) {
      this.setData({
        cityList: true
      })
    } else {
      this.setData({
        cityList: false
      })
    }

  },
  //获取城市
  getCity: function (e) {
    var getCityIndex = e.currentTarget.dataset.id;
    var cityName = this.data.allCity[getCityIndex].cityName;

    this.setData({
      cityName: cityName,
      cityList: false,
      search: false
    })
    //  this.getMore(1);
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