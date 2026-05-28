var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var user = require('../../../utils/user.js');
var app = getApp();

Page({
  data: {
    OrderState:[],
    nickname:'点击登录'
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.getOrderState()
    if (wx.getStorageSync('userId')) {
        this.setData({
            nickname:wx.getStorageSync('nickname')
        })
    }
  },
  onReady: function() {

  },
  onShow: function() {


  },
  onHide: function() {
    // 页面隐藏

  },
  onUnload: function() {
    // 页面关闭
  },
  getOrderState(){
    // OrderState
    util.request(api.OrderState,{
        userId: wx.getStorageSync('userId')
    },'GET').then(res=>{
        this.setData({
            OrderState:res.data
        })
    })
  },
  goLogin() {
    wx.navigateTo({
        url: '/pages/auth/login/login'
      })
  },
  goOrder(event) {
    let orderflag=event.currentTarget.dataset.orderflag;
    console.log(orderflag);
    if (wx.getStorageSync('userId')) {
        wx.navigateTo({
            url: '/pages/ucenter/order/order?orderflag='+orderflag,
          })
          console.log("----------"+wx.getStorageSync('userId')+"-----------");
      }else{
        wx.navigateTo({
            url: '/pages/auth/login/login'
          })
      }
  },
  goOrderIndex(e) {
   
  },
  goCollect() {
      if (wx.getStorageSync('userId')) {
        wx.navigateTo({
            url: '/pages/ucenter/collect/collect',
          })
          console.log("----------"+wx.getStorageSync('userId')+"-----------");
      }else{
        wx.navigateTo({
            url: '/pages/auth/login/login'
          })
      }
  },
  goFootprint() {
    if (wx.getStorageSync('userId')) {
        wx.navigateTo({
            url: '/pages/ucenter/footprint/footprint',
          })
          console.log("----------"+wx.getStorageSync('userId')+"-----------");
      }else{
        wx.navigateTo({
            url: '/pages/auth/login/login'
          })
      }
  },
  goAddress() {
    if (wx.getStorageSync('userId')) {
        wx.navigateTo({
            url: '/pages/ucenter/address/address',
          })
          console.log("----------"+wx.getStorageSync('userId')+"-----------");
      }else{
        wx.navigateTo({
            url: '/pages/auth/login/login'
          })
      }
  },
  bindPhoneNumber: function(e) {
   
  },
  exitLogin: function() {
    wx.setStorageSync('userId', '');
    console.log("----------"+wx.getStorageSync('userId')+"-----------");
    wx.switchTab({
        url: '/pages/ucenter/index/index'
    });
  }
})