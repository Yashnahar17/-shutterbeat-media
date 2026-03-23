import crypto from 'node:crypto'
import { serverEnv } from './env.js'

export class HttpError extends Error {
  constructor(status, message, details) {
    super(message)
    this.status = status
    this.details = details
  }
}

export function getSecurityHeaders(origin = serverEnv.siteUrl) {
  const csp = [
    "default-src 'self'",
    "base-uri 'self'",
    "frame-ancestors 'none'",
    "form-action 'self'",
    "img-src 'self' data: https://source.unsplash.com",
    "script-src 'self' https://challenges.cloudflare.com",
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self' data:",
    `connect-src 'self' ${origin} https://challenges.cloudflare.com https://api.resend.com`,
    "frame-src https://challenges.cloudflare.com",
    'upgrade-insecure-requests',
  ].join('; ')

  return {
    'Content-Security-Policy': csp,
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains; preload',
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
    'Cache-Control': 'no-store',
  }
}

export function setResponseHeaders(res, extraHeaders = {}) {
  const headers = { ...getSecurityHeaders(), ...extraHeaders }
  Object.entries(headers).forEach(([key, value]) => res.setHeader(key, value))
}

export function getClientIp(req) {
  const forwardedFor = req.headers['x-forwarded-for']
  const raw = Array.isArray(forwardedFor) ? forwardedFor[0] : forwardedFor
  return raw?.split(',')[0]?.trim() || req.socket?.remoteAddress || '0.0.0.0'
}

export function hashIp(ip) {
  return crypto.createHash('sha256').update(ip).digest('hex').slice(0, 16)
}

export function getOrigin(req) {
  const origin = req.headers.origin || req.headers.referer
  if (!origin) return null

  try {
    return new URL(origin).origin
  } catch {
    return null
  }
}

export function ensureAllowedOrigin(req) {
  const origin = getOrigin(req)
  if (!origin) return
  if (!serverEnv.allowedOrigins.includes(origin)) {
    throw new HttpError(403, 'Origin not allowed')
  }
}

export async function readJsonBody(req, maxBytes) {
  const contentType = req.headers['content-type'] || ''
  if (!contentType.includes('application/json')) {
    throw new HttpError(415, 'Unsupported content type')
  }

  const contentLength = Number(req.headers['content-length'] || 0)
  if (contentLength && contentLength > maxBytes) {
    throw new HttpError(413, 'Payload too large')
  }

  if (req.body && typeof req.body === 'object') {
    return req.body
  }

  const chunks = []
  let totalBytes = 0

  for await (const chunk of req) {
    totalBytes += chunk.length
    if (totalBytes > maxBytes) {
      throw new HttpError(413, 'Payload too large')
    }
    chunks.push(chunk)
  }

  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')
  } catch {
    throw new HttpError(400, 'Invalid JSON body')
  }
}

export function sendJson(res, status, body, extraHeaders = {}) {
  setResponseHeaders(res, { 'Content-Type': 'application/json; charset=utf-8', ...extraHeaders })
  res.statusCode = status
  res.end(JSON.stringify(body))
}
