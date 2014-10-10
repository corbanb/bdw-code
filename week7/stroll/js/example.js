

var $scroller = $('#main ul.stroll');
var images = ['img/logo.jpg', 'img/logo2.jpg', 'img/logo3.jpg','img/logo.jpg', 'img/logo2.jpg', 'img/logo3.jpg','img/logo.jpg', 'img/logo2.jpg', 'img/logo3.jpg'];


function init(){

	stroll.bind( $scroller );

	$('.stroll-cards-btn').click(function(e){
		$scroller.removeClass();
		$scroller.addClass('stroll cards');
		clearActive();
		$(this).parent().addClass('active');
	});

	$('.stroll-curl-btn').click(function(){
		$scroller.removeClass();
		$scroller.addClass('stroll curl');
		clearActive();
		$(this).parent().addClass('active');
	});

	$('.stroll-twirl-btn').click(function(){
		$scroller.removeClass();
		$scroller.addClass('stroll twirl');
		clearActive();
		$(this).parent().addClass('active');
	});
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
}

getMyImages();

