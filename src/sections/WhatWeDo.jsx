import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Camera, Palette, Megaphone, Globe,
  CalendarDays, Lightbulb, ChevronRight, Check,
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'

// ── Service data ─────────────────────────────────────────────
const SERVICES = [
  {
    id: 'consultation',
    label: 'Consultation',
    href: '/services/consultation',
    Icon: Lightbulb,
    accent: '#4DB4C0',
    accentBg: 'rgba(77,180,192,0.10)',
    accentBorder: 'rgba(77,180,192,0.28)',
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
  {
    id: 'branding',
    label: 'Branding',
    href: '/services/branding',
    Icon: Palette,
    accent: '#485AA8',
    accentBg: 'rgba(72,90,168,0.10)',
    accentBorder: 'rgba(72,90,168,0.28)',
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
    label: 'Marketing and Advertising',
    href: '/services/advertising',
    Icon: Megaphone,
    accent: '#4DB4C0',
    accentBg: 'rgba(77,180,192,0.10)',
    accentBorder: 'rgba(77,180,192,0.28)',
    tag: 'Growth & Performance',
    headline: 'Campaigns that convert, not just impress.',
    points: [
      'Meta, Google & YouTube ad campaigns',
      'Out-of-home & print advertising',
      'Performance marketing & ROAS optimization',
      'Festive & seasonal campaign planning',
      'Creative strategy & copywriting',
    ],
  },
  {
    id: 'web-development',
    label: 'Web Development',
    href: '/services/web-development',
    Icon: Globe,
    accent: '#485AA8',
    accentBg: 'rgba(72,90,168,0.10)',
    accentBorder: 'rgba(72,90,168,0.28)',
    tag: 'Digital Presence',
    headline: 'Websites that work as hard as you do.',
    points: [
      'Custom React & Next.js websites',
      'E-commerce stores (Shopify, WooCommerce)',
      'Landing pages optimized for conversion',
      'CMS-based sites with easy self-editing',
      'Performance, SEO & accessibility audits',
    ],
  },
  {
    id: 'photography',
    label: 'Photography and Film Making',
    href: '/services/photography',
    Icon: Camera,
    accent: '#485AA8',
    accentBg: 'rgba(72,90,168,0.10)',
    accentBorder: 'rgba(72,90,168,0.28)',
    tag: 'Visual Storytelling',
    headline: 'Still frames and moving stories under one roof.',
    points: [
      'Wedding & pre-wedding photography across multiple venues',
      'Commercial, product & food photography for brands',
      'Brand films, campaign films and documentaries',
      'Event videography and highlight reels',
      'Fashion, lifestyle and portrait shoots',
    ],
  },
  {
    id: 'events',
    label: 'Event and Artist Management',
    href: '/services/events',
    Icon: CalendarDays,
    accent: '#4DB4C0',
    accentBg: 'rgba(77,180,192,0.10)',
    accentBorder: 'rgba(77,180,192,0.28)',
    tag: 'Live Experiences',
    headline: 'Events and artist experiences that leave a mark.',
    points: [
      'Weddings, receptions & mehendi functions',
      'Corporate summits & product launches',
      'Cultural festivals & public events',
      'Brand activations & pop-up experiences',
      'Full A/V production & stage management',
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
    <section className="section-padding bg-white">
      <div className="container-custom">

        {/* ── Header ───────────────────────────────── */}
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-14"
        >
          <SectionHeading
            tag="What We Do"
            title="Our"
            accent="Services"
            description="From shutter to the beat, we cover every creative and digital need your business could have, all under one roof."
            className="max-w-xl"
          />
        </Motion.div>

        {/* ── Main panel ───────────────────────────── */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr] rounded-[1.75rem] overflow-hidden border border-primary/10 bg-white shadow-[0_16px_36px_rgba(72,90,168,0.08)]"
          style={{ background: 'rgba(72,90,168,0.02)' }}
        >

          {/* ── LEFT: Tab list ──────────────────────── */}
          <div className="bg-white border-b lg:border-b-0 lg:border-r border-primary/10">
            {/* Mobile: horizontal scroll tabs */}
            <div className="flex lg:hidden overflow-x-auto scrollbar-none p-3 gap-2">
              {SERVICES.map((s, i) => {
                const isActive = i === activeIdx
                return (
                  <button
                    key={s.id}
                    onClick={() => handleTabClick(i)}
                    className="flex min-h-[44px] items-center gap-2 px-3.5 py-2.5 rounded-xl font-body text-sm whitespace-nowrap transition-all duration-200 border shrink-0"
                    style={{
                      background: isActive ? `${s.accentBg}` : 'transparent',
                      borderColor: isActive ? s.accentBorder : 'rgba(72,90,168,0.08)',
                      color: isActive ? s.accent : 'rgba(72,90,168,0.6)',
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
                    className="relative min-h-[52px] w-full flex items-center gap-3 px-5 py-3.5 text-left transition-all duration-200 group"
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
                        color: isActive ? '#2F3F82' : 'rgba(72,90,168,0.62)',
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
          <div className="bg-white relative overflow-hidden">
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
                className="relative z-10 flex h-full flex-col p-6 sm:p-8 lg:p-12"
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
                <h3 className="font-heading text-primary text-[1.75rem] lg:text-3xl leading-[1.18] mb-6 max-w-xl" style={{ letterSpacing: '-0.02em' }}>
                  {service.headline}
                </h3>

                {/* Divider */}
                <div
                  className="h-px mb-7"
                  style={{ background: `linear-gradient(90deg, ${service.accent}35, transparent)` }}
                />

                {/* Points */}
                <ul className="flex flex-col gap-4 mb-8 sm:mb-9">
                  {service.points.map((pt, i) => (
                    <Motion.li
                      key={pt}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.3 }}
                      className="flex items-start gap-3 font-body text-sm sm:text-[15px] leading-relaxed"
                      style={{ color: 'rgba(72,90,168,0.72)' }}
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
                    className="inline-flex min-h-[46px] items-center gap-2 px-5 py-2.5 rounded-xl font-body text-sm font-semibold transition-all duration-200 group"
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
                      aria-label={`Show ${s.label}`}
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
            className="inline-flex items-center gap-2 text-primary/55 hover:text-primary font-body text-sm transition-colors duration-200 group"
          >
            View all services
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </Motion.div>

      </div>
    </section>
  )
}
