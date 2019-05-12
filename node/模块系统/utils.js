//hello.js 
function Hello() {
    var name='lilei';
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};
module.exports = Hello;