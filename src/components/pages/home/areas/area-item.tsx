import { IconBadge } from '@/components/shared/icon-badge'
import { Box } from '@/components/ui/box'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ElementType } from 'react'

interface AreaItemProps {
  icon: ElementType
  title: string
  description: string
  url: string
}

export function AreaItem({
  icon: Icon,
  description,
  title,
  url,
}: AreaItemProps) {
  return (
    <Box>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4">
          {/* Icon */}
          <div className="mb-4">
            <IconBadge icon={Icon} />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-primary-main text-center">
            {title}
          </h2>

          {/* Description */}
          <p className="leading-snug text-gray-400 text-center">
            {description}
          </p>
        </div>

        {/* Link */}
        <Link
          href={url}
          prefetch={false}
          className="flex items-center justify-center gap-1 group"
        >
          <span className="text-primary-main font-semibold group-hover:underline transition-transform">
            Ver detalhes
          </span>
          <ArrowRight className="text-secondary-main mb-0.5" size={20} />
        </Link>
      </div>
    </Box>
  )
}
