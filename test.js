var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filteredArr = numbers.filter(function(num){
	return num > 5;
});

var str = ['hello', 'goodbye', 'stuff', 'hi', 'so'];

var filteredStr = str.filter(function(name){
	return name.length > 2;
});

var filteredStr = str.filter(filterStr);

var mapStrs = str.map(function(name){
	return "the word is: " + name;
});

var mapWords = function(name){
	console.log(name)
}

console.log(mapStrs);

var candy = [
	{ name: 'snickers', type: 'chocolate' },
	{ name: 'starburst', type: 'corn syrup' },
	{ name: 'sour patch kids', type: 'corn syrup' },
	{ name: 'herseys', type: 'chocolate' },
	{ name: 'vines', type: 'licorice' },
	{ name: 'reeses', type: 'chocolate' },
];

var filteredChoc = candy.filter(function(choc){
 	return choc.type === 'chocolate';
 });

var mapCandy = function(choc) {
	return choc.type !== 'chocolate';
};

var nameCandy = function(choc) {
	return "I love: " + c.name;
}

var myCandy = candy.filter(notChocolate).map(mapCandy)

console.log(filteredChoc);

var mapChoc = filteredChoc.map(function(n){
	console.log(n.name);
});

// this is one way to do this

// this is the other way to do it.