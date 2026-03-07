import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Camera, Search, Lightbulb, Image, CheckCircle } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { portfolio } from '../../data/portfolio'
import { clientsByService } from '../../data/clients'
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
  { icon:Image,       step:'04', title:'Editing & Retouching', desc:'Post-production magic — colour grading, retouching and final export in all formats.' },
  { icon:CheckCircle, step:'05', title:'Delivery',             desc:'Final gallery delivered via private link with all licensed files ready to use.' },
]

const GRID_STYLE = {
  backgroundImage: 'linear-gradient(rgba(72,90,168,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(72,90,168,.08) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

export default function Photography() {
  const [activeCat, setActiveCat] = useState('All')
  const cats    = ['All', ...(s?.categories?.slice(0,6) || [])]
  const filtered = activeCat === 'All' ? items : items.filter(p =>
    p.title.toLowerCase().includes(activeCat.toLowerCase())
  )

  return (
    <div className="bg-tertiary min-h-screen">
      {/* Banner */}
      <section className="relative min-h-[65vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#F4E8DC]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-[#F4E8DC] to-secondary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-40">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <Camera size={32} className="text-secondary" />
            </div>
            <span className="section-tag">Our Services</span>
            <h1 className="font-heading text-display text-primary mb-6 max-w-3xl leading-tight">
              Every Frame Tells a <span className="text-gradient">Story</span>
            </h1>
            <p className="text-primary/50 font-body text-xl max-w-2xl mb-8">{s?.shortDesc}</p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">Book a Shoot <ArrowRight size={18}/></Link>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Specialisations</span>
            <h2 className="font-heading text-h2 text-primary">Photography <span className="text-gradient">Categories</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {(s?.categories || []).map((cat, i) => (
              <motion.div key={cat} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.06 }}
                className="card text-center hover:border-secondary/30 group p-5">
                <Camera size={22} className="text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-heading text-primary text-sm">{cat}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photographers */}
      <section className="section-padding bg-[#F4E8DC] border-y border-[#D7C2AD]">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Our Team</span>
            <h2 className="font-heading text-h2 text-primary">Meet Our <span className="text-gradient">Photographers</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {photographers.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-primary/30 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 border-2 border-primary/30 group-hover:border-secondary/50 transition-colors">
                  <span className="font-heading text-primary text-xl font-bold">{p.name.split(' ').map(n=>n[0]).join('')}</span>
                </div>
                <h3 className="font-heading text-primary text-base mb-1">{p.name}</h3>
                <p className="text-secondary text-xs font-body font-semibold mb-1">{p.specialty}</p>
                <p className="text-primary/30 text-xs font-body mb-4">{p.exp} · {p.style}</p>
                <Link to="/contact" className="btn-secondary text-xs py-2 justify-center w-full">Hire <ArrowRight size={12}/></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">How It Works</span>
            <h2 className="font-heading text-h2 text-primary">Our Shoot <span className="text-gradient">Process</span></h2>
          </motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* Portfolio with filter */}
      <section className="section-padding bg-[#F4E8DC] border-y border-[#D7C2AD]">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-10">
            <span className="section-tag">Our Work</span>
            <h2 className="font-heading text-h2 text-primary">Photo <span className="text-gradient">Portfolio</span></h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {cats.map(cat => (
              <button key={cat} onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-sm font-body border transition-all duration-200 ${
                  activeCat === cat
                    ? 'bg-primary border-primary text-tertiary'
                    : 'border-[#D7C2AD] text-primary/50 hover:border-primary/40 hover:text-primary'
                }`}>{cat}</button>
            ))}
          </div>
          <PortfolioSlider items={filtered.length ? filtered : items} />
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Clients</span>
            <h2 className="font-heading text-h2 text-primary">Who We've <span className="text-gradient">Shot For</span></h2>
          </motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#F4E8DC] border-y border-[#D7C2AD]">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="font-heading text-h2 text-primary">Client <span className="text-gradient">Stories</span></h2>
          </motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-primary mb-4">Ready to <span className="text-gradient">Shoot?</span></h2>
          <p className="text-primary/50 font-body mb-8 max-w-lg mx-auto">Let's capture moments that last forever.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">Book a Shoot <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
