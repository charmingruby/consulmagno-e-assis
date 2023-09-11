import { Box } from '@/components/ui/box'
import { ElementType } from 'react'

interface ReasonCardProps {
  icon: ElementType
  prefixTitle?: string
  sufixTitle?: string
  description?: string
}

export function ReasonCard({
  icon: Icon,
  prefixTitle,
  sufixTitle,
  description,
}: ReasonCardProps) {
  return (
    <Box>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center mb-4">
          <Icon className="w-14 h-14 text-primary-main" />
        </div>

        <h2 className="text-primary-main font-semibold text-2xl text-center">
          <span>{prefixTitle}</span>{' '}
          <strong className="text-secondary-main">{sufixTitle}</strong>
        </h2>
        <p className="leading-relaxed text-gray-400 text-center">
          {description}
        </p>
      </div>
    </Box>
  )
}
