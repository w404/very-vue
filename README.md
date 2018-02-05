# very-vue

very-vue 是一套基于 Vue.js 的开源 UI 组件库，主要服务于 PC 界面的中后台产品。

## 安装

```bash
npm install very-vue --save
```

## 示例

一般在 webpack 入口页面 main.js 中如下配置：

```js
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Routers from './router.js';
import VeryVue from 'very-vue'; // 全局引入 very-vue 核心库
import 'very-vue/dist/very-vue.css'; // 全局引入需要单独导入样式

Vue.use(VueRouter);
Vue.use(VeryVue);

// 路由配置
const RouterConfig = {
  routes: Routers
};

const router = new VueRouter(RouterConfig);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
```

## 按需加载

借助插件[babel-plugin-import](https://github.com/ant-design/babel-plugin-import)可以实现按需加载组件，以便减少文件体积。首先安装babel-plugin-import：

```bash
npm install babel-plugin-import --save-dev
```

然后在 .babelrc 文件中配置如下代码：

```bash
{
  "plugins": [
    ["import", { "libraryName": "very-vue", "libraryDirectory": "src/components", "style": true }]
  ]
}
```

最后只需从 very-vue 引入模块即可，无需单独引入样式：

```js
// babel-plugin-import 会帮助你加载 JS 和 CSS
import { Affix } from 'very-vue';
```

上面的方式等同于下面手动引入的方式：

```js
import DatePicker from 'very-vue/src/components/affix';  // 加载 JS
import 'very-vue/src/components/affix/style';         // 加载 LESS
```
