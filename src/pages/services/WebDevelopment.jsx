import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Monitor, ShoppingCart, Palette, Search, FileText, BookOpen, Lightbulb, PenTool, Rocket, TrendingUp } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { portfolio } from '../../data/portfolio'
import { clientsByService } from '../../data/clients'
import ProcessTimeline from '../../components/shared/ProcessTimeline'
import TestimonialsSlider from '../../components/shared/TestimonialsSlider'
import PortfolioSlider from '../../components/shared/PortfolioSlider'
import ClientsGrid from '../../components/shared/ClientsGrid'

const s          = services.find(s => s.id === 'web-development')
const items      = portfolio.filter(p => p.category === 'Web Development')
const reviews    = testimonialsByService['web-development']
const clientList = clientsByService['web-development']

const breakdown = [
  { icon:FileText,     title:'Content Strategy',    desc:'Site architecture, copywriting and content hierarchy for maximum engagement.' },
  { icon:BookOpen,     title:'Blogs & CMS',         desc:'WordPress, Webflow or custom CMS so you can update content without touching code.' },
  { icon:Monitor,      title:'Website Development', desc:'Pixel-perfect, performance-optimised websites built with React or WordPress.' },
  { icon:Palette,      title:'UI/UX Design',        desc:'User-centred design systems, wireframes and prototypes that convert visitors.' },
  { icon:Search,       title:'SEO',                 desc:'Technical SEO, on-page optimisation and schema markup to rank higher on Google.' },
  { icon:ShoppingCart, title:'E-Commerce',          desc:'Shopify, WooCommerce and custom stores with seamless checkout experiences.' },
]

const process = [
  { icon:Search,     step:'01', title:'Discovery & Scope',   desc:'Requirements gathering, competitor analysis and technical specification document.' },
  { icon:Lightbulb,  step:'02', title:'Design & Wireframes', desc:'UI/UX design, interactive prototypes and client-approved visual designs.' },
  { icon:PenTool,    step:'03', title:'Development',         desc:'Clean, modular code built to performance and accessibility standards.' },
  { icon:Rocket,     step:'04', title:'Testing & Launch',    desc:'Cross-browser QA, speed optimisation, staging review and go-live deployment.' },
  { icon:TrendingUp, step:'05', title:'Support & Growth',    desc:'Post-launch support, analytics monitoring and iterative improvements.' },
]

const GRID_STYLE = {
  backgroundImage: 'linear-gradient(rgba(72,90,168,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(72,90,168,.08) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

export default function WebDevelopment() {
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
              <Code size={32} className="text-secondary" />
            </div>
            <span className="section-tag">Our Services</span>
            <h1 className="font-heading text-display text-primary mb-6 max-w-3xl leading-tight">
              Putting the <span className="text-gradient">Tech</span> in Your Idea
            </h1>
            <p className="text-primary/50 font-body text-xl max-w-2xl mb-8">{s?.shortDesc}</p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">Build My Website <ArrowRight size={18}/></Link>
          </motion.div>
        </div>
      </section>

      {/* Breakdown */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">What We Offer</span>
            <h2 className="font-heading text-h2 text-primary">Development <span className="text-gradient">Services</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {breakdown.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-secondary/30">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <item.icon size={20} className="text-secondary" />
                </div>
                <h3 className="font-heading text-primary text-base mb-2">{item.title}</h3>
                <p className="text-primary/50 font-body text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[#F4E8DC] border-y border-[#D7C2AD]">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Development Workflow</span>
            <h2 className="font-heading text-h2 text-primary">Our Build <span className="text-gradient">Process</span></h2>
          </motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Our Work</span>
            <h2 className="font-heading text-h2 text-primary">Web <span className="text-gradient">Portfolio</span></h2>
          </motion.div>
          <PortfolioSlider items={items} />
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-[#F4E8DC] border-y border-[#D7C2AD]">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Clients</span>
            <h2 className="font-heading text-h2 text-primary">Websites We've <span className="text-gradient">Built</span></h2>
          </motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="font-heading text-h2 text-primary">Client <span className="text-gradient">Reviews</span></h2>
          </motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#F4E8DC] border-t border-[#D7C2AD]">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-primary mb-4">Ready to <span className="text-gradient">Build?</span></h2>
          <p className="text-primary/50 font-body mb-8 max-w-lg mx-auto">Let's bring your digital idea to life.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">Start My Project <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
