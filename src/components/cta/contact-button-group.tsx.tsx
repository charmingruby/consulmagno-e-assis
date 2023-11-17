import Link from 'next/link'
import { Button } from '../ui/button'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { whatsappLink } from '@/site/index'

interface actionProps {
  title: string
  url: string
}

export function ContactButtonGroup(props: actionProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-4">
      <Link
        href={whatsappLink}
        prefetch={false}
        className="flex justify-center w-full lg:w-fit"
      >
        <Button
          color="uncolored"
          className="flex justify-center items-center gap-2 w-full lg:w-fit"
        >
          <span>WhatsApp</span>
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </Link>

      <Link
        href={props.url}
        prefetch={false}
        className="flex justify-center w-full lg:w-fit"
      >
        <Button
          color="secondary"
          className="flex justify-center items-center gap-2 w-full lg:w-fit"
        >
          <span>{props.title}</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
}
