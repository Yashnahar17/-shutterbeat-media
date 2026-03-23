import { BrowserRouter } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AppRoutes from './AppRoutes'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  )
}
