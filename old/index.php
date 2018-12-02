<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <title>Distance Calculator</title>
    <link rel="stylesheet" href="style.css">
    <script>
      var autocomplete;
        function initialize() {
          origin_autocpt = new google.maps.places.Autocomplete(
              /** @type {HTMLInputElement} */(document.getElementById('origin_autocpt')),
              { types: ['geocode'] });
          google.maps.event.addListener(origin_autocpt, 'place_changed', function() {
          });

          desti_autocpt = new google.maps.places.Autocomplete(
              /** @type {HTMLInputElement} */(document.getElementById('desti_autocpt')),
              { types: ['geocode'] });
          google.maps.event.addListener(desti_autocpt, 'place_changed', function() {
          });
        }
            
    </script>

  </head>
<body onload="initialize()">
      <!-- location -->
      <div id="locationField">
	          <span id="distance"></span>
              <input id="origin_autocpt" placeholder="Pickup location" onFocus="geolocate()" type="text"></input><br>

              <input id="desti_autocpt" placeholder="Dropoff location" onFocus="geolocate()" type="text"></input><br>

            <button>Fair Estimate</button>
          </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCXgnq_q2NJSZrIGy25OfDpd6IYX9JOpe8&libraries=places"
         async defer></script>
	<script src="fair.js"></script>
      </body>
</html>