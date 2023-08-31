import { Clock4 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import exampleImage from '@/assets/images/lawyers.png'
import { Box } from '@/components/ui/box'

interface InsightCardProps {
  imageUrl: string
  title: string
  description: string
  url: string
  horizontal?: boolean
}

export function InsightCard({
  imageUrl,
  title,
  description,
  url,
  horizontal = false,
}: InsightCardProps) {
  return (
    <Link href={url} prefetch={false}>
      <Box
        spacing="spaceless"
        className={`flex ${horizontal ? 'h-full flex-row flex-1' : 'flex-col'}`}
      >
        {/* Image */}
        <div>
          <Image src={exampleImage} alt={title} />
        </div>

        <div className={`p-4 flex flex-col ${horizontal && 'justify-center'}`}>
          {/* Tag */}
          <span
            className={`text-primary-main font-semibold
            ${horizontal ? 'text-lg  mb-1' : 'text-sm'}`}
          >
            Direito Civil
          </span>

          {/* Title */}
          <strong className={`mb-2 ${horizontal ? 'text-4xl' : 'text-2xl'}`}>
            {title}
          </strong>

          {/* Post time */}
          <div className="flex items-center gap-1 mb-4">
            <span className="font-medium text-gray-400 text-sm">
              2 dias atras
            </span>
          </div>

          {/* Description */}
          <small className="block leading-relaxed text-sm">{description}</small>

          {/* Read Time */}
          <div className="flex items-center gap-1 mt-4">
            <div className="flex items-center gap-2">
              <Clock4 className="w-3 h-3 text-gray-300" />
              <span className="font-medium text-gray-300 text-sm">5 min</span>
            </div>
          </div>
        </div>
      </Box>
    </Link>
  )
}
