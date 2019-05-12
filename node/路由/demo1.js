
var url = require("url");
const querystring = require('querystring');

var requestUrl='http://localhost:8888/start?foo=bar&hello=world';
const query=url.parse(requestUrl).query;

console.log(querystring.parse(query))