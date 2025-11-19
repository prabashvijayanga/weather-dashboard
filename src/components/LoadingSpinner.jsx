import { motion } from 'framer-motion'
import { Spinner } from '@chakra-ui/react'

const LoadingSpinner = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center py-20"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.700"
        color="cyan.400"
        size="xl"
        className="mb-4"
      />
      <p className="text-gray-400 text-lg">Loading weather data...</p>
    </motion.div>
  )
}

export default LoadingSpinner