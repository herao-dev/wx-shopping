# 超市网购小程序

基于微信小程序的商城系统，提供商品浏览、分类检索、购物车、在线下单、订单管理等完整的线上购物体验。

## 功能模块

- **首页** — 轮播图、分类入口、新品首发、人气推荐
- **分类** — 商品分类目录，支持按分类浏览商品
- **商品详情** — 商品大图、价格、规格选择、收藏、加入购物车
- **购物车** — 商品勾选、数量修改、去结算
- **下单结算** — 地址选择、订单确认与提交
- **个人中心** — 订单管理（待付款/待发货/待收货/待评价）、收货地址、我的收藏、我的足迹
- **登录注册** — 微信登录、账号密码登录、注册、找回密码
- **搜索** — 关键字搜索、历史搜索记录

## 技术栈

- **前端**：微信小程序原生框架
- **UI 组件**：[ZanUI WeApp](https://github.com/youzan/zanui-weapp)
- **后端**：Java Spring Boot（需另行部署，见下方说明）

## 启动方式

### 1. 克隆项目

```bash
git clone https://github.com/herao-dev/wx-shopping.git
```

### 2. 使用微信开发者工具打开

1. 下载并安装 [微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
2. 打开工具，选择「导入项目」
3. 项目目录选择克隆后的 `wx-shopping` 文件夹
4. 填写你的小程序 AppID（或选择「测试号」）
5. 点击「确定」导入

### 3. 配置后端 API 地址

编辑 `config/api.js`，将 `WxApiRoot` 和 `WxImgApi` 修改为你的后端服务器地址：

```js
var WxApiRoot = 'http://你的服务器IP:8080/wx';
var WxImgApi = 'http://你的服务器IP:8080';
```

### 4. 部署后端服务

本项目依赖后端 API 服务，请配合 [litemall](https://github.com/linlinjava/litemall) 后端使用。

后端启动后，需确保以下接口可正常访问：
- 轮播图、首页分类、商品列表等首页接口
- 用户认证（登录/注册）接口
- 购物车、订单、地址管理等业务接口

### 5. 预览与调试

在微信开发者工具中点击「编译」即可预览小程序，也可点击「预览」生成二维码在手机微信中扫码体验。

## 目录结构

```
├── app.json              # 小程序全局配置
├── config/
│   └── api.js            # API 接口地址配置
├── lib/
│   └── zanui-weapp/      # ZanUI 组件库
├── pages/                # 页面目录
│   ├── index/            # 首页
│   ├── catalog/          # 分类目录
│   ├── category/         # 分类商品列表
│   ├── goods/            # 商品详情
│   ├── cart/             # 购物车
│   ├── checkout/         # 下单结算
│   ├── search/           # 搜索
│   ├── payResult/        # 支付结果
│   ├── auth/             # 登录/注册/找回密码
│   └── ucenter/          # 个人中心
├── static/               # 静态资源（图片等）
├── utils/                # 工具函数
└── project.config.json   # 微信开发者工具配置
```

## 说明

- 本项目为小程序前端部分，需配合后端 API 服务运行
- 开发环境下可在 `project.config.json` 中设置 `"urlCheck": false` 以跳过域名校验
- AppID 可在 `project.config.json` 中的 `appid` 字段修改
