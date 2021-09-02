// pages/index/index.js
const jsonData = require('../../utils/300.js');
const jsonDataSong = require('../../utils/song300.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    na_tabbar: {
      na_loading: false,
      na_show: true,
      na_animated: true,
      na_back: true,
      na_backcolor: "#fff",
      na_text: '详情',
      na_icon: '../../images/wechatHL.png'
    },
    detail_data:{},
    tabs: [],
    activeTab: 0,
    height:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.num)
    console.log(options.type)
    var detailData = jsonData.dataList[options.num];
    if(options.type == 0){
      detailData = jsonData.dataList[options.num];
    }else if(options.type == 1){
      detailData = jsonDataSong.dataList[options.num];
    }
    console.log(detailData)
    const tabs = [
      {
        title: '译文',
        desc:"原文：\r\n"+detailData.content+"\r\n\r\n译文：\r\n"+detailData.translation
      },
      {
        title: '注释',
        desc:detailData.annotation
      },
      {
        title: '赏析',
        desc:detailData.appreciation
      }
    ]
    this.setData({
      tabs:tabs,
      detail_data:jsonData.dataList[options.num],
      height:wx.getSystemInfoSync().windowHeight
    })
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

  },
  onTabClick(e) {
    const index = e.detail.index
    this.setData({ 
      activeTab: index 
    })
  },

  onChange(e) {
    const index = e.detail.index
    this.setData({ 
      activeTab: index 
    })
  }
})