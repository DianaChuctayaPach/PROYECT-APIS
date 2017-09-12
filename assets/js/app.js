function initMap() {
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 5,
        center:{lat: -12.1191427, lng: -77.0349046},
        mapTypeControl:false,
        zoomControl:false,
        streetViewControl:false
    });
    var laboratoriaLima = {lat: -12.1191427, lng: -77.0349046};

    var markadorLaboratoria = new google.maps.Marker({
    position: laboratoriaLima,
    map: map
  });

function buscar() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
    }
    
  }
  document.getElementById("encuentrame").addEventListener("click",buscar);

var latitud,longitud;
var funcionExito= function(posicion) {
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;
    
}
var miUbicacion = new google.maps.Marker({
    position: {lat:latitud, lng:longitud},
    animation: google.maps.Animation.DROP,
    map: map 
});

map.setZoom(18);
map.setCenter({lat:latitud, lng:longitud});
//   alert("ubicacion encontrada");


var funcionError = function (error) {
    alert("Tenemos un problema con encontrar tu ubicación");

}
// document.getElementById("encuentrame").addEverListener("onclick",buscar);
}