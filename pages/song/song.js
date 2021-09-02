// pages/index/index.js
const jsonData = require('../../utils/song300.js');
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
      na_text: '唐诗',
      na_icon: '../../images/wechatHL.png'
    },
    my_data:{},
    num:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var u_i = wx.getStorageSync("userInfo");
    var a = 'na_tabbar.na_icon';
    this.setData({
      [a]: u_i.avatarUrl
    });
    this.getData();
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
  getData: function(){
    var num = Math.ceil(Math.random()*290); 
    console.log(num)
    console.log(jsonData.dataList[num])
    this.setData({
      my_data:jsonData.dataList[num],
      num:num
    })
  }
})