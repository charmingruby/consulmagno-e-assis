import Link from 'next/link'

interface BadgeProps {
  label: string
  url?: string
}

export function Badge({ label, url }: BadgeProps) {
  if (!url) {
    return (
      <div>
        <small>{label}</small>
      </div>
    )
  }

  return (
    <Link href={url} prefetch={false}>
      <div className="py-0.5 px-3 bg-primary-main text-secondary-main rounded-full text-sm w-fit font-semibold">
        <small>{label}</small>
      </div>
    </Link>
  )
}
