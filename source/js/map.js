function initMap() {
  var mapCenter = {lat: 59.939154, lng: 30.319107};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: mapCenter
  });
  var markerPosition = {lat: 59.9387782, lng: 30.3231968};
  var marker = new google.maps.Marker({
    position: markerPosition,
    map: map
  });
}
