import { useRef } from 'react'
import { motion as Motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react'
import { testimonials } from '../data/testimonials'
import SectionHeading from '../components/ui/SectionHeading'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function StarRating({ rating }) {
  const safeRating = Math.max(0, Math.min(5, Number(rating) || 5))
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: safeRating }).map((_, i) => (
        <Star key={i} size={14} className="text-secondary fill-secondary" />
      ))}
    </div>
  )
}

function Avatar({ name }) {
  const safeName = typeof name === 'string' && name.trim() ? name.trim() : 'Guest'
  const initials = safeName
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const colors = ['bg-primary/15', 'bg-secondary/20', 'bg-white', 'bg-primary/10']
  const color = colors[safeName.charCodeAt(0) % colors.length]

  return (
    <div className={`w-12 h-12 rounded-full ${color} border border-tertiary flex items-center justify-center font-heading font-bold text-sm text-primary shrink-0`}>
      {initials}
    </div>
  )
}

export default function TestimonialsSection() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute -top-24 -left-20 w-72 h-72 bg-primary/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-secondary/18 rounded-full blur-3xl pointer-events-none" />
      <div className="container-custom relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
          <SectionHeading
            tag="Testimonials"
            title="Loved By"
            accent="Our Clients"
            description="Real words from partners who trusted ShutterBeat Media with their brand, visuals, and growth."
            className="max-w-xl"
          />
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, el: '.home-testimonials-pagination' }}
            navigation
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-2">
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <article className="group relative flex h-full min-h-[290px] flex-col overflow-hidden rounded-[1.4rem] border border-primary/12 bg-white/92 backdrop-blur-sm p-5 sm:p-6 md:p-7 shadow-[0_14px_34px_rgba(72,90,168,0.1)] hover:shadow-[0_20px_44px_rgba(72,90,168,0.14)] hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-70" />
                  <div className="flex items-center justify-between mb-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-body font-semibold tracking-wide text-primary">
                      <ShieldCheck size={12} className="text-secondary" /> Verified Client
                    </span>
                    <StarRating rating={t.rating} />
                  </div>
                  <div className="relative mb-6 flex-1">
                    <Quote size={18} className="text-secondary/90 mb-2" />
                    <p className="text-[color:#2F3F82] font-body text-sm sm:text-[15px] leading-relaxed italic">"{t.text}"</p>
                  </div>
                  <div className="h-px bg-primary/12 mb-5" />
                  <div className="flex items-center gap-3">
                    <Avatar name={t.name} />
                    <div>
                      <p className="font-heading text-primary text-sm sm:text-[15px]">{t.name}</p>
                      <p className="font-body text-primary/65 text-xs sm:text-sm mt-0.5 leading-snug">{t.role}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="home-testimonials-pagination flex justify-center gap-2 mt-8" />
          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              ref={prevRef}
              type="button"
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full border border-tertiary bg-white text-primary/70 hover:text-primary hover:border-primary hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2">
              <ChevronLeft size={18} className="mx-auto" />
            </button>
            <button
              ref={nextRef}
              type="button"
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full border border-tertiary bg-white text-primary/70 hover:text-primary hover:border-primary hover:-translate-y-0.5 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2">
              <ChevronRight size={18} className="mx-auto" />
            </button>
          </div>
        </Motion.div>
      </div>
      <style>{`
        .home-testimonials-pagination .swiper-pagination-bullet {
          width: 9px;
          height: 9px;
          border-radius: 9999px;
          background: rgba(72, 90, 168, 0.25);
          opacity: 1;
          transition: all 0.3s;
        }
        .home-testimonials-pagination .swiper-pagination-bullet-active {
          width: 28px;
          background: #485AA8;
        }
      `}</style>
    </section>
  )
}
