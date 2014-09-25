'use strict';

// empty javascript object
var obj = {};

var place = {
	'city': 'Estes Park',
	'country': 'United States',
	'state': 'CO',
	'zip': 80206,
	'lakes': ['bear', 'marina', 'mary']
};

place.latitude = 40.3835302033;
// CHALLENGE add a longitude of -105.544102807 to place

console.log(place);

/* OUTPUT
{ city: 'Estes Park',
  country: 'United States',
  state: 'CO',
  zip: '80206',
  lakes: [ 'bear', 'marina', 'mary' ],
  latitude: 40.3835302033 }
*/