import { motion as Motion} from 'framer-motion'
import { clients } from '../data/clients'
import SectionHeading from '../components/ui/SectionHeading'

const logos = [...clients, ...clients]

export default function ClientLogos() {
  return (
    <section className="py-14 sm:py-16 bg-white border-y border-tertiary overflow-hidden">
      <div className="container-custom mb-8 text-center">
        <SectionHeading
          tag="Trusted By"
          description="Selected brands and partners we've supported across strategy, content, campaigns, and digital experiences."
          align="center"
          className="max-w-2xl"
        />
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <Motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-6 sm:gap-8 w-max">
          {logos.map((client, i) => (
            <a
              key={`${client.name}-${i}`}
              href={client.website}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${client.name}`}
              className="group flex h-24 w-44 sm:h-28 sm:w-48 items-center justify-center rounded-2xl border border-primary/10 bg-white px-6 shrink-0 shadow-[0_10px_24px_rgba(72,90,168,0.06)] hover:border-primary/24 hover:bg-primary/[0.02] transition-[border-color,background-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(72,90,168,0.1)]">
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-14 sm:max-h-16 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              ) : (
                <span className="font-heading text-primary/60 text-sm text-center transition-colors group-hover:text-primary/75">
                  {client.name}
                </span>
              )}
            </a>
          ))}
        </Motion.div>
      </div>
    </section>
  )
}
