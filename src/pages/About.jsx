import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Linkedin, Mail, Award,
  Eye, Target, Heart, Zap, Users, Star, ExternalLink
} from 'lucide-react'
import { aboutData } from '../data/about'
import { team } from '../data/team'
import { awards } from '../data/awards'
import { clients } from '../data/clients'

// ── TABS DATA ─────────────────────────────────────────────────
const tabs = [
  {
    id: 'who',
    label: 'Who We Are',
    icon: Users,
    content: {
      heading: 'Who We Are',
      body: `ShutterBeat Media is a one-stop shop for all your media needs. Right from photography, film making, music, advertising and marketing to website development, application development, visual effects and much more! Just like our name implies, we offer you everything "From SHUTTER to the BEAT". We aim to make your business a brand that people will love working with.`,
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
      highlights: ['Photography & Videography', 'Music & Artist Management', 'Advertising & Marketing', 'Web & App Development'],
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
function Avatar({ name, size = 'lg' }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  const colors   = ['bg-primary', 'bg-secondary', 'bg-primary-light', 'bg-[#D7C2AD]']
  const color    = colors[name.charCodeAt(0) % colors.length]
  const sizeClass = size === 'lg' ? 'w-full h-52 text-5xl' : 'w-12 h-12 text-lg'
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
    <div className="bg-tertiary min-h-screen">

      {/* ── HERO BANNER ────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden">

        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#F4E8DC]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-[#F4E8DC] to-secondary/10" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'linear-gradient(rgba(72,90,168,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(72,90,168,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/15 rounded-full blur-3xl" />

        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="absolute top-32 right-12 hidden lg:block">
          <div className="bg-[#F4E8DC]/80 backdrop-blur border border-[#D7C2AD] rounded-2xl p-4 text-center">
            <p className="font-heading text-3xl text-secondary">200+</p>
            <p className="text-primary/40 text-xs font-body">Projects Done</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute top-56 right-32 hidden lg:block">
          <div className="bg-[#F4E8DC]/80 backdrop-blur border border-[#D7C2AD] rounded-2xl p-4 text-center">
            <p className="font-heading text-3xl text-primary">50+</p>
            <p className="text-primary/40 text-xs font-body">Happy Clients</p>
          </div>
        </motion.div>

        <div className="container-custom relative z-10 pt-40">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>
            <span className="section-tag">Our Story</span>
            <h1 className="font-heading text-display text-primary mb-6 max-w-3xl leading-tight">
              We Are a{' '}
              <span className="text-gradient">Creative</span>{' '}
              Media Agency
            </h1>
            <p className="text-primary/50 font-body text-xl max-w-2xl leading-relaxed">
              From Shutter to the Beat — transforming ideas into brands, stories into films, and businesses into icons.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TABBED COMPANY INFO ────────────────────────────────── */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left — Tab buttons */}
            <motion.div
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
                      className={`flex items-center gap-4 px-6 py-4 rounded-xl text-left transition-all duration-300 border ${
                        activeTab === tab.id
                          ? 'bg-primary/10 border-primary/40 text-primary'
                          : 'bg-[#F4E8DC] border-[#D7C2AD] text-primary/50 hover:border-[#D7C2AD] hover:text-primary/70'
                      }`}>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        activeTab === tab.id ? 'bg-primary/20' : 'bg-[#E8D4BF]'
                      }`}>
                        <Icon size={16} className={activeTab === tab.id ? 'text-secondary' : 'text-primary/40'} />
                      </div>
                      <span className="font-heading text-sm">{tab.label}</span>
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
            </motion.div>

            {/* Right — Tab content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.35 }}
                  className="bg-[#F4E8DC] border border-[#D7C2AD] rounded-card p-8">

                  <h2 className="font-heading text-h3 text-primary mb-4">
                    {current.content.heading}
                  </h2>
                  <p className="text-primary/60 font-body text-base leading-relaxed mb-8">
                    {current.content.body}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {current.content.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span className="text-primary/60 font-body text-sm">{h}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ───────────────────────────────────── */}
      <section className="section-padding bg-[#F4E8DC] border-y border-[#D7C2AD] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5" />
        <div className="container-custom relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14">
            <span className="section-tag">Purpose</span>
            <h2 className="font-heading text-h2 text-primary">
              Vision & <span className="text-gradient">Mission</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative bg-tertiary border border-primary/20 rounded-card p-8 overflow-hidden group hover:border-primary/40 transition-all duration-300">
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
                  <p className="text-primary/60 font-body text-sm leading-relaxed">
                    {aboutData.vision.description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative bg-tertiary border border-secondary/20 rounded-card p-8 overflow-hidden group hover:border-secondary/40 transition-all duration-300">
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
                  <p className="text-primary/60 font-body text-sm leading-relaxed">
                    {aboutData.mission.description}
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Values row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            {[
              { icon: Heart,  label: 'Creativity',    color: 'text-primary'   },
              { icon: Star,   label: 'Quality',       color: 'text-secondary' },
              { icon: Users,  label: 'Collaboration', color: 'text-tertiary'  },
              { icon: Zap,    label: 'Innovation',    color: 'text-primary'   },
            ].map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card text-center p-6 hover:border-primary/30">
                <v.icon size={22} className={`${v.color} mx-auto mb-3`} />
                <p className="font-heading text-primary text-sm">{v.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ───────────────────────────────────────────────── */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14">
            <span className="section-tag">Our People</span>
            <h2 className="font-heading text-h2 text-primary mb-4">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="text-primary/50 font-body max-w-xl mx-auto">
              A passionate group of creatives, strategists and storytellers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="group bg-[#F4E8DC] border border-[#D7C2AD] rounded-card overflow-hidden hover:border-primary/30 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">

                {/* Photo / Avatar */}
                <div className="relative overflow-hidden">
                  <Avatar name={member.name} />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-tertiary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a href={member.linkedin}
                      className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-tertiary hover:bg-primary-light transition-colors">
                      <Linkedin size={14} />
                    </a>
                    <a href={`mailto:${member.email || 'shutterbeat.media@gmail.com'}`}
                      className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-secondary-light transition-colors">
                      <Mail size={14} />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-heading text-primary text-base mb-1">{member.name}</h3>
                  <p className="text-secondary text-xs font-body font-semibold mb-1">{member.role}</p>
                  <p className="text-primary/30 text-xs font-body mb-3">{member.experience} experience</p>
                  <p className="text-primary/50 text-sm font-body leading-relaxed mb-4 border-t border-[#D7C2AD] pt-3">
                    {member.bio}
                  </p>
                  <a href={member.linkedin}
                    className="inline-flex items-center gap-2 text-primary/30 hover:text-secondary text-xs font-body transition-colors">
                    <Linkedin size={12} /> Connect on LinkedIn
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AWARDS & RECOGNITIONS ──────────────────────────────── */}
      <section className="section-padding bg-[#F4E8DC] border-y border-[#D7C2AD]">
        <div className="container-custom">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14">
            <span className="section-tag">Achievements</span>
            <h2 className="font-heading text-h2 text-primary">
              Awards & <span className="text-gradient">Recognitions</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {awards.map((award, i) => (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card flex items-start gap-5 hover:border-tertiary/30 group">
                <div className="w-14 h-14 rounded-2xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center shrink-0 group-hover:bg-tertiary/20 transition-colors">
                  <Award size={24} className="text-tertiary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-tertiary text-xs font-body font-semibold">{award.year}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-primary/30 text-xs font-body">{award.organization}</span>
                  </div>
                  <h3 className="font-heading text-primary text-base mb-2">{award.title}</h3>
                  <p className="text-primary/50 font-body text-sm">{award.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SISTER CONCERNS / PARTNERS ─────────────────────────── */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14">
            <span className="section-tag">Network</span>
            <h2 className="font-heading text-h2 text-primary">
              Sister Concerns & <span className="text-gradient">Partners</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((client, i) => (
              <motion.a
                key={client.id}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group flex flex-col items-center gap-3 p-5 bg-[#F4E8DC] border border-[#D7C2AD] rounded-card hover:border-secondary/30 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#E8D4BF] border border-[#D7C2AD] flex items-center justify-center group-hover:border-secondary/30 transition-colors">
                  <span className="font-heading text-primary/40 text-sm font-bold">
                    {client.name.slice(0, 2).toUpperCase()}
                  </span>
                </div>
                <p className="font-heading text-primary/60 text-xs text-center group-hover:text-primary transition-colors">
                  {client.name}
                </p>
                <ExternalLink size={10} className="text-primary/20 group-hover:text-secondary transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="section-padding bg-[#F4E8DC] border-t border-[#D7C2AD]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h2 className="font-heading text-h2 text-primary mb-4">
              Ready to <span className="text-gradient">Work Together?</span>
            </h2>
            <p className="text-primary/50 font-body mb-8 max-w-lg mx-auto">
              Let's turn your vision into something remarkable.
            </p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Get In Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
