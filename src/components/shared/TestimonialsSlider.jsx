import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

const AVATAR_COLORS = ['bg-primary/15', 'bg-secondary/20', 'bg-white', 'bg-primary/10']

function Avatar({ name }) {
  const safeName = typeof name === 'string' && name.trim() ? name.trim() : 'Guest'
  const initials = safeName.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
  const color = AVATAR_COLORS[safeName.charCodeAt(0) % AVATAR_COLORS.length]
  return (
    <div className={`w-11 h-11 rounded-full ${color} border border-tertiary flex items-center justify-center font-heading font-bold text-xs text-primary shrink-0`}>
      {initials}
    </div>
  )
}

export default function TestimonialsSlider({ items = [] }) {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  if (!items.length) return null

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true, el: '.ts-pagination' }}
        navigation
        onBeforeInit={s => {
          s.params.navigation.prevEl = prevRef.current
          s.params.navigation.nextEl = nextRef.current
        }}
        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        className="pb-4">
        {items.map((t, i) => (
          <SwiperSlide key={i}>
            <article className="relative flex h-full min-h-[280px] flex-col rounded-card border border-primary/12 bg-white p-5 shadow-[0_10px_26px_rgba(72,90,168,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_14px_34px_rgba(72,90,168,0.14)] sm:p-6">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-t-card opacity-80" />
              <div className="flex items-center justify-between mb-4 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-body font-semibold tracking-wide text-primary">
                  <ShieldCheck size={11} className="text-secondary" /> Verified
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: Math.max(0, Math.min(5, Number(t.rating) || 5)) }).map((_, j) => (
                    <Star key={j} size={12} className="text-secondary fill-secondary" />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <Quote size={16} className="text-secondary/90 mb-2" />
                <p className="mb-5 flex-1 text-sm font-body leading-7 text-primary/80">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-auto h-px bg-tertiary mb-4" />
              <div className="flex items-center gap-3">
                <Avatar name={t.name} />
                <div>
                  <p className="font-heading text-primary text-sm">{t.name}</p>
                  <p className="text-primary/60 font-body text-xs">{t.role}</p>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="ts-pagination flex justify-center gap-2 mt-6" />

      <div className="flex justify-center gap-3 mt-4">
        <button ref={prevRef} type="button" aria-label="Previous testimonial"
          className="w-11 h-11 sm:w-9 sm:h-9 rounded-full border border-tertiary bg-white flex items-center justify-center text-primary/50 hover:text-primary hover:border-primary transition-all">
          <ChevronLeft size={16}/>
        </button>
        <button ref={nextRef} type="button" aria-label="Next testimonial"
          className="w-11 h-11 sm:w-9 sm:h-9 rounded-full border border-tertiary bg-white flex items-center justify-center text-primary/50 hover:text-primary hover:border-primary transition-all">
          <ChevronRight size={16}/>
        </button>
      </div>

      <style>{`
        .ts-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(72, 90, 168, 0.25);
          border-radius: 9999px; display: inline-block;
          cursor: pointer; transition: all .3s;
        }
        .ts-pagination .swiper-pagination-bullet:focus-visible {
          outline: 2px solid rgba(72, 90, 168, 0.45);
          outline-offset: 2px;
        }
        .ts-pagination .swiper-pagination-bullet-active {
          background: #485AA8;
          width: 24px;
        }
      `}</style>
    </div>
  )
}
