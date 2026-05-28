var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');

var app = getApp();

Page({
  data: {
    imgApi:api.BaseUrl,
    productId: -1,
    FootprintList:[]
  },
  goGoods(event){
    let id =event.currentTarget.dataset.id;
    wx.navigateTo({
        url: '/pages/goods/goods?id='+id
      })
  },
  getFootprintList() {
    util.request(api.FootprintList,{
        limit: 10,
        page: 1,
        userId: wx.getStorageSync('userId')
    },'POST').then(res=>{
        this.setData({
            FootprintList:res.data
        })
    })
  },
  deleteAll() {
    util.request(api.FootprintDelete,{
        userId: wx.getStorageSync('userId')
    },'GET').then(res=>{
        this.setData({
            FootprintList:[]
        })
    })
  },
  onLoad: function(options) {
    this.getFootprintList()
  },
  onReachBottom() {
    
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
  //按下事件开始  
  touchStart: function(e) {
    
  },
  //按下事件结束  
  touchEnd: function(e) {
  },
})