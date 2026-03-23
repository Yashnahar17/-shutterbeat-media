import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion as Motion} from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export default function HeroSection() {
  const canvasRef = useRef(null)

  // Animated particle background
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let particles = []

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Create particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x:     Math.random() * canvas.width,
        y:     Math.random() * canvas.height,
        r:     Math.random() * 1.5 + 0.5,
        dx:    (Math.random() - 0.5) * 0.4,
        dy:    (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient mesh
      const grad = ctx.createRadialGradient(
        canvas.width * 0.3, canvas.height * 0.4, 0,
        canvas.width * 0.3, canvas.height * 0.4, canvas.width * 0.6
      )
      grad.addColorStop(0, 'rgba(72,90,168,0.15)')
      grad.addColorStop(0.5, 'rgba(77,180,192,0.05)')
      grad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw particles
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(77,180,192,${p.alpha})`
        ctx.fill()

        p.x += p.dx
        p.y += p.dy

        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })

      // Draw connecting lines
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach(p2 => {
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(72,90,168,${0.15 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  // Text animation variants
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } }
  }
  const item = {
    hidden: { opacity: 0, y: 30 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } }
  }

  const stats = [
    { value: '200+', label: 'Projects Done' },
    { value: '50+',  label: 'Clients Served' },
    { value: '30+',  label: 'Artists Managed' },
    { value: '100+', label: 'Events Executed' },
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

      {/* Animated canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/78 via-white/48 to-white" />

      {/* Glowing orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-secondary/12 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="section-shell max-w-5xl px-6 py-8 sm:p-10 lg:p-12">

          <Motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mx-auto max-w-4xl">

            {/* Tag */}
            <Motion.span variants={item} className="section-tag">
              Creative Media Agency
            </Motion.span>

            {/* Headline */}
            <Motion.h1 variants={item}
              className="font-heading text-display text-primary mb-5 sm:mb-6 max-w-4xl leading-[1.04] tracking-[-0.03em]">
              From{' '}
              <span className="text-gradient">Shutter</span>
              {' '}to the{' '}
              <span className="relative inline-block">
                Beat
                <Motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-secondary rounded-full origin-left" />
              </span>
            </Motion.h1>

            {/* Subtext */}
            <Motion.p variants={item}
              className="text-primary/72 font-body text-base sm:text-lg lg:text-[1.15rem] max-w-3xl mb-9 sm:mb-10 leading-relaxed">
              ShutterBeat Media is a one-stop solution for photography, film making,
              advertising, marketing, and digital development. We transform
              businesses into brands people love.
            </Motion.p>

            {/* CTA Buttons */}
            <Motion.div variants={item} className="flex flex-col items-start gap-4 sm:flex-row sm:items-center mb-12 sm:mb-14">
              <Link to="/contact" className="btn-primary text-base px-8 py-4">
                Start a Project
                <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio"
                className="inline-flex min-h-[46px] items-center gap-3 text-primary/80 hover:text-primary transition-colors group">
                <span className="w-12 h-12 rounded-full border border-primary/16 bg-white/90 flex items-center justify-center group-hover:border-secondary group-hover:text-secondary transition-all duration-300 shadow-[0_8px_18px_rgba(72,90,168,0.1)]">
                  <Play size={16} className="ml-0.5" />
                </span>
                <span className="font-body text-sm sm:text-base font-semibold">View Portfolio</span>
              </Link>
            </Motion.div>

            {/* Stats Row */}
            <Motion.div variants={item}
              className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-6 pt-7 sm:pt-8 border-t border-primary/12">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-primary/8 bg-white/65 px-4 py-4 sm:px-5">
                  <p className="font-heading text-[1.9rem] sm:text-3xl text-primary mb-1">{stat.value}</p>
                  <p className="text-primary/62 text-sm font-body leading-snug">{stat.label}</p>
                </div>
              ))}
            </Motion.div>

          </Motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-primary/55 text-xs font-body tracking-widest uppercase">Scroll</span>
        <Motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-primary/35 to-transparent" />
      </Motion.div>

    </section>
  )
}
