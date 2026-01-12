import React from 'react'
import { Coffee, Zap, Shield } from 'lucide-react'

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
      <div className="mb-4 text-coffee-accent">
        <Icon size={48} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-coffee-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function Features() {
  const features = [
    {
      icon: Coffee,
      title: "Smart Brewing",
      description: "Advanced technology for perfect coffee every time"
    },
    {
      icon: Zap,
      title: "Instant Connectivity",
      description: "Seamless integration with your digital lifestyle"
    },
    {
      icon: Shield,
      title: "Secure Experience",
      description: "Top-notch privacy and data protection"
    }
  ]

  return (
    <section id="features" className="py-20 bg-coffee-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-coffee-primary">
          Features That Elevate Your Experience
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features