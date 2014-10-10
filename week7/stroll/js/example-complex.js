

var $scroller = $('#main ul.stroll');
var images = ['img/logo.jpg', 'img/logo2.jpg', 'img/logo3.jpg','img/logo.jpg', 'img/logo2.jpg', 'img/logo3.jpg','img/logo.jpg', 'img/logo2.jpg', 'img/logo3.jpg'];


function init(){

	stroll.bind( $scroller );

	$('.stroll-cards-btn').click(callback);
	$('.stroll-curl-btn').click(callback);
	$('.stroll-twirl-btn').click(callback);
}

function callback(event){

	// find a solution to changing classes on the $scroller to match the button

	$scroller.removeClass();
	$scroller.addClass('stroll cards');
	clearActive();
	$(this).parent().addClass('active');
}

function clearActive(){
	$('.nav li').removeClass();
}

function getMyImages(){

	// Week 7 homework
	// create for loop
	// in the loop build li's and img tags
	// put images into into $scroller
	// init stroll and click handlers by calling init method

	init();
}

getMyImages();

