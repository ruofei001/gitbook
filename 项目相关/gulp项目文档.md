# 老feprogram项目文档

### 开发环境
`
npm i
`

### 目录结构

* src 源码
	* MWeb 移动站源码
	* Web 主站源码
* html 本地开发测试页面
* mock 接口mock目录
* bin 辅助脚本

### 命令

* gulp server 本地开发服务器
* npm run dist 编译不压缩zip
* npm run release 上线包
* gulp prod-pc 主站自动构建(不再建议使用)
* gulp prod-m	移动站自动构建(不再建议使用)
* gulp prod  全部自动构建(不再建议使用)


### 测试/上线包
* npm run release(尚未commit)编译并打成[当前分支].zip压缩包, 存放目录，前端项目上一级目录release文件夹下。第一次使用如果没有release文件夹，自己建一个
* 如果已经存在同名zip文件，会自动包含该zip的文件，并加上当前未提交的文件一起重新编译打包。
* 打包后dist目录存有已经编译后的文件，供发测试使用

### server

#### 启动说明
* 默认20000端口, 使用npm run server -p 8080 来更改服务端口
* 后端web项目appsetting中StaticResourceUrl设为http://localhost:20000/Web/ 或http://localhost:20000/MWeb/
* 远端联调localhost设为本机ip

#### 实现功能
* server提供/Web及/MWeb下静态资源的访问
* scss及css随改动即时编译
* 提供接口mock功能， 支持post/get/jsonp
* 提供本地测试页面服务
* livereload

#### 说明 (以测试m站首页为例)
* 访问测试页面: 如m站首页 http://localhost/html/MWeb/home/index , m站路径开始都是/html/MWeb, pc站都是/html/Web/, 后面的路径根据html目录下页面位置而定，无需加.html后缀
* 访问接口: 接口放在mock目录下，与真实提供接口的相对路径一致, 如后端提供接口/api/test, 存放位置为mock下api目录，文件名为test.json，必须.json格式。js访问时直接写真实接口路径即可
* 编写测试页面: Web和MWeb中layout.html为外层模板，除此外的模板都无需写外层通用相关内容，跟后端模板同理。模板支持@Url.PublicStaticResource函数，静态资源可以不用写本地路径，直接用@Url.PublicStaticResource, 本地测试完后直接放到后端对应模板里提交
