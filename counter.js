var counter = function (){
	var count = 0;
	return function(){
		return ++count;
	};
};

var c1 = counter();
c1();
c1();
console.log(c1());
var c2 = counter();

console.log(c2());
console.log(c2());
console.log(c2());
console.log(c2());
console.log(c2());
console.log(c2());
