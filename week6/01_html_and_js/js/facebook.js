
$.ajax({
	url: 'data/facebook.json',
	type: 'GET',
	dataType: 'json'
})
.done(function(data) {
	
	var pictures = data.me.photos.data;
	console.log(data.me.photos);
	addAllImages(pictures)

});


function addAllImages(pictures){

	var picture = pictures[0].picture;

	var imgTag = $('<img />', { src: picture })
				.appendTo('.fb-images');

	// loop over the pictures
	// add each picture to the fb-images class
	// see js/forloop.js for example



}
