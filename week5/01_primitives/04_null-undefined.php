<?php 

$nothingHere = NULL;
echo $nothingHere.PHP_EOL;

$orHere;
echo $orHere.PHP_EOL;

if(!$nothingHere && !$orHere){
	echo 'what\'s all this for?'.PHP_EOL;
}

// Challenge: check is NULL, is set, or empty
