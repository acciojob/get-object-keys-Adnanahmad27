//your JS code here. If required.
let obj = {name : "adnan"};
Object.prototype.getKeys = function(){
	return Object.keys(this);
}