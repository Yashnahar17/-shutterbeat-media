import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Camera, Film, Palette, Megaphone, Globe,
  CalendarDays, Music2, Lightbulb, ChevronRight, Check,
} from 'lucide-react'

// ── Service data ─────────────────────────────────────────────
const SERVICES = [
  {
    id: 'photography',
    label: 'Photography',
    href: '/services/photography',
    Icon: Camera,
    accent: '#e879a0',
    accentBg: 'rgba(232,121,160,0.08)',
    accentBorder: 'rgba(232,121,160,0.25)',
    tag: 'Visual Storytelling',
    headline: 'Moments frozen in their most honest light.',
    points: [
      'Wedding & pre-wedding photography across multiple venues',
      'Commercial, product & food photography for brands',
      'Fashion & lifestyle shoots for e-commerce',
      'Architectural & interior photography',
      'Corporate headshots & team portraits',
    ],
  },
  {
    id: 'film-making',
    label: 'Film Making',
    href: '/services/film-making',
    Icon: Film,
    accent: '#a78bfa',
    accentBg: 'rgba(167,139,250,0.08)',
    accentBorder: 'rgba(167,139,250,0.25)',
    tag: 'Cinematic Production',
    headline: 'Stories that move people — literally.',
    points: [
      'Cinematic brand films for TV & digital platforms',
      'Music videos with full production crew',
      'Corporate & investor documentary films',
      'Wedding & event videography',
      'Short films & original creative projects',
    ],
  },
  {
    id: 'branding',
    label: 'Branding',
    href: '/services/branding',
    Icon: Palette,
    accent: '#34d399',
    accentBg: 'rgba(52,211,153,0.08)',
    accentBorder: 'rgba(52,211,153,0.25)',
    tag: 'Identity Design',
    headline: 'Identities that outlive trends.',
    points: [
      'Logo design, visual identity & complete brand systems',
      'Brand guidelines & style documentation',
      'Packaging design & print collateral',
      'Rebranding strategy & phased rollout',
      'Social media visual kits & templates',
    ],
  },
  {
    id: 'advertising',
    label: 'Advertising',
    href: '/services/advertising',
    Icon: Megaphone,
    accent: '#fbbf24',
    accentBg: 'rgba(251,191,36,0.08)',
    accentBorder: 'rgba(251,191,36,0.25)',
    tag: 'Growth & Performance',
    headline: 'Campaigns that convert, not just impress.',
    points: [
      'Meta, Google & YouTube ad campaigns',
      'Out-of-home & print advertising',
      'Performance marketing & ROAS optimisation',
      'Festive & seasonal campaign planning',
      'Creative strategy & copywriting',
    ],
  },
  {
    id: 'web-development',
    label: 'Web Development',
    href: '/services/web-development',
    Icon: Globe,
    accent: '#38bdf8',
    accentBg: 'rgba(56,189,248,0.08)',
    accentBorder: 'rgba(56,189,248,0.25)',
    tag: 'Digital Presence',
    headline: 'Websites that work as hard as you do.',
    points: [
      'Custom React & Next.js websites',
      'E-commerce stores (Shopify, WooCommerce)',
      'Landing pages optimised for conversion',
      'CMS-based sites with easy self-editing',
      'Performance, SEO & accessibility audits',
    ],
  },
  {
    id: 'events',
    label: 'Events',
    href: '/services/events',
    Icon: CalendarDays,
    accent: '#f472b6',
    accentBg: 'rgba(244,114,182,0.08)',
    accentBorder: 'rgba(244,114,182,0.25)',
    tag: 'Live Experiences',
    headline: 'Events that attendees actually remember.',
    points: [
      'Weddings, receptions & mehendi functions',
      'Corporate summits & product launches',
      'Music festivals & cultural events',
      'Brand activations & pop-up experiences',
      'Full A/V production & stage management',
    ],
  },
  {
    id: 'music',
    label: 'Music',
    href: '/services/music',
    Icon: Music2,
    accent: '#c084fc',
    accentBg: 'rgba(192,132,252,0.08)',
    accentBorder: 'rgba(192,132,252,0.25)',
    tag: 'Audio Production',
    headline: 'Sound that sets the mood before a word is spoken.',
    points: [
      'Original brand jingles & audio identities',
      'Background scores for films & ads',
      'Music production & studio recording',
      'Artist management & music promotion',
      'Podcast production & editing',
    ],
  },
  {
    id: 'consultation',
    label: 'Consultation',
    href: '/services/consultation',
    Icon: Lightbulb,
    accent: '#86efac',
    accentBg: 'rgba(134,239,172,0.08)',
    accentBorder: 'rgba(134,239,172,0.25)',
    tag: 'Strategy',
    headline: 'Clarity before creativity — always.',
    points: [
      'Brand strategy & positioning workshops',
      'Go-to-market planning for new products',
      'Social media & content strategy audits',
      'Creative direction for in-house teams',
      'Competitor & market landscape analysis',
    ],
  },
]

// ── Component ────────────────────────────────────────────────
export default function WhatWeDo() {
  const [activeIdx, setActiveIdx] = useState(0)
  const intervalRef = useRef(null)
  const service = SERVICES[activeIdx]

  const go = (i) => setActiveIdx(i)

  // Auto-cycle every 4 s
  const startAuto = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveIdx(a => (a + 1) % SERVICES.length)
    }, 4000)
  }

  const stopAuto = () => clearInterval(intervalRef.current)

  useEffect(() => {
    startAuto()
    return () => clearInterval(intervalRef.current)
  }, [])

  const handleTabClick = (i) => {
    go(i)
    stopAuto()
  }

  return (
    <section className="section-padding bg-tertiary">
      <div className="container-custom">

        {/* ── Header ───────────────────────────────── */}
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <span className="section-tag">What We Do</span>
          <h2 className="font-heading text-h2 text-primary mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-primary/40 font-body text-lg max-w-lg leading-relaxed">
            From shutter to the beat — we cover every creative and digital need your
            business could have, all under one roof.
          </p>
        </Motion.div>

        {/* ── Main panel ───────────────────────────── */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-[260px_1fr] rounded-2xl overflow-hidden border border-primary/10"
          style={{ background: 'rgba(72,90,168,0.02)' }}
        >

          {/* ── LEFT: Tab list ──────────────────────── */}
          <div className="bg-[#F4E8DC] border-b lg:border-b-0 lg:border-r border-primary/10">
            {/* Mobile: horizontal scroll tabs */}
            <div className="flex lg:hidden overflow-x-auto scrollbar-none p-3 gap-2">
              {SERVICES.map((s, i) => {
                const isActive = i === activeIdx
                return (
                  <button
                    key={s.id}
                    onClick={() => handleTabClick(i)}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl font-body text-sm whitespace-nowrap transition-all duration-200 border shrink-0"
                    style={{
                      background: isActive ? `${s.accentBg}` : 'transparent',
                      borderColor: isActive ? s.accentBorder : 'rgba(72,90,168,0.08)',
                      color: isActive ? s.accent : 'rgba(72,90,168,0.35)',
                      fontWeight: isActive ? 600 : 400,
                    }}
                  >
                    <s.Icon size={13} />
                    {s.label}
                  </button>
                )
              })}
            </div>

            {/* Desktop: vertical tab list */}
            <div className="hidden lg:flex flex-col py-2">
              {SERVICES.map((s, i) => {
                const isActive = i === activeIdx
                return (
                  <button
                    key={s.id}
                    onClick={() => handleTabClick(i)}
                    className="relative w-full flex items-center gap-3 px-5 py-3.5 text-left transition-all duration-200 group"
                    style={{
                      background: isActive ? 'rgba(72,90,168,0.03)' : 'transparent',
                      borderLeft: `3px solid ${isActive ? s.accent : 'transparent'}`,
                    }}
                  >
                    {/* Icon */}
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200"
                      style={{
                        background: isActive ? s.accentBg : 'transparent',
                        border: `1px solid ${isActive ? s.accentBorder : 'transparent'}`,
                      }}
                    >
                      <s.Icon
                        size={14}
                        style={{ color: isActive ? s.accent : 'rgba(72,90,168,0.25)', transition: 'color 0.2s' }}
                      />
                    </span>

                    {/* Label */}
                    <span
                      className="font-body text-sm transition-all duration-200"
                      style={{
                        color: isActive ? '#EDD9C4' : 'rgba(72,90,168,0.35)',
                        fontWeight: isActive ? 600 : 400,
                      }}
                    >
                      {s.label}
                    </span>

                    {/* Arrow */}
                    {isActive && (
                      <ChevronRight
                        size={14}
                        className="ml-auto shrink-0"
                        style={{ color: service.accent, opacity: 0.6 }}
                      />
                    )}

                    {/* Bottom separator */}
                    <span className="absolute bottom-0 left-5 right-5 h-px bg-white/[0.04]" />
                  </button>
                )
              })}
            </div>
          </div>

          {/* ── RIGHT: Detail panel ─────────────────── */}
          <div className="bg-tertiary relative overflow-hidden">
            {/* Subtle accent glow in corner */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none transition-all duration-700"
              style={{ background: `${service.accent}08` }}
            />

            <AnimatePresence mode="wait">
              <Motion.div
                key={service.id}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative z-10 p-8 lg:p-12 flex flex-col h-full"
              >
                {/* Tag pill */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 w-fit"
                  style={{ background: service.accentBg, border: `1px solid ${service.accentBorder}` }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: service.accent }}
                  />
                  <span
                    className="font-body text-xs font-bold tracking-widest uppercase"
                    style={{ color: service.accent }}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Headline */}
                <h3 className="font-heading text-primary text-2xl lg:text-3xl leading-snug mb-6 max-w-lg" style={{ letterSpacing: '-0.02em' }}>
                  {service.headline}
                </h3>

                {/* Divider */}
                <div
                  className="h-px mb-7"
                  style={{ background: `linear-gradient(90deg, ${service.accent}35, transparent)` }}
                />

                {/* Points */}
                <ul className="flex flex-col gap-4 mb-9">
                  {service.points.map((pt, i) => (
                    <Motion.li
                      key={pt}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.3 }}
                      className="flex items-start gap-3 font-body text-sm leading-relaxed"
                      style={{ color: 'rgba(72,90,168,0.60)' }}
                    >
                      <span
                        className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                        style={{ background: service.accentBg, border: `1px solid ${service.accentBorder}` }}
                      >
                        <Check size={10} style={{ color: service.accent }} strokeWidth={3} />
                      </span>
                      {pt}
                    </Motion.li>
                  ))}
                </ul>

                {/* CTA button */}
                <div className="mt-auto">
                  <Link
                    to={service.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-body text-sm font-semibold transition-all duration-200 group"
                    style={{
                      background: service.accentBg,
                      border: `1px solid ${service.accentBorder}`,
                      color: service.accent,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = `${service.accent}20` }}
                    onMouseLeave={e => { e.currentTarget.style.background = service.accentBg }}
                  >
                    Explore {service.label}
                    <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>

                {/* Progress dots */}
                <div className="flex gap-1.5 mt-8">
                  {SERVICES.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => handleTabClick(i)}
                      className="h-1.5 rounded-full transition-all duration-300 cursor-pointer border-0 p-0"
                      style={{
                        width: i === activeIdx ? 20 : 6,
                        background: i === activeIdx ? service.accent : 'rgba(72,90,168,0.12)',
                      }}
                    />
                  ))}
                </div>
              </Motion.div>
            </AnimatePresence>
          </div>

        </Motion.div>

        {/* ── View all link ─────────────────────────── */}
        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary/30 hover:text-primary font-body text-sm transition-colors duration-200 group"
          >
            View all services
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Motion.div>

      </div>
    </section>
  )
}