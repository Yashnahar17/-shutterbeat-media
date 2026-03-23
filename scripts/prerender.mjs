import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { INDEXABLE_ROUTES } from '../src/site-routes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')
const serverEntryUrl = pathToFileURL(path.join(distDir, 'server', 'entry-server.js')).href

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8')
const { render } = await import(serverEntryUrl)

function applySeo(html, seo) {
  let nextHtml = html

  nextHtml = nextHtml.replace(/<title>.*?<\/title>/s, `<title>${seo.title}</title>`)

  const dynamicTagPatterns = [
    /<meta\s+name="description"[^>]*>\s*/g,
    /<meta\s+property="og:title"[^>]*>\s*/g,
    /<meta\s+property="og:description"[^>]*>\s*/g,
    /<meta\s+property="og:url"[^>]*>\s*/g,
    /<meta\s+name="twitter:title"[^>]*>\s*/g,
    /<meta\s+name="twitter:description"[^>]*>\s*/g,
    /<link rel="canonical"[^>]*>\s*/g,
  ]

  for (const pattern of dynamicTagPatterns) {
    nextHtml = nextHtml.replace(pattern, '')
  }

  const seoBlock = [
    `<meta name="description" content="${seo.description}">`,
    `<meta property="og:title" content="${seo.title}">`,
    `<meta property="og:description" content="${seo.description}">`,
    `<meta property="og:url" content="${seo.canonicalUrl}">`,
    `<meta name="twitter:title" content="${seo.title}">`,
    `<meta name="twitter:description" content="${seo.description}">`,
    `<link rel="canonical" href="${seo.canonicalUrl}">`,
  ].join('\n    ')

  nextHtml = nextHtml.replace('</head>', `    ${seoBlock}\n  </head>`)

  return nextHtml
}

for (const { path: routePath } of INDEXABLE_ROUTES) {
  const { appHtml, seo } = render(routePath)
  const rendered = applySeo(
    template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`),
    seo
  )

  const outputPath =
    routePath === '/'
      ? path.join(distDir, 'index.html')
      : path.join(distDir, routePath.replace(/^\//, ''), 'index.html')

  await fs.mkdir(path.dirname(outputPath), { recursive: true })
  await fs.writeFile(outputPath, rendered, 'utf8')
}

await fs.rm(path.join(distDir, 'server'), { recursive: true, force: true })
