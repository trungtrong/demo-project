function horse() {
	this.color = "brown";
}

horse.prototype.changeColor = function() {
	this.color = "white";
}

console.log(horse);