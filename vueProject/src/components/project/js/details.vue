<template>
    <div>
        <nav-bar title="js详情"></nav-bar>
        <div class="" v-show="id == '1'">
        	js中创建函数有两种方式：函数声明式和函数字面量式。只有函数声明才存在函数提升
        	变量提升，全局作用域范围内，会把声明提到最前一行，并没有赋值
        	
        	<br />
        	有些时候需要对当前一部分进行高亮设置，可以用js来实现，手动添加一个类，并把他的兄弟的同类删除
			可以这样实现：
			$(function(){
				$('#ulist li').click(function() {
					$(this).addClass('active').siblings().removeClass('active');		
				})
			})
			
			注意！！！！！
			a、siblings() 方法返回被选元素的所有同级元素。
			b、同级元素是共享相同父元素的元素。
				在做美丽说的时候，出现一个问题，就是所要设置的部分不是来自同一个父类，也就是说不是同级元素:li之间才有同级元
			
			素，li下有个a子元素，
			所以直接写上面那段代码时，没效果。
				此时先把所有a元素的类移除，在添加
			$(function() {
							$('#ulist li a').click(function() {
								$('#ulist li a').removeClass('active');
			
								$(this).addClass('active');
							})
						})
			removeClass()方法从被选元素移除一个或多个类。
			注意：如果没有规定参数，则该方法将从被选元素中删除所有类。如需移除若干个类，请使用空格分隔类名称。

        </div>
        <div class="" v-show="id == '2'">
        	map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。(参数也是函数提供)
map() 方法按照原始数组元素顺序依次处理元素。
两者都是循环遍历数组里的每一个元素

//字符串的length属性不可写，但是数组的length属性可写

        </div>
        <div class="" v-show="id == '3'">
        	some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
some() 方法会依次执行数组的每个元素：
如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
如果没有满足条件的元素，则返回false。
注意： some() 不会对空数组进行检测。
注意： some() 不会改变原始数组。、

forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。（参数也是函数提供）  没有返回值。
<br /><br />
数组every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。
every() 方法使用指定函数检测数组中的所有元素：
如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
如果所有元素都满足条件，则返回 true。
注意： every() 不会对空数组进行检测。
注意： every() 不会改变原始数组。

        </div>
    </div>
</template>
<script>
	export default{
		data(){
			return{
				id:'',
			}
			
		},
		computed:{
//			this.id:{
//				if(id == '0'){
//					
//				}
//			}
		},
		created(){
			this.id = this.$route.params.jsId;
			console.log(this.id)
		}
	}
	
	
</script>
