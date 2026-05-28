const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../utils/user.js');

//获取应用实例
const app = getApp();

Page({
    
    data: {
        imgApi:api.BaseUrl,
        img:[],
        homeimg:[],
        HomeNewGoods:[]
     },

  onShareAppMessage: function() {
   
  },
  go: function(event){
      let id =event.currentTarget.dataset.id;
      let name =event.currentTarget.dataset.name;
    wx.navigateTo({
      url: '/pages/category/category?id='+id+'&&name='+name,
    })
  },
  goto:function(event){
    let id =event.currentTarget.dataset.spid;
    let name =event.currentTarget.dataset.spname;
    wx.navigateTo({
        url: '/pages/goods/goods?id='+id+'&&name='+name,
      })
  },
  onPullDownRefresh() {
   
  },

  getBannerData: function() {
    util.request(api.BannerUrl).then(res=>{
        this.setData({
            img:res.data
        })
    })
  },

  getHomeCategoty: function() {
    util.request(api.HomeCategory).then(res=>{
        this.setData({
            homeimg:res.data
        })
    })
  },

  getHomeNewGoods: function() {
    util.request(api.HomeNewGoods).then(res=>{
        this.setData({
            HomeNewGoods:res.data
        })
    })
  },
  onLoad: function(options) {
   this.getBannerData()
   this.getHomeCategoty()
   this.getHomeNewGoods()
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