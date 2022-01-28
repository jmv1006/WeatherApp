//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={API key}

async function fetchApi() {
    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&appid=2ae9f6e3718dd2cebf6cbd59aede78eb')
    const weatherData = await response.json();
    console.log(weatherData);
}

export {fetchApi};
