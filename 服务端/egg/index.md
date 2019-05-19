>注意事项：
1. 项目dev启动时，数据库必须是可连接的

>学习过程
#### 一、先按照[快速开始](https://eggjs.org/zh-cn/intro/quickstart.html)撸一遍
#### 二、安装mysql
- 按照菜鸟教程安装mysql数据库
```
port:3306
密码：123456（:tIKlS>y<3Dq）
安装路径：C:\\mysql 
```
- 以管理员身份打开mysql/bin文件，执行相关命令 
```
//mysql启动
net start mysql
//mysql关闭
net stop mysql
//登录
mysql -u root -p
//输入密码：
:tIKlS>y<3Dq
//输入其他命令报错
ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.
//解决：修改密码
mysql> alter user user() identified by "123456";  
//退出登录
exit 或 quit 

```
#### [Sequelize](https://eggjs.org/zh-cn/tutorials/sequelize.html),[官网](https://sequelize.readthedocs.io/en/latest/)
- 配置plugin.js时报错：
```
ERROR 3116 nodejs.SequelizeAccessDeniedError: Access denied for user 'root'@'localhost' (using password: NO)
//解决:没有设置用户名和密码，链接错误导致
//myEgg\config\config.default.js
exports.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'development',
    username: 'root',
    password: '123456',
  };
```
- 走不通啦（毁在 单元测试 第一步）,先不写测试代码
```
//没办法，只能先更改myEgg\database\config.json配置，在development环境中初始化test数据库
"development": {
    <!-- "database": "development", -->
    "database": "test",
  },
```
- 使用Sequelize，增删改查
- 查询：分页，模糊查询，区间查询，排序，过滤字段，转换字段
```
myEgg\app\controller\users.js
myEgg\app\model\user.js
```
#### [实现 RESTful API](https://eggjs.org/zh-cn/tutorials/restful.html)
#### 鉴权

