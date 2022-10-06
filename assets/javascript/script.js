
// 5 day weather apiKey
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// example string =   "http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&appid=" + APIKey;
var locateButton = document.getElementById("find-me");
var searchButton = document.getElementById("search-button");
var listButtons = document.getElementsByClassName("list-group-item")

//Created a function to capture the geolocation data from the user's browser and use that for the openweather api
  function locateApi() {
    var status = document.querySelector('#status');
    var locationData = document.querySelector('#location-data');
    locationData.textContent = '';

    function success(position) {
      let latitude  = position.coords.latitude;
      let longitude = position.coords.longitude;
      let APIKey = "f54d50bfb2e404deefe09cc2818a598f";
      let queryString = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=imperial" + "&appid=" + APIKey;
  
      status.textContent = '';
      locationData.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

      fetch(queryString)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(" 'Use my location' API DATA below");
        console.log(data);
      });
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
  
 locateButton.addEventListener('click', locateApi);


 function searchApi() {
    let input = document.getElementById("search-input").value;
    let APIKey = "f54d50bfb2e404deefe09cc2818a598f";
    let searchString = "http://api.openweathermap.org/geo/1.0/direct?q=" + input + "&appid=" + APIKey;
// get local storage and set local storage to the buttons in the ul
    fetch(searchString)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("search button lat/lon below");
      console.log(data);
      console.log("LAT", data[0].lat);
      console.log("LON", data[0].lon);
      var LAT = data[0].lat;
      var LON = data[0].lon;
      fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + LAT + "&lon=" + LON + "&units=imperial" + "&appid=" + APIKey)
      .then(function (response) {
        return response.json();
      })
      .then(function(data) {
        console.log("search button weather below");
        console.log(data);
        // change text value of current city and cards
      })
    });
  }

searchButton.addEventListener('click', searchApi);



function searchedCities() {

}

listButtons.addEventListener('click', searchedCities);
