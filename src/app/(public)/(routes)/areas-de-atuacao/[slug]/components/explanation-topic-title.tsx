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
    <div className="flex items-center gap-2 mb-8">
      <Icon className="text-secondary-main h-7 w-7" />
      <strong className="text-3xl">{title}</strong>
    </div>
  )
}
