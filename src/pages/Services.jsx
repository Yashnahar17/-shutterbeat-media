import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import {
  Camera, Film, Palette, Megaphone, Globe,
  CalendarDays, Music2, Lightbulb,
  ArrowRight, Check, Star, ChevronRight, Zap,
} from 'lucide-react'

// ── Service definitions ───────────────────────────────────────
const SERVICES = [
  {
    id: 'photography',
    title: 'Photography',
    href: '/services/photography',
    Icon: Camera,
    accent: '#e879a0',
    accentBg: 'rgba(232,121,160,0.08)',
    accentBorder: 'rgba(232,121,160,0.22)',
    category: 'Visual',
    tagline: 'Moments frozen in their most honest light.',
    description:
      'From cinematic wedding coverage to razor-sharp product photography, we turn real moments into images that stop the scroll and tell your story.',
    highlights: [
      'Wedding & pre-wedding photography',
      'Commercial & product photography',
      'Fashion & lifestyle shoots',
      'Architectural & interior photography',
      'Corporate headshots & portraits',
    ],
    stat: { value: '500+', label: 'Shoots delivered' },
  },
  {
    id: 'film-making',
    title: 'Film Making',
    href: '/services/film-making',
    Icon: Film,
    accent: '#a78bfa',
    accentBg: 'rgba(167,139,250,0.08)',
    accentBorder: 'rgba(167,139,250,0.22)',
    category: 'Visual',
    tagline: 'Stories that move people — literally.',
    description:
      'Cinematic brand films, music videos and corporate documentaries crafted with full production — from concept to final cut, every frame intentional.',
    highlights: [
      'Brand films for TV & digital',
      'Music videos — full crew production',
      'Corporate & investor documentaries',
      'Wedding & event videography',
      'Short films & original content',
    ],
    stat: { value: '200+', label: 'Films produced' },
  },
  {
    id: 'branding',
    title: 'Branding',
    href: '/services/branding',
    Icon: Palette,
    accent: '#34d399',
    accentBg: 'rgba(52,211,153,0.08)',
    accentBorder: 'rgba(52,211,153,0.22)',
    category: 'Strategy',
    tagline: 'Identities that outlive trends.',
    description:
      'We build brand systems that scale — from the first logo sketch to complete guidelines, packaging and digital kits that make your brand unmistakable.',
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
    title: 'Advertising',
    href: '/services/advertising',
    Icon: Megaphone,
    accent: '#fbbf24',
    accentBg: 'rgba(251,191,36,0.08)',
    accentBorder: 'rgba(251,191,36,0.22)',
    category: 'Growth',
    tagline: 'Campaigns that convert, not just impress.',
    description:
      'Performance-driven campaigns across Meta, Google, YouTube and OOH — backed by creative strategy and relentless optimisation for real business results.',
    highlights: [
      'Meta, Google & YouTube ads',
      'Out-of-home & print advertising',
      'Performance marketing & ROAS optim.',
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
    accent: '#38bdf8',
    accentBg: 'rgba(56,189,248,0.08)',
    accentBorder: 'rgba(56,189,248,0.22)',
    category: 'Digital',
    tagline: 'Websites that work as hard as you do.',
    description:
      'Custom React websites, e-commerce stores and LMS portals engineered for speed, SEO and conversions — not just aesthetics.',
    highlights: [
      'Custom React & Next.js websites',
      'E-commerce (Shopify, WooCommerce)',
      'Conversion-optimised landing pages',
      'CMS sites with easy self-editing',
      'Performance & SEO audits',
    ],
    stat: { value: '80+', label: 'Sites launched' },
  },
  {
    id: 'events',
    title: 'Events',
    href: '/services/events',
    Icon: CalendarDays,
    accent: '#f472b6',
    accentBg: 'rgba(244,114,182,0.08)',
    accentBorder: 'rgba(244,114,182,0.22)',
    category: 'Experience',
    tagline: 'Events that attendees actually remember.',
    description:
      'End-to-end event production for weddings, corporate summits, music festivals and brand activations — every detail managed, nothing left to chance.',
    highlights: [
      'Weddings, receptions & mehendi',
      'Corporate summits & product launches',
      'Music festivals & cultural events',
      'Brand activations & pop-ups',
      'Full A/V & stage management',
    ],
    stat: { value: '300+', label: 'Events executed' },
  },
  {
    id: 'music',
    title: 'Music',
    href: '/services/music',
    Icon: Music2,
    accent: '#c084fc',
    accentBg: 'rgba(192,132,252,0.08)',
    accentBorder: 'rgba(192,132,252,0.22)',
    category: 'Audio',
    tagline: 'Sound that sets the mood before a word is spoken.',
    description:
      'Original brand jingles, background scores, full EP production and podcast editing — audio that stays in people\'s heads long after the content ends.',
    highlights: [
      'Brand jingles & audio identities',
      'Background scores for film & ads',
      'Music production & studio recording',
      'Artist management & promotion',
      'Podcast production & editing',
    ],
    stat: { value: '150+', label: 'Tracks produced' },
  },
  {
    id: 'consultation',
    title: 'Consultation',
    href: '/services/consultation',
    Icon: Lightbulb,
    accent: '#86efac',
    accentBg: 'rgba(134,239,172,0.08)',
    accentBorder: 'rgba(134,239,172,0.22)',
    category: 'Strategy',
    tagline: 'Clarity before creativity — always.',
    description:
      'Strategic advisory for brands at any stage — positioning workshops, go-to-market planning, content audits and creative direction that cuts through the noise.',
    highlights: [
      'Brand strategy & positioning',
      'Go-to-market planning',
      'Social media & content audits',
      'Creative direction for teams',
      'Market & competitor analysis',
    ],
    stat: { value: '50+', label: 'Strategies delivered' },
  },
]

const CATEGORIES = ['All', 'Visual', 'Strategy', 'Growth', 'Digital', 'Experience', 'Audio']

const PROCESS = [
  { n: '01', title: 'Discovery Call',     desc: 'We understand your goals, audience and what success looks like for you.' },
  { n: '02', title: 'Strategy & Proposal', desc: 'A clear scope, timeline and creative direction before any work begins.' },
  { n: '03', title: 'Creation',           desc: 'Our team gets to work — you stay looped in at every milestone.' },
  { n: '04', title: 'Deliver & Grow',     desc: 'Launch, measure, iterate. We stay invested in your results long-term.' },
]

const GRID_BG = {
  backgroundImage:
    'linear-gradient(rgba(72,90,168,.04) 1px,transparent 1px),' +
    'linear-gradient(90deg,rgba(72,90,168,.04) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

// ── Service card ──────────────────────────────────────────────
function ServiceCard({ s, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <Motion.div
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-[#F4E8DC] border rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
      style={{
        borderColor: hovered ? s.accentBorder : 'rgba(72,90,168,0.06)',
        boxShadow: hovered ? `0 0 40px ${s.accent}12` : 'none',
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-0.5 w-full transition-all duration-500"
        style={{ background: hovered ? `linear-gradient(90deg, ${s.accent}, transparent)` : 'transparent' }}
      />

      <div className="p-7 flex flex-col flex-1">

        {/* Icon + category */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300"
            style={{
              background: hovered ? s.accentBg : 'rgba(72,90,168,0.04)',
              border: `1px solid ${hovered ? s.accentBorder : 'rgba(72,90,168,0.08)'}`,
            }}
          >
            <s.Icon size={20} style={{ color: hovered ? s.accent : 'rgba(72,90,168,0.35)', transition: 'color 0.3s' }} />
          </div>
          <span
            className="text-xs font-body font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border"
            style={{
              color: s.accent,
              background: s.accentBg,
              borderColor: s.accentBorder,
            }}
          >
            {s.category}
          </span>
        </div>

        {/* Title + tagline */}
        <h3 className="font-heading text-primary text-xl mb-2 transition-colors duration-200"
          style={{ letterSpacing: '-0.02em' }}>
          {s.title}
        </h3>
        <p className="text-primary/35 font-body text-sm italic mb-4" style={{ color: hovered ? 'rgba(72,90,168,0.5)' : undefined, transition: 'color 0.3s' }}>
          "{s.tagline}"
        </p>
        <p className="text-primary/40 font-body text-sm leading-relaxed mb-6">
          {s.description}
        </p>

        {/* Highlights */}
        <ul className="flex flex-col gap-2.5 mb-7 flex-1">
          {s.highlights.map((h, i) => (
            <li key={i} className="flex items-center gap-2.5 font-body text-sm"
              style={{ color: 'rgba(72,90,168,0.55)' }}>
              <span
                className="w-4 h-4 rounded-md flex items-center justify-center shrink-0"
                style={{ background: s.accentBg, border: `1px solid ${s.accentBorder}` }}
              >
                <Check size={9} style={{ color: s.accent }} strokeWidth={3} />
              </span>
              {h}
            </li>
          ))}
        </ul>

        {/* Stat + CTA */}
        <div className="flex items-center justify-between pt-5 border-t"
          style={{ borderColor: 'rgba(72,90,168,0.06)' }}>
          <div>
            <div className="font-heading text-primary text-lg font-bold" style={{ color: s.accent }}>
              {s.stat.value}
            </div>
            <div className="text-primary/30 font-body text-xs">{s.stat.label}</div>
          </div>
          <Link
            to={s.href}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-body text-sm font-semibold transition-all duration-200 group/btn"
            style={{
              background: hovered ? s.accentBg : 'rgba(72,90,168,0.04)',
              border: `1px solid ${hovered ? s.accentBorder : 'rgba(72,90,168,0.08)'}`,
              color: hovered ? s.accent : 'rgba(72,90,168,0.4)',
            }}
          >
            View Service
            <ChevronRight size={13} className="group-hover/btn:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </Motion.div>
  )
}

// ── Page ──────────────────────────────────────────────────────
export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory)

  return (
    <div className="bg-tertiary min-h-screen">

      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative min-h-[52vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[#F4E8DC]" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-[#F4E8DC]/50 to-secondary/10" />
        <div className="absolute inset-0 opacity-[0.035]" style={GRID_BG} />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10 pt-40 pb-16">
          <Motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="section-tag">What We Do</span>
            <h1 className="font-heading text-display text-primary mb-5 leading-tight max-w-3xl"
              style={{ letterSpacing: '-0.025em' }}>
              One Roof.<br />
              <span className="text-gradient">Every Creative Need.</span>
            </h1>
            <p className="text-primary/45 font-body text-xl max-w-2xl leading-relaxed mb-8">
              From shutter to the beat — photography, film, branding, advertising,
              web, events, music and strategy. All in-house. All obsessively crafted.
            </p>

            {/* Quick stat row */}
            <div className="flex flex-wrap gap-6">
              {[
                { v: '8',    l: 'Services' },
                { v: '500+', l: 'Projects' },
                { v: '100+', l: 'Clients'  },
                { v: '5+',   l: 'Years'    },
              ].map((s, i) => (
                <Motion.div key={i}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-baseline gap-2">
                  <span className="font-heading text-primary text-2xl font-bold">{s.v}</span>
                  <span className="text-primary/30 font-body text-sm">{s.l}</span>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ── Filter bar ───────────────────────────── */}
      <section className="sticky top-16 z-20 bg-tertiary/95 backdrop-blur-lg border-b border-[#D7C2AD] py-4">
        <div className="container-custom">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            <span className="text-primary/20 font-body text-xs tracking-widest uppercase shrink-0 mr-1">Filter:</span>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-1.5 rounded-full font-body text-sm whitespace-nowrap transition-all duration-200 border shrink-0"
                style={{
                  background: activeCategory === cat ? '#485AA8' : 'transparent',
                  borderColor: activeCategory === cat ? '#485AA8' : 'rgba(72,90,168,0.1)',
                  color: activeCategory === cat ? '#EDD9C4' : 'rgba(72,90,168,0.35)',
                  fontWeight: activeCategory === cat ? 600 : 400,
                  boxShadow: activeCategory === cat ? '0 0 20px rgba(72,90,168,0.3)' : 'none',
                }}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-1.5 text-xs opacity-50">
                    ({SERVICES.filter(s => s.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services grid ────────────────────────── */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <Motion.p
            key={activeCategory}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-primary/20 font-body text-sm mb-10"
          >
            {activeCategory === 'All'
              ? `Showing all ${SERVICES.length} services`
              : `${filtered.length} service${filtered.length !== 1 ? 's' : ''} in ${activeCategory}`}
          </Motion.p>

          <Motion.div layout className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((s, i) => (
                <ServiceCard key={s.id} s={s} index={i} />
              ))}
            </AnimatePresence>
          </Motion.div>
        </div>
      </section>

      {/* ── Process strip ────────────────────────── */}
      <section className="section-padding bg-[#F4E8DC] border-t border-[#D7C2AD]">
        <div className="container-custom">
          <Motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} className="text-center mb-14"
          >
            <span className="section-tag">How We Work</span>
            <h2 className="font-heading text-h2 text-primary">
              From Brief to <span className="text-gradient">Brilliant</span>
            </h2>
          </Motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D7C2AD] rounded-2xl overflow-hidden border border-[#D7C2AD]">
            {PROCESS.map((step, i) => (
              <Motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-[#F4E8DC] p-8 hover:bg-[#E8D4BF] transition-colors duration-200 group"
              >
                <div className="font-heading text-primary/30 text-4xl font-bold mb-4 group-hover:text-primary/50 transition-colors">
                  {step.n}
                </div>
                <h3 className="font-heading text-primary text-base mb-3">{step.title}</h3>
                <p className="text-primary/35 font-body text-sm leading-relaxed">{step.desc}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why ShutterBeat strip ─────────────────── */}
      <section className="section-padding bg-tertiary border-t border-[#D7C2AD]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: text */}
            <Motion.div
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}>
              <span className="section-tag">Why Us</span>
              <h2 className="font-heading text-h2 text-primary mb-6">
                Not a vendor.<br />
                <span className="text-gradient">A creative partner.</span>
              </h2>
              <p className="text-primary/40 font-body text-lg leading-relaxed mb-8">
                Most agencies specialise in one lane. We built ShutterBeat to handle
                every creative and digital touchpoint — so your brand stays consistent
                from a wedding film to a Google ad campaign.
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  'In-house team — no outsourcing, full accountability',
                  'Every discipline under one roof in Pune',
                  'Strategy-first before any creative begins',
                  'Transparent pricing, no surprise invoices',
                  'You own all deliverables — always',
                ].map((item, i) => (
                  <Motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 text-primary/60 font-body text-sm"
                  >
                    <span className="w-5 h-5 rounded-lg bg-secondary/10 border border-secondary/25 flex items-center justify-center shrink-0">
                      <Check size={10} className="text-secondary" strokeWidth={3} />
                    </span>
                    {item}
                  </Motion.li>
                ))}
              </ul>
            </Motion.div>

            {/* Right: service icon grid */}
            <Motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-4 gap-3"
            >
              {SERVICES.map((s, i) => (
                <Motion.div
                  key={s.id}
                  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  whileHover={{ scale: 1.08 }}
                >
                  <Link
                    to={s.href}
                    className="flex flex-col items-center gap-2 p-4 rounded-xl border transition-all duration-200 group"
                    style={{
                      background: s.accentBg,
                      borderColor: s.accentBorder,
                    }}
                  >
                    <s.Icon size={20} style={{ color: s.accent }} />
                    <span className="text-primary/50 font-body text-xs text-center leading-tight group-hover:text-primary transition-colors">
                      {s.title}
                    </span>
                  </Link>
                </Motion.div>
              ))}
            </Motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonial highlight ─────────────────── */}
      <section className="section-padding bg-[#F4E8DC] border-t border-[#D7C2AD]">
        <div className="container-custom">
          <Motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-secondary fill-secondary" />
              ))}
            </div>
            <blockquote className="font-heading text-primary text-2xl lg:text-3xl leading-snug mb-6"
              style={{ letterSpacing: '-0.02em' }}>
              "ShutterBeat handled our brand film, website, ad campaign and event photography
              — all in the same quarter. The consistency across every piece was remarkable."
            </blockquote>
            <div className="flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                <span className="font-heading text-primary text-sm font-bold">VN</span>
              </div>
              <div className="text-left">
                <p className="text-primary font-body text-sm font-semibold">Vikram Nair</p>
                <p className="text-primary/35 font-body text-xs">CMO, DriveX Motors</p>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="section-padding bg-tertiary border-t border-[#D7C2AD]">
        <div className="container-custom">
          <Motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden p-10 lg:p-16 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(72,90,168,0.2), rgba(77,180,192,0.1))' }}
          >
            {/* BG grid */}
            <div className="absolute inset-0 opacity-[0.04]" style={GRID_BG} />
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-6">
                <Zap size={14} className="text-secondary" />
                <span className="text-primary/60 font-body text-sm">Ready when you are</span>
              </div>
              <h2 className="font-heading text-h2 text-primary mb-4">
                Let's Build Something <span className="text-gradient">Unforgettable</span>
              </h2>
              <p className="text-primary/40 font-body text-lg max-w-xl mx-auto mb-10">
                Tell us what you need — one service or the whole stack. We'll put together
                a proposal within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
