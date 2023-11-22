import Link from 'next/link'

interface cardItemProps {
  name: string
  url: string
}

export default function CardItem(props: cardItemProps) {
  return (
    <Link
      className=" text-primary border-2 uppercase font-semibold border-secondary-main flex p-2 rounded-xl h-fit w-fit hover:bg-secondary-main transition-colors"
      href={props.url}
      prefetch={false}
    >
      {props.name}
    </Link>
  )
}
