'use client'

import { motion } from 'framer-motion'

const differences = [
  {
    title: 'Hands-On, Not Theoretical',
    description: 'No lectures. We build a real website in 3 hours using AI. You do it, not watch it.',
    icon: '🛠️'
  },
  {
    title: 'Live Workshop, Not Pre-Recorded',
    description: 'Real instructor, real-time guidance. Ask questions, get answers immediately.',
    icon: '🎯'
  },
  {
    title: 'Your Website, Not Generic',
    description: "Build a site for YOUR business, with YOUR ideas, YOUR brand. It's actually useful.",
    icon: '🌐'
  },
  {
    title: 'Real Results, Not Inspiration',
    description: "You don't leave motivated to start. You leave with a live website deployed and ready to use.",
    icon: '🚀'
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

export default function WhyDifferent() {
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
            Why This AI Workshop <span className="bg-gradient-to-r from-accent via-accent-light to-accent-dark bg-clip-text text-transparent">Actually Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Most AI courses teach theory. We teach you by building.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {differences.map((diff, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ translateY: -12, scale: 1.02 }}
              className="p-8 rounded-xl bg-dark-light/30 backdrop-blur-lg border border-accent/40 hover:border-accent/80 transition-all shadow-glow hover:shadow-glow-lg group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{diff.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{diff.title}</h3>
              <p className="text-gray-300 leading-relaxed font-medium">{diff.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-xl bg-dark-light/40 backdrop-blur-lg border border-accent/50 hover:border-accent/80 p-8 sm:p-16 text-center shadow-glow hover:shadow-glow-lg transition-all"
        >
          <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">
            The <span className="bg-gradient-to-r from-accent to-purple-glow bg-clip-text text-transparent">Bottom Line</span>
          </h3>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto font-semibold leading-relaxed">
            Most people spend months learning AI. You'll <span className="text-accent font-bold">spend 3 hours building</span> with AI. You'll walk out with a <span className="text-accent-light font-bold">real, live website</span> and the skills to <span className="text-accent">build more.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
