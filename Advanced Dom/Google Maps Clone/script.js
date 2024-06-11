const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiZG9ub3Rjb25zdW1lIiwiYSI6ImNsamRwdGJmZzI3NTMza3AyNmE3cHhvNWIifQ.N2DsZR6yQZRmOSlrhFlBCw'


navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function setupMap(centerPosition){
    const map = new mapboxgl.Map({
        accessToken: MAPBOX_ACCESS_TOKEN,
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: centerPosition, // starting position [lng, lat]
        zoom: 13, // starting zoom
    });

    const navigationControls = new mapboxgl.NavigationControl()
    map.addControl(navigationControls)

    const directionControls = new MapboxDirections({
        accessToken: MAPBOX_ACCESS_TOKEN
    })
    map.addControl(directionControls, "top-left")
}

function successLocation(position){
    setupMap([position.coords.longitude, position.coords.latitude])
    console.log(position)

}

function errorLocation(){
    setupMap([-2.24, 53.48])
}