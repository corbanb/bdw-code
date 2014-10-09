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
	picture: "https://scontent-b.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/p130x130/10347499_10203592515345765_660085880117427101_n.jpg?oh=e4c6ae125f055e4f18fa0aef2217f4f4&oe=5484BD8A",
	name: "CO kids",
	place: {
		id: "113993911965687",
		name: "Coors Field",
		location: {
		city: "Denver",
		country: "United States",
		latitude: 39.756051480651,
		longitude: -104.99381385005,
		state: "CO",
		street: "2001 Blake St Unit A",
		zip: "80205-2060"
		},
	width: 720,
	height: 720,
	id: "10203592515345765",
	created_time: "2014-09-08T13:28:24+0000"
}

```

## Playtime
Let's draw - [demo](http://mrdoob.com/projects/multiuserpad/)
Motion Tracking - [Leap Motion](https://www.leapmotion.com/)
