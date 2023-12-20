import {
  HeartHandshake,
  Landmark,
  PersonStanding,
  Shield,
  Store,
  Wallet,
} from 'lucide-react'
import { AreaItem } from './area-item'
import { areas } from '@/data/areas'

export function AreaList() {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
      {areas.map((areas) => (
        <AreaItem
          icon={areas.icon}
          title={areas.name}
          key={areas.slug}
          description={areas.offer}
          url={areas.slug}
        />
      ))}
    </div>
  )
}
