import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Users, Mic2, CalendarCheck } from 'lucide-react'

const counters = [
  {
    icon:   Trophy,
    value:  200,
    suffix: '+',
    label:  'Projects Completed',
    color:  'text-primary',
    bg:     'bg-primary/10',
    border: 'border-primary/20',
  },
  {
    icon:   Users,
    value:  50,
    suffix: '+',
    label:  'Clients Served',
    color:  'text-secondary',
    bg:     'bg-secondary/10',
    border: 'border-secondary/20',
  },
  {
    icon:   Mic2,
    value:  30,
    suffix: '+',
    label:  'Artists Managed',
    color:  'text-tertiary',
    bg:     'bg-tertiary/10',
    border: 'border-tertiary/20',
  },
  {
    icon:   CalendarCheck,
    value:  100,
    suffix: '+',
    label:  'Events Executed',
    color:  'text-primary',
    bg:     'bg-primary/10',
    border: 'border-primary/20',
  },
]

// Hook: counts from 0 to target when in view
function useCounter(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!started) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return count
}

// Individual counter card
function CounterCard({ icon: Icon, value, suffix, label, color, bg, border, started, index }) {
  const count = useCounter(value, 2000, started)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex flex-col items-center text-center p-8 rounded-card border ${border} bg-[#F4E8DC] overflow-hidden group hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300`}>

      {/* Background glow */}
      <div className={`absolute inset-0 ${bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-card`} />

      {/* Icon */}
      <div className={`relative z-10 w-14 h-14 rounded-2xl ${bg} ${border} border flex items-center justify-center mb-5`}>
        <Icon size={24} className={color} />
      </div>

      {/* Animated number */}
      <div className="relative z-10 flex items-end gap-0.5 mb-2">
        <span className={`font-heading text-5xl font-bold ${color}`}>
          {count}
        </span>
        <span className={`font-heading text-3xl font-bold ${color} mb-1`}>
          {suffix}
        </span>
      </div>

      {/* Label */}
      <p className="relative z-10 text-primary/50 font-body text-sm tracking-wide">
        {label}
      </p>

      {/* Decorative corner */}
      <div className={`absolute -bottom-4 -right-4 w-16 h-16 rounded-full ${bg} blur-xl`} />
    </motion.div>
  )
}

export default function CountersSection() {
  const ref      = useRef(null)
  const inView   = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="section-padding bg-[#F4E8DC] border-y border-[#D7C2AD] relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14">

          <span className="section-tag">Our Impact</span>

          <h2 className="font-heading text-h2 text-primary mb-4">
            Numbers That{' '}
            <span className="text-gradient">Speak</span>
          </h2>

          <p className="text-primary/50 font-body text-base">
            Every number represents a story, a client, a moment we helped create.
          </p>
        </motion.div>

        {/* Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {counters.map((counter, index) => (
            <CounterCard
              key={counter.label}
              {...counter}
              index={index}
              started={inView}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
