import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Music, Camera, Film, Brush, Search, Lightbulb, Users, Star, CheckCircle, MapPin } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { portfolio } from '../../data/portfolio'
import { clientsByService } from '../../data/clients'
import ProcessTimeline from '../../components/shared/ProcessTimeline'
import TestimonialsSlider from '../../components/shared/TestimonialsSlider'
import PortfolioSlider from '../../components/shared/PortfolioSlider'
import ClientsGrid from '../../components/shared/ClientsGrid'

const s          = services.find(s => s.id === 'events')
const items      = portfolio.filter(p => p.category === 'Events')
const reviews    = testimonialsByService.events
const clientList = clientsByService.events

const artistTypes = [
  { icon:Music,   title:'Musicians & Bands',  desc:'Solo artists, duos and full bands for weddings, concerts and corporate shows.' },
  { icon:Users,   title:'Disk Jockeys',       desc:'High-energy DJs for weddings, parties, corporate events and nightclub gigs.' },
  { icon:Camera,  title:'Photographers',      desc:'Event and documentary photographers to capture every precious moment.' },
  { icon:Film,    title:'Film Makers',        desc:'Videographers and cinematographers for event coverage and highlight reels.' },
  { icon:Brush,   title:'Tattoo Artists',     desc:'Live tattooing for brand activations, festivals and private events.' },
  { icon:Star,    title:'Painters & Artists', desc:'Live painters and visual artists to create memorable experiential art.' },
]

const upcoming = [
  { title:'Summer Music Fest 2026',  date:'June 14, 2026',  location:'Pune',   type:'Concert' },
  { title:'Corporate Summit 2026',   date:'July 2, 2026',   location:'Mumbai', type:'Corporate' },
  { title:'Wedding Showcase Expo',   date:'Aug 10, 2026',   location:'Pune',   type:'Exhibition' },
]

const process = [
  { icon:Search,      step:'01', title:'Requirement Brief',       desc:'Understanding event type, scale, budget, venue and audience expectations.' },
  { icon:Lightbulb,   step:'02', title:'Concept & Planning',      desc:'Theme development, vendor shortlisting, timeline creation and logistics mapping.' },
  { icon:Users,       step:'03', title:'Artist & Vendor Booking', desc:'Booking confirmed artists, vendors and production teams with contracts in place.' },
  { icon:Calendar,    step:'04', title:'Event Execution',         desc:'On-ground coordination ensuring smooth flow, technical production and guest experience.' },
  { icon:CheckCircle, step:'05', title:'Post-Event Wrap',         desc:'Coverage delivery, feedback collection and documentation for future reference.' },
]

const GRID_STYLE = {
  backgroundImage: 'linear-gradient(rgba(72,90,168,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(72,90,168,.08) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

export default function Events() {
  return (
    <div className="bg-tertiary min-h-screen">
      {/* Banner */}
      <section className="relative min-h-[65vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#F4E8DC]" />
        <div className="absolute inset-0 bg-gradient-to-br from-tertiary/15 via-[#F4E8DC] to-secondary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-40">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <div className="w-16 h-16 rounded-2xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center mb-6">
              <Calendar size={32} className="text-tertiary" />
            </div>
            <span className="section-tag">Our Services</span>
            <h1 className="font-heading text-display text-primary mb-6 max-w-3xl leading-tight">
              Events That Leave an <span className="text-gradient">Impression</span>
            </h1>
            <p className="text-primary/50 font-body text-xl max-w-2xl mb-8">{s?.shortDesc}</p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">Plan Your Event <ArrowRight size={18}/></Link>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Events We Handle</span>
            <h2 className="font-heading text-h2 text-primary">Event <span className="text-gradient">Types</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {(s?.eventTypes || s?.categories || []).map((e, i) => (
              <motion.div key={e} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card text-center hover:border-tertiary/30 group p-6">
                <Calendar size={22} className="text-tertiary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-heading text-primary text-sm">{e}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Section */}
      <section className="section-padding bg-[#F4E8DC] border-y border-[#D7C2AD]">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Artists We Manage</span>
            <h2 className="font-heading text-h2 text-primary">Artist <span className="text-gradient">Categories</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {artistTypes.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-secondary/30 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <a.icon size={20} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading text-primary text-base mb-1">{a.title}</h3>
                  <p className="text-primary/50 font-body text-sm leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/contact" className="btn-secondary">Book an Artist <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">How We Work</span>
            <h2 className="font-heading text-h2 text-primary">Event Planning <span className="text-gradient">Process</span></h2>
          </motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-[#F4E8DC] border-y border-[#D7C2AD]">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">What's Coming</span>
            <h2 className="font-heading text-h2 text-primary">Upcoming <span className="text-gradient">Events</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {upcoming.map((e, i) => (
              <motion.div key={e.title} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-tertiary/30">
                <span className="text-tertiary text-xs font-body font-semibold tracking-widest uppercase mb-3 block">{e.type}</span>
                <h3 className="font-heading text-primary text-base mb-3">{e.title}</h3>
                <div className="flex flex-col gap-1.5 text-primary/40 text-xs font-body">
                  <span className="flex items-center gap-2"><Calendar size={11}/>{e.date}</span>
                  <span className="flex items-center gap-2"><MapPin size={11}/>{e.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Past Events</span>
            <h2 className="font-heading text-h2 text-primary">Event <span className="text-gradient">Portfolio</span></h2>
          </motion.div>
          <PortfolioSlider items={items} />
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-[#F4E8DC] border-y border-[#D7C2AD]">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Clients</span>
            <h2 className="font-heading text-h2 text-primary">Events Managed <span className="text-gradient">For</span></h2>
          </motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="font-heading text-h2 text-primary">What Clients <span className="text-gradient">Say</span></h2>
          </motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#F4E8DC] border-t border-[#D7C2AD]">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-primary mb-4">Let's Plan Your <span className="text-gradient">Event</span></h2>
          <p className="text-primary/50 font-body mb-8 max-w-lg mx-auto">From intimate gatherings to grand productions — we handle it all.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">Plan My Event <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
