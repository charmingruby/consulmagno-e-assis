import Link from 'next/link'

interface NavItemProps {
  label: string
  url: string
}

export function NavItem({ label, url }: NavItemProps) {
  return (
    <Link
      prefetch={false}
      href={url}
      className="font-medium group flex items-center border-b-2 border-white h-16 transition-colors hover:border-primary-main cursor-pointer"
    >
      <span className="group-hover:text-primary-main transition-colors">
        {label}
      </span>
    </Link>
  )
}
