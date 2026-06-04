import { motion } from 'framer-motion'
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
    return <Icon className="text-white drop-shadow-md" size={32} strokeWidth={1.5} />
  }

  const getDayName = (timestamp) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleDateString('en-US', { weekday: 'short' })
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 tracking-tight px-2">
        5-Day Outlook
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {forecast.list
          .filter((_, index) => index % 8 === 0)
          .slice(0, 5)
          .map((day, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative overflow-hidden rounded-3xl bg-zinc-900/30 backdrop-blur-xl border border-white/5 hover:border-white/10 hover:bg-zinc-900/50 transition-all duration-300 p-5 flex flex-col items-center justify-between min-h-[160px]"
            >
              <p className="text-zinc-400 font-bold uppercase tracking-wider text-xs mb-2">
                {getDayName(day.dt)}
              </p>
              
              <div className="my-2">
                {getWeatherIcon(day.weather[0].main)}
              </div>
              
              <div className="text-center mt-2">
                <p className="text-2xl font-bold text-white tracking-tight mb-1">
                  {Math.round(day.main.temp)}°
                </p>
                <p className="text-zinc-500 text-xs font-medium capitalize tracking-wide">
                  {day.weather[0].description}
                </p>
              </div>
            </motion.div>
          ))}
      </div>
    </div>
  )
}

export default ForecastCard