#### 新建aes文件 npm init 这里高仿aes
```
{
  "name": "diwangtaotao",//这个是npm上创建的package名称，决定你将当前插件发布的名称，别人在使用时 npm i diwangtaotao -S
  "version": "1.0.4",//每次publish都要更改
  "description": "aes",//插件描述
  "main": "./dist/index.js",//别人引入 import 'diwangtaotao'时，引入的是 main 配置的文件
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config ./webpack.config.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "webpack": "^3.12.0"
  },
  "dependencies": {
    "crypto-js": "^3.1.9-1"
  }
}

```
#### 使用webpack打包
- cnpm i -D webpack@3.x
- 配置 webpack.config.js文件，设置基本配置
- 重点：libraryTarget: "commonjs2"，这个很重要，要不然require进来的是个{}
- 修改package.json 的scripts
#### 安装babel
- cnpm install -D babel-loader@7 babel-core babel-preset-env
- 配置 rules
#### 安装其他的依赖
- cnpm i -S crypto-js
