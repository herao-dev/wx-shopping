var util = require('../../../utils/util.js');
var api = require('../../../config/api.js');
var check = require('../../../utils/check.js');
var area = require('../../../utils/area.js');

var app = getApp();
Page({
  data: {
    imgApi:api.BaseUrl,
    address: "省份、城市、区县",
    addressDetails: "详细地址,如街道、楼盘号等",
    phone: "手机号码",
    receivingName: "姓名",
    id:''
  },
  bindinputMobile(event) {
    
  },
  bindinputName(event) {
   
  },
  bindinputAddress(event) {
    
  },
  bindIsDefault() {
   
  },
  getAddressDetail() {
    util.request(api.AddressDetail,{
        id:this.data.id
    },'GET').then(res=>{
         this.setData({
            address: res.data[0].address,
            addressDetails: res.data[0].addressDetails,
            phone: res.data[0].phone,
            receivingName: res.data[0].receivingName,
        })
    })
  },
  setRegionDoneStatus() {
   
  },
  chooseRegion() {
   
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    wx.setNavigationBarTitle({
        title: options.name,
      })
      this.setData({
        id:options.id
      })
      console.log(this.data.id);
      if (options.id !='undefined') {
        this.getAddressDetail()
      }
    
  },
  onReady: function() {

  },
  selectRegionType(event) {

  },
  cancelSelectRegion() {
   

  },
  cancelAddress() {
    
  },
  saveAddress() {
    util.request(api.AddressSave,{
        address: this.data.address,
        addressDetails: this.data.addressDetails,
        phone: this.data.phone,
        receivingName: this.data.receivingName,
        status: 1,
        userId: wx.getStorageSync('userId')
    },'POST').then(res=>{
         this.setData({
            
        })
        wx.navigateTo({
            url: '/pages/ucenter/address/address'
          })
    })
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