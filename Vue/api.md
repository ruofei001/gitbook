new Vue()	const app = new Vue({el: '#root',template: '',data: {}})	实例化一个vue
$mount()	app.$mount('#root') 	将实例挂在到dom节点上
$data	app.text = 0 或者 app.$data.text = 0 	直接指向了data，并且能够修改页面数据
$props	app.$props	app上未定义的话就是undefined
$el	app.$el	指向了挂载的dom
$options	app.$options	new时候的各种配置项
	 app.$options.render=h=>{return h('div',{},'app.$options.render方法赋值')}	调用实例的rebder方法，重新渲染页面
$root	app.$root === app	$root指的是vue的根节点，对当前(#root元素)这肯定是为true
$children	app.$children	组件的子元素
$slots	app.$slots	插槽
$scopedSlots	app.$scopedSlots	插槽
$refs	app.$refs	dom元素
$isServer	app.$isServer	服务端渲染需要
$watch	const unwatch = app.$watch('text', (n, o) => {console.log(`${n}:${o}`)})	事件监听
		
	unwatch()	注销掉watch
$on $once $emit	app.$emit('test','啊啊啊','1111')	提交一个事件
	app.$once('test',(a,b)=>{console.log(`once${a+b}`)})	只监听一次
	app.$on('test',(a,b)=>{ console.log(a+b)})	监听事件
$forceUpdate	app.$forceUpdate()	$forceUpdate 强制更新数据（整个实例对象刷新） 类似于$apply()
$set $delete	app.$set(app.obj,'a','我是后补的')	app实例化时obj.a没有，现在补上
	app.$delete(app.obj,'a')	删除app上的数据
$nextTick	app.$nextTick(()=>{console.log('dom渲染完成啦')})	dom渲染完成事件
		
生命周期	操作	备注
beforeCreate		执行一次
created	数据操作相关	执行一次
beforeMount		执行一次
mounted	dom操作相关、数据操作相关	执行多次
beforeUpdate		执行多次
updated		执行一次
beforeDestroy		执行一次
destroyed		
		
指令	操作	备注
v-bind属性绑定	v-bind:id="a"  或者  :id="a"	属性绑定
	class="abc" :class="'active'" 	结果是class='abc active'
	style="color:red" :style="{font-size:'12px'}"	结果是style="color:red font-size:12px"
事件绑定v-on	v-on:click="" 或者 @click=""	
事件绑定-修饰符	 @click.prevent=""	阻止事件默认行为
	 @click.stop=""	防止事件冒泡
v-html	v-html="'<span>123</span>'"	
v-once		一次性绑定，数据更新不会再变化
v-text		
v-show		
v-if		
v-else-if		
v-else		
v-for	v-for="(x,i) in arr" :key="i"	
	v-for="(val,key,index) in obj" :key="key"	
v-model	"<input type=""checkbox"" :value=""1"" v-model=""arr"">
    <input type=""checkbox"" :value=""2"" v-model=""arr"">
    <input type=""checkbox"" :value=""3"" v-model=""arr"">"	获取checkbox数据，使用数组就行
		
	"<input type=""radio"" :value=""false"" v-model=""active"">  
 <input type=""radio"" :value=""true"" v-model=""active"">  "	获取radio使用普通变量就可以
		
v-cloak		解决初次加载显示{{}}
		
计算属性	操作	备注
computed		显示个数据，做个拼装啥的用他，看重的是结果，有缓存机制（依赖的变量没变是不会重新计算的）
watch		监视变量变化，去做某个动作（ajax,判断之类的），这个看重的是过程
methods		render方法执行一次就要调用一次，性能消耗大
