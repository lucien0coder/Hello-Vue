// {
	// let a = 10;
	// var b = 1;
	// console.log('let:'+ a)

	// for(let i=0; i<10; i++)
		// console.log(i)
// }

// console.log('var:'+ b)

var a = [];
for(var i=0; i<10; i++){
	a[i] = function(){
		console.log(i);
	}
}
console.log(i)
a[6]();