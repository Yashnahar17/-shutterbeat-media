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
