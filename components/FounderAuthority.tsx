'use client'

import { motion } from 'framer-motion'
import { Award, Briefcase, Zap } from 'lucide-react'
import Image from 'next/image'

export default function FounderAuthority() {
  const credentials = [
    {
      icon: Briefcase,
      title: '25+ Years Building Digital Solutions',
      description: 'Real experience scaling startups from $0 to profitability. We\'ve been in the trenches.'
    },
    {
      icon: Award,
      title: '100+ Websites Deployed',
      description: 'From simple landing pages to complex SaaS platforms. We know what works and what doesn\'t.'
    },
    {
      icon: Zap,
      title: 'AI-First Mentality Since Day 1',
      description: 'We stopped doing things manually years ago. This workshop teaches what actually saves us 20+ hours per week.'
    }
  ]

  const founders = [
    {
      name: 'Kristine',
      role: 'Co-Founder',
      bio: 'Kristine has spent the last 7 years building and growing her own Events Management business, using technology, automation, and smart systems to improve efficiency and create better customer experiences. Her passion is helping other business owners discover practical ways AI and automation can save time, reduce stress, and unlock growth.',
      image: '/kristine.jpg'
    },
    {
      name: 'Geoffrey',
      role: 'Co-Founder',
      bio: 'Geoffrey has been building websites and digital solutions for over 25 years. Originally launching GetStarted in 2002 as an internet services business, he has recently rebranded to GetStarted AI to focus on helping businesses use AI to work smarter, market better, and grow faster. He is passionate about making technology simple, practical, and accessible for everyday business owners.',
      image: '/geoffrey.jpg'
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
            Who's Teaching This <br />
            <span className="text-accent">(And Why You Can Trust Us)</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            You're learning from people who actually do this work every day. Not people who teach for a living. People who build for a living and are sharing exactly what works.
          </p>
        </motion.div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {credentials.map((cred, index) => {
            const Icon = cred.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative p-8 rounded-2xl group"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 153, 255, 0.2)'
                }}
                whileHover={{
                  boxShadow: '0 0 32px rgba(0, 153, 255, 0.3)',
                  border: '1px solid rgba(0, 153, 255, 0.4)'
                }}
              >
                {/* Icon */}
                <div className="mb-6 p-3 rounded-lg bg-accent/20 w-fit group-hover:bg-accent/30 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-black text-white mb-3">
                  {cred.title}
                </h3>
                <p className="text-gray-400">
                  {cred.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                className="relative p-8 rounded-2xl"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(0, 153, 255, 0.2)'
                }}
              >
                <div className="flex flex-col items-center mb-6">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={120}
                    height={120}
                    className="rounded-full mb-4 object-cover object-center"
                  />
                  <h3 className="text-2xl font-black text-white">{founder.name}</h3>
                  <p className="text-accent font-bold text-sm">{founder.role}</p>
                </div>
                <p className="text-gray-300 text-center">{founder.bio}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative p-8 sm:p-10 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.12) 0%, rgba(168, 85, 247, 0.08) 100%)',
            border: '1px solid rgba(0, 153, 255, 0.3)'
          }}
        >
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-6">
            Our Philosophy
          </h3>

          <div className="space-y-4 text-lg text-gray-300">
            <p>
              <span className="text-accent font-bold">Practical over theoretical.</span> {' '}
              You don't need to understand how AI works to use it effectively. You need to understand how to USE it.
            </p>

            <p>
              <span className="text-accent font-bold">Results over process.</span> {' '}
              We don't care if you understand every step. We care that you walk out with a working website.
            </p>

            <p>
              <span className="text-accent font-bold">Real tools over tutorials.</span> {' '}
              You'll use the same AI tools we use every day. Not sandbox environments or demo platforms.
            </p>

            <p>
              <span className="text-accent font-bold">Your idea, not ours.</span> {' '}
              This workshop works for your business idea, your niche, your vision. You're not building our template.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
