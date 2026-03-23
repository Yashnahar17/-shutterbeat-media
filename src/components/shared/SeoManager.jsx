import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE_URL, getSeoForPath } from '../../seo'

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    Object.entries(attributes).forEach(([key, value]) => {
      if (key !== 'content') element.setAttribute(key, value)
    })
    document.head.appendChild(element)
  }
  element.setAttribute('content', attributes.content)
}

export default function SeoManager() {
  const location = useLocation()
  const seo = getSeoForPath(location.pathname)

  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${seo.canonicalPath}`

    document.title = seo.title

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: seo.description,
    })
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: seo.title,
    })
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: seo.description,
    })
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    })
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: seo.title,
    })
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: seo.description,
    })

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)
  }, [location.pathname, seo.canonicalPath, seo.description, seo.title])

  return null
}
