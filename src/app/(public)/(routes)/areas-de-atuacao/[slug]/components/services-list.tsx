import { areas } from '@/data/areas'
import { ServiceItem } from './service-item'

interface ServiceListProps {
  slug: string
}

export function ServicesList({ slug }: ServiceListProps) {
  const areaServices = areas.filter((area) => area.slug === slug)
  const { services } = areaServices[0]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      {services.map((topic) => (
        <ServiceItem key={topic} content={topic} />
      ))}
    </div>
  )
}
