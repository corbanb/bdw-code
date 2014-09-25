'use strict';

var cards = ['King', 'Queen', 'Jack'];
console.log(cards); 
// output [ 'King', 'Queen', 'Jack' ]


cards.unshift('Ace');
console.log(cards); 
// output [ 'Ace', 'King', 'Queen', 'Jack' ]


cards.push('10');
console.log(cards); 
// output [ 'Ace', 'King', 'Queen', 'Jack', '10' ]


cards.push('9', '8', '7', '6', '5', '4', '3', '2');
console.log(cards); 
// output [ 'Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2' ]


var shuffled = shuffle(cards);
console.log(shuffled); 
//outputs shuffled cards

// Challenge: echo out each card in the array individually







/* IGNORE FOR NOW */
function shuffle(o){ 
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};