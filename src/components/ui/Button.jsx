import { forwardRef } from 'react'

const VARIANTS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
}

const SIZES = {
  sm: 'btn-size-sm',
  md: 'btn-size-md',
  lg: 'btn-size-lg',
}

export const Button = forwardRef(function Button(
  {
    as: Comp = 'button',
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    className = '',
    type = 'button',
    children,
    ...props
  },
  ref,
) {
  const base = VARIANTS[variant] || VARIANTS.primary
  const sizeClass = SIZES[size] || SIZES.md
  return (
    <Comp
      ref={ref}
      type={Comp === 'button' ? type : undefined}
      className={`${base} ${sizeClass} ${fullWidth ? 'w-full' : ''} ${className}`.trim()}
      {...props}>
      {children}
    </Comp>
  )
})

export default Button
