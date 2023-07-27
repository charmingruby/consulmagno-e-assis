'use client'

import { Button } from '../ui/button'
import { BurguerButton } from './burguer-button'
import { Dropdown, DropdownLink } from './dropdown'
import { NavItem } from './nav-item'

const solutionsLinks: DropdownLink[] = [
  {
    label: 'Solution',
    url: '/',
  },
  {
    label: 'Solution',
    url: '/',
  },
  {
    label: 'Solution',
    url: '/',
  },
  {
    label: 'Solution',
    url: '/',
  },
]

export function Navigation() {
  return (
    <>
      <BurguerButton />
      <nav className="hidden lg:flex lg:items-center gap-4">
        <NavItem label="Início" />
        <Dropdown label="Soluções" links={solutionsLinks} />
        <NavItem label="Nossa equipe" />
        <NavItem label="Contato" />

        <Button size="default">Blog</Button>
      </nav>
    </>
  )
}
