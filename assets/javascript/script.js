
// 5 day weather apiKey
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// example string =   "http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&appid=" + APIKey;
var searchButton = document.getElementById("");
var city = document.getElementById("search-input");
var APIKey = "22c565aa5c724c6f3568692f5208a088";
var latitude;
var longitude;
var queryString = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + APIKey;


//Created a function to use the Geolocation API from the user's browser
  function geoLocate() {

    const status = document.querySelector('#status');
    const locationData = document.querySelector('#location-data');

    locationData.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      locationData.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoLocate);

// function fetchLocation() {
//   fetch(queryString)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// }
// searchButton.addEventListener("click", fetchLocation);

//var newString = " api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"
// function fetchWeather() {}
