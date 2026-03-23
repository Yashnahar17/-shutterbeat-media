import { Link } from 'react-router-dom'
import { Instagram, Facebook, Linkedin, Youtube, Twitter, MapPin, Phone, Mail } from 'lucide-react'
import { visibleServices } from '../../data/services'

const LEGAL_LINKS = [
  { label: 'Privacy Policy',               href: '/policies#privacy' },
  { label: 'Terms & Conditions',           href: '/policies#terms' },
  { label: 'Cookie Policy',                href: '/policies#cookies' },
  { label: 'Intellectual Property',        href: '/policies#ip' },
  { label: 'Data Processing & Retention',  href: '/policies#data-retention' },
  { label: 'Accessibility Statement',      href: '/policies#accessibility' },
  { label: 'Disclosure Policy',            href: '/policies#disclosure' },
  { label: 'Applicant Data Notice',        href: '/policies#applicant' },
]

const SOCIALS = [
  { Icon: Instagram, href: 'https://www.instagram.com', label: 'Instagram', hover: 'hover:text-secondary hover:border-secondary/40' },
  { Icon: Facebook,  href: 'https://www.facebook.com',  label: 'Facebook',  hover: 'hover:text-secondary hover:border-secondary/40' },
  { Icon: Linkedin,  href: 'https://www.linkedin.com',  label: 'LinkedIn',  hover: 'hover:text-secondary  hover:border-secondary/40'  },
  { Icon: Youtube,   href: 'https://www.youtube.com',   label: 'YouTube',   hover: 'hover:text-primary  hover:border-secondary/40'  },
  { Icon: Twitter,   href: 'https://x.com',             label: 'Twitter',   hover: 'hover:text-secondary  hover:border-secondary/40'  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-primary/10">
      <div className="h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />

      {/* ── Main grid ─────────────────────────── */}
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-heading text-primary text-xl font-bold tracking-wide">
                Shutter<span className="text-secondary">Beat</span> Media
              </span>
            </Link>
            <p className="text-primary/72 font-body text-sm leading-relaxed mb-6 max-w-xs">
              A creative media studio based in Pune — photography, film, branding,
              advertising, events, consultation and digital strategy.
            </p>
            {/* Socials */}
            <div className="flex gap-2.5">
              {SOCIALS.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                  className={`w-11 h-11 rounded-xl bg-white border border-primary/12 shadow-[0_8px_20px_rgba(72,90,168,0.08)] flex items-center justify-center text-primary/72 transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:ring-offset-2 ${social.hover}`}>
                  <social.Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-primary text-sm mb-4 tracking-wide">Services</h4>
            <ul className="flex flex-col gap-2">
              {(visibleServices || []).map(s => (
                <li key={s.id}>
                  <Link to={`/services/${s.id}`}
                    className="text-primary/72 hover:text-primary font-body text-sm leading-6 transition-colors duration-150 inline-flex min-h-[44px] items-center">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading text-primary text-sm mb-4 tracking-wide">Company</h4>
            <ul className="flex flex-col gap-2">
              {[
                { label: 'Home',          href: '/'             },
                { label: 'About Us',      href: '/about'        },
                { label: 'Portfolio',     href: '/portfolio'    },
                { label: 'Career',        href: '/career'       },
                { label: 'Contact',       href: '/contact'      },
                { label: 'Policies',      href: '/policies'     },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link to={href}
                    className="text-primary/72 hover:text-primary font-body text-sm leading-6 transition-colors duration-150 inline-flex min-h-[44px] items-center">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-primary text-sm mb-4 tracking-wide">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2.5 text-primary/72 font-body text-sm leading-relaxed">
                <MapPin size={14} className="text-secondary shrink-0 mt-0.5" />
                Pune, Maharashtra, India
              </li>
              <li>
                <a href="tel:+919158664515"
                  className="flex items-center gap-2.5 text-primary/72 hover:text-primary font-body text-sm transition-colors min-h-[44px]">
                  <Phone size={14} className="text-secondary shrink-0" />
                  +91 91586 64515
                </a>
              </li>
              <li>
                <a href="tel:+919561422961"
                  className="flex items-center gap-2.5 text-primary/72 hover:text-primary font-body text-sm transition-colors min-h-[44px]">
                  <Phone size={14} className="text-secondary shrink-0" />
                  +91 95614 22961
                </a>
              </li>
              <li>
                <a href="mailto:shutterbeat.media@gmail.com"
                  className="flex items-center gap-2.5 text-primary/72 hover:text-primary font-body text-sm transition-colors break-all min-h-[44px]">
                  <Mail size={14} className="text-secondary shrink-0" />
                  shutterbeat.media@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Legal strip ───────────────────────── */}
      <div className="border-t border-tertiary">
        <div className="container-custom py-5 sm:py-6">
          {/* Policy links */}
          <div className="flex flex-wrap gap-x-4 gap-y-2.5 mb-4">
            {LEGAL_LINKS.map(({ label, href }) => (
              <Link key={href} to={href}
                className="text-primary/60 hover:text-primary font-body text-xs transition-colors duration-150">
                {label}
              </Link>
            ))}
          </div>
          {/* Copyright */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-primary/60 font-body text-xs">
              © {year} ShutterBeat Media. All rights reserved.
            </p>
            <p className="text-primary/55 font-body text-xs">
              Made with ❤️ in Pune, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
