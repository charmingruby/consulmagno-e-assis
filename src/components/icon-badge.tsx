import { ElementType } from 'react'

interface IconBadgeProps {
  icon: ElementType
  defaultSize?: boolean
}

export function IconBadge({ icon: Icon, defaultSize = true }: IconBadgeProps) {
  return (
    <div className="bg-primary-main w-fit p-3 rounded-md">
      <Icon
        className={`text-secondary-main ${defaultSize ? 'h-7 w-7' : 'w-5 h-5'}`}
      />
    </div>
  )
}
