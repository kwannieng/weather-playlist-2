let APIKey = "1673070f077419daf583240cb1a971fe";
let searchCity ="";


$("#search-button").onclick(function(event) {
  event.preventDefault()
  searchCity = $("#search-input").val().trim()
  console.log(searchCity)
getResponse()
saveToHistory()
})


function getResponse() {
  let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + "&appid=" + APIKey;
  $.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
      // Log the queryURL
    console.log(queryURL);
      // Log the resulting object
    console.log(response);
      // Log the data in the console as well
    console.log(response.list[0].wind.speed);
    console.log(response.list[0].main.temp);
    console.log(response.list[0].main.humidity);

//Get Today Weather info from API
let dDiv0 = $("<div>")

//create the icon url and get the icon code from api response
let iconCode = response.list[0].weather[0].icon;
let iconURL = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png";
let weatherIcon = $("<img>").attr("src", "").addClass("icon");
weatherIcon.attr('src', iconURL);
let cityName = $("<h2>").text(searchCity +" (" + todayDate +")")
let tempC = response.list[0].main.temp - 273.15;
let todayTemp = $("<p>").text("Temperature: " + tempC.toFixed(2) + "°C" )
let todayWind = $("<p>").text("Wind Speed: " + response.list[0].wind.speed + "meter/sec")
let todayHumidty = $("<p>").text("Humidity: " + response.list[0].main.humidity + "%")

$("#today").css("border","solid 1px")
$("#today").css("padding","5px")
$("#today").empty().append(dDiv0)
dDiv0.append(cityName)
dDiv0.append(weatherIcon)
dDiv0.append(todayTemp)
dDiv0.append(todayWind)
dDiv0.append(todayHumidty)


let forecastheading = $("<h4>").text("5-Day Forecst:").addClass("col-md-12")


let dDiv1 = $("<p>").addClass("futureD day-1 col-md-2")
let dDiv2 = $("<p>").addClass("futureD day-2 col-md-2")
let dDiv3 = $("<p>").addClass("futureD day-3 col-md-2")
let dDiv4 = $("<p>").addClass("futureD day-4 col-md-2")
let dDiv5 = $("<p>").addClass("futureD day-5 col-md-2")


let F5D = $("<div>").addClass("container-fluid")
let forecastRow = $("<div>").addClass("row")

$("#forecast").empty().append(F5D)

F5D.append(forecastheading)
F5D.append(forecastRow)

forecastRow.append(dDiv1)
forecastRow.append(dDiv2)
forecastRow.append(dDiv3)
forecastRow.append(dDiv4)
forecastRow.append(dDiv5)


//1st day forecast
let fDate1 = $("<h6>").text(moment().add(1,'days').format("DD/MM/YYYY"))
dDiv1.append(fDate1)



let fIconCode1 = response.list[1].weather[0].icon
  console.log(fIconCode1)

  let fIconURL1 = "https://openweathermap.org/img/wn/" + fIconCode1 + "@2x.png";
  let fWeatherIcon1 = $("<img>").attr("src", "").addClass("icon");
  fWeatherIcon1.attr('src', fIconURL1);

  let fTempC1 = response.list[1].main.temp - 273.15;
  let fTemp1 = $("<p>").text("Temp: " + fTempC1.toFixed(2) + "°C" )
  let fWind1 = $("<p>").text("Wind: " + response.list[1].wind.speed + "meter/sec")
  let fHumidty1 = $("<p>").text("Humidity: " + response.list[1].main.humidity + "%")

  dDiv1.css("padding","5px")
  dDiv1.append(fWeatherIcon1)
  dDiv1.append(fTemp1)
  dDiv1.append(fWind1)
  dDiv1.append(fHumidty1)


//2nd day forecast
let fDate2 = $("<h6>").text(moment().add(2,'days').format("DD/MM/YYYY"))
dDiv2.append(fDate2)

  let fIconCode2 = response.list[2].weather[0].icon
  console.log(fIconCode2)

  let fIconURL2 = "https://openweathermap.org/img/wn/" + fIconCode2 + "@2x.png";
  let fWeatherIcon2 = $("<img>").attr("src", "").addClass("icon");
  fWeatherIcon2.attr('src', fIconURL2);

  let fTempC2 = response.list[2].main.temp - 273.15;
  let fTemp2 = $("<p>").text("Temp: " + fTempC2.toFixed(2) + "°C" )
  let fWind2 = $("<p>").text("Wind: " + response.list[2].wind.speed + "meter/sec")
  let fHumidty2 = $("<p>").text("Humidity: " + response.list[2].main.humidity + "%")

  dDiv2.css("padding","5px")
  dDiv2.append(fWeatherIcon2)
  dDiv2.append(fTemp2)
  dDiv2.append(fWind2)
  dDiv2.append(fHumidty2)

//3rd day forecast
let fDate3 = $("<h6>").text(moment().add(3,'days').format("DD/MM/YYYY"))
dDiv3.append(fDate3)

  let fIconCode3 = response.list[3].weather[0].icon
  console.log(fIconCode3)

  let fIconURL3 = "https://openweathermap.org/img/wn/" + fIconCode3 + "@2x.png";
  let fWeatherIcon3 = $("<img>").attr("src", "").addClass("icon");
  fWeatherIcon3.attr('src', fIconURL3);

  let fTempC3 = response.list[3].main.temp - 273.15;
  let fTemp3 = $("<p>").text("Temp: " + fTempC3.toFixed(2) + "°C" )
  let fWind3 = $("<p>").text("Wind: " + response.list[3].wind.speed + "meter/sec")
  let fHumidty3 = $("<p>").text("Humidity: " + response.list[3].main.humidity + "%")

  dDiv3.css("padding","5px")
  dDiv3.append(fWeatherIcon3)
  dDiv3.append(fTemp3)
  dDiv3.append(fWind3)
  dDiv3.append(fHumidty3)


  //4th day forecast
  let fDate4 = $("<h6>").text(moment().add(4,'days').format("DD/MM/YYYY"))
  dDiv4.append(fDate4)

  let fIconCode4 = response.list[4].weather[0].icon
  console.log(fIconCode4)

  let fIconURL4 = "https://openweathermap.org/img/wn/" + fIconCode4 + "@2x.png";
  let fWeatherIcon4 = $("<img>").attr("src", "").addClass("icon");
  fWeatherIcon4.attr('src', fIconURL4);

  let fTempC4 = response.list[4].main.temp - 273.15;
  let fTemp4 = $("<p>").text("Temp: " + fTempC4.toFixed(2) + "°C" )
  let fWind4 = $("<p>").text("Wind: " + response.list[4].wind.speed + "meter/sec")
  let fHumidty4 = $("<p>").text("Humidity: " + response.list[4].main.humidity + "%")

  dDiv4.css("padding","5px")
  dDiv4.append(fWeatherIcon4)
  dDiv4.append(fTemp4)
  dDiv4.append(fWind4)
  dDiv4.append(fHumidty4)

  
  //5th day forecast
  let fDate5 = $("<h6>").text(moment().add(5,'days').format("DD/MM/YYYY"))
  dDiv5.append(fDate5)

  let fIconCode5 = response.list[5].weather[0].icon
  console.log(fIconCode5)

  let fIconURL5 = "https://openweathermap.org/img/wn/" + fIconCode5 + "@2x.png";
  let fWeatherIcon5 = $("<img>").attr("src", "").addClass("icon");
  fWeatherIcon5.attr('src', fIconURL2);

  let fTempC5 = response.list[5].main.temp - 273.15;
  let fTemp5 = $("<p>").text("Temp: " + fTempC5.toFixed(2) + "°C" )
  let fWind5 = $("<p>").text("Wind: " + response.list[5].wind.speed + "meter/sec")
  let fHumidty5 = $("<p>").text("Humidity: " + response.list[5].main.humidity + "%")

  dDiv5.css("padding","5px")
  dDiv5.append(fWeatherIcon5)
  dDiv5.append(fTemp5)
  dDiv5.append(fWind5)
  dDiv5.append(fHumidty5)
})


}

function saveToHistory (){
let historyButton = $("<button>").addClass("historyButton")
localStorage.setItem("city", searchCity)
historyButton.text(localStorage.getItem("city"))

$("#history").append(historyButton)

historyButton.on("click", function (event){
  event.preventDefault()
  console.log(this)
  searchCity = this.innerText 
  getResponse()
})
}
