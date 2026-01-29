import './App.css'
import { SearchBar } from './components/SearchBar'
import { WeatherDetails } from './components/WeatherDetails'
import { WeatherDisplay } from './components/WeatherDisplay'
import { ErrorMessage } from './components/ErrorMessage'
import { useState } from 'react'

const API_KEY = '10c707fadaf991f0edaf810fec369cf7'


function App() {

  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)

  const fetchWeather = async (city) => {
    try {
      setError(null)
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`)

      if (!response.ok) {
        throw new Error('Ciudad no Encontrada')
      }
      const data = await response.json()
      setWeather(data)
      console.log(data)

    } catch (err) {
      setError(err.message)
      setWeather(null)
    }
  }

  return (
    <>
      <SearchBar onSearch={fetchWeather} />
      <WeatherDisplay weather={weather} />
      <WeatherDetails weather={weather} />
      <ErrorMessage message={error} />
    </>
  )
}

export default App
