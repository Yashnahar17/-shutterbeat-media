import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

const AVATAR_COLORS = ['bg-primary','bg-secondary','bg-primary/70','bg-primary/20']

function Avatar({ name }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase()
  const color    = AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length]
  return (
    <div className={`w-11 h-11 rounded-full ${color} flex items-center justify-center font-heading font-bold text-xs text-primary shrink-0`}>
      {initials}
    </div>
  )
}

export default function TestimonialsSlider({ items = [] }) {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{ clickable: true, el: '.ts-pagination' }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={s => {
          s.params.navigation.prevEl = prevRef.current
          s.params.navigation.nextEl = nextRef.current
        }}
        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        className="pb-4">
        {items.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-[#F4E8DC] border border-[#D7C2AD] rounded-card p-6 flex flex-col h-full hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Quote size={14} className="text-primary" />
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating || 5 }).map((_, j) => (
                    <Star key={j} size={12} className="text-secondary fill-secondary" />
                  ))}
                </div>
              </div>
              {/* Text */}
              <p className="text-primary/60 font-body text-sm leading-relaxed italic flex-1 mb-5">
                "{t.text}"
              </p>
              <div className="h-px bg-[#D7C2AD] mb-4" />
              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar name={t.name} />
                <div>
                  <p className="font-heading text-primary text-sm">{t.name}</p>
                  <p className="text-primary/40 font-body text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      <div className="ts-pagination flex justify-center gap-2 mt-6" />

      {/* Nav buttons */}
      <div className="flex justify-center gap-3 mt-4">
        <button ref={prevRef}
          className="w-9 h-9 rounded-full border border-[#D7C2AD] flex items-center justify-center text-primary/40 hover:text-primary hover:border-primary transition-all">
          <ChevronLeft size={16}/>
        </button>
        <button ref={nextRef}
          className="w-9 h-9 rounded-full border border-[#D7C2AD] flex items-center justify-center text-primary/40 hover:text-primary hover:border-primary transition-all">
          <ChevronRight size={16}/>
        </button>
      </div>

      <style>{`
        .ts-pagination .swiper-pagination-bullet {
          width: 8px; height: 8px;
          background: rgba(72,90,168,.2);
          border-radius: 9999px; display: inline-block;
          cursor: pointer; transition: all .3s;
        }
        .ts-pagination .swiper-pagination-bullet-active {
          background: #485AA8; width: 24px;
        }
      `}</style>
    </div>
  )
}
