/**
 * External
 */
import Image from 'next/image'

/**
 * Internal
 */
import exampleCoverImg from '@/assets/images/lawyers.png'
import exampleAvatarImg from '@/assets/images/lawyer.jpg'

interface PostCardProps {
  authorName: string
  avatarUrl?: string
  title: string
  slug: string
  dataPublished: Date
  excerpt: string
  coverPhoto?: string
  categories: string[]
  orientation?: 'vertical' | 'horizontal'
}

export function PostCard({
  authorName,
  categories,
  coverPhoto,
  dataPublished,
  excerpt,
  slug,
  title,
  avatarUrl,
  orientation = 'vertical',
}: PostCardProps) {
  return (
    <div>
      <Image src={exampleCoverImg} alt={excerpt} />
      <div>
        <Image src={exampleAvatarImg} alt={`${authorName} avatar`} />
      </div>
    </div>
  )
}
