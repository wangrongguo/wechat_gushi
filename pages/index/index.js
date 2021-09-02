// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    na_tabbar: {
      na_loading: false,
      na_show: true,
      na_animated: true,
      na_back: false,
      na_backcolor: "#fff",
      na_text: '一句',
      na_icon: '../../images/wechatHL.png'
    },
    show_user: false,
    mask_user: false,
    title_user: '授权',
    buttons_user: [{
      text: '取消'
    }, {
      text: '确定',
    }],
    one_data:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
    //本地是否有用户信息
    if (wx.getStorageSync("userInfo") == '') {
      this.setData({
        show_user: true,
        mask_user: true,
      })
    } else {
      var u_i = wx.getStorageSync("userInfo");
      var a = 'na_tabbar.na_icon';
      this.setData({
        userInfo: u_i,
        hasUserInfo: true,
        [a]: u_i.avatarUrl
      });
    }
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
    this.getData();
    wx.stopPullDownRefresh();
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

  },
  /**
   * 数据
   */
  getData: function(){
    var that = this;
    //请求列表数据
    wx.request({
      url: 'https://v1.hitokoto.cn/', // 仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值application/json
      },
      success(res) {
        console.log(res)
        that.setData({
          one_data:res.data
        })

      },
      fail(res) {
        // console.log("fail-->"+res);
        
      },
      complete(res) {
        // console.log(res);
        wx.hideLoading();

      }
    });
  },
  getUserProfile(e) {
    console.log(e)
    if (e.currentTarget.dataset.index == 0) {

    } else {
      // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
      wx.getUserProfile({
        desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          console.log(res)
          var a = 'na_tabbar.na_icon';
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            [a]: res.userInfo.avatarUrl
          });
          wx.setStorageSync('userInfo', res.userInfo)
        }
      })
    }

    this.setData({
      show_user: false,
      mask_user: false
    })


  }
})