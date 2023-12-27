import { Box } from '@/components/ui/box'
import { PostType } from '@/libs/graphql/queries/fetch-blog-main-page-posts/types'
import { formatDate } from '@/utils/format-date'
import { makeExcerpt } from '@/utils/make-excerpt'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function PostCard({
  coverImage: { url: coverUrl },
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
      <div className="relative">
        <div className="absolute h-full w-full bg-gray-900 rounded-t-sm opacity-40" />
        <Image
          src={coverUrl}
          width={800}
          height={800}
          alt="Foto de exemplo"
          className="rounded-t-sm"
        />
        <div className="absolute top-0 p-4">
          <div className="p-2 border border-gray-50 text-gray-50 font-medium">
            {categories[0].name}
          </div>
        </div>
      </div>

      <div className="px-6 py-3">
        {/* Title */}
        <strong className="text-2xl block mb-4">{title}</strong>

        {/* Details */}
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

        {/* Excerpt */}
        <div className="mb-8">
          <p className="text-sm text-gray-400">{excerpt}</p>
        </div>

        <Link
          prefetch={false}
          href={`/blog/posts/${slug}`}
          className="flex items-center gap-1 hover:underline text-primary-main"
        >
          <span className="font-medium text-sm">Ver post</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Box>
  )
}
