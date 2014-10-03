var BDW = {};

var images = $('.my-image');

BDW.fadeImages = function(fade){

	if(fade == 'in'){
		images.fadeIn(2000);
	}else{
		images.fadeOut(2000);
	}
};

$('.fade-in').click( function(){
	BDW.fadeImages('in');
} );

$('.fade-out').click( function(){
	BDW.fadeImages('out');
} );




