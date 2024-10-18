function initMap() {

    // Specify features and elements to define styles.
    var styleArray = [
        {
            "featureType": "administrative.province",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -50
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#f7f7f7"
                },
                {
                    "saturation": 10
                },
                {
                    "lightness": 76
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#f7f7f7"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#31684a"
                },
                {
                    "saturation": -40
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "color": "#3d815c"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "all",
            "stylers": [
                {
                    "invert_lightness": false
                },
                {
                    "color": "#ffffff"
                },
                {
                    "weight": 0.43
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#cbe7d7"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#31684a"
                }
            ]
        }
    ];

    var myLatLng = {lat: 43.709830, lng: 10.757094};



    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        // Apply the map style array to the map.
        styles: styleArray,
        zoom: 13
    });

    // Create a marker and set its position.
    var pin = {
        url: "/assets/img/pin.svg",
        anchor: new google.maps.Point(25,50),
        scaledSize: new google.maps.Size(30,37)
    };

    var marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        map: map,
        position: myLatLng,
        icon: pin,
        url: "https://goo.gl/maps/HxyQVUdLJU42"
    });

    google.maps.event.addListener(marker, 'click', function() {
        window.open(this.url, '_blank');
    });
}
