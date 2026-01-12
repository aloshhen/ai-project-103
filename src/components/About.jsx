import React from 'react'

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 flex items-center gap-12">
        <div className="w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-coffee-primary">
            How Our Ecosystem Works
          </h2>
          <p className="text-gray-600 mb-4">
            Our innovative platform connects coffee lovers with cutting-edge technology, 
            providing a seamless and intelligent coffee experience.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center">
              <span className="mr-3 text-coffee-accent">✓</span>
              Intelligent Brewing Recommendations
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-coffee-accent">✓</span>
              Real-time Coffee Tracking
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-coffee-accent">✓</span>
              Personalized Coffee Profiles
            </li>
          </ul>
        </div>
        <div className="w-1/2 bg-gray-100 rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/placeholder-coffee-tech.jpg" 
            alt="Coffee Technology" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default About