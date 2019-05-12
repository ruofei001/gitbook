#### 模块系统

- 引用模块
```$xslt
var http = require("http");
```
- 创建模块
```$xslt
exports.a='a'
……
module.exports=obj

//exports 和 module.exports 的使用
//如果要对外暴露属性或方法，就用 exports 就行，要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports。
```