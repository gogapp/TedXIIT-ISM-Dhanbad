jQuery(function($) {
  function init_map1() {
    var myLocation = new google.maps.LatLng(23.813722, 86.440324);
    var mapOptions = {
      center: myLocation,
      zoom: 16
    };
    var marker = new google.maps.Marker({
      position: myLocation,
      title: "Property Location"
    });
    var map = new google.maps.Map(document.getElementById("map1"),
      mapOptions);
    marker.setMap(map);
  }
  init_map1();
});
