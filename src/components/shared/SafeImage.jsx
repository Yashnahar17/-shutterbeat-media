import { useState } from 'react'

export default function SafeImage({
  src,
  alt,
  className = '',
  fallback = null,
  onError,
  ...imgProps
}) {
  const [hasError, setHasError] = useState(!src)

  if (hasError) {
    return typeof fallback === 'function' ? fallback() : fallback
  }

  return (
    <img
      {...imgProps}
      src={src}
      alt={alt}
      className={className}
      onError={(event) => {
        setHasError(true)
        onError?.(event)
      }}
    />
  )
}
