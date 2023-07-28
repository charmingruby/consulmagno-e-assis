'use client'

import { BurguerButton } from './burguer-button'
import { Dropdown, DropdownLink } from './dropdown'
import { NavItem } from './nav-item'

const solutionsLinks: DropdownLink[] = [
  {
    label: 'atuação',
    url: '/',
  },
  {
    label: 'atuação',
    url: '/',
  },
  {
    label: 'atuação',
    url: '/',
  },
  {
    label: 'atuação',
    url: '/',
  },
]

export function Navigation() {
  return (
    <>
      <BurguerButton />
      <nav className="hidden lg:flex lg:items-center gap-4">
        <NavItem label="Início" />
        <Dropdown label="Áreas de atuação" links={solutionsLinks} />
        <NavItem label="Nossa equipe" />
      </nav>
    </>
  )
}
