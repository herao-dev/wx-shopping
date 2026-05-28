var util = require('../../utils/util.js');
var api = require('../../config/api.js');
var user = require('../../utils/user.js');

var app = getApp();

Page({
  data: {
    imgApi:api.BaseUrl,
    CartList:[],
    id:0,
    productid:0,
    status:-1,
    isChecked:0,
    bianji:0,
    number:0,
    deleteid:[]
  },
  onLoad: function(options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.getCartList()
  },
  onReady: function() {
    // 页面渲染完成
  },
  onPullDownRefresh() {
    
  },
  onShow: function() {
    
  },
  onHide: function() {
    // 页面隐藏
  },
  onUnload: function() {
    // 页面关闭
  },
  goLogin() {
   
  },
  goGoods(event){
    let id =event.currentTarget.dataset.id;
    wx.navigateTo({
        url: '/pages/goods/goods?id='+id
      })
  },
  getCartList: function() {
    util.request(api.CartList,{
        userId: wx.getStorageSync('userId')
    },'GET').then(res=>{
        this.setData({
            CartList:res.data,
        })
        this.doCheckedAll()
    })
  },
  isCheckedAll: function() {
    
  },
  doCheckedAll: function() {
    this.setData({
        isChecked : 0
    })
    this.data.CartList.cartGoods.forEach(item=>{
        if(item.status==0){
            this.setData({
                isChecked:1
            })
        }
    })
  },
  checkedItem: function(event) {
      let id = event.currentTarget.dataset.id
      let productid= event.currentTarget.dataset.productid
      let status= event.currentTarget.dataset.status
       if (status==0) {
        // this.data.deleteid.push(deleteid)
           this.setData({
            status:1
           })
          }else{
        // this.data.deleteid.splice(deleteid)
            this.setData({
                status:0
               })
          }
      this.setData({
          id:id,
          productid:productid,
      })
    util.request(api.CartChecked,{
        id: this.data.id,
        productId: this.data.productid,
        status: this.data.status,
        userId: wx.getStorageSync('userId')
    },'POST').then(res=>{
        this.getCartList()
    })  
  },
  getCheckedGoodsCount: function() {
    
  },
  checkedAll: function() {
    if (this.data.isChecked==0) {
        this.setData({
            isChecked:1
        })
      }else{
        this.setData({
            isChecked:0
        })
      }
    util.request(api.CartChecked,{
        isChecked:this.data.isChecked,
        userId: wx.getStorageSync('userId')
    },'POST').then(res=>{
        this.getCartList()
    })  
  },
  bianji:function(){
    if (this.data.bianji==0) {
        this.setData({
            bianji:1
        })
       }else{
         this.setData({
            bianji:0
            })
       }
  },
  updateCart: function(number, id) {
    util.request(api.CartChecked,{
        id: this.data.id,
        number: this.data.number
    },'POST').then(res=>{
        this.getCartList()
    }) 
  },
  cutNumber: function(event) {
    let id = event.currentTarget.dataset.id
    let index = event.currentTarget.dataset.index
    let number = this.data.CartList.cartGoods[index].number
    this.setData({
        id:id,
        number:number-1
    })
    this.updateCart()
  },
  addNumber: function(event) {
    let id = event.currentTarget.dataset.id
    let index = event.currentTarget.dataset.index
    let number = this.data.CartList.cartGoods[index].number
    console.log(this.data.CartList.cartGoods[index].number);
    this.setData({
        id:id,
        number:number+1
    })
    this.updateCart()
  },
  checkoutOrder: function() {

  },
  deleteCart: function() {
    util.request(api.CartDelete,{
        productIds:this.data.deleteid,
    },'POST').then(res=>{
        this.getCartList()
    }) 
  }
})