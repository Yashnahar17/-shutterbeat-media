#!/bin/bash

echo "📦 Creating all data files..."

# ── ABOUT ──────────────────────────────────────────────────────
cat > src/data/about.js << 'EOF'
export const aboutData = {
  intro: {
    heading: 'Who We Are',
    description: `ShutterBeat Media is a one-stop shop for all your media needs. Right from photography, film making, music, advertising and marketing to website development, application development, visual effects and much more! Just like our name implies, we offer you everything "From SHUTTER to the BEAT". We aim to make your business a brand that people will love working with. So let's capture all your memories and add some tune to your life.`,
  },
  vision: {
    heading: 'Vision',
    description: `We are an organization that strives to achieve a balance between an ethical work environment and encourage creativity with our employees to optimize productivity for our clients.`,
  },
  mission: {
    heading: 'Mission',
    description: `Our company exists to provide services to our clients that are affordable and functional, to make your business a brand people will love to work with.`,
  },
}
EOF

# ── SERVICES ───────────────────────────────────────────────────
cat > src/data/services.js << 'EOF'
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
    shortDesc: 'Being huge music enthusiasts ourselves we give artists all they need to showcase their talent to the world.',
    categories: ['Disk Jockey','Lyrics','Original Production','Compositions','Background Scores','Jingles'],
  },
  {
    id: 'events',
    title: 'Event & Artist Management',
    slug: '/services/events',
    icon: 'Calendar',
    shortDesc: 'We offer services like corporate events, wedding events, live performances of artists, bands and much more.',
    eventTypes: ['Weddings','Corporate Events','Music Concerts','Promotional Events','Social Events'],
    artistCategories: ['Film Makers','Graphic Designers','Tattoo Artists','Photographers','Film Makers'],
  },
  {
    id: 'film-making',
    title: 'Film Making',
    slug: '/services/film-making',
    icon: 'Film',
    shortDesc: 'We strive to send out a message through our films and curate original content. Right from ad films to music videos.',
    categories: ['Brand Coverage','Short Films','Documentaries','Weddings & Events','Showreels / Portfolios','Commercial Films','Advertisements & Endorsements','Official Music Videos'],
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

export const navServices = services.map(s => ({
  label: s.title,
  href:  s.slug,
}))
EOF

# ── CONTACT ────────────────────────────────────────────────────
cat > src/data/contact.js << 'EOF'
export const contactData = {
  phones: ['+91 9158664515', '+91 9561422961'],
  email: 'shutterbeat.media@gmail.com',
  address: 'Pune, Maharashtra, India',
  socials: {
    instagram: 'https://instagram.com/shutterbeatmedia',
    facebook:  'https://facebook.com/shutterbeatmedia',
    linkedin:  '#',
    youtube:   '#',
    twitter:   '#',
  },
  tagline: 'Putting the tech in your idea. Reach out to us to make your idea accessible to everyone in just a few taps.',
}
EOF

# ── TESTIMONIALS ───────────────────────────────────────────────
cat > src/data/testimonials.js << 'EOF'
export const testimonials = [
  {
    id: 1,
    name: 'Rahul Deshmukh',
    role: 'CEO, TechVentures Pune',
    text: 'ShutterBeat transformed our brand identity completely. Their creative approach and attention to detail is unmatched. Highly recommend their services.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Wedding Client',
    text: 'The photography team captured every emotion of our special day beautifully. The photos are absolutely stunning and we will cherish them forever.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Joshi',
    role: 'Marketing Head, RetailCo',
    text: 'Our advertising campaign ROI doubled after working with ShutterBeat. Extremely professional team with outstanding creative output.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sneha Patil',
    role: 'Event Organiser',
    text: 'They managed our 500-person corporate event flawlessly. Every single detail was perfectly executed. Will definitely work with them again.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Vikram Kulkarni',
    role: 'Independent Artist',
    text: 'ShutterBeat helped me record and publish my first original track. Their music team is incredibly talented and supportive.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Neha Gaikwad',
    role: 'Restaurant Owner',
    text: 'The food photography they did for our menu was absolutely mouth-watering. Our online orders increased by 40% after updating our visuals.',
    rating: 5,
  },
]
EOF

# ── TEAM ───────────────────────────────────────────────────────
cat > src/data/team.js << 'EOF'
export const team = [
  {
    id: 1,
    name: 'Yash Nahar',
    role: 'Founder & Creative Director',
    experience: '5+ Years',
    bio: 'Visionary behind ShutterBeat Media. Passionate about creativity, storytelling and building brands.',
    linkedin: '#',
    image: null,
  },
  {
    id: 2,
    name: 'Team Member',
    role: 'Lead Photographer',
    experience: '4+ Years',
    bio: 'Specialist in wedding, product and fashion photography with an eye for detail.',
    linkedin: '#',
    image: null,
  },
  {
    id: 3,
    name: 'Team Member',
    role: 'Film Director',
    experience: '3+ Years',
    bio: 'Expert in brand films, short films and music videos.',
    linkedin: '#',
    image: null,
  },
  {
    id: 4,
    name: 'Team Member',
    role: 'Digital Marketing Head',
    experience: '4+ Years',
    bio: 'Drives result-oriented advertising and social media campaigns.',
    linkedin: '#',
    image: null,
  },
]
EOF

# ── PORTFOLIO ──────────────────────────────────────────────────
cat > src/data/portfolio.js << 'EOF'
export const portfolio = [
  { id: 1, title: 'Wedding Story',     category: 'Photography', image: null, client: 'Private Client' },
  { id: 2, title: 'Brand Campaign',    category: 'Advertising', image: null, client: 'RetailCo' },
  { id: 3, title: 'Corporate Event',   category: 'Events',      image: null, client: 'TechVentures' },
  { id: 4, title: 'Music Video',       category: 'Film Making', image: null, client: 'Independent Artist' },
  { id: 5, title: 'Product Shoot',     category: 'Photography', image: null, client: 'Local Brand' },
  { id: 6, title: 'Short Film',        category: 'Film Making', image: null, client: 'ShutterBeat Original' },
  { id: 7, title: 'Social Media Pack', category: 'Advertising', image: null, client: 'Restaurant Chain' },
  { id: 8, title: 'Concert Coverage',  category: 'Events',      image: null, client: 'Music Festival' },
]

export const portfolioCategories = ['All', 'Photography', 'Advertising', 'Events', 'Film Making']
EOF

# ── ARTISTS ────────────────────────────────────────────────────
cat > src/data/artists.js << 'EOF'
export const artists = [
  {
    id: 1,
    name: 'Artist Name',
    category: 'Music',
    genre: 'Indie / Pop',
    bio: 'A passionate musician creating original compositions and background scores.',
    image: null,
    tracks: [],
    platforms: { spotify: '#', youtube: '#', instagram: '#' },
  },
  {
    id: 2,
    name: 'DJ Name',
    category: 'Disk Jockey',
    genre: 'EDM / Bollywood',
    bio: 'High energy DJ available for weddings, corporate events and concerts.',
    image: null,
    tracks: [],
    platforms: { instagram: '#', youtube: '#' },
  },
]
EOF

# ── JOBS ───────────────────────────────────────────────────────
cat > src/data/jobs.js << 'EOF'
export const jobs = [
  {
    id: 1,
    title: 'Freelance Photographer',
    location: 'Pune, Maharashtra',
    type: 'Freelance',
    description: 'Looking for talented photographers for weddings, events and product shoots.',
    requirements: ['2+ years experience', 'Own equipment', 'Portfolio required'],
  },
  {
    id: 2,
    title: 'Video Editor',
    location: 'Remote / Pune',
    type: 'Part-time',
    description: 'Skilled video editor for brand films, reels and YouTube content.',
    requirements: ['Premiere Pro / DaVinci Resolve', 'Motion graphics a plus', 'Showreel required'],
  },
  {
    id: 3,
    title: 'Digital Marketing Executive',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    description: 'Manage social media, paid ads and content strategy for our clients.',
    requirements: ['Meta & Google Ads experience', 'Content writing skills', 'Analytics knowledge'],
  },
  {
    id: 4,
    title: 'Web Developer',
    location: 'Remote',
    type: 'Freelance',
    description: 'Build and maintain client websites using React and modern web technologies.',
    requirements: ['React / Next.js', 'Tailwind CSS', 'GitHub proficiency'],
  },
]
EOF

# ── CLIENTS ────────────────────────────────────────────────────
cat > src/data/clients.js << 'EOF'
export const clients = [
  { id: 1, name: 'Client One',   logo: null, website: '#' },
  { id: 2, name: 'Client Two',   logo: null, website: '#' },
  { id: 3, name: 'Client Three', logo: null, website: '#' },
  { id: 4, name: 'Client Four',  logo: null, website: '#' },
  { id: 5, name: 'Client Five',  logo: null, website: '#' },
  { id: 6, name: 'Client Six',   logo: null, website: '#' },
]
EOF

# ── AWARDS ─────────────────────────────────────────────────────
cat > src/data/awards.js << 'EOF'
export const awards = [
  {
    id: 1,
    title: 'Best Creative Agency',
    year: '2024',
    organization: 'Pune Business Awards',
    description: 'Recognized for outstanding creative campaigns.',
  },
  {
    id: 2,
    title: 'Top Photography Studio',
    year: '2023',
    organization: 'Maharashtra Media Awards',
    description: 'Awarded for excellence in wedding and event photography.',
  },
]
EOF

echo "✅ All data files created successfully!"
echo ""
echo "Files created:"
echo "  src/data/about.js"
echo "  src/data/services.js"
echo "  src/data/contact.js"
echo "  src/data/testimonials.js"
echo "  src/data/team.js"
echo "  src/data/portfolio.js"
echo "  src/data/artists.js"
echo "  src/data/jobs.js"
echo "  src/data/clients.js"
echo "  src/data/awards.js"
