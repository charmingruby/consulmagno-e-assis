import { Facebook, Instagram } from 'lucide-react'
import { ContentHeading } from './content-heading'
import Link from 'next/link'
import { facebookLink, instagramLink } from '@/site'

export function SocialsHeader() {
  return (
    <header className="flex items-center justify-between gap-2 w-full mb-8">
      <ContentHeading heading="Publicações mais recentes" margin={false} />

      <div className="flex items-center justify-end gap-2 w-full">
        <Link
          href={instagramLink}
          target="_blank"
          className="p-2 border border-gray-100 shadow-sm rounded-full group hover:border-primary-main transition-colors"
        >
          <Instagram className="h-5 w-5 text-gray-300 group-hover:text-primary-main transition-colors" />
        </Link>
        <Link
          target="_blank"
          href={facebookLink}
          className="p-2 border border-gray-100 shadow-sm rounded-full group hover:border-primary-main transition-colors "
        >
          <Facebook className="h-5 w-5 text-gray-300 group-hover:text-primary-main transition-colors" />
        </Link>
      </div>
    </header>
  )
}
