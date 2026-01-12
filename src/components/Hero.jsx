import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center pt-16 bg-gradient-to-br from-coffee-background to-white">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <h1 className="text-5xl font-bold text-coffee-primary mb-6">
          Revolutionize Your Coffee Experience
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Discover a seamless ecosystem that transforms how you interact with coffee technology
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-coffee-accent text-white px-8 py-3 rounded-full hover:scale-105 transition">
            Explore Now
          </button>
          <button className="border-2 border-coffee-primary text-coffee-primary px-8 py-3 rounded-full hover:bg-coffee-primary hover:text-white transition">
            Learn More
          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero