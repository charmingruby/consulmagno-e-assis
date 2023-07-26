import { Button } from '../ui/button'
import { NavItem } from './nav-item'

export function Navigation() {
  return (
    <nav className="flex items-center gap-4">
      <NavItem label="Início" />
      <NavItem label="Soluções" popover />
      <NavItem label="Nossa equipe" />
      <NavItem label="Contato" />

      <Button size="default">Blog</Button>
    </nav>
  )
}
