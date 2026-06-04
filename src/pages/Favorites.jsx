import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Trash2, Cloud } from 'lucide-react'

const Favorites = () => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('favorites') || '[]')
    setFavorites(stored)
  }, [])

  const removeFavorite = (id) => {
    const updated = favorites.filter((fav) => fav.id !== id)
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 sm:mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 tracking-tight mb-3">
          Favorite Locations
        </h1>
        <p className="text-zinc-400 text-lg">Your saved meteorological destinations.</p>
      </motion.div>

      {favorites.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-zinc-500 mt-32 flex flex-col items-center"
        >
          <Cloud size={80} className="mb-6 opacity-20" strokeWidth={1} />
          <p className="text-2xl font-medium tracking-wide text-zinc-400">No favorites yet</p>
          <p className="mt-2 text-zinc-500">Save cities from the dashboard to track them here.</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {favorites.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-6 sm:p-8 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-1">
                      {city.name}
                    </h3>
                    <p className="text-zinc-400 capitalize text-sm font-medium tracking-wide">
                      {city.sys.country} • {city.weather[0].description}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFavorite(city.id)}
                    className="p-2.5 rounded-full bg-white/5 border border-white/5 text-zinc-500 hover:text-rose-400 hover:bg-rose-500/10 hover:border-rose-500/20 transition-all duration-300"
                  >
                    <Trash2 size={20} strokeWidth={2} />
                  </button>
                </div>
                
                <div className="flex items-end justify-between">
                  <div className="text-5xl sm:text-6xl font-black text-white tracking-tighter drop-shadow-md">
                    {Math.round(city.main.temp)}°
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites