'use strict';

var Person = {
	// named values
	'name': 'Corban Baxter',
	'hometown': 'Highland',
	'homestate': 'Kansas',

	//nested object
	'parents': {
		'father': 'Keith',
		'mother': 'Julie'
	},

	// an array literal
	'code': ['javascript/js', 'php', 'ruby', 'python'],

	// function
	'getHometown': function(){ 
		return this.hometown + ', ' + this.homestate;
	}
}
console.log( Person.name );
console.log( Person.parents.mother );
console.log( Person.code );
console.log( Person.getHometown() );