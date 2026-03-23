import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navServices } from '../../data/services'

export default function Header() {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]      = useState(false)
  const [dropdownOpen, setDropdown]  = useState(false)

  function closeMenus() {
    setMenuOpen(false)
    setDropdown(false)
  }

  // Add background when scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeMenus()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const navLinks = [
    { label: 'Home',          href: '/' },
    { label: 'About',         href: '/about' },
    { label: 'Career', href: '/career' },
    { label: 'Contact',       href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/84 backdrop-blur-2xl shadow-[0_16px_34px_rgba(72,90,168,0.14)] border-b border-primary/10' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-[4.75rem] sm:h-[5.25rem]">

          {/* ── LOGO ─────────────────────────────── */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Go to homepage">
            <img
              src="/shutterbeat-logo.png"
              alt="ShutterBeat Media logo"
              className="w-11 h-11 rounded-xl object-cover border border-primary/20 shadow-[0_8px_18px_rgba(72,90,168,0.16)] transition-transform duration-200 group-hover:scale-[1.03]"
            />
            <span className="font-heading font-bold text-primary text-lg tracking-[0.02em] leading-none">
              Shutter<span className="text-secondary">Beat</span> Media
            </span>
          </Link>

          {/* ── DESKTOP NAV ──────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1.5 rounded-full border border-primary/15 bg-white/80 px-2 py-1.5 shadow-[0_10px_24px_rgba(72,90,168,0.09)] backdrop-blur">

            <NavLink to="/" end className={({isActive}) =>
              `text-sm font-body font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                isActive ? 'bg-primary/10 text-primary' : 'text-primary/80 hover:text-primary hover:bg-tertiary/60'
              }`}>
              Home
            </NavLink>

            <NavLink to="/about" className={({isActive}) =>
              `text-sm font-body font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                isActive ? 'bg-primary/10 text-primary' : 'text-primary/80 hover:text-primary hover:bg-tertiary/60'
              }`}>
              About
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
              onFocusCapture={() => setDropdown(true)}
              onBlurCapture={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setDropdown(false)
              }}>

              <div className="flex items-center rounded-full transition-all duration-200 hover:bg-tertiary/60">
                <NavLink
                  to="/services"
                  className={({isActive}) =>
                    `text-sm font-body font-medium pl-4 pr-2 py-2 rounded-l-full transition-all duration-200 ${
                      isActive ? 'bg-primary/10 text-primary' : 'text-primary/80 hover:text-primary'
                    }`}>
                  Services
                </NavLink>

                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={dropdownOpen}
                  aria-controls="desktop-services-menu"
                  onClick={() => setDropdown((open) => !open)}
                  className="flex items-center pr-4 pl-1 py-2 rounded-r-full text-primary/80 hover:text-primary transition-all duration-200">
                  <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <AnimatePresence>
                {dropdownOpen && (
                  <Motion.div
                    id="desktop-services-menu"
                    role="menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white border border-tertiary rounded-card shadow-card-hover overflow-hidden">
                    {navServices.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        onClick={closeMenus}
                        role="menuitem"
                        className="block px-5 py-3 text-sm text-primary/70 hover:text-primary hover:bg-tertiary/60 transition-colors duration-150 border-b border-tertiary last:border-0">
                        {service.label}
                      </Link>
                    ))}
                  </Motion.div>
                )}
              </AnimatePresence>
            </div>

            <NavLink to="/career" className={({isActive}) =>
              `text-sm font-body font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                isActive ? 'bg-primary/10 text-primary' : 'text-primary/80 hover:text-primary hover:bg-tertiary/60'
              }`}>
              Career
            </NavLink>

            <NavLink to="/contact" className={({isActive}) =>
              `text-sm font-body font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                isActive ? 'bg-primary/10 text-primary' : 'text-primary/80 hover:text-primary hover:bg-tertiary/60'
              }`}>
              Contact
            </NavLink>

          </nav>

          {/* ── CTA + HAMBURGER ──────────────────── */}
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5">
              Start a Project
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-primary p-2.5 min-w-[44px] min-h-[44px] rounded-lg hover:bg-tertiary/60 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* ── MOBILE MENU ──────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <Motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-tertiary overflow-hidden">
            <div className="container-custom py-5 sm:py-6 flex flex-col gap-1.5 max-h-[calc(100dvh-var(--header-offset))] overflow-y-auto overscroll-contain">

              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === '/'}
                  onClick={closeMenus}
                  className={({isActive}) =>
                    `px-4 py-3.5 rounded-lg text-base sm:text-sm font-body font-medium transition-colors min-h-[44px] flex items-center ${
                      isActive ? 'bg-primary/15 text-primary' : 'text-primary/80 hover:bg-tertiary/60 hover:text-primary'
                    }`}>
                  {link.label}
                </NavLink>
              ))}

              {/* Mobile Services Accordion */}
              <div>
                <div className="flex items-center gap-1">
                  <NavLink
                    to="/services"
                    onClick={closeMenus}
                    className={({isActive}) =>
                      `flex-1 px-4 py-3.5 rounded-lg text-base sm:text-sm font-body font-medium transition-colors min-h-[44px] flex items-center ${
                        isActive ? 'bg-primary/15 text-primary' : 'text-primary/80 hover:bg-tertiary/60 hover:text-primary'
                      }`}>
                    Services
                  </NavLink>

                  <button
                    type="button"
                    onClick={() => setDropdown(!dropdownOpen)}
                    aria-haspopup="menu"
                    aria-expanded={dropdownOpen}
                    aria-controls="mobile-services-menu"
                    className="px-4 py-3.5 rounded-lg text-primary/80 hover:bg-tertiary/60 hover:text-primary transition-colors min-h-[44px] flex items-center justify-center">
                    <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                <AnimatePresence>
                  {dropdownOpen && (
                    <Motion.div
                      id="mobile-services-menu"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-1 flex flex-col gap-1 overflow-hidden">
                      {navServices.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          onClick={closeMenus}
                          className="px-4 py-3 rounded-lg text-[15px] sm:text-sm text-primary/60 hover:text-primary hover:bg-tertiary/60 transition-colors min-h-[42px] flex items-center">
                          {service.label}
                        </Link>
                      ))}
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/contact" onClick={closeMenus} className="btn-primary mt-4 justify-center">
                Start a Project
              </Link>

            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
