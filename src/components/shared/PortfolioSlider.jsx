import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { ExternalLink } from 'lucide-react'
import SafeImage from './SafeImage'
import 'swiper/css'
import 'swiper/css/pagination'

const ACCENT = ['bg-primary/20','bg-secondary/20','bg-white/20','bg-[#EDD9C4]']

export default function PortfolioSlider({ items = [] }) {
  if (!items.length) return null

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
            <article className="group overflow-hidden rounded-card border border-primary/12 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_12px_30px_rgba(72,90,168,0.12)]">
              {/* Thumbnail */}
              <div className={`relative flex h-48 items-center justify-center overflow-hidden ${!item.image ? ACCENT[i % ACCENT.length] : ''}`}>
                {item.image ? (
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                    fallback={
                      <div className={`flex h-full w-full items-center justify-center ${ACCENT[i % ACCENT.length]}`}>
                        <span className="font-heading text-4xl font-bold text-primary/20">
                          {item.title?.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                    }
                  />
                ) : (
                  <span className="font-heading text-primary/20 text-4xl font-bold">
                    {item.title?.slice(0,2).toUpperCase()}
                  </span>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-primary/50 via-primary/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/55 bg-white/90 px-3 py-2 text-xs font-semibold text-primary shadow-sm">
                    View Project <ExternalLink size={14} />
                  </span>
                </div>
              </div>
              {/* Info */}
              <div className="p-4 sm:p-5">
                <span className="text-secondary text-xs font-body font-semibold tracking-widest uppercase">
                  {item.category}
                </span>
                <h3 className="mt-1 font-heading text-base text-primary">{item.title}</h3>
                <p className="mt-1 text-xs font-body text-primary/64">{item.client}</p>
                {item.desc && (
                  <p className="mt-2 line-clamp-2 text-sm font-body leading-relaxed text-primary/70">{item.desc}</p>
                )}
              </div>
            </article>
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
        .ps-pagination .swiper-pagination-bullet:focus-visible {
          outline: 2px solid rgba(72, 90, 168, 0.45);
          outline-offset: 2px;
        }
        .ps-pagination .swiper-pagination-bullet-active {
          background: #4DB4C0; width: 24px;
        }
      `}</style>
    </div>
  )
}
