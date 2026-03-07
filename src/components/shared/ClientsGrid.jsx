import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { clients as defaultClients } from '../../data/clients'

export default function ClientsGrid({ items }) {
  const list = items || defaultClients
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {list.map((c, i) => (
        <motion.a
          key={c.id}
          href={c.website}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
          className="group flex flex-col items-center gap-2 p-4 bg-[#F4E8DC] border border-[#D7C2AD] rounded-card hover:border-secondary/30 hover:-translate-y-1 transition-all duration-300 text-center">
          <div className="w-10 h-10 rounded-lg bg-[#E8D4BF] border border-[#D7C2AD] flex items-center justify-center group-hover:border-secondary/30 transition-colors">
            <span className="font-heading text-primary/40 text-xs font-bold">
              {c.name.slice(0,2).toUpperCase()}
            </span>
          </div>
          <p className="font-body text-primary/50 text-xs group-hover:text-primary transition-colors leading-tight">
            {c.name}
          </p>
          <ExternalLink size={10} className="text-primary/20 group-hover:text-secondary transition-colors" />
        </motion.a>
      ))}
    </div>
  )
}
