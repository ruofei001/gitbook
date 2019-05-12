# B端H5与app交互（二）

### 1 跳转到网页 （包括离线、在线 如果是在线URL，必须包含http或https）

| 平台 | 方法名 | 备注 |
| -------- | -------- | -------- |
| JavaScript | <font color=#0f89d8>taoche://gourl?url=</font>链接地址| 可带标准URL参数 |
| iOS | <font color=#0f89d8>- jsHelper:goURL:</font> | |
| Android | jsHelper.goUrl(String url) | - |

### 2 跳转到原生页面

| 平台 | 方法名 | 备注 |
| -------- | -------- | -------- |
| JavaScript | <font color=#0f89d8>taoche://gopage?page=xxx&abc=xxx</font> | 可带标准URL参数 |
| iOS | <font color=#0f89d8>- jsHelper:goPage:query:</font>  |  |
| Android | jsHelper.goPage(String url) | - |

### 3 调用组件

| 平台 | 方法名 | 备注 |
| -------- | -------- | -------- |
| JavaScript | <font color=#0f89d8>taoche://component?component=</font>组件名或方法名&参数 | 可带标准URL参数 |
| iOS | <font color=#0f89d8>- jsHelper:goPage:query:</font>  | |
| Android | jsHelper.goPage(String url) | - |

### 4 调用方法

| 平台 | 方法名 | 备注 |
| -------- | -------- | -------- |
| JavaScript | <font color=#0f89d8>taoche://function?function=xxx&xxx</font> | 可带标准URL参数 |
| iOS | <font color=#0f89d8>- jsHelper:goPage:query:</font>  | |
| Android | 无 | - |

### 5 展示图片幻灯片

| 平台 | 方法名 | 备注 |
| -------- | -------- | -------- |
| JavaScript | <font color=#0f89d8>taoche://component</font>?component=photobrowser&images=&captions=&selectedIndex= | images和captions一一对应，如果有多个用英文&#124;分割 |
| iOS | <font color=#0f89d8>- jsHelper:goPhotoBrowserWithImageUrls:captions:selectedIndex:</font>  |  |
| Android | jsHelper.goPage(“page=photobrowser”) | - |

### 6 添加导航条右上角按钮

| 平台 | 方法名 | 备注 |
| -------- | -------- | -------- |
| JavaScript | <font color=#0f89d8>taoche://function?function=addRightBarButton&title=xxx&callback=xxx</font> |  |
| iOS | <font color=#0f89d8>- jsHelper:addRightBarButtonWithTitle:callback:</font>  | |
| Android | 无 | - |

### 7 判断原生导航条是否隐藏

| 平台 | 方法名 | 备注 |
| -------- | -------- | -------- |
| JavaScript | <font color=#0f89d8>taoche://function?function=isNavigationBarHidden&callback=xxx</font> |  |
| iOS | <font color=#0f89d8>- jsHelper:addRightBarButtonWithTitle:callback:</font>  | |
| Android | 无 | - |

### 8 显示提示语 会自动隐藏

| 平台 | 方法名 | 备注 |
| -------- | -------- | -------- |
| JavaScript | <font color=#0f89d8>taoche://showtips?msg=</font>提示内容 |  |
| iOS | <font color=#0f89d8>- jsHelper:showTips: </font>  | |
| Android | jsHelper.showTips(String url) | - |

### 9 显示活动指示器

| 平台 | 方法名 | 备注 |
| -------- | -------- | -------- |
| JavaScript | <font color=#0f89d8>taoche://showactive?msg=xxx</font> |  |
| iOS | <font color=#0f89d8>- jsHelper:showActive:</font>  | |
| Android | jsHelper.showActive (String msg) | - |

### 10 隐藏活动指示器

| 平台 | 方法名 | 备注 |
| -------- | -------- | -------- |
| JavaScript | <font color=#0f89d8>taoche://hideactive</font> |  |
| iOS | <font color=#0f89d8>- hiddenActiveForJSHelper:</font>  | |
| Android | jsHelper. hideActive () | - |

### 11 警告提示

| 平台 | 方法名 | 备注 |
| -------- | -------- | -------- |
| JavaScript | alert(content); | Js原生alert即可 |
| iOS | Webview自动处理 | |
| Android | jsHelper.alert(String content) | - |

### 12 打印日志

| 平台 | 方法名 | 备注 |
| -------- | -------- | -------- |
| JavaScript | <font color=#0f89d8>taoche://log?log=xxx</font> |  |
| iOS | <font color=#0f89d8>- jsHelper:log:</font>  | |
| Android | jsHelper.log(String content) | - |

### 13 返回上级页面

| 平台 | 方法名 | 备注 |
| -------- | -------- | -------- |
| JavaScript | <font color=#0f89d8>taoche://goback</font> |  |
| iOS | goBackForJSHelper  |  |
| Android | jsHelper.goBack() | - |

### 14 附1-组件名称及参数

<table>
   <tr>
        <td>组件名</td>
        <td>参数</td>
        <td>说明</td>
        <td>备注</td>
   </tr>
   <tr>
        <td>voice</td>
        <td>callback</td>
        <td>回调方法，接收的是语音识别后的文字</td>
        <td>语音输入</td>
   </tr>
    <tr>
        <td rowspan="3">photobrowser</td>
        <td >images</td>
        <td >图片url,多个用|分割</td>
        <td rowspan="3">图片浏览器</td>
    </tr>
    <tr>
        <td >captions</td>
        <td >图片描述,多个用|分割,与images一一对应</td>
    </tr>
    <tr>
        <td >selectedIndex</td>
        <td >当前显示第几张</td>
    </tr>
    <tr>
        <td rowspan="7">pay</td>
        <td rowspan="6">type</td>
        <td >1:微信</td>
        <td rowspan="7">支付体系</td>
    </tr>
    <tr>
        <td>2:支付宝</td>
    </tr>
    <tr>
        <td>3:积分</td>
    </tr>
    <tr>
        <td>4:银联</td>
    </tr>
    <tr>
        <td>5:applePay</td>
    </tr>
    <tr>
        <td>6:其他</td>
    </tr>
    <tr>
        <td>localorderno</td>
        <td>订单号</td>
    </tr>
</table>

### 15 附2-方法名称及参数

<table>
   <tr>
        <td>方法名</td>
        <td>参数</td>
        <td>说明</td>
        <td>备注</td>
   </tr>
   <tr>
        <td rowspan="2">addRightBarButton</td>
        <td>title</td>
        <td>按钮的标题</td>
        <td rowspan="2">添加导航条右上角按钮</td>
   </tr>
    <tr>
        <td >callback</td>
        <td >按钮点击的回调</td>
    </tr>
    <tr>
        <td >isNavigationBarHidden</td>
        <td >callback</td>
        <td >回调方法,接收true/false</td>
        <td >判断原生导航条是否隐藏</td>
    </tr>
</table>

## Cookie规范

##### cookie统一通过key-value的形式组成Map（android）/字典（iOS）的结构,域（.taoche.com），如下：

- **key: taoche-token**

   * **value(android):** 与服务器约定的token
   * **value(iOS):** 与服务器约定的token
   * **说明:** 与服务器约定的token
   * **android举例:** 14deb4c9-76b0-425d-bca2-5cf5ab5ab3f6
   * **iOS举例:** 14deb4c9-76b0-425d-bca2-5cf5ab5ab3f6

- **key: taoche-device-model**

   * **value(android):** Build.BRAND, Build.MODEL, Build.VERSION.SDK_INT, Build.VERSION.RELEASE 通过"/"拼接
   * **value(iOS):** [[UIDevice currentDevice] model], [UIDevicecurrentDevice].systemVersion 通过"/"拼接
   * **说明:** 设备型号
   * **android举例:** "Xiaomi/MIX 2/26/8.0.0"
   * **iOS举例:** "iPhone/11.3.1"

- **key: taoche-device-id**
   * **value(android):** deviceId
   * **value(iOS):** uuid
   * **说明:** 设备的唯一标示
   * **android举例:** 865736030492469
   * **iOS举例:** 89DF3737-5A9F-4EB4-938C-CC714286DF37

- **key: taoche-client**
   * **value(android):** android标识
   * **value(iOS):** iOS标识
   * **说明:** android设备还是iOS设备
   * **android举例:** "android"
   * **iOS举例:** "iphone"


- **key: taoche-app_version**
   * **value(android):** app版本号
   * **value(iOS):** app版本号
   * **说明:** app版本号
   * **android举例:** “1.5.3”
   * **iOS举例:** “1.5.3”


- **key: taoche-app-version-code**
   * **value(android):** app的versionCode
   * **value(iOS):** app的versionCode本号
   * **说明:** app的versionCode
   * **android举例:** 16
   * **iOS举例:** 16


- **key: taoche-app-channel**
   * **value(android):** app渠道
   * **value(iOS):** iOS渠道
   * **说明:** app渠道
   * **android举例:** "defult"或"xiaomi"
   * **iOS举例:** "appstore"

![](../resources/cookie-guifan.png)
* 最后将所有的key=<font color=red>TCAppIdentification</font>，value =<font color=red>{"key":"value","key":"value"...}</font>的形式拼接起来作为cookie

** 附：客户端设置cookie方法 **

iOS：

```javascript
// 添加 cookie
NSDictionary *contentDict = [NSDictionary dictionaryWithObjectsAndKeys:[CWDeviceManager currentUUID], @"taoche-device-id", [NSString stringWithFormat:@"%@ %@", [UIDevice currentDevice].model, YX_iOSVersion()], @"taoche-device-model", YX_AppVersion(), @"taoche-app_version" , @"iphone", @"taoche-client", [CWUserInfoModel shareUser].sessionId, @"taoche-token", @"appstore", @"taoche-app-channel", nil];

NSData *data = [NSJSONSerialization dataWithJSONObject:contentDict options:0 error:nil];
NSString *json = [[NSString alloc] initWithData:data encoding:NSUTF8StringEncoding];

NSDictionary *cookieDict = [NSDictionary dictionaryWithObjectsAndKeys:json, NSHTTPCookieValue, @"TCAppIdentification", NSHTTPCookieName, @"/", NSHTTPCookiePath, @".taoche.com", NSHTTPCookieDomain, [NSDate dateWithTimeIntervalSinceNow:60 * 60 * 24 * 360], NSHTTPCookieExpires, nil];

NSHTTPCookie *cookie = [NSHTTPCookie cookieWithProperties:cookieDict];
[[NSHTTPCookieStorage sharedHTTPCookieStorage] setCookie:cookie];

[_webView loadRequest:[NSURLRequest requestWithURL:_URL]];
```

Android：

```javascript
public void setCookie(String url,Account account){
    CookieSyncManager.createInstance(context);
    CookieManager cookieManager = CookieManager.getInstance();
    cookieManager.setAcceptCookie(true);
    cookieManager.removeAllCookie();

    JSONObject jsonObject = new JSONObject();
    try {
        jsonObject.put("taoche-token",account.getSessionId());
    } catch (JSONException e) {
        e.printStackTrace();
    }
    cookieManager.setCookie(url, "TCAppIdentification" + "=" + jsonObject.toString());

    //拼接起来的string
    String test  = cookieManager.getCookie(url);

    CookieSyncManager.getInstance().sync();
}
```
