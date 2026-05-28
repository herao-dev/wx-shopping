var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');

Page({
  data: {
    imgApi:api.BaseUrl,
    OrderList:[],
    orderFlag:-2
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
        orderFlag:options.orderflag
    })
    console.log(options.orderflag);
    this.getOrderList()
  },
  getOrderList() {
    util.request(api.OrderList,{
        orderFlag: this.data.orderFlag,
        userId: wx.getStorageSync('userId')
    },'POST').then(res=>{
        this.setData({
            OrderList:res.data
        })
    })
  },
  onReachBottom() {
   
  },
  switchTab: function(event) {
        console.log(event.currentTarget.dataset.orderflag);
    this.setData({
        orderFlag:event.currentTarget.dataset.orderflag
    })
    this.getOrderList()
  },
  goOrderDetail: function(event){
      let ordernum = event.currentTarget.dataset.ordernum
      console.log("-------"+event.currentTarget.dataset.ordernum);
    wx.navigateTo({
        url: '/pages/ucenter/orderDetail/orderDetail?ordernum='+ordernum,
      })
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
    this.getOrderList();
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  }
})