import { createElement } from 'react'

export default function Card({ as = 'div', className = '', children, ...props }) {
  return createElement(as, { className: `card ${className}`.trim(), ...props }, children)
}
