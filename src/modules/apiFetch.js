//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}
import {importedData} from './handleDom.js';

let city = 'Los Angeles';

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
    let high = weatherData.main.temp_max;
    let low = weatherData.main.temp_min;
    let feelsLike = weatherData.main.feels_like;
    let humidity = weatherData.main.humidity;
    let windSpeed = weatherData.wind.speed;
    let pressure = weatherData.main.pressure;


    class currentWeather {
        constructor(city, temp, main, description, high, low, feelsLike, humidity, windSpeed, pressure) {
            this.city = city;
            this.temp = temp;
            this.main = main;
            this.description = description;
            this.high = high;
            this.low = low;
            this.feelsLike = feelsLike;
            this.humidity = humidity;
            this.windSpeed = windSpeed;
            this.pressure = pressure;
        };
    };
    let newWeather = new currentWeather(city, temp, main, description, high, low, feelsLike, humidity, windSpeed, pressure);
    importedData(newWeather);
}

export {fetchApi};
