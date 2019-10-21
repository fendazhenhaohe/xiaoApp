// pages/helpFind/helpFind.js
var cityData = require('../../utils/city.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ask: [{
      txt: '优质学区',
      select: false,
    },
    {
      txt: '离地铁近',
      select: false,
    },
    {
      txt: '生活便利',
      select: false,
    },
    {
      txt: '南北通透',
      select: false,
    },
    {
      txt: '车位充足',
      select: false,
    },
    {
      txt: '高楼层',
      select: false,
    },
    {
      txt: '中间楼层',
      select: false,
    },
    {
      txt: '绿化率高',
      select: false,
    },

    {
      txt: '带电梯',
      select: false,
    },
    {
      txt: '优质物业',
      select: false,
    },
    {
      txt: '不要顶层',
      select: false,
    },
    {
      txt: '不要底层',
      select: false,
    },
    ],
    selectquyu: true,
    cityleft: cityData.getCity(), //获取地铁区域的下拉框筛选项内容
    citycenter: {}, //选择地铁区域左边筛选框后的显示的中间内容部分
    cityright: {}, //选择地铁区域的中间内容部分后显示的右边内容
    select1: '地铁', //地铁区域选中后的第二个子菜单，默认显示地铁下的子菜单
    select2: '', //地铁区域选择部分的中间
    select3: '', //地铁区域选择部分的右边
    clear: true,
    quyu: '不限',
    currentTab: 1,
    imgUrl: 'http://video.ychengju.com/11/wx/blueBg.png',
    zjBottom: true,
    low1: 20,
    heigh1: 60,
    index: 1,
    num: 1,
    like: 1,
    titleTag: '您想买什么户型?',
  },
  //要求
  clickask: function (e) {
    var that = this;
    var oindex = e.currentTarget.dataset.index;
    console.log(oindex);
    var array = that.data.ask;
    if (array[oindex].select==false){
      array[oindex].select = true;
      that.setData({
        ask: array
      });
    }else{
      array[oindex].select = false;
      that.setData({
        ask: array
      });
    }
   
  },
  //选择喜好
  clicklike: function (e) {
    var like = e.currentTarget.dataset.like;
    var title = e.currentTarget.dataset.title;
    this.setData({
      like: like
    })
    console.log(title);
  },
  //选择居室
  clicknum: function (e) {
    var num = e.currentTarget.dataset.num;
    var titleA = e.currentTarget.dataset.title;
    this.setData({
      num: num
    })
    console.log(titleA);
  },
  //总价
  zjBottom: function () {
    if (this.data.zjBottom) {
      this.setData({
        zjBottom: false
      })
    } else {
      this.setData({
        zjBottom: true
      })
    }
  },
  //首套及二套
  clickbox: function (e) {
    var val = e.currentTarget.dataset.index;
    var title = e.currentTarget.dataset.title;
    if (val == 1) {
      this.setData({
        index: 1
      })
    } else {
      this.setData({
        index: 2
      })
    }
    console.log(title);
  },
  lowValueChangeAction1: function (e) {
    this.setData({
      low1: e.detail.lowValue
    })
  },

  heighValueChangeAction1: function (e) {
    this.setData({
      heigh1: e.detail.heighValue
    })
  },
  clickTab: function (e) {
    var val = e.currentTarget.dataset.current;
    if (val == 0) {
      this.setData({
        currentTab: 1,
        imgUrl: 'http://video.ychengju.com/11/wx/blueBg.png',
      })
    } else {
      this.setData({
        currentTab: 0,
        imgUrl: 'http://video.ychengju.com/11/wx/yellowBg.png',
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //清除
  quyuEmpty: function () {
    this.setData({
      citycenter: {}, //选择地铁区域左边筛选框后的显示的中间内容部分
      cityright: {}, //选择地铁区域的中间内容部分后显示的右边内容
      select1: '地铁', //地铁区域选中后的第二个子菜单，默认显示地铁下的子菜单
      select2: '', //地铁区域选择部分的中间
      select3: '', //地铁区域选择部分的右边
      quyu: '不限',
    })

  },
  //打开
  openSelect: function () {
    if (this.data.selectquyu) {
      this.setData({
        selectquyu: false,
      })
    } else {
      this.setData({
        selectquyu: true,
      })
    }

  },
  //清除
  clear: function () {
    this.setData({
      selectquyu: true,
      citycenter: {}, //选择地铁区域左边筛选框后的显示的中间内容部分
      cityright: {}, //选择地铁区域的中间内容部分后显示的右边内容
      select1: '地铁', //地铁区域选中后的第二个子菜单，默认显示地铁下的子菜单
      select2: '', //地铁区域选择部分的中间
      select3: '', //地铁区域选择部分的右边
      quyu: '不限',
    })
  },
  //确定
  submitFilter: function () {
    this.setData({
      selectquyu: true,
    })
    console.log('选择的一级选项是：' + this.data.select1);
    console.log('选择的二级选项是：' + this.data.select2);
    console.log('选择的三级选项是：' + this.data.select3);
    var val = this.data.select1 + this.data.select2 + this.data.select33;
    var that = this;
    that.setData({
      selectquyu: true,
      quyu: val,
      clear: false,
    })
  },
  onLoad: function (options) {
    this.setData({
      citycenter: this.data.cityleft['地铁'],
      //  cityright: this.data.cityleft['地铁']['1号线(罗宝线)']
    })
  },
  // 地铁区域第一栏选择内容
  selectleft: function (e) {
    console.log('用户选中左边菜单栏的索引值是：' + e.target.dataset.city);
    this.setData({
      cityright: {},
      citycenter: this.data.cityleft[e.currentTarget.dataset.city],
      select1: e.target.dataset.city,
      select2: ''
    });
  },
  // 地铁区域中间栏选择的内容
  selectcenter: function (e) {
    this.setData({
      cityright: this.data.citycenter[e.currentTarget.dataset.city],
      select2: e.target.dataset.city
    });
  },
  // 地铁区域左边栏选择的内容
  selectright: function (e) {
    console.log('选中地铁线下的地铁站' + e.currentTarget.dataset.city);
    console.log('选中地铁线下的地铁站' + e.currentTarget.dataset.value);
    this.setData({
      select3: e.currentTarget.dataset.city,
      select33: e.currentTarget.dataset.value
    });
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