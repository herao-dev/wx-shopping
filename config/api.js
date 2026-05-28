// 以下是业务服务器API地址
// 本机开发时使用
var WxApiRoot = 'http://127.0.0.1:8080/wx';
var WxImgApi = 'http://127.0.0.1:8080';

module.exports = {
  BaseUrl: WxImgApi,
  BannerUrl: WxApiRoot + '/rotationChart/getAllRotationChart',//首页轮播图
  HomeCategory: WxApiRoot + '/ProductCategory/categoryEight',//首页分类
  HomeNewGoods: WxApiRoot + '/product/stauts',//首页新品首发，人气推荐
  IndexUrl: WxApiRoot + '/home/index', //首页数据接口
  CatalogList: WxApiRoot + '/ProductCategory/catalog/index', //分类目录全部分类数据接口

  AuthLoginByWeixin: WxApiRoot + '/auth/login_by_weixin', //微信登录
  AuthLoginByAccount: WxApiRoot + '/auth/login', //账号登录
  AuthRegister: WxApiRoot + '/auth/register', //账号注册
  AuthReset: WxApiRoot + '/auth/reset', //账号密码重置
  AuthRegisterCaptcha: WxApiRoot + '/auth/regCaptcha', //验证码

  GoodsList: WxApiRoot + '/product/detailList', //获得商品列表
  GoodsCategory: WxApiRoot + '/ProductCategory/GoodsCategory', //获得分类数据
  GoodsDetail: WxApiRoot + '/product/detail', //获得商品的详情
  GoodsRecommend: WxApiRoot + '/goods/RotationChart', //人气推荐，商品首发

  CartList: WxApiRoot + '/cart/index', //获取购物车的数据
  CartAdd: WxApiRoot + '/cart/add', // 添加商品到购物车
  CartDelete: WxApiRoot + '/cart/delete', // 删除购物车的商品
  CartChecked: WxApiRoot + '/cart/checked', // 选择或取消选择商品
  CartGoodsCount: WxApiRoot + '/cart/getCartNumber', // 获取购物车商品件数

  CollectList: WxApiRoot + '/collection/getAllCollection', //收藏列表
  CollectAddOrDelete: WxApiRoot + '/collection/addCollection', //添加或取消收藏

  SearchIndex: WxApiRoot + 'search/index', //搜索关键字
  SearchResult: WxApiRoot + 'search/result', //搜索结果
  SearchHelper: WxApiRoot + 'search/helper', //搜索帮助
  SearchClearHistory: WxApiRoot + 'search/clearhistory', //搜索历史清楚

  AddressList: WxApiRoot + '/receivingAddress/getAllAddress', //收货地址列表
  AddressDetail: WxApiRoot + '/receivingAddress/details', //收货地址详情
  AddressSave: WxApiRoot + '/receivingAddress/addressEdit', //保存收货地址
  AddressDelete: WxApiRoot + '/receivingAddress/delAddress', //保存收货地址

  OrderSubmit: WxApiRoot + '/order/submit', // 提交订单
  OrderPrepay: WxApiRoot + '/order/RePayment', // 订单的预支付会话
  OrderList: WxApiRoot + '/order/getOrderMaster', //订单列表
  OrderDelete: WxApiRoot + '/order/delOrder', //删除订单
  OrderState: WxApiRoot + '/order/stateQuantity', //订单各个状态的数量
  FootprintAdd: WxApiRoot + '/footprints/addFootprints', //添加足迹
  FootprintList: WxApiRoot + '/footprints/getAllFootprints', //足迹列表
  FootprintDelete: WxApiRoot + '/footprints/delFootprints', //删除足迹

};