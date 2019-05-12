### 路由
### 相关模块
- url、querystring
```$xslt
const url = require("url");
const querystring = require('querystring');
const requestUrl='http://localhost:8888/start?foo=bar&hello=world';
const query=url.parse(requestUrl).query;
// url.parse == window.location
console.log(querystring.parse(query)) // { foo: 'bar', hello: 'world' }
```