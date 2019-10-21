// pages/news/news3.js
const recorder = wx.getRecorderManager(); //录音对象
const innerAudioContext = wx.createInnerAudioContext(); //播放对像
Page({

  /**
   * 页面的初始数据
   */
  data: {
    increase: false, //图片添加区域隐藏
    aniStyle: true, //动画效果
    wenben: false,
    volice: true,
    scrollTop: 0,

  },
  voliceTotext: function() {
    this.setData({
      wenben: true,
      volice: false,
    })
  },
  textTovolice: function() {
    this.setData({
      wenben: false,
      volice: true,
    })
  },
  // 滑动到顶部的加载函数
  upper:function(){
    console.log('到顶了')
  },
  lower:function(){
    console.log('到底了')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight,
        });
      }
    });
    that.bottom();

  },
  increase() {
    if(this.data.increase==false){
      this.setData({
        increase: true,
        aniStyle: true
      })
    }else{
      this.setData({
        increase: false,
        aniStyle: false
      })
    }
  
  },
  // 开始录音
  start: function() {
    console.log('开始录音');
    const options = {
      duration: 6000, //录音时长，单位ms
      sampleRate: 16000, //采样率
      numberOfChannels: 1, //录音通道数 默认2
      encodeBitRate: 96000, //编码码率 默认48000
      format: 'mp3', //音频格式 默认aac
      frameSize: 50 //指定帧大小，单位KB
    }
    recorder.start(options); //开始录音
    this.setData({
      isSpeaking: true
    })
  },
  end: function() {
    console.log('结束录音');
    var that = this;
    recorder.stop(); //停止录音
    this.setData({
      isSpeaking: false
    })
    recorder.onStop((res) => {
      console.log("监听录音停止事件", res)
      if (res.duration < 1000) {
        wx.showToast({
          title: '录音时间太短'
        })
      } else {
        wx.showLoading({
          title: '发送中',
        });
        var tempFilePath = res.tempFilePath;
      }
    })
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

  },
  chooseImage() {

    var that = this

    wx.chooseImage({

      count: 1, // 默认9

      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有

      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有

      success: function(res) {

        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片

        var tempFilePaths = res.tempFilePaths

        // console.log(tempFilePaths)

        wx.uploadFile({

          url: 'http://.....', //服务器地址

          filePath: tempFilePaths[0],

          name: 'file',

          headers: {

            'Content-Type': 'form-data'

          },

          success: function(res) {

            if (res.data) {

              that.setData({

                increase: false

              })

              // websocket.send('{"images":"' + res.data + '","date":"' + utils.formatTime(new Date()) + '","type":"image","nickName":"' + that.data.userInfo.nickName + '","avatarUrl":"' + that.data.userInfo.avatarUrl + '"}')

              that.bottom()

            }

          }

        })

      }

    })

  },

  //图片预览

  previewImg(e) {

    var that = this

    //必须给对应的wxml的image标签设置data-set=“图片路径”，否则接收不到

    var res = e.target.dataset.src

    var list = this.data.previewImgList //页面的图片集合数组

    //判断res在数组中是否存在，不存在则push到数组中, -1表示res不存在

    if (list.indexOf(res) == -1) {

      this.data.previewImgList.push(res)
    }
    wx.previewImage({

      current: res, // 当前显示图片的http链接

      urls: that.data.previewImgList // 需要预览的图片http链接列表

    })

  },

  //聊天消息始终显示最底端

  bottom: function() {
    var query = wx.createSelectorQuery()
    query.select('#flag').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function(res) {
      wx.pageScrollTo({
        scrollTop: res[0].bottom // #the-id节点的下边界坐标
      })
      console.log(res[0].bottom);
      res[1].scrollTop // 显示区域的竖直滚动位置

    })

  },
})