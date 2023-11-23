import Link from 'next/link'

interface cardItemProps {
  name: string
  url: string
}

export default function CardItem(props: cardItemProps) {
  return (
    <Link
      href={props.url}
      prefetch={false}
      className="flex text-gray-400 bg-white items-center gap-1 mb-8 border border-gray-100 rounded-full w-fit px-3 py-1.5 hover:border-primary-dark transition-colors cursor-pointer "
    >
      <p className="">{props.name}</p>
    </Link>
  )
}
