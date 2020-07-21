const APIKey = 'INSERT GOOGLE API KEY';

// Initialize and add the map
function initMap() {

    // The location of Uluru
    var uluru = { lat: 37.4267861, lng: -122.0806032 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 17, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
}

function main(){
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = `https://maps.googleapis.com/maps/api/js?key=${APIKey}&callback=initMap`;
    document.getElementsByTagName("body")[0].appendChild(s);
}

main()

