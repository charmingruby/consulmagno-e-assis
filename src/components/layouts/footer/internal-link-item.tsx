import Link from 'next/link'
import { LinkProps } from './internal-link-list'

interface LinkItem extends LinkProps {
  isTheLast: boolean
}

export function InternalLinkItem({ label, url, isTheLast }: LinkItem) {
  return (
    <Link
      prefetch={false}
      href={url}
      className="group cursor-auto flex items-center gap-4"
    >
      <span className="text-gray-400 text-sm group-hover:text-primary-main cursor-pointer group-hover:underline transition-all">
        {label}
      </span>
      {!isTheLast && (
        <div className="hidden sm:block h-1 w-1 bg-gray-300 rounded-full" />
      )}
    </Link>
  )
}
