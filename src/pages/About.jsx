import { motion } from 'framer-motion'
import { Card, CardBody } from '@chakra-ui/react'
import { Cloud, Heart, Zap, Globe } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Cloud size={40} />,
      title: 'Real-time Data',
      description: 'Get accurate weather information updated in real-time from OpenWeatherMap API',
    },
    {
      icon: <Globe size={40} />,
      title: 'Global Coverage',
      description: 'Access weather data for cities all around the world with detailed forecasts',
    },
    {
      icon: <Heart size={40} />,
      title: 'Save Favorites',
      description: 'Keep track of weather in your favorite locations with local storage',
    },
    {
      icon: <Zap size={40} />,
      title: 'Lightning Fast',
      description: 'Built with modern technologies like React, Vite, and Tailwind CSS v4',
    },
  ]

  const technologies = [
    'React 18',
    'Vite',
    'Tailwind CSS v4',
    'Chakra UI',
    'Framer Motion',
    'React Router',
    'Axios',
    'Lucide Icons',
  ]

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          About WeatherPro
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
          A modern, beautiful weather dashboard built with the latest web technologies
          for an exceptional user experience
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card
              bg="slate.800"
              border="2px solid"
              borderColor="slate.700"
              className="backdrop-blur-md h-full"
            >
              <CardBody className="p-4 sm:p-6">
                <div className="text-cyan-400 mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Card
          bg="slate.800"
          border="2px solid"
          borderColor="slate.700"
          className="backdrop-blur-md"
        >
          <CardBody className="p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Technologies Used
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {technologies.map((tech) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-700/50 rounded-lg p-3 text-center"
                >
                  <p className="text-white font-semibold text-sm sm:text-base">{tech}</p>
                </motion.div>
              ))}
            </div>
          </CardBody>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center mt-8 sm:mt-12"
      >
        <p className="text-gray-400 text-sm sm:text-base">
          Created with ❤️ by PrabashVijayanga | {new Date().getFullYear()}
        </p>
        <p className="text-gray-500 text-xs sm:text-sm mt-2">
          Powered by OpenWeatherMap API
        </p>
      </motion.div>
    </div>
  )
}

export default About