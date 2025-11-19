import axios from 'axios'

// API key from environment variables (secure)
// For production, set this in hosting platform's environment settings
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const BASE_URL = 'https://api.openweathermap.org/data/2.5'

// Check if API key exists
if (!API_KEY) {
  console.error('⚠️ Weather API key is missing! Please add VITE_WEATHER_API_KEY to your .env file')
}

export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('City not found. Please check the spelling and try again.')
    } else if (error.response?.status === 401) {
      throw new Error('Invalid API key. Please check your configuration.')
    }
    throw new Error('Unable to fetch weather data. Please try again later.')
  }
}

export const getWeatherByCoords = async (lat, lon) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
      },
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error('Invalid API key. Please check your configuration.')
    }
    throw new Error('Unable to get weather data for your location.')
  }
}

export const getForecast = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('Forecast data not available for this city.')
    } else if (error.response?.status === 401) {
      throw new Error('Invalid API key. Please check your configuration.')
    }
    throw new Error('Unable to fetch forecast data. Please try again later.')
  }
}