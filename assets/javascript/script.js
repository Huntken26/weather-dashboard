// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
var locateButton = document.getElementById("find-me");
var searchButton = document.getElementById("search-button");

var list1 = document.getElementById("list1");
var list2 = document.getElementById("list2");
var list3 = document.getElementById("list3");
var list4 = document.getElementById("list4");
var list5 = document.getElementById("list5");

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
        var home = document.getElementById("current-city");
        var hometemp = document.getElementById("temperature");
        var homewind = document.getElementById("wind-speed");
        var homeHumidity = document.getElementById("humidity");
        home.textContent =
          data.city.name +
          " " +
          moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); //INSERTED MOMENT JS
        hometemp.textContent = data.list[0].main.temp + " F";
        homewind.textContent = data.list[0].wind.speed + " MPH";
        homeHumidity.textContent = data.list[0].main.humidity;
        city1.textContent = data.list[7].dt_txt;
        temp1.textContent = data.list[7].main.temp + " F";
        wind1.textContent = data.list[7].wind.speed + " MPH";
        humid1.textContent = data.list[7].main.humidity;
        city2.textContent = data.list[15].dt_txt;
        temp2.textContent = data.list[15].main.temp + " F";
        wind2.textContent = data.list[15].wind.speed + " MPH";
        humid2.textContent = data.list[15].main.humidity;
        city3.textContent = data.list[23].dt_txt;
        temp3.textContent = data.list[23].main.temp + " F";
        wind3.textContent = data.list[23].wind.speed + " MPH";
        humid3.textContent = data.list[23].main.humidity;
        city4.textContent = data.list[31].dt_txt;
        temp4.textContent = data.list[31].main.temp + " F";
        wind4.textContent = data.list[31].wind.speed + " MPH";
        humid4.textContent = data.list[31].main.humidity;
        city5.textContent = data.list[39].dt_txt;
        temp5.textContent = data.list[39].main.temp + " F";
        wind5.textContent = data.list[39].wind.speed + " MPH";
        humid5.textContent = data.list[39].main.humidity;
      });
  }
  //Used example geolocation api from https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
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
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
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
          var name = document.getElementById("current-city");
          var temp = document.getElementById("temperature");
          var wind = document.getElementById("wind-speed");
          var humidity = document.getElementById("humidity");
          name.textContent =
            data.city.name +
            " " +
            moment().format("dddd, MMMM Do YYYY, h:mm:ss a"); //INSERT MOMENT JS
          temp.textContent = data.list[0].main.temp + " F";
          wind.textContent = data.list[0].wind.speed + " MPH";
          humidity.textContent = data.list[0].main.humidity;
          city1.textContent = data.list[7].dt_txt;
          temp1.textContent = data.list[7].main.temp + " F";
          wind1.textContent = data.list[7].wind.speed + " MPH";
          humid1.textContent = data.list[7].main.humidity;
          city2.textContent = data.list[15].dt_txt;
          temp2.textContent = data.list[15].main.temp + " F";
          wind2.textContent = data.list[15].wind.speed + " MPH";
          humid2.textContent = data.list[15].main.humidity;
          city3.textContent = data.list[23].dt_txt;
          temp3.textContent = data.list[23].main.temp + " F";
          wind3.textContent = data.list[23].wind.speed + " MPH";
          humid3.textContent = data.list[23].main.humidity;
          city4.textContent = data.list[31].dt_txt;
          temp4.textContent = data.list[31].main.temp + " F";
          wind4.textContent = data.list[31].wind.speed + " MPH";
          humid4.textContent = data.list[31].main.humidity;
          city5.textContent = data.list[39].dt_txt;
          temp5.textContent = data.list[39].main.temp + " F";
          wind5.textContent = data.list[39].wind.speed + " MPH";
          humid5.textContent = data.list[39].main.humidity;
        });
    });
}

searchButton.addEventListener("click", searchApi);
