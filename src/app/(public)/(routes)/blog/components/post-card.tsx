import { Box } from '@/components/ui/box'
import type { PostType } from '@/libs/graphql/queries/fetch-blog-main-page-posts/types'
import { formatDate } from '@/utils/format-date'
import { makeExcerpt } from '@/utils/make-excerpt'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function PostCard({
  categories,
  title,
  slug,
  subtitle,
  createdAt,
  author: {
    avatarImage: { url: avatarUrl },
    name,
  },
}: PostType) {
  const excerpt = subtitle.length >= 155 ? makeExcerpt(subtitle) : subtitle

  const formattedPublishedDate = formatDate(new Date(createdAt))

  return (
    <Box className="p-0">
      <div className="p-2 w-fit border-b border-r border-gray-200 text-gray-700 font-medium">
        {categories[0].name}
      </div>

      <div className="px-6 py-3 flex flex-col flex-1">
        {/* Title */}
        <strong className="text-2xl block mb-4">{title}</strong>
        <div className="flex items-center gap-3 mb-4">
          <Image
            src={avatarUrl}
            alt="Foto de exemplo"
            className="rounded-full h-8 w-8"
            width={100}
            height={100}
          />

          <strong className="font-medium">{name}</strong>

          <div className="h-px flex-1 bg-gray-200" />

          <small className="text-gray-400 text-xs">
            {formattedPublishedDate}
          </small>
        </div>
        <div className="mb-8">
          <p className="text-sm text-gray-400">{excerpt}</p>
        </div>

        <Link
          href={`/blog/posts/${slug}`}
          className="flex items-center gap-1 hover:underline text-primary-main mt-auto"
        >
          <span className="font-medium text-sm">Ver post</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Box>
  )
}
