interface SubtitleProps {
  text: string
}

export function Subtitle({ text }: SubtitleProps) {
  return <p className="leading-relaxed text-gray-400">{text}</p>
}
