import { motion as Motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Palette, FileText, Package, Grid, BookOpen, Search, PenTool, Lightbulb, CheckCircle } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { portfolio } from '../../data/portfolio'
import { clientsByService } from '../../data/clients'
import PageBanner from '../../components/shared/PageBanner'
import ProcessTimeline from '../../components/shared/ProcessTimeline'
import TestimonialsSlider from '../../components/shared/TestimonialsSlider'
import PortfolioSlider from '../../components/shared/PortfolioSlider'
import ClientsGrid from '../../components/shared/ClientsGrid'

const s          = services.find(s => s.id === 'branding')
const items      = portfolio.filter(p => p.category === 'Branding')
const reviews    = testimonialsByService.branding
const clientList = clientsByService.branding

const offerings = [
  { icon:Search,   title:'Brand Strategy',   desc:'Deep-dive research into your market, competitors and audience to define your positioning and messaging framework.' },
  { icon:Palette,  title:'Visual Identity',  desc:'Color palettes, typography systems, imagery styles and the complete visual language of your brand.' },
  { icon:PenTool,  title:'Logo Design',      desc:'Distinctive, versatile logos that work across every medium — digital, print, signage and merchandise.' },
  { icon:BookOpen, title:'Brand Guidelines', desc:'A comprehensive brand bible that ensures consistency across every touchpoint and team member.' },
  { icon:Package,  title:'Packaging Design', desc:'Shelf-stopping packaging that communicates your brand story and drives purchase decisions.' },
  { icon:Grid,     title:'Collateral Kits',  desc:'Business cards, letterheads, presentations, social templates — everything to look professional.' },
]

const process = [
  { icon:Search,      step:'01', title:'Discovery & Research',   desc:'We dive deep into your business, audience, competitors and goals to build a strategic foundation.' },
  { icon:Lightbulb,   step:'02', title:'Strategy & Concepts',    desc:'Brand positioning, messaging hierarchy and initial creative directions developed for review.' },
  { icon:PenTool,     step:'03', title:'Design & Refinement',    desc:'Logos, palettes, typography — crafted by our designers and refined through feedback rounds.' },
  { icon:FileText,    step:'04', title:'Guidelines & Delivery',  desc:'Final assets packaged with a comprehensive brand guidelines document ready for production.' },
  { icon:CheckCircle, step:'05', title:'Launch Support',         desc:'Rollout assistance across digital and print ensuring consistent application from day one.' },
]

export default function Branding() {
  return (
    <div className="bg-white min-h-screen">
      <PageBanner
        icon={Layers}
        title="Build a Brand People "
        accent="Remember"
        description={s?.shortDesc}
        ctaLabel="Start Your Brand Journey"
        gradientClass="from-tertiary/15 via-white to-primary/10"
        orbOneClass="bg-tertiary/20"
        orbTwoClass="bg-primary/10"
        iconShellClass="bg-tertiary/10 border-tertiary/30"
        iconClassName="text-primary"
      />

      {/* ── What We Provide ───────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">What We Provide</span>
            <h2 className="font-heading text-h2 text-primary">Branding <span className="text-gradient">Services</span></h2>
          </Motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o, i) => (
              <Motion.div key={o.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-tertiary/30">
                <div className="w-11 h-11 rounded-xl bg-white/10 border border-tertiary/20 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <o.icon size={20} className="text-tertiary" />
                </div>
                <h3 className="font-heading text-primary text-base mb-2">{o.title}</h3>
                <p className="text-primary/50 font-body text-sm leading-relaxed">{o.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────── */}
      <section className="section-padding bg-white border-y border-tertiary">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">How We Work</span>
            <h2 className="font-heading text-h2 text-primary">Our Branding <span className="text-gradient">Process</span></h2>
          </Motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* ── Portfolio ─────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Our Work</span>
            <h2 className="font-heading text-h2 text-primary">Branding <span className="text-gradient">Portfolio</span></h2>
          </Motion.div>
          <PortfolioSlider items={items} />
        </div>
      </section>

      {/* ── Clients ───────────────────────────── */}
      <section className="section-padding bg-white border-y border-tertiary">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Who We've Worked With</span>
            <h2 className="font-heading text-h2 text-primary">Branding <span className="text-gradient">Clients</span></h2>
          </Motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* ── Testimonials ──────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">What Clients Say</span>
            <h2 className="font-heading text-h2 text-primary">Branding <span className="text-gradient">Testimonials</span></h2>
          </Motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────── */}
      <section className="section-padding bg-white border-t border-tertiary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-primary mb-4">Ready to Build Your <span className="text-gradient">Brand?</span></h2>
          <p className="text-primary/50 font-body mb-8 max-w-lg mx-auto">Let's create a brand identity that stands out and lasts.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4 shadow-[0_16px_34px_rgba(72,90,168,0.24)]">Start a Brand Project <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
