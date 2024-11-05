import React, { useState } from 'react';



const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>
);

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    if (city.trim() === '') {
      alert('Please enter a city name.');
      return;
    }

    try {
      const api = 'c6bc976394f13845dc637ae1be0ff583';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === '404') {
        setError(true);
        setWeather(null);
      } else {
        setError(false);
        setWeather({
          temperature: Math.round(data.main.temp - 273.15),
          description: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: Math.round(data.wind.speed),
          weatherIcon: getWeatherIcon(data.weather[0].main),
        });
      }
    } catch (e) {
      setError(true);
      setWeather(null);
    }
  };

  const getWeatherIcon = (weather) => {
    switch (weather) {
      case 'Clouds':
        return './assets/cloud.png';
      case 'Rain':
        return './assets/rain.png';
      case 'Clear':
        return './assets/clear.png';
      case 'Haze':
      case 'Mist':
        return './assets/mist.png';
      case 'Snow':
        return './assets/snow.png';
      case 'Thunderstorm':
        return './assets/rain.png';
      default:
        return './assets/cloud.png';
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-md">
      <div className="search-box flex justify-between items-center">
        <input
          type="text"
          placeholder="Enter a city name"
          className="bg-[#e6f5fb] rounded-lg px-4 py-3 flex-grow text-black"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button
          className="bg-[#e6f5fb] rounded-full w-12 h-12 text-black hover:bg-[#ababab] hover:text-white transition-colors duration-300 transform-gpu"
          onClick={handleSearch}
        >
          
          <SearchIcon />
        </button>
      </div>

      {error ? (
        <div className="location-not-found flex justify-center items-center flex-col mt-8">
          <h1 className="text-[#6b6b6b] font-semibold text-xl mb-4">Location Not Found</h1>
          <img src="./assets/404.png" alt="404 Error" className="w-3/4" />
        </div>
      ) : weather ? (
        <div className="weather-body flex justify-center items-center flex-col mt-8">
          <img src={weather.weatherIcon} alt="Weather Icon" className="weather-img w-3/5" />
          <div className="weather-box text-center">
            <div className="temprature text-[#dadada] text-4xl font-semibold relative">
              {weather.temperature}°C
            </div>
            <div className="description text-[#dadada] text-2xl font-semibold capitalize">
              {weather.description}
            </div>
          </div>
          <div className="weather-details w-full flex justify-between mt-8 gap-5">
            <div className="humidity flex items-center">
              <i className="text-[#dadada] text-3xl"></i>
              <div className="text ml-3 text-[#dadada]">
                <span className="font-semibold text-2xl">{weather.humidity}%</span>
                <p>Humidity</p>
              </div>
            </div>
            <div className="wind flex items-center">
              <i className="text-[#dadada] text-3xl"></i>
              <div className="text ml-3 text-[#dadada]">
                <span className="font-semibold text-2xl">{weather.windSpeed}km/h</span>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherApp;