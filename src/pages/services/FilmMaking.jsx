import { motion as Motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Film, Search, Lightbulb, Video, Edit, CheckCircle } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { visiblePortfolio } from '../../data/portfolio'
import { clientsByService } from '../../data/clients'
import ProcessTimeline from '../../components/shared/ProcessTimeline'
import TestimonialsSlider from '../../components/shared/TestimonialsSlider'
import PortfolioSlider from '../../components/shared/PortfolioSlider'
import ClientsGrid from '../../components/shared/ClientsGrid'

const s          = services.find(s => s.id === 'film-making')
const items      = visiblePortfolio.filter(p => p.category === 'Film Making')
const reviews    = testimonialsByService['film-making']
const clientList = clientsByService['film-making']

const process = [
  { icon:Search,      step:'01', title:'Pre-Production',     desc:'Script, storyboard, location scouting, casting and production scheduling.' },
  { icon:Lightbulb,   step:'02', title:'Creative Direction', desc:'Visual style, tone, color palette and cinematography approach defined.' },
  { icon:Video,       step:'03', title:'Production',         desc:'Professional filming with our crew, equipment and lighting setup on location.' },
  { icon:Edit,        step:'04', title:'Post-Production',    desc:'Editing, color grading, sound design, VFX and finishing for every platform.' },
  { icon:CheckCircle, step:'05', title:'Delivery',           desc:'Final deliverables in all required formats — web, broadcast and social media.' },
]

const GRID_STYLE = {
  backgroundImage: 'linear-gradient(rgba(72,90,168,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(72,90,168,.08) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

export default function FilmMaking() {
  return (
    <div className="bg-white min-h-screen">
      {/* Banner */}
      <section className="relative min-h-[58vh] sm:min-h-[65vh] flex items-end pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-white to-secondary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-32 sm:pt-40">
          <Motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }} className="max-w-4xl rounded-[1.5rem] border border-primary/12 bg-white/72 backdrop-blur-sm px-6 py-7 sm:p-9 shadow-[0_20px_44px_rgba(72,90,168,0.14)]">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <Film size={32} className="text-secondary" />
            </div>
            <span className="section-tag">Our Services</span>
            <h1 className="font-heading text-display text-primary mb-6 max-w-3xl leading-tight">
              Films That <span className="text-gradient">Move</span> People
            </h1>
            <p className="text-primary/50 font-body text-base sm:text-lg max-w-2xl mb-8">{s?.shortDesc}</p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4 shadow-[0_16px_34px_rgba(72,90,168,0.24)]">Start a Film Project <ArrowRight size={18}/></Link>
          </Motion.div>
        </div>
      </section>

      {/* Film Types */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">What We Create</span>
            <h2 className="font-heading text-h2 text-primary">Film <span className="text-gradient">Services</span></h2>
          </Motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {(s?.categories || []).map((cat, i) => (
              <Motion.div key={cat} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.07 }}
                className="card text-center hover:border-secondary/30 group p-6">
                <Film size={22} className="text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-heading text-primary text-sm">{cat}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white border-y border-tertiary">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Production Workflow</span>
            <h2 className="font-heading text-h2 text-primary">Our Film <span className="text-gradient">Process</span></h2>
          </Motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Our Work</span>
            <h2 className="font-heading text-h2 text-primary">Film <span className="text-gradient">Portfolio</span></h2>
          </Motion.div>
          <PortfolioSlider items={items} />
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-white border-y border-tertiary">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Clients</span>
            <h2 className="font-heading text-h2 text-primary">Brands We've <span className="text-gradient">Filmed</span></h2>
          </Motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="font-heading text-h2 text-primary">What Clients <span className="text-gradient">Say</span></h2>
          </Motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white border-t border-tertiary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-primary mb-4">Ready to <span className="text-gradient">Film?</span></h2>
          <p className="text-primary/50 font-body mb-8 max-w-lg mx-auto">Let's tell your story on screen.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4 shadow-[0_16px_34px_rgba(72,90,168,0.24)]">Start a Film Project <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
