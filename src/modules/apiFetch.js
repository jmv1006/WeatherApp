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
    let description = weatherData.weather[0].main;
    let high = weatherData.main.temp_max;
    let low = weatherData.main.temp_min;

    class currentWeather {
        constructor(city, temp, description, high, low) {
            this.city = city;
            this.temp = temp;
            this.description = description;
            this.high = high;
            this.low = low;
        };
    };
    let newWeather = new currentWeather(city, temp, description, high, low);
    importedData(newWeather);
}

export {fetchApi};
