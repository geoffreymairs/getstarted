'use client'

import { useRef } from 'react'
import HeroRebuilt from '@/components/HeroRebuilt'
import AITrainingWeDeliver from '@/components/AITrainingWeDeliver'
import WhyThisWorks from '@/components/WhyThisWorks'
import FounderAuthority from '@/components/FounderAuthority'
import WhoThisIsFor from '@/components/WhoThisIsFor'
import WorkshopBreakdown from '@/components/WorkshopBreakdown'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQ from '@/components/FAQ'
import WhoThisIsNotFor from '@/components/WhoThisIsNotFor'
import FinalCTA from '@/components/FinalCTA'
import Navigation from '@/components/Navigation'
import AnimatedBackground from '@/components/AnimatedBackground'
import Footer from '@/components/Footer'

export default function Home() {
  const ctaRef = useRef<HTMLDivElement>(null)

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className="overflow-hidden bg-dark">
      {/* Navigation - Fixed at top */}
      <Navigation onCTAClick={scrollToCTA} showCTA={true} />

      {/* ==================== SEAMLESS CINEMATIC EXPERIENCE ==================== */}

      {/* PART 1: HERO - Modern workplace AI training */}
      <div
        id="home"
        className="relative min-h-screen overflow-hidden pt-16"
      >
        {/* Background image - professionals learning AI in an office */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/hero-training.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Top fade overlay - subtle fade from top */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-dark/70 via-dark/40 to-transparent pointer-events-none z-5" />

        {/* Side vignette overlays - protect focal points */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/40 via-transparent to-dark/40 pointer-events-none z-5" />

        {/* Central glow overlay - enhance brand feel */}
        <div className="absolute inset-0 pointer-events-none z-5" style={{
          background: 'radial-gradient(ellipse at center 35%, rgba(0, 153, 255, 0.12) 0%, rgba(168, 85, 247, 0.06) 40%, transparent 75%)',
        }} />

        {/* Animated ambient elements */}
        <div className="absolute inset-0 pointer-events-none z-5">
          <AnimatedBackground />
        </div>

        {/* Hero content */}
        <div className="relative z-10">
          <HeroRebuilt onCTAClick={scrollToCTA} onHowItWorksClick={() => {
            document.getElementById('training')?.scrollIntoView({ behavior: 'smooth' });
          }} />
        </div>

        {/* BOTTOM SOFT TRANSITION FADE - Seamless blend to next section */}
        <div
          className="fade-overlay absolute bottom-0 left-0 right-0 pointer-events-none z-0"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.08) 15%, rgba(15, 23, 42, 0.25) 35%, rgba(15, 23, 42, 0.6) 65%, rgba(15, 23, 42, 0.99) 100%)',
          }}
        />
      </div>

      {/* PART 2: CONTENT SECTION */}
      <div
        className="relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #0f172a 0%, #1a0b2e 35%, #2d1b4e 65%, #1a0b2e 100%)',
          minHeight: 'auto',
        }}
      >
        {/* Soft fog texture - bottom heavy glow */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at 50% 120%, rgba(168, 85, 247, 0.2) 0%, rgba(59, 130, 246, 0.1) 35%, transparent 70%)',
        }} />

        {/* Subtle atmospheric glow - left side */}
        <div className="absolute inset-0 pointer-events-none opacity-30" style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.15), transparent 50%)',
        }} />

        {/* Subtle atmospheric glow - right side */}
        <div className="absolute inset-0 pointer-events-none opacity-25" style={{
          background: 'radial-gradient(circle at 80% 50%, rgba(168, 85, 247, 0.12), transparent 50%)',
        }} />

        {/* Faint stars scattered throughout */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute w-1 h-1 bg-white rounded-full" style={{ top: '15%', left: '10%', opacity: 0.4 }} />
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full" style={{ top: '25%', left: '25%', opacity: 0.3 }} />
          <div className="absolute w-1 h-1 bg-white rounded-full" style={{ top: '35%', right: '15%', opacity: 0.35 }} />
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full" style={{ top: '45%', left: '15%', opacity: 0.25 }} />
          <div className="absolute w-1 h-1 bg-white rounded-full" style={{ top: '55%', right: '20%', opacity: 0.4 }} />
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full" style={{ top: '65%', left: '30%', opacity: 0.3 }} />
          <div className="absolute w-1 h-1 bg-white rounded-full" style={{ top: '75%', right: '30%', opacity: 0.35 }} />
          <div className="absolute w-0.5 h-0.5 bg-white rounded-full" style={{ top: '85%', left: '50%', opacity: 0.25 }} />
        </div>

        {/* Transition lighting from hero section above */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-dark/40 to-transparent pointer-events-none" />

        {/* Animated ambient elements */}
        <div className="absolute inset-0 pointer-events-none">
          <AnimatedBackground />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <WhyThisWorks onCTAClick={scrollToCTA} />
          <div id="training">
            <AITrainingWeDeliver />
          </div>
          <WorkshopBreakdown onCTAClick={scrollToCTA} />
          <div id="about">
            <FounderAuthority />
          </div>
          <div id="who-for">
            <WhoThisIsFor onCTAClick={scrollToCTA} />
          </div>
          <WhoThisIsNotFor />
          <div id="testimonials">
            <TestimonialsSection onCTAClick={scrollToCTA} />
          </div>
          <div id="faq">
            <FAQ onCTAClick={scrollToCTA} />
          </div>
        </div>

        {/* BOTTOM SOFT TRANSITION FADE */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none z-0"
          style={{
            height: '300px',
            background: 'linear-gradient(to bottom, transparent 0%, rgba(15, 23, 42, 0.06) 20%, rgba(15, 23, 42, 0.2) 40%, rgba(15, 23, 42, 0.55) 70%, rgba(15, 23, 42, 0.98) 100%)',
          }}
        />
      </div>

      {/* PART 3: PRICING & BOOKING - Powerful dramatic finale */}
      <div
        id="pricing"
        ref={ctaRef}
        className="relative overflow-hidden flex items-center"
        style={{
          backgroundImage: 'url(/bottom.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark gradient overlay to darken background */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/75 to-dark/85 pointer-events-none z-0" />

        {/* TOP TRANSITION FADE - Seamless blend from middle section */}
        <div
          className="absolute top-0 left-0 right-0 pointer-events-none z-5"
          style={{
            height: '220px',
            background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.99) 0%, rgba(15, 23, 42, 0.85) 35%, rgba(15, 23, 42, 0.5) 70%, transparent 100%)',
          }}
        />

        {/* Side vignette overlays - protect focal points */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/35 via-transparent to-dark/35 pointer-events-none z-5" />

        {/* Powerful dramatic glows for final moment */}
        <div
          className="absolute inset-0 pointer-events-none z-5"
          style={{
            background: 'radial-gradient(ellipse at center 30%, rgba(0, 153, 255, 0.15) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 70%)',
          }}
        />

        {/* Animated ambient elements */}
        <div className="absolute inset-0 pointer-events-none z-5">
          <AnimatedBackground />
        </div>

        {/* Pricing & booking */}
        <div className="relative z-10 w-full py-24">
          <FinalCTA ctaRef={ctaRef} />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  )
}
