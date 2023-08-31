'use client'

import { BurguerButton } from './burguer-button'
import { NavItem } from './nav-item'

export function Navigation() {
  return (
    <>
      <BurguerButton />
      <nav className="hidden lg:flex lg:items-center gap-4">
        <NavItem label="Início" url="/" />
        <NavItem label="Áreas de atuação" url="/areas-de-atuacao" />
        <NavItem label="Relatos" url="cases" />
        <NavItem label="Nossa equipe" url="nossa-equipe" />
      </nav>
    </>
  )
}
