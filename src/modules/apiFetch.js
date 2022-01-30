//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
import {importedData} from './handleDom.js';

let city = 'Cairo';

async function fetchApi() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ae9f6e3718dd2cebf6cbd59aede78eb`, {mode: 'cors'});
    const weatherData = await response.json();
    processData(weatherData);
}

function processData(weatherData) {
    console.log(weatherData);
    let temp = weatherData.main.temp;
    let main = weatherData.weather[0].main;
    let description = weatherData.weather[0].description;
    let owmId = weatherData.weather[0].id;
    let high = weatherData.main.temp_max;
    let low = weatherData.main.temp_min;
    let feelsLike = weatherData.main.feels_like;
    let humidity = weatherData.main.humidity;
    let windSpeed = weatherData.wind.speed;
    let pressure = weatherData.main.pressure;

    let convertedtemp;
    let convertedHigh;
    let convertedLow;
    let convertedFeels;
    tempConvert(temp, high, low, feelsLike);

    function tempConvert(temp, high, low, feels) {
        let convertedtemp1 = ((temp - 273.15) * 1.8) + 32;
        let convertedHigh1 = ((high - 273.15) * 1.8) + 32;
        let convertedLow1 = ((low - 273.15) * 1.8) + 32;
        let convertedFeels1 = ((feels - 273.15) * 1.8) + 32;
        convertedtemp = Math.round(convertedtemp1);
        convertedHigh = Math.round(convertedHigh1);
        convertedLow = Math.round(convertedLow1);
        convertedFeels = Math.round(convertedFeels1);
    };


    class currentWeather {
        constructor(city, temp, main, description, id, high, low, feelsLike, humidity, windSpeed, pressure) {
            this.city = city;
            this.temp = temp;
            this.main = main;
            this.description = description;
            this.id = id;
            this.high = high;
            this.low = low;
            this.feelsLike = feelsLike;
            this.humidity = humidity;
            this.windSpeed = windSpeed;
            this.pressure = pressure;
        };
    };
    let newWeather = new currentWeather(city, convertedtemp, main, description, owmId, convertedHigh, convertedLow, convertedFeels, humidity, windSpeed, pressure);
    importedData(newWeather);
}

export {fetchApi};
