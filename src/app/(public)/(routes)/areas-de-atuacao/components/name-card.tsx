import { IconBadge } from '@/components/icon-badge'
import Link from 'next/link'
import { ElementType } from 'react'

interface NameCardProps {
  name: string
  url: string
  icon: ElementType
}

export function NameCard(props: NameCardProps) {
  return (
    <Link
      prefetch={false}
      href={props.url}
      className="text-primary-main border  border-primary-main hover:bg-primary-main hover:text-white text-center hover:border-none p-6 rounded flex flex-col items-center gap-4 justify-center"
    >
      <IconBadge defaultSize={false} icon={props.icon} />

      <div className="text-xl">
        <span className="font-semibold">Direito </span>
        <span className="font-bold text-secondary-main">{props.name}</span>
      </div>
    </Link>
  )
}
