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
    <div className="container mx-auto px-4 py-6 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-12 sm:mb-16"
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6">
          Weather Dashboard
        </h1>
        <p className="text-zinc-400 text-lg sm:text-xl px-4 max-w-2xl mx-auto font-medium tracking-wide">
          Get real-time meteorological data for any city in the world, beautifully presented.
        </p>
      </motion.div>

      <SearchBar onSearch={handleSearch} onGetLocation={handleGetLocation} />

      {loading && <LoadingSpinner />}

      {!loading && weather && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-8"
        >
          <WeatherCard weather={weather} onAddFavorite={handleAddFavorite} />
          {forecast && <ForecastCard forecast={forecast} />}
        </motion.div>
      )}

      {!loading && !weather && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-zinc-500 mt-24"
        >
          <p className="text-lg sm:text-xl font-medium tracking-wide">Search for a location to begin</p>
        </motion.div>
      )}
    </div>
  )
}

export default Home