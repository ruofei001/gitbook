### 常用设置

##### 插件安装
- [参考一](https://blog.csdn.net/shenxianhui1995/article/details/81604818)
- bookmark

##### Terminal配置成gitBash 
- terminal.integrated.shell.windows
##### 禁止读取相关文件
- 设置-->搜索files.exclude-->"Add Pattern"-->'node_modules'
##### 配置右键打开vscode
- https://blog.csdn.net/zzsan/article/details/79305952
##### 怎样支持.js、.jsx、.vue tab标签闭合
- 首选项 设置 搜索 ‘files.associations’，添加如下：
```
"files.associations": {
    "*.js": "html",
    "*.vue": "html"
}
```
##### vscode terminal 快捷键清屏
```
cmd和powershell下：cls 回车
```
##### 函数参数注释
- 1、安装插件Document This 
- 2、将光标放置于function上面，快捷键是 Ctrl+Alt+D 加 Ctrl+Alt+D
##### 在js中tab展开html
- "emmet.includeLanguages": {"javascript": "html"}
##### 自定义代码片段
- 首选项==>用户代码片段
