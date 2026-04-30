'use client'

import { motion } from 'framer-motion'

const problems = [
  {
    icon: '📚',
    title: 'Learning Without Doing',
    description: 'Most AI courses teach theory. You watch, take notes, then do nothing with it.'
  },
  {
    icon: '🤯',
    title: 'Too Many Tools',
    description: 'So many AI tools available. Which ones actually matter for business?'
  },
  {
    icon: '⏸️',
    title: 'No Clear Path',
    description: "You want to build something real, but you don't know where to start or how to use AI."
  },
  {
    icon: '😞',
    title: "Theory Doesn't Equal Results",
    description: 'You could spend months learning AI concepts. You need results now.'
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Problem() {
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
            <span className="text-white">You Want to Use AI for </span>
            <span className="bg-gradient-to-r from-accent via-accent-light to-accent-dark bg-clip-text text-transparent">
              Your Business
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            But most learning methods won't get you results fast enough.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16"
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ translateY: -8, boxShadow: '0 0 32px rgba(0, 153, 255, 0.4)' }}
              className="glass p-8 rounded-xl group transition-all duration-300 shadow-glow hover:shadow-glow-lg"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{problem.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{problem.title}</h3>
              <p className="text-gray-400 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass text-center rounded-xl p-8 sm:p-12 shadow-glow hover:shadow-glow-lg transition-all"
        >
          <p className="text-2xl sm:text-3xl font-bold text-white mb-4">
            What if you could do this in <span className="text-accent">3 hours?</span>
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Learn AI by doing. Not theory, not watching.
            <br />
            <span className="text-accent-light font-semibold">Build, launch, and own a real website.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
