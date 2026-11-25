
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

// Today's weather
export async function getWeather(city) {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("City not found!");
  }

  return data;
}


// 5 days forecast
export async function getForecast(city) {

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Forecast not available!");
  }

  const days = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  ).slice(0, 5);

  return days;
}
