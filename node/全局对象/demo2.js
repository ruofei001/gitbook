global.a='a';
class Hello{
    constructor(){
        this.name='你好'
    }
    sayHello(){
        console.log(this.name)
    }
}
module.exports=Hello
