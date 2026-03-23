import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import {
  Camera,
  Palette,
  Megaphone,
  Globe,
  CalendarDays,
  Lightbulb,
  ArrowRight,
  Check,
  Star,
  ChevronRight,
  Zap,
  X,
} from 'lucide-react'
import SectionHeading from '../components/ui/SectionHeading'

const SERVICES = [
  {
    id: 'consultation',
    title: 'Consultation',
    href: '/services/consultation',
    Icon: Lightbulb,
    tone: 'primary',
    category: 'Strategy',
    tagline: 'Clarity before creativity.',
    description:
      'Strategic advisory for positioning, go-to-market planning and creative direction that aligns teams around outcomes.',
    highlights: [
      'Brand strategy & positioning',
      'Go-to-market planning',
      'Social media & content audits',
      'Creative direction for teams',
      'Market & competitor analysis',
    ],
    stat: { value: '50+', label: 'Strategies delivered' },
  },
  {
    id: 'branding',
    title: 'Branding',
    href: '/services/branding',
    Icon: Palette,
    tone: 'tertiary',
    category: 'Brand',
    tagline: 'Identities that outlive trends.',
    description:
      'We build brand systems that scale, from logo foundations to complete guidelines and rollout-ready visual kits.',
    highlights: [
      'Logo & full visual identity',
      'Brand guidelines & style docs',
      'Packaging design across SKUs',
      'Rebranding strategy & rollout',
      'Social media visual kits',
    ],
    stat: { value: '120+', label: 'Brands built' },
  },
  {
    id: 'advertising',
    title: 'Marketing and Advertising',
    href: '/services/advertising',
    Icon: Megaphone,
    tone: 'secondary',
    category: 'Growth',
    tagline: 'Campaigns that convert, not just impress.',
    description:
      'Performance-driven marketing and advertising campaigns across Meta, Google, YouTube and OOH, guided by strategy and rapid creative iteration.',
    highlights: [
      'Meta, Google & YouTube ads',
      'Out-of-home & print advertising',
      'Performance marketing optimization',
      'Festive & seasonal campaign planning',
      'Creative strategy & copywriting',
    ],
    stat: { value: '3x', label: 'Avg. ROAS delivered' },
  },
  {
    id: 'web-development',
    title: 'Web Development',
    href: '/services/web-development',
    Icon: Globe,
    tone: 'primary',
    category: 'Digital',
    tagline: 'Websites that work as hard as you do.',
    description:
      'Custom React websites, e-commerce stores and portals engineered for speed, SEO and conversion outcomes.',
    highlights: [
      'Custom React & Next.js websites',
      'E-commerce (Shopify, WooCommerce)',
      'Conversion-optimized landing pages',
      'CMS sites with easy self-editing',
      'Performance & SEO audits',
    ],
    stat: { value: '80+', label: 'Sites launched' },
  },
  {
    id: 'photography',
    title: 'Photography and Film Making',
    href: '/services/photography',
    Icon: Camera,
    tone: 'secondary',
    category: 'Visual',
    tagline: 'Stills and motion, crafted with equal intent.',
    description:
      'From cinematic wedding coverage and razor-sharp product photography to brand films and documentaries, we shape visuals that stop the scroll and stay memorable.',
    highlights: [
      'Wedding & pre-wedding photography',
      'Brand films & campaign films',
      'Commercial & product photography',
      'Event videography & documentaries',
      'Fashion, lifestyle & portrait shoots',
    ],
    stat: { value: '700+', label: 'Visual projects delivered' },
  },
  {
    id: 'events',
    title: 'Event and Artist Management',
    href: '/services/events',
    Icon: CalendarDays,
    tone: 'tertiary',
    category: 'Experience',
    tagline: 'Events that attendees actually remember.',
    description:
      'End-to-end event production for weddings, corporate summits and brand activations with tight operational control.',
    highlights: [
      'Weddings, receptions & mehendi',
      'Corporate summits & product launches',
      'Cultural festivals & public events',
      'Brand activations & pop-ups',
      'Full A/V & stage management',
    ],
    stat: { value: '300+', label: 'Events executed' },
  },
]

const CATEGORIES = ['All', 'Strategy', 'Brand', 'Growth', 'Digital', 'Visual', 'Experience']

const PROCESS = [
  {
    n: '01',
    title: 'Discovery Call',
    desc: 'We understand your goals, audience and what success looks like for you.',
  },
  {
    n: '02',
    title: 'Strategy & Proposal',
    desc: 'A clear scope, timeline and creative direction before any work begins.',
  },
  {
    n: '03',
    title: 'Creation',
    desc: 'Our team gets to work and keeps you aligned at every major milestone.',
  },
  {
    n: '04',
    title: 'Deliver & Grow',
    desc: 'Launch, measure and iterate with a long-term partnership mindset.',
  },
]

const GRID_BG = {
  backgroundImage:
    'linear-gradient(rgba(72,90,168,.04) 1px,transparent 1px),' +
    'linear-gradient(90deg,rgba(72,90,168,.04) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

const TONE_STYLES = {
  primary: {
    iconWrap: 'border-primary/20 bg-primary/8 group-hover:bg-primary/14',
    icon: 'text-primary',
    chip: 'border-primary/20 bg-primary/8 text-primary',
    tickWrap: 'border-primary/20 bg-primary/8',
    tick: 'text-primary',
    cta: 'border-primary/20 bg-primary/8 text-primary hover:bg-primary/12',
    stat: 'text-primary',
    surface: 'hover:border-primary/24 hover:shadow-[0_20px_40px_rgba(72,90,168,0.14)]',
  },
  secondary: {
    iconWrap: 'border-secondary/28 bg-secondary/10 group-hover:bg-secondary/16',
    icon: 'text-secondary',
    chip: 'border-secondary/25 bg-secondary/10 text-secondary',
    tickWrap: 'border-secondary/25 bg-secondary/10',
    tick: 'text-secondary',
    cta: 'border-secondary/30 bg-secondary/10 text-secondary hover:bg-secondary/16',
    stat: 'text-secondary',
    surface: 'hover:border-secondary/28 hover:shadow-[0_20px_40px_rgba(77,180,192,0.18)]',
  },
  tertiary: {
    iconWrap: 'border-tertiary bg-tertiary/70 group-hover:bg-tertiary',
    icon: 'text-primary',
    chip: 'border-tertiary bg-tertiary/70 text-primary',
    tickWrap: 'border-tertiary bg-tertiary/70',
    tick: 'text-primary',
    cta: 'border-tertiary bg-tertiary/70 text-primary hover:bg-tertiary',
    stat: 'text-primary',
    surface: 'hover:border-primary/18 hover:shadow-[0_18px_36px_rgba(72,90,168,0.12)]',
  },
}

function ServiceCard({ service, index }) {
  const tone = TONE_STYLES[service.tone] ?? TONE_STYLES.primary

  return (
    <Motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.38, delay: (index % 8) * 0.04 }}
      whileHover={{ y: -2 }}
      className={`group relative flex h-full min-h-[100%] flex-col overflow-hidden rounded-2xl border border-primary/12 bg-white shadow-[0_10px_26px_rgba(72,90,168,0.08)] transition-[border-color,box-shadow,transform] duration-300 ${tone.surface}`}>
      <div className="h-0.5 w-full bg-gradient-to-r from-primary/45 via-secondary/45 to-transparent" />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-6 flex items-start justify-between gap-3">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-colors duration-300 ${tone.iconWrap}`}>
            <service.Icon size={20} className={tone.icon} aria-hidden />
          </div>
          <span className={`rounded-full border px-2.5 py-1 font-body text-xs font-bold uppercase tracking-widest ${tone.chip}`}>
            {service.category}
          </span>
        </div>

        <h3 className="mb-2 font-heading text-lg text-primary sm:text-[1.35rem]" style={{ letterSpacing: '-0.02em' }}>
          {service.title}
        </h3>
        <p className="mb-4 font-body text-sm italic leading-relaxed text-primary/68">"{service.tagline}"</p>
        <p className="mb-6 font-body text-sm leading-relaxed text-primary/74 sm:text-[15px]">{service.description}</p>

        <ul className="mb-7 flex flex-1 flex-col gap-2.5">
          {service.highlights.map((highlight) => (
            <li key={highlight} className="flex items-center gap-2.5 font-body text-sm leading-relaxed text-primary/68">
              <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-md border ${tone.tickWrap}`}>
                <Check size={9} className={tone.tick} strokeWidth={3} aria-hidden />
              </span>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between border-t border-primary/10 pt-5">
          <div>
            <div className={`font-heading text-lg font-bold ${tone.stat}`}>{service.stat.value}</div>
            <div className="font-body text-xs text-primary/60">{service.stat.label}</div>
          </div>
          <Link
            to={service.href}
            className={`group/btn inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border px-4 py-2.5 font-body text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 ${tone.cta}`}>
            View Service
            <ChevronRight size={13} className="transition-transform group-hover/btn:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>
    </Motion.article>
  )
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All')
  const categoryCounts = useMemo(
    () =>
      SERVICES.reduce((acc, service) => {
        acc[service.category] = (acc[service.category] ?? 0) + 1
        return acc
      }, {}),
    []
  )

  const filtered = useMemo(
    () =>
      activeCategory === 'All'
        ? SERVICES
        : SERVICES.filter((service) => service.category === activeCategory),
    [activeCategory]
  )

  return (
    <div className="min-h-screen bg-white">
      <section className="relative flex min-h-[52vh] items-end overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-white/50 to-secondary/10" />
        <div className="absolute inset-0 opacity-[0.035]" style={GRID_BG} />
        <div className="pointer-events-none absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-secondary/8 blur-3xl" />

        <div className="container-custom relative z-10 pb-14 pt-32 sm:pb-16 sm:pt-40">
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-shell max-w-4xl px-6 py-8 sm:p-10">
            <span className="section-tag">What We Do</span>
            <h1 className="mb-5 max-w-3xl font-heading text-display leading-[1.04] text-primary" style={{ letterSpacing: '-0.025em' }}>
              One Roof.
              <br />
              <span className="text-gradient">Every Creative Need.</span>
            </h1>
            <p className="mb-8 max-w-2xl font-body text-base leading-relaxed text-primary/74 sm:text-lg lg:text-[1.1rem]">
              Consultation, branding, marketing and advertising, web development,
              photography and film making, plus event and artist management. All in-house. All crafted with intent.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-6">
              {[
                { value: `${SERVICES.length}`, label: 'Services' },
                { value: '500+', label: 'Projects' },
                { value: '100+', label: 'Clients' },
                { value: '5+', label: 'Years' },
              ].map((item, index) => (
                <Motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.08 }}
                  className="rounded-2xl border border-primary/10 bg-white/75 px-4 py-3 sm:bg-transparent sm:border-0 sm:p-0 flex items-baseline gap-2">
                  <span className="font-heading text-2xl font-bold text-primary">{item.value}</span>
                  <span className="font-body text-sm text-primary/68">{item.label}</span>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      <section className="sticky top-[var(--header-offset)] z-20 border-b border-tertiary bg-white/95 py-2.5 shadow-[0_6px_18px_rgba(72,90,168,0.06)] backdrop-blur-lg sm:py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-0.5">
            <span className="mr-1 shrink-0 font-body text-xs uppercase tracking-widest text-primary/60">Filter:</span>
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category
              const count = categoryCounts[category] ?? 0
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[44px] shrink-0 whitespace-nowrap rounded-full border px-4 py-2 font-body text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 ${
                    isActive
                      ? 'border-primary bg-primary text-tertiary shadow-[0_0_20px_rgba(72,90,168,0.22)]'
                      : 'border-primary/15 bg-transparent text-primary/72 hover:border-primary/30 hover:text-primary'
                  }`}>
                  {category}
                  {category !== 'All' && (
                    <span className={`ml-1.5 text-xs ${isActive ? 'text-tertiary/90' : 'text-primary/58'}`}>
                      ({count})
                    </span>
                  )}
                </button>
              )
            })}
            {activeCategory !== 'All' && (
              <button
                type="button"
                onClick={() => setActiveCategory('All')}
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
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            aria-live="polite"
            className="mb-8 sm:mb-10 font-body text-sm text-primary/68">
            {activeCategory === 'All'
              ? `Showing all ${SERVICES.length} services`
              : `${filtered.length} service${filtered.length !== 1 ? 's' : ''} in ${activeCategory}`}
          </Motion.p>

          <Motion.div layout className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 xl:gap-7">
            <AnimatePresence mode="popLayout">
              {filtered.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </AnimatePresence>
          </Motion.div>
        </div>
      </section>

      <section className="section-padding border-t border-tertiary bg-white">
        <div className="container-custom">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 sm:mb-14">
            <SectionHeading
              tag="How We Work"
              title="From Brief to"
              accent="Brilliant"
              align="center"
              className="max-w-2xl"
            />
          </Motion.div>

          <div className="grid overflow-hidden rounded-2xl border border-tertiary bg-tertiary sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((step, index) => (
              <Motion.article
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group border-b border-r border-tertiary bg-white p-6 transition-colors duration-200 hover:bg-tertiary/55 sm:p-8 lg:border-b-0">
                <div className="mb-4 font-heading text-4xl font-bold text-primary/60 transition-colors group-hover:text-primary/75">
                  {step.n}
                </div>
                <h3 className="mb-3 font-heading text-base text-primary">{step.title}</h3>
                <p className="font-body text-sm leading-relaxed text-primary/68">{step.desc}</p>
              </Motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-tertiary bg-white">
        <div className="container-custom">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <Motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-tag">Why Us</span>
              <h2 className="mb-6 font-heading text-h2 text-primary">
                Not a vendor.
                <br />
                <span className="text-gradient">A creative partner.</span>
              </h2>
              <p className="mb-8 font-body text-base leading-relaxed text-primary/74 sm:text-lg">
                Most agencies specialise in one lane. We built ShutterBeat Media to handle every
                creative and digital touchpoint, so your brand remains consistent across channels.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  'In-house team with full accountability',
                  'Every discipline under one roof in Pune',
                  'Strategy-first before creative execution',
                  'Transparent pricing and clear scopes',
                  'You own all deliverables, always',
                ].map((item, index) => (
                  <Motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-3 font-body text-sm text-primary/68">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border border-secondary/25 bg-secondary/10">
                      <Check size={10} className="text-secondary" strokeWidth={3} aria-hidden />
                    </span>
                    {item}
                  </Motion.li>
                ))}
              </ul>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {SERVICES.map((service, index) => {
                const tone = TONE_STYLES[service.tone] ?? TONE_STYLES.primary
                return (
                  <Motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06 }}
                    whileHover={{ scale: 1.04 }}>
                    <Link
                      to={service.href}
                      className={`group flex min-h-[112px] flex-col items-center justify-center gap-2 rounded-xl border p-4 text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 sm:min-h-[120px] ${tone.chip}`}>
                      <service.Icon size={20} className={tone.icon} aria-hidden />
                      <span className="font-body text-xs leading-tight text-primary/74 group-hover:text-primary">
                        {service.title}
                      </span>
                    </Link>
                  </Motion.div>
                )
              })}
            </Motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-tertiary bg-white">
        <div className="container-custom">
          <Motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center gap-1">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={16} className="fill-secondary text-secondary" aria-hidden />
              ))}
            </div>
            <blockquote className="mb-6 font-heading text-[1.75rem] leading-snug text-primary lg:text-3xl" style={{ letterSpacing: '-0.02em' }}>
              "ShutterBeat Media handled our brand film, website, ad campaign and event photography in one quarter. The consistency across every piece was remarkable."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/20">
                <span className="font-heading text-sm font-bold text-primary">VN</span>
              </div>
              <div className="text-left">
                <p className="font-body text-sm font-semibold text-primary">Vikram Nair</p>
                <p className="font-body text-xs text-primary/60">CMO, DriveX Motors</p>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      <section className="section-padding border-t border-tertiary bg-white">
        <div className="container-custom">
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative section-shell overflow-hidden rounded-2xl p-8 text-center sm:p-10 lg:p-16"
            style={{ background: 'linear-gradient(135deg, rgba(72,90,168,0.2), rgba(77,180,192,0.1))' }}>
            <div className="absolute inset-0 opacity-[0.04]" style={GRID_BG} />
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2">
                <Zap size={14} className="text-secondary" aria-hidden />
                <span className="font-body text-sm text-primary/68">Ready when you are</span>
              </div>
              <h2 className="mb-4 font-heading text-h2 text-primary">
                Let&apos;s Build Something <span className="text-gradient">Unforgettable</span>
              </h2>
              <p className="mx-auto mb-8 sm:mb-10 max-w-xl font-body text-base text-primary/74 sm:text-lg leading-relaxed">
                Tell us what you need, one service or the full stack. We will share a clear proposal within 24 hours.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link to="/contact" className="btn-primary">
                  Start a Project <ArrowRight size={16} />
                </Link>
                <Link to="/portfolio" className="btn-secondary">
                  See Our Work
                </Link>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>
    </div>
  )
}
