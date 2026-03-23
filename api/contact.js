import { contactSchema, CONTACT_MAX_BODY_BYTES } from '../src/shared/security/formSchemas.js'
import { sendContactSubmission } from './_lib/email.js'
import { serverEnv } from './_lib/env.js'
import { sendJson, readJsonBody, HttpError, getClientIp, hashIp, ensureAllowedOrigin } from './_lib/http.js'
import { logSecurityEvent, createRequestId } from './_lib/logging.js'
import { enforceRateLimit } from './_lib/rateLimit.js'
import { verifyTurnstileToken } from './_lib/turnstile.js'

export default async function handler(req, res) {
  const requestId = createRequestId()

  try {
    if (req.method === 'OPTIONS') {
      sendJson(res, 204, { ok: true, requestId }, { Allow: 'POST, OPTIONS' })
      return
    }

    if (req.method !== 'POST') {
      sendJson(res, 405, { error: 'Method not allowed', requestId }, { Allow: 'POST' })
      return
    }

    ensureAllowedOrigin(req)

    const ip = getClientIp(req)
    enforceRateLimit({
      key: `contact:${hashIp(ip)}`,
      limit: 10,
      windowMs: 15 * 60 * 1000,
    })

    const body = await readJsonBody(req, CONTACT_MAX_BODY_BYTES)
    const parsed = contactSchema.safeParse(body)
    if (!parsed.success) {
      throw new HttpError(400, 'Invalid input', parsed.error.flatten())
    }

    await verifyTurnstileToken(parsed.data.turnstileToken, ip)
    await sendContactSubmission(parsed.data)

    await logSecurityEvent({
      level: 'info',
      type: 'contact_submission',
      requestId,
      route: '/api/contact',
      ipHash: hashIp(ip),
      siteUrl: serverEnv.siteUrl,
    })

    sendJson(res, 202, { ok: true, requestId })
  } catch (error) {
    const status = error instanceof HttpError ? error.status : 500
    await logSecurityEvent({
      level: status >= 500 ? 'error' : 'warn',
      type: 'contact_submission_failed',
      requestId,
      route: '/api/contact',
      reason: error.message,
    })
    sendJson(res, status, { error: status >= 500 ? 'Unable to process request' : error.message, requestId })
  }
}
