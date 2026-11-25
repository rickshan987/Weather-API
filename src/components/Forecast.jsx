
import '../App.css';

function Forecast({ forecast }) {

  if (forecast.length === 0) return null;

  return (
    <div id="forecast">

      <h2>5-Day Forecast</h2>

      <div className="forecast">

        {forecast.map((day) => (

          <div className="card" key={day.dt}>

            <p>
              {new Date(day.dt_txt).toLocaleDateString(
                "en-US",
                { weekday: "short" }
              )}
            </p>

            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
              alt="Weather"
            />

            <h3>{Math.round(day.main.temp)}°C</h3>

            <p>{day.weather[0].description}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Forecast;
