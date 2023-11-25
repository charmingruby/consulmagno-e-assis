import { ElementType } from 'react'

interface ExplanationTopicTitleProps {
  icon: ElementType
  title: string
  hasSpacing?: boolean
}

export function ExplanationTopicTitle({
  icon: Icon,
  title,
  hasSpacing = true,
}: ExplanationTopicTitleProps) {
  return (
    <div className={`flex items-center gap-2 ${hasSpacing ? 'mb-8' : 'mb-0'}`}>
      <Icon className="text-secondary-main h-7 w-7" />
      <strong className="text-3xl">{title}</strong>
    </div>
  )
}
