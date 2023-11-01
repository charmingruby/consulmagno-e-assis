/**
 * External
 */
import Image from 'next/image'

/**
 * Internal
 */
import { Box } from './ui/box'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { formatDate } from '@/utils/format-date'

interface Category {
  name: string
}

interface PostCardProps {
  authorName: string
  avatarUrl: string
  title: string
  slug: string
  publishedDate: Date
  excerpt: string
  coverPhoto: string
  categories: Category[]
  orientation?: 'vertical' | 'horizontal'
}

export function PostCard({
  authorName,
  categories,
  coverPhoto,
  publishedDate,
  excerpt,
  slug,
  title,
  avatarUrl,
  orientation = 'vertical',
}: PostCardProps) {
  const mainCategory = categories[0].name
  const formattedPublishedDate = formatDate(publishedDate)

  return (
    <Box
      className={`grid ${
        orientation === 'vertical'
          ? 'grid-cols-1'
          : 'grid-cols-1 md:grid-cols-2'
      } p-0`}
    >
      <div className="relative max-h-80 overflow-hidden">
        <div className="absolute h-full w-full bg-gray-900 rounded-t-sm opacity-40" />
        <Image
          src={coverPhoto}
          alt="Foto de exemplo"
          className="rounded-t-sm w-full "
          width={480}
          height={480}
        />
        <div className="absolute top-0 p-4">
          <div className="p-2 border border-gray-50 text-gray-50 font-semibold">
            {mainCategory}
          </div>
        </div>
      </div>

      <div className="px-6 py-3 flex flex-col justify-center">
        {/* Title */}
        <strong className="text-2xl block mb-4">{title}</strong>

        {/* Details */}
        <div className="flex items-center gap-3 mb-4">
          <Image
            src={avatarUrl}
            alt="Foto de exemplo"
            width={16}
            height={16}
            className="rounded-full h-8 w-8"
          />

          <strong className="font-semibold">{authorName}</strong>

          <div className="h-px flex-1 bg-gray-200" />

          <small className="text-gray-400 text-sm">
            {formattedPublishedDate}
          </small>
        </div>

        {/* Excerpt */}
        <div className="mb-8">
          <p className="text-sm text-gray-400">{excerpt}</p>
        </div>

        <Link
          prefetch={false}
          href={`/post/${slug}`}
          className="flex items-center gap-1 group w-fit"
        >
          <span className="font-semibold text-base text-primary-main group-hover:underline transition-all">
            Ver post
          </span>
          <ArrowRight className="h-4 w-4 text-secondary-main" />
        </Link>
      </div>
    </Box>
  )
}
