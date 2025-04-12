"use client"

import { useState } from "react"
import axios from "axios"
import "./SearchBar.css"

const SearchBar = ({ setWeatherData, setLoading, setError }) => {
  const [city, setCity] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!city.trim()) {
      setError("Please enter a city name")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=
218fd06cad00c23e4e26704cad6c87db`)
      setWeatherData(response.data.data)
      setError(null)
    } catch (error) {
      console.error("Error fetching weather:", error)

      if (error.response) {
        // Server responded with an error
        if (error.response.status === 404) {
          setError("City not found. Please check the spelling and try again.")
        } else {
          setError(error.response.data.message || "Error fetching weather data")
        }
      } else if (error.request) {
        // No response received
        setError("No response from server. Please check your connection.")
      } else {
        // Other errors
        setError("An unexpected error occurred")
      }

      setWeatherData(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name..."
        aria-label="City name"
      />
      <button type="submit">Search</button>
    </form>
  )
}

export default SearchBar
