import Link from 'next/link'
import { ElementType } from 'react'

interface MeanItemProps {
  content: string
  url: string
  icon: ElementType
}

export function MeanItem({ content, url, icon: Icon }: MeanItemProps) {
  return (
    <Link
      href={url}
      prefetch={false}
      target="_blank"
      className="group flex items-center gap-2 transition-all w-fit"
    >
      <div className="group-hover:bg-primary-main p-1.5 bg-gray-100 rounded-full transition-all">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-secondary-main transition-all" />
      </div>
      <div className="text-lg group-hover:underline underline-offset-8 transition-all group-hover:font-medium">
        {content}
      </div>
    </Link>
  )
}
