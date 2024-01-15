import Link from 'next/link'

interface PostCategoryItemProps {
  name: string
  slug: string
}

export function PostCategoryItem({ name, slug }: PostCategoryItemProps) {
  return (
    <Link
      href={`/blog/categorias/${slug}`}
      className="h-28 p-4 flex items-center justify-center rounded-sm shadow-sm border hover:bg-primary-light hover:text-white hover:border-primary-main transition-colors"
    >
      <span className="font-semibold text-xl w-full text-center">{name}</span>
    </Link>
  )
}
