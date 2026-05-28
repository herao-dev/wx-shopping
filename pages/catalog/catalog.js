var util = require('../../utils/util.js');
var api = require('../../config/api.js');

Page({
  data: {
    imgApi:api.BaseUrl,
    CatalogList1:[],
    CatalogList2:[],
    cateid:0,
    name:''
  },
  onLoad: function(options) {
    this.getCatalog()
  },
  onPullDownRefresh() {
  },
  goGoods(event){
    let id =event.currentTarget.dataset.id;
    let cateid =event.currentTarget.dataset.cateid;
    let name =this.data.name
    wx.navigateTo({
        url: '/pages/category/category?id='+id+'&&cateid='+cateid+'&&name='+name
      })
  },
  getCatalog: function() {
    util.request(api.CatalogList,{},'POST').then(res=>{
        this.setData({
            CatalogList1:res.data,
            cateid : res.data[0].id,
            name : res.data[0].categoryName
        })
        this.getCurrentCategory()
    })
    
  },
  getCurrentCategory: function(id) {

    util.request(api.CatalogList,{
        fatherId: this.data.cateid
    },'POST').then(res=>{
        this.setData({
            CatalogList2:res.data,
        })
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
  onUnload: function() {
    // 页面关闭
  },
  switchCate: function(event) {
    let id = event.currentTarget.dataset.id;
    let name = event.currentTarget.dataset.name;
    this.setData({
        cateid:id,
        name:name
    })
    this.getCurrentCategory()
  }
})