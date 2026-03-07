#!/bin/bash
# ============================================================
#  ShutterBeat Media — Portfolio Page
#  Run from PROJECT ROOT:  bash shutterbeat-portfolio.sh
# ============================================================

set -e

echo ""
echo "╔══════════════════════════════════════════════╗"
echo "║   ShutterBeat — Portfolio Page              ║"
echo "╚══════════════════════════════════════════════╝"
echo ""

# ══════════════════════════════════════════════
# 1.  PORTFOLIO PAGE
# ══════════════════════════════════════════════
echo "📄  Writing src/pages/Portfolio.jsx ..."
mkdir -p src/pages

cat > src/pages/Portfolio.jsx << 'PAGE_EOF'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, ExternalLink, Camera, Megaphone, CalendarDays,
  Film, Palette, Globe, Music2, Lightbulb, Filter, X,
} from 'lucide-react'
import { portfolio, portfolioCategories } from '../data/portfolio'

// ── Category icon map ───────────────────────
const CAT_ICONS = {
  Photography:    Camera,
  Advertising:    Megaphone,
  Events:         CalendarDays,
  'Film Making':  Film,
  Branding:       Palette,
  'Web Development': Globe,
  Music:          Music2,
  Consultation:   Lightbulb,
}

// ── Category accent colours ─────────────────
const CAT_COLOURS = {
  Photography:       'from-rose-500/20   to-pink-500/10   border-rose-500/25   text-rose-400',
  Advertising:       'from-amber-500/20  to-orange-500/10 border-amber-500/25  text-amber-400',
  Events:            'from-violet-500/20 to-purple-500/10 border-violet-500/25 text-violet-400',
  'Film Making':     'from-sky-500/20    to-blue-500/10   border-sky-500/25    text-sky-400',
  Branding:          'from-emerald-500/20 to-teal-500/10  border-emerald-500/25 text-emerald-400',
  'Web Development': 'from-cyan-500/20   to-teal-500/10   border-cyan-500/25   text-cyan-400',
  Music:             'from-fuchsia-500/20 to-pink-500/10  border-fuchsia-500/25 text-fuchsia-400',
  Consultation:      'from-lime-500/20   to-green-500/10  border-lime-500/25   text-lime-400',
}

// ── Placeholder image blocks ─────────────────
const PLACEHOLDER_GRADIENTS = [
  'from-rose-900/60 to-pink-900/30',
  'from-amber-900/60 to-orange-900/30',
  'from-violet-900/60 to-purple-900/30',
  'from-sky-900/60 to-blue-900/30',
  'from-emerald-900/60 to-teal-900/30',
  'from-cyan-900/60 to-teal-900/30',
  'from-fuchsia-900/60 to-pink-900/30',
  'from-lime-900/60 to-green-900/30',
]

const GRID_STYLE = {
  backgroundImage:
    'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),' +
    'linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

// ── Stats derived from data ──────────────────
function buildStats(items) {
  const cats = new Set(items.map(i => i.category))
  const clients = new Set(items.map(i => i.client))
  return [
    { value: `${items.length}+`,   label: 'Projects Delivered' },
    { value: `${cats.size}`,       label: 'Creative Disciplines' },
    { value: `${clients.size}+`,   label: 'Happy Clients' },
    { value: '5+',                  label: 'Years of Craft' },
  ]
}

// ── Single card ──────────────────────────────
function PortfolioCard({ item, index }) {
  const Icon = CAT_ICONS[item.category] || Camera
  const colours = CAT_COLOURS[item.category] || CAT_COLOURS.Photography
  const grad = PLACEHOLDER_GRADIENTS[item.id % PLACEHOLDER_GRADIENTS.length]
  const [hover, setHover] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, delay: (index % 9) * 0.04 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group relative bg-dark-800 border border-dark-600 rounded-card overflow-hidden hover:border-white/15 transition-colors duration-300 cursor-pointer">

      {/* ── Image / placeholder area ── */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {item.image
          ? <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          : (
            <div className={`w-full h-full bg-gradient-to-br ${grad} flex items-center justify-center`}>
              <Icon size={40} className="text-white/10" />
            </div>
          )
        }

        {/* Category pill */}
        <div className={`absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r ${colours} border backdrop-blur-sm`}>
          <Icon size={11} />
          <span className="font-body text-xs font-semibold tracking-wide">{item.category}</span>
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={false}
          animate={{ opacity: hover ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          className="absolute inset-0 bg-dark-900/80 flex items-center justify-center backdrop-blur-sm">
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
            <ExternalLink size={18} className="text-white" />
          </div>
        </motion.div>
      </div>

      {/* ── Content ── */}
      <div className="p-5">
        <p className="text-white/30 font-body text-xs mb-1 tracking-wide uppercase">{item.client}</p>
        <h3 className="font-heading text-white text-base mb-2 leading-snug group-hover:text-secondary transition-colors duration-200">
          {item.title}
        </h3>
        <p className="text-white/40 font-body text-sm leading-relaxed line-clamp-2">{item.desc}</p>
      </div>
    </motion.div>
  )
}

// ── Page ─────────────────────────────────────
export default function Portfolio() {
  const [active, setActive] = useState('All')
  const stats = useMemo(() => buildStats(portfolio), [])

  const filtered = useMemo(
    () => active === 'All' ? portfolio : portfolio.filter(i => i.category === active),
    [active]
  )

  return (
    <div className="bg-dark-900 min-h-screen">

      {/* ── Hero ────────────────────────────────── */}
      <section className="relative min-h-[55vh] flex items-end pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-dark-800" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/10" />
        <div className="absolute inset-0 opacity-[0.04]" style={GRID_STYLE} />

        {/* floating glows */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 pt-40 pb-16">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="section-tag">Our Work</span>
            <h1 className="font-heading text-display text-white mb-5 leading-tight max-w-2xl">
              Creative Work That<br />
              <span className="text-gradient">Speaks Loud</span>
            </h1>
            <p className="text-white/50 font-body text-xl max-w-2xl leading-relaxed">
              From wedding films to national ad campaigns — a collection of stories
              we've had the privilege of telling for brands and people across India.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-dark-600 mt-14 border-t border-dark-600">
            {stats.map((s, i) => (
              <div key={i} className="bg-dark-800 px-6 py-5">
                <div className="font-heading text-white text-2xl font-bold mb-0.5">{s.value}</div>
                <div className="text-white/35 font-body text-xs tracking-wide">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Filter bar ─────────────────────────── */}
      <section className="sticky top-16 z-20 bg-dark-900/90 backdrop-blur-lg border-b border-dark-600 py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-0.5">
            <Filter size={14} className="text-white/25 shrink-0 mr-1" />
            {portfolioCategories.map(cat => {
              const Icon = CAT_ICONS[cat]
              const isActive = active === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-body text-sm font-medium whitespace-nowrap transition-all duration-200 border
                    ${isActive
                      ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20'
                      : 'bg-transparent text-white/40 border-dark-600 hover:text-white hover:border-white/20'}`}>
                  {Icon && <Icon size={12} />}
                  {cat}
                  {isActive && cat !== 'All' && (
                    <span className="ml-0.5 text-white/60 text-xs">
                      ({portfolio.filter(i => i.category === cat).length})
                    </span>
                  )}
                </button>
              )
            })}
            {active !== 'All' && (
              <button onClick={() => setActive('All')}
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-white/30 hover:text-white font-body text-xs border border-dark-600 hover:border-white/20 transition-all ml-auto shrink-0">
                <X size={11} /> Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── Grid ────────────────────────────────── */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">

          {/* Result count */}
          <motion.p
            key={active}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-white/25 font-body text-sm mb-8">
            {active === 'All'
              ? `Showing all ${portfolio.length} projects`
              : `${filtered.length} project${filtered.length !== 1 ? 's' : ''} in ${active}`}
          </motion.p>

          {/* Cards */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, i) => (
                <PortfolioCard key={item.id} item={item} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-white/20 font-body text-lg">No projects in this category yet.</p>
              <button onClick={() => setActive('All')} className="btn-secondary mt-4">View all work</button>
            </div>
          )}
        </div>
      </section>

      {/* ── Category spotlight strip ────────────── */}
      <section className="section-padding bg-dark-800 border-t border-dark-600">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-tag">By Discipline</span>
            <h2 className="font-heading text-h2 text-white">Every Medium, <span className="text-gradient">Mastered</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {portfolioCategories.filter(c => c !== 'All').map((cat, i) => {
              const Icon = CAT_ICONS[cat] || Camera
              const count = portfolio.filter(p => p.category === cat).length
              const colours = CAT_COLOURS[cat]
              return (
                <motion.button
                  key={cat}
                  onClick={() => { setActive(cat); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className={`group flex flex-col items-start gap-3 p-5 rounded-card bg-gradient-to-br ${colours} border backdrop-blur-sm hover:scale-[1.02] transition-transform duration-200 text-left`}>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Icon size={18} className="text-white/70" />
                  </div>
                  <div>
                    <p className="font-heading text-white text-sm font-semibold">{cat}</p>
                    <p className="text-white/40 font-body text-xs mt-0.5">{count} project{count !== 1 ? 's' : ''}</p>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section className="section-padding bg-dark-900 border-t border-dark-600">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-h2 text-white mb-4">
              Want to Be in Our <span className="text-gradient">Next Chapter?</span>
            </h2>
            <p className="text-white/40 font-body text-lg max-w-xl mx-auto mb-8">
              Let's collaborate on something that ends up here. Tell us about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
PAGE_EOF

echo "  ✅  src/pages/Portfolio.jsx"

# ══════════════════════════════════════════════
# 2. CHECK ROUTER
# ══════════════════════════════════════════════
echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║                    ✅  ALL DONE!                        ║"
echo "╠══════════════════════════════════════════════════════════╣"
echo "║  File written:                                          ║"
echo "║   src/pages/Portfolio.jsx                              ║"
echo "╠══════════════════════════════════════════════════════════╣"
echo "║  MANUAL STEP — add to your router (App.jsx):           ║"
echo "║                                                         ║"
echo "║   import Portfolio from './pages/Portfolio'            ║"
echo "║   <Route path=\"/portfolio\" element={<Portfolio />} />  ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""
