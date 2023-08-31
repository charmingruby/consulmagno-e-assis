import { ElementType } from 'react'

interface IconBadgeProps {
  icon: ElementType
}

export function IconBadge({ icon: Icon }: IconBadgeProps) {
  return (
    <div className="bg-primary-main w-fit p-3 rounded-md">
      <Icon className=" text-secondary-main h-7 w-7 " />
    </div>
  )
}
