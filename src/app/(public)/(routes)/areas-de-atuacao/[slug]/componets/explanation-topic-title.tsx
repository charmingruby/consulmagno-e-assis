import { ElementType } from 'react'

interface ExplanationTopicTitleProps {
  icon: ElementType
  title: string
}

export function ExplanationTopicTitle({
  icon: Icon,
  title,
}: ExplanationTopicTitleProps) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <Icon className="text-secondary-main" />
      <strong className="text-lg">{title}</strong>
    </div>
  )
}
