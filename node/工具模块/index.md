#### path 模块提供了一些用于处理文件路径的小工具
- path.normalize(p)
```$xslt
path.normalize('../../path模块.js') // ..\..\path模块.js
```
- path.join([path1][, path2][, ...])
```$xslt
//用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。
path.join(__dirname,'../a.js') // D:\资料\我的项目\gitbook\node\a.js
```
- 	path.resolve([from ...], to)
```$xslt
//将 to 参数解析为绝对路径，给定的路径的序列是从右往左被处理的，后面每个 path 被依次解析，直到构造完成一个绝对路径
path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
//D:\资料\我的项目\gitbook\node\工具模块\wwwroot\static_files\gif\image.gif
```
- path.isAbsolute(path)
```$xslt
//判断参数 path 是否是绝对路径。
path.isAbsolute(path.resolve('../a.js')) //true
```
- path.relative(from, to)
```$xslt
//用于将绝对路径转为相对路径，返回从 from 到 to 的相对路径（基于当前工作目录）
path.relative(__dirname,path.resolve('../a.js')) // ..\a.js
```
- path.dirname(p)
```$xslt
//返回路径中代表文件夹的部分，同 Unix 的dirname 命令类似。
path.dirname(path.join(__dirname,'./a.js')) // D:\资料\我的项目\gitbook\node\工具模块
```
- path.basename(p[, ext])
```$xslt
//返回路径中的最后一部分。同 Unix 命令 bashname 类似
path.basename(path.resolve('./b','./a.js')) // a.js
```
- 	path.extname(p)
```$xslt
// 返回路径中文件的后缀名，即路径中最后一个'.'之后的部分,没有返回空字符串
console.log(path.extname(path.join(__dirname,'./a.txt'))) // .txt
```
- path.parse(pathString)
```$xslt
// 返回路径字符串的对象。
path.parse(path.join(__dirname,'./a.js'))
// { root: 'D:\\',
//     dir: 'D:\\资料\\我的项目\\gitbook\\node\\工具模块',
//     base: 'a.js',
//     ext: '.js',
//     name: 'a' }
```
- 	path.format(pathObject)
```$xslt
// 从对象中返回路径字符串，和 path.parse 相反。
path.format(path.parse(path.join(__dirname,'./a.js'))) //D:\资料\我的项目\gitbook\node\工具模块\a.js
```