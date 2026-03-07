import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navServices } from '../../data/services'

export default function Header() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]      = useState(false)
  const [dropdownOpen, setDropdown]  = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [location])

  // Add background when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Home',          href: '/' },
    { label: 'About',         href: '/about' },
    { label: 'Opportunities', href: '/opportunities' },
    { label: 'Contact',       href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-tertiary/95 backdrop-blur-md shadow-card border-b border-[#D7C2AD]' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">

          {/* ── LOGO ─────────────────────────────── */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Go to homepage">
            <img
              src="/shutterbeat-logo.png"
              alt="ShutterBeat logo"
              className="w-11 h-11 rounded-lg object-cover border border-primary/20 shadow-card transition-transform duration-200 group-hover:scale-[1.03]"
            />
            <span className="font-heading font-bold text-primary text-lg tracking-wide leading-none">
              Shutter<span className="text-secondary">Beat</span>
            </span>
          </Link>

          {/* ── DESKTOP NAV ──────────────────────── */}
          <nav className="hidden lg:flex items-center gap-8">

            <NavLink to="/" end className={({isActive}) =>
              `text-sm font-body font-medium transition-colors duration-200 ${
                isActive ? 'text-secondary' : 'text-primary/80 hover:text-primary'
              }`}>
              Home
            </NavLink>

            <NavLink to="/about" className={({isActive}) =>
              `text-sm font-body font-medium transition-colors duration-200 ${
                isActive ? 'text-secondary' : 'text-primary/80 hover:text-primary'
              }`}>
              About
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}>

              <button className="flex items-center gap-1 text-sm font-body font-medium text-primary/80 hover:text-primary transition-colors duration-200">
                Services
                <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-[#F4E8DC] border border-[#D7C2AD] rounded-card shadow-card-hover overflow-hidden">
                    {navServices.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="block px-5 py-3 text-sm text-primary/70 hover:text-primary hover:bg-[#E8D4BF] transition-colors duration-150 border-b border-[#D7C2AD] last:border-0">
                        {service.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/opportunities" className={({isActive}) =>
              `text-sm font-body font-medium transition-colors duration-200 ${
                isActive ? 'text-secondary' : 'text-primary/80 hover:text-primary'
              }`}>
              Opportunities
            </NavLink>

            <NavLink to="/contact" className={({isActive}) =>
              `text-sm font-body font-medium transition-colors duration-200 ${
                isActive ? 'text-secondary' : 'text-primary/80 hover:text-primary'
              }`}>
              Contact
            </NavLink>

          </nav>

          {/* ── CTA + HAMBURGER ──────────────────── */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden lg:inline-flex btn-primary text-sm py-2.5">
              Start a Project
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-primary p-2 rounded-lg hover:bg-[#E8D4BF] transition-colors"
              aria-label="Toggle menu">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* ── MOBILE MENU ──────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#F4E8DC] border-t border-[#D7C2AD] overflow-hidden">
            <div className="container-custom py-6 flex flex-col gap-1">

              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === '/'}
                  className={({isActive}) =>
                    `px-4 py-3 rounded-lg text-sm font-body font-medium transition-colors ${
                      isActive ? 'bg-primary/20 text-secondary' : 'text-primary/80 hover:bg-[#E8D4BF] hover:text-primary'
                    }`}>
                  {link.label}
                </NavLink>
              ))}

              {/* Mobile Services Accordion */}
              <div>
                <button
                  onClick={() => setDropdown(!dropdownOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-body font-medium text-primary/80 hover:bg-[#E8D4BF] hover:text-primary transition-colors">
                  Services
                  <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-1 flex flex-col gap-1 overflow-hidden">
                      {navServices.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="px-4 py-2.5 rounded-lg text-sm text-primary/60 hover:text-primary hover:bg-[#E8D4BF] transition-colors">
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/contact" className="btn-primary mt-4 justify-center">
                Start a Project
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
