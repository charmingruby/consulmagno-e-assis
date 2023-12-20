import { AreaItem } from './area-item'
import { areas } from '@/data/areas'

export function AreaList() {
  const firstNAreas = areas.slice(0, 6)

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
      {firstNAreas.map((area) => (
        <AreaItem
          icon={area.icon}
          title={area.name}
          key={area.slug}
          description={area.description}
          url={area.slug}
        />
      ))}
    </div>
  )
}
