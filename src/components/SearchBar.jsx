import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin } from 'lucide-react'

const SearchBar = ({ onSearch, onGetLocation }) => {
  const [city, setCity] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      onSearch(city)
      setCity('')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-3xl mx-auto mb-12 sm:mb-16"
    >
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <div className="relative flex-1 group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none transition-colors duration-300 group-focus-within:text-white text-zinc-500">
            <Search size={20} strokeWidth={2} />
          </div>
          <input
            type="text"
            placeholder="Search for a city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-zinc-900/40 backdrop-blur-xl border border-white/10 text-white rounded-2xl pl-12 pr-6 py-4 focus:outline-none focus:ring-2 focus:ring-white/20 focus:bg-zinc-900/60 transition-all duration-300 placeholder:text-zinc-600 font-medium tracking-wide shadow-inner"
          />
        </div>

        <div className="flex gap-3 sm:gap-4">
          <button
            type="submit"
            className="flex-1 sm:flex-none px-8 py-4 bg-white text-zinc-950 font-bold rounded-2xl hover:bg-zinc-200 active:scale-95 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Search
          </button>

          <button
            type="button"
            onClick={onGetLocation}
            className="flex items-center justify-center px-5 py-4 bg-white/5 border border-white/10 text-white rounded-2xl hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all duration-300 group"
            title="Use My Location"
          >
            <MapPin size={22} className="group-hover:text-cyan-400 transition-colors" strokeWidth={2} />
          </button>
        </div>
      </form>
    </motion.div>
  )
}

export default SearchBar