#### 阿里云密码：

- 连接远程：430802
- 根账号：root
- 密码：diwangtaotao@126.com

## 使用步骤

- 1、阿里云 官网登陆 dedei211 密码：darling3
- 2、选择控制台==>云服务器 ecs==>实例==>远程连接==>连接密码（430802）==>选择 wtt(身份)==>输入密码（diwangtaotao）
- 3、创建文件夹 wtt
- 4、使用远程桌面连接，输入账号 wtt 点击连接，再输入密码

## 对象存储 OSS (类似于百度云盘，10T)

- 存储空间 点击 “+”，创建一个主目录（类似于分盘，D\ E\）
- 此时会生成一个外网访问 的 Bucket 域名
- 作域名解析，点击 “域名” 目录
- 看到很多已经申请的阿里的域名
- 点击操作中的 “解析”
- 点击 “添加记录”
- 记录 类型选择--cname,主机记录--www,记录值--外网访问的 Bucket 域名

## 将项目传到对象存储上,应用以文件形式访问

- 打开对象存储 tab 项
- 新建存储空间 wtt-vue，此时生成外网可访问的 Bucket 域名（这个域名只能下载文件）
- 在 域名管理 tab 中配置域名，就是可以配置 cname 那种域名 www.familytour.cn
- 在 基础设置 中，读写权限-->公共读，静态页面-->index.html
- 在 文件管理 中将打包好的项目文件传上来，目前就是直接使用页面的文件上传功能，并且不能上传文件夹
  > 解决不能上传文件夹问题，阿里云提供了工具,https://help.aliyun.com/document_detail/61872.html
  - AccessKeyId:LTAIsIymrMRoxiO6,AccessKeySecret:Wr8Jz1b6DkPWY6coLE6Yi2jHKevIRy
- 此时打包注意要配上 publicPath 为当前存储空间对应的域名 'http://www.familytour.cn/'
- 访问 http://www.familytour.cn，页面成功显示

## 服务器安装软件

- [node](https://www.linuxidc.com/Linux/2018-05/152389.htm)
- [nginx](https://www.cnblogs.com/yzeng/p/9077619.html)

## nginx 常用操作

- 启动 nginx
- 停止 nginx -s quit
- 重载加载配置 nginx -s reload
- 查看 nginx 配置是否正确 nginx -t
- 查看 nginx 是否启动成功 ps -ef | grep nginx
- 杀掉所有 nginx 进程 killall -9 nginx
- 查看端口占用情况 lsof -i :80
- 查看开放的所有端口 netstat -tlunp
- 检查服务器对应的端口是否放开 telnet + ip + port #如: telnet 172.31.114.32 80 // #没有 telnet 命令使用：yum install telnet 安装后使用。
- 对外开放 80 端口
  - [centos7 查看端口是否开放](https://jingyan.baidu.com/article/9113f81b4713252b3214c788.html)
  - [CentOS 7 中 firewall-cmd 命令](https://www.jianshu.com/p/411274f96492)
  1. 检查 firewalld 防火墙，对外暴露的端口 iptables-save，在最下边会看到相关信息
  2. 添加端口 80： firewall-cmd --zone=public --add-port=80/tcp --permanent
  3. 重载防火墙 firewall-cmd --reload
  4. 如果此时报错，防火墙被关闭了：FirewallD is not running
  5. 打开防火墙，再执行上边命令 systemctl start firewalld.service
- 展示 CentOS7 虚拟机对外暴露的端口，实际对外暴露的端口
  1. 检查 nmap 安装情况 rpm -qa | grep nmap
  2. 使用 nmap 扫描 nmap 172.31.114.32

## 软件安装遇到的问题

- [centOS 遇到 can not allocate memory 问题](https://blog.csdn.net/ArimaKisho/article/details/81737815)

## centos 常用命令

- 删除：rm /home/test // 这种不带参数的删除方法经常会提示无法删除，因为权限不够。
- 删除：rm -r /home/test // -r 是递归的删除参数表中的目录及其子目录
- 删除：rm -rf /home/test // f 是不提示用户，删除目录下的所有文件。请注意检查路径，输成别的目录就悲剧了

* [CentOS 如何查看端口是被哪个应用/进程占用](https://www.cnblogs.com/mracale/p/5786831.html)
* [CentOS 查看进程、杀死进程、启动进程等常用命令](https://www.cnblogs.com/aipiaoborensheng/p/7676364.html)
