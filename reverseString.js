// Reverse a string without using third variable using javascript .map()

let name = 'AliRaza';

name = Array.prototype.map.call(name, eachLetter => {
	return eachLetter
}).reverse().join('');
