import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import Layout from './components/layout/Layout'
import AppErrorBoundary from './components/ui/AppErrorBoundary'
import AppRoutes from './AppRoutes'
import { SITE_URL, getSeoForPath } from './seo'

export function render(url) {
  const seo = getSeoForPath(url)
  const appHtml = renderToStaticMarkup(
    <React.StrictMode>
      <StaticRouter location={url}>
        <AppErrorBoundary>
          <Layout>
            <AppRoutes />
          </Layout>
        </AppErrorBoundary>
      </StaticRouter>
    </React.StrictMode>
  )

  return {
    appHtml,
    seo: {
      ...seo,
      canonicalUrl: `${SITE_URL}${seo.canonicalPath}`,
    },
  }
}
