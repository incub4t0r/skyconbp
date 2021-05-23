window.onload = function(){
    const owmkey = '1d51f32b7f1bdace2aa7b9a20cbabb66'; // You can get your own, free openweathermap api key at http://openeweathermap.org
    var cityID = "novi";
    function getMainWeather(){
        $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=' + cityID+ '&appid=' + owmkey+'&units=imperial', function(data) {
            var weatherID = data.weather[0].id;
            document.getElementById('curr-weather-icon').innerHTML = weatherID;
        });
    }
    getMainWeather();   
    // setInterval(getMainWeather(),1000*60*60);
}

