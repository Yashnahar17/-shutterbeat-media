import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ProcessTimeline({ steps }) {
  return (
    <div className="relative">
      {/* Vertical spine */}
      <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-[#D7C2AD] -translate-x-1/2" />

      <div className="flex flex-col">
        {steps.map((step, i) => {
          const isEven = i % 2 === 0
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const ref    = useRef(null)
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const inView = useInView(ref, { once: true, margin: '-80px' })

          return (
            <div key={i} ref={ref}
              className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 py-10">

              {/* Content — alternates left / right on desktop */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className={[
                  'pl-16 lg:pl-0',
                  isEven
                    ? 'lg:text-right lg:pr-16'
                    : 'lg:col-start-2 lg:pl-16',
                ].join(' ')}>

                <span className="inline-block text-secondary font-body text-xs tracking-widest font-semibold mb-2">
                  {step.step}
                </span>
                <h3 className="font-heading text-primary text-lg mb-2">{step.title}</h3>
                <p className="text-primary/50 font-body text-sm leading-relaxed">{step.desc}</p>
              </motion.div>

              {/* Centre dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute left-6 lg:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-12 h-12 rounded-full bg-[#F4E8DC] border-2 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(72,90,168,0.4)]">
                  <step.icon size={18} className="text-secondary" />
                </div>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
