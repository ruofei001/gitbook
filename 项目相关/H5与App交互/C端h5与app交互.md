# C端H5与app交互

### 判断app
- tools.isWebView()方法判断是否在app中
- 区分淘车app、淘车二手车app，需要读取cookie中BitautoAppInfo的SOURCE值

| app  | SOURCE值 |
| ------------- | ------------- |
| 淘车  | 108  |
| 淘车二手车  | 5  |


### 分享

1. app中是否显示分享按钮，
```javascript
	<meta name="BitautoCustom" content=“ShowShare=0” />
	<meta name="BitautoCustom" content="ShowShare=1" />
```
ShowShare=0表示不显示，ShowShare=1显示；
2. 自定义分享内容
```javascript
	function customizewebcofig() {
        var json = {
            hideshare: 0,
            shareContent: '分享内容',
            shareTitle: '分享标题',
            shareurl: '分享链接',
            // 分享图片可不传，app有默认图片
            shareImg: '分享图片'
        };
        // 返回需为字符串json
        return JSON.stringify(json)
    }
```
**注意：**
	1.函数只在H5中定义，原生app监测页面加载完成后调用该函数；
	2.当分享的内容可配置时，异步获取配置内容后会与app监测页面加载完成存在时间差，可能造成原生app调用函数后获取不到返回值。
	**解决办法：** 页面渲染html由后台控制时，需要后台同学把该函数以及配置的参数值放到页面里面。


### js与native(Android/iOS)交互-JSBridge


**注意：**需native端注册（registerHandler）相应方法，进入监听状态，js才能调用该方法

1.调用方式示例：

```javascript
    jsBridge('handlerName', data, 'post', function (params) {
        // any code
    })
```

| 参数  | 解释 | 数据类型 |
| ------------- | ------------- | ------------- |
| handlerName  | 与native端约定的调用方法名  | string |
| data  | 传给native的数据参数  | any |
| post  | post表示发起调用；get表示监听调用；  | string |
| function (params) {}  | 调用或监听到交互后会调用该方法，params为native传回的数据  | function |

2.JSBridge代码：

```javascript
    ;window.jsBridge = function (name, params, type, success) { // name：约定监听名字 string;   params: 参数 any;  type: 'get' iso/android中的事件，type：'post'  h5中的事件;  success: 成功回调 function;
        var u = navigator.userAgent;
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        //注册事件监听
        function connectWebViewJavascriptBridge(callback) {
            if (window.WebViewJavascriptBridge) {
            return callback(WebViewJavascriptBridge)
            } else if (isiOS) {
            if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
            window.WVJBCallbacks = [callback];
            var WVJBIframe = document.createElement('iframe');
            WVJBIframe.style.display = 'none';
            WVJBIframe.src = 'https://__bridge_loaded__';
            document.documentElement.appendChild(WVJBIframe);
            setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
            } else {
            document.addEventListener(
                'WebViewJavascriptBridgeReady',
                function () {
                callback(WebViewJavascriptBridge)
                },
                false
            );
            }
        }
        if (name) {
            if (type === 'post') {
            connectWebViewJavascriptBridge(function (bridge) {
                bridge.callHandler(name, params, function (responseData) {
                success && success(responseData);
                });
            });
            } else if (type === 'get') {
            connectWebViewJavascriptBridge(function (bridge) {
                bridge.registerHandler(name, function (data, responseCallback) {
                responseCallback(params);
                success && success(data);
                });
            });
            }
        }
    }
```


**拓展：**可提供给native同事参考

1.Android端

- 注册监听：
```javascript
    webView.registerHandler("handlerName", new BridgeHandler() {
        @Override
        public void handler(String data, CallBackFunction function) {
            function.onCallBack("responseData");
        }
    });
```

| 参数  | 解释 |
| ------------- | ------------- |
| handlerName  | 约定的方法名称  |
| data  | web传入的数据  |
| responseData  | 回传给web的数据  |

- 发起调用：
```javascript
    webView.callHandler("handlerName", data , new CallBackFunction() {
        @Override
        public void onCallBack(String responseData) {
        }
    });
```

| 参数  | 解释 |
| ------------- | ------------- |
| handlerName  | 约定的方法名称  |
| data  | 传输给web的数据  |
| responseData  | 来自web的回传数据  |

2.iOS端

- 注册监听：
```javascript
    [self.bridge registerHandler:@"handlerName" handler:^(id data, WVJBResponseCallback responseCallback) {
    }];
```

| 参数  | 解释 |
| ------------- | ------------- |
| handlerName  | 约定的方法名称  |
| data  | web传入的数据  |
| responseData  | 回传给web的数据  |

- 发起调用：
```javascript
    [self.bridge callHandler:@"handlerName" data:data responseCallback:^(id responseData) {
    }];
```

| 参数  | 解释 |
| ------------- | ------------- |
| handlerName  | 约定的方法名称  |
| data  | 传输给web的数据  |
| responseData  | 来自web的回传数据  |
