import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { Box } from '@/components/ui/box'
import { ElementType } from 'react'
import { areas, Area } from '@/data/areas'

interface AreaItemProps {
  icon: ElementType
  name: string
  slug: string
}

export function AreaItem({ icon: Icon, name, slug }: AreaItemProps) {
  const fullUrl = '/areas-de-atuacao/' + slug

  const prefix = name.split(' ')[0]
  const restOfTheName = name.slice(prefix.length + 1)

  const getAreaBySlug = (slug: string): Area | undefined => {
    return areas.find((area) => area.slug === slug)
  }
  const specificArea = getAreaBySlug(slug)

  return (
    <Link prefetch={false} href={fullUrl} className="flex h-full w-full">
      <Box className="text-primary-main flex flex-col justify-center w-full">
        <div className="flex gap-3">
          <Icon className="h-6" />

          <div className="h-6 w-px bg-gray-100" />

          <div className="text-lg md:text-xl">
            <span className="font-medium">{prefix + ' '}</span>
            <span className="font-bold text-secondary-main">
              {restOfTheName}
            </span>
          </div>
        </div>

        <div className="text-gray-400 mt-4 mb-8">
          <small>{specificArea?.description}</small>
        </div>

        <div className="flex items-center gap-1 mt-auto group text-gray-400 hover:text-primary-main transition-all w-fit">
          <span className="group-hover:font-semibold transition-all">
            Ver área
          </span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </Box>
    </Link>
  )
}
