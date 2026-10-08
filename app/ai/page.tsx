'use client'

import WebNav from '@/components/site/WebNav'
import WebFooter from '@/components/site/WebFooter'
import HeroRebuilt from '@/components/HeroRebuilt'
import WhoThisIsFor from '@/components/WhoThisIsFor'
import ServicesOverview from '@/components/ServicesOverview'
import BenefitsSection from '@/components/BenefitsSection'
import WhyThisWorks from '@/components/WhyThisWorks'
import ConsultationCTA from '@/components/ConsultationCTA'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQ from '@/components/FAQ'

export default function AIHome() {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <WebNav />
      <main className="bg-white pt-20">
        <HeroRebuilt onHowItWorksClick={scrollToServices} />

        <div id="who-for">
          <WhoThisIsFor />
        </div>

        <div id="services" className="bg-slate-50 border-y border-slate-200">
          <ServicesOverview />
        </div>

        <BenefitsSection />

        <div id="about" className="bg-slate-50 border-y border-slate-200">
          <WhyThisWorks />
        </div>

        <div id="testimonials">
          <TestimonialsSection />
        </div>

        <div id="faq" className="bg-slate-50 border-y border-slate-200">
          <FAQ />
        </div>

        <ConsultationCTA />
      </main>
      <WebFooter />
    </>
  )
}
