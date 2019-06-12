function Cat() {
	this.food = 'fish';
}

Cat.prototype.weight = function() {
	this.weight = "30";
}

// print
console.log(Cat);
console.log(Cat.food);