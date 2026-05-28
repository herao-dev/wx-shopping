var api = require('../../../config/api.js');
var util = require('../../../utils/util.js');
var check = require('../../../utils/check.js');

var app = getApp();
Page({
  data: {
    mobile: '',
    username: '',
    password: ''
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    // 页面渲染完成

  },
  onReady: function() {

  },
  onShow: function() {
    // 页面显示

  },
  onHide: function() {
    // 页面隐藏

  },
  onUnload: function() {
    // 页面关闭

  },
  startRegister: function() {
      console.log(1);
    util.request(api.AuthRegister,{
        mobile: this.data.mobile,
        name: this.data.username,
        pass: this.data.password
    },'POST').then(res=>{
         if (res.status == 200) {
          wx.navigateTo({
            url: '/pages/auth/accountLogin/accountLogin'
          });
        } else {
          wx.showModal({
            title: '错误信息',
            content: res.data.errmsg,
            showCancel: false
          });
        }
    })
  },
  sendCode: function() {
    
  },
  requestRegister: function(wxCode) {
    
  },
  bindUsernameInput: function(e) {

  },
  bindPasswordInput: function(e) {

  },
  bindConfirmPasswordInput: function(e) {

  },
  bindMobileInput: function(e) {

  },
  bindCodeInput: function(e) {

  },
  clearInput: function(e) {
    
  }
})