import { motion as Motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Monitor, ShoppingCart, Palette, Search, FileText, BookOpen, Lightbulb, PenTool, Rocket, TrendingUp } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { portfolio } from '../../data/portfolio'
import { clientsByService } from '../../data/clients'
import PageBanner from '../../components/shared/PageBanner'
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
  { icon:Monitor,      title:'Website Development', desc:'Pixel-perfect, performance-optimized websites built with React or WordPress.' },
  { icon:Palette,      title:'UI/UX Design',        desc:'User-centred design systems, wireframes and prototypes that convert visitors.' },
  { icon:Search,       title:'SEO',                 desc:'Technical SEO, on-page optimization, and schema markup to rank higher on Google.' },
  { icon:ShoppingCart, title:'E-Commerce',          desc:'Shopify, WooCommerce and custom stores with seamless checkout experiences.' },
]

const process = [
  { icon:Search,     step:'01', title:'Discovery & Scope',   desc:'Requirements gathering, competitor analysis and technical specification document.' },
  { icon:Lightbulb,  step:'02', title:'Design & Wireframes', desc:'UI/UX design, interactive prototypes and client-approved visual designs.' },
  { icon:PenTool,    step:'03', title:'Development',         desc:'Clean, modular code built to performance and accessibility standards.' },
  { icon:Rocket,     step:'04', title:'Testing & Launch',    desc:'Cross-browser QA, speed optimization, staging review, and go-live deployment.' },
  { icon:TrendingUp, step:'05', title:'Support & Growth',    desc:'Post-launch support, analytics monitoring and iterative improvements.' },
]

export default function WebDevelopment() {
  return (
    <div className="bg-white min-h-screen">
      <PageBanner
        icon={Code}
        title="Putting the "
        accent="Tech"
        suffix=" in Your Idea"
        description={s?.shortDesc}
        ctaLabel="Build My Website"
        gradientClass="from-primary/15 via-white to-secondary/10"
        orbOneClass="bg-primary/10"
        orbTwoClass="bg-secondary/10"
        iconShellClass="bg-primary/10 border-primary/20"
      />

      {/* Breakdown */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">What We Offer</span>
            <h2 className="font-heading text-h2 text-primary">Web <span className="text-gradient">Development</span></h2>
          </Motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {breakdown.map((item, i) => (
              <Motion.div key={item.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-secondary/30">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <item.icon size={20} className="text-secondary" />
                </div>
                <h3 className="font-heading text-primary text-base mb-2">{item.title}</h3>
                <p className="text-primary/50 font-body text-sm leading-relaxed">{item.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white border-y border-tertiary">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Development Workflow</span>
            <h2 className="font-heading text-h2 text-primary">Our Build <span className="text-gradient">Process</span></h2>
          </Motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Our Work</span>
            <h2 className="font-heading text-h2 text-primary">Web <span className="text-gradient">Portfolio</span></h2>
          </Motion.div>
          <PortfolioSlider items={items} />
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-white border-y border-tertiary">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Clients</span>
            <h2 className="font-heading text-h2 text-primary">Websites We've <span className="text-gradient">Built</span></h2>
          </Motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="font-heading text-h2 text-primary">Client <span className="text-gradient">Reviews</span></h2>
          </Motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white border-t border-tertiary">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-primary mb-4">Ready to <span className="text-gradient">Build?</span></h2>
          <p className="text-primary/50 font-body mb-8 max-w-lg mx-auto">Let's bring your digital idea to life.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4 shadow-[0_16px_34px_rgba(72,90,168,0.24)]">Start My Project <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
