import { ChevronRight } from 'lucide-react'
import { AreaItemProps } from '.'
import Link from 'next/link'
import { Box } from '@/components/ui/box'

export function AreaItem({ icon: Icon, name, url }: AreaItemProps) {
  const fullUrl = '/areas-de-atuacao' + url

  return (
    <Link prefetch={false} href={fullUrl} className="flex h-full w-full">
      <Box className="text-primary-main flex flex-col justify-center w-full">
        <div className="flex gap-3">
          <Icon className="h-6" />

          <div className="h-6 w-px bg-gray-100" />

          <div className="text-lg md:text-xl">
            <span className="font-medium">Direito </span>
            <span className="font-bold text-secondary-main">{name}</span>
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
