import Link from 'next/link'

interface NameCardProps {
  name: string
  url: string
  icon: React.ReactNode
}

export function NameCard(props: NameCardProps) {
  return (
    <Link
      prefetch={false}
      href={props.url}
      className="text-primary-main border border-primary-main hover:bg-primary-main hover:text-white text-center uppercase font-bold hover:border-none py-4 rounded"
    >
      <div className="flex gap-2 justify-center">
        <span>{props.icon}</span>
        <span>{props.name}</span>
      </div>
    </Link>
  )
}
