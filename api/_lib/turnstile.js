import { HttpError } from './http.js'
import { serverEnv } from './env.js'

export async function verifyTurnstileToken(token, remoteIp) {
  if (!serverEnv.turnstileSecretKey) {
    if (serverEnv.nodeEnv === 'production') {
      throw new HttpError(503, 'Verification service is not configured')
    }
    return true
  }

  const body = new URLSearchParams({
    secret: serverEnv.turnstileSecretKey,
    response: token,
    remoteip: remoteIp,
  })

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  })

  if (!response.ok) {
    throw new HttpError(502, 'Verification failed')
  }

  const data = await response.json()
  if (!data.success) {
    throw new HttpError(400, 'Verification failed')
  }

  return true
}
