// pages/splash/splash.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    timer: "", //定时器名字
    countDownNum: "4", //倒计时初始值
    zt_hight: "",
    zt_width: "",
    imgW: "",
    imgH: "",
  },
  imageLoad: function (e) {
    var that = this;
    //屏幕尺寸
    var zt_width = wx.getSystemInfoSync().windowWidth;
    var zt_hight = wx.getSystemInfoSync().windowHeight;
    //屏幕高宽比
    var windowscale = zt_hight / zt_hight;
    //原图片尺寸
    var imgW = e.detail.width;
    var imgH = e.detail.height;
    //原图片高宽比
    var originalScale = imgH / imgW;
    if (originalScale < windowscale) {
      //图片高宽比小于屏幕高宽比
      //图片缩放后的宽为屏幕宽
      var imageHeight = (zt_width * imgH) / imgW;
      that.setData({
        zt_width: zt_width,
        zt_hight: imageHeight,
      });
    } else {
      //图片高宽比大于屏幕高宽比
      //图片缩放后的高为屏幕高
      var imageWidth = (zt_hight * imgW) / imgH;
      that.setData({
        zt_width: imageWidth,
        zt_hight: zt_hight,
      });
    }
  },
  /**
   * 点击直接跳转
   */
  tiaozhu: function (e) {
    var that = this;
    wx: wx.navigateTo({
      url: "../login/login",
    });
    clearInterval(that.data.timer); //跳转完成后记得清除计时器！！
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.countDown();
  },
  //时间及时器
  countDown: function () {
    let that = this;
    let countDownNum = that.data.countDownNum; //获取倒计时初始值
    //如果将定时器设置在外面，那么用户就看不到countDownNum的数值动态变化，所以要把定时器存进data里面
    that.data.timer = setInterval(function () {
      //这里把setInterval赋值给变量名为timer的变量
      //在倒计时还未到0时，这中间可以做其他的事情，按项目需求来
      if (countDownNum == 0) {
        // wx.showToast({
        //   title: 'aaa',
        // })
        wx: wx.navigateTo({
          url: "../login/login",
        });
        clearInterval(that.data.timer); //清除计时器！！
        //这里特别要注意，计时器是始终一直在走的，如果你的时间为0，那么就要关掉定时器！不然相当耗性能
        //因为timer是存在data里面的，所以在关掉时，也要在data里取出后再关闭
        // clearInterval(that.data.timer);
        //关闭定时器之后，可作其他处理codes go here
      } else {
        //每隔一秒countDownNum就减一，实现同步
        countDownNum--;
        //然后把countDownNum存进data，好让用户知道时间在倒计着
        that.setData({
          countDownNum: countDownNum,
        });
      }
    }, 1000);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
