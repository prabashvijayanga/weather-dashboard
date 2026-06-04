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
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 pt-4 px-4 sm:px-6 lg:px-8"
    >
      <nav className="max-w-7xl mx-auto bg-zinc-900/60 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
        <div className="px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center space-x-3 group"
            >
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                <Cloud className="text-white" size={24} strokeWidth={2} />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                WeatherPro
              </span>
            </motion.div>
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-1 sm:space-x-2">
            {navItems.map(({ path, label, icon: Icon }) => {
              const isActive = location.pathname === path
              return (
                <Link key={path} to={path}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 px-3 sm:px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-white text-zinc-950 shadow-md'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />
                    <span className="hidden sm:inline tracking-wide">{label}</span>
                  </motion.button>
                </Link>
              )
            })}
          </div>
        </div>
      </nav>
    </motion.div>
  )
}

export default Navbar