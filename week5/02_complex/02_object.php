<?php 

// empty php object
$obj = (object) array();

$place = (object) array();
$place->city = 'Estes Park';
$place->country = 'United States';
$place->state = 'CO';
$place->zip = 80206;
$place->lakes = array('bear', 'marina', 'mary');


$place->latitude = 40.3835302033;
// CHALLENGE add a longitude of -105.544102807 to place

var_dump($place);

/* OUTPUT
{ city: 'Estes Park',
  country: 'United States',
  state: 'CO',
  zip: '80206',
  lakes: [ 'bear', 'marina', 'mary' ],
  latitude: 40.3835302033 }
*/