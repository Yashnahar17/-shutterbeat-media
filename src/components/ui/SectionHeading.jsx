export default function SectionHeading({
  tag,
  title,
  accent,
  description,
  align = 'left',
  className = '',
}) {
  const isCentered = align === 'center'
  const alignment = isCentered ? 'text-center mx-auto items-center' : 'items-start'
  return (
    <div className={`flex flex-col gap-3 max-w-3xl ${alignment} ${className}`.trim()}>
      {tag ? <span className="section-tag">{tag}</span> : null}
      {title ? (
        <h2 className="font-heading text-h2 text-primary text-balance">
          {title}
          {accent ? <> <span className="text-gradient">{accent}</span></> : null}
        </h2>
      ) : null}
      {description ? (
        <p className={`body-copy max-w-2xl ${isCentered ? 'mx-auto' : ''}`.trim()}>{description}</p>
      ) : null}
    </div>
  )
}
