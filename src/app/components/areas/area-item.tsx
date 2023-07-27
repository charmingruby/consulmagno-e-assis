import { Box } from '@/components/ui/box'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface AreaItemProps {
  subtitle: string
  title: string
  description: string
  url: string
}

export function AreaItem({ description, subtitle, title, url }: AreaItemProps) {
  return (
    <Box interaction>
      <div className="flex flex-col gap-4">
        {/* Subtitle */}
        <small className="font-bold text-xs uppercase text-primary-main">
          {subtitle}{' '}
        </small>

        {/* Title */}
        <h2 className="text-xl font-semibold text-primary-main">{title}</h2>

        {/* Description */}
        <p className="leading-snug">{description}</p>

        {/* Link */}
        <Link
          href={url}
          prefetch={false}
          className="flex items-center gap-1 group"
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
