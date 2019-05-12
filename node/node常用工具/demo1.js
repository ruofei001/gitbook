var util = require('util');
function Person() {
    this.name = 'byvoid';
    this.toString = function() {
        return this.name;
    };
    this.obj={
        a:{b:'b'},
        c:'c'
    }
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));