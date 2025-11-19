import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardBody, Button } from '@chakra-ui/react'
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
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 sm:mb-8"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Favorite Cities</h1>
        <p className="text-gray-400">Your saved weather locations</p>
      </motion.div>

      {favorites.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-400 mt-20"
        >
          <Cloud size={64} className="mx-auto mb-4 opacity-50" />
          <p className="text-xl">No favorites yet</p>
          <p className="mt-2">Add cities from the home page</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {favorites.map((city, index) => (
            <motion.div
              key={city.id}
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
                <CardBody className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {city.name}, {city.sys.country}
                      </h3>
                      <p className="text-gray-400 capitalize text-sm sm:text-base">
                        {city.weather[0].description}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      colorScheme="red"
                      variant="ghost"
                      onClick={() => removeFavorite(city.id)}
                    >
                      <Trash2 size={18} />
                    </Button>
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-white">
                    {Math.round(city.main.temp)}°C
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites