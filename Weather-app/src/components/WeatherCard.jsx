import "./WeatherCard.css"

const WeatherCard = ({ data }) => {
  if (!data) return null

  const { city, country, temperature, feels_like, condition, description, icon, humidity, wind_speed, pressure } = data

  // Format date
  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>
          {city}, {country}
        </h2>
        <p className="date">{date}</p>
      </div>

      <div className="weather-main">
        <div className="temperature-container">
          <div className="temperature">{Math.round(temperature)}°C</div>
          <div className="feels-like">Feels like: {Math.round(feels_like)}°C</div>
        </div>

        <div className="condition-container">
          <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} className="weather-icon" />
          <div className="condition">
            <div className="condition-main">{condition}</div>
            <div className="condition-description">{description}</div>
          </div>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{wind_speed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Pressure</span>
          <span className="detail-value">{pressure} hPa</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
