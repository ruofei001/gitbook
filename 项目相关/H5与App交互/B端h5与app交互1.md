# B端H5与app交互（一）

## 1 页面跳转

#### 1.1 HTML5跳转到原生页面

* 协议： `taoche://gopage?page=页面名称#参数`

* 示例： `taoche://gopage?page=cheliangtiaoxuan#abc=123&cde=345&efg=789`

* 说明：
    - 这里的页面名称是名称拼音全拼小写
    - 传递的参数格式是标准的URL参数格式
    - 参数与页面名称之间用# 号分割

#### 1.2 HTML5跳转到网页

* 协议：`taoche://gourl?url=网页地址?参数`

##### 1.2.1 HTML5跳转到本地网页

* 协议：`taoche://gourl?url=相对.html路径?参数`

* 示例：Html5跳转到评估信息明细页面

    `taoche://gourl?url=Html/PurchaseManage/PurchaseWorkOrderDetail.html?fldId=73&sessionid=TaocheUsedCarDealerSAAS_UserToken_Dandre&sessionKey=697c3544888346d6ab3f7f8572c0672e&userid=dandre`

* 说明：
    - url相对于Html.bundle文件夹的路径
    - 参数为标准URL参数
    - 跳转到本地HTML5页面需要传递sessionId、sessionKey、userId，特殊页面可能还需要传递其他信息，具体页面按需求具体对待

##### 1.2.2 HTML5跳转到在线网页

* 示例：跳转到淘车网`taoche://gourl?url=http://www.taoche.com`

* 说明：
    - url为完整的http或https协议的URL，可带URL参数

#### 1.3 返回上级页面

* 协议：`taoche://goback`

#### 1.4 导航栏右边自动显示保存按钮

* 协议：`taoche://gourl?url=网页地址#baocun:按钮点击后调用的js方法名`

* 示例：`taoche://gourl?url=Html/CarManage/sss.html?#baocun:save()`

* 说明：
  - “#baocun:按钮点击后调用的js方法名”是作为URL的一个参数传递的，所以当有多个URL参数时，#baocun前要加一个&连接符
  - 适用于所有网页跳转
  - 按钮点击后调用的js方法名默认为save()

#### 1.5 原生组件

* 协议：`taoche://component?component=组件名称#参数`

* 示例：`taoche://component?component=pay#type=1&localorderno=订单号`

* 说明：
  - pay: 组件名称；#type为需要的参数部分
  - 适应于所有网页调用原生组件

## 2 方法调用

#### 2.1 调用方法

* 协议：`taoche://function?function=方法名#参数`

##### 2.1.1 添加导航条右上角按钮

* 协议：`taoche://function?function=addRightBarButton&title=xxx&callback=xxx`

##### 2.1.2 判断原生导航条是否隐藏

* 协议：`taoche://function?function=isNavigationBarHidden&callback=xxx`

#### 2.2 显示提示语 会自动隐藏

* 协议：`taoche: //showtips?msg=提示内容`

#### 2.3 显示活动指示器

* 协议：`taoche: //showactive?msg=xxx`

#### 2.4 隐藏活动指示器

* 协议：`taoche: //hideactive`

#### 2.5 返回上级页面

* 协议：`taoche: //goback`

#### 2.6  打印日志

* 协议：`taoche: //log?log=xxx`


