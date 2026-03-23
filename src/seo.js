export const SITE_NAME = 'ShutterBeat Media'
const siteUrlFromEnv =
  typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.VITE_SITE_URL : process.env.SITE_URL
export const SITE_URL =
  (siteUrlFromEnv || 'https://shutterbeat-media.com').replace(/\/$/, '')
export const DEFAULT_TITLE = `${SITE_NAME} | Creative Agency in Pune`
export const DEFAULT_DESCRIPTION =
  'ShutterBeat Media is a creative agency in Pune offering consultation, branding, marketing and advertising, web development, photography and film making, and event and artist management.'

export const SEO_BY_PATH = {
  '/': {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonicalPath: '/',
  },
  '/about': {
    title: `About | ${SITE_NAME}`,
    description:
      'Learn about ShutterBeat Media, our creative approach, and the team behind our branding, marketing, web, photography, film, and event services in Pune.',
    canonicalPath: '/about',
  },
  '/services': {
    title: `Services | ${SITE_NAME}`,
    description:
      'Explore ShutterBeat Media services including consultation, branding, marketing and advertising, web development, photography and film making, and event and artist management.',
    canonicalPath: '/services',
  },
  '/services/consultation': {
    title: `Consultation Services | ${SITE_NAME}`,
    description:
      'Strategic consultation services for brand positioning, go-to-market planning, digital growth, and creative direction.',
    canonicalPath: '/services/consultation',
  },
  '/services/branding': {
    title: `Branding Services | ${SITE_NAME}`,
    description:
      'Build a memorable brand with identity design, visual systems, brand guidelines, packaging, and rollout support.',
    canonicalPath: '/services/branding',
  },
  '/services/advertising': {
    title: `Marketing and Advertising | ${SITE_NAME}`,
    description:
      'Performance-driven marketing and advertising campaigns across digital, social, video, print, and out-of-home channels.',
    canonicalPath: '/services/advertising',
  },
  '/services/web-development': {
    title: `Web Development | ${SITE_NAME}`,
    description:
      'Custom websites, e-commerce stores, CMS builds, SEO-ready pages, and UI-focused development for growing brands.',
    canonicalPath: '/services/web-development',
  },
  '/services/photography': {
    title: `Photography and Film Making | ${SITE_NAME}`,
    description:
      'Photography and film making services for weddings, brands, products, campaigns, events, and visual storytelling.',
    canonicalPath: '/services/photography',
  },
  '/services/events': {
    title: `Event and Artist Management | ${SITE_NAME}`,
    description:
      'End-to-end event and artist management for weddings, corporate events, brand activations, public events, and live experiences.',
    canonicalPath: '/services/events',
  },
  '/services/music': {
    title: `Music Services | ${SITE_NAME}`,
    description:
      'Music production, scoring, audio identity, and artist support services from ShutterBeat Media.',
    canonicalPath: '/services/music',
  },
  '/portfolio': {
    title: `Portfolio | ${SITE_NAME}`,
    description:
      'Browse ShutterBeat Media projects across branding, marketing, web development, photography, film making, consultation, and events.',
    canonicalPath: '/portfolio',
  },
  '/contact': {
    title: `Contact | ${SITE_NAME}`,
    description:
      'Contact ShutterBeat Media to discuss consultation, branding, marketing and advertising, web development, photography and film making, or event and artist management.',
    canonicalPath: '/contact',
  },
  '/career': {
    title: `Careers | ${SITE_NAME}`,
    description:
      'Explore careers and creative opportunities at ShutterBeat Media for designers, developers, marketers, photographers, and editors.',
    canonicalPath: '/career',
  },
  '/carrier': {
    title: `Careers | ${SITE_NAME}`,
    description:
      'Explore careers and creative opportunities at ShutterBeat Media for designers, developers, marketers, photographers, and editors.',
    canonicalPath: '/career',
  },
  '/opportunities': {
    title: `Careers | ${SITE_NAME}`,
    description:
      'Explore careers and creative opportunities at ShutterBeat Media for designers, developers, marketers, photographers, and editors.',
    canonicalPath: '/career',
  },
  '/policies': {
    title: `Policies | ${SITE_NAME}`,
    description:
      'Read the privacy policy, terms, cookie policy, accessibility statement, and related legal policies for ShutterBeat Media.',
    canonicalPath: '/policies',
  },
}

export function getSeoForPath(pathname) {
  return (
    SEO_BY_PATH[pathname] ?? {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      canonicalPath: pathname,
    }
  )
}
