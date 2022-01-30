
//newWeather = new currentWeather(city, temp, main, description, high, low, feelsLike, humidity, windSpeed, pressure);


function importedData(data) {
    console.log(data);
    document.getElementById('cityName').innerText = data.city;
    document.getElementById('temp').innerText = `${data.temp}°F`;
    document.getElementById('high').innerText = `High: ${data.high}°F`;
    document.getElementById('low').innerText = `Low: ${data.low}°F`;
    document.getElementById('description').innerText = data.description;
    document.getElementById('iconCont').innerHTML = `<i class="wi wi-owm-day-${data.id}" id="icon"></i>`;
};












export {importedData};