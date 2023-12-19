import { ElementType } from 'react'

interface ExplanationTopicTitleProps {
  icon: ElementType
  title: string
  hasSpacing?: boolean
  small?: boolean
}

export function ExplanationTopicTitle({
  icon: Icon,
  title,
  hasSpacing = true,
  small = false,
}: ExplanationTopicTitleProps) {
  return (
    <div
      className={`flex items-center gap-2
    ${hasSpacing ? 'mb-8' : 'mb-0'}
    `}
    >
      <Icon
        className={`text-secondary-main ${small ? 'h-4 w-4' : 'h-7 w-7'}`}
      />
      <strong
        className={` ${small ? 'text-xl' : 'text-3xl'} text-primary-main`}
      >
        {title}
      </strong>
    </div>
  )
}
