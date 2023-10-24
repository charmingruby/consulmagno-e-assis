import { Briefcase, Home, Library, Star, Users } from 'lucide-react'
import { ElementType } from 'react'

export interface NavItemProps {
  icon: ElementType
  label: string
  url: string
}

export const navItemsList: NavItemProps[] = [
  {
    icon: Home,
    label: 'Início',
    url: '/',
  },
  { icon: Briefcase, label: 'Áreas de atuação', url: '/areas-de-atuacao' },
  { icon: Library, label: 'Blog', url: '/blog' },
  { icon: Star, label: 'Relatos', url: '/relatos' },
  { icon: Users, label: 'Equipe', url: '/nossa-equipe' },
]
