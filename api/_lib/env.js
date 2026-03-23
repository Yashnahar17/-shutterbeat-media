const requiredInProduction = (name) => {
  const value = process.env[name]
  if (process.env.NODE_ENV === 'production' && !value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value ?? ''
}

export const serverEnv = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  siteUrl: requiredInProduction('SITE_URL') || 'http://localhost:5173',
  allowedOrigins: (process.env.ALLOWED_ORIGINS || process.env.SITE_URL || 'http://localhost:5173')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean),
  turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY ?? '',
  turnstileSiteKey: process.env.VITE_TURNSTILE_SITE_KEY ?? '',
  resendApiKey: process.env.RESEND_API_KEY ?? '',
  fromEmail: process.env.FROM_EMAIL ?? 'security@shutterbeat-media.com',
  contactToEmail: process.env.CONTACT_TO_EMAIL ?? process.env.FROM_EMAIL ?? '',
  careersToEmail: process.env.CAREERS_TO_EMAIL ?? process.env.FROM_EMAIL ?? '',
  logWebhookUrl: process.env.LOG_WEBHOOK_URL ?? '',
  enableResumeUpload: process.env.ENABLE_RESUME_UPLOAD === 'true',
}
