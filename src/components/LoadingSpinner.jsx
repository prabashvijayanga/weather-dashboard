import { motion } from 'framer-motion'
import { Cloud } from 'lucide-react'

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center py-32">
      <div className="relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 rounded-full border-t-2 border-r-2 border-transparent border-t-white border-r-white/50"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white/50">
           <Cloud size={24} />
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-6 text-zinc-400 font-medium tracking-wide animate-pulse"
      >
        Connecting to satellites...
      </motion.p>
    </div>
  )
}

export default LoadingSpinner