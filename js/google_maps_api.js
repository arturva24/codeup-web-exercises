"use strict";

(function () {
    var mapOptions = {
        zoom: 19,

        center: {
            lat: 29.5924,
            lng: -98.6159
        }
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


    var geocoder = new google.maps.Geocoder();

// geocode(request:GeocoderRequest, callback:function(Array.<GeocoderResult>, GeocoderStatus));

    var address = "15900 La Cantera Pkwy Bldg. #1, San Antonio, TX, 78256";

    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({"address": address}, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
        } else {
            alert("Geocoding was not successful - STATUS: " + status);
        }
    });

    var pfChangs = { lat: 29.5924, lng: -98.6159 };

    var marker = new google.maps.Marker({
        position: pfChangs,
        map: map
    })

    var infowindow = new google.maps.InfoWindow({
        content: "My favorite place with the Wife"
    })

    infowindow.open(map, marker);
})();
