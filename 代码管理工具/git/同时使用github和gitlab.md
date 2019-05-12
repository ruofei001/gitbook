## [电脑同时配置github gitlab ssh](https://www.jianshu.com/p/cbb7117986d8)
#### 总体就是利用 c/用户/wangtao/.ssh/config 文件进行配置更改
- 生成 ssh ,默认使用github,单独配置gitlab (也可以反过来)
```
# 生成公钥、密钥的同时指定文件名，Gitlab使用(在.ssh文件夹下打开shell,执行下边命令)
ssh-keygen -t rsa -f id_rsa.gitlab -C "wangtaotao@taoche.com"
# 生成默认，Github使用
ssh-keygen -t rsa -C "diwangtaotao@126.com"
```
- 注意：生成密钥时不要输入密码，省的给自己找麻烦，一路回车完事
- .ssh目录下，将pub密钥上传到 Gitlab和github上
- 在 .ssh目录下创建 config文件，配置如下：
```
Host git.taoche.com
     IdentityFile ~/.ssh/id_rsa.gitlab
     User wangtaotao
```
- 配置说明，以链接:ssh://git@git.taoche.com:52000/fe/weidian.git 为例
```
Host
    它涵盖了下面一个段的配置，我们可以通过他来替代将要连接的服务器地址。
    这里可以使用任意字段或通配符。
    当ssh的时候如果服务器地址能匹配上这里Host指定的值，则Host下面指定的HostName将被作为最终的服务器地址使用，并且将使用该Host字段下面配置的所有自定义配置来覆盖默认的`/etc/ssh/ssh_config`配置信息。
Port
    自定义的端口。默认为22，可不配置
User
    自定义的用户名，默认为git，可不配置
HostName
    真正连接的服务器地址
PreferredAuthentications
    指定优先使用哪种方式验证，支持密码和秘钥验证方式
IdentityFile
    指定本次连接使用的密钥文件
```


