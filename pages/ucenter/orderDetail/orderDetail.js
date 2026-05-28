var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');

Page({
  data: {
    imgApi:api.BaseUrl,
    orderNum:0,
    OrderList:[],
    orderflag:-2
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
        orderNum:options.ordernum
    })
    this.getOrderDetail()
  },
  onPullDownRefresh() {
   
  },
  expandDetail: function() {
    
  },
  goGoods(event){
    let id =event.currentTarget.dataset.id;
    wx.navigateTo({
        url: '/pages/goods/goods?id='+id
      })
  },
  getOrderDetail: function() {
    util.request(api.OrderList,{
        orderNum:this.data.orderNum
    },'POST').then(res=>{
        this.setData({
            OrderList:res.data
        })
    })
  },
  // “去付款”按钮点击效果
  payOrder: function() {
    
  },
  confirmPayment() {
  
  },
  closePayModel() {
    
  },
  repayOrder(type) {
    
  },
  // “取消订单”点击效果
  cancelOrder: function() {
    
  },
  // “取消订单并退款”点击效果
  refundOrder: function() {
   
  },
  // “删除”点击效果
  deleteOrder: function(event) {
    util.request(api.OrderDelete,{
        id:this.data.orderNum
    },'GET').then(res=>{
        wx.navigateTo({
            url: '/pages/ucenter/order/order?orderflag='+orderflag,
          })
    })
  },
  // “确认收货”点击效果
  confirmOrder: function() {
    
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  }
})