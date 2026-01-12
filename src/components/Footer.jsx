import React from 'react'
import { Coffee, Twitter, Instagram, Linkedin } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-coffee-primary text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Coffee size={32} />
            <h3 className="text-2xl font-bold">CoffeeEco</h3>
          </div>
          <p className="text-gray-300">Transforming coffee technology for the digital age</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-coffee-accent">Features</a></li>
            <li><a href="#" className="hover:text-coffee-accent">About</a></li>
            <li><a href="#" className="hover:text-coffee-accent">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-coffee-accent">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-coffee-accent">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <Twitter className="hover:text-coffee-accent cursor-pointer" />
            <Instagram className="hover:text-coffee-accent cursor-pointer" />
            <Linkedin className="hover:text-coffee-accent cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        © 2024 CoffeeEco. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer