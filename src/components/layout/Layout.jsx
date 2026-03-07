import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../shared/ScrollToTop'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-tertiary">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
