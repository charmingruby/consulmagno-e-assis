import { Button } from '../ui/button'
import { BurguerButton } from './burguer-button'
import { NavItem } from './nav-item'

export function Navigation() {
  return (
    <>
      <BurguerButton />
      <nav className="hidden lg:flex lg:items-center gap-4">
        <NavItem label="Início" />
        <NavItem label="Soluções" popover />
        <NavItem label="Nossa equipe" />
        <NavItem label="Contato" />

        <Button size="default">Blog</Button>
      </nav>
    </>
  )
}
