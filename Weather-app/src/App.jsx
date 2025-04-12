"use client"

import { useState } from "react"
import SearchBar from "./components/SearchBar"
import WeatherCard from "./components/WeatherCard"
import ErrorMessage from "./components/ErrorMessage"
import "./App.css"

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  return (
    <div className="app">
      <div className="container">
        <h1>Weather Dashboard</h1>
        <SearchBar setWeatherData={setWeatherData} setLoading={setLoading} setError={setError} />

        {error && <ErrorMessage message={error} />}

        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
            <p>Fetching weather data...</p>
          </div>
        ) : weatherData ? (
          <WeatherCard data={weatherData} />
        ) : (
          <div className="initial-message">
            <p>Enter a city name to get the current weather</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
