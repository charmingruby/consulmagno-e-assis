import Link from 'next/link'

interface RelatedInsightsProps {
  title: string
  slug: string
  subjects: string[]
}

export function RelatedInsightsItem({
  subjects,
  title,
  slug,
}: RelatedInsightsProps) {
  return (
    <div className="space-y-3">
      <Link
        href={`/blog/posts/${slug}`}
        prefetch={false}
        className="hover:underline"
      >
        <strong className="text-xl font-semibold">{title}</strong>
      </Link>

      <div className="space-y-1.5">
        <span className="text-gray-400">Assuntos abordados</span>

        <div className="flex gap-2 flex-wrap">
          {subjects.map((subject) => (
            <div
              key={subject}
              className="border border-gray-100 bg-white px-3 py-1 shadow-sm rounded-full"
            >
              <span className="text-xs">{subject}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
