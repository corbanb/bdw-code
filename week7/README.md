# Week 7

## Recap
This week we are going to take a step back and recap what we have learned over the past two weeks. And work on writing on our code from the groud up.

## Simple Data Types

#### Strings
```javascript
var fName = 'Corban';
var lName = 'Baxter';
var name = fName + ' ' + lName; // Corban Baxter
```

#### Numbers
```javascript
var x = 5;
var y = 6.789;
var total = x + y; // 11.789

Math.round(20.49); // 20
Math.round(20.50); // 21
```

#### Booleans
```javascript
var isThursday = true;

if(isThursday){
	console.log('Time to learn some JS!');
}

```

## Complex Data Types

#### Arrays
```javascript
var cards = ['King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3'];

cards.unshift('Ace'); // adds ace to the front
cards.push('2'); // adds the 2 to the end
```

#### Objects
```javascript
var place = {
	'city': 'Estes Park',
	'country': 'United States',
	'state': 'CO'
};

//easily add new properties to the object
place.latitude = 40.3835302033;
place.longitude = -105.544102807;

```

## Adding functionality

#### Functions 
```javascript
function add(num1, num2) {
	return num1 + num2;
}

// Now add ANY two numbers together
add(4,8); // 12

```

#### Loops
```javascript
var people = ['cort', 'alia', 'ashlee', 'joe', 'erin', 'dillon', 'amanda', 'danny', ' brad'];

// Intro to For Loops
for (var i = 0; i < people.length; i++) {
	var person = people[i];
	console.log(person);
};


```

## Javascript + HTML

#### Adding JS to your HTML

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


#### jQuery Selectors ([Docs](http://api.jquery.com/category/selectors/))

```javascript
// selects any element with class 'my-image'
$('.my-image'); 

// selects any element with ID 'my-image'
$('#my-image'); 

// fade out images
$('.my-image').fadeOut(); 

```

#### AJAX ([Docs](http://api.jquery.com/jquery.ajax/))


```javascript
$.ajax({
	url: 'http://www.myapifilms.com/imdb?title=Airplane!',
	type: 'GET',
	dataType: 'json'
})
.done(function(data) {
	alert( "success" );
})
.fail(function(jqXHR, textStatus, error) {
	alert( "error" );
})
.always(function() {
	alert( "complete" );
});

```

## The JSON Data type

#### JSON
```javascript
{
	'city': 'Estes Park',
	'country': 'United States',
	'state': 'CO',
	'latitude': 40.3835302033,
	'longitude': -105.544102807
}

```

## Playtime
Let's draw - [demo](http://mrdoob.com/projects/multiuserpad/)
