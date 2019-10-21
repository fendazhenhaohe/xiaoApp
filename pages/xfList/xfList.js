var cityData = require('../../utils/city.js'); //引入自己定义的深圳地铁区域及号线数据信息
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop:0,
    huadongFix: false,
    houseData: [],
    mask: true,
    maskView: true,
    content: [],
    navtags:false,
    y: 240,
    px: ['默认排序', '单价由低到高', '单价由高到低'],
    //pxx: ['最新发布x', '推荐排序x', '租金由低到高x', '租金由高到低x', '面积由小到大x', '面积由大到小x'], //排序列表内容
    qyopen: false, //点击地铁区域筛选滑动弹窗显示效果，默认不显示
    qyshow: true, //用户点击闭关区域的弹窗设置，默认不显示
    nzopen: false, //价格筛选弹窗
    pxopen: false, //排序筛选弹窗
    pxxopen: false, //更多
    nzshow: true,
    pxshow: true,
    pxxshow: true,
    huadongFix: false,
    isfull: false,
    cityleft: cityData.getCity(), //获取地铁区域的下拉框筛选项内容
    citycenter: {}, //选择地铁区域左边筛选框后的显示的中间内容部分
    cityright: {}, //选择地铁区域的中间内容部分后显示的右边内容
    select1: '地铁', //地铁区域选中后的第二个子菜单，默认显示地铁下的子菜单
    select2: '', //地铁区域选择部分的中间
    select3: '', //地铁区域选择部分的右边
    select4: '总价', //价格左边
    select5: '',//价格右边
    shownavindex: '',
    // 价格筛选框设置
    // leftMin: 0,
    // leftMax: 10000, //左边滑块最大值
    // rightMin: 0, //右边滑块的最小值
    // rightMax: 10000, //右边滑块最大值
    // leftValue: 1000, //左边滑块默认值
    // rightValue: 6000, //右边滑块默认值
    // leftPer: '50', //左边滑块可滑动长度：百分比
    // rightPer: '50', //右边滑块可滑动长度
    page: 1,
    pxIndex: 0, //排序内容下拉框，默认第一个
    search: false, //对是否进行搜索作为标识
    userphone: '', //客户电话
    agentInfo: {}, //经纪人信息
    price: {
      "总价": ['不限', '100万以下', '100-150万', '150-200万', '200-250万', '250-300万', '300-500万', '500-1000万', '1000万以上'],
      "单价": ['不限', '20000元/㎡以下', '20000-30000元/㎡', '30000-40000元/㎡', '40000-50000元/㎡', '50000-60000元/㎡', '60000-80000元/㎡', '80000-100000元/㎡', '100000元/㎡以上',],
    },
    newslist: [{
        time: '排序',
        list: [{
            title: '默认排序',
            selected: true,
            index: 0,
            num: 0,
          },
          {
            title: '单价由低到高',
            selected: false,
            index: 1,
            num: 0,
          },
          {
            title: '单价由高到低',
            selected: false,
            index: 2,
            num: 0,
          },
    
        ]
      },
      {
        time: '数据分类',
        list: [{
            title: '全部',
            selected: true,
            index: 0,
            num: 1,
          },
          {
            title: '今日成交',
            selected: false,
            index: 1,
            num: 1,
          },
          {
            title: '本周成交',
            selected: false,
            index: 2,
            num: 1,
          },
          {
            title: '本月成交',
            selected: false,
            index: 3,
            num: 1,
          },


        ]
      }

    ],
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
        name: '瑶海万达1',
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
        name: '瑶海万达2',
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
        name: '瑶海万达3',
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
        name: '瑶海万达4',
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
      , {
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
      , {
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
      , {
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
      , {
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
  bindscroll: function (event){
    //event.detail = { scrollLeft, scrollTop, scrollHeight, scrollWidth, deltaX, deltaY }	
    var top = event.detail.scrollTop;
    console.log(top);
    if(top>160){
      this.setData({
         huadongFix:true,
       })
    }else{
      this.setData({
        huadongFix: false,
      })
    }
  },
  //获取滚动的高度
  // onPageScroll: function (e) {
  //   var query = wx.createSelectorQuery();
  //   query.select('.newHouseCard').boundingClientRect((rect) => {
  //     let top = rect.top;
  //     console.info('按钮距离顶部位置', top)
  //     if (top <=0) { //临界值，根据自己的需求来调整
  //     this.setData({
  //       huadongFix:true
  //     })
  //     } else {
  //       this.setData({
  //         huadongFix:false
  //       })
  //     }
  //   }).exec()
  // },
  //详情
  ToInfo:function(){
    wx.navigateTo({
      url: '../floorInfo/floorInfo',
    })
  },
  //tags 选中
  tags:function(e){
    var tag = e.currentTarget.dataset.tag;
    this.setData({
      y:84.5,
      tags:tag,
      scrollTop:158,
    })
    
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

  //点击关闭按钮和蒙层
  maskClose: function() {
    this.setData({
      mask: true,
      maskView: true,
      hongbao: true,
    })
  },
  dingyue: function() {
    this.setData({
      mask: true,
      hongbao: true,
    })
    this.setData({
      mask: false,
      maskView: false,
    })
  },


  linkNews: function(e) {
    var that = this;
    var num = e.currentTarget.dataset.num;
    var list = that.data.newslist[num].list;
    var index = e.currentTarget.dataset.index;
    var newsList = that.data.newslist;

    for (var i = 0; i < list.length; i++) {
      //单选
      const listSelect = "newslist[" + num + "].list[" + i + "].selected";
      const sureSelect = "newslist[" + num + "].list[" + index + "].selected";
      that.setData({
        [listSelect]: false,
        [sureSelect]: true,
      })

      // const boxClick = "newslist[" + num + "].list[" + index + "].selected";
      // that.setData({
      //   [boxClick]: true
      // })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      citycenter: this.data.cityleft['地铁'],
      priceLeft: this.data.price,
      pricecenter: this.data.price['总价']
    })
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          height: res.windowHeight,
        });
      }
    });

    //登录

  },
  //触底进行列表分页查询
  scrollToLower: function() {
    console.log('到底了');
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


  // 地铁区域列表下拉框是否隐藏
  listqy: function(e) {
    if (this.data.qyopen) {
      this.setData({
        navtags: false,
        check: false,
        qyopen: false,
        nzopen: false,
        pxopen: false,
        nzshow: true,
        pxshow: true,
        pxxshow: true,
        qyshow: false,
        isfull: false,
       scrollTop:158,
        y: 40.5,
        shownavindex: 0
      })
    } else {
      this.setData({
        navtags: true,
        check: false,
        qyopen: true,
        pxopen: false,
        nzopen: false,
        nzshow: true,
        pxshow: true,
        pxxshow: true,
        qyshow: false,
        isfull: true,
       scrollTop:158,
        y: 40.5,
        shownavindex: e.currentTarget.dataset.nav
      })
    }

  },
  // 价格下拉框是否隐藏
  list: function(e) {
    if (this.data.nzopen) {
      this.setData({
        check: false,
        nzopen: false,
        pxopen: false,
        qyopen: false,
        nzshow: false,
        pxshow: true,
        pxxshow: true,
        qyshow: true,
        isfull: false,
   
        y: 40.5,
        scrollTop:158,
        shownavindex: 0
      })
    } else {
      this.setData({
        //   content: this.data.nv,
        scrollTop: 158,
        navtags: true,
        check: false,
        nzopen: true,
        pxopen: false,
        qyopen: false,
        nzshow: false,
        pxshow: true,
        pxxshow: true,
        qyshow: true,
        isfull: true,
        scrollTop:158,
        y: 40.5,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
  },
  // p排序下拉框是否隐藏
  listpx: function(e) {
    if (this.data.pxopen) {
      this.setData({
        navtags:false,
        navtags: false,
        check: false,
        nzopen: false,
        pxopen: false,
        qyopen: false,
        nzshow: true,
        pxshow: false,
        pxxshow: true,
        qyshow: true,
        isfull: false,
   
        scrollTop:158,
        y: 40.5,
        shownavindex: 0
      })
    } else {
      this.setData({
        navtags: true,
        check: true,
        content: this.data.px,
        nzopen: false,
        pxopen: true,
        qyopen: false,
        nzshow: true,
        pxshow: false,
        pxxshow: true,
        qyshow: true,
        isfull: true,
      
        scrollTop: 158,
        y: 40.5,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
    console.log(e.target)
  },
  //更多
  listpxx: function(e) {
    if (this.data.pxxopen) {
      this.setData({
        navtags: false,
        check: false,
        nzopen: false,
        pxopen: false,
        pxxopen: false,
        qyopen: false,
        nzshow: true,
        pxshow: true,
        pxxshow: false,
        qyshow: true,
        isfull: false,
      
        scrollTop:158,
        y: 40.5,
        shownavindex: 0
      })
    } else {
      this.setData({
        navtags: true,
        check: false,
        content: this.data.px,
        nzopen: false,
        pxopen: false,
        pxxopen: true,
        qyopen: false,
        nzshow: true,
        pxshow: true,
        pxxshow: false,
        qyshow: true,
        isfull: true,
     
        scrollTop: 158,
        y: 40.5,
        shownavindex: e.currentTarget.dataset.nav
      })
    }
    console.log(e.target)
  },
  //价格左边区域
  selectleftPrice: function (e) {
    console.log('用户选中左边菜单栏的索引值是：' + e.target.dataset.price);
    this.setData({
      pricecenter: this.data.priceLeft[e.currentTarget.dataset.price],
      select4: e.target.dataset.price,
      select5: ''
    });
  },
  //价格右边选中
  selectcenterPrice: function (e) {
    console.log('选中价格' + e.currentTarget.dataset.price);
    this.setData({
      // priceright: this.data.pricecenter[e.currentTarget.dataset.price],
      select5: e.target.dataset.index
    });
    // 隐藏价格下拉框选项
    this.setData({
      navtags:false,
      nzopen: false,
      pxopen: false,
      pxxopen: false,
      qyopen: false,
      nzshow: true,
      pxshow: true,
      pxxshow: true,
      qyshow: true,
      isfull: false,
      shownavindex: 0
    })
  },
  // 地铁区域第一栏选择内容
  selectleft: function(e) {
    console.log('用户选中左边菜单栏的索引值是：' + e.target.dataset.city);
    this.setData({
      cityright: {},
      citycenter: this.data.cityleft[e.currentTarget.dataset.city],
      select1: e.target.dataset.city,
      select2: ''
    });
  },
  // 地铁区域中间栏选择的内容
  selectcenter: function(e) {
    this.setData({
      cityright: this.data.citycenter[e.currentTarget.dataset.city],
      select2: e.target.dataset.city
    });
  },
  // 地铁区域左边栏选择的内容
  selectright: function(e) {
    console.log('选中地铁线下的地铁站' + e.currentTarget.dataset.city);
    this.setData({
      select3: e.currentTarget.dataset.city
    });
  },
  // 点击灰色背景隐藏所有的筛选内容
  hidebg: function(e) {
    this.setData({
      qyopen: false,
      nzopen: false,
      pxopen: false,
      pxxopen: false,
      nzshow: true,
      pxshow: true,
      pxxshow: true,
      qyshow: true,
      isfull: false,
      shownavindex: 0,
    })
  },
  // 地铁区域清空筛选项
  quyuEmpty: function() {
    this.setData({
      select1: '',
      select2: '',
      select3: '-1',
    })
  },
  // 地铁区域选择筛选项后，点击提交
  submitFilter: function() {
    console.log('选择的一级选项是：' + this.data.select1);
    console.log('选择的二级选项是：' + this.data.select2);
    console.log('选择的三级选项是：' + this.data.select3);
    // 隐藏地铁区域下拉框
    this.setData({
      navtags: false,
      qyopen: false,
      nzopen: false,
      pxopen: false,
      pxxopen: false,
      nzshow: true,
      pxshow: true,
      pxxshow: true,
      qyshow: true,
      isfull: false,
      shownavindex: 0,
     
      guding:false,
      scrollTop: 158,

    })
  },
  
  // 价格筛选框重置内容
  PriceEmpty: function() {
    this.setData({
      leftValue: 1000, //左边滑块默认值
      rightValue: 6000, //右边滑块默认值
    })
  },
  // 价格筛选框提交内容
  submitPrice: function() {
    // 隐藏价格下拉框选项
    this.setData({
      nzopen: false,
      pxopen: false,
      pxxopen: false,
      qyopen: false,
      nzshow: false,
      pxshow: true,
      pxxshow: true,
      qyshow: true,
      isfull: false,
      shownavindex: 0
    })
  },
  // 排序内容下拉框筛选
  selectPX: function(e) {
    console.log('排序内容下拉框筛选的内容是' + e.currentTarget.dataset.index);
    this.setData({
      navtags:false,
      pxIndex: e.currentTarget.dataset.index,
      nzopen: false,
      pxopen: false,
      pxxopen: false,
      qyopen: false,
      nzshow: true,
      pxshow: true,
      pxxshow: true,
      qyshow: true,
      isfull: false,
      shownavindex: 0
    });
    console.log('当前' + this.data.pxIndex);
  },
  // 更多[确定]按钮
  sureMove: function(e) {
    this.setData({
     // pxIndex: e.currentTarget.dataset.index,
     navtags:false,
      nzopen: false,
      pxopen: false,
      pxxopen: false,
      qyopen: false,
      nzshow: true,
      pxshow: true,
      pxxshow: true,
      qyshow: true,
      isfull: false,
      shownavindex: 0
    });
  },
  //城市列表选择
  cityList: function() {
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
  getCity: function(e) {
    var getCityIndex = e.currentTarget.dataset.id;
    var cityName = this.data.allCity[getCityIndex].cityName;

    this.setData({
      cityName: cityName,
      cityList: false,
      search: false
    })
  //  this.getMore(1);
  },

})