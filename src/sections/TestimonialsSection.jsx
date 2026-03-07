import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/testimonials'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={14} className="text-secondary fill-secondary" />
      ))}
    </div>
  )
}

// Avatar placeholder with initials
function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const colors = [
    'bg-primary',
    'bg-secondary',
    'bg-tertiary text-primary',
    'bg-primary-light',
    'bg-secondary-light',
  ]
  const color = colors[name.charCodeAt(0) % colors.length]

  return (
    <div className={`w-12 h-12 rounded-full ${color} flex items-center justify-center font-heading font-bold text-sm text-primary shrink-0`}>
      {initials}
    </div>
  )
}

export default function TestimonialsSection() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section className="section-padding bg-tertiary relative overflow-hidden">

      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      {/* Large quote decoration */}
      <div className="absolute top-12 right-12 opacity-5 pointer-events-none">
        <Quote size={180} className="text-primary" />
      </div>

      <div className="container-custom relative z-10">

        {/* ── HEADING ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-14">

          <span className="section-tag">Testimonials</span>

          <h2 className="font-heading text-h2 text-primary mb-4">
            What Our{' '}
            <span className="text-gradient">Clients Say</span>
          </h2>

          <p className="text-primary/50 font-body text-base">
            Real words from real people we have had the pleasure of working with.
          </p>
        </motion.div>

        {/* ── SLIDER ───────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative">

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl  = nextRef.current
            }}
            breakpoints={{
              640:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-4">

            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="group relative flex flex-col bg-[#F4E8DC] border border-[#D7C2AD] rounded-card p-7 h-full hover:border-primary/30 hover:-translate-y-1 hover:shadow-card-hover transition-all duration-300">

                  {/* Top row — quote icon + stars */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <Quote size={16} className="text-primary" />
                    </div>
                    <StarRating rating={t.rating} />
                  </div>

                  {/* Testimonial text */}
                  <p className="text-primary/60 font-body text-sm leading-relaxed flex-1 mb-6 italic">
                    "{t.text}"
                  </p>

                  {/* Divider */}
                  <div className="h-px bg-[#D7C2AD] mb-5" />

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Avatar name={t.name} />
                    <div>
                      <p className="font-heading text-primary text-sm">{t.name}</p>
                      <p className="text-primary/40 font-body text-xs mt-0.5">{t.role}</p>
                    </div>
                  </div>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-card pointer-events-none" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination dots */}
          <div className="swiper-pagination-custom flex justify-center gap-2 mt-8" />

          {/* Custom nav arrows */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              ref={prevRef}
              className="w-10 h-10 rounded-full border border-[#D7C2AD] flex items-center justify-center text-primary/50 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200">
              <ChevronLeft size={18} />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 rounded-full border border-[#D7C2AD] flex items-center justify-center text-primary/50 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all duration-200">
              <ChevronRight size={18} />
            </button>
          </div>

        </motion.div>
      </div>

      {/* Swiper pagination dot styles */}
      <style>{`
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 8px; height: 8px;
          background: rgba(72,90,168,0.2);
          border-radius: 9999px;
          display: inline-block;
          cursor: pointer;
          transition: all 0.3s;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #485AA8;
          width: 24px;
        }
      `}</style>
    </section>
  )
}
