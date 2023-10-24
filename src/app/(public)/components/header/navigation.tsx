'use client'

import { NavItem } from './nav-item'

export function Navigation() {
  return (
    <nav className="hidden lg:flex lg:items-center gap-4">
      <NavItem label="Início" url="/" />
      <NavItem label="Áreas de atuação" url="/areas-de-atuacao" />
      <NavItem label="Blog" url="/blog" />
      <NavItem label="Relatos" url="/relatos" />
      <NavItem label="Equipe" url="/nossa-equipe" />
    </nav>
  )
}
