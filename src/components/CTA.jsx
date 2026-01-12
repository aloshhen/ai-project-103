import React from 'react'

function CTA() {
  return (
    <section className="bg-gradient-to-r from-coffee-primary to-coffee-accent text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Coffee Experience?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our ecosystem and unlock a world of intelligent, personalized coffee technology
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-coffee-primary px-10 py-4 rounded-full font-bold hover:scale-105 transition">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-coffee-primary transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA