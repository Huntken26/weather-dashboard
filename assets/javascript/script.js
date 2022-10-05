//Geocoding API
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// 5 day weather apiKey
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// example string =   "http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&appid=" + APIKey;
var searchButton = document.getElementById("search-button");
var city = document.getElementById("search-input");
var APIKey = "22c565aa5c724c6f3568692f5208a088";
var queryString =
  "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=" + APIKey;

function fetchLocation() {
  fetch(queryString)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}
searchButton.addEventListener("click", fetchLocation);

//var newString = " api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}"
// function fetchWeather() {}
