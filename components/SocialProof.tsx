'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Service-based Business Owner',
    content: '"I didn\'t think I could do this. I\'m not tech-savvy. But by the end of the workshop, I had a real website. This made AI finally click for me."',
    stars: 5
  },
  {
    name: 'James T.',
    role: 'Career Changer',
    content: '"I\'ve taken countless online courses. This was different. We actually built something instead of just watching someone else build."',
    stars: 5
  },
  {
    name: 'Maya K.',
    role: 'Entrepreneur',
    content: '"I launched my business website before the workshop even ended. I was shocked how fast and easy it was with the right guidance."',
    stars: 5
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function SocialProof() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            People Are <span className="bg-gradient-to-r from-accent via-accent-light to-accent-dark bg-clip-text text-transparent">Already Doing This</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real people. Real outcomes. Real websites.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ translateY: -12, scale: 1.02 }}
              className="relative p-8 rounded-xl bg-dark-light/40 backdrop-blur-md border border-accent/40 hover:border-accent/80 transition-all flex flex-col shadow-glow hover:shadow-glow-lg group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 mb-6 flex-1 italic">
                {testimonial.content}
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators - Premium Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          <motion.div
            whileHover={{ translateY: -8, boxShadow: '0 0 32px rgba(0, 153, 255, 0.4)' }}
            className="glass p-6 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg"
          >
            <p className="text-5xl font-black bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent mb-3">100+</p>
            <p className="text-gray-300 font-semibold">Participants Trained</p>
          </motion.div>
          <motion.div
            whileHover={{ translateY: -8, boxShadow: '0 0 32px rgba(0, 153, 255, 0.4)' }}
            className="glass p-6 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg"
          >
            <p className="text-5xl font-black bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent mb-3">100%</p>
            <p className="text-gray-300 font-semibold">Completed & Launched</p>
          </motion.div>
          <motion.div
            whileHover={{ translateY: -8, boxShadow: '0 0 32px rgba(0, 153, 255, 0.4)' }}
            className="glass p-6 rounded-xl transition-all duration-300 shadow-glow hover:shadow-glow-lg"
          >
            <p className="text-5xl font-black bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent mb-3">3hrs</p>
            <p className="text-gray-300 font-semibold">From Zero to Live</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
