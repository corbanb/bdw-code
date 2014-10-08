
$.ajax({
	url: 'data/facebook.json',
	type: 'GET',
	dataType: 'json'
})
.done(function(response) {
	
	var pictures = response.me.photos.data;

	for(var i = 0; i<pictures.length; i++){
		var picture = pictures[i].picture;
		var imgTag = $('<img />', { src: picture }).appendTo('.fb-images');
	}

});
