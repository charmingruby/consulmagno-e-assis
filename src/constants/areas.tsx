import {
  Briefcase,
  DollarSign,
  Globe,
  Heart,
  Home,
  Umbrella,
  ShoppingBag,
  Star,
  Vote,
  Monitor,
  PenTool,
  Lock,
  Clipboard,
  File,
  Map,
} from 'lucide-react'
import { ElementType } from 'react'

export interface AreaItemProps {
  name: string
  url: string
  icon: ElementType
}

export const areaItems: AreaItemProps[] = [
  { name: 'Direito do Trabalho', url: '/direito-do-trabalho', icon: Briefcase },
  { name: 'Direito Tributário', url: '#', icon: DollarSign },
  { name: 'Direito Penal', url: '#', icon: Lock },
  { name: 'Direito Empresarial', url: '#', icon: Briefcase },
  { name: 'Direito Ambiental', url: '#', icon: Globe },
  { name: 'Direito de Família', url: '#', icon: Heart },
  { name: 'Direito Imobiliário', url: '#', icon: Home },
  { name: 'Direito Previdenciário', url: '#', icon: Umbrella },
  { name: 'Direito do Consumidor', url: '#', icon: ShoppingBag },
  { name: 'Direito Administrativo', url: '#', icon: Clipboard },
  { name: 'Direito Contratual', url: '#', icon: File },
  { name: 'Direito Internacional', url: '#', icon: Map },
  { name: 'Direito da Saúde', url: '#', icon: Star },
  { name: 'Direito Eleitoral', url: '#', icon: Vote },
  { name: 'Direito da Tecnologia da Informação', url: '#', icon: Monitor },
  { name: 'Direito de Propriedade Intelectual', url: '#', icon: PenTool },
]
