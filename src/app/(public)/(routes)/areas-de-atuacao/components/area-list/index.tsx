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
import { AreaItem } from './area-item'

export interface AreaItemProps {
  name: string
  url: string
  icon: ElementType
}

const areaItems: AreaItemProps[] = [
  { name: 'do Trabalho', url: '/direito-do-trabalho', icon: Briefcase },
  { name: 'Tributário', url: '#', icon: DollarSign },
  { name: 'Penal', url: '#', icon: Lock },
  { name: 'Empresarial', url: '#', icon: Briefcase },
  { name: 'Ambiental', url: '#', icon: Globe },
  { name: 'de Família', url: '#', icon: Heart },
  { name: 'Imobiliário', url: '#', icon: Home },
  { name: 'Previdenciário', url: '#', icon: Umbrella },
  { name: 'do Consumidor', url: '#', icon: ShoppingBag },
  { name: 'Administrativo', url: '#', icon: Clipboard },
  { name: 'Contratual', url: '#', icon: File },
  { name: 'Internacional', url: '#', icon: Map },
  { name: 'da Saúde', url: '#', icon: Star },
  { name: 'Eleitoral', url: '#', icon: Vote },
  { name: 'da Tecnologia da Informação', url: '#', icon: Monitor },
  { name: 'de Propriedade Intelectual', url: '#', icon: PenTool },
]

export function AreaList() {
  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
      {areaItems.map(({ name, url, icon }, index) => (
        <AreaItem name={name} url={url} icon={icon} key={index} />
      ))}
    </div>
  )
}
