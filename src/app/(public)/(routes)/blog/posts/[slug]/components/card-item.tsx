import Link from 'next/link'

interface cardItemProps {
  name: string
  url: string
}

export default function CardItem(props: cardItemProps) {
  return (
    <Link
      className=" text-primary border uppercase font-semibold border-secondary-main border-4 flex p-2 rounded-xl h-fit w-fit"
      href={props.url}
      prefetch={false}
    >
      {props.name}
    </Link>
  )
}
