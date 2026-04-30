'use client'

import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'

interface PainRebuiltProps {
  onCTAClick: () => void
}

export default function PainRebuilt({ onCTAClick }: PainRebuiltProps) {
  const painPoints = [
    {
      problem: "You've watched YouTube videos for months and built nothing.",
      emotion: "Frustrated by wasted time"
    },
    {
      problem: "You know AI matters but have no idea where to start.",
      emotion: "Overwhelmed by options"
    },
    {
      problem: "Agencies want $5k-$10k and take weeks to build.",
      emotion: "Broke by high agency costs"
    },
    {
      problem: "Learning to code feels impossible at this stage of life.",
      emotion: "Intimidated by technical complexity"
    },
    {
      problem: "You're terrified of wasting another month learning theory.",
      emotion: "Anxious about time investment"
    },
    {
      problem: "You want a professional website but don't trust you can build one.",
      emotion: "Doubtful of your own ability"
    }
  ]

  return (
    <section className="relative py-20 sm:py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-6 tracking-tight">
            You're Not Alone In This
            <span className="text-accent block mt-2">This Is Exactly Where Everyone Gets Stuck</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Over 100 business owners have sat where you are now. Frustrated. Ready to launch. But stuck.
          </p>
        </motion.div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              className="relative p-8 rounded-lg"
              style={{
                background: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.2)'
              }}
            >
              {/* Icon */}
              <AlertCircle className="w-6 h-6 text-red-400 mb-4 flex-shrink-0" />

              {/* Problem Statement */}
              <h3 className="text-lg font-bold text-white mb-3">{point.problem}</h3>

              {/* Emotion */}
              <p className="text-sm text-red-300 italic">{point.emotion}</p>
            </motion.div>
          ))}
        </div>

        {/* The Big Fear - Center Stage */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="p-12 rounded-2xl text-center mb-16"
          style={{
            background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(168, 85, 247, 0.04) 100%)',
            border: '2px solid rgba(239, 68, 68, 0.3)'
          }}
        >
          <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-6" />
          <h3 className="text-3xl sm:text-4xl font-black mb-4 text-white">
            The Real Fear
          </h3>
          <p className="text-xl text-gray-300 font-semibold mb-4">
            "What if I build a website but nobody knows it exists?"
          </p>
          <p className="text-lg text-gray-400">
            You could have the perfect website, but if you don't know how to get found, make conversions, or stand out — it changes nothing. You're back to square one.
          </p>
        </motion.div>

        {/* The Truth Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center p-12 rounded-2xl"
          style={{
            background: 'rgba(0, 153, 255, 0.05)',
            border: '1px solid rgba(0, 153, 255, 0.2)'
          }}
        >
          <p className="text-2xl sm:text-3xl font-bold text-accent mb-8">
            What if there was a faster way?
          </p>
          <p className="text-lg text-gray-300 mb-8">
            What if you could build a real, live website <span className="font-bold text-accent">in 3 hours</span> — not weeks — without hiring anyone, without learning to code, and without months of trial and error?
          </p>
          <button
            onClick={onCTAClick}
            className="group inline-flex items-center gap-3 button-premium px-8 py-4 bg-gradient-to-r from-accent via-accent-light to-purple-glow text-dark font-black text-lg uppercase tracking-wide rounded-xl inner-glow-white-lg soft-shadow-lg hover:shadow-glow-lg hover:scale-105 transition-all duration-300"
          >
            Yes, Show Me How →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
