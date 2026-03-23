import { Routes, Route } from 'react-router-dom'
import Policies from './pages/Policies'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Opportunities from './pages/Opportunities'
import Photography from './pages/services/Photography'
import Music from './pages/services/Music'
import Events from './pages/services/Events'
import FilmMaking from './pages/services/FilmMaking'
import Advertising from './pages/services/Advertising'
import WebDevelopment from './pages/services/WebDevelopment'
import Consultation from './pages/services/Consultation'
import Branding from './pages/services/Branding'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/carrier" element={<Opportunities />} />
      <Route path="/career" element={<Opportunities />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/services/photography" element={<Photography />} />
      <Route path="/services/music" element={<Music />} />
      <Route path="/services/events" element={<Events />} />
      <Route path="/services/film-making" element={<FilmMaking />} />
      <Route path="/services/advertising" element={<Advertising />} />
      <Route path="/services/web-development" element={<WebDevelopment />} />
      <Route path="/services/consultation" element={<Consultation />} />
      <Route path="/services/branding" element={<Branding />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/policies" element={<Policies />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="*"
        element={
          <div className="min-h-screen flex items-center justify-center">
            <h1 className="font-heading text-primary text-6xl">404</h1>
          </div>
        }
      />
    </Routes>
  )
}
