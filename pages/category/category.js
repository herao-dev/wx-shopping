var util = require('../../utils/util.js');
var api = require('../../config/api.js');

Page({
  data: {
    imgApi:api.BaseUrl,
    id:0,
    name:'',
    CatalogList:[],
    cateid:'',
    GoodsList:[],
    text:''
  },
  onLoad: function(options) {
    // 设置标题
    wx.setNavigationBarTitle({
      title: options.name,
    })
    this.setData({
        id:options.id,
        cateid:options.cateid
    })
    console.log(this.data.cateid);
    this.getCategoryInfo()
  },
  getCategoryInfo: function() {
    util.request(api.CatalogList,{
        fatherId: this.data.id
    },'POST').then(res=>{
        this.setData({
            CatalogList:res.data,
            // cateid : res.data[0].id,
            text:res.data[0].categoryName
        })
        if (this.data.cateid==undefined) {
            this.setData({
                cateid : res.data[0].id,
            })
        }
        
        this.getGoodsList()
    })
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
  getGoodsList: function() {
    util.request(api.GoodsList,{
        productCategoryId: this.data.cateid
    },'GET').then(res=>{
        this.setData({
            GoodsList:res.data
        })
    })
  },
  goGoods(event){
    let id =event.currentTarget.dataset.id;
    wx.navigateTo({
        url: '/pages/goods/goods?id='+id
      })
  },
  onUnload: function() {
    // 页面关闭
  },
  switchCate: function(event) {
    let id = event.currentTarget.dataset.id;
    let text = event.currentTarget.dataset.text;
    this.setData({
        cateid:id,
        text:text
    })
    this.getGoodsList()
  }
})