import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { ExternalLink } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

const ACCENT = ['bg-primary/20','bg-secondary/20','bg-tertiary/20','bg-[#D7C2AD]']

export default function PortfolioSlider({ items = [] }) {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true, el: '.ps-pagination' }}
        breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
        className="pb-10">
        {items.map((item, i) => (
          <SwiperSlide key={item.id || i}>
            <div className="group bg-[#F4E8DC] border border-[#D7C2AD] rounded-card overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
              {/* Placeholder thumbnail */}
              <div className={`h-44 ${ACCENT[i % ACCENT.length]} flex items-center justify-center relative overflow-hidden`}>
                <span className="font-heading text-primary/20 text-4xl font-bold">
                  {item.title?.slice(0,2).toUpperCase()}
                </span>
                <div className="absolute inset-0 bg-tertiary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink size={20} className="text-primary" />
                </div>
              </div>
              {/* Info */}
              <div className="p-4">
                <span className="text-secondary text-xs font-body font-semibold tracking-widest uppercase">
                  {item.category}
                </span>
                <h3 className="font-heading text-primary text-sm mt-1">{item.title}</h3>
                <p className="text-primary/40 text-xs font-body mt-1">{item.client}</p>
                {item.desc && (
                  <p className="text-primary/30 text-xs font-body mt-2 leading-relaxed line-clamp-2">{item.desc}</p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="ps-pagination flex justify-center gap-2 mt-2" />

      <style>{`
        .ps-pagination .swiper-pagination-bullet {
          width: 8px; height: 8px;
          background: rgba(72,90,168,.2);
          border-radius: 9999px; display: inline-block;
          cursor: pointer; transition: all .3s;
        }
        .ps-pagination .swiper-pagination-bullet-active {
          background: #4DB4C0; width: 24px;
        }
      `}</style>
    </div>
  )
}
