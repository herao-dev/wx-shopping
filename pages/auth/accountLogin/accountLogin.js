var api = require('../../../config/api.js');
var util = require('../../../utils/util.js');
var user = require('../../../utils/user.js');

var app = getApp();
Page({
  data: {
    nickname:'qiudaoyu',
    pswd:'123456'
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
  goregister: function() {
    wx.navigateTo({
      url: '/pages/auth/register/register',
    })
},
  accountLogin: function() {
    util.request(api.AuthLoginByAccount,{
        nickname:this.data.nickname,
        pswd: this.data.pswd
    },'POST').then(res=>{
        if (res.status == 200) {
        this.setData({
            loginErrorCount: 0
          });
          app.globalData.hasLogin = true;
          wx.setStorage({
            key: "token",
            data: res.data.userInfo.id,
            success: function() {
              wx.switchTab({
                url: '/pages/ucenter/index/index'
              });
            }   
          });
        wx.setStorageSync('userId', res.data.userInfo.id);
        wx.setStorageSync('nickname', res.data.userInfo.nickname);
        console.log("----------"+wx.getStorageSync('userId')+"-----------");
        } else {
          this.setData({
            loginErrorCount: this.data.loginErrorCount + 1
          });
          app.globalData.hasLogin = false;
          util.showErrorToast('账户登录失败');
        }

    })
  },
  bindUsernameInput: function(e) {

  },
  bindPasswordInput: function(e) {

  },
  bindCodeInput: function(e) {

  },
  clearInput: function(e) {
    
  }
})