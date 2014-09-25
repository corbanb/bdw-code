<?php

$cards = ['King', 'Queen', 'Jack'];
var_dump($cards); 
// output [ 'King', 'Queen', 'Jack' ]


array_unshift($cards, 'Ace');
var_dump($cards); 
// output [ 'Ace', 'King', 'Queen', 'Jack' ]


array_push($cards, '10');
var_dump($cards); 
// output [ 'Ace', 'King', 'Queen', 'Jack', '10' ]


array_push($cards, '9', '8', '7', '6', '5', '4', '3', '2');
var_dump($cards); 
// output [ 'Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2' ]


$shuffled =shuffle($cards);
var_dump($shuffled); 
//outputs shuffled cards

// Challenge: REVERSE the $cards array