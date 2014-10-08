# Week 7

## Recap
This week we are going to take a step back and recap what we have learned over the past two weeks. And work on writing on our code from the groud up.

## Intro to Variables


### Primitive Data Types

```javascript
// Intro to Strings
var fName = 'Corban';
var lName = 'Baxter';
var name = fName + ' ' + lName; // Corban Baxter

// Intro to Numbers
var x = 5;
var y = 6.789;
var total = x + y; // 11.789

// Rounding Numbers
console.log( Math.round(20.49) ); // 20
console.log( Math.round(20.50) ); // 21

// Booleans
var isThursday = true;

if(isThursday){
	console.log('Time to learn some JS!');
}

```

### Complex Data Types

```javascript
// Intro to Arrays
var cards = ['King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3'];

cards.unshift('Ace'); // adds ace to the front
cards.push('2'); // adds the 2 to the end

// Intro to Objects

var place = {
	'city': 'Estes Park',
	'country': 'United States',
	'state': 'CO'
};

place.latitude = 40.3835302033;
place.longitude = -105.544102807;
console.log(place);

```

## Adding functionality

### Functions 
```javascript
// Intro to functions
function add(num1, num2) {
	return num1 + num2;
}

// Now add ANY two numbers together
add(4,8); // 12

```

### Loops
```javascript
var people = ['cort', 'alia', 'ashlee', 'joe', 'erin', 'dillon', 'amanda', 'danny', ' brad'];

// Intro to For Loops
for (var i = 0; i < people.length; i++) {
	var person = people[i];
	console.log(person);
};


```

## Javascript + HTML

### Adding JS to your page

```html
<html>
<head>
	<title></title>
</head>
<body>
<!-- YOUR WEBSITE -->


<!-- Include ALL Javascript at the bottom -->
<script src="//code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="js/scripts.js"></script>
</body>
</html>

```


## Intro To jQuery


### jQuery Selectors ([Docs](http://api.jquery.com/category/selectors/))

```javascript
// selects any element with class 'my-image'
$('.my-image'); 

// selects any element with ID 'my-image'
$('#my-image'); 

// fade out images
$('.my-image').fadeOut(); 

```

### AJAX ([Docs](http://api.jquery.com/jquery.ajax/))

```javascript
// Load data from JSON file
$.ajax({
	url: 'http://facebook.com/data/me.json',
	type: 'GET',
	dataType: 'json'
})
.done(function() {
	alert( "success" );
})
.fail(function() {
	alert( "error" );
})
.always(function() {
	alert( "complete" );
});

```

### JSON
```javascript
// Intro to JSON
{
	'city': 'Estes Park',
	'country': 'United States',
	'state': 'CO',
	'latitude': 40.3835302033,
	'longitude': -105.544102807
}

```


