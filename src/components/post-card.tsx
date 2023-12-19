/**
 * External
 */
import Image from 'next/image'
import Link from 'next/link'

/**
 * Internal
 */
import { Box } from './ui/box'
import { ArrowRight } from 'lucide-react'
import { formatDate } from '@/utils/format-date'
import { makeExcerpt } from '@/utils/make-excerpt'

interface PostCardProps {
  authorName: string
  avatarUrl: string
  title: string
  slug: string
  publishedDate: Date
  subtitle: string
  coverPhoto: string
  category: string
  orientation?: 'vertical' | 'horizontal'
}

export function PostCard({
  authorName,
  category,
  coverPhoto,
  publishedDate,
  subtitle,
  slug,
  title,
  avatarUrl,
  orientation = 'vertical',
}: PostCardProps) {
  const formattedPublishedDate = formatDate(publishedDate)

  const excerpt = subtitle.length >= 155 ? makeExcerpt(subtitle) : subtitle

  if (orientation === 'horizontal') {
    return (
      <Box className={`grid  grid-cols-1 md:grid-cols-2 p-0`}>
        {/* Cover image */}
        <div className={`relative max-h-80 overflow-hidden`}>
          <div
            className={`absolute h-full  w-full bg-gray-900 rounded-t-sm opacity-40`}
          />

          <Image
            src={coverPhoto}
            alt="Foto de exemplo"
            className={`max-h-80 overflow-hidden rounded-t-sm w-full`}
            width={480}
            height={480}
          />
          <div className="absolute top-0 p-4">
            <div className="p-2 border border-gray-50 text-gray-50 font-semibold">
              {category}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-4">
          {/* Title */}
          <strong className={`mb-8 text-2xl block`}>{title}</strong>

          {/* Details */}
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={avatarUrl}
              alt="Foto de exemplo"
              width={100}
              height={100}
              className="rounded-full h-8 w-8"
            />

            <strong className="font-semibold">{authorName}</strong>

            <div className="h-px flex-1 bg-gray-200" />

            <small className="text-gray-400 text-sm">
              {formattedPublishedDate}
            </small>
          </div>

          {/* subtitle */}
          <div className="">
            <p className="text-base text-gray-400 pb-8">{excerpt}</p>
          </div>

          <Link
            prefetch={false}
            href={`/post/${slug}`}
            className="flex items-center gap-1 group w-fit "
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

  return (
    <Box
      className={`${
        orientation === 'vertical'
          ? 'flex flex-col'
          : 'grid  grid-cols-1 md:grid-cols-2'
      } p-0`}
    >
      {/* Cover image */}
      <div className={`relative h-56 overflow-hidden`}>
        <div
          className={`absolute h-full  w-full bg-gray-900 rounded-t-sm opacity-40`}
        />

        <Image
          src={coverPhoto}
          alt="Foto de exemplo"
          className={`h-56 overflow-hidden rounded-t-sm w-full`}
          width={480}
          height={480}
        />
        <div className="absolute top-0 p-4">
          <div className="p-2 border border-gray-50 text-gray-50 font-semibold">
            {category}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        {/* Title */}
        <strong className={`mb-4 text-2xl block`}>{title}</strong>

        {/* Details */}
        <div className="flex items-center gap-3 mb-4">
          <Image
            src={avatarUrl}
            alt="Foto de exemplo"
            width={100}
            height={100}
            className="rounded-full h-8 w-8"
          />

          <strong className="font-semibold">{authorName}</strong>

          <div className="h-px flex-1 bg-gray-200" />

          <small className="text-gray-400 text-sm">
            {formattedPublishedDate}
          </small>
        </div>

        {/* subtitle */}
        <div className="">
          <p className="text-base text-gray-400 pb-8">{excerpt}</p>
        </div>

        <Link
          prefetch={false}
          href={`/blog/posts/${slug}`}
          className="flex items-center gap-1 group w-fit mt-auto"
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
