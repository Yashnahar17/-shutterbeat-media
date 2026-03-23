import photographyWedding from '../assets/images/site/photography-wedding.jpg'
import photographyFood from '../assets/images/site/photography-food.jpg'
import marketingAnalytics from '../assets/images/site/marketing-analytics.jpg'
import eventsConference from '../assets/images/site/events-conference.jpg'
import filmProduction from '../assets/images/site/film-production.jpg'
import brandingDesign from '../assets/images/site/branding-design.jpg'
import webDevelopment from '../assets/images/site/web-development.jpg'
import consultationMeeting from '../assets/images/site/consultation-meeting.jpg'

export const portfolioCategories = [
  'All', 'Photography', 'Advertising', 'Events',
  'Film Making', 'Branding', 'Web Development', 'Consultation',
]

export const portfolio = [
  // Photography
  { id: 1, title: 'Sharma Wedding', category: 'Photography', image: photographyWedding, client: 'Sharma Family', desc: 'Full-day candid wedding coverage across 3 venues.' },
  { id: 2, title: 'FreshBite Menu Shoot', category: 'Photography', image: photographyFood, client: 'FreshBite Restaurant', desc: 'Product and food photography for new menu launch.' },
  { id: 3, title: 'ZenFit Brand Shoot', category: 'Photography', image: photographyWedding, client: 'ZenFit Apparel', desc: 'Fashion and lifestyle photography for e-commerce.' },
  { id: 4, title: 'Skyline Realty Shots', category: 'Photography', image: photographyFood, client: 'Skyline Realty', desc: 'Architectural and interior photography for listings.' },

  // Advertising
  { id: 5, title: 'RetailCo Festive Campaign', category: 'Advertising', image: marketingAnalytics, client: 'RetailCo', desc: 'Diwali campaign across digital, print and OOH - 3x ROAS.' },
  { id: 6, title: 'QuickDeliver App Launch', category: 'Advertising', image: marketingAnalytics, client: 'QuickDeliver', desc: 'Go-to-market ad campaign reaching 2M impressions in week 1.' },
  { id: 7, title: 'EduSpark Admissions Drive', category: 'Advertising', image: marketingAnalytics, client: 'EduSpark Academy', desc: 'Performance ads driving 400+ qualified leads in 30 days.' },
  { id: 8, title: 'GreenLife OOH Campaign', category: 'Advertising', image: marketingAnalytics, client: 'GreenLife Organics', desc: 'Hoarding and transit campaign across 5 Pune locations.' },

  // Events
  { id: 9, title: 'TechSummit 2025', category: 'Events', image: eventsConference, client: 'TechVentures Pune', desc: '500-person corporate summit with 12 speakers and live stream.' },
  { id: 10, title: 'Patil Wedding Reception', category: 'Events', image: eventsConference, client: 'Patil Family', desc: 'Luxury wedding reception for 800 guests at Marriott Pune.' },
  { id: 11, title: 'Pune Music Carnival', category: 'Events', image: eventsConference, client: 'PuneFest Org', desc: '2-day music festival with 8 artists and 2,000 attendees.', hidden: true },
  { id: 12, title: 'AutoExpo Brand Activation', category: 'Events', image: eventsConference, client: 'DriveX Motors', desc: 'Brand activation booth at Auto Expo with live demos.' },

  // Film Making
  { id: 13, title: 'DriveX Brand Film', category: 'Film Making', image: filmProduction, client: 'DriveX Motors', desc: '60-second cinematic brand film for national TV and YouTube.' },
  { id: 14, title: 'Voices of Pune - Short Film', category: 'Film Making', image: filmProduction, client: 'ShutterBeat Media Original', desc: 'Award-shortlisted short film on Pune street artists.' },
  { id: 15, title: 'Riya x Aryan Music Video', category: 'Film Making', image: filmProduction, client: 'Riya Kapoor (Artist)', desc: 'Cinematic music video with 500K+ YouTube views.', hidden: true },
  { id: 16, title: 'EduSpark Corporate Film', category: 'Film Making', image: filmProduction, client: 'EduSpark Academy', desc: '3-minute corporate documentary film for investor pitch.' },

  // Branding
  { id: 17, title: 'ZenFit Brand Identity', category: 'Branding', image: brandingDesign, client: 'ZenFit Apparel', desc: 'Full brand identity: logo, palette, typography and guidelines.' },
  { id: 18, title: 'FreshBite Rebrand', category: 'Branding', image: brandingDesign, client: 'FreshBite Restaurant', desc: 'Complete restaurant rebrand - menus, signage and digital assets.' },
  { id: 19, title: 'GreenLife Packaging', category: 'Branding', image: brandingDesign, client: 'GreenLife Organics', desc: 'Eco-friendly product packaging design across 12 SKUs.' },
  { id: 20, title: 'QuickDeliver Visual System', category: 'Branding', image: brandingDesign, client: 'QuickDeliver', desc: 'App icon, onboarding illustrations and brand collateral kit.' },

  // Web Development
  { id: 21, title: 'DriveX Showroom Website', category: 'Web Development', image: webDevelopment, client: 'DriveX Motors', desc: 'Custom React website with 3D model viewer and booking system.' },
  { id: 22, title: 'FreshBite Online Ordering', category: 'Web Development', image: webDevelopment, client: 'FreshBite Restaurant', desc: 'WooCommerce store with table reservation and loyalty module.' },
  { id: 23, title: 'EduSpark LMS Portal', category: 'Web Development', image: webDevelopment, client: 'EduSpark Academy', desc: 'Custom LMS with course builder, video hosting and payments.' },
  { id: 24, title: 'GreenLife E-Commerce', category: 'Web Development', image: webDevelopment, client: 'GreenLife Organics', desc: 'Shopify store with subscription model and eco-score widget.' },

  // Consultation
  { id: 25, title: 'ZenFit Go-To-Market', category: 'Consultation', image: consultationMeeting, client: 'ZenFit Apparel', desc: 'GTM strategy enabling INR 1Cr revenue in the first 3 months.' },
  { id: 26, title: 'EduSpark Digital Transformation', category: 'Consultation', image: consultationMeeting, client: 'EduSpark Academy', desc: 'Moved 100% of operations online - 40% cost reduction achieved.' },
  { id: 27, title: 'GreenLife Brand Audit', category: 'Consultation', image: consultationMeeting, client: 'GreenLife Organics', desc: 'Brand audit leading to full rebrand and 2x social following.' },
]

export const visiblePortfolio = portfolio.filter((item) => !item.hidden && item.category !== 'Music')

export const visiblePortfolioCategories = portfolioCategories.filter((category) => category !== 'Music')
