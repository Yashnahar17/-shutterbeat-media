#!/bin/bash
# ============================================================
#  ShutterBeat Media — Master Setup Script
#  Covers everything AFTER the About page:
#    • Data files (portfolio, testimonials, clients)
#    • Shared components (ProcessTimeline, TestimonialsSlider,
#      PortfolioSlider, ClientsGrid)
#    • Service pages (Branding, Advertising, Photography,
#      Events, FilmMaking, WebDevelopment, Music, Consultation)
#    • Contact page
#    • Opportunities page
#
#  Run from the PROJECT ROOT:
#    bash shutterbeat-setup.sh
# ============================================================

set -e   # stop on first error

echo ""
echo "╔══════════════════════════════════════════════╗"
echo "║   ShutterBeat Media — Master Setup Script   ║"
echo "╚══════════════════════════════════════════════╝"
echo ""

# ──────────────────────────────────────────────
# 0. INSTALL DEPENDENCIES
# ──────────────────────────────────────────────
echo "📦  Installing dependencies..."
npm install @mui/material @mui/lab @mui/icons-material @emotion/react @emotion/styled --legacy-peer-deps

echo "✅  Dependencies installed"
echo ""

# ──────────────────────────────────────────────
# 1. ENSURE DIRECTORY STRUCTURE EXISTS
# ──────────────────────────────────────────────
echo "📁  Creating directory structure..."
mkdir -p src/data
mkdir -p src/components/shared
mkdir -p src/pages/services

echo "✅  Directories ready"
echo ""

# ══════════════════════════════════════════════
# 2. DATA FILES
# ══════════════════════════════════════════════
echo "🗂   Writing data files..."

# ── 2a. portfolio.js ──────────────────────────
cat > src/data/portfolio.js << 'PORTFOLIO_EOF'
export const portfolioCategories = [
  'All','Photography','Advertising','Events',
  'Film Making','Branding','Web Development','Music','Consultation'
]

export const portfolio = [
  // ── Photography ──────────────────────────────
  { id:1,  title:'Sharma Wedding',             category:'Photography',     image:null, client:'Sharma Family',         desc:'Full-day candid wedding coverage across 3 venues.' },
  { id:2,  title:'FreshBite Menu Shoot',       category:'Photography',     image:null, client:'FreshBite Restaurant',  desc:'Product and food photography for new menu launch.' },
  { id:3,  title:'ZenFit Brand Shoot',         category:'Photography',     image:null, client:'ZenFit Apparel',        desc:'Fashion and lifestyle photography for e-commerce.' },
  { id:4,  title:'Skyline Realty Shots',       category:'Photography',     image:null, client:'Skyline Realty',        desc:'Architectural and interior photography for listings.' },
  // ── Advertising ──────────────────────────────
  { id:5,  title:'RetailCo Festive Campaign',  category:'Advertising',     image:null, client:'RetailCo',              desc:'Diwali campaign across digital, print and OOH — 3x ROAS.' },
  { id:6,  title:'QuickDeliver App Launch',    category:'Advertising',     image:null, client:'QuickDeliver',          desc:'Go-to-market ad campaign reaching 2M impressions in week 1.' },
  { id:7,  title:'EduSpark Admissions Drive',  category:'Advertising',     image:null, client:'EduSpark Academy',      desc:'Performance ads driving 400+ qualified leads in 30 days.' },
  { id:8,  title:'GreenLife OOH Campaign',     category:'Advertising',     image:null, client:'GreenLife Organics',    desc:'Hoarding and transit campaign across 5 Pune locations.' },
  // ── Events ───────────────────────────────────
  { id:9,  title:'TechSummit 2025',            category:'Events',          image:null, client:'TechVentures Pune',     desc:'500-person corporate summit with 12 speakers and live stream.' },
  { id:10, title:'Patil Wedding Reception',    category:'Events',          image:null, client:'Patil Family',          desc:'Luxury wedding reception for 800 guests at Marriott Pune.' },
  { id:11, title:'Pune Music Carnival',        category:'Events',          image:null, client:'PuneFest Org',          desc:'2-day music festival with 8 artists and 2,000 attendees.' },
  { id:12, title:'AutoExpo Brand Activation',  category:'Events',          image:null, client:'DriveX Motors',         desc:'Brand activation booth at Auto Expo with live demos.' },
  // ── Film Making ───────────────────────────────
  { id:13, title:'DriveX Brand Film',          category:'Film Making',     image:null, client:'DriveX Motors',         desc:'60-second cinematic brand film for national TV and YouTube.' },
  { id:14, title:'Voices of Pune — Short Film',category:'Film Making',     image:null, client:'ShutterBeat Original',  desc:'Award-shortlisted short film on Pune street artists.' },
  { id:15, title:'Riya × Aryan Music Video',   category:'Film Making',     image:null, client:'Riya Kapoor (Artist)',  desc:'Cinematic music video with 500K+ YouTube views.' },
  { id:16, title:'EduSpark Corporate Film',    category:'Film Making',     image:null, client:'EduSpark Academy',      desc:'3-minute corporate documentary film for investor pitch.' },
  // ── Branding ─────────────────────────────────
  { id:17, title:'ZenFit Brand Identity',      category:'Branding',        image:null, client:'ZenFit Apparel',        desc:'Full brand identity: logo, palette, typography and guidelines.' },
  { id:18, title:'FreshBite Rebrand',          category:'Branding',        image:null, client:'FreshBite Restaurant',  desc:'Complete restaurant rebrand — menus, signage and digital assets.' },
  { id:19, title:'GreenLife Packaging',        category:'Branding',        image:null, client:'GreenLife Organics',    desc:'Eco-friendly product packaging design across 12 SKUs.' },
  { id:20, title:'QuickDeliver Visual System', category:'Branding',        image:null, client:'QuickDeliver',          desc:'App icon, onboarding illustrations and brand collateral kit.' },
  // ── Web Development ───────────────────────────
  { id:21, title:'DriveX Showroom Website',    category:'Web Development', image:null, client:'DriveX Motors',         desc:'Custom React website with 3D model viewer and booking system.' },
  { id:22, title:'FreshBite Online Ordering',  category:'Web Development', image:null, client:'FreshBite Restaurant',  desc:'WooCommerce store with table reservation and loyalty module.' },
  { id:23, title:'EduSpark LMS Portal',        category:'Web Development', image:null, client:'EduSpark Academy',      desc:'Custom LMS with course builder, video hosting and payments.' },
  { id:24, title:'GreenLife E-Commerce',       category:'Web Development', image:null, client:'GreenLife Organics',    desc:'Shopify store with subscription model and eco-score widget.' },
  // ── Music ─────────────────────────────────────
  { id:25, title:'Neha Sharma — EP Production',category:'Music',           image:null, client:'Neha Sharma (Artist)',  desc:'4-track EP recorded, mixed and mastered at ShutterBeat Studio.' },
  { id:26, title:'RetailCo Diwali Jingle',     category:'Music',           image:null, client:'RetailCo',              desc:'Original 30-second jingle used across TV and digital ads.' },
  { id:27, title:'PuneFest Opening Score',     category:'Music',           image:null, client:'PuneFest Org',          desc:'Original background score for festival opening ceremony.' },
  // ── Consultation ─────────────────────────────
  { id:28, title:'ZenFit Go-To-Market',        category:'Consultation',    image:null, client:'ZenFit Apparel',        desc:'GTM strategy enabling ₹1Cr revenue in the first 3 months.' },
  { id:29, title:'EduSpark Digital Transformation',category:'Consultation',image:null, client:'EduSpark Academy',      desc:'Moved 100% of operations online — 40% cost reduction achieved.' },
  { id:30, title:'GreenLife Brand Audit',      category:'Consultation',    image:null, client:'GreenLife Organics',    desc:'Brand audit leading to full rebrand and 2x social following.' },
]
PORTFOLIO_EOF

# ── 2b. testimonials.js ───────────────────────
cat > src/data/testimonials.js << 'TESTIMONIALS_EOF'
// Per-service testimonials ── 4 unique reviews each
export const testimonialsByService = {
  photography: [
    { id:1, name:'Priya Sharma',     role:'Wedding Client',                text:'The photography team captured every emotion of our special day. The candid shots are absolutely priceless.', rating:5 },
    { id:2, name:'Neha Gaikwad',     role:'Restaurant Owner, FreshBite',   text:'The food photography for our menu was mouth-watering. Online orders increased 40% after the shoot.', rating:5 },
    { id:3, name:'Karan Mehta',      role:'Brand Manager, ZenFit',         text:'Professional, creative and incredibly efficient. Our product photos look like they belong in Vogue.', rating:5 },
    { id:4, name:'Sunita Rao',       role:'Property Developer, Skyline',   text:'The architectural shots sold two properties before we even listed them. Truly outstanding work.', rating:5 },
  ],
  advertising: [
    { id:1, name:'Amit Joshi',       role:'Marketing Head, RetailCo',      text:'Our Diwali campaign ROI tripled. ShutterBeat understood our audience better than our internal team.', rating:5 },
    { id:2, name:'Rohan Patel',      role:'Founder, QuickDeliver',         text:'2 million impressions in week one. The campaign was flawlessly planned and executed across every channel.', rating:5 },
    { id:3, name:'Dr. Meera Singh',  role:'Director, EduSpark',            text:'400 qualified leads in 30 days. The targeting and creative were spot-on for our admissions drive.', rating:5 },
    { id:4, name:'Ananya Desai',     role:'CMO, GreenLife Organics',       text:'The OOH campaign gave us incredible visibility. People still recognise our hoardings months later.', rating:5 },
  ],
  events: [
    { id:1, name:'Sneha Patil',      role:'Event Organiser',               text:'They managed our 500-person summit flawlessly. Every detail was perfectly executed on the day.', rating:5 },
    { id:2, name:'Rajesh Sharma',    role:'Wedding Client',                text:'Our reception for 800 guests went without a single hiccup. The production value was extraordinary.', rating:5 },
    { id:3, name:'DJ Karan',         role:'Performing Artist',             text:'ShutterBeat got me 3 festival bookings in one quarter. Their artist management is world-class.', rating:5 },
    { id:4, name:'Pooja Iyer',       role:'Brand Manager, DriveX',         text:'The Auto Expo activation drew massive crowds. Their event team is creative and super organised.', rating:5 },
  ],
  'film-making': [
    { id:1, name:'Vikram Nair',      role:'CMO, DriveX Motors',            text:'Our brand film exceeded all expectations. The cinematic quality rivalled national TV productions.', rating:5 },
    { id:2, name:'Riya Kapoor',      role:'Independent Artist',            text:'My music video got 500K views in the first month. The direction and editing were phenomenal.', rating:5 },
    { id:3, name:'Dr. Meera Singh',  role:'Director, EduSpark',            text:'The corporate documentary is now our most powerful investor tool. Absolutely brilliant.', rating:5 },
    { id:4, name:'Arjun Kulkarni',   role:'Film Festival Organiser',       text:'Voices of Pune was a standout submission. ShutterBeat has real storytelling talent.', rating:5 },
  ],
  branding: [
    { id:1, name:'Karan Mehta',      role:'Brand Manager, ZenFit',         text:'Our new identity completely transformed how customers perceive us. Sales jumped 60% post-rebrand.', rating:5 },
    { id:2, name:'Neha Gaikwad',     role:'Owner, FreshBite',              text:'The rebrand brought our restaurant to life. The menus, signage and digital assets are cohesive and beautiful.', rating:5 },
    { id:3, name:'Ananya Desai',     role:'CMO, GreenLife Organics',       text:'The packaging design is stunning. Retail buyers complimented it before even hearing our pitch.', rating:5 },
    { id:4, name:'Rohan Patel',      role:'Founder, QuickDeliver',         text:'ShutterBeat nailed our brand personality. The visual system scales perfectly across app and marketing.', rating:5 },
  ],
  'web-development': [
    { id:1, name:'Vikram Nair',      role:'CMO, DriveX Motors',            text:'The website with 3D model viewer is jaw-dropping. Leads from the site doubled in the first month.', rating:5 },
    { id:2, name:'Neha Gaikwad',     role:'Owner, FreshBite',              text:'Online ordering went live in 3 weeks. The system is smooth and our staff love how easy it is to manage.', rating:5 },
    { id:3, name:'Dr. Meera Singh',  role:'Director, EduSpark',            text:'The LMS portal handles 2,000+ students seamlessly. Best tech investment we have ever made.', rating:5 },
    { id:4, name:'Ananya Desai',     role:'CMO, GreenLife Organics',       text:'Our Shopify store with subscription model was built perfectly. The eco-score widget is a huge differentiator.', rating:5 },
  ],
  music: [
    { id:1, name:'Neha Sharma',      role:'Independent Artist',            text:'Recording my EP at ShutterBeat Studio was a dream. The sound engineers really understood my vision.', rating:5 },
    { id:2, name:'Amit Joshi',       role:'Marketing Head, RetailCo',      text:'The Diwali jingle was catchy, professional and delivered in record time. Our customers love it.', rating:5 },
    { id:3, name:'DJ Karan',         role:'DJ & Producer',                 text:'The production quality of my tracks has elevated my bookings to a completely different level.', rating:5 },
    { id:4, name:'Pooja Iyer',       role:'PuneFest Organiser',            text:'The festival opening score gave us goosebumps. Composed and delivered within 10 days — incredible.', rating:5 },
  ],
  consultation: [
    { id:1, name:'Karan Mehta',      role:'Brand Manager, ZenFit',         text:'Their GTM strategy was precise and actionable. We hit ₹1Cr revenue in the first 3 months of launch.', rating:5 },
    { id:2, name:'Dr. Meera Singh',  role:'Director, EduSpark',            text:'The digital transformation roadmap was transformational. 40% cost reduction and zero disruption to students.', rating:5 },
    { id:3, name:'Ananya Desai',     role:'CMO, GreenLife Organics',       text:'The brand audit was thorough and honest. The recommendations led directly to our most successful year.', rating:5 },
    { id:4, name:'Rohan Patel',      role:'Founder, QuickDeliver',         text:'ShutterBeat helped us define our positioning when we were just an idea. Invaluable strategic partner.', rating:5 },
  ],
}

// Home-page fallback (mix of services)
export const testimonials = [
  ...testimonialsByService.photography.slice(0,2),
  ...testimonialsByService.advertising.slice(0,2),
  ...testimonialsByService.events.slice(0,1),
  ...testimonialsByService.branding.slice(0,1),
]
TESTIMONIALS_EOF

# ── 2c. clients.js ────────────────────────────
cat > src/data/clients.js << 'CLIENTS_EOF'
export const clientsByService = {
  photography: [
    { id:1, name:'Sharma Family',        website:'#' },
    { id:2, name:'FreshBite Restaurant', website:'#' },
    { id:3, name:'ZenFit Apparel',       website:'#' },
    { id:4, name:'Skyline Realty',       website:'#' },
    { id:5, name:'DriveX Motors',        website:'#' },
    { id:6, name:'PuneFest Org',         website:'#' },
  ],
  advertising: [
    { id:1, name:'RetailCo',             website:'#' },
    { id:2, name:'QuickDeliver',         website:'#' },
    { id:3, name:'EduSpark Academy',     website:'#' },
    { id:4, name:'GreenLife Organics',   website:'#' },
    { id:5, name:'DriveX Motors',        website:'#' },
    { id:6, name:'ZenFit Apparel',       website:'#' },
  ],
  events: [
    { id:1, name:'TechVentures Pune',    website:'#' },
    { id:2, name:'Patil Family',         website:'#' },
    { id:3, name:'PuneFest Org',         website:'#' },
    { id:4, name:'DriveX Motors',        website:'#' },
    { id:5, name:'RetailCo',             website:'#' },
    { id:6, name:'GreenLife Organics',   website:'#' },
  ],
  'film-making': [
    { id:1, name:'DriveX Motors',        website:'#' },
    { id:2, name:'EduSpark Academy',     website:'#' },
    { id:3, name:'Riya Kapoor',          website:'#' },
    { id:4, name:'PuneFest Org',         website:'#' },
    { id:5, name:'RetailCo',             website:'#' },
    { id:6, name:'ZenFit Apparel',       website:'#' },
  ],
  branding: [
    { id:1, name:'ZenFit Apparel',       website:'#' },
    { id:2, name:'FreshBite Restaurant', website:'#' },
    { id:3, name:'GreenLife Organics',   website:'#' },
    { id:4, name:'QuickDeliver',         website:'#' },
    { id:5, name:'EduSpark Academy',     website:'#' },
    { id:6, name:'RetailCo',             website:'#' },
  ],
  'web-development': [
    { id:1, name:'DriveX Motors',        website:'#' },
    { id:2, name:'FreshBite Restaurant', website:'#' },
    { id:3, name:'EduSpark Academy',     website:'#' },
    { id:4, name:'GreenLife Organics',   website:'#' },
    { id:5, name:'RetailCo',             website:'#' },
    { id:6, name:'QuickDeliver',         website:'#' },
  ],
  music: [
    { id:1, name:'Neha Sharma',          website:'#' },
    { id:2, name:'DJ Karan',             website:'#' },
    { id:3, name:'RetailCo',             website:'#' },
    { id:4, name:'PuneFest Org',         website:'#' },
    { id:5, name:'ZenFit Apparel',       website:'#' },
    { id:6, name:'GreenLife Organics',   website:'#' },
  ],
  consultation: [
    { id:1, name:'ZenFit Apparel',       website:'#' },
    { id:2, name:'EduSpark Academy',     website:'#' },
    { id:3, name:'GreenLife Organics',   website:'#' },
    { id:4, name:'QuickDeliver',         website:'#' },
    { id:5, name:'DriveX Motors',        website:'#' },
    { id:6, name:'RetailCo',             website:'#' },
  ],
}

// Footer / home fallback
export const clients = clientsByService.branding
CLIENTS_EOF

echo "  ✅  portfolio.js, testimonials.js, clients.js"

# ══════════════════════════════════════════════
# 3. SHARED COMPONENTS
# ══════════════════════════════════════════════
echo "🧩  Writing shared components..."

# ── 3a. ProcessTimeline.jsx ───────────────────
cat > src/components/shared/ProcessTimeline.jsx << 'TIMELINE_EOF'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ProcessTimeline({ steps }) {
  return (
    <div className="relative">
      {/* Vertical spine */}
      <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-dark-600 -translate-x-1/2" />

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
                <h3 className="font-heading text-white text-lg mb-2">{step.title}</h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">{step.desc}</p>
              </motion.div>

              {/* Centre dot */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute left-6 lg:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-12 h-12 rounded-full bg-dark-800 border-2 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(72,90,168,0.4)]">
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
TIMELINE_EOF

# ── 3b. TestimonialsSlider.jsx ────────────────
cat > src/components/shared/TestimonialsSlider.jsx << 'TSLIDER_EOF'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

const AVATAR_COLORS = ['bg-primary','bg-secondary','bg-primary/70','bg-dark-500']

function Avatar({ name }) {
  const initials = name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase()
  const color    = AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length]
  return (
    <div className={`w-11 h-11 rounded-full ${color} flex items-center justify-center font-heading font-bold text-xs text-white shrink-0`}>
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
            <div className="bg-dark-800 border border-dark-600 rounded-card p-6 flex flex-col h-full hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Quote size={14} className="text-primary" />
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating || 5 }).map((_, j) => (
                    <Star key={j} size={12} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              {/* Text */}
              <p className="text-white/60 font-body text-sm leading-relaxed italic flex-1 mb-5">
                "{t.text}"
              </p>
              <div className="h-px bg-dark-600 mb-4" />
              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar name={t.name} />
                <div>
                  <p className="font-heading text-white text-sm">{t.name}</p>
                  <p className="text-white/40 font-body text-xs">{t.role}</p>
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
          className="w-9 h-9 rounded-full border border-dark-600 flex items-center justify-center text-white/40 hover:text-white hover:border-primary transition-all">
          <ChevronLeft size={16}/>
        </button>
        <button ref={nextRef}
          className="w-9 h-9 rounded-full border border-dark-600 flex items-center justify-center text-white/40 hover:text-white hover:border-primary transition-all">
          <ChevronRight size={16}/>
        </button>
      </div>

      <style>{`
        .ts-pagination .swiper-pagination-bullet {
          width: 8px; height: 8px;
          background: rgba(255,255,255,.2);
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
TSLIDER_EOF

# ── 3c. PortfolioSlider.jsx ───────────────────
cat > src/components/shared/PortfolioSlider.jsx << 'PSLIDER_EOF'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { ExternalLink } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'

const ACCENT = ['bg-primary/20','bg-secondary/20','bg-tertiary/20','bg-dark-600']

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
            <div className="group bg-dark-800 border border-dark-600 rounded-card overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
              {/* Placeholder thumbnail */}
              <div className={`h-44 ${ACCENT[i % ACCENT.length]} flex items-center justify-center relative overflow-hidden`}>
                <span className="font-heading text-white/20 text-4xl font-bold">
                  {item.title?.slice(0,2).toUpperCase()}
                </span>
                <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ExternalLink size={20} className="text-white" />
                </div>
              </div>
              {/* Info */}
              <div className="p-4">
                <span className="text-secondary text-xs font-body font-semibold tracking-widest uppercase">
                  {item.category}
                </span>
                <h3 className="font-heading text-white text-sm mt-1">{item.title}</h3>
                <p className="text-white/40 text-xs font-body mt-1">{item.client}</p>
                {item.desc && (
                  <p className="text-white/30 text-xs font-body mt-2 leading-relaxed line-clamp-2">{item.desc}</p>
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
          background: rgba(255,255,255,.2);
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
PSLIDER_EOF

# ── 3d. ClientsGrid.jsx ───────────────────────
cat > src/components/shared/ClientsGrid.jsx << 'CLIENTS_COMP_EOF'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { clients as defaultClients } from '../../data/clients'

export default function ClientsGrid({ items }) {
  const list = items || defaultClients
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {list.map((c, i) => (
        <motion.a
          key={c.id}
          href={c.website}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
          className="group flex flex-col items-center gap-2 p-4 bg-dark-800 border border-dark-600 rounded-card hover:border-secondary/30 hover:-translate-y-1 transition-all duration-300 text-center">
          <div className="w-10 h-10 rounded-lg bg-dark-700 border border-dark-600 flex items-center justify-center group-hover:border-secondary/30 transition-colors">
            <span className="font-heading text-white/40 text-xs font-bold">
              {c.name.slice(0,2).toUpperCase()}
            </span>
          </div>
          <p className="font-body text-white/50 text-xs group-hover:text-white transition-colors leading-tight">
            {c.name}
          </p>
          <ExternalLink size={10} className="text-white/20 group-hover:text-secondary transition-colors" />
        </motion.a>
      ))}
    </div>
  )
}
CLIENTS_COMP_EOF

echo "  ✅  ProcessTimeline, TestimonialsSlider, PortfolioSlider, ClientsGrid"

# ══════════════════════════════════════════════
# 4. SERVICE PAGES
# ══════════════════════════════════════════════
echo "📄  Writing service pages..."

# ── 4a. Branding.jsx ──────────────────────────
cat > src/pages/services/Branding.jsx << 'BRANDING_EOF'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Layers, Palette, FileText, Package, Grid, BookOpen, Search, PenTool, Lightbulb, CheckCircle } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { portfolio } from '../../data/portfolio'
import { clientsByService } from '../../data/clients'
import ProcessTimeline from '../../components/shared/ProcessTimeline'
import TestimonialsSlider from '../../components/shared/TestimonialsSlider'
import PortfolioSlider from '../../components/shared/PortfolioSlider'
import ClientsGrid from '../../components/shared/ClientsGrid'

const s          = services.find(s => s.id === 'branding')
const items      = portfolio.filter(p => p.category === 'Branding')
const reviews    = testimonialsByService.branding
const clientList = clientsByService.branding

const offerings = [
  { icon:Search,   title:'Brand Strategy',   desc:'Deep-dive research into your market, competitors and audience to define your positioning and messaging framework.' },
  { icon:Palette,  title:'Visual Identity',  desc:'Color palettes, typography systems, imagery styles and the complete visual language of your brand.' },
  { icon:PenTool,  title:'Logo Design',      desc:'Distinctive, versatile logos that work across every medium — digital, print, signage and merchandise.' },
  { icon:BookOpen, title:'Brand Guidelines', desc:'A comprehensive brand bible that ensures consistency across every touchpoint and team member.' },
  { icon:Package,  title:'Packaging Design', desc:'Shelf-stopping packaging that communicates your brand story and drives purchase decisions.' },
  { icon:Grid,     title:'Collateral Kits',  desc:'Business cards, letterheads, presentations, social templates — everything to look professional.' },
]

const process = [
  { icon:Search,      step:'01', title:'Discovery & Research',   desc:'We dive deep into your business, audience, competitors and goals to build a strategic foundation.' },
  { icon:Lightbulb,   step:'02', title:'Strategy & Concepts',    desc:'Brand positioning, messaging hierarchy and initial creative directions developed for review.' },
  { icon:PenTool,     step:'03', title:'Design & Refinement',    desc:'Logos, palettes, typography — crafted by our designers and refined through feedback rounds.' },
  { icon:FileText,    step:'04', title:'Guidelines & Delivery',  desc:'Final assets packaged with a comprehensive brand guidelines document ready for production.' },
  { icon:CheckCircle, step:'05', title:'Launch Support',         desc:'Rollout assistance across digital and print ensuring consistent application from day one.' },
]

const BANNER_STYLE = {
  backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

export default function Branding() {
  return (
    <div className="bg-dark-900 min-h-screen">
      {/* ── Banner ─────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-800" />
        <div className="absolute inset-0 bg-gradient-to-br from-tertiary/15 via-dark-800 to-primary/10" />
        <div className="absolute inset-0 opacity-5" style={BANNER_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-40">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <div className="w-16 h-16 rounded-2xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center mb-6">
              <Layers size={32} className="text-tertiary" />
            </div>
            <span className="section-tag">Our Services</span>
            <h1 className="font-heading text-display text-white mb-6 max-w-3xl leading-tight">
              Build a Brand People <span className="text-gradient">Remember</span>
            </h1>
            <p className="text-white/50 font-body text-xl max-w-2xl mb-8">{s?.shortDesc}</p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Start Your Brand Journey <ArrowRight size={18}/>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── What We Provide ───────────────────── */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">What We Provide</span>
            <h2 className="font-heading text-h2 text-white">Branding <span className="text-gradient">Services</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((o, i) => (
              <motion.div key={o.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-tertiary/30">
                <div className="w-11 h-11 rounded-xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center mb-4 group-hover:bg-tertiary/20 transition-colors">
                  <o.icon size={20} className="text-tertiary" />
                </div>
                <h3 className="font-heading text-white text-base mb-2">{o.title}</h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────── */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">How We Work</span>
            <h2 className="font-heading text-h2 text-white">Our Branding <span className="text-gradient">Process</span></h2>
          </motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* ── Portfolio ─────────────────────────── */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Our Work</span>
            <h2 className="font-heading text-h2 text-white">Branding <span className="text-gradient">Portfolio</span></h2>
          </motion.div>
          <PortfolioSlider items={items} />
        </div>
      </section>

      {/* ── Clients ───────────────────────────── */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Who We've Worked With</span>
            <h2 className="font-heading text-h2 text-white">Branding <span className="text-gradient">Clients</span></h2>
          </motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* ── Testimonials ──────────────────────── */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">What Clients Say</span>
            <h2 className="font-heading text-h2 text-white">Branding <span className="text-gradient">Testimonials</span></h2>
          </motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* ── CTA ───────────────────────────────── */}
      <section className="section-padding bg-dark-800 border-t border-dark-600">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-white mb-4">Ready to Build Your <span className="text-gradient">Brand?</span></h2>
          <p className="text-white/50 font-body mb-8 max-w-lg mx-auto">Let's create a brand identity that stands out and lasts.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">Start a Brand Project <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
BRANDING_EOF

# ── 4b. Advertising.jsx ───────────────────────
cat > src/pages/services/Advertising.jsx << 'ADVERTISING_EOF'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Megaphone, Monitor, Instagram, Printer, Video, Users, Target, BarChart2, PenTool, Calendar, TrendingUp, Search, Lightbulb } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { portfolio } from '../../data/portfolio'
import { clientsByService } from '../../data/clients'
import ProcessTimeline from '../../components/shared/ProcessTimeline'
import TestimonialsSlider from '../../components/shared/TestimonialsSlider'
import PortfolioSlider from '../../components/shared/PortfolioSlider'
import ClientsGrid from '../../components/shared/ClientsGrid'

const s          = services.find(s => s.id === 'advertising')
const items      = portfolio.filter(p => p.category === 'Advertising')
const reviews    = testimonialsByService.advertising
const clientList = clientsByService.advertising

const adTypes = [
  { id:'digital',    label:'Digital Ads',    icon:Monitor,   desc:'Google Display, YouTube pre-rolls, programmatic banners — precision targeting at scale.' },
  { id:'social',     label:'Social Ads',     icon:Instagram, desc:'Meta, Instagram, LinkedIn and Twitter ads crafted to stop the scroll and drive action.' },
  { id:'print',      label:'Print Media',    icon:Printer,   desc:'Newspaper inserts, magazine spreads and direct mail that make a tangible impression.' },
  { id:'ooh',        label:'OOH',            icon:Megaphone, desc:'Billboards, transit wraps, mall displays and hoardings that command attention offline.' },
  { id:'video',      label:'Video / OTT',    icon:Video,     desc:'Connected TV, OTT pre-rolls and streaming ads reaching viewers on their big screens.' },
  { id:'influencer', label:'Influencer Ads', icon:Users,     desc:'Authentic creator partnerships on Instagram, YouTube and emerging platforms.' },
]

const detailedServices = [
  { icon:Target,    title:'Campaign Planning',    desc:'End-to-end planning from audience research to channel mix and budget allocation.' },
  { icon:Monitor,   title:'Media Buying',         desc:'Negotiating and placing ads across digital and traditional media for maximum reach.' },
  { icon:PenTool,   title:'Ad Creative',          desc:'Eye-catching visuals, compelling copy and video that drive clicks and conversions.' },
  { icon:BarChart2, title:'Performance Tracking', desc:'Transparent real-time reporting on every rupee spent and every result earned.' },
]

const process = [
  { icon:Search,     step:'01', title:'Brief & Discovery',    desc:'Deep-dive into brand objectives, target audience, budget and competitive landscape.' },
  { icon:Lightbulb,  step:'02', title:'Strategy & Planning',  desc:'Channel selection, media planning, creative strategy and KPI definition.' },
  { icon:PenTool,    step:'03', title:'Creative Development', desc:'Copy, design, video and ad assets produced and reviewed across all formats.' },
  { icon:Calendar,   step:'04', title:'Campaign Launch',      desc:'Coordinated deployment across all selected channels with tracking pixels live.' },
  { icon:BarChart2,  step:'05', title:'Performance Tracking', desc:'Real-time dashboards monitoring CTR, CPM, ROAS, conversions and brand recall.' },
  { icon:TrendingUp, step:'06', title:'Optimize & Scale',     desc:'Data-driven adjustments to maximise ROI and scale winning creatives.' },
]

const GRID_STYLE = {
  backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

export default function Advertising() {
  const [activeTab, setActiveTab] = useState('digital')
  const current = adTypes.find(t => t.id === activeTab)

  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Banner */}
      <section className="relative min-h-[65vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-800" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-dark-800 to-primary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-40">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6">
              <Megaphone size={32} className="text-secondary" />
            </div>
            <span className="section-tag">Our Services</span>
            <h1 className="font-heading text-display text-white mb-6 max-w-3xl leading-tight">
              Advertising That <span className="text-gradient">Converts</span>
            </h1>
            <p className="text-white/50 font-body text-xl max-w-2xl mb-8">{s?.shortDesc}</p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">Launch a Campaign <ArrowRight size={18}/></Link>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">What We Do</span>
            <h2 className="font-heading text-h2 text-white">Campaign <span className="text-gradient">Services</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {detailedServices.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-secondary/30">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <item.icon size={20} className="text-secondary" />
                </div>
                <h3 className="font-heading text-white text-base mb-2">{item.title}</h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Advertising — Tabs */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Ad Formats</span>
            <h2 className="font-heading text-h2 text-white">Types of <span className="text-gradient">Advertising</span></h2>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Tab buttons */}
            <div className="flex flex-col gap-2">
              {adTypes.map(t => (
                <button key={t.id} onClick={() => setActiveTab(t.id)}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-xl text-left border transition-all duration-300 ${
                    activeTab === t.id
                      ? 'bg-secondary/10 border-secondary/40 text-white'
                      : 'bg-dark-900 border-dark-600 text-white/50 hover:text-white/70'
                  }`}>
                  <t.icon size={16} className={activeTab === t.id ? 'text-secondary' : 'text-white/30'} />
                  <span className="font-heading text-sm">{t.label}</span>
                  {activeTab === t.id && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-secondary" />}
                </button>
              ))}
            </div>
            {/* Tab content */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div key={activeTab}
                  initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-20 }} transition={{ duration:0.3 }}
                  className="bg-dark-900 border border-dark-600 rounded-card p-8 min-h-[220px]">
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-5">
                    <current.icon size={26} className="text-secondary" />
                  </div>
                  <h3 className="font-heading text-white text-xl mb-4">{current.label}</h3>
                  <p className="text-white/60 font-body text-base leading-relaxed">{current.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">How We Work</span>
            <h2 className="font-heading text-h2 text-white">Our Campaign <span className="text-gradient">Process</span></h2>
          </motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Our Work</span>
            <h2 className="font-heading text-h2 text-white">Campaign <span className="text-gradient">Portfolio</span></h2>
          </motion.div>
          <PortfolioSlider items={items} />
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Clients</span>
            <h2 className="font-heading text-h2 text-white">Brands We've <span className="text-gradient">Promoted</span></h2>
          </motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="font-heading text-h2 text-white">Client <span className="text-gradient">Feedback</span></h2>
          </motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-white mb-4">Ready to <span className="text-gradient">Advertise?</span></h2>
          <p className="text-white/50 font-body mb-8 max-w-lg mx-auto">Let's craft campaigns that make your brand impossible to ignore.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">Start a Campaign <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
ADVERTISING_EOF

# ── 4c. Photography.jsx ───────────────────────
cat > src/pages/services/Photography.jsx << 'PHOTOGRAPHY_EOF'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Camera, Search, Lightbulb, Image, CheckCircle } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { portfolio } from '../../data/portfolio'
import { clientsByService } from '../../data/clients'
import ProcessTimeline from '../../components/shared/ProcessTimeline'
import TestimonialsSlider from '../../components/shared/TestimonialsSlider'
import PortfolioSlider from '../../components/shared/PortfolioSlider'
import ClientsGrid from '../../components/shared/ClientsGrid'

const s          = services.find(s => s.id === 'photography')
const items      = portfolio.filter(p => p.category === 'Photography')
const reviews    = testimonialsByService.photography
const clientList = clientsByService.photography

const photographers = [
  { name:'Arjun Mehta',  specialty:'Wedding & Portraits', exp:'5 yrs', style:'Candid & Editorial' },
  { name:'Priya Kapoor', specialty:'Fashion & Lifestyle',  exp:'4 yrs', style:'High Fashion' },
  { name:'Rohit Sharma', specialty:'Food & Product',       exp:'6 yrs', style:'Commercial & Minimalist' },
  { name:'Sneha Desai',  specialty:'Events & Corporate',   exp:'3 yrs', style:'Documentary' },
]

const process = [
  { icon:Search,      step:'01', title:'Brief & Scouting',     desc:'Understanding your vision, scouting locations and planning the perfect shot list.' },
  { icon:Lightbulb,   step:'02', title:'Concept & Moodboard',  desc:'Creating moodboards and visual direction aligned to your brand and goals.' },
  { icon:Camera,      step:'03', title:'The Shoot',            desc:'Professional shoot day with our team ensuring every frame is intentional and stunning.' },
  { icon:Image,       step:'04', title:'Editing & Retouching', desc:'Post-production magic — colour grading, retouching and final export in all formats.' },
  { icon:CheckCircle, step:'05', title:'Delivery',             desc:'Final gallery delivered via private link with all licensed files ready to use.' },
]

const GRID_STYLE = {
  backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

export default function Photography() {
  const [activeCat, setActiveCat] = useState('All')
  const cats    = ['All', ...(s?.categories?.slice(0,6) || [])]
  const filtered = activeCat === 'All' ? items : items.filter(p =>
    p.title.toLowerCase().includes(activeCat.toLowerCase())
  )

  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Banner */}
      <section className="relative min-h-[65vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-800" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-dark-800 to-secondary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-40">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <Camera size={32} className="text-secondary" />
            </div>
            <span className="section-tag">Our Services</span>
            <h1 className="font-heading text-display text-white mb-6 max-w-3xl leading-tight">
              Every Frame Tells a <span className="text-gradient">Story</span>
            </h1>
            <p className="text-white/50 font-body text-xl max-w-2xl mb-8">{s?.shortDesc}</p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">Book a Shoot <ArrowRight size={18}/></Link>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Specialisations</span>
            <h2 className="font-heading text-h2 text-white">Photography <span className="text-gradient">Categories</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {(s?.categories || []).map((cat, i) => (
              <motion.div key={cat} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.06 }}
                className="card text-center hover:border-secondary/30 group p-5">
                <Camera size={22} className="text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-heading text-white text-sm">{cat}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photographers */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Our Team</span>
            <h2 className="font-heading text-h2 text-white">Meet Our <span className="text-gradient">Photographers</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {photographers.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-primary/30 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 border-2 border-primary/30 group-hover:border-secondary/50 transition-colors">
                  <span className="font-heading text-white text-xl font-bold">{p.name.split(' ').map(n=>n[0]).join('')}</span>
                </div>
                <h3 className="font-heading text-white text-base mb-1">{p.name}</h3>
                <p className="text-secondary text-xs font-body font-semibold mb-1">{p.specialty}</p>
                <p className="text-white/30 text-xs font-body mb-4">{p.exp} · {p.style}</p>
                <Link to="/contact" className="btn-secondary text-xs py-2 justify-center w-full">Hire <ArrowRight size={12}/></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">How It Works</span>
            <h2 className="font-heading text-h2 text-white">Our Shoot <span className="text-gradient">Process</span></h2>
          </motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* Portfolio with filter */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-10">
            <span className="section-tag">Our Work</span>
            <h2 className="font-heading text-h2 text-white">Photo <span className="text-gradient">Portfolio</span></h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {cats.map(cat => (
              <button key={cat} onClick={() => setActiveCat(cat)}
                className={`px-4 py-2 rounded-full text-sm font-body border transition-all duration-200 ${
                  activeCat === cat
                    ? 'bg-primary border-primary text-white'
                    : 'border-dark-600 text-white/50 hover:border-primary/40 hover:text-white'
                }`}>{cat}</button>
            ))}
          </div>
          <PortfolioSlider items={filtered.length ? filtered : items} />
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Clients</span>
            <h2 className="font-heading text-h2 text-white">Who We've <span className="text-gradient">Shot For</span></h2>
          </motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="font-heading text-h2 text-white">Client <span className="text-gradient">Stories</span></h2>
          </motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-white mb-4">Ready to <span className="text-gradient">Shoot?</span></h2>
          <p className="text-white/50 font-body mb-8 max-w-lg mx-auto">Let's capture moments that last forever.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">Book a Shoot <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
PHOTOGRAPHY_EOF

# ── 4d. Events.jsx ────────────────────────────
cat > src/pages/services/Events.jsx << 'EVENTS_EOF'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar, Music, Camera, Film, Brush, Search, Lightbulb, Users, Star, CheckCircle, MapPin } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { portfolio } from '../../data/portfolio'
import { clientsByService } from '../../data/clients'
import ProcessTimeline from '../../components/shared/ProcessTimeline'
import TestimonialsSlider from '../../components/shared/TestimonialsSlider'
import PortfolioSlider from '../../components/shared/PortfolioSlider'
import ClientsGrid from '../../components/shared/ClientsGrid'

const s          = services.find(s => s.id === 'events')
const items      = portfolio.filter(p => p.category === 'Events')
const reviews    = testimonialsByService.events
const clientList = clientsByService.events

const artistTypes = [
  { icon:Music,   title:'Musicians & Bands',  desc:'Solo artists, duos and full bands for weddings, concerts and corporate shows.' },
  { icon:Users,   title:'Disk Jockeys',       desc:'High-energy DJs for weddings, parties, corporate events and nightclub gigs.' },
  { icon:Camera,  title:'Photographers',      desc:'Event and documentary photographers to capture every precious moment.' },
  { icon:Film,    title:'Film Makers',        desc:'Videographers and cinematographers for event coverage and highlight reels.' },
  { icon:Brush,   title:'Tattoo Artists',     desc:'Live tattooing for brand activations, festivals and private events.' },
  { icon:Star,    title:'Painters & Artists', desc:'Live painters and visual artists to create memorable experiential art.' },
]

const upcoming = [
  { title:'Summer Music Fest 2026',  date:'June 14, 2026',  location:'Pune',   type:'Concert' },
  { title:'Corporate Summit 2026',   date:'July 2, 2026',   location:'Mumbai', type:'Corporate' },
  { title:'Wedding Showcase Expo',   date:'Aug 10, 2026',   location:'Pune',   type:'Exhibition' },
]

const process = [
  { icon:Search,      step:'01', title:'Requirement Brief',       desc:'Understanding event type, scale, budget, venue and audience expectations.' },
  { icon:Lightbulb,   step:'02', title:'Concept & Planning',      desc:'Theme development, vendor shortlisting, timeline creation and logistics mapping.' },
  { icon:Users,       step:'03', title:'Artist & Vendor Booking', desc:'Booking confirmed artists, vendors and production teams with contracts in place.' },
  { icon:Calendar,    step:'04', title:'Event Execution',         desc:'On-ground coordination ensuring smooth flow, technical production and guest experience.' },
  { icon:CheckCircle, step:'05', title:'Post-Event Wrap',         desc:'Coverage delivery, feedback collection and documentation for future reference.' },
]

const GRID_STYLE = {
  backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

export default function Events() {
  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Banner */}
      <section className="relative min-h-[65vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-800" />
        <div className="absolute inset-0 bg-gradient-to-br from-tertiary/15 via-dark-800 to-secondary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-40">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <div className="w-16 h-16 rounded-2xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center mb-6">
              <Calendar size={32} className="text-tertiary" />
            </div>
            <span className="section-tag">Our Services</span>
            <h1 className="font-heading text-display text-white mb-6 max-w-3xl leading-tight">
              Events That Leave an <span className="text-gradient">Impression</span>
            </h1>
            <p className="text-white/50 font-body text-xl max-w-2xl mb-8">{s?.shortDesc}</p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">Plan Your Event <ArrowRight size={18}/></Link>
          </motion.div>
        </div>
      </section>

      {/* Event Types */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Events We Handle</span>
            <h2 className="font-heading text-h2 text-white">Event <span className="text-gradient">Types</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {(s?.eventTypes || s?.categories || []).map((e, i) => (
              <motion.div key={e} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card text-center hover:border-tertiary/30 group p-6">
                <Calendar size={22} className="text-tertiary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-heading text-white text-sm">{e}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Section */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Artists We Manage</span>
            <h2 className="font-heading text-h2 text-white">Artist <span className="text-gradient">Categories</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {artistTypes.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-secondary/30 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <a.icon size={20} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading text-white text-base mb-1">{a.title}</h3>
                  <p className="text-white/50 font-body text-sm leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/contact" className="btn-secondary">Book an Artist <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">How We Work</span>
            <h2 className="font-heading text-h2 text-white">Event Planning <span className="text-gradient">Process</span></h2>
          </motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">What's Coming</span>
            <h2 className="font-heading text-h2 text-white">Upcoming <span className="text-gradient">Events</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-6">
            {upcoming.map((e, i) => (
              <motion.div key={e.title} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-tertiary/30">
                <span className="text-tertiary text-xs font-body font-semibold tracking-widest uppercase mb-3 block">{e.type}</span>
                <h3 className="font-heading text-white text-base mb-3">{e.title}</h3>
                <div className="flex flex-col gap-1.5 text-white/40 text-xs font-body">
                  <span className="flex items-center gap-2"><Calendar size={11}/>{e.date}</span>
                  <span className="flex items-center gap-2"><MapPin size={11}/>{e.location}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Past Events</span>
            <h2 className="font-heading text-h2 text-white">Event <span className="text-gradient">Portfolio</span></h2>
          </motion.div>
          <PortfolioSlider items={items} />
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Clients</span>
            <h2 className="font-heading text-h2 text-white">Events Managed <span className="text-gradient">For</span></h2>
          </motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="font-heading text-h2 text-white">What Clients <span className="text-gradient">Say</span></h2>
          </motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-800 border-t border-dark-600">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-white mb-4">Let's Plan Your <span className="text-gradient">Event</span></h2>
          <p className="text-white/50 font-body mb-8 max-w-lg mx-auto">From intimate gatherings to grand productions — we handle it all.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">Plan My Event <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
EVENTS_EOF

# ── 4e. FilmMaking.jsx ────────────────────────
cat > src/pages/services/FilmMaking.jsx << 'FILMMAKING_EOF'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Film, Search, Lightbulb, Video, Edit, CheckCircle } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { portfolio } from '../../data/portfolio'
import { clientsByService } from '../../data/clients'
import ProcessTimeline from '../../components/shared/ProcessTimeline'
import TestimonialsSlider from '../../components/shared/TestimonialsSlider'
import PortfolioSlider from '../../components/shared/PortfolioSlider'
import ClientsGrid from '../../components/shared/ClientsGrid'

const s          = services.find(s => s.id === 'film-making')
const items      = portfolio.filter(p => p.category === 'Film Making')
const reviews    = testimonialsByService['film-making']
const clientList = clientsByService['film-making']

const process = [
  { icon:Search,      step:'01', title:'Pre-Production',     desc:'Script, storyboard, location scouting, casting and production scheduling.' },
  { icon:Lightbulb,   step:'02', title:'Creative Direction', desc:'Visual style, tone, color palette and cinematography approach defined.' },
  { icon:Video,       step:'03', title:'Production',         desc:'Professional filming with our crew, equipment and lighting setup on location.' },
  { icon:Edit,        step:'04', title:'Post-Production',    desc:'Editing, color grading, sound design, VFX and music scoring.' },
  { icon:CheckCircle, step:'05', title:'Delivery',           desc:'Final deliverables in all required formats — web, broadcast and social media.' },
]

const GRID_STYLE = {
  backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

export default function FilmMaking() {
  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Banner */}
      <section className="relative min-h-[65vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-800" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-dark-800 to-secondary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-40">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <Film size={32} className="text-secondary" />
            </div>
            <span className="section-tag">Our Services</span>
            <h1 className="font-heading text-display text-white mb-6 max-w-3xl leading-tight">
              Films That <span className="text-gradient">Move</span> People
            </h1>
            <p className="text-white/50 font-body text-xl max-w-2xl mb-8">{s?.shortDesc}</p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">Start a Film Project <ArrowRight size={18}/></Link>
          </motion.div>
        </div>
      </section>

      {/* Film Types */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">What We Create</span>
            <h2 className="font-heading text-h2 text-white">Film <span className="text-gradient">Services</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {(s?.categories || []).map((cat, i) => (
              <motion.div key={cat} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.07 }}
                className="card text-center hover:border-secondary/30 group p-6">
                <Film size={22} className="text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-heading text-white text-sm">{cat}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Production Workflow</span>
            <h2 className="font-heading text-h2 text-white">Our Film <span className="text-gradient">Process</span></h2>
          </motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Our Work</span>
            <h2 className="font-heading text-h2 text-white">Film <span className="text-gradient">Portfolio</span></h2>
          </motion.div>
          <PortfolioSlider items={items} />
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Clients</span>
            <h2 className="font-heading text-h2 text-white">Brands We've <span className="text-gradient">Filmed</span></h2>
          </motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="font-heading text-h2 text-white">What Clients <span className="text-gradient">Say</span></h2>
          </motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-800 border-t border-dark-600">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-white mb-4">Ready to <span className="text-gradient">Film?</span></h2>
          <p className="text-white/50 font-body mb-8 max-w-lg mx-auto">Let's tell your story on screen.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">Start a Film Project <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
FILMMAKING_EOF

# ── 4f. WebDevelopment.jsx ────────────────────
cat > src/pages/services/WebDevelopment.jsx << 'WEBDEV_EOF'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Monitor, ShoppingCart, Palette, Search, FileText, BookOpen, Lightbulb, PenTool, Rocket, TrendingUp } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { portfolio } from '../../data/portfolio'
import { clientsByService } from '../../data/clients'
import ProcessTimeline from '../../components/shared/ProcessTimeline'
import TestimonialsSlider from '../../components/shared/TestimonialsSlider'
import PortfolioSlider from '../../components/shared/PortfolioSlider'
import ClientsGrid from '../../components/shared/ClientsGrid'

const s          = services.find(s => s.id === 'web-development')
const items      = portfolio.filter(p => p.category === 'Web Development')
const reviews    = testimonialsByService['web-development']
const clientList = clientsByService['web-development']

const breakdown = [
  { icon:FileText,     title:'Content Strategy',    desc:'Site architecture, copywriting and content hierarchy for maximum engagement.' },
  { icon:BookOpen,     title:'Blogs & CMS',         desc:'WordPress, Webflow or custom CMS so you can update content without touching code.' },
  { icon:Monitor,      title:'Website Development', desc:'Pixel-perfect, performance-optimised websites built with React or WordPress.' },
  { icon:Palette,      title:'UI/UX Design',        desc:'User-centred design systems, wireframes and prototypes that convert visitors.' },
  { icon:Search,       title:'SEO',                 desc:'Technical SEO, on-page optimisation and schema markup to rank higher on Google.' },
  { icon:ShoppingCart, title:'E-Commerce',          desc:'Shopify, WooCommerce and custom stores with seamless checkout experiences.' },
]

const process = [
  { icon:Search,     step:'01', title:'Discovery & Scope',   desc:'Requirements gathering, competitor analysis and technical specification document.' },
  { icon:Lightbulb,  step:'02', title:'Design & Wireframes', desc:'UI/UX design, interactive prototypes and client-approved visual designs.' },
  { icon:PenTool,    step:'03', title:'Development',         desc:'Clean, modular code built to performance and accessibility standards.' },
  { icon:Rocket,     step:'04', title:'Testing & Launch',    desc:'Cross-browser QA, speed optimisation, staging review and go-live deployment.' },
  { icon:TrendingUp, step:'05', title:'Support & Growth',    desc:'Post-launch support, analytics monitoring and iterative improvements.' },
]

const GRID_STYLE = {
  backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

export default function WebDevelopment() {
  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Banner */}
      <section className="relative min-h-[65vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-800" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-dark-800 to-secondary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-40">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <Code size={32} className="text-secondary" />
            </div>
            <span className="section-tag">Our Services</span>
            <h1 className="font-heading text-display text-white mb-6 max-w-3xl leading-tight">
              Putting the <span className="text-gradient">Tech</span> in Your Idea
            </h1>
            <p className="text-white/50 font-body text-xl max-w-2xl mb-8">{s?.shortDesc}</p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">Build My Website <ArrowRight size={18}/></Link>
          </motion.div>
        </div>
      </section>

      {/* Breakdown */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">What We Offer</span>
            <h2 className="font-heading text-h2 text-white">Development <span className="text-gradient">Services</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {breakdown.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-secondary/30">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <item.icon size={20} className="text-secondary" />
                </div>
                <h3 className="font-heading text-white text-base mb-2">{item.title}</h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Development Workflow</span>
            <h2 className="font-heading text-h2 text-white">Our Build <span className="text-gradient">Process</span></h2>
          </motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Our Work</span>
            <h2 className="font-heading text-h2 text-white">Web <span className="text-gradient">Portfolio</span></h2>
          </motion.div>
          <PortfolioSlider items={items} />
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Clients</span>
            <h2 className="font-heading text-h2 text-white">Websites We've <span className="text-gradient">Built</span></h2>
          </motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="font-heading text-h2 text-white">Client <span className="text-gradient">Reviews</span></h2>
          </motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-800 border-t border-dark-600">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-white mb-4">Ready to <span className="text-gradient">Build?</span></h2>
          <p className="text-white/50 font-body mb-8 max-w-lg mx-auto">Let's bring your digital idea to life.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">Start My Project <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
WEBDEV_EOF

# ── 4g. Music.jsx ─────────────────────────────
cat > src/pages/services/Music.jsx << 'MUSIC_EOF'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Music as MusicIcon, Mic2, Headphones, Radio, Search, Lightbulb, TrendingUp } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { portfolio } from '../../data/portfolio'
import { clientsByService } from '../../data/clients'
import { artists } from '../../data/artists'
import ProcessTimeline from '../../components/shared/ProcessTimeline'
import TestimonialsSlider from '../../components/shared/TestimonialsSlider'
import PortfolioSlider from '../../components/shared/PortfolioSlider'
import ClientsGrid from '../../components/shared/ClientsGrid'

const s          = services.find(s => s.id === 'music')
const items      = portfolio.filter(p => p.category === 'Music')
const reviews    = testimonialsByService.music
const clientList = clientsByService.music

const process = [
  { icon:Search,     step:'01', title:'Artist Consultation',  desc:'Understanding your sound, goals, target audience and career trajectory.' },
  { icon:Lightbulb,  step:'02', title:'Production Planning',  desc:'Pre-production sessions, arrangement and session musician booking.' },
  { icon:Mic2,       step:'03', title:'Recording',            desc:'Professional studio recording with our in-house sound engineers and producers.' },
  { icon:Headphones, step:'04', title:'Mixing & Mastering',   desc:'Industry-standard mix and master ready for streaming platforms and broadcast.' },
  { icon:Radio,      step:'05', title:'Publishing & Promo',   desc:'Distribution to Spotify, Apple Music, YouTube and promotional campaign launch.' },
  { icon:TrendingUp, step:'06', title:'Artist Growth',        desc:'Ongoing booking, management and marketing to grow your fanbase and revenue.' },
]

const GRID_STYLE = {
  backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

export default function Music() {
  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Banner */}
      <section className="relative min-h-[65vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-800" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-dark-800 to-primary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-40">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <div className="w-16 h-16 rounded-2xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6">
              <MusicIcon size={32} className="text-secondary" />
            </div>
            <span className="section-tag">Our Services</span>
            <h1 className="font-heading text-display text-white mb-6 max-w-3xl leading-tight">
              Let the World Hear Your <span className="text-gradient">Sound</span>
            </h1>
            <p className="text-white/50 font-body text-xl max-w-2xl mb-8">{s?.shortDesc}</p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">Work With Us <ArrowRight size={18}/></Link>
          </motion.div>
        </div>
      </section>

      {/* Music Categories */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">What We Offer</span>
            <h2 className="font-heading text-h2 text-white">Music <span className="text-gradient">Services</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {(s?.categories || []).map((cat, i) => (
              <motion.div key={cat} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
                className="card text-center hover:border-secondary/30 group p-6">
                <MusicIcon size={22} className="text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="font-heading text-white text-sm">{cat}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Our Roster</span>
            <h2 className="font-heading text-h2 text-white">Featured <span className="text-gradient">Artists</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {(artists || []).map((a, i) => (
              <motion.div key={a.id} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-secondary/30 flex items-start gap-5">
                <div className="w-16 h-16 rounded-full bg-secondary/20 border-2 border-secondary/30 flex items-center justify-center shrink-0 group-hover:border-secondary transition-colors">
                  <span className="font-heading text-white text-lg font-bold">
                    {a.name.split(' ').map(n=>n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="text-secondary text-xs font-body font-semibold tracking-widest uppercase mb-1 block">
                    {a.category} · {a.genre}
                  </span>
                  <h3 className="font-heading text-white text-base mb-2">{a.name}</h3>
                  <p className="text-white/50 font-body text-sm mb-4">{a.bio}</p>
                  <Link to="/contact" className="btn-secondary text-xs py-2">Book Artist <ArrowRight size={12}/></Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">How We Work</span>
            <h2 className="font-heading text-h2 text-white">Music Production <span className="text-gradient">Process</span></h2>
          </motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* Portfolio */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Our Work</span>
            <h2 className="font-heading text-h2 text-white">Music <span className="text-gradient">Portfolio</span></h2>
          </motion.div>
          <PortfolioSlider items={items} />
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Collaborations</span>
            <h2 className="font-heading text-h2 text-white">Who We've <span className="text-gradient">Worked With</span></h2>
          </motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="font-heading text-h2 text-white">Artist <span className="text-gradient">Feedback</span></h2>
          </motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-white mb-4">Ready to Make <span className="text-gradient">Music?</span></h2>
          <p className="text-white/50 font-body mb-8 max-w-lg mx-auto">Let's get your sound out to the world.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">Start Your Music Journey <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
MUSIC_EOF

# ── 4h. Consultation.jsx ──────────────────────
cat > src/pages/services/Consultation.jsx << 'CONSULT_EOF'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Briefcase, Search, BarChart2, Rocket, TrendingUp, Target, Globe, DollarSign, Lightbulb, CheckCircle } from 'lucide-react'
import { services } from '../../data/services'
import { testimonialsByService } from '../../data/testimonials'
import { clientsByService } from '../../data/clients'
import ProcessTimeline from '../../components/shared/ProcessTimeline'
import TestimonialsSlider from '../../components/shared/TestimonialsSlider'
import ClientsGrid from '../../components/shared/ClientsGrid'

const s          = services.find(s => s.id === 'consultation')
const reviews    = testimonialsByService.consultation
const clientList = clientsByService.consultation

const domains = [
  { icon:Target,     title:'Brand Strategy',         desc:'Positioning, messaging and differentiation strategy to stand out in a crowded market.' },
  { icon:Globe,      title:'Digital Transformation', desc:'Roadmap to modernise operations, workflows and customer experience through technology.' },
  { icon:Rocket,     title:'Go-To-Market Strategy',  desc:'Launch plans, channel strategies and growth playbooks for new products and markets.' },
  { icon:DollarSign, title:'Monetization Models',    desc:'Revenue model design, pricing strategy and partnership structures for sustainable growth.' },
  { icon:BarChart2,  title:'Brand Audits',           desc:'Comprehensive review of your current brand assets, positioning and market perception.' },
  { icon:Lightbulb,  title:'Innovation Consulting',  desc:'Identifying opportunities, new business lines and strategic pivots for long-term growth.' },
]

const engagements = [
  { title:'ZenFit Go-To-Market',              outcome:'₹1Cr revenue in first 3 months',  industry:'Apparel' },
  { title:'EduSpark Digital Transformation',  outcome:'40% operational cost reduction',   industry:'EdTech' },
  { title:'GreenLife Brand Audit',            outcome:'2x social following post-rebrand', industry:'Organics' },
  { title:'QuickDeliver Market Entry',        outcome:'Expanded to 3 new cities in Q2',  industry:'Logistics' },
]

const process = [
  { icon:Search,     step:'01', title:'Discovery',    desc:'Stakeholder interviews, data review and current-state assessment across your business.' },
  { icon:BarChart2,  step:'02', title:'Strategy',     desc:'Custom strategy development with clear objectives, milestones and success metrics.' },
  { icon:Rocket,     step:'03', title:'Execution',    desc:'Hands-on implementation support with our team working alongside yours.' },
  { icon:TrendingUp, step:'04', title:'Optimization', desc:'Continuous monitoring, learning and refinement to maximise outcomes.' },
]

const GRID_STYLE = {
  backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',
  backgroundSize: '60px 60px',
}

export default function Consultation() {
  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Banner */}
      <section className="relative min-h-[65vh] flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dark-800" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-dark-800 to-tertiary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-40">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
              <Briefcase size={32} className="text-secondary" />
            </div>
            <span className="section-tag">Our Services</span>
            <h1 className="font-heading text-display text-white mb-6 max-w-3xl leading-tight">
              Strategy That Drives <span className="text-gradient">Growth</span>
            </h1>
            <p className="text-white/50 font-body text-xl max-w-2xl mb-8">{s?.shortDesc}</p>
            <Link to="/contact" className="btn-primary text-base px-8 py-4">Book a Consultation <ArrowRight size={18}/></Link>
          </motion.div>
        </div>
      </section>

      {/* Consulting Domains */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">What We Do</span>
            <h2 className="font-heading text-h2 text-white">Consulting <span className="text-gradient">Domains</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((d, i) => (
              <motion.div key={d.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-primary/30">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <d.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-heading text-white text-base mb-2">{d.title}</h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">How We Work</span>
            <h2 className="font-heading text-h2 text-white">Our Consulting <span className="text-gradient">Process</span></h2>
          </motion.div>
          <ProcessTimeline steps={process} />
        </div>
      </section>

      {/* Completed Engagements */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Case Studies</span>
            <h2 className="font-heading text-h2 text-white">Completed <span className="text-gradient">Engagements</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {engagements.map((e, i) => (
              <motion.div key={e.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-secondary/30 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                  <CheckCircle size={20} className="text-secondary" />
                </div>
                <div>
                  <span className="text-secondary text-xs font-body font-semibold tracking-widest uppercase mb-1 block">{e.industry}</span>
                  <h3 className="font-heading text-white text-base mb-2">{e.title}</h3>
                  <p className="text-white/50 font-body text-sm flex items-center gap-2">
                    <TrendingUp size={14} className="text-secondary shrink-0" /> {e.outcome}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Clients</span>
            <h2 className="font-heading text-h2 text-white">Businesses We've <span className="text-gradient">Advised</span></h2>
          </motion.div>
          <ClientsGrid items={clientList} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Testimonials</span>
            <h2 className="font-heading text-h2 text-white">Client <span className="text-gradient">Outcomes</span></h2>
          </motion.div>
          <TestimonialsSlider items={reviews} />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark-800 border-t border-dark-600">
        <div className="container-custom text-center">
          <h2 className="font-heading text-h2 text-white mb-4">Ready to <span className="text-gradient">Grow?</span></h2>
          <p className="text-white/50 font-body mb-8 max-w-lg mx-auto">Let's build a strategy that transforms your business.</p>
          <Link to="/contact" className="btn-primary text-base px-8 py-4">Book a Free Consultation <ArrowRight size={18}/></Link>
        </div>
      </section>
    </div>
  )
}
CONSULT_EOF

echo "  ✅  Branding, Advertising, Photography, Events, FilmMaking, WebDevelopment, Music, Consultation"

# ══════════════════════════════════════════════
# 5. CONTACT PAGE
# ══════════════════════════════════════════════
echo "📄  Writing Contact page..."

cat > src/pages/Contact.jsx << 'CONTACT_EOF'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Linkedin, Youtube, Twitter } from 'lucide-react'
import { contactInfo } from '../data/contact'

const schema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  email:   z.string().email('Please enter a valid email address'),
  phone:   z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

const SERVICES = [
  'Photography','Music','Event Management','Film Making',
  'Advertising','Web Development','Branding','Business Consultation',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data) => {
    console.log('Form data:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  const GRID_STYLE = {
    backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',
    backgroundSize: '60px 60px',
  }

  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Banner */}
      <section className="relative min-h-[45vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dark-800" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-dark-800 to-secondary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-36">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <span className="section-tag">Get In Touch</span>
            <h1 className="font-heading text-display text-white mb-4 leading-tight">
              Let's <span className="text-gradient">Talk</span>
            </h1>
            <p className="text-white/50 font-body text-xl max-w-xl">
              Have a project in mind? We'd love to hear about it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} className="lg:col-span-2 flex flex-col gap-6">
              <div>
                <span className="section-tag">Contact Info</span>
                <h2 className="font-heading text-h3 text-white mt-2 mb-6">Reach Out to <span className="text-gradient">Us</span></h2>
              </div>

              {/* Phone */}
              <div className="card group hover:border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-white/40 font-body text-xs mb-1 tracking-widest uppercase">Phone</p>
                    {(contactInfo?.phones || ['+91 9158664515','+91 9561422961']).map(p => (
                      <a key={p} href={`tel:${p}`} className="block font-heading text-white text-sm hover:text-secondary transition-colors">{p}</a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="card group hover:border-secondary/30">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-white/40 font-body text-xs mb-1 tracking-widest uppercase">Email</p>
                    <a href={`mailto:${contactInfo?.email || 'shutterbeat.media@gmail.com'}`}
                      className="font-heading text-white text-sm hover:text-secondary transition-colors">
                      {contactInfo?.email || 'shutterbeat.media@gmail.com'}
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="card group hover:border-tertiary/30">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-tertiary" />
                  </div>
                  <div>
                    <p className="text-white/40 font-body text-xs mb-1 tracking-widest uppercase">Address</p>
                    <p className="font-heading text-white text-sm">{contactInfo?.address || 'Pune, Maharashtra, India'}</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div>
                <p className="text-white/40 font-body text-xs mb-4 tracking-widest uppercase">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { Icon:Instagram, href:contactInfo?.socials?.instagram || '#', color:'hover:text-pink-400' },
                    { Icon:Facebook,  href:contactInfo?.socials?.facebook  || '#', color:'hover:text-blue-400' },
                    { Icon:Linkedin,  href:contactInfo?.socials?.linkedin  || '#', color:'hover:text-sky-400' },
                    { Icon:Youtube,   href:contactInfo?.socials?.youtube   || '#', color:'hover:text-red-400' },
                    { Icon:Twitter,   href:contactInfo?.socials?.twitter   || '#', color:'hover:text-sky-300' },
                  ].map(({ Icon, href, color }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-xl bg-dark-800 border border-dark-600 flex items-center justify-center text-white/40 ${color} hover:border-white/20 transition-all duration-200`}>
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} className="lg:col-span-3">
              <div className="bg-dark-800 border border-dark-600 rounded-card p-8">
                <h3 className="font-heading text-white text-xl mb-6">Send Us a Message</h3>

                {submitted && (
                  <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-4 mb-6 text-secondary font-body text-sm">
                    ✅ Thank you! We'll get back to you within 24 hours.
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/50 font-body text-xs mb-1.5 block tracking-wide">Full Name *</label>
                      <input {...register('name')} placeholder="Your name"
                        className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors" />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="text-white/50 font-body text-xs mb-1.5 block tracking-wide">Email Address *</label>
                      <input {...register('email')} type="email" placeholder="your@email.com"
                        className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors" />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-white/50 font-body text-xs mb-1.5 block tracking-wide">Phone Number</label>
                      <input {...register('phone')} placeholder="+91 00000 00000"
                        className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors" />
                    </div>
                    <div>
                      <label className="text-white/50 font-body text-xs mb-1.5 block tracking-wide">Company / Brand</label>
                      <input {...register('company')} placeholder="Your company (optional)"
                        className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label className="text-white/50 font-body text-xs mb-1.5 block tracking-wide">Service Interested In</label>
                    <select {...register('service')}
                      className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                      <option value="">Select a service...</option>
                      {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="text-white/50 font-body text-xs mb-1.5 block tracking-wide">Message *</label>
                    <textarea {...register('message')} rows={5} placeholder="Tell us about your project..."
                      className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors resize-none" />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                  </div>

                  <button type="submit"
                    className="btn-primary w-full justify-center py-4 text-base mt-2">
                    Send Message <Send size={18}/>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
CONTACT_EOF

echo "  ✅  Contact.jsx"

# ══════════════════════════════════════════════
# 6. OPPORTUNITIES PAGE
# ══════════════════════════════════════════════
echo "📄  Writing Opportunities page..."

cat > src/pages/Opportunities.jsx << 'OPPORTUNITIES_EOF'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Briefcase, MapPin, Clock, Upload, Send, Palette, Code, Megaphone, Film } from 'lucide-react'
import { jobs } from '../data/jobs'

const schema = z.object({
  name:      z.string().min(2, 'Name must be at least 2 characters'),
  email:     z.string().email('Please enter a valid email address'),
  portfolio: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  type:      z.string().min(1, 'Please select an employment type'),
  role:      z.string().optional(),
  message:   z.string().optional(),
})

const freelancerCategories = [
  { icon:Palette, title:'Designers',   desc:'Graphic designers, motion designers and UI/UX specialists.' },
  { icon:Film,    title:'Editors',     desc:'Video editors, color graders and post-production artists.' },
  { icon:Code,    title:'Developers',  desc:'Front-end, back-end and full-stack web developers.' },
  { icon:Megaphone,title:'Marketers', desc:'Performance marketers, content creators and SEO specialists.' },
]

const TYPE_COLOR = {
  'Full-time':'bg-primary/20 text-primary border-primary/30',
  'Part-time':'bg-secondary/20 text-secondary border-secondary/30',
  'Freelance':'bg-tertiary/20 text-tertiary border-tertiary/30',
}

export default function Opportunities() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState:{ errors }, reset } = useForm({ resolver: zodResolver(schema) })

  const onSubmit = (data) => {
    console.log('Application:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  const GRID_STYLE = {
    backgroundImage: 'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',
    backgroundSize: '60px 60px',
  }

  return (
    <div className="bg-dark-900 min-h-screen">
      {/* Banner */}
      <section className="relative min-h-[45vh] flex items-end pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-dark-800" />
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/15 via-dark-800 to-primary/10" />
        <div className="absolute inset-0 opacity-5" style={GRID_STYLE} />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10 pt-36">
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8 }}>
            <span className="section-tag">Join the Team</span>
            <h1 className="font-heading text-display text-white mb-4 leading-tight">
              Build With <span className="text-gradient">Us</span>
            </h1>
            <p className="text-white/50 font-body text-xl max-w-xl">
              We're always looking for talented, passionate creatives to join our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Freelancer Categories */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Freelance Opportunities</span>
            <h2 className="font-heading text-h2 text-white">We're Looking for <span className="text-gradient">Creatives</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {freelancerCategories.map((cat, i) => (
              <motion.div key={cat.title} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-secondary/30 text-center">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                  <cat.icon size={22} className="text-secondary" />
                </div>
                <h3 className="font-heading text-white text-base mb-2">{cat.title}</h3>
                <p className="text-white/50 font-body text-sm leading-relaxed">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="section-padding bg-dark-800 border-y border-dark-600">
        <div className="container-custom">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
            <span className="section-tag">Open Positions</span>
            <h2 className="font-heading text-h2 text-white">Current <span className="text-gradient">Openings</span></h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6">
            {(jobs || []).map((job, i) => (
              <motion.div key={job.id || i} initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                className="card group hover:border-primary/30">
                <div className="flex items-start justify-between mb-4 gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                  <span className={`text-xs font-body font-semibold px-3 py-1 rounded-full border ${TYPE_COLOR[job.type] || TYPE_COLOR['Freelance']}`}>
                    {job.type}
                  </span>
                </div>
                <h3 className="font-heading text-white text-base mb-2">{job.title}</h3>
                <p className="text-white/50 font-body text-sm mb-4 leading-relaxed">{job.description}</p>
                <div className="flex items-center gap-4 text-white/30 text-xs font-body">
                  <span className="flex items-center gap-1.5"><MapPin size={11}/> {job.location || 'Pune / Remote'}</span>
                  <span className="flex items-center gap-1.5"><Clock size={11}/> {job.experience || '2+ years'}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-dark-900">
        <div className="container-custom max-w-2xl">
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-12">
            <span className="section-tag">Apply Now</span>
            <h2 className="font-heading text-h2 text-white">Submit Your <span className="text-gradient">Application</span></h2>
          </motion.div>

          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            className="bg-dark-800 border border-dark-600 rounded-card p-8">

            {submitted && (
              <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-4 mb-6 text-secondary font-body text-sm">
                ✅ Application received! We'll review and get back to you within 3 business days.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-white/50 font-body text-xs mb-1.5 block tracking-wide">Full Name *</label>
                  <input {...register('name')} placeholder="Your name"
                    className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors" />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="text-white/50 font-body text-xs mb-1.5 block tracking-wide">Email Address *</label>
                  <input {...register('email')} type="email" placeholder="your@email.com"
                    className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors" />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="text-white/50 font-body text-xs mb-1.5 block tracking-wide">Portfolio / LinkedIn URL</label>
                <input {...register('portfolio')} placeholder="https://yourportfolio.com"
                  className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors" />
                {errors.portfolio && <p className="text-red-400 text-xs mt-1">{errors.portfolio.message}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-white/50 font-body text-xs mb-1.5 block tracking-wide">Employment Type *</label>
                  <select {...register('type')}
                    className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white font-body text-sm focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                    <option value="">Select type...</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Freelance</option>
                    <option>Internship</option>
                  </select>
                  {errors.type && <p className="text-red-400 text-xs mt-1">{errors.type.message}</p>}
                </div>
                <div>
                  <label className="text-white/50 font-body text-xs mb-1.5 block tracking-wide">Role Applying For</label>
                  <input {...register('role')} placeholder="e.g. Photographer"
                    className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors" />
                </div>
              </div>

              <div>
                <label className="text-white/50 font-body text-xs mb-1.5 block tracking-wide">Why ShutterBeat?</label>
                <textarea {...register('message')} rows={4} placeholder="Tell us about yourself and why you want to work with us..."
                  className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white font-body text-sm placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors resize-none" />
              </div>

              {/* CV Upload placeholder */}
              <div>
                <label className="text-white/50 font-body text-xs mb-1.5 block tracking-wide">Upload CV / Resume</label>
                <div className="border-2 border-dashed border-dark-600 rounded-xl p-6 text-center hover:border-primary/40 transition-colors cursor-pointer">
                  <Upload size={24} className="text-white/20 mx-auto mb-2" />
                  <p className="text-white/30 font-body text-sm">Drag & drop or click to upload</p>
                  <p className="text-white/20 font-body text-xs mt-1">PDF, DOC up to 10 MB</p>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full justify-center py-4 text-base mt-2">
                Submit Application <Send size={18}/>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
OPPORTUNITIES_EOF

echo "  ✅  Opportunities.jsx"

# ══════════════════════════════════════════════
# DONE
# ══════════════════════════════════════════════
echo ""
echo "╔══════════════════════════════════════════════════════════╗"
echo "║                    ✅  ALL DONE!                        ║"
echo "╠══════════════════════════════════════════════════════════╣"
echo "║  Files written:                                         ║"
echo "║   DATA           src/data/portfolio.js                  ║"
echo "║                  src/data/testimonials.js               ║"
echo "║                  src/data/clients.js                    ║"
echo "║   COMPONENTS     src/components/shared/ProcessTimeline  ║"
echo "║                  src/components/shared/TestimonialsSlider║"
echo "║                  src/components/shared/PortfolioSlider  ║"
echo "║                  src/components/shared/ClientsGrid      ║"
echo "║   SERVICE PAGES  Branding, Advertising, Photography     ║"
echo "║                  Events, FilmMaking, WebDevelopment     ║"
echo "║                  Music, Consultation                    ║"
echo "║   OTHER PAGES    Contact, Opportunities                 ║"
echo "╠══════════════════════════════════════════════════════════╣"
echo "║  Next steps:                                            ║"
echo "║   npm run dev                                           ║"
echo "╚══════════════════════════════════════════════════════════╝"
echo ""
