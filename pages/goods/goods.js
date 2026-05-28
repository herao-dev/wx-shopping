var app = getApp();
var WxParse = require('../../lib/wxParse/wxParse.js');
var util = require('../../utils/util.js');
var api = require('../../config/api.js');
var user = require('../../utils/user.js');

Page({
  data: {
    box:[{
        ds:-1
     },{
        ds:-1
     }],
    imgApi:api.BaseUrl,
    GoodsDetail:[],
    id:0,
    name:'',
    openAttr:false,
    num:1,
    a:-1,
    userHasCollect:-1,
    number: 1
  },
  handleSetting: function(e) {
    
  },
  // 获取商品信息
  getGoodsInfo: function() {
    util.request(api.GoodsDetail,{
        id:this.data.id
    },'POST').then(res=>{
        this.setData({
            GoodsDetail:res.data,
            userHasCollect:res.data.userHasCollect
        })
    })
  },

  // 规格选择
  clickSkuValue: function(event) {
   
  },
//   数量加减
jia: function(){
    // console.log()
    this.setData({
        num : this.data.num + 1
    })
},
jian: function(){
    if(this.data.num>0){
        this.setData({
            num : this.data.num - 1
        })
    }
},
active:function(event){
    this.data.box[event.currentTarget.dataset.a] = {
        ds : event.currentTarget.dataset.index
      }
    let a = event.currentTarget.dataset.a
    this.setData({
        box: this.data.box,
        a : this.data.a
    })
},
  //获取选中的规格信息
  getCheckedSpecValue: function() {
    
  },

  // 获取选中的产品（根据规格）
  getCheckedProductItem: function(key) {
    
  },

  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
        id:options.id,
        name:options.name,
    })
    this.getGoodsInfo()
    this.FootprintAdd()
  },
  onShow: function() {
    // 页面显示
  },

  getCartCount:function() {
    
  },

  //添加或是取消收藏
  addCollectOrNot: function() {
    util.request(api.CollectAddOrDelete,{
        productId: this.data.id,
        userId: wx.getStorageSync('userId')
    },'POST').then(res=>{
        this.setData({
            userHasCollect:res.data.userHasCollect
        })
    })
  },

  //立即购买（先自动加入购物车）
  addFast: function() {
    
  },

  //添加到购物车
  addToCart: function() {
    util.request(api.CartAdd,{
        specsId: "7,3",
        productId: this.data.id,
        number: this.data.number,
        userId: wx.getStorageSync('userId')
    },'POST').then(res=>{
        
    })  
  },

  cutNumber: function() {
   
  },
  addNumber: function() {
    
  },
  onHide: function() {
    // 页面隐藏

  },
  onUnload: function() {
    // 页面关闭

  },
  switchAttrPop: function() {
    this.setData({
        openAttr:true
    })
  },
  closeAttr: function() {
    this.setData({
        openAttr:false
    })
  },
  closeShare: function() {
    
  },
  openCartPage: function() {
    
  },
  concatArr: function(arr1,arr2) {

  },
  FootprintAdd: function() {
    util.request(api.FootprintAdd,{
        productId: this.data.id,
        userId: wx.getStorageSync('userId')
    },'POST').then(res=>{
        this.setData({
            
        })
    })
  },
  onReady: function() {
    // 页面渲染完成
  }

})