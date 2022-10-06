
// 5 day weather apiKey
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// example string =   "http://api.openweathermap.org/geo/1.0/direct?q=" + cityInput + "&appid=" + APIKey;
var locateButton = document.getElementById("find-me");
var city = document.getElementById("list1");
var searchButton = document.getElementById("search-button");


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

    fetch(searchString)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });

    // function successSearch() {
    //   let latitude  = position.coords.latitude;
    //   let longitude = position.coords.longitude;
    //   let APIKey = "f54d50bfb2e404deefe09cc2818a598f";
    //   let newString = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=imperial" + "&appid=" + APIKey;
  
    //   fetch(newString)
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     console.log(data);
    //   });
  
    // }
  }

searchButton.addEventListener('click', searchApi);

//   Latitude /lngitude 
// Atlanta 33.748997 / -84.387985
// Chicago 41.883228 / -87.632401
// Denver 39.739235 / -104.990250
// Los Angeles 34.052235 / -118.243683
// New York City 40.712776 / -74.005974


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