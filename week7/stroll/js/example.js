var $scroller = $('#main ul.stroll');

stroll.bind( $scroller );

$('.stroll-cards').click(function(){
	$scroller.removeClass();
	$scroller.addClass('stroll cards');
});

$('.stroll-curl').click(function(){
	$scroller.removeClass();
	$scroller.addClass('stroll curl');
});