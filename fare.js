$(document).ready(function(){

	$("body").on('click', '.calculate', function(){
		//Find the distance
	     var distanceService = new google.maps.DistanceMatrixService();
	     distanceService.getDistanceMatrix({
	        origins: [$("#pick_location").val()],
	        destinations: [$("#dropoff_location").val()],
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
	            var msg = ' from <b>'+ $("#pick_location").val() + '</b> To <b>' + $("#dropoff_location").val() + '</b> ';
	            $("#total_distance").html('Total distance <b>'+response.rows[0].elements[0].distance.text+'</b>'+msg).show();
	            /* $("#duration").text(response.rows[0].elements[0].duration.text).show(); */
	        }
	   	});
	});
});
