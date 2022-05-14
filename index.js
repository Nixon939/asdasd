var player1;
var map1;
var panorama1;
var panoramaOptionsGlobal0;
var panoramaOptionsGlobal1;
var panoramaOptionsGlobal2;
var mapOptions1;
var map;
var position;
var arrayAllSegments=[
[58.13999139861917, 52.67337440069534],
[58.14019605233681, 52.67281406716135],
[58.1403468351264, 52.67257420053576],
[58.14042703334976, 52.67247561552708],
[58.1405110792562, 52.67239780432762],
[58.14059993334332, 52.67233703195605],
[58.14069049781854, 52.6722994083727],
[58.14089212585665, 52.67230613573427],
[58.14106899817907, 52.67220534563886],
[58.14099568028652, 52.67182548559956],
[58.1409573968007, 52.67150140441977],
[58.14089870704209, 52.67099032135197],
];
var indexLocation =0;
locationLat0 = 58.1399914;
locationLng0 = 52.6733744;

locationLat1 = 58.1408227;
locationLng1 = 52.6763591;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

  function initialize() {
	 
    var glazov0 = new google.maps.LatLng(arrayAllSegments[indexLocation][0],arrayAllSegments[indexLocation][1]);
	var glazov1 = new google.maps.LatLng(locationLat1, locationLng1);
    var mapOptions0 = {
      center: glazov0,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(
        document.getElementById("map_canvas"), mapOptions0);
    var panoramaOptions0 = {
      position: glazov0,
      pov: {
        heading: 34,
        pitch: 10,
        zoom: 1
      }
	};
	  var panoramaOptions1 = {
      position: glazov1,
      pov: {
        heading: 34,
        pitch: 10,
        zoom: 1
      }
    };
    var panorama = new  google.maps.StreetViewPanorama(document.getElementById("pano"),panoramaOptions0);
    map.setStreetView(panorama);
	map1 = map;
	//panoramaOptions1 = panoramaOptions;
	//mapOptions1 = mapOptions;
    panoramaOptionsGlobal0 = panoramaOptions0;
	panoramaOptionsGlobal1 = panoramaOptions1;
	panorama1=panorama;
  }
  

function onClickNext() {
	var glazov1 = new google.maps.LatLng(arrayAllSegments[indexLocation][0],arrayAllSegments[indexLocation][1]);
	var panoramaOptions1 = {
      position: glazov1,
      pov: {
        heading: 34,
        pitch: 10,
        zoom: 1
      }
    };
	
	var panorama = new  google.maps.StreetViewPanorama(document.getElementById("pano"),panoramaOptions1);
    map1.setStreetView(panorama);
	console.log("clicked button: next");
	console.log("indexLocation: "+indexLocation);
	console.log("Lng: "+arrayAllSegments[indexLocation][1]);
	console.log("Lat: "+arrayAllSegments[indexLocation][0]);
	indexLocation++;
	
	return false;
}
function onClickBack() {
	var panorama = new  google.maps.StreetViewPanorama(document.getElementById("pano"),panoramaOptionsGlobal0);
    map1.setStreetView(panorama);
	console.log("clicked button: back");
	return false;
}
function onClickSave() {
	console.log("current coordinates: "+panorama1.getPosition());
	console.log("Saving coordinates has passed!");
	return false;
}


