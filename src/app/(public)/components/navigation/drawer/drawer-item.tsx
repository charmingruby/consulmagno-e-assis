'use client'

import Link from 'next/link'
import { useContext } from 'react'

import { NavItemProps } from '../nav-items-list'
import { MenuContext } from '@/contexts/menu-context'
import { ChevronRight } from 'lucide-react'

export function DrawerItem({ icon: Icon, label, url }: NavItemProps) {
  const { toggleMenu } = useContext(MenuContext)

  return (
    <Link
      prefetch={false}
      href={url}
      key={label}
      onClick={toggleMenu}
      className="flex items-center gap-2 py-3 px-4 hover:bg-primary-light transition-colors rounded-sm"
    >
      <Icon className="text-secondary-main h-6 w-6" />
      <span className="text-white text-lg font-medium">{label}</span>
      <ChevronRight className="ml-auto text-secondary-main" />
    </Link>
  )
}
