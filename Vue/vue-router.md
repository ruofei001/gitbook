# 验证的项目：vue-learn-all\client
### 配置步骤
1、安装vue-router	cnpm i vue-router -S	
2、安装按需加载插件	babel-plugin-syntax-dynamic-import	在路由使用import按需加载模块文件时安装
3、配置路由map	client\config\routes.js	相关基本配置，具体百度吧
4、配置路由router	client\config\router.js	相关基本配置，具体百度吧
5、引用router挂载到vue实例上	client\index.js	import VueRouter from 'vue-router' 
```
import createRouter from './config/router'
Vue.use(VueRouter) 
const router=createRouter();
new Vue({ router，render: h => h(App)}).$mount('#root')
```
### 使用路由
1. 路径传参	
    - /:id   通过this.$route获得
    ```
    <router-link :to="/app/123">app</router-link>
    // 组件通过this.$route.params查找相关参数
    ```

    - props: true 直接在props中获得，推荐这种方式！！！
    ```
    <router-link :to="/app/124">app</router-link>
    // 组件设置props:['id'],然后直接this.id就ok了
    ```

    - 路径+  ?ip=456这种方式
    ```
    <router-link :to="/app/123?ip=456">app</router-link>	
    获取：this.$route.query	
    ```

2. transition路由切换动画效果
```
<transition name=""fade"" title=""router提供的组件"">
      <router-view></router-view>
</transition>
// css
.fade-enter-active, .fade-leave-active {transition opacity .5s}
.fade-enter, .fade-leave-to{ opacity 0"}
```


3. 命名视图	同一个页面有多个router-view	routes.js
```
<router-view></router-view>
<router-view name='a'></router-view>
```

4. 路由跳转钩子方法	
    1. 全局index.js设置（针对全部路由切换）	
       ```
        router.beforeEach((to,from,next)=>{next()})	比如登录验证……
		router.beforeResolve((to,from,next)=>{next()})
		router.afterEach((to,from)=>{})
       ```
	2. 路由设置时使用（routes.js）	 
        ```
        beforeEnter(to,from,next){next()}	针对当前页面跳转时
        ```	
	3. 组件路由钩子	beforeRouteEnter(to,from,next){next()},	
        在next()方法之前是拿不到vue实例对象的，利用next()的回调方法
		beforeRouteUpdate(to,from,next){next()},	触发和使用场景：/app/123跳转至/app/456,就会触发该事件，但是不会再次出发mounted生命周期（watch方法可以解决但是不好）所以在此处进行数据请求合适
		beforeRouteLeave(to,from,next){next()},	离开组件时
5. 路由按需加载
6. 路由跳转	
    1. <router-link to="/app">app</router-link>	只需要跳转页面，不需要添加验证方法的情况
    2. js跳转
        ```
        this.$router.push('/home/first')
        this.$router.push({ path: '/home/first' })
        this.$router.push({ name: 'home', params: { userId: wise }})"
        ```

7. [keep-alive](https://www.cnblogs.com/sysuhanyf/p/7454530.html)