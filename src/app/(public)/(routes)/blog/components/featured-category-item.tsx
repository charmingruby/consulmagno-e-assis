import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

interface FeaturedCategoryItemProps {
  name: string
  slug: string
  image: StaticImageData
}

export function FeaturedCategoryItem({
  image,
  name,
  slug,
}: FeaturedCategoryItemProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <Image src={image} alt={name} className="object-cover h-64" />
    </Link>
  )
}
