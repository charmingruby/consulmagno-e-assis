'use client'

import { navItemsList } from '../nav-items-list'
import { NavItem } from './nav-item'

export function Navigation() {
  return (
    <nav className="hidden lg:flex lg:items-center gap-4">
      {navItemsList.map(({ label, url }) => (
        <NavItem label={label} url={url} key={label} />
      ))}
    </nav>
  )
}
