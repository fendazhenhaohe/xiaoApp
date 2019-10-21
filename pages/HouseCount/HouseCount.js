// pages/HouseCount/HouseCount.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    index: 0,
    allPrice:true,
    array: ['按贷款总额', '按房屋总价'],
    array1: ['30年', '29年', '28年', '27年', '26年', '25年', '24年', '23年', '22年', '21年', '20年', '19年', '18年', '17年', '16年', '15年', '14年', '13年', '12年', '11年', '10年', '9年', '8年', '7年', '6年', '5年', '4年', '3年', '2年', '1年',],
    index1: 0,
    array2: ['基准利率9折(4.41%)', '基准利率95折(4.655%)', '基准利率(4.9%)', '基准利率上浮5%(5.145%)', '基准利率上浮10%(5.39%)', '基准利率上浮15%(5.635%)', '基准利率上浮20%(5.88%)', '基准利率上浮25%(6.125%)', '基准利率上浮30%(6.37%)', '基准利率上浮35%(6.615%)', '基准利率上浮40%(6.86%)',],
    index2: 2,
    array4: ['20年', '19年', '18年', '17年', '16年', '15年', '14年', '13年', '12年', '11年', '10年', '9年', '8年', '7年', '6年', '5年', '4年', '3年', '2年', '1年',],
    index4: 0,
    index5: 0,
    array5: ['基准利率(3.25%)', '基准利率上浮5%(3.575%)'],
    index6: 0,
    array6: ['7成', '6成', '5成', '4成', '3成', '2成', '1成'],
  },
  //总价
  bindPickerChange6: function (e) {
    this.setData({
      index6: e.detail.value
    })
  },
  //去详情页
  ToDetail:function(){
    wx.navigateTo({
      url: 'HouseCountDetail',
    })
  },
  //公积金利率
  bindPickerChange5: function (e) {
    this.setData({
      index5: e.detail.value
    })
  },
  //公积金年限
  bindPickerChange4: function (e) {
    this.setData({
      index4: e.detail.value
    })
  },
  //计算方式选择
  bindPickerChange: function (e) {
    var val = e.detail.value;
    this.setData({
      index: e.detail.value
    })
    if(val=='1'){
      this.setData({
        allPrice:false
      })
    }else{
      this.setData({
        allPrice:true
      })
    }
  },
  //商贷年限
  bindPickerChange1: function (e) {
    this.setData({
      index1: e.detail.value
    })
  },
  //商贷利率
  bindPickerChange2: function (e) {
    this.setData({
      index2: e.detail.value
    })
  },
  clickTab: function (e) {
    var that = this;
    that.setData({
      index0: 0,
      index1: 0,
      index2:2,
      index4: 0,
      index5: 0,
    })
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