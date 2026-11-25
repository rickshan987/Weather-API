
import { useState } from 'react';

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import Forecast from './components/Forecast';

import { getWeather, getForecast } from './services/weatherService';

import './App.css';

function App() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");

  async function searchWeather() {

    try {

      setError("");

      const weatherData = await getWeather(city);
      const forecastData = await getForecast(city);

      setWeather(weatherData);
      setForecast(forecastData);

    } catch (error) {

      setWeather(null);
      setForecast([]);
      setError(error.message);

    }
  }

  return (

    <div className="app">

      <Navbar />

      <h1>Weather Dashboard</h1>

      <SearchBar
        city={city}
        setCity={setCity}
        search={searchWeather}
      />

      {error && <p className="error">{error}</p>}

      <WeatherCard weather={weather} />

      <Forecast forecast={forecast} />

    </div>
  );
}

export default App;
