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
      <div className="h-64 relative rounded-sm shadow-sm">
        <Image
          src={image}
          alt={name}
          className="object-cover h-64 rounded-sm shadow-sm"
        />
        <div className="absolute h-full w-full bg-black right-0 top-0 opacity-60 rounded-sm shadow-sm" />

        <span className="font-semibold text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-gray-50 w-full text-center">
          {name}
        </span>
      </div>
    </Link>
  )
}
