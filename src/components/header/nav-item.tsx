interface NavItemProps {
  label: string
}

export function NavItem({ label }: NavItemProps) {
  return (
    <div className="font-medium group flex items-center border-b-2 border-gray-75 h-[3.75rem] transition-colors hover:border-primary-main cursor-pointer">
      <span className="group-hover:text-primary-main transition-colors">
        {label}
      </span>
    </div>
  )
}
