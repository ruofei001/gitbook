### node文件系统
```$xslt
//引入文件模块
const fs=require("fs")
```
#### 读取文件

   - 同步读取（有阻塞）
```$xslt
const data = fs.readFileSync('模块fs.md');
console.log("同步读取文件内容: " + data.toString());
```
   - 异步读取（无阻塞）
```$xslt
fs.readFile('模块fs.md', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取文件内容: " + data.toString());
});
```
#### 打开文件
- 语法
```$xslt
fs.open(path, flags[, mode], callback)
```
- 参数
```$xslt
path - 文件的路径。
flags - 文件打开的行为。
mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
callback - 回调函数，带有两个参数如：callback(err, fd)。
```
#### 获取文件信息

- 语法(异步模式)
```$xslt
fs.stat(path, callback)
```
- 参数
```$xslt
fs.stat('./fs/input.txt', function (err, stats) {
    console.log(stats.isFile());//文件
    console.log(stats.isDirectory());//目录
    console.log(stats.isBlockDevice())//块设备
    console.log(stats.isCharacterDevice())//字符设备
    console.log(stats.isSymbolicLink());//软链接
    console.log(stats.isFIFO());//FIFO FIFO是UNIX中的一种特殊类型的命令管道。
    console.log(stats.isSocket());// Socket
})
```
#### 写入文件
- 语法(异步模式)
```$xslt
//writeFile 直接打开文件默认是 w 模式，所以如果文件存在，该方法写入的内容会覆盖旧的文件内容。
fs.writeFile(file, data[, options], callback)
```
- 参数
```$xslt
file - 文件名或文件描述符。
data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象。
options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。
```
#### 读取文件
- 语法
```$xslt
fs.read(fd, buffer, offset, length, position, callback)
```
- 参数
```$xslt
fd - 通过 fs.open() 方法返回的文件描述符。
buffer - 数据写入的缓冲区。
offset - 缓冲区写入的写入偏移量。
length - 要从文件中读取的字节数。
position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。
```
- 实例
```$xslt
//以下代码“实际效果”是截取了文件在缓冲区所设置字节长度
const buf = new Buffer.alloc(2);
fs.open('input.txt', 'r+', function(err, fd) {
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }
    });
});
```
#### 关闭文件
- 语法
```$xslt
fs.close(fd, callback)
```
- 参数
```$xslt
fd - 通过 fs.open() 方法返回的文件描述符。
```
#### 截取文件
- 语法
```$xslt
fs.ftruncate(fd, len, callback)
```
- 参数
```$xslt
fd - 通过 fs.open() 方法返回的文件描述符。
len - 文件内容截取的长度。
callback - 回调函数，没有参数。
```
#### 删除文件
- 语法
```$xslt
fs.unlink(path, callback)
```
- 参数
```$xslt
path - 文件路径。
callback - 回调函数，没有参数。
```
#### 创建目录
- 语法
```$xslt
fs.mkdir(path[, options], callback)
```
- 参数
```$xslt
path - 文件路径。
options 参数可以是：
    recursive - 是否以递归的方式创建目录，默认为 false。
    mode - 设置目录权限，默认为 0777。
callback - 回调函数，没有参数。
```
#### 读取目录
- 语法
```$xslt
fs.readdir(path, callback)
```
- 参数
```$xslt
path - 文件路径。
callback - 回调函数，回调函数带有两个参数err, files，err 为错误信息，files 为 目录下的文件数组列表。
```
#### 删除目录
- 语法
```$xslt
fs.rmdir(path, callback)
```
- 参数
```$xslt
path - 文件路径。
callback - 回调函数，没有参数。
```
注：[文件模块方法参考手册](http://www.runoob.com/nodejs/nodejs-fs.html)
