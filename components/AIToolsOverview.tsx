'use client'

import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

interface AIToolsOverviewProps {
  onCTAClick?: () => void
}

export default function AIToolsOverview({ onCTAClick }: AIToolsOverviewProps) {
  const tools = [
    {
      name: 'ChatGPT',
      bestFor: 'Ideas, strategy, marketing plans, content writing, business advice',
      description:
        'ChatGPT is like your AI business assistant. It helps you think through ideas, create marketing plans, write website content, emails, proposals, and solve business problems quickly.',
      strength: 'Excellent for planning, brainstorming, and getting fast business answers.',
      example:
        'A plumber wants more leads and asks ChatGPT to create a 90-day marketing plan for their business, including Google Ads, Facebook content, and referral strategies.'
    },
    {
      name: 'Claude',
      bestFor: 'Deep thinking, long-form writing, structured prompts, better quality strategy work',
      description:
        'Claude is excellent when you want more thoughtful answers, stronger writing, and better structured outputs. It\'s especially useful for business planning, detailed prompts, and refining important content.',
      strength: 'Often produces cleaner, smarter, more strategic outputs than basic AI tools.',
      example:
        'A business owner needs to write a professional proposal for a large client and uses Claude to help structure it, improve the wording, and make it sound more premium and persuasive.'
    },
    {
      name: 'Vercel',
      bestFor: 'Building and launching websites fast',
      description:
        'Vercel allows you to turn your AI-generated ideas into a real live website without needing to be a developer. It helps you build, edit, and publish professional websites quickly.',
      strength: 'Fastest way to go from idea to live website.',
      example:
        'Someone attending the workshop uses ChatGPT to plan their new business website, then uses Vercel to turn that plan into a live website and publish it before lunch.'
    },
    {
      name: 'ElevenLabs',
      bestFor: 'AI voiceovers, video narration, realistic voice cloning',
      description:
        'ElevenLabs helps create professional voiceovers for videos, ads, training content, and social media using highly realistic AI voices.',
      strength: 'Amazing for content creation and video marketing.',
      example:
        'A real estate agent wants a polished voiceover for a property video and uses ElevenLabs to create a professional AI voice narration for social media ads.'
    },
    {
      name: 'Canva AI',
      bestFor: 'Graphics, presentations, social media content, visual branding',
      description:
        'Canva AI makes it easy to create professional designs, presentations, ads, social posts, and business branding without needing a designer.',
      strength: 'Fast, easy visual content creation for everyday business use.',
      example:
        'A café owner needs Instagram promotions for a new lunch special and uses Canva AI to quickly create branded social media posts, flyers, and menu graphics.'
    },
    {
      name: 'Gemini',
      bestFor: 'Gmail, Docs, Sheets, Search, and Google Workspace integration',
      description:
        'Gemini is best if you already live inside Google. It works especially well for businesses using Gmail, Google Docs, Google Sheets, Google Drive, and Google Workspace every day.',
      strength: 'Very powerful for teams already built around Google systems and collaboration.',
      example:
        'A business owner uses Gemini to summarise long email threads, help write replies in Gmail, organise spreadsheets, and speed up work across their Google Workspace.'
    }
  ]

  return (
    <section className="relative py-10 sm:py-16 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-6">
            AI Tools You Should Know
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Before we build anything, let's quickly understand the best AI tools available right now and what they are great at.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              className="relative p-8 rounded-2xl"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.08) 0%, rgba(168, 85, 247, 0.06) 100%)',
                border: '1px solid rgba(0, 153, 255, 0.2)'
              }}
            >
              {/* Tool Icon */}
              <div className="flex items-start gap-4 mb-4">
                <Zap className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-black text-white">{tool.name}</h3>
                </div>
              </div>

              {/* Best For */}
              <div className="mb-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide font-semibold mb-2">Best For</p>
                <p className="text-gray-300 font-semibold">{tool.bestFor}</p>
              </div>

              {/* Description */}
              <div className="mb-4">
                <p className="text-gray-400">{tool.description}</p>
              </div>

              {/* Strength */}
              <div className="mb-4 p-4 rounded-lg" style={{ background: 'rgba(0, 153, 255, 0.05)' }}>
                <p className="text-sm text-gray-400 uppercase tracking-wide font-semibold mb-2">Strength</p>
                <p className="text-accent-light font-semibold">{tool.strength}</p>
              </div>

              {/* Example */}
              <div>
                <p className="text-sm text-gray-400 uppercase tracking-wide font-semibold mb-2">Example</p>
                <p className="text-gray-400 text-sm italic">{tool.example}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center p-8 rounded-2xl"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(0, 153, 255, 0.15)'
          }}
        >
          <p className="text-lg text-gray-300 font-semibold">
            The goal is not to master every AI tool — it's to know which tool to use for the right job.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
