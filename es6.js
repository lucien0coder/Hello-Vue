// {
	// let a = 10;
	// var b = 1;
	// console.log('let:'+ a)

	// for(let i=0; i<10; i++)
		// console.log(i)
// }

// console.log('var:'+ b)

// var a = [];
// for(var i=0; i<10; i++){
// 	a[i] = function(){
// 		console.log(i);
// 	}
// }
// console.log(i)
// a[6]();

// console.log(foo)
// console.log(bar)

// var foo = 1;
// let bar = 2;

// if(true){
// 	tmp = 'anc';
// 	console.log(tmp)

// 	let tmp;

// 	console.log(tmp)

// 	tmp = 213;
// 	console.log(tmp)
// }

// function bar(x = y ,y = 2){
// 	return [x,y];
// }
// bar()

// var tmp = new Date()

// function f(){
// 	console.log(tmp)
// 	if(false){
// 		var tmp = 'hello world'
// 	}
// }

// f()

// var s = 'hello';

// for (var i = 0; i < s.length; i++) {
//   console.log(s[i]);
// }

// console.log(i);

// function f1() {
//   var n = 5;
//   if (true) {
//     var n = 10;
//   }
//   console.log(n); // 5
// }
// f1()

// function f() { console.log('I am outside!'); }
// (function () {
//   function f() { console.log('I am inside!'); }
//   if (false) {
//   }
//   f();
// }());
// const pi = 3.14159;
// console.log(pi)

// pi = 3;

// const foo = {}

// foo.prop = 123;
// console.log(foo.prop)

// foo = {}

var data = {a:1}

var vm = new Vue({
	data:data
})

// console.log(vm.a === data.a)
console.log('$:')
console.log(vm.$data === data)
console.log('no $:')
console.log(vm.data === data)