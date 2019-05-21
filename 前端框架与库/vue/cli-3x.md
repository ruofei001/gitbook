### 基于vue-cli@3.5.2开发
1. 按照官网生成项目，本机已经安装cli脚手架,[vue-cli](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)
```
vue create vue-cli-app
// 选择 default配置
cd vue-cli-app
yarn serve
```
2. 安装 [vue-router](https://router.vuejs.org/zh/installation.html)
```
npm install vue-router
```
3. 配置路由 (三步完成)
- 创建 router/index.js 路由生成器
```
// router/index.js
import Router from 'vue-router'
import Home from '../views/tabBar/home'
// 路由生成器
export default ()=>{
  return new Router({
    mode:'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      }
    ]
  })
}
```
- main.js入口文件配置路由
```
import Router from 'vue-router'
import createRouter from './router'
//注册路由
Vue.use(Router)
//生成配置路由
const router=createRouter()
new Vue({
  router,//挂载路由
  render: h => h(App),
}).$mount('#app')
```
- App.vue添加 视图容器组件 router-view
```
 <router-view></router-view>
```
4. [完善cli配置](./cli-3x详细配置.md)
5. [路由功能扩展](./vue-router.md)
6. h5组件库 [vant](https://youzan.github.io/vant/#/zh-CN/quickstart)
- 使用按需加载的组件方案