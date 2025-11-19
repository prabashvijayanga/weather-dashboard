import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin } from 'lucide-react'
import { Input, InputGroup, InputLeftElement, Button } from '@chakra-ui/react'

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
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto mb-8"
    >
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <InputGroup size="lg" flex="1">
          <InputLeftElement>
            <Search className="text-gray-400" size={20} />
          </InputLeftElement>
          <Input
            placeholder="Search for a city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            bg="slate.800"
            border="2px solid"
            borderColor="slate.700"
            _hover={{ borderColor: 'cyan.500' }}
            _focus={{ borderColor: 'cyan.500', boxShadow: '0 0 0 1px #06B6D4' }}
            color="white"
            className="backdrop-blur-sm"
          />
        </InputGroup>

        <Button
          type="submit"
          size="lg"
          colorScheme="cyan"
          className="w-full sm:w-auto"
        >
          Search
        </Button>

        <Button
          type="button"
          size="lg"
          onClick={onGetLocation}
          colorScheme="purple"
          leftIcon={<MapPin size={20} />}
          className="w-full sm:w-auto"
        >
          <span className="hidden sm:inline">My Location</span>
          <span className="sm:hidden">Location</span>
        </Button>
      </form>
    </motion.div>
  )
}

export default SearchBar