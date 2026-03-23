import { useState } from 'react'
import { motion as Motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Camera, Search, Lightbulb, Image, CheckCircle } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { portfolio } from '../../data/portfolio'
import { clientsByService } from '../../data/clients'
import PageBanner from '../../components/shared/PageBanner'
import ProcessTimeline from '../../components/shared/ProcessTimeline'
import TestimonialsSlider from '../../components/shared/TestimonialsSlider'
import PortfolioSlider from '../../components/shared/PortfolioSlider'
import ClientsGrid from '../../components/shared/ClientsGrid'

const s          = services.find(s => s.id === 'photography')
const items      = portfolio.filter(p => p.category === 'Photography')
const reviews    = testimonialsByService.photography
const clientList = clientsByService.photography

const photographers = [
  { name:'Arjun Mehta',  specialty:'Wedding & Portraits', exp:'5 yrs', style:'Candid & Editorial' },
  { name:'Priya Kapoor', specialty:'Fashion & Lifestyle',  exp:'4 yrs', style:'High Fashion' },
  { name:'Rohit Sharma', specialty:'Food & Product',       exp:'6 yrs', style:'Commercial & Minimalist' },
  { name:'Sneha Desai',  specialty:'Events & Corporate',   exp:'3 yrs', style:'Documentary' },
]

const process = [
  { icon:Search,      step:'01', title:'Brief & Scouting',     desc:'Understanding your vision, scouting locations and planning the perfect shot list.' },
  { icon:Lightbulb,   step:'02', title:'Concept & Moodboard',  desc:'Creating moodboards and visual direction aligned to your brand and goals.' },
  { icon:Camera,      step:'03', title:'The Shoot',            desc:'Professional shoot day with our team ensuring every frame is intentional and stunning.' },
  { icon:Image,       step:'04', title:'Editing & Retouching', desc:'Post-production magic — color grading, retouching, and final export in all formats.' },
  { icon:CheckCircle, step:'05', title:'Delivery',             desc:'Final gallery delivered via private link with all licensed files ready to use.' },
]

export default function Photography() {
  const [activeCat, setActiveCat] = useState('All')
  const cats    = ['All', ...(s?.categories?.slice(0,6) || [])]
  const filtered = activeCat === 'All' ? items : items.filter(p =>
    p.title.toLowerCase().includes(activeCat.toLowerCase())
  )

  return (
    <div className="bg-white min-h-screen">
      <PageBanner
        icon={Camera}
        title="Every Frame Tells a "
        accent="Story"
        description={s?.shortDesc}
        ctaLabel="Book a Shoot"
        gradientClass="from-primary/15 via-white to-secondary/10"
        orbOneClass="bg-primary/10"
        orbTwoClass="bg-secondary/10"
        iconShellClass="bg-primary/10 border-primary/20"
      />

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Specialisations</span>
            <h2 className="font-heading text-h2 text-primary">Photography <span className="text-gradient">Categories</span></h2>
          </Motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {(s?.categories || []).map((cat, i) => (
              <Motion.div key={cat} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.06 }}
                className="card text-center hover:border-secondary/30 group p-5">
                <Camera size={22} className="text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-heading text-primary text-sm">{cat}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photographers */}
      <section className="section-padding bg-white border-y border-tertiary">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Our Team</span>
            <h2 className="font-heading text-h2 text-primary">Meet Our <span className="text-gradient">Photographers</span></h2>
          </Motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {photographers.map((p, i) => (
              <Motion.div key={p.name} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-primary/30 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 border-2 border-primary/30 group-hover:border-secondary/50 transition-colors">
                  <span className="font-heading text-primary text-xl font-bold">{p.name.split(' ').map(n=>n[0]).join('')}</span>
                </div>
                <h3 className="font-heading text-primary text-base mb-1">{p.name}</h3>
                <p className="text-secondary text-xs font-body font-semibold mb-1">{p.specialty}</p>
                <p className="text-primary/55 text-xs font-body mb-4">{p.exp} · {p.style}</p>
                <Link to="/contact" className="btn-secondary text-xs py-2 justify-center w-full">Hire <ArrowRight size={12}/></Link>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">How It Works</span>
            <h2 className="font-heading text-h2 text-primary">Our Shoot <span className="text-gradient">Process</span></h2>
          </Motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* Portfolio with filter */}
      <section className="section-padding bg-white border-y border-tertiary">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-10">
            <span className="section-tag">Our Work</span>
            <h2 className="font-heading text-h2 text-primary">Photo <span className="text-gradient">Portfolio</span></h2>
          </Motion.div>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {cats.map(cat => (
              <button key={cat} type="button" onClick={() => setActiveCat(cat)}
                className={`min-h-[44px] rounded-full border px-4 py-2 text-sm font-body transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 ${
                  activeCat === cat
                    ? 'bg-primary border-primary text-tertiary'
                    : 'border-tertiary text-primary/70 hover:border-primary/40 hover:text-primary'
                }`}>{cat}</button>
            ))}
          </div>
          <PortfolioSlider items={filtered.length ? filtered : items} />
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Clients</span>
            <h2 className="font-heading text-h2 text-primary">Who We've <span className="text-gradient">Shot For</span></h2>
          </Motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white border-y border-tertiary">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="font-heading text-h2 text-primary">Client <span className="text-gradient">Stories</span></h2>
          </Motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-primary mb-4">Ready to <span className="text-gradient">Shoot?</span></h2>
          <p className="text-primary/50 font-body mb-8 max-w-lg mx-auto">Let's capture moments that last forever.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4 shadow-[0_16px_34px_rgba(72,90,168,0.24)]">Book a Shoot <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
