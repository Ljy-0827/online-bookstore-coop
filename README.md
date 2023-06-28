# online-bookstore-coop
## 前端部分开发及预览方法

- set up
```
npm install
```

- 开发预览模式（打包前）
```
npm run dev
```

- 打包
```
npm run build
```

- 打包后预览
```
npm run preview
```

## 目前已实现的内容
页面：
- 主页 HomePage
- 搜索结果页 SearchResult（前端开发时默认搜索关键词为村上春树）
- 购物车页 UserCart
- 账号页 UserAccount ！！点订单按钮显示子页
- 账号页的订单子页 UserOrder
- 订单详情页 OrderDetail

跳转时：
- 主页 http://127.0.0.1:5173（地址可能不同）
- 搜索结果页 http://127.0.0.1:5173/search_result
- 购物车页 http://127.0.0.1:5173/cart

网页内触发跳转：鼠标focus所有的搜索栏后键盘敲击enter都会跳转至搜索结果页
