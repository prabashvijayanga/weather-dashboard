import { motion } from 'framer-motion'
import { Card, CardBody } from '@chakra-ui/react'
import { Cloud, CloudRain, Sun, CloudSnow } from 'lucide-react'

const ForecastCard = ({ forecast }) => {
  const getWeatherIcon = (condition) => {
    const icons = {
      Clear: Sun,
      Clouds: Cloud,
      Rain: CloudRain,
      Drizzle: CloudRain,
      Snow: CloudSnow,
      default: Cloud,
    }
    const Icon = icons[condition] || icons.default
    return <Icon className="text-cyan-400" size={40} />
  }

  const getDayName = (timestamp) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleDateString('en-US', { weekday: 'short' })
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
        {forecast.list
          .filter((_, index) => index % 8 === 0)
          .slice(0, 5)
          .map((day, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                bg="slate.800"
                border="2px solid"
                borderColor="slate.700"
                className="backdrop-blur-md"
              >
                <CardBody className="p-3 sm:p-4 text-center">
                  <p className="text-white font-semibold mb-3 text-sm sm:text-base">
                    {getDayName(day.dt)}
                  </p>
                  <div className="flex justify-center mb-3">
                    {getWeatherIcon(day.weather[0].main)}
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {Math.round(day.main.temp)}°C
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm capitalize">
                    {day.weather[0].description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
      </div>
    </div>
  )
}

export default ForecastCard