// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
var locateButton = document.getElementById("find-me");
var searchButton = document.getElementById("search-button");
var listButtons = document.getElementsByClassName("list-group-item");

var city1 = document.getElementById("city1");
var date1 = document.getElementById("day1");
var temp1 = document.getElementById("temperature1");
var wind1 = document.getElementById("wind-speed1");
var humid1 = document.getElementById("humidity1");

var city2 = document.getElementById("city2");
var date2 = document.getElementById("day2");
var temp2 = document.getElementById("temperature2");
var wind2 = document.getElementById("wind-speed2");
var humid2 = document.getElementById("humidity2");

var city3 = document.getElementById("city3");
var date3 = document.getElementById("day3");
var temp3 = document.getElementById("temperature3");
var wind3 = document.getElementById("wind-speed3");
var humid3 = document.getElementById("humidity3");

var city4 = document.getElementById("city4");
var date4 = document.getElementById("day4");
var temp4 = document.getElementById("temperature4");
var wind4 = document.getElementById("wind-speed4");
var humid4 = document.getElementById("humidity4");

var city5 = document.getElementById("city5");
var date5 = document.getElementById("day5");
var temp5 = document.getElementById("temperature5");
var wind5 = document.getElementById("wind-speed5");
var humid5 = document.getElementById("humidity5");

//Created a function to capture the geolocation data from the user's browser and to pass that data into the openweather api
function locateApi() {
  var status = document.querySelector("#status");
  var locationData = document.querySelector("#location-data");
  locationData.textContent = "";

  function locate(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let APIKey = "f54d50bfb2e404deefe09cc2818a598f";
    let queryString =
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&units=imperial" +
      "&appid=" +
      APIKey;

    status.textContent = "";
    locationData.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;

    fetch(queryString)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(" 'Use my location' API DATA below");
        console.log(data);
        console.log(data.city.name);
        console.log(data.list[0].main.temp);
        console.log(data.list[0].wind.speed);
        console.log(data.list[0].weather[4]);
        console.log(data.list[0].main.humidity);
        var home = document.getElementById("current-city");
        var hometemp = document.getElementById("temperature");
        var homewind = document.getElementById("wind-speed");
        var homeHumidity = document.getElementById("humidity");
        home.textContent = data.city.name; //INSERT MOMENT JS
        hometemp.textContent = data.list[0].main.temp + " F";
        homewind.textContent = data.list[0].wind.speed + " MPH";
        homeHumidity.textContent = data.list[0].main.humidity;
        city1.textContent = data.city.name;
        // date1.textContent = data.list[7].dt_txt;
        temp1.textContent = data.list[7].main.temp + " F";
        wind1.textContent = data.list[7].wind.speed + " MPH";
        humid1.textContent = data.list[7].main.humidity;
        city2.textContent = data.city.name;
        date2.textContent;
        temp2.textContent = data.list[15].main.temp + " F";
        wind2.textContent = data.list[15].wind.speed + " MPH";
        humid2.textContent = data.list[15].main.humidity;
        city3.textContent = data.city.name;
        date3.textContent;
        temp3.textContent = data.list[23].main.temp + " F";
        wind3.textContent = data.list[23].wind.speed + " MPH";
        humid3.textContent = data.list[23].main.humidity;
        city4.textContent = data.city.name;
        // date1.textContent = data.list[7].dt_txt;
        temp4.textContent = data.list[31].main.temp + " F";
        wind4.textContent = data.list[31].wind.speed + " MPH";
        humid4.textContent = data.list[31].main.humidity;
        city5.textContent = data.city.name;
        date5.textContent;
        temp5.textContent = data.list[39].main.temp + " F";
        wind5.textContent = data.list[39].wind.speed + " MPH";
        humid5.textContent = data.list[39].main.humidity;
      });
  }

  function error() {
    status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    status.textContent = "Locating…";
    navigator.geolocation.getCurrentPosition(locate, error);
  }
}

locateButton.addEventListener("click", locateApi);

function searchApi() {
  let input = document.getElementById("search-input").value;
  let APIKey = "f54d50bfb2e404deefe09cc2818a598f";
  let searchString =
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
    input +
    "&appid=" +
    APIKey;

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
      fetch(
        "https://api.openweathermap.org/data/2.5/forecast?lat=" +
          LAT +
          "&lon=" +
          LON +
          "&units=imperial" +
          "&appid=" +
          APIKey
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log("search button weather below");
          console.log(data);
          console.log(data.city.name);
          console.log(data.list[0].main.temp);
          console.log(data.list[0].wind.speed);
          console.log(data.list[0].main.humidity);
          var name = document.getElementById("current-city");
          var temp = document.getElementById("temperature");
          var wind = document.getElementById("wind-speed");
          var humidity = document.getElementById("humidity");
          name.textContent = data.city.name; //INSERT MOMENT JS
          temp.textContent = data.list[0].main.temp + " F";
          wind.textContent = data.list[0].wind.speed + " MPH";
          humidity.textContent = data.list[0].main.humidity;
          city1.textContent = data.city.name;
          // date1.textContent = data.list[7].dt_txt;
          temp1.textContent = data.list[7].main.temp + " F";
          wind1.textContent = data.list[7].wind.speed + " MPH";
          humid1.textContent = data.list[7].main.humidity;
          city2.textContent = data.city.name;
          // date2.textContent = data.list[15].dt_txt;
          temp2.textContent = data.list[15].main.temp + " F";
          wind2.textContent = data.list[15].wind.speed + " MPH";
          humid2.textContent = data.list[15].main.humidity;
          city3.textContent = data.city.name;
          // date3.textContent = data.list[23].dt_txt;
          temp3.textContent = data.list[23].main.temp + " F";
          wind3.textContent = data.list[23].wind.speed + " MPH";
          humid3.textContent = data.list[23].main.humidity;
          city4.textContent = data.city.name;
          // date1.textContent = data.list[31].dt_txt;
          temp4.textContent = data.list[31].main.temp + " F";
          wind4.textContent = data.list[31].wind.speed + " MPH";
          humid4.textContent = data.list[31].main.humidity;
          city5.textContent = data.city.name;
          // date5.textContent = data.list[39].dt_txt;
          temp5.textContent = data.list[39].main.temp + " F";
          wind5.textContent = data.list[39].wind.speed + " MPH";
          humid5.textContent = data.list[39].main.humidity;
        });
    });
}

searchButton.addEventListener("click", searchApi);

// Latitude /lngitude
// Atlanta 33.748997 / -84.387985
// Chicago 41.883228 / -87.632401
// Denver 39.739235 / -104.990250
// Los Angeles 34.052235 / -118.243683
// Minneapolis 44.986656 / -93.258133
// New York City 40.712776 / -74.005974

// let currentDay = moment().format("L"); //today's date
// let weekday = moment().format('dddd'); //day of the week
//     $("#city").text(response.name);
//     $("#temp").text(`${response.main.temp} °F`);
//     $("#wind").text(`${response.wind.speed} MPH`);
// $("#hum").text(`${response.main.humidity} %`);

//     lat = response.coord.lat;
//     lon = response.coord.lon;
// function searchedCities() {

// }

// listButtons.addEventListener('click', searchedCities);
