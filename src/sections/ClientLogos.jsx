import { motion } from 'framer-motion'
import { clients } from '../data/clients'

const logos = [...clients, ...clients]

export default function ClientLogos() {
  return (
    <section className="py-12 bg-[#F4E8DC] border-y border-[#D7C2AD] overflow-hidden">
      <div className="container-custom mb-8 text-center">
        <span className="section-tag">Trusted By</span>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F4E8DC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F4E8DC] to-transparent z-10 pointer-events-none" />
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-12 w-max">
          {logos.map((client, i) => (
            <div key={i}
              className="flex items-center justify-center w-36 h-16 bg-[#E8D4BF] border border-[#D7C2AD] rounded-xl px-6 shrink-0 hover:border-primary/30 transition-colors">
              <span className="font-heading text-primary/30 text-sm text-center hover:text-primary/60 transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
