import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, Search, BarChart2, Rocket, TrendingUp, Target, Globe, DollarSign, Lightbulb, CheckCircle } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { clientsByService } from '../../data/clients'
import ProcessTimeline from '../../components/shared/ProcessTimeline'
import TestimonialsSlider from '../../components/shared/TestimonialsSlider'
import ClientsGrid from '../../components/shared/ClientsGrid'

const s          = services.find(s => s.id === 'consultation')
const reviews    = testimonialsByService.consultation
const clientList = clientsByService.consultation

const domains = [
  { icon:Target,     title:'Brand Strategy',         desc:'Positioning, messaging and differentiation strategy to stand out in a crowded market.' },
  { icon:Globe,      title:'Digital Transformation', desc:'Roadmap to modernise operations, workflows and customer experience through technology.' },
  { icon:Rocket,     title:'Go-To-Market Strategy',  desc:'Launch plans, channel strategies and growth playbooks for new products and markets.' },
  { icon:DollarSign, title:'Monetization Models',    desc:'Revenue model design, pricing strategy and partnership structures for sustainable growth.' },
  { icon:BarChart2,  title:'Brand Audits',           desc:'Comprehensive review of your current brand assets, positioning and market perception.' },
  { icon:Lightbulb,  title:'Innovation Consulting',  desc:'Identifying opportunities, new business lines and strategic pivots for long-term growth.' },
]

const engagements = [
  { title:'ZenFit Go-To-Market',              outcome:'₹1Cr revenue in first 3 months',  industry:'Apparel' },
  { title:'EduSpark Digital Transformation',  outcome:'40% operational cost reduction',   industry:'EdTech' },
  { title:'GreenLife Brand Audit',            outcome:'2x social following post-rebrand', industry:'Organics' },
  { title:'QuickDeliver Market Entry',        outcome:'Expanded to 3 new cities in Q2',  industry:'Logistics' },
]

const process = [
  { icon:Search,     step:'01', title:'Discovery',    desc:'Stakeholder interviews, data review and current-state assessment across your business.' },
  { icon:BarChart2,  step:'02', title:'Strategy',     desc:'Custom strategy development with clear objectives, milestones and success metrics.' },
  { icon:Rocket,     step:'03', title:'Execution',    desc:'Hands-on implementation support with our team working alongside yours.' },
  { icon:TrendingUp, step:'04', title:'Optimization', desc:'Continuous monitoring, learning and refinement to maximise outcomes.' },
]

const GRID_STYLE = {
  backgroundImage: 'linear-gradient(rgba(72,90,168,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(72,90,168,.08) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

export default function Consultation() {
  return (
    <div className="bg-tertiary min-h-screen">
      {/* Banner */}
      <section className="relative min-h-[65vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#F4E8DC]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-[#F4E8DC] to-tertiary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-40">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <Briefcase size={32} className="text-secondary" />
            </div>
            <span className="section-tag">Our Services</span>
            <h1 className="font-heading text-display text-primary mb-6 max-w-3xl leading-tight">
              Strategy That Drives <span className="text-gradient">Growth</span>
            </h1>
            <p className="text-primary/50 font-body text-xl max-w-2xl mb-8">{s?.shortDesc}</p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">Book a Consultation <ArrowRight size={18}/></Link>
          </motion.div>
        </div>
      </section>

      {/* Consulting Domains */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">What We Do</span>
            <h2 className="font-heading text-h2 text-primary">Consulting <span className="text-gradient">Domains</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((d, i) => (
              <motion.div key={d.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-primary/30">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <d.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-primary text-base mb-2">{d.title}</h3>
                <p className="text-primary/50 font-body text-sm leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[#F4E8DC] border-y border-[#D7C2AD]">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">How We Work</span>
            <h2 className="font-heading text-h2 text-primary">Our Consulting <span className="text-gradient">Process</span></h2>
          </motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* Completed Engagements */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Case Studies</span>
            <h2 className="font-heading text-h2 text-primary">Completed <span className="text-gradient">Engagements</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {engagements.map((e, i) => (
              <motion.div key={e.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-secondary/30 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <CheckCircle size={20} className="text-secondary" />
                </div>
                <div>
                  <span className="text-secondary text-xs font-body font-semibold tracking-widest uppercase mb-1 block">{e.industry}</span>
                  <h3 className="font-heading text-primary text-base mb-2">{e.title}</h3>
                  <p className="text-primary/50 font-body text-sm flex items-center gap-2">
                    <TrendingUp size={14} className="text-secondary shrink-0" /> {e.outcome}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-[#F4E8DC] border-y border-[#D7C2AD]">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Clients</span>
            <h2 className="font-heading text-h2 text-primary">Businesses We've <span className="text-gradient">Advised</span></h2>
          </motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="font-heading text-h2 text-primary">Client <span className="text-gradient">Outcomes</span></h2>
          </motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#F4E8DC] border-t border-[#D7C2AD]">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-primary mb-4">Ready to <span className="text-gradient">Grow?</span></h2>
          <p className="text-primary/50 font-body mb-8 max-w-lg mx-auto">Let's build a strategy that transforms your business.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">Book a Free Consultation <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
