var apiKey = 'a9d38d8df3825219d26d27b15e296bd0'

// Function to organize weather data before being called
function showWeatherInfo(weatherData) {
  $('.inner-results').html(`
    <h2>Location: ${weatherData.name}</h2>
    <h2>Looks like ${weatherData.weather[0].description} today.</h2>
    <h2>Temperature: ${weatherData.main.temp} | High: ${weatherData.main.temp_max} | Low: ${weatherData.main.temp_min}</h2>
    <h2>Humidity: ${weatherData.main.humidity}</h2>
    `)
}

// Document functions
$(document).ready(function() {

  $('form').submit(function(event) {
    event.preventDefault()
    $('form').hide(1000)
    $('.results').css('display', 'contents')
    var userInput = $('.form-input').val()
    $.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${userInput}&appid=${apiKey}`, function(data) {
      console.log(data)
      showWeatherInfo(data)
    })
  })

  $('form input').focus(function() {
    $('form input').addClass('focusForm')
  })

  $('.searchAgainButton').click(function(event){
    $('.results').hide(500)
    $('form').show()
  })

















});
