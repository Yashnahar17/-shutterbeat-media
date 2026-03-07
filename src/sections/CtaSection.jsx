import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function CtaSection() {
  return (
    <section className="section-padding bg-tertiary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-[#F4E8DC] border border-[#D7C2AD] rounded-[2rem] p-12 lg:p-20 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-[2rem]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-primary/50" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Sparkles size={14} className="text-secondary" />
              <span className="text-secondary text-xs font-body font-semibold tracking-widest uppercase">Let's Create Together</span>
            </div>
            <h2 className="font-heading text-h1 text-primary mb-6 max-w-2xl mx-auto">
              Let's Build Something{' '}
              <span className="text-gradient">Creative</span>{' '}
              Together
            </h2>
            <p className="text-primary/50 font-body text-lg max-w-xl mx-auto mb-10">
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
        </motion.div>
      </div>
    </section>
  )
}
