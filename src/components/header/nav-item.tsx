import { ChevronDown } from 'lucide-react'

interface NavItemProps {
  label: string
  popover?: boolean
}

export function NavItem({ popover = false, label }: NavItemProps) {
  return (
    <div className="font-medium group flex items-center border-b-2 border-gray-75 h-[3.875rem] transition-colors hover:border-primary-main cursor-pointer">
      <span className="group-hover:text-primary-main transition-colors">
        {label}
      </span>
      {popover && <ChevronDown size={18} className="mt-0.5 text-gray-200" />}
    </div>
  )
}
