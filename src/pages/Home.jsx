import { useState } from 'react'
import { motion } from 'framer-motion'
import { useToast } from '@chakra-ui/react'
import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WeatherCard'
import ForecastCard from '../components/ForecastCard'
import LoadingSpinner from '../components/LoadingSpinner'
import { getWeatherByCity, getWeatherByCoords, getForecast } from '../services/weatherService'

const Home = () => {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const handleSearch = async (city) => {
    setLoading(true)
    try {
      const weatherData = await getWeatherByCity(city)
      const forecastData = await getForecast(city)
      setWeather(weatherData)
      setForecast(forecastData)
      toast({
        title: 'Success',
        description: `Weather data loaded for ${city}`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    } catch (error) {
      toast({
        title: 'Error',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    } finally {
      setLoading(false)
    }
  }

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      setLoading(true)
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords
            const weatherData = await getWeatherByCoords(latitude, longitude)
            const forecastData = await getForecast(weatherData.name)
            setWeather(weatherData)
            setForecast(forecastData)
            toast({
              title: 'Success',
              description: 'Weather data loaded for your location',
              status: 'success',
              duration: 3000,
              isClosable: true,
              position: 'top',
            })
          } catch (error) {
            toast({
              title: 'Error',
              description: error.message,
              status: 'error',
              duration: 3000,
              isClosable: true,
              position: 'top',
            })
          } finally {
            setLoading(false)
          }
        },
        () => {
          toast({
            title: 'Error',
            description: 'Unable to get your location. Please enable location services.',
            status: 'error',
            duration: 3000,
            isClosable: true,
            position: 'top',
          })
          setLoading(false)
        }
      )
    } else {
      toast({
        title: 'Error',
        description: 'Geolocation is not supported by your browser',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    }
  }

  const handleAddFavorite = (weatherData) => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    const exists = favorites.find((fav) => fav.id === weatherData.id)
    
    if (!exists) {
      favorites.push(weatherData)
      localStorage.setItem('favorites', JSON.stringify(favorites))
      toast({
        title: 'Added to favorites',
        description: `${weatherData.name} has been added to your favorites`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    } else {
      toast({
        title: 'Already in favorites',
        description: `${weatherData.name} is already in your favorites`,
        status: 'info',
        duration: 3000,
        isClosable: true,
        position: 'top',
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Weather Dashboard
        </h1>
        <p className="text-gray-400 text-base sm:text-lg px-4">
          Get real-time weather updates for any city in the world
        </p>
      </motion.div>

      <SearchBar onSearch={handleSearch} onGetLocation={handleGetLocation} />

      {loading && <LoadingSpinner />}

      {!loading && weather && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <WeatherCard weather={weather} onAddFavorite={handleAddFavorite} />
          {forecast && <ForecastCard forecast={forecast} />}
        </motion.div>
      )}

      {!loading && !weather && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-400 mt-20"
        >
          <p className="text-lg sm:text-xl">Search for a city to get started</p>
        </motion.div>
      )}
    </div>
  )
}

export default Home