
//newWeather = new currentWeather(city, temp, main, description, high, low, feelsLike, humidity, windSpeed, pressure);


function importedData(data) {
    console.log(data);
    document.getElementById('cityName').innerText = data.city;
    document.getElementById('temp').innerText = `${data.temp}°F`;
    document.getElementById('high').innerText = `High: ${data.high}°F`;
    document.getElementById('low').innerText = `Low: ${data.low}°F`;
    document.getElementById('description').innerText = data.description;

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
};












export {importedData};