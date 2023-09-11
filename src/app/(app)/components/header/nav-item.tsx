import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  label: string
  url: string
}

export function NavItem({ label, url }: NavItemProps) {
  const currentPath = usePathname()

  return (
    <Link
      prefetch={false}
      href={url}
      className={`
        ${
          currentPath === url
            ? 'text-primary-main border-secondary-main'
            : 'border-white hover:text-secondary-main'
        }
        font-medium group flex items-center border-b-2 h-16 transition-colors cursor-pointer
      `}
    >
      <span>{label}</span>
    </Link>
  )
}
