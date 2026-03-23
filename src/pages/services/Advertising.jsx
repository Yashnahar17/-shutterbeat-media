import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Megaphone, Monitor, Instagram, Printer, Video, Users, Target, BarChart2, PenTool, Calendar, TrendingUp, Search, Lightbulb } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { portfolio } from '../../data/portfolio'
import { clientsByService } from '../../data/clients'
import PageBanner from '../../components/shared/PageBanner'
import ProcessTimeline from '../../components/shared/ProcessTimeline'
import TestimonialsSlider from '../../components/shared/TestimonialsSlider'
import PortfolioSlider from '../../components/shared/PortfolioSlider'
import ClientsGrid from '../../components/shared/ClientsGrid'

const s          = services.find(s => s.id === 'advertising')
const items      = portfolio.filter(p => p.category === 'Advertising')
const reviews    = testimonialsByService.advertising
const clientList = clientsByService.advertising

const adTypes = [
  { id:'digital',    label:'Digital Ads',    icon:Monitor,   desc:'Google Display, YouTube pre-rolls, programmatic banners — precision targeting at scale.' },
  { id:'social',     label:'Social Ads',     icon:Instagram, desc:'Meta, Instagram, LinkedIn and Twitter ads crafted to stop the scroll and drive action.' },
  { id:'print',      label:'Print Media',    icon:Printer,   desc:'Newspaper inserts, magazine spreads and direct mail that make a tangible impression.' },
  { id:'ooh',        label:'OOH',            icon:Megaphone, desc:'Billboards, transit wraps, mall displays and hoardings that command attention offline.' },
  { id:'video',      label:'Video / OTT',    icon:Video,     desc:'Connected TV, OTT pre-rolls and streaming ads reaching viewers on their big screens.' },
  { id:'influencer', label:'Influencer Ads', icon:Users,     desc:'Authentic creator partnerships on Instagram, YouTube and emerging platforms.' },
]

const detailedServices = [
  { icon:Target,    title:'Campaign Planning',    desc:'End-to-end planning from audience research to channel mix and budget allocation.' },
  { icon:Monitor,   title:'Media Buying',         desc:'Negotiating and placing ads across digital and traditional media for maximum reach.' },
  { icon:PenTool,   title:'Ad Creative',          desc:'Eye-catching visuals, compelling copy and video that drive clicks and conversions.' },
  { icon:BarChart2, title:'Performance Tracking', desc:'Transparent real-time reporting on every rupee spent and every result earned.' },
]

const process = [
  { icon:Search,     step:'01', title:'Brief & Discovery',    desc:'Deep-dive into brand objectives, target audience, budget and competitive landscape.' },
  { icon:Lightbulb,  step:'02', title:'Strategy & Planning',  desc:'Channel selection, media planning, creative strategy and KPI definition.' },
  { icon:PenTool,    step:'03', title:'Creative Development', desc:'Copy, design, video and ad assets produced and reviewed across all formats.' },
  { icon:Calendar,   step:'04', title:'Campaign Launch',      desc:'Coordinated deployment across all selected channels with tracking pixels live.' },
  { icon:BarChart2,  step:'05', title:'Performance Tracking', desc:'Real-time dashboards monitoring CTR, CPM, ROAS, conversions and brand recall.' },
  { icon:TrendingUp, step:'06', title:'Optimize & Scale',     desc:'Data-driven adjustments to maximise ROI and scale winning creatives.' },
]

export default function Advertising() {
  const [activeTab, setActiveTab] = useState('digital')
  const current = adTypes.find(t => t.id === activeTab)

  return (
    <div className="bg-white min-h-screen">
      <PageBanner
        icon={Megaphone}
        title="Marketing and Advertising That "
        accent="Converts"
        description={s?.shortDesc}
        ctaLabel="Launch a Campaign"
        gradientClass="from-secondary/15 via-white to-primary/10"
        orbOneClass="bg-secondary/10"
        orbTwoClass="bg-primary/10"
        iconShellClass="bg-secondary/10 border-secondary/20"
      />

      {/* Detailed Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">What We Do</span>
            <h2 className="font-heading text-h2 text-primary">Campaign <span className="text-gradient">Services</span></h2>
          </Motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {detailedServices.map((item, i) => (
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

      {/* Types of Advertising — Tabs */}
      <section className="section-padding bg-white border-y border-tertiary">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Ad Formats</span>
            <h2 className="font-heading text-h2 text-primary">Types of <span className="text-gradient">Advertising</span></h2>
          </Motion.div>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8 items-start">
            {/* Tab buttons */}
            <div role="tablist" aria-label="Advertising formats" className="flex flex-col gap-2">
              {adTypes.map(t => (
                <button
                  key={t.id}
                  id={`ad-tab-${t.id}`}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === t.id}
                  aria-controls={`ad-panel-${t.id}`}
                  tabIndex={activeTab === t.id ? 0 : -1}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex min-h-[52px] items-center gap-3 rounded-xl border px-5 py-3.5 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 ${
                    activeTab === t.id
                      ? 'bg-secondary/10 border-secondary/40 text-primary'
                      : 'bg-white border-tertiary text-primary/70 hover:text-primary'
                  }`}>
                  <t.icon size={16} className={activeTab === t.id ? 'text-secondary' : 'text-primary/55'} />
                  <span className="font-heading text-sm">{t.label}</span>
                  {activeTab === t.id && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-secondary" />}
                </button>
              ))}
            </div>
            {/* Tab content */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <Motion.div key={activeTab}
                  initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }} transition={{ duration:0.3 }}
                  id={`ad-panel-${activeTab}`}
                  role="tabpanel"
                  aria-labelledby={`ad-tab-${activeTab}`}
                  className="min-h-[220px] rounded-card border border-primary/12 bg-white p-6 shadow-[0_12px_28px_rgba(72,90,168,0.08)] sm:p-8">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-5">
                    <current.icon size={26} className="text-secondary" />
                  </div>
                  <h3 className="font-heading text-primary text-xl mb-4">{current.label}</h3>
                  <p className="text-primary/74 font-body text-base leading-relaxed">{current.desc}</p>
                </Motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">How We Work</span>
            <h2 className="font-heading text-h2 text-primary">Our Campaign <span className="text-gradient">Process</span></h2>
          </Motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-white border-y border-tertiary">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Our Work</span>
            <h2 className="font-heading text-h2 text-primary">Campaign <span className="text-gradient">Portfolio</span></h2>
          </Motion.div>
          <PortfolioSlider items={items} />
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Clients</span>
            <h2 className="font-heading text-h2 text-primary">Brands We've <span className="text-gradient">Promoted</span></h2>
          </Motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white border-y border-tertiary">
        <div className="container-custom">
          <Motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="font-heading text-h2 text-primary">Client <span className="text-gradient">Feedback</span></h2>
          </Motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-primary mb-4">Ready to <span className="text-gradient">Advertise?</span></h2>
          <p className="text-primary/50 font-body mb-8 max-w-lg mx-auto">Let's craft campaigns that make your brand impossible to ignore.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4 shadow-[0_16px_34px_rgba(72,90,168,0.24)]">Start a Campaign <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
