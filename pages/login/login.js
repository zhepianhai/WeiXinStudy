// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    img_src: "", // 图片base64地址
    phone: "",
    code: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadCodeBase64();
  },

  //加载验证码
  loadCodeBase64() {
    var myThis = this;
    wx.request({
      url: "",
      data: "",
      header: {
        "content-type": "application/json",
      },

      success(res) {
        var imgData = res.data.data.img.replace(/[\r\n]/g, "");
        // console.log(imgData)
        myThis.setData({
          img_src: imgData,
        });
      },
    });
  },
  //登录的
  submitForm() {
    console.log("phone:" + this.data.phone);
    console.log("code:" + this.data.code);
    wx.request({
      url: "",
      data: {
        phone: this.data.phone,
        code: this.data.code,
      },
      method:"POST",
      header: {
        "content-type": "application/json",
      },
      success(res) {
        console.log(res.data);
      },
    });
  },
  formInputPhoneChange(e) {
    this.setData({
      phone: e.detail.value,
    });
  },
  formInputCodeChange(e) {
    this.setData({
      code: e.detail.value,
    });
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
