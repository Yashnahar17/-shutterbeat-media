import crypto from 'node:crypto'
import { serverEnv } from './env.js'

export async function logSecurityEvent(event) {
  const payload = {
    ...event,
    timestamp: new Date().toISOString(),
  }

  console.info('[security-event]', JSON.stringify(payload))

  if (!serverEnv.logWebhookUrl) return

  try {
    await fetch(serverEnv.logWebhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
  } catch {
    // Avoid cascading failures during logging.
  }
}

export function createRequestId() {
  return crypto.randomUUID()
}
