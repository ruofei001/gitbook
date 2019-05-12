### 事件模块
```$xslt
var events = require('events');
//继承 EventEmitter
class myEventEmitter extends events.EventEmitter{
    constructor(props){
        super(props)
    }
}
var emitter = new myEventEmitter();

function emitterNn(...arg) {
    console.log('on',arg)
}
//实例对象上自带的
emitter.on('newListener',function (...arg) {//该事件在添加新监听器时被触发
    console.log('newListener',arg)
})
emitter.on('removeListener',function (...arg) {//从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。
    console.log('removeListener',arg)
})

//自定义相关监听事件
emitter.on('someEvent',emitterNn);
emitter.once('someEvent', function(...arg) {//为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
    console.log('once', arg);
});
emitter.emit('someEvent', 1);
emitter.addListener('someEvent', function (...arg) {//为指定事件添加一个监听器到监听器数组的尾部。
    console.log('addListener',arg)
})
emitter.emit('someEvent', 2);
emitter.removeListener('someEvent',emitterNn);//移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。它接受两个参数，第一个是事件名称，第二个是回调函数名称。
emitter.emit('someEvent', 3);
console.log(emitter.listeners('someEvent'));//返回指定事件的监听器数组。
console.log(emitter.listenerCount('someEvent'))//返回指定事件的监听器数量
emitter.removeAllListeners('someEvent');//移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
emitter.emit('someEvent', 4);
emitter.emit('error');
```