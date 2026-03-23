import { motion as Motion} from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { clients as defaultClients } from '../../data/clients'

export default function ClientsGrid({ items }) {
  const list = items || defaultClients
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {list.map((c, i) => {
        const fallback = `https://www.google.com/search?q=${encodeURIComponent(c.name)}`
        const website = c.website && c.website !== '#' ? c.website : fallback
        return (
        <Motion.a
          key={c.id}
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
          className="group flex min-h-[112px] flex-col items-center justify-center gap-2 rounded-card border border-primary/12 bg-white px-4 py-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-[0_12px_28px_rgba(72,90,168,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-tertiary bg-tertiary/45 transition-colors group-hover:border-secondary/30">
            <span className="font-heading text-xs font-bold text-primary/70">
              {c.name.slice(0,2).toUpperCase()}
            </span>
          </div>
          <p className="line-clamp-2 font-body text-sm leading-snug text-primary/70 transition-colors group-hover:text-primary">
            {c.name}
          </p>
          <ExternalLink size={12} className="text-primary/25 transition-colors group-hover:text-secondary" />
        </Motion.a>
        )
      })}
    </div>
  )
}
