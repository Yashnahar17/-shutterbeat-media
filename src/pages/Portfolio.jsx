import { useMemo, useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Camera,
  Megaphone,
  CalendarDays,
  Film,
  Palette,
  Globe,
  Lightbulb,
  Filter,
  X,
} from 'lucide-react'
import { visiblePortfolio, visiblePortfolioCategories } from '../data/portfolio'
import SafeImage from '../components/shared/SafeImage'

const CAT_ICONS = {
  Photography: Camera,
  Advertising: Megaphone,
  Events: CalendarDays,
  'Film Making': Film,
  Branding: Palette,
  'Web Development': Globe,
  Consultation: Lightbulb,
}

const CAT_COLOURS = {
  Photography: 'from-primary/18 to-secondary/12 border-primary/20 text-primary',
  Advertising: 'from-secondary/18 to-primary/12 border-secondary/25 text-primary',
  Events: 'from-primary/16 to-tertiary/35 border-primary/20 text-primary',
  'Film Making': 'from-secondary/15 to-tertiary/30 border-secondary/20 text-primary',
  Branding: 'from-primary/18 to-tertiary/35 border-primary/20 text-primary',
  'Web Development': 'from-secondary/20 to-tertiary/35 border-secondary/25 text-primary',
  Consultation: 'from-secondary/16 to-primary/10 border-secondary/20 text-primary',
}

const PLACEHOLDER_GRADIENTS = [
  'from-primary/40 to-secondary/20',
  'from-secondary/35 to-primary/15',
  'from-primary/30 to-tertiary/45',
  'from-secondary/28 to-tertiary/40',
]

const GRID_STYLE = {
  backgroundImage:
    'linear-gradient(rgba(72,90,168,.05) 1px,transparent 1px),' +
    'linear-gradient(90deg,rgba(72,90,168,.05) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

function buildStats(items) {
  const categories = new Set(items.map((item) => item.category))
  const clients = new Set(items.map((item) => item.client))
  return [
    { value: `${items.length}+`, label: 'Projects Delivered' },
    { value: `${categories.size}`, label: 'Creative Disciplines' },
    { value: `${clients.size}+`, label: 'Happy Clients' },
    { value: '5+', label: 'Years of Craft' },
  ]
}

function buildCategoryCounts(items) {
  return items.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] ?? 0) + 1
    return acc
  }, {})
}

function PortfolioCard({ item, index }) {
  const Icon = CAT_ICONS[item.category] || Camera
  const colours = CAT_COLOURS[item.category] || CAT_COLOURS.Photography
  const grad = PLACEHOLDER_GRADIENTS[item.id % PLACEHOLDER_GRADIENTS.length]

  return (
    <Motion.article
      layout
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -18, scale: 0.96 }}
      transition={{ duration: 0.35, delay: (index % 8) * 0.035 }}
      whileHover={{ y: -2 }}
      className="group relative overflow-hidden rounded-card border border-primary/12 bg-white shadow-[0_8px_22px_rgba(72,90,168,0.08)] transition-[border-color,box-shadow,transform] duration-300 hover:border-primary/24 hover:shadow-[0_18px_36px_rgba(72,90,168,0.14)]">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-primary/10">
        {item.image ? (
          <SafeImage
            src={item.image}
            alt={item.title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            fallback={
              <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${grad}`}>
                <Icon size={40} className="text-primary/35" aria-hidden />
              </div>
            }
          />
        ) : (
          <div className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${grad}`}>
            <Icon size={40} className="text-primary/35" aria-hidden />
          </div>
        )}

        <div className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border bg-gradient-to-r px-3 py-1 ${colours}`}>
          <Icon size={11} aria-hidden />
          <span className="font-body text-xs font-semibold tracking-wide">{item.category}</span>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <p className="mb-2 font-body text-xs uppercase tracking-wide text-primary/58">{item.client}</p>
        <h3 className="mb-2 font-heading text-base leading-snug text-primary transition-colors duration-200 group-hover:text-secondary">
          {item.title}
        </h3>
        <p className="line-clamp-2 font-body text-sm leading-relaxed text-primary/72">{item.desc}</p>
      </div>
    </Motion.article>
  )
}

export default function Portfolio() {
  const [active, setActive] = useState('All')
  const stats = useMemo(() => buildStats(visiblePortfolio), [])
  const categoryCounts = useMemo(() => buildCategoryCounts(visiblePortfolio), [])
  const disciplineCategories = useMemo(
    () => visiblePortfolioCategories.filter((category) => category !== 'All'),
    []
  )

  const filtered = useMemo(
    () => (active === 'All' ? visiblePortfolio : visiblePortfolio.filter((item) => item.category === active)),
    [active]
  )

  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-0">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/10" />
        <div className="absolute inset-0 opacity-[0.04]" style={GRID_STYLE} />
        <div className="pointer-events-none absolute right-1/3 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-secondary/8 blur-3xl" />

        <div className="container-custom relative z-10 pb-14 pt-32 sm:pb-16 sm:pt-40 lg:pb-20">
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl rounded-[1.6rem] border border-primary/12 bg-white/72 px-6 py-8 shadow-[0_24px_52px_rgba(72,90,168,0.14)] backdrop-blur-sm sm:p-10">
            <span className="section-tag">Our Work</span>
            <h1 className="mb-5 max-w-2xl font-heading text-display leading-tight text-primary">
              Creative Work That
              <br />
              <span className="text-gradient">Speaks Loud</span>
            </h1>
            <p className="max-w-2xl font-body text-base leading-relaxed text-primary/72 sm:text-lg">
              From wedding films to national ad campaigns, this is a curated collection
              of stories we have built for brands and people across India.
            </p>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-tertiary bg-tertiary sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white px-6 py-5">
                <div className="mb-1 font-heading text-2xl font-bold text-primary">{stat.value}</div>
                <div className="font-body text-xs tracking-wide text-primary/65">{stat.label}</div>
              </div>
            ))}
          </Motion.div>
        </div>
      </section>

      <section className="sticky top-[var(--header-offset)] z-20 border-b border-tertiary bg-white/90 py-2.5 backdrop-blur-lg sm:py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 overflow-x-auto pb-0.5 scrollbar-none">
            <Filter size={14} className="mr-1 shrink-0 text-primary/55" aria-hidden />
            {visiblePortfolioCategories.map((category) => {
              const Icon = CAT_ICONS[category]
              const isActive = active === category
              const count = categoryCounts[category] ?? 0
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  className={`inline-flex min-h-[42px] items-center gap-1.5 whitespace-nowrap rounded-full border px-3.5 py-1.5 font-body text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 ${
                    isActive
                      ? 'border-primary bg-primary text-tertiary shadow-[0_0_20px_rgba(72,90,168,0.22)]'
                      : 'border-tertiary bg-transparent text-primary/72 hover:border-primary/30 hover:text-primary'
                  }`}>
                  {Icon && <Icon size={12} aria-hidden />}
                  {category}
                  {category !== 'All' && (
                    <span className={`text-xs ${isActive ? 'text-tertiary/90' : 'text-primary/58'}`}>
                      ({count})
                    </span>
                  )}
                </button>
              )
            })}
            {active !== 'All' && (
              <button
                type="button"
                onClick={() => setActive('All')}
                className="ml-auto inline-flex min-h-[42px] shrink-0 items-center gap-1 rounded-full border border-tertiary px-2.5 py-1.5 font-body text-xs text-primary/60 transition-all hover:border-primary/30 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2">
                <X size={11} aria-hidden /> Clear
              </button>
            )}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <Motion.p
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            aria-live="polite"
            className="mb-8 font-body text-sm text-primary/65">
            {active === 'All'
              ? `Showing all ${visiblePortfolio.length} projects`
              : `${filtered.length} project${filtered.length !== 1 ? 's' : ''} in ${active}`}
          </Motion.p>

          <Motion.div layout className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-7">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <PortfolioCard key={item.id} item={item} index={index} />
              ))}
            </AnimatePresence>
          </Motion.div>

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <p className="font-body text-lg text-primary/65">No projects in this category yet.</p>
              <button type="button" onClick={() => setActive('All')} className="btn-secondary mt-4">
                View all work
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="section-padding border-t border-tertiary bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <span className="section-tag">By Discipline</span>
            <h2 className="font-heading text-h2 text-primary">
              Every Medium, <span className="text-gradient">Mastered</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {disciplineCategories.map((category, index) => {
              const Icon = CAT_ICONS[category] || Camera
              const count = categoryCounts[category] ?? 0
              const colours = CAT_COLOURS[category] || CAT_COLOURS.Photography
              return (
                <Motion.button
                  key={category}
                  type="button"
                  onClick={() => {
                    setActive(category)
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className={`group flex min-h-[148px] flex-col items-start gap-3 rounded-card border bg-gradient-to-br p-5 text-left transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 sm:min-h-[160px] ${colours}`}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/10 bg-white/70">
                    <Icon size={18} className="text-primary/75" aria-hidden />
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-primary">{category}</p>
                    <p className="mt-0.5 font-body text-xs text-primary/65">
                      {count} project{count !== 1 ? 's' : ''}
                    </p>
                  </div>
                </Motion.button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-tertiary bg-white">
        <div className="container-custom text-center">
          <Motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="mb-4 font-heading text-h2 text-primary">
              Want to Be in Our <span className="text-gradient">Next Chapter?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body text-base text-primary/72 sm:text-lg">
              Let us collaborate on something that belongs here next. Tell us about your project.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary">
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Explore Services
              </Link>
            </div>
          </Motion.div>
        </div>
      </section>
    </div>
  )
}
