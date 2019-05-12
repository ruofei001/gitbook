#### util 
##### Node.js 核心模块，提供常用函数的集合，用于弥补核心JavaScript 的功能 过于精简的不足。
```$xslt
const util = require('util');
```
##### util.inherits
- 语法
```$xslt
//实现对象间原型继承的函数
util.inherits(constructor, superConstructor)
```
- 参数
```$xslt
constructor：当前构造函数
superConstructor：继承的构造函数
```
##### util.inspect
- 语法
```$xslt
//是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出
util.inspect(object,[showHidden],[depth],[colors]) 
```
- 参数
```$xslt
object:要转换的对象
showHidden :可选参数，如果值为 true，将会输出更多隐藏信息
depth:表示最大递归的层数，如果对象很复杂，你可以指定层数以控制输出信息的多 少。如果不指定depth，默认会递归2层，指定为 null 表示将不限递归层数完整遍历对象
color : 值为 true，输出格式将会以ANSI 颜色编码，通常用于在终端显示更漂亮 的效果
```
##### 判断
```$xslt
util.isArray(object)
util.isRegExp(object)
util.isDate(object)
util.isError(object)
```
