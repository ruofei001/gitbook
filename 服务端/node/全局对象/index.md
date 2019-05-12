### 全局对象
##### golbal
```$xslt
模块1：
global.a='a';
模块2:
const module1=require('./module1.js')
console.log(global.a) // a
```
##### __filename 文件所在的绝对路径
```$xslt
console.log(__fielname);  // D:\资料\我的项目\gitbook\node\全局对象\demo1.js
```
##### dirname 表示当前执行脚本所在的目录。
```$xslt
console.log(__dirname);// D:\资料\我的项目\gitbook\node\全局对象
```
##### process 用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口
- 事件
```$xslt
process.on('exit', function(code) {//当进程准备退出时触发。
    setTimeout(function() {
        console.log("该代码不会执行");
    }, 0);
    console.log('exit:', code);
});
console.log("程序执行结束");
process.on('beforeExit', function(code) {// node退出时触发，异步事件
    //这样 node 就会继续执行（下边的代码一直执行）
    console.log('beforeExit:', code);
});
// uncaughtException 给异常添加了监视器，这样就阻止默认的操作（打印堆栈跟踪信息并退出）
process.on('uncaughtException', function(err) {
    console.log('uncaughtException:', err);
});
console.log(aaa)
```
- Process 属性
```$xslt
// 输出到终端
// process.stdout.write("Hello World!" + "\n");
// 通过参数读取
// process.argv.forEach(function(val, index, array) {
//     console.log(index + ': ' + val);
// });
// 获取执行路径
// console.log(process.execPath);
// 成员为当前 shell 的环境变量
// console.log(process.env);
// Node 的版本
// console.log(process.version) //v8.11.3
// 包含了 node 的版本和依赖
// console.log(process.versions)
// 来编译当前 node 执行文件的 javascript 配置选项的对象
// console.log(process.config)
// 当前进程的进程号
// console.log(process.pid)
// 进程名，默认值为"node"，可以自定义该值。
// console.log(process.title) // C:\Program Files\JetBrains\WebStorm 2017.1.5\bin\runnerw.exe
// 当前 CPU 的架构：'arm'、'ia32' 或者 'x64'
// console.log(process.arch) // x64
// 平台信息
// console.log(process.platform);
```

