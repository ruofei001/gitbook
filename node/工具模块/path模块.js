const path=require('path');
// console.log(path.normalize('../../path模块.js')) // ..\..\path模块.js
// console.log(path.join(__dirname,'../a.js')) // D:\资料\我的项目\gitbook\node\a.js
// console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'))// D:\资料\我的项目\gitbook\node\工具模块\wwwroot\static_files\gif\image.gif
// console.log(path.resolve('../a.js'))
// console.log(path.isAbsolute(path.resolve('../a.js')))
// console.log(path.relative(__dirname,path.resolve('../a.js')))//..\a.js
// console.log(path.dirname(path.join(__dirname,'./a.js'))); // D:\资料\我的项目\gitbook\node\工具模块
// console.log(path.basename(path.resolve('./b','./a.js'))) // a.js
// console.log(path.extname(path.join(__dirname,'./a.txt'))) // .txt
// console.log(path.parse(path.join(__dirname,'./a.js')))
// { root: 'D:\\',
//     dir: 'D:\\资料\\我的项目\\gitbook\\node\\工具模块',
//     base: 'a.js',
//     ext: '.js',
//     name: 'a' }
console.log(path.format(path.parse(path.join(__dirname,'./a.js')))) //D:\资料\我的项目\gitbook\node\工具模块\a.js