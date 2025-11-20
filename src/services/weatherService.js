// src/services/weatherService.js - Secure Weather Service
import axios from 'axios'

// Vercel backend URL (API key hidden in backend)
const API_BASE_URL = 'https://weather-backend-two-psi.vercel.app/api/weather'

/**
 * Get current weather by city name
 */
export const getWeatherByCity = async (city) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        endpoint: 'weather',
        q: city,
        units: 'metric',
      },
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('City not found. Please check the spelling and try again.')
    } else if (error.response?.status === 401) {
      throw new Error('Invalid API key. Please check your configuration.')
    } else if (error.response?.data?.message) {
      throw new Error(error.response.data.message)
    }
    throw new Error('Unable to fetch weather data. Please try again later.')
  }
}

/**
 * Get current weather by coordinates
 */
export const getWeatherByCoords = async (lat, lon) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        endpoint: 'weather',
        lat,
        lon,
        units: 'metric',
      },
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 401) {
      throw new Error('Invalid API key. Please check your configuration.')
    } else if (error.response?.data?.message) {
      throw new Error(error.response.data.message)
    }
    throw new Error('Unable to get weather data for your location.')
  }
}

/**
 * Get 5-day weather forecast
 */
export const getForecast = async (city) => {
  try {
    const response = await axios.get(API_BASE_URL, {
      params: {
        endpoint: 'forecast',
        q: city,
        units: 'metric',
      },
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error('Forecast data not available for this city.')
    } else if (error.response?.status === 401) {
      throw new Error('Invalid API key. Please check your configuration.')
    } else if (error.response?.data?.message) {
      throw new Error(error.response.data.message)
    }
    throw new Error('Unable to fetch forecast data. Please try again later.')
  }
}