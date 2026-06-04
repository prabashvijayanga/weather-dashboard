import { motion } from 'framer-motion'
import { Cloud, Heart, Zap, Globe } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: <Cloud size={32} strokeWidth={1.5} />,
      title: 'Real-time Data',
      description: 'Accurate telemetry updated instantly from the OpenWeatherMap network.',
    },
    {
      icon: <Globe size={32} strokeWidth={1.5} />,
      title: 'Global Coverage',
      description: 'Access precise atmospheric conditions for any coordinates on Earth.',
    },
    {
      icon: <Heart size={32} strokeWidth={1.5} />,
      title: 'Quick Access',
      description: 'Pin your critical locations for immediate tracking and monitoring.',
    },
    {
      icon: <Zap size={32} strokeWidth={1.5} />,
      title: 'Optimized Engine',
      description: 'Built on a high-performance stack utilizing React and Vite.',
    },
  ]

  const technologies = [
    'React 18',
    'Vite Engine',
    'Tailwind CSS',
    'Framer Motion',
    'React Router',
    'Axios',
    'Lucide Icons',
    'Glassmorphism UI'
  ]

  return (
    <div className="container mx-auto px-4 py-8 sm:py-12 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tighter mb-6">
          System Architecture
        </h1>
        <p className="text-zinc-400 text-lg sm:text-xl max-w-2xl mx-auto font-medium tracking-wide leading-relaxed">
          A premium, high-performance weather dashboard engineered with modern web technologies and fluent animations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-3xl bg-zinc-900/30 backdrop-blur-xl border border-white/10 p-8 hover:bg-zinc-900/50 transition-colors duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-300 mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative overflow-hidden rounded-3xl bg-zinc-900/40 backdrop-blur-2xl border border-white/10 shadow-2xl p-8 sm:p-12"
      >
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-white mb-8 text-center tracking-tight">
            Technology Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {technologies.map((tech) => (
              <motion.div
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm font-semibold tracking-wide hover:bg-white/10 hover:border-white/20 hover:text-white transition-all shadow-sm"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-16 space-y-2"
      >
        <p className="text-zinc-500 text-sm font-medium tracking-wide">
          Created with ❤️ by PrabashVijayanga | {new Date().getFullYear()}
        </p>
        <p className="text-zinc-600 text-xs font-semibold uppercase tracking-widest">
          Powered by OpenWeatherMap
        </p>
      </motion.div>
    </div>
  )
}

export default About
