# ShutterBeat Media

Static React/Vite marketing site with prerendered SEO pages and secure serverless form endpoints.

## Security Features

- Prerendered public pages for SEO
- Secure serverless endpoints for `contact` and `careers`
- Shared Zod validation on client and server
- Turnstile CAPTCHA verification
- Per-route IP rate limiting
- Same-origin enforcement for API submissions
- Secure email delivery through server-side provider integration
- Structured security logging hooks
- Edge security headers via `vercel.json` and `public/_headers`
- CI security scanning with npm audit, OSV, Gitleaks, and CodeQL

## Required Environment Variables

Copy [`.env.example`](./.env.example) and configure:

- `VITE_SITE_URL`
- `VITE_TURNSTILE_SITE_KEY`
- `SITE_URL`
- `ALLOWED_ORIGINS`
- `TURNSTILE_SECRET_KEY`
- `RESEND_API_KEY`
- `FROM_EMAIL`
- `CONTACT_TO_EMAIL`
- `CAREERS_TO_EMAIL`
- `LOG_WEBHOOK_URL`
- `ENABLE_RESUME_UPLOAD`

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

This will:

- generate `robots.txt` and `sitemap.xml`
- build the client bundle
- build the server render bundle
- prerender indexable routes to static HTML

## Security Checks

```bash
npm run security:check
```

## Resume Uploads

Resume uploads are intentionally disabled until private object storage and malware scanning are configured. The current career form only accepts structured application data and portfolio links.
