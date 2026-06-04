import { motion } from 'framer-motion'
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
    return <Icon className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-float" size={96} strokeWidth={1.5} />
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-3xl mx-auto"
    >
      {/* Rich Glassmorphism Container */}
      <div className="relative overflow-hidden rounded-3xl bg-zinc-900/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] p-6 sm:p-10">
        
        {/* Subtle inner highlight */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-3xl" />

        <div className="relative z-10">
          {/* Header Section */}
          <div className="flex justify-between items-start mb-10">
            <div className="space-y-1">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-tight">
                {weather.name}, {weather.sys.country}
              </h2>
              <p className="text-zinc-400 text-lg sm:text-xl font-medium capitalize tracking-wide">
                {weather.weather[0].description}
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onAddFavorite(weather)}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-rose-500 hover:bg-white/10 hover:border-rose-500/30 transition-all duration-300"
            >
              <Heart size={24} strokeWidth={2} />
            </motion.button>
          </div>

          {/* Main Temp Section */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-8">
            <div className="flex items-center space-x-8">
              {getWeatherIcon(weather.weather[0].main)}
              <div className="space-y-2">
                <p className="text-7xl sm:text-8xl font-black text-white tracking-tighter drop-shadow-lg">
                  {Math.round(weather.main.temp)}°
                </p>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium">
                  Feels like {Math.round(weather.main.feels_like)}°
                </div>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <WeatherDetail
              icon={<Droplets size={20} />}
              label="Humidity"
              value={`${weather.main.humidity}%`}
            />
            <WeatherDetail
              icon={<Wind size={20} />}
              label="Wind"
              value={`${weather.wind.speed} m/s`}
            />
            <WeatherDetail
              icon={<Gauge size={20} />}
              label="Pressure"
              value={`${weather.main.pressure} hPa`}
            />
            <WeatherDetail
              icon={<Eye size={20} />}
              label="Visibility"
              value={`${(weather.visibility / 1000).toFixed(1)} km`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const WeatherDetail = ({ icon, label, value }) => (
  <motion.div
    whileHover={{ y: -2 }}
    className="group flex flex-col items-start p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-colors duration-300"
  >
    <div className="flex items-center space-x-2 text-zinc-400 group-hover:text-zinc-300 transition-colors mb-3">
      {icon}
      <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
    </div>
    <p className="text-xl font-bold text-white tracking-tight">{value}</p>
  </motion.div>
)

export default WeatherCard