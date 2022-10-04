// Setup variables and query selectors
//On click event for search button
//jQuery to setup local storage for the searched cities
//Momentjs for the current date and time, convert it to the weather api?
// Ajax or fetch to get the data from OpenWeather API and target/update each section
//funcitons- search button; stringify array for total cities searched; display 5 day weather stats etc
//call the functions at the bottom 

function weatherFunction() {
  var currentDate = "";
  var currentCity = "";
  var searchInput;
  var formInput;
  var queryString;

$.ajax({
    url: requestUrl,
    method: 'GET',
  }).then(function (response) {
    console.log('AJAX Response \n-------------');
    console.log(response);
  });

  var timeNow = moment();
  $("#currentDay").text(timeNow.format("LLLL"));

  $(".btn").on("click", function citySearch(event) {
    event.preventDefault();
    location.assign();
    localStorage.setItem();
  });

  $().val(localStorage.getItem());
}

weatherFunction();