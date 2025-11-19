import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Cloud, Heart, Info } from 'lucide-react'

const Navbar = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: Cloud },
    { path: '/favorites', label: 'Favorites', icon: Heart },
    { path: '/about', label: 'About', icon: Info },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-slate-800/50 backdrop-blur-md border-b border-slate-700 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Cloud className="text-cyan-400" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              WeatherPro
            </span>
          </motion.div>

          <div className="flex space-x-1">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link key={path} to={path}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                    location.pathname === path
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <Icon size={20} />
                  <span className="hidden sm:inline">{label}</span>
                </motion.button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar