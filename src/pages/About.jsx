import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Linkedin, Mail,
  Eye, Target, Heart, Zap, Users, Star, ExternalLink
} from 'lucide-react'
import { aboutData } from '../data/about'
import { team } from '../data/team'
import { clients } from '../data/clients'
import SafeImage from '../components/shared/SafeImage'
import SectionHeading from '../components/ui/SectionHeading'

// ── TABS DATA ─────────────────────────────────────────────────
const tabs = [
  {
    id: 'who',
    label: 'Who We Are',
    icon: Users,
    content: {
      heading: 'Who We Are',
      body: `ShutterBeat Media is a one-stop shop for all your media needs. From photography, film making, advertising, and marketing to website development, application development, visual effects, and more, we bring every creative discipline under one roof. Just like our name implies, we offer you everything "From SHUTTER to the BEAT". We aim to help turn your business into a brand people love working with.`,
      highlights: ['Founded in Pune, India', 'Cross-industry expertise', '200+ projects delivered', 'Pan-India reach'],
    },
  },
  {
    id: 'what',
    label: 'What We Do',
    icon: Zap,
    content: {
      heading: 'What We Do',
      body: `We cover the full spectrum of creative and digital services. From capturing stunning photographs and producing cinematic films to building powerful websites and running result-driven marketing campaigns — we do it all under one roof so your brand never has to look elsewhere.`,
      highlights: ['Consultation', 'Branding', 'Marketing & Advertising', 'Web Development', 'Photography & Film Making', 'Event & Artist Management'],
    },
  },
  {
    id: 'believe',
    label: 'What We Believe In',
    icon: Heart,
    content: {
      heading: 'Our Values',
      body: `We believe in the power of creativity, the importance of authenticity, and the impact of storytelling. Every project we take on is driven by a deep respect for our clients' vision and an unwavering commitment to quality. We foster an ethical, inclusive workplace where ideas thrive.`,
      highlights: ['Creativity First', 'Client-Centric Approach', 'Ethical Work Culture', 'Quality Over Quantity'],
    },
  },
]

// ── AVATAR COMPONENT ──────────────────────────────────────────
function Avatar({ name, image, size = 'lg' }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  const colors   = ['bg-primary', 'bg-secondary', 'bg-primary-light', 'bg-[#EDD9C4]']
  const color    = colors[name.charCodeAt(0) % colors.length]
  const sizeClass = size === 'lg' ? 'w-full h-52 text-5xl' : 'w-12 h-12 text-lg'
  if (image) {
    return (
      <SafeImage
        src={image}
        alt={name}
        loading="lazy"
        decoding="async"
        className={`${sizeClass} object-cover`}
        fallback={
          <div className={`${sizeClass} ${color} flex items-center justify-center font-heading font-bold text-primary/80`}>
            {initials}
          </div>
        }
      />
    )
  }
  return (
    <div className={`${sizeClass} ${color} flex items-center justify-center font-heading font-bold text-primary/80`}>
      {initials}
    </div>
  )
}

export default function About() {
  const [activeTab, setActiveTab] = useState('who')
  const current = tabs.find(t => t.id === activeTab)

  return (
    <div className="bg-white min-h-screen">

      {/* ── HERO BANNER ────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden">

        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-white to-secondary/10" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(rgba(72,90,168,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(72,90,168,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/15 rounded-full blur-3xl" />

        {/* Floating stat cards */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute top-32 right-12 hidden lg:block">
          <div className="bg-white/90 backdrop-blur border border-tertiary rounded-2xl p-4 text-center">
            <p className="font-heading text-3xl text-secondary">200+</p>
            <p className="text-primary/60 text-xs font-body">Projects Done</p>
          </div>
        </Motion.div>
        <Motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute top-56 right-32 hidden lg:block">
          <div className="bg-white/90 backdrop-blur border border-tertiary rounded-2xl p-4 text-center">
            <p className="font-heading text-3xl text-primary">50+</p>
            <p className="text-primary/60 text-xs font-body">Happy Clients</p>
          </div>
        </Motion.div>

        <div className="container-custom relative z-10 pt-32 sm:pt-40">
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-shell max-w-4xl px-6 py-8 sm:p-10">
            <span className="section-tag">Our Story</span>
            <h1 className="font-heading text-display text-primary mb-6 max-w-3xl leading-[1.04]" style={{ letterSpacing: '-0.025em' }}>
              We Are a{' '}
              <span className="text-gradient">Creative</span>{' '}
              Media Agency
            </h1>
            <p className="text-primary/74 font-body text-base sm:text-lg lg:text-[1.1rem] max-w-2xl leading-relaxed">
              From Shutter to the Beat — transforming ideas into brands, stories into films, and businesses into icons.
            </p>
          </Motion.div>
        </div>
      </section>

      {/* ── TABBED COMPANY INFO ────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[minmax(0,360px)_1fr] gap-8 lg:gap-12 items-start">

            {/* Left — Tab buttons */}
            <Motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>

              {/* Tab nav */}
              <div className="flex flex-col gap-3 mb-8">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4 rounded-2xl text-left transition-all duration-300 border min-h-[48px] shadow-[0_8px_20px_rgba(72,90,168,0.04)] ${
                        activeTab === tab.id
                          ? 'bg-primary/10 border-primary/40 text-primary'
                          : 'bg-white border-primary/10 text-primary/72 hover:border-primary/18 hover:text-primary'
                      }`}>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        activeTab === tab.id ? 'bg-primary/20' : 'bg-tertiary/60'
                      }`}>
                        <Icon size={16} className={activeTab === tab.id ? 'text-secondary' : 'text-primary/60'} />
                      </div>
                      <span className="font-heading text-sm sm:text-[15px]">{tab.label}</span>
                      {activeTab === tab.id && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-secondary" />
                      )}
                    </button>
                  )
                })}
              </div>

              <Link to="/contact" className="btn-primary">
                Start a Project <ArrowRight size={16} />
              </Link>
            </Motion.div>

            {/* Right — Tab content */}
            <Motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              <AnimatePresence mode="wait">
                <Motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="section-shell p-6 sm:p-8">

                  <h2 className="font-heading text-h3 text-primary mb-4">
                    {current.content.heading}
                  </h2>
                  <p className="text-primary/72 font-body text-sm sm:text-base leading-relaxed mb-8">
                    {current.content.body}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {current.content.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 rounded-xl bg-primary/[0.02] px-3 py-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span className="text-primary/68 font-body text-sm leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </Motion.div>
              </AnimatePresence>
            </Motion.div>

          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ───────────────────────────────────── */}
      <section className="section-padding bg-white border-y border-tertiary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
        <div className="container-custom relative z-10">

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-14">
            <SectionHeading
              tag="Purpose"
              title="Vision &"
              accent="Mission"
              align="center"
              className="max-w-2xl"
            />
          </Motion.div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Vision */}
            <Motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative section-shell overflow-hidden p-6 sm:p-8 group hover:border-primary/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Eye size={24} className="text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-primary font-body text-xs tracking-widest uppercase font-semibold">Our Vision</span>
                  </div>
                  <h3 className="font-heading text-primary text-xl mb-4">Where We're Headed</h3>
                  <p className="text-primary/72 font-body text-sm leading-relaxed">
                    {aboutData.vision.description}
                  </p>
                </div>
              </div>
            </Motion.div>

            {/* Mission */}
            <Motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative section-shell overflow-hidden p-6 sm:p-8 group hover:border-secondary/30 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-2xl" />
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                  <Target size={24} className="text-secondary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-secondary font-body text-xs tracking-widest uppercase font-semibold">Our Mission</span>
                  </div>
                  <h3 className="font-heading text-primary text-xl mb-4">Why We Exist</h3>
                  <p className="text-primary/72 font-body text-sm leading-relaxed">
                    {aboutData.mission.description}
                  </p>
                </div>
              </div>
            </Motion.div>

          </div>

          {/* Values row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {[
              { icon: Heart,  label: 'Creativity',    color: 'text-primary'   },
              { icon: Star,   label: 'Quality',       color: 'text-secondary' },
              { icon: Users,  label: 'Collaboration', color: 'text-tertiary'  },
              { icon: Zap,    label: 'Innovation',    color: 'text-primary'   },
            ].map((v, i) => (
              <Motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card text-center p-5 sm:p-6 hover:border-primary/30">
                <v.icon size={22} className={`${v.color} mx-auto mb-3`} />
                <p className="font-heading text-primary text-sm sm:text-[15px]">{v.label}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ───────────────────────────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-14">
            <SectionHeading
              tag="Our People"
              title="Meet the"
              accent="Team"
              description="A passionate group of creatives, strategists and storytellers."
              align="center"
              className="max-w-2xl"
            />
          </Motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <Motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group bg-white border border-primary/12 rounded-card overflow-hidden hover:border-primary/24 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">

                {/* Photo / Avatar */}
                <div className="relative overflow-hidden">
                    <Avatar name={member.name} image={member.image} />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-white/72 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a href={member.linkedin}
                      className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-tertiary hover:bg-primary-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2">
                      <Linkedin size={14} />
                    </a>
                    <a href={`mailto:${member.email || 'shutterbeat.media@gmail.com'}`}
                      className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-secondary-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/30 focus-visible:ring-offset-2">
                      <Mail size={14} />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-heading text-primary text-base sm:text-[1.05rem] mb-1">{member.name}</h3>
                  <p className="text-secondary text-xs font-body font-semibold mb-1">{member.role}</p>
                  <p className="text-primary/58 text-xs font-body mb-3">{member.experience} experience</p>
                  <p className="text-primary/68 text-sm font-body leading-relaxed mb-4 border-t border-tertiary pt-3">
                    {member.bio}
                  </p>
                  <a href={member.linkedin}
                    className="inline-flex min-h-[40px] items-center gap-2 text-primary/62 hover:text-secondary text-xs font-body transition-colors">
                    <Linkedin size={12} /> Connect on LinkedIn
                  </a>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SISTER CONCERNS / PARTNERS ─────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom">

          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-14">
            <SectionHeading
              tag="Network"
              title="Sister Concerns &"
              accent="Partners"
              align="center"
              className="max-w-2xl"
            />
          </Motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, i) => (
              <Motion.a
                key={client.id}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group flex min-h-[132px] flex-col items-center justify-center gap-3 p-5 bg-white border border-primary/10 rounded-card shadow-[0_8px_22px_rgba(72,90,168,0.05)] hover:border-secondary/24 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(72,90,168,0.1)] transition-all duration-300">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="h-10 w-auto max-w-[110px] object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-tertiary/60 border border-tertiary flex items-center justify-center group-hover:border-secondary/30 transition-colors">
                    <span className="font-heading text-primary/60 text-sm font-bold">
                      {client.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
                <p className="font-heading text-primary/62 text-xs text-center group-hover:text-primary transition-colors leading-snug">
                  {client.name}
                </p>
                <ExternalLink size={10} className="text-primary/20 group-hover:text-secondary transition-colors" />
              </Motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="section-padding bg-white border-t border-tertiary">
        <div className="container-custom">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-shell mx-auto max-w-4xl px-6 py-10 sm:px-10 sm:py-12 text-center">
            <h2 className="font-heading text-h2 text-primary mb-4">
              Ready to <span className="text-gradient">Work Together?</span>
            </h2>
            <p className="text-primary/72 font-body mb-8 max-w-lg mx-auto leading-relaxed">
              Let's turn your vision into something remarkable.
            </p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Get In Touch <ArrowRight size={18} />
            </Link>
          </Motion.div>
        </div>
      </section>

    </div>
  )
}
