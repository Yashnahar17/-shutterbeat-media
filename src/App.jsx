import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import Layout from './components/layout/Layout'
import Loader from './components/ui/Loader'
import Policies from './pages/Policies'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'


const Home          = lazy(() => import('./pages/Home'))
const About         = lazy(() => import('./pages/About'))
const Contact       = lazy(() => import('./pages/Contact'))
const Opportunities = lazy(() => import('./pages/Opportunities'))
const Photography    = lazy(() => import('./pages/services/Photography'))
const Music          = lazy(() => import('./pages/services/Music'))
const Events         = lazy(() => import('./pages/services/Events'))
const FilmMaking     = lazy(() => import('./pages/services/FilmMaking'))
const Advertising    = lazy(() => import('./pages/services/Advertising'))
const WebDevelopment = lazy(() => import('./pages/services/WebDevelopment'))
const Consultation   = lazy(() => import('./pages/services/Consultation'))
const Branding       = lazy(() => import('./pages/services/Branding'))

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/"                         element={<Home />} />
            <Route path="/about"                    element={<About />} />
            <Route path="/contact"                  element={<Contact />} />
            <Route path="/opportunities"            element={<Opportunities />} />
            <Route path="/services/photography"     element={<Photography />} />
            <Route path="/services/music"           element={<Music />} />
            <Route path="/services/events"          element={<Events />} />
            <Route path="/services/film-making"     element={<FilmMaking />} />
            <Route path="/services/advertising"     element={<Advertising />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/consultation"    element={<Consultation />} />
            <Route path="/services/branding"        element={<Branding />} />
            <Route path="/portfolio"                element={<Portfolio />} />
            <Route path="/policies"                 element={<Policies />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={
              <div className="min-h-screen flex items-center justify-center">
                <h1 className="font-heading text-primary text-6xl">404</h1>
              </div>
            }/>
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}
