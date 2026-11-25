
import '../App.css';

function WeatherCard({ weather }) {

  if (!weather) return null;

  return (
    <div id="today" className="weather">

      <h2>{weather.name}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather"
      />

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <h3>{weather.weather[0].description}</h3>

      <div className="details">

        <p>💧 Humidity: {weather.main.humidity}%</p>

        <p>💨 Wind: {weather.wind.speed} m/s</p>

      </div>

    </div>
  );
}

export default WeatherCard;
