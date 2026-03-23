import zenfitLogo from '../assets/logos/clients/zenfit-apparel.svg'
import freshbiteLogo from '../assets/logos/clients/freshbite-restaurant.svg'
import greenlifeLogo from '../assets/logos/clients/greenlife-organics.svg'
import quickdeliverLogo from '../assets/logos/clients/quickdeliver.svg'
import edusparkLogo from '../assets/logos/clients/eduspark-academy.svg'
import retailcoLogo from '../assets/logos/clients/retailco.svg'

const clientBranding = {
  'ZenFit Apparel': {
    website: 'https://www.google.com/search?q=ZenFit+Apparel',
    logo: zenfitLogo,
  },
  'FreshBite Restaurant': {
    website: 'https://www.google.com/search?q=FreshBite+Restaurant',
    logo: freshbiteLogo,
  },
  'GreenLife Organics': {
    website: 'https://www.google.com/search?q=GreenLife+Organics',
    logo: greenlifeLogo,
  },
  QuickDeliver: {
    website: 'https://www.google.com/search?q=QuickDeliver',
    logo: quickdeliverLogo,
  },
  'EduSpark Academy': {
    website: 'https://www.google.com/search?q=EduSpark+Academy',
    logo: edusparkLogo,
  },
  RetailCo: {
    website: 'https://www.google.com/search?q=RetailCo',
    logo: retailcoLogo,
  },
}

const withSearchLink = (names) =>
  names.map((name, index) => ({
    id: index + 1,
    name,
    website: clientBranding[name]?.website || `https://www.google.com/search?q=${encodeURIComponent(name)}`,
    logo: clientBranding[name]?.logo || null,
  }))

export const clientsByService = {
  photography: withSearchLink([
    'Sharma Family',
    'FreshBite Restaurant',
    'ZenFit Apparel',
    'Skyline Realty',
    'DriveX Motors',
    'PuneFest Org',
  ]),
  advertising: withSearchLink([
    'RetailCo',
    'QuickDeliver',
    'EduSpark Academy',
    'GreenLife Organics',
    'DriveX Motors',
    'ZenFit Apparel',
  ]),
  events: withSearchLink([
    'TechVentures Pune',
    'Patil Family',
    'PuneFest Org',
    'DriveX Motors',
    'RetailCo',
    'GreenLife Organics',
  ]),
  'film-making': withSearchLink([
    'DriveX Motors',
    'EduSpark Academy',
    'Riya Kapoor',
    'PuneFest Org',
    'RetailCo',
    'ZenFit Apparel',
  ]),
  branding: withSearchLink([
    'ZenFit Apparel',
    'FreshBite Restaurant',
    'GreenLife Organics',
    'QuickDeliver',
    'EduSpark Academy',
    'RetailCo',
  ]),
  'web-development': withSearchLink([
    'DriveX Motors',
    'FreshBite Restaurant',
    'EduSpark Academy',
    'GreenLife Organics',
    'RetailCo',
    'QuickDeliver',
  ]),
  music: withSearchLink([
    'Neha Sharma',
    'DJ Karan',
    'RetailCo',
    'PuneFest Org',
    'ZenFit Apparel',
    'GreenLife Organics',
  ]),
  consultation: withSearchLink([
    'ZenFit Apparel',
    'EduSpark Academy',
    'GreenLife Organics',
    'QuickDeliver',
    'DriveX Motors',
    'RetailCo',
  ]),
}

export const clients = clientsByService.branding
