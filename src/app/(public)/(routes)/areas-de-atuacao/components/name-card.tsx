import { Box } from '@/components/ui/box'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { ElementType } from 'react'

interface NameCardProps {
  name: string
  url: string
  icon: ElementType
}

export function NameCard({ icon: Icon, ...props }: NameCardProps) {
  return (
    <Link prefetch={false} href={props.url} className="flex">
      <Box className="text-primary-main flex flex-col  justify-center">
        <div className="flex gap-3">
          {/* <IconBadge defaultSize={false} icon={props.icon} /> */}
          <Icon className="h-6" />

          <div className="h-6 w-px bg-gray-100" />

          <div className="text-lg md:text-xl">
            <span className="font-medium">Direito </span>
            <span className="font-bold text-secondary-main">{props.name}</span>
          </div>
        </div>

        <div className="text-gray-400 mt-4">
          <small>
            Lidar com documentos Lidar com documentos Lidar com documentos
          </small>
        </div>

        <div className="flex items-center gap-1 mt-8 group text-gray-400 hover:text-primary-main transition-all w-fit">
          <span className="group-hover:font-semibold transition-all">
            Ver área
          </span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </Box>
    </Link>
  )
}
