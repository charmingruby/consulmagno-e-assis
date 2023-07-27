import { ElementType } from 'react'

interface SocialLinkItemProps {
  icon: ElementType
  url: string
}

export function SocialLinkItem({ icon: Icon, url }: SocialLinkItemProps) {
  return (
    <a href={url} className="group">
      <Icon className="text-gray-400 group-hover:text-primary-main transition-colors w-6 h-6" />
    </a>
  )
}
