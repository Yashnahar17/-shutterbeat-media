import { motion as Motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const GRID_STYLE = {
  backgroundImage:
    'linear-gradient(rgba(72,90,168,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(72,90,168,.07) 1px,transparent 1px)',
  backgroundSize: '56px 56px',
}

export default function PageBanner({
  icon: Icon,
  eyebrow = 'Our Services',
  title,
  accent,
  suffix,
  description,
  ctaLabel,
  ctaTo = '/contact',
  gradientClass = 'from-primary/14 via-white to-secondary/10',
  orbOneClass = 'bg-primary/10',
  orbTwoClass = 'bg-secondary/10',
  iconShellClass = 'bg-primary/10 border-primary/20',
  iconClassName = 'text-secondary',
}) {
  return (
    <section className="relative flex min-h-[58vh] items-end overflow-hidden pb-14 sm:min-h-[65vh] sm:pb-20">
      <div className="absolute inset-0 bg-white" />
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClass}`} />
      <div className="absolute inset-0 opacity-40" style={GRID_STYLE} />
      <div className={`absolute right-[14%] top-[20%] h-72 w-72 rounded-full blur-3xl ${orbOneClass}`} />
      <div className={`absolute bottom-[12%] left-[10%] h-56 w-56 rounded-full blur-3xl ${orbTwoClass}`} />

      <div className="container-custom relative z-10 pt-32 sm:pt-40">
        <Motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72 }}
          className="section-shell max-w-4xl px-6 py-7 sm:px-9 sm:py-9">
          {Icon ? (
            <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border ${iconShellClass}`}>
              <Icon size={30} className={iconClassName} aria-hidden />
            </div>
          ) : null}

          <span className="section-tag">{eyebrow}</span>
          <h1 className="font-heading text-display mb-5 max-w-3xl text-primary text-balance leading-[1.02]">
            {title}
            {accent ? <> <span className="text-gradient">{accent}</span></> : null}
            {suffix}
          </h1>
          {description ? <p className="body-copy mb-8 max-w-2xl text-base sm:text-lg">{description}</p> : null}

          {ctaLabel ? (
            <Link to={ctaTo} className="btn-primary btn-size-lg shadow-[0_16px_34px_rgba(72,90,168,0.24)] sm:w-auto">
              {ctaLabel}
              <ArrowRight size={18} aria-hidden />
            </Link>
          ) : null}
        </Motion.div>
      </div>
    </section>
  )
}
