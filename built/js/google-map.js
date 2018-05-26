function initMap() {
    var uluru = {lat: 46.4485477, lng: 30.74921829};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}