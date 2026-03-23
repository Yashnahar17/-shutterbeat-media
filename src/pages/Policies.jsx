import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import {
  Shield, FileText, Cookie, Copyright, Database,
  Accessibility, Megaphone, UserCheck,
  ChevronDown, ChevronUp, ExternalLink, ArrowRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { policies, policiesMeta } from '../data/policies'

// Map icon strings → lucide components
const ICON_MAP = {
  Shield,
  FileText,
  Cookie,
  Copyright,
  Database,
  Accessibility,
  Megaphone,
  UserCheck,
}

const GRID_STYLE = {
  backgroundImage:
    'linear-gradient(rgba(72,90,168,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(72,90,168,.08) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

// ── Single policy accordion card ─────────────
function PolicyCard({ policy }) {
  const [open, setOpen] = useState(false)
  const Icon = ICON_MAP[policy.icon] || FileText

  return (
    <Motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-tertiary rounded-card overflow-hidden hover:border-primary/10 transition-colors">

      {/* Header / toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-start gap-5 p-6 text-left group">
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-tertiary/60 border border-tertiary flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-colors">
          <Icon size={22} className="text-secondary" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-heading text-primary text-base">{policy.title}</h3>
            <span className={`text-xs font-body font-semibold px-2.5 py-0.5 rounded-full border ${policy.badgeColor}`}>
              {policy.badge}
            </span>
          </div>
          <p className="text-primary/65 font-body text-sm leading-relaxed line-clamp-2">{policy.summary}</p>
        </div>

        {/* Chevron */}
        <div className="shrink-0 mt-1">
          {open
            ? <ChevronUp  size={18} className="text-primary/65 group-hover:text-primary transition-colors" />
            : <ChevronDown size={18} className="text-primary/65 group-hover:text-primary transition-colors" />}
        </div>
      </button>

      {/* Expanded content */}
      <AnimatePresence initial={false}>
        {open && (
          <Motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden">
            <div className="px-6 pb-8 flex flex-col gap-6">
              <div className="h-px bg-[#EDD9C4]" />
              {policy.sections.map((sec, i) => (
                <div key={i}>
                  <h4 className="font-heading text-primary text-sm mb-2">{sec.heading}</h4>
                  <p className="text-primary/50 font-body text-sm leading-relaxed">{sec.body}</p>
                </div>
              ))}
              {/* Contact footer */}
              <div className="mt-2 p-4 bg-white rounded-xl border border-tertiary">
                <p className="text-primary/55 font-body text-xs">
                  Questions about this policy?{' '}
                  <a href={`mailto:${policiesMeta.contactEmail}`}
                    className="text-secondary hover:text-primary transition-colors">
                    {policiesMeta.contactEmail}
                  </a>
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2.5 font-body text-sm font-medium text-primary transition-colors hover:border-primary/35 hover:bg-primary/10">
                  <ChevronUp size={15} />
                  Minimize
                </button>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.div>
  )
}

// ── Page ──────────────────────────────────────
export default function Policies() {
  return (
    <div className="bg-white min-h-screen">

      {/* ── Banner ──────────────────────────────── */}
      <section className="relative min-h-[45vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-white to-secondary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-32 sm:pt-36">
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl rounded-[1.6rem] border border-primary/12 bg-white/72 backdrop-blur-sm px-6 py-8 sm:p-10 shadow-[0_24px_52px_rgba(72,90,168,0.14)]">
            <span className="section-tag">Legal & Compliance</span>
            <h1 className="font-heading text-display text-primary mb-4 leading-tight">
              Policies &amp; <span className="text-gradient">Terms</span>
            </h1>
            <p className="text-primary/50 font-body text-base sm:text-lg max-w-2xl">
              Transparency is core to how we operate. Read our policies to understand
              how we handle your data, protect intellectual property and run our business.
            </p>
            <p className="text-primary/55 font-body text-sm mt-4">
              Last updated: {policiesMeta.lastUpdated} · {policiesMeta.companyName}, {policiesMeta.companyAddress}
            </p>
          </Motion.div>
        </div>
      </section>

      {/* ── Quick Nav ────────────────────────────── */}
      <section className="py-3 sm:py-6 bg-white border-y border-tertiary sticky top-[var(--header-offset)] z-20 backdrop-blur-md">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-primary/55 font-body text-xs tracking-widest uppercase mr-2 shrink-0">Jump to:</span>
            {policies.map(p => {
              const Icon = ICON_MAP[p.icon] || FileText
              return (
                <a key={p.id}
                  href={`#${p.id}`}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-tertiary text-primary/65 hover:text-primary hover:border-primary/40 font-body text-xs transition-all duration-200">
                  <Icon size={11} />
                  {p.title}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Policy Cards ─────────────────────────── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl flex flex-col gap-4">
          {policies.map(policy => (
            <div key={policy.id} id={policy.id}>
              <PolicyCard policy={policy} />
            </div>
          ))}
        </div>
      </section>

      {/* ── Summary strip ────────────────────────── */}
      <section className="section-padding bg-white border-t border-tertiary">
        <div className="container-custom max-w-4xl">
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon:Shield,   label:'Data Protected',  desc:'We follow India\'s DPDP Act 2023 and global best practices.' },
              { icon:Copyright,label:'IP Respected',    desc:'All creative work is protected. Client licences are clearly defined.' },
              { icon:FileText, label:'Transparent',     desc:'No hidden clauses. Every policy is written in plain English.' },
            ].map((item, i) => (
              <Motion.div key={item.label}
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-primary text-sm mb-1">{item.label}</h4>
                  <p className="text-primary/65 font-body text-xs leading-relaxed">{item.desc}</p>
                </div>
              </Motion.div>
            ))}
          </div>

          <div className="p-6 bg-white border border-tertiary rounded-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-heading text-primary text-base mb-1">Questions about our policies?</h3>
              <p className="text-primary/65 font-body text-sm">
                Reach out and we'll clarify anything within 2 business days.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              Contact Us <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
