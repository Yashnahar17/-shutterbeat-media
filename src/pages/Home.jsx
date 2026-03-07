import HeroSection         from '../sections/HeroSection'
import WhatWeDo from "../sections/WhatWeDo";
import CountersSection     from '../sections/CountersSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import ClientLogos         from '../sections/ClientLogos'
import CtaSection          from '../sections/CtaSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <WhatWeDo />
      <CountersSection />
      <TestimonialsSection />
      <ClientLogos />
      <CtaSection />
      
    </div>
  )
}
