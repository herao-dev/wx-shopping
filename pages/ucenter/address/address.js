var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var app = getApp();

Page({
  data: {
    imgApi:api.BaseUrl,
    AddressList:[],
    id:0
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.getAddressList()
  },
  onReady: function() {
    // 页面渲染完成
  },
  onShow: function() {
    // 页面显示
   
  },
  getAddressList() {
    util.request(api.AddressList,{
        userId: wx.getStorageSync('userId')
    },'GET').then(res=>{
        this.setData({
            AddressList:res.data
        })
    })
  },
  addressAddOrUpdate(event) {

    //返回之前，先取出上一页对象，并设置addressId
   
  },
  deleteAddress(event) {
    let id = event.currentTarget.dataset.id
    util.request(api.AddressDelete,{
        id:id
    },'GET').then(res=>{
        this.setData({
            
        })
        this.getAddressList()
    })
  },
  goaddressAdd(event){
    let name = event.currentTarget.dataset.name
    let id = event.currentTarget.dataset.id
    // console.log('-------------'+event.currentTarget.dataset.id);
    wx.navigateTo({
        url: '/pages/ucenter/addressAdd/addressAdd?name='+name+'&&id='+id ,
      })
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  }
})