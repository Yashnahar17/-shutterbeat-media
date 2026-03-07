import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Music as MusicIcon, Mic2, Headphones, Radio, Search, Lightbulb, TrendingUp } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { portfolio } from '../../data/portfolio'
import { clientsByService } from '../../data/clients'
import { artists } from '../../data/artists'
import ProcessTimeline from '../../components/shared/ProcessTimeline'
import TestimonialsSlider from '../../components/shared/TestimonialsSlider'
import PortfolioSlider from '../../components/shared/PortfolioSlider'
import ClientsGrid from '../../components/shared/ClientsGrid'

const s          = services.find(s => s.id === 'music')
const items      = portfolio.filter(p => p.category === 'Music')
const reviews    = testimonialsByService.music
const clientList = clientsByService.music

const process = [
  { icon:Search,     step:'01', title:'Artist Consultation',  desc:'Understanding your sound, goals, target audience and career trajectory.' },
  { icon:Lightbulb,  step:'02', title:'Production Planning',  desc:'Pre-production sessions, arrangement and session musician booking.' },
  { icon:Mic2,       step:'03', title:'Recording',            desc:'Professional studio recording with our in-house sound engineers and producers.' },
  { icon:Headphones, step:'04', title:'Mixing & Mastering',   desc:'Industry-standard mix and master ready for streaming platforms and broadcast.' },
  { icon:Radio,      step:'05', title:'Publishing & Promo',   desc:'Distribution to Spotify, Apple Music, YouTube and promotional campaign launch.' },
  { icon:TrendingUp, step:'06', title:'Artist Growth',        desc:'Ongoing booking, management and marketing to grow your fanbase and revenue.' },
]

const GRID_STYLE = {
  backgroundImage: 'linear-gradient(rgba(72,90,168,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(72,90,168,.08) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

export default function Music() {
  return (
    <div className="bg-tertiary min-h-screen">
      {/* Banner */}
      <section className="relative min-h-[65vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#F4E8DC]" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-[#F4E8DC] to-primary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-40">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6">
              <MusicIcon size={32} className="text-secondary" />
            </div>
            <span className="section-tag">Our Services</span>
            <h1 className="font-heading text-display text-primary mb-6 max-w-3xl leading-tight">
              Let the World Hear Your <span className="text-gradient">Sound</span>
            </h1>
            <p className="text-primary/50 font-body text-xl max-w-2xl mb-8">{s?.shortDesc}</p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">Work With Us <ArrowRight size={18}/></Link>
          </motion.div>
        </div>
      </section>

      {/* Music Categories */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">What We Offer</span>
            <h2 className="font-heading text-h2 text-primary">Music <span className="text-gradient">Services</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {(s?.categories || []).map((cat, i) => (
              <motion.div key={cat} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
                className="card text-center hover:border-secondary/30 group p-6">
                <MusicIcon size={22} className="text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-heading text-primary text-sm">{cat}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists */}
      <section className="section-padding bg-[#F4E8DC] border-y border-[#D7C2AD]">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Our Roster</span>
            <h2 className="font-heading text-h2 text-primary">Featured <span className="text-gradient">Artists</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {(artists || []).map((a, i) => (
              <motion.div key={a.id} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-secondary/30 flex items-start gap-5">
                <div className="w-16 h-16 rounded-full bg-secondary/20 border-2 border-secondary/30 flex items-center justify-center shrink-0 group-hover:border-secondary transition-colors">
                  <span className="font-heading text-primary text-lg font-bold">
                    {a.name.split(' ').map(n=>n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-secondary text-xs font-body font-semibold tracking-widest uppercase mb-1 block">
                    {a.category} · {a.genre}
                  </span>
                  <h3 className="font-heading text-primary text-base mb-2">{a.name}</h3>
                  <p className="text-primary/50 font-body text-sm mb-4">{a.bio}</p>
                  <Link to="/contact" className="btn-secondary text-xs py-2">Book Artist <ArrowRight size={12}/></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">How We Work</span>
            <h2 className="font-heading text-h2 text-primary">Music Production <span className="text-gradient">Process</span></h2>
          </motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-[#F4E8DC] border-y border-[#D7C2AD]">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Our Work</span>
            <h2 className="font-heading text-h2 text-primary">Music <span className="text-gradient">Portfolio</span></h2>
          </motion.div>
          <PortfolioSlider items={items} />
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Collaborations</span>
            <h2 className="font-heading text-h2 text-primary">Who We've <span className="text-gradient">Worked With</span></h2>
          </motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[#F4E8DC] border-y border-[#D7C2AD]">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="font-heading text-h2 text-primary">Artist <span className="text-gradient">Feedback</span></h2>
          </motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-primary mb-4">Ready to Make <span className="text-gradient">Music?</span></h2>
          <p className="text-primary/50 font-body mb-8 max-w-lg mx-auto">Let's get your sound out to the world.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">Start Your Music Journey <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
