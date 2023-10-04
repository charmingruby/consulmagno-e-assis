import { Box } from '@/components/ui/box'
import Link from 'next/link'

interface NameCardProps {
  name: string
  url: string
  bg: boolean
}

export function NameCard(props: NameCardProps) {
  return (
    <Box
      className={
        props.bg
          ? 'text-primary-main text-center'
          : 'text-secondary-main text-center'
      }
    >
      <Link prefetch={false} href={props.url}>
        {props.name}
      </Link>
    </Box>
  )
}
