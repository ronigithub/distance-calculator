$(document).ready(function(){

	$("button").on('click', function(){
		//Find the distance
	     var distanceService = new google.maps.DistanceMatrixService();
	     distanceService.getDistanceMatrix({
	        origins: [$("#origin_autocpt").val()],
	        destinations: [$("#desti_autocpt").val()],
	        travelMode: google.maps.TravelMode.DRIVING,
	        unitSystem: google.maps.UnitSystem.METRIC,
	        durationInTraffic: false,
	        avoidHighways: false,
	        avoidTolls: false
	    },
	    function (response, status) {
	        if (status !== google.maps.DistanceMatrixStatus.OK) {
	            console.log('Error:', status);
	        } else {
	            console.log(response);
	            var distance = response.rows[0].elements[0].distance.text;
	            
	            $("#distance").text(response.rows[0].elements[0].distance.text).show();
	            // $("#duration").text(response.rows[0].elements[0].duration.text).show();
	        }
	   	});
	});
});