# Security Guide

## Reporting

Report suspected vulnerabilities privately to `shutterbeat.media@gmail.com`.

## Production Security Controls

- Deploy behind a CDN/WAF with HTTPS-only enforcement
- Apply edge headers from `vercel.json` or `public/_headers`
- Configure Turnstile for all public forms
- Use server-side email delivery only
- Keep `ENABLE_RESUME_UPLOAD=false` until:
  - private object storage is configured
  - MIME/type validation is enforced
  - malware scanning is available
  - strict size limits are enforced

## API Security Model

- Same-origin requests only
- Server-side Zod validation
- Per-route in-memory rate limiting
- Request size limits
- Structured security logging
- No secrets in frontend code

## Recommended Next Steps

- Replace in-memory rate limiting with a shared store such as Redis/Upstash in production
- Send security logs to your SIEM or alerting platform via `LOG_WEBHOOK_URL`
- Add WAF rules for bot mitigation and geofencing as needed
- Enable object storage + malware scanning before accepting resumes
- Rotate API keys regularly and keep them out of the client bundle
