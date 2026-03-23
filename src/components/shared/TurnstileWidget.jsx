import { useEffect, useRef } from 'react'

const TURNSTILE_SCRIPT_ID = 'cf-turnstile-script'

function loadTurnstileScript() {
  if (typeof window === 'undefined') return Promise.resolve(null)
  if (window.turnstile) return Promise.resolve(window.turnstile)

  const existing = document.getElementById(TURNSTILE_SCRIPT_ID)
  if (existing) {
    return new Promise((resolve) => {
      existing.addEventListener('load', () => resolve(window.turnstile), { once: true })
    })
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.id = TURNSTILE_SCRIPT_ID
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
    script.async = true
    script.defer = true
    script.onload = () => resolve(window.turnstile)
    script.onerror = reject
    document.head.appendChild(script)
  })
}

export default function TurnstileWidget({ siteKey, onTokenChange }) {
  const containerRef = useRef(null)
  const widgetIdRef = useRef(null)

  useEffect(() => {
    if (!siteKey && import.meta.env.DEV) {
      onTokenChange('dev-turnstile-bypass')
    }
  }, [siteKey, onTokenChange])

  useEffect(() => {
    if (!siteKey || !containerRef.current) return undefined

    let active = true

    loadTurnstileScript()
      .then((turnstile) => {
        if (!active || !turnstile || !containerRef.current) return
        widgetIdRef.current = turnstile.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token) => onTokenChange(token),
          'expired-callback': () => onTokenChange(''),
          'error-callback': () => onTokenChange(''),
          theme: 'light',
        })
      })
      .catch(() => {
        onTokenChange('')
      })

    return () => {
      active = false
      if (window.turnstile && widgetIdRef.current !== null) {
        window.turnstile.remove(widgetIdRef.current)
      }
    }
  }, [siteKey, onTokenChange])

  if (!siteKey) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
        CAPTCHA is not configured for this environment. Add `VITE_TURNSTILE_SITE_KEY` before going live.
      </div>
    )
  }

  return <div ref={containerRef} />
}
