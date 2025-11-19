import { motion } from 'framer-motion'
import { Card, CardBody } from '@chakra-ui/react'
import { 
  Cloud, CloudRain, Sun, CloudSnow, Wind, 
  Droplets, Eye, Gauge, Heart 
} from 'lucide-react'

const WeatherCard = ({ weather, onAddFavorite }) => {
  const getWeatherIcon = (condition) => {
    const icons = {
      Clear: Sun,
      Clouds: Cloud,
      Rain: CloudRain,
      Drizzle: CloudRain,
      Snow: CloudSnow,
      Mist: Cloud,
      Fog: Cloud,
      Haze: Cloud,
      default: Cloud,
    }
    const Icon = icons[condition] || icons.default
    return <Icon className="text-yellow-400 animate-float" size={80} />
  }

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        bg="slate.800"
        border="2px solid"
        borderColor="slate.700"
        className="backdrop-blur-md shadow-2xl"
      >
        <CardBody className="p-6 sm:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {weather.name}, {weather.sys.country}
              </h2>
              <p className="text-gray-400 text-base sm:text-lg capitalize">
                {weather.weather[0].description}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onAddFavorite(weather)}
              className="text-pink-500 hover:text-pink-400 transition-colors"
            >
              <Heart size={28} />
            </motion.button>
          </div>

          <div className="flex items-center justify-between mb-8 flex-col sm:flex-row gap-4">
            <div className="flex items-center space-x-6">
              {getWeatherIcon(weather.weather[0].main)}
              <div>
                <p className="text-6xl sm:text-7xl font-bold text-white">
                  {Math.round(weather.main.temp)}°C
                </p>
                <p className="text-gray-400 text-base sm:text-lg mt-2">
                  Feels like {Math.round(weather.main.feels_like)}°C
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            <WeatherDetail
              icon={<Droplets size={24} />}
              label="Humidity"
              value={`${weather.main.humidity}%`}
            />
            <WeatherDetail
              icon={<Wind size={24} />}
              label="Wind Speed"
              value={`${weather.wind.speed} m/s`}
            />
            <WeatherDetail
              icon={<Gauge size={24} />}
              label="Pressure"
              value={`${weather.main.pressure} hPa`}
            />
            <WeatherDetail
              icon={<Eye size={24} />}
              label="Visibility"
              value={`${(weather.visibility / 1000).toFixed(1)} km`}
            />
          </div>
        </CardBody>
      </Card>
    </motion.div>
  )
}

const WeatherDetail = ({ icon, label, value }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-slate-700/50 rounded-lg p-3 sm:p-4 flex flex-col items-center text-center"
  >
    <div className="text-cyan-400 mb-2">{icon}</div>
    <p className="text-gray-400 text-xs sm:text-sm mb-1">{label}</p>
    <p className="text-white font-semibold text-base sm:text-lg">{value}</p>
  </motion.div>
)

export default WeatherCard