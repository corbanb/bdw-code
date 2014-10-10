
$.ajax({
	url: 'data/facebook.json',
	type: 'GET',
	dataType: 'json'
})
.done(function(response) {
	
	var pictures = response.me.photos.data;

	for(var i = 0; i<pictures.length; i++){

		if ( pictures[i].place ) {

			var lat = pictures[i].place.location.latitude;
			var lng = pictures[i].place.location.longitude;
			var mapsImage = "https://maps.googleapis.com/maps/api/staticmap?center=" + lat + "," + lng + "&zoom=3&size=400x400";
			var imgTag = $('<img />', { src: mapsImage }).appendTo('.fb-images');

		}else{

			var picture = pictures[i].picture;
			var imgTag = $('<img />', { src: picture }).appendTo('.fb-images');

		}

	}

});
