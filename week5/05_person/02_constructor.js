'use strict';

var Person = function() {

	// internal variables 
	var name = 'Corban Baxter',
		hometown = 'Highland',
		homestate = 'Kansas',
		// internal object
		parents = {
			'father': 'Keith',
			'mother': 'Julie'
		};


	// internal functions
	function getHome(){ 
			return hometown + ', ' + homestate;
		}

	function moveTo(town, state){
			hometown = town;
			homestate = state;
			return getHome();
		}

	// available to outside
	return {
		'name': name,
		'hometown': getHome,
		'move': moveTo
	}
}

var student = new Person();
console.log( student.name ); // Corban Baxter
console.log( student.code ); // undefined
console.log( student.hometown() ); // Highland, Kansas
console.log( student.move('Boulder', 'Colorado') ); // Boulder, Colorado
console.log( student.hometown() ); // Boulder, Colorado

// CHALLENGE - Find a way to get your parents name
// CHALLENGE 2 - Add code as a variable and return it to the console

