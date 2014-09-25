<?php 

function doStuff() {
	echo 'More PHP can go in here.'.PHP_EOL;
}

doStuff();

function returnString() {
	$stg = 'This is a string.';
	return $stg;
}

echo returnString() . PHP_EOL;

function returnName($firstName) {
	return $firstName;
}

echo returnName('Corban') . PHP_EOL;


// Challenge: get returnName to use first and last names
// echo out your full name combined