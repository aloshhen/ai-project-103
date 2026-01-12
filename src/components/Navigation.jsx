import React from 'react'
import { Coffee } from 'lucide-react'

function Navigation() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <Coffee className="text-coffee-primary" />
          <h1 className="text-xl font-bold text-coffee-primary">CoffeeEco</h1>
        </div>
        <div className="space-x-4">
          <a href="#features" className="hover:text-coffee-accent transition">Features</a>
          <a href="#about" className="hover:text-coffee-accent transition">About</a>
          <button className="bg-coffee-accent text-white px-4 py-2 rounded-full hover:scale-105 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation