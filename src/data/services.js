export const services = [
  {
    id: 'photography',
    title: 'Photography',
    slug: '/services/photography',
    icon: 'Camera',
    shortDesc: 'We love capturing your special moments for you to cherish forever. Right from wedding photography to product photography.',
    categories: ['Wedding','Product / Brand','Food','Architectural','Events','Fashion','Automotive','Portfolios','Wildlife'],
  },
  {
    id: 'music',
    title: 'Music',
    slug: '/services/music',
    icon: 'Music',
    hidden: true,
    shortDesc: 'Being huge music enthusiasts ourselves we give artists all they need to showcase their talent to the world.',
    categories: ['Disk Jockey','Lyrics','Original Production','Compositions','Background Scores','Jingles'],
  },
  {
    id: 'events',
    title: 'Event & Artist Management',
    slug: '/services/events',
    icon: 'Calendar',
    shortDesc: 'We offer corporate events, wedding events, branded experiences and end-to-end event production with tight coordination.',
    eventTypes: ['Weddings','Corporate Events','Promotional Events','Exhibitions','Social Events'],
    artistCategories: ['Film Makers','Graphic Designers','Tattoo Artists','Photographers','Film Makers'],
  },
  {
    id: 'film-making',
    title: 'Film Making',
    slug: '/services/film-making',
    icon: 'Film',
    shortDesc: 'We strive to send out a message through our films and curate original content, from ad films to documentaries and brand stories.',
    categories: ['Brand Coverage','Short Films','Documentaries','Weddings & Events','Showreels / Portfolios','Commercial Films','Advertisements & Endorsements','Campaign Films'],
  },
  {
    id: 'advertising',
    title: 'Advertising & Marketing',
    slug: '/services/advertising',
    icon: 'Megaphone',
    shortDesc: 'We bring effective and result-oriented advertising and marketing campaigns to grow your business.',
    categories: ['Social Media Coverage','Photography & Videography Coverage','Official Media Coverage','Venue & Resource Management','Print Media Coverage','Press & Media Coverage','Institutional Coverage','OOH Corporate Coverage'],
  },
  {
    id: 'web-development',
    title: 'Web & App Development',
    slug: '/services/web-development',
    icon: 'Code',
    shortDesc: 'Putting the tech in your idea. Reach out to us to make your idea accessible to everyone in just a few taps.',
    categories: ['Static Websites','Dynamic Websites','E-Commerce'],
  },
  {
    id: 'branding',
    title: 'Branding',
    slug: '/services/branding',
    icon: 'Layers',
    shortDesc: 'Transform your business into a brand people love. We craft identities that resonate, inspire, and endure.',
    categories: ['Brand Strategy','Visual Identity','Logo Design','Brand Guidelines'],
  },
  {
    id: 'consultation',
    title: 'Business Consultation',
    slug: '/services/consultation',
    icon: 'Briefcase',
    shortDesc: 'Strategic guidance to grow your business. From go-to-market strategy to digital transformation.',
    categories: ['Brand Strategy','Digital Transformation','Go-To-Market Strategy','Monetization Models'],
  },
]

const serviceById = Object.fromEntries(services.map((service) => [service.id, service]))

export const visibleServices = [
  {
    ...serviceById.consultation,
    title: 'Consultation',
  },
  {
    ...serviceById.branding,
  },
  {
    ...serviceById.advertising,
    title: 'Marketing and Advertising',
  },
  {
    ...serviceById['web-development'],
    title: 'Web Development',
  },
  {
    ...serviceById.photography,
    title: 'Photography and Film Making',
    shortDesc: 'Photography and film making services crafted to capture, shape and elevate your story across every frame.',
    categories: ['Photography', 'Film Making', 'Brand Films', 'Commercial Shoots'],
  },
  {
    ...serviceById.events,
    title: 'Event and Artist Management',
  },
]

export const navServices = visibleServices.map(s => ({
  label: s.title,
  href:  s.slug,
}))
