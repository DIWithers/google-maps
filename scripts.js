var googleMapsApp = angular.module("googleMapsApp", []); //[dependencies-what your module depends on]
googleMapsApp.controller("googleMapsController", function($scope, $http) { //(brings in variables/objects your controller needs)

	// $scope.sortType = cityName; //default sort type is by index
	// $scope.sortReverse = false; //default sort order
	// $scope.searchCities = ""; //set default search/filter term

	var myLatlng = {lat: 40.0000, lng: -98.0000};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 4,
		center: myLatlng
	});

	var markers = [];

	function createMarker(city) {
		console.log(city);
		var cityLatlng = {lat: city.lat, lng: city.lon};
		var marker = new google.maps.Marker(
			{
	          position: cityLatlng,
	          map: map,
	          title: city.city
	        }
      );

	  	var infoWindow = new google.maps.InfoWindow({
          content: city.city
        });

        google.maps.event.addListener(marker, "click", function(){
        	infoWindow.open(map, marker);
        });
        markers.push(marker);
	}
	$scope.triggerClick = function(index) {
		google.maps.event.trigger(markers[index], "click");
	}

	$scope.cities = cities;
	for (var i = 0; i < $scope.cities.length; i++) {
		createMarker($scope.cities[i]);
	}
	

});