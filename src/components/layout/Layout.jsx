import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../shared/ScrollToTop'
import SeoManager from '../shared/SeoManager'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-clip">
      <SeoManager />
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />
      <main id="main-content" className="flex-1 w-full">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
