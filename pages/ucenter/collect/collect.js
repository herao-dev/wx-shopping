var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');

var app = getApp();

Page({
  data: {
    imgApi:api.BaseUrl,
    CollectList:[]
  },
  getCollectList() {
    util.request(api.CollectList,{
        limit: 10,
        page: 1,
        userId: wx.getStorageSync('userId')
    },'POST').then(res=>{
        this.setData({
            CollectList:res.data
        })
    })
  },
  goGoods(event){
    let id =event.currentTarget.dataset.id;
    wx.navigateTo({
        url: '/pages/goods/goods?id='+id
      })
  },
  onLoad: function(options) {
    this.getCollectList()
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
  openGoods(event) {

  },
  //按下事件开始  
  touchStart: function(e) {
   
  },
  //按下事件结束  
  touchEnd: function(e) {
   
  },
})