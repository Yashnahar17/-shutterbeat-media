import { cloneElement, isValidElement, memo, useRef, useState } from 'react'
import {
  CheckCircle2,
  ClipboardList,
  Compass,
  Lightbulb,
  Megaphone,
  PenTool,
  Rocket,
  Search,
  Settings,
  Target,
  TrendingUp,
  Upload,
  Users,
  Wand2,
} from 'lucide-react'
import {
  motion as Motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'

const EASE_OUT = [0.22, 1, 0.36, 1]
const DEFAULT_STEP_ICON = ClipboardList

const ICON_RULES = [
  { re: /(discover|research|audit|brief|scop|analysis)/i, icon: Search },
  { re: /(strategy|plan|planning|concept|roadmap)/i, icon: Compass },
  { re: /(idea|innovation|brainstorm)/i, icon: Lightbulb },
  { re: /(design|wireframe|creative|brand|identity)/i, icon: PenTool },
  { re: /(develop|build|implementation|production|recording|shoot)/i, icon: Settings },
  { re: /(launch|go live|publishing|release|rollout)/i, icon: Rocket },
  { re: /(market|campaign|promo|promotion|advertis)/i, icon: Megaphone },
  { re: /(team|client|vendor|stakeholder|booking)/i, icon: Users },
  { re: /(track|measure|optimi|growth|scale|performance)/i, icon: TrendingUp },
  { re: /(deliver|delivery|handoff|guideline|documentation)/i, icon: Upload },
  { re: /(support|success|complete|done|wrap)/i, icon: CheckCircle2 },
  { re: /(goal|target|objective)/i, icon: Target },
  { re: /(refine|polish|enhance|retouch)/i, icon: Wand2 },
]

function resolveStepIcon(step) {
  if (step?.icon) return step.icon
  const text = `${step?.title ?? ''} ${step?.desc ?? ''}`.trim()
  const match = ICON_RULES.find((rule) => rule.re.test(text))
  return match?.icon ?? DEFAULT_STEP_ICON
}

function renderIcon(icon) {
  if (isValidElement(icon)) {
    return cloneElement(icon, {
      size: 18,
      className: 'text-white',
      'aria-hidden': true,
    })
  }

  if (typeof icon === 'function') {
    const IconComponent = icon
    return <IconComponent size={18} className="text-white" aria-hidden />
  }

  return <span className="h-2.5 w-2.5 rounded-full bg-white/90" aria-hidden />
}

const TimelineConnector = memo(function TimelineConnector({ progress }) {
  return (
    <div
      className="pointer-events-none absolute left-7 top-0 bottom-0 w-px -translate-x-1/2 lg:left-1/2"
      aria-hidden>
      <div className="absolute inset-0 rounded-full bg-gradient-to-b from-tertiary/50 via-tertiary to-tertiary/50" />
      <Motion.div
        style={{ scaleY: progress }}
        className="absolute inset-0 origin-top rounded-full bg-gradient-to-b from-secondary via-primary to-primary shadow-[0_0_22px_rgba(72,90,168,0.32)]"
      />
    </div>
  )
})

const TimelineIcon = memo(function TimelineIcon({ icon, status, shouldReduceMotion }) {
  const isCompleted = status === 'completed'
  const isActive = status === 'active'
  const pulseAnimate = shouldReduceMotion
    ? { opacity: isActive ? 0.4 : 0.2 }
    : isActive
      ? { scale: [1, 1.4, 1], opacity: [0.45, 0.08, 0.45] }
      : { opacity: isCompleted ? 0.2 : 0.3 }

  const iconShellClass = isCompleted
    ? 'from-primary to-secondary shadow-[0_16px_36px_rgba(72,90,168,0.36)]'
    : isActive
      ? 'from-secondary to-primary shadow-[0_16px_36px_rgba(72,90,168,0.28)]'
      : 'from-tertiary via-white to-tertiary/70 shadow-[0_10px_24px_rgba(72,90,168,0.16)]'

  return (
    <Motion.div
      className="absolute left-7 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 lg:left-1/2"
      initial={shouldReduceMotion ? { opacity: 1 } : { scale: 0.8, opacity: 0 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.45, ease: EASE_OUT }}>
      <Motion.span
        aria-hidden
        className="absolute inset-0 rounded-full bg-primary/25 blur-md"
        animate={pulseAnimate}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
        }
      />
      <Motion.div
        whileHover={shouldReduceMotion ? undefined : { y: -2, scale: 1.04 }}
        className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-gradient-to-br ring-1 ring-primary/10 ${iconShellClass}`}>
        {renderIcon(icon)}
      </Motion.div>
    </Motion.div>
  )
})

const TimelineContent = memo(function TimelineContent({ step, isEven, status, shouldReduceMotion }) {
  const cardAlignment = isEven
    ? 'lg:mr-16 lg:text-right lg:items-end'
    : 'lg:col-start-2 lg:ml-16 lg:text-left lg:items-start'
  const isInteractive = Boolean(step?.onClick || step?.href)
  const stateStyles = status === 'completed'
    ? 'border-primary/22 shadow-[0_22px_48px_rgba(72,90,168,0.18)]'
    : status === 'active'
      ? 'border-secondary/35 shadow-[0_20px_44px_rgba(77,180,192,0.20)]'
      : 'border-primary/12 shadow-[0_14px_34px_rgba(72,90,168,0.10)]'

  return (
    <Motion.article
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18, x: isEven ? -20 : 20 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.55, ease: EASE_OUT }}
      whileHover={shouldReduceMotion ? undefined : { y: -2 }}
      tabIndex={isInteractive ? 0 : undefined}
      className={`group ml-16 flex min-h-[164px] flex-col rounded-3xl border bg-white/92 p-5 backdrop-blur-sm transition-[border-color,box-shadow,transform] duration-300 hover:shadow-[0_22px_48px_rgba(72,90,168,0.16)] sm:min-h-[180px] sm:p-6 lg:ml-0 lg:p-7 ${cardAlignment} ${stateStyles} ${isInteractive ? 'cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2' : ''}`}>
      <span className="mb-2 inline-flex rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-secondary">
        {step.step}
      </span>
      <h3 className="font-heading text-lg leading-tight text-primary text-balance sm:text-[1.65rem]">{step.title}</h3>
      <p className="mt-3 max-w-prose font-body text-sm leading-relaxed text-primary/74 sm:text-[15px]">
        {step.desc}
      </p>
    </Motion.article>
  )
})

const TimelineItem = memo(function TimelineItem({
  step,
  index,
  totalSteps,
  progress,
  shouldReduceMotion,
}) {
  const isEven = index % 2 === 0
  const [status, setStatus] = useState('upcoming')
  const startThreshold = index / totalSteps
  const completionThreshold = (index + 1) / totalSteps
  const contentProgress = useTransform(
    progress,
    [startThreshold, completionThreshold],
    [0, 1],
    { clamp: true }
  )
  const itemOpacity = useTransform(contentProgress, [0, 1], [0.72, 1])

  useMotionValueEvent(progress, 'change', (value) => {
    const nextStatus = value >= completionThreshold
      ? 'completed'
      : value >= Math.max(0, startThreshold - 0.04)
        ? 'active'
        : 'upcoming'
    setStatus((current) => (current === nextStatus ? current : nextStatus))
  })

  return (
    <Motion.li
      className="relative grid grid-cols-1 py-6 lg:grid-cols-2 lg:gap-10 lg:py-8"
      role="listitem"
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0.7 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      style={{ opacity: shouldReduceMotion ? 1 : itemOpacity }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4 }}>
      <TimelineContent
        step={step}
        isEven={isEven}
        status={status}
        shouldReduceMotion={shouldReduceMotion}
      />
      <TimelineIcon icon={step.icon} status={status} shouldReduceMotion={shouldReduceMotion} />
    </Motion.li>
  )
})

export default function ProcessTimeline({ steps = [] }) {
  const containerRef = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.82', 'end 0.2'],
  })
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.22,
  })
  const connectorProgress = shouldReduceMotion ? scrollYProgress : progress
  const shapeOneY = useTransform(scrollYProgress, [0, 1], [0, -36])
  const shapeTwoY = useTransform(scrollYProgress, [0, 1], [0, 28])

  if (!steps.length) return null

  return (
    <section
      ref={containerRef}
      aria-label="Project process timeline"
      className="relative isolate overflow-hidden rounded-[2rem] border border-primary/10 bg-gradient-to-b from-white via-white to-tertiary/20 px-4 py-4 shadow-[0_22px_48px_rgba(72,90,168,0.08)] sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-secondary/10 to-transparent" aria-hidden />
      <Motion.div
        aria-hidden
        style={{ y: shouldReduceMotion ? 0 : shapeOneY }}
        className="pointer-events-none absolute -left-10 top-8 h-44 w-44 rounded-full bg-primary/10 blur-3xl"
      />
      <Motion.div
        aria-hidden
        style={{ y: shouldReduceMotion ? 0 : shapeTwoY }}
        className="pointer-events-none absolute -right-14 bottom-10 h-52 w-52 rounded-full bg-secondary/12 blur-3xl"
      />
      <TimelineConnector progress={connectorProgress} />

      <Motion.ol
        role="list"
        className="relative"
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: shouldReduceMotion ? 0 : 0.08,
            },
          },
        }}>
        {steps.map((step, index) => (
          <TimelineItem
            key={`${step.title}-${index}`}
            step={{ ...step, icon: resolveStepIcon(step) }}
            index={index}
            totalSteps={steps.length}
            progress={scrollYProgress}
            shouldReduceMotion={shouldReduceMotion}
          />
        ))}
      </Motion.ol>
    </section>
  )
}
