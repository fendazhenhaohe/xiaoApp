Page({

  /**
   * 页面的初始数据
   */
  data: {
    heightArr: 0,
    zindex: 0,
    oneShow: true,
    val:[
      {
        id:'box1',
        index:'0',
        txt:'效果图(3)'
      },
      {
        id: 'box2',
        index: '1',
        txt: '户型图(3)'
      },
      {
        id: 'box3',
        index: '2',
        txt: '样板间(3)'
      },
      {
        id: 'box4',
        index: '3',
        txt: '区位(3)'
      },
      {
        id: 'box5',
        index: '4',
        txt: '沙盘(3)'
      },
      {
        id: 'box6',
        index: '5',
        txt: '实景图(3)'
      },
    ]
  },
  
  //点击横向的滚动
  changeX:function(e){
    // var id = e.currentTarget.dataset.id;
    // this.setData({
    //   xbox:id,
    // })
    var index = e.currentTarget.dataset.index;
    var id = e.currentTarget.dataset.id;
    this.setData({ cp_index: index, xbox: id, leftTop: index * this.data.left_item_height})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight,
        });
      }
    });
  //  that.height();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    var h = 0;
    var heightArr = [];
    wx.createSelectorQuery().select('.leftItem').boundingClientRect(function (rect) { //select会选择第一个类目的盒子
    }).exec(function (res) {
      that.setData({ left_item_height: res[0].height })

    });

    wx.createSelectorQuery().selectAll('.rightItem').boundingClientRect(function (rect) {//selectAll会选择所要含有该类名的盒子
    }).exec(function (res) {
      res[0].forEach((item) => {
        h += item.height;
        heightArr.push(h);
      })
      that.setData({ heightArr: heightArr })
    })
  },


  bindscroll: function (e) {
    var zindex = this.data.zindex;
    var oneShow = this.data.oneShow;
    let scrollTop = e.detail.scrollTop;
    let scrollArr = this.data.heightArr;
    for (let i = 0; i < scrollArr.length; i++) {
      if (scrollTop >= 0 && scrollTop < scrollArr[0]) {
        if (oneShow) {
          this.setData({
            cp_index: 0,
            leftTop: 0,
            zindex: 0,
            oneShow: false
          })
          return
        }
      } else if (scrollTop >= (scrollArr[i - 1]) && scrollTop < scrollArr[i]) {
        if (i != zindex) {
          this.setData({
            oneShow: true,
            zindex: i,
            cp_index: i,
            leftTop: i * this.data.left_item_height
          })
        }
      }
    }
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