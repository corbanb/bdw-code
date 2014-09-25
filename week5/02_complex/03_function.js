'use strict';

function doStuff() {
	console.log('More Javascript can go in here.');

}

doStuff();

function returnString() {
	var stg = 'This is a string.'
	return stg;
}

console.log( returnString() );

function returnName(firstName) {
	return firstName;
}

console.log( returnName('Corban') );

// Challenge: get returnName to use first and last names
// echo out your full name combined
