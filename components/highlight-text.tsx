interface HighlightTextProps {
  text: string
  highlight: string
  className?: string
}

export function HighlightText({ text, highlight, className = "" }: HighlightTextProps) {
  if (!highlight.trim() || !text) {
    return <span className={className}>{text}</span>
  }

  const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi")
  const parts = text.split(regex)

  return (
    <span className={className}>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <span key={i} className="bg-yellow-200 text-black px-0.5 rounded">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </span>
  )
}
