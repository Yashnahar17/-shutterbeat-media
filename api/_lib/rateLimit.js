import { HttpError } from './http.js'

const bucketStore = new Map()

function pruneExpired(now) {
  for (const [key, bucket] of bucketStore.entries()) {
    if (bucket.resetAt <= now) bucketStore.delete(key)
  }
}

export function enforceRateLimit({ key, limit, windowMs }) {
  const now = Date.now()
  pruneExpired(now)

  const current = bucketStore.get(key)
  if (!current || current.resetAt <= now) {
    bucketStore.set(key, { count: 1, resetAt: now + windowMs })
    return
  }

  if (current.count >= limit) {
    throw new HttpError(429, 'Too many requests')
  }

  current.count += 1
}
