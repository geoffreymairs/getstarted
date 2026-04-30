'use client'

import { motion } from 'framer-motion'

const pathway = [
  {
    level: 'Beginner',
    title: 'Build & Launch Your Website Using AI',
    description: 'Master the fundamentals and create your first project',
    status: 'Available Now',
    highlight: true,
  },
  {
    level: 'Intermediate',
    title: 'Intermediate AI Workshops',
    description: 'Go deeper and build more complex solutions',
    status: 'Coming Soon',
    highlight: false,
  },
  {
    level: 'Expert',
    title: 'Expert AI Workshops',
    description: 'Master advanced techniques and system design',
    status: 'Coming Soon',
    highlight: false,
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function FuturePath() {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Your <span className="bg-gradient-to-r from-accent via-accent-light to-accent-dark bg-clip-text text-transparent">Learning Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start here. Keep going higher.
          </p>
        </motion.div>

        {/* Pathway cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
        >
          {pathway.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Highlight border for beginner */}
              {item.highlight && (
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent via-accent-light to-accent-dark rounded-xl opacity-50 group-hover:opacity-100 transition-all blur"></div>
              )}

              <div className={`relative p-8 rounded-xl backdrop-blur-md border transition-all ${
                item.highlight
                  ? 'bg-accent/15 border-accent/50'
                  : 'bg-white/5 border-white/10 hover:border-accent/30'
              }`}>

                {/* Level badge */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wide ${
                  item.highlight
                    ? 'bg-accent text-dark'
                    : 'bg-accent/10 text-accent'
                }`}>
                  {item.level}
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 h-12">
                  {item.description}
                </p>

                {/* Status badge */}
                <div className={`inline-block px-4 py-2 rounded-lg text-sm font-semibold ${
                  item.highlight
                    ? 'bg-gradient-to-r from-accent to-accent-light text-dark'
                    : 'bg-accent/10 text-accent border border-accent/20'
                }`}>
                  {item.status}
                </div>

                {/* START HERE label */}
                {item.highlight && (
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -top-4 right-6"
                  >
                    <div className="px-3 py-1 bg-accent text-dark text-xs font-bold rounded-full">
                      START HERE
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass rounded-xl p-8 sm:p-12 text-center shadow-glow hover:shadow-glow-lg transition-all"
        >
          <p className="text-lg text-gray-300 mb-2">
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent font-semibold">100+ participants</span> have already started their AI journey.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Ready to join them? Register your interest for the Beginner workshop now.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
