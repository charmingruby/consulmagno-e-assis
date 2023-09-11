import Link from 'next/link'
import { ElementType } from 'react'

interface MeanItemProps {
  content: string
  url: string
  icon: ElementType
}

export function MeanItem({ content, url, icon: Icon }: MeanItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div className=" p-1.5 bg-gray-100 rounded-full">
        <Icon />
      </div>
      <Link href={url} prefetch={false}>
        {content}
      </Link>
    </div>
  )
}
