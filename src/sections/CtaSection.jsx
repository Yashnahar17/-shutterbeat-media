import { Link } from 'react-router-dom'
import { motion as Motion} from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/12 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[640px] sm:h-[640px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="container-custom relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative section-shell p-8 sm:p-10 lg:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-white/50 to-secondary/12 rounded-[2rem]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/50" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles size={14} className="text-secondary" />
              <span className="text-secondary text-xs font-body font-semibold tracking-widest uppercase">Let's Create Together</span>
            </div>
            <h2 className="font-heading text-h1 text-primary mb-6 max-w-2xl mx-auto">
              Let's Build Something{' '}
              <span className="text-gradient">Creative</span>{' '}
              Together
            </h2>
            <p className="text-primary/70 font-body text-base sm:text-lg max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed">
              Whether you have a full brief or just a spark of an idea — we are ready to bring it to life.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Start a Project <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="btn-secondary text-base px-8 py-4">
                Learn About Us
              </Link>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  )
}
