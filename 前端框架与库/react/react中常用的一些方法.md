### 参考
* [react中常用的一些方法](https://www.cnblogs.com/fireporsche/p/6288639.html)

1. React.createClass:
创建一个ReactClass（组件类），参数是一个对象且必须带有 render 属性方法，该方法必须返回一个封闭的容器（容器内可以有其它不限结构的容器）或 null/false（表示啥都不渲染）

 

2. React.createElement:第一个参数是DOM,第二个是属性,第三个是值;创建一个指定类型的React元素，注意第三个参数children可以是任意个React元素：
```
React.createElement( 
    'p', 
    null,
    React.createElement('span', null, 'Hello,'),
    React.createElement('span', null, 'world,'),
    React.createElement( Component, {a : 1})
)
React.createElement(type, props, children)
如:React.createElement('span', null, 'Hello,')
```

 

3. React.cloneElement:
克隆并返回一个新的 ReactElement （内部子元素也会跟着克隆），新返回的元素会保留有旧元素的 props、ref、key，也会集成新的 props（只要在第二个参数中有定义）
var newSpan = React.cloneElement(span, {b:'2'}
要注意的是，createElement 的第一个参数必须是字符串或 ReactClass，而在 cloneElement 里第一个参数应该是 ReactElement


4. React.createFactory:
返回一个某种类型的ReactElement工厂函数，可以利用返回的函数来创建一个ReactElement（配置 props 和 children
var p = React.createFactory(Component),
ReactElementP = p({a:1}),
div = React.createFactory('div'),
ReactElementDiv = div(null, ReactElementP);

 

5. React.render:
染一个 ReactElement 到 container 指定的 DOM 中，返回一个到该组件的引用。如果提供了可选的回调函数，则该函数将会在组件渲染或者更新之后调用.


6. React.PropTypes:
用于组件内部验证传入 Props 的类型，如果传入的类型不匹配，React 会打印出警告


7. React.Children:
   -   React.Children.map(object children, function fn [, object context]),遍历子元素，映射为一个新的子元素集合（跟 ES5 的 Array.map 差不多）
   -   React.Children.forEach(object children, function fn [, object context]),遍历子元素，对每一个子元素执行回调，但不像上述的 map 那样最终返回一个新的集合（跟 ES5 的 Array.forEach 差不多）
   -   React.Children.count(object children)返回子元素的总数
   -   React.Children.only(object children)返回仅有的一个子元素，否则（没有子元素或超过一个子元素）报错且不渲染任何东西：

 

8. React.initializeTouchEvents:开启或关闭 React 的触摸事件机制，传入参数 true 使 React 能处理移动设备的触摸（ touch ）事件


9. React.DOM.tag:常规是用于在非 JSX 下来创建 ReactElement，tag 表示相应的DOM类型（比如“div”、“p”）。另外首个参数可以定制相关的 DOM 属性（比如“name”），第二个参数表示 DOM 内的内容
```
var div = React.DOM.div(
        {name : 'div1'}, 
        'HELLO ', 
        React.DOM.span(null, <em>WORLD</em>)
    );
React.render(
    div, document.body
)
生成结果:
<div name="div1" data-reactid=".0">
    <span data-reactid=".0.0">HELLO</span>
    <span data-reactid=".0.1">
        <em data-reactid=".0.1.0">WORLD</em>
    </span>
</div>
```

 

10. React.isValidElement:判断参数是否一个合法的 ReactElement，并返回 Boolean 值
```
var Component = React.createClass({
    render: function() {
        return this.props.a==1 ? <p>123</p> : null
    }
});
var com = <Component/>,
com2 = '<Component/>';
console.log(React.isValidElement(com)); //true
console.log(React.isValidElement(com2)); //false
```


11. React.renderToStaticMarkup:
类似 React.renderToString ，但只生成纯粹的HTML标记字符串，不会包含类似 data-reactid 之类的React属性，从而节省字节数
```
var Component = React.createClass({
    render: function() {
        return this.props.a==1 ? <p>123</p> : null
    }
});
var com = <Component a="1" />,
comHTML = React.renderToStaticMarkup(com);
console.log(comHTML); //输出“<p>123</p>”
```




12. React.renderToString:
React为服务端提供的一个方法，可以直接输出 ReactElement 为 HTML 字符串，将这些标记发送（比如 res.write(HTMLString)）给客户端，可以获得更快的页面加载速度，并且有利于搜索引擎抓取页面，方便做 SEO（主要是百度不争气，谷歌早可以从内存中去抓最终生成的HTML内容了）
```
var Component = React.createClass({
    render: function() {
        return this.props.a==1 ? <p>123</p> : null
    }
});
var com = <Component a="1" />,
comHTML = React.renderToString(com);
console.log(comHTML); 
//输出“<p data-reactid=".0" data-react-checksum="-2122315716">123</p>”
```
13. React.Fragment 包裹标签
14. React.isValidElement 判断参数是否一个合法的 ReactElement，并返回 Boolean 值
