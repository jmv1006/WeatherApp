
//newWeather = new currentWeather(city, temp, main, description, high, low, feelsLike, humidity, windSpeed, pressure);


function importedData(data) {
    console.log(data);

    function capitalizeFirstLetter(string) {
        return string[0].toUpperCase() + string.slice(1);
    }

    document.getElementById('cityName').innerText = capitalizeFirstLetter(data.city);
    document.getElementById('temp').innerText = `${data.temp}°F`;
    document.getElementById('main').innerText = data.main;
    document.getElementById('high').innerText = `High: ${data.high}°F`;
    document.getElementById('low').innerText = `Low: ${data.low}°F`;
    document.getElementById('description').innerText = capitalizeFirstLetter(data.description);

    if (data.time > 18 || data.time < 6) {
        displayIcon('night');
    } else {
        displayIcon('day');
    };

    function displayIcon(time) {
        switch(time) {
            case('day'):
                document.getElementById('iconCont').innerHTML = `<i class="wi wi-owm-day-${data.id}" id="icon"></i>`;
                break;
            case('night'):
                document.getElementById('iconCont').innerHTML = `<i class="wi wi-owm-night-${data.id}" id="icon"></i>`;
                break;
            default:
                //do nothing
        };
    };




    document.getElementById('feelsLike').innerText = `Feels Like ${data.feelsLike}°F`;
    document.getElementById('humidity').innerText = `Humidity: ${data.humidity}%`;
    document.getElementById('windSpeed').innerText = `Wind Speed: ${data.windSpeed} MPH`;
    document.getElementById('pressure').innerText = `Pressure: ${data.pressure} hPa`;
};












export {importedData};