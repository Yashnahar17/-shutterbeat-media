import { Link } from 'react-router-dom'
import { motion as Motion} from 'framer-motion'
import {
  Camera, Music, Calendar, Film,
  Megaphone, Code, Layers, Briefcase, ArrowRight
} from 'lucide-react'
import { visibleServices } from '../data/services'

// Map icon string → actual Lucide component
const iconMap = {
  Camera, Music, Calendar, Film,
  Megaphone, Code, Layers, Briefcase,
}

// Each card gets a subtle accent color
const cardAccents = [
  'from-primary/20 to-transparent',
  'from-secondary/20 to-transparent',
  'from-tertiary/20 to-transparent',
  'from-primary/20 to-transparent',
  'from-secondary/20 to-transparent',
  'from-tertiary/20 to-transparent',
  'from-primary/20 to-transparent',
  'from-secondary/20 to-transparent',
]

// Framer Motion variants
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } }
}

export default function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">

        {/* ── HEADING ──────────────────────────── */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16">

          <span className="section-tag">What We Do</span>

          <h2 className="font-heading text-h2 text-primary mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>

          <p className="text-primary/65 font-body text-sm sm:text-base leading-relaxed">
            From shutter to the beat — we cover every creative and digital
            need your business could have, all under one roof.
          </p>
        </Motion.div>

        {/* ── SERVICES GRID ────────────────────── */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {visibleServices.map((service, index) => {
            const Icon = iconMap[service.icon] || Camera

            return (
              <Motion.div key={service.id} variants={cardVariants}>
                <Link
                  to={service.slug}
                  className="group relative flex flex-col h-full bg-white border border-tertiary rounded-card p-5 sm:p-6 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">

                  {/* Gradient accent top */}
                  <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${cardAccents[index]}`} />

                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-card" />

                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-tertiary/60 border border-tertiary flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <Icon
                      size={22}
                      className="text-primary/60 group-hover:text-secondary transition-colors duration-300"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 font-heading text-primary text-base mb-3 group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-primary/60 font-body text-sm leading-relaxed flex-1 mb-5">
                    {service.shortDesc}
                  </p>

                  {/* Categories pills — show first 3 */}
                  <div className="relative z-10 flex flex-wrap gap-1.5 mb-5">
                    {(service.categories || service.eventTypes || []).slice(0, 3).map((cat) => (
                      <span
                        key={cat}
                        className="text-xs font-body px-2 py-0.5 rounded-full bg-tertiary/60 text-primary/60 border border-tertiary">
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* CTA arrow */}
                  <div className="relative z-10 flex items-center gap-2 text-sm font-body font-medium text-primary/60 group-hover:text-secondary transition-colors duration-300">
                    <span>Explore</span>
                    <ArrowRight
                      size={14}
                      className="-translate-x-1 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </div>

                </Link>
              </Motion.div>
            )
          })}

        </Motion.div>

        {/* ── BOTTOM CTA ───────────────────────── */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12">
          <p className="text-primary/60 font-body text-sm mb-4">
            Not sure what you need?
          </p>
          <Link to="/contact" className="btn-secondary">
            Let's Talk
            <ArrowRight size={16} />
          </Link>
        </Motion.div>

      </div>
    </section>
  )
}
