import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { facebookLink, linkedinLink, instagramLink } from '@/site'

export function Socials() {
  return (
    <div className="flex justify-center gap-4">
      <Link
        href={linkedinLink}
        target="_blank"
        prefetch={false}
        className="bg-primary-main cursor-pointer w-fit p-3 rounded-md hover:bg-primary-dark transition-colors"
      >
        <Linkedin className="h-8 w-8 text-secondary-main" />
      </Link>
      <Link
        href={facebookLink}
        target="_blank"
        prefetch={false}
        className="bg-primary-main cursor-pointer w-fit p-3 rounded-md hover:bg-primary-dark transition-colors"
      >
        <Facebook className="text-secondary-main h-8 w-8" />
      </Link>
      <Link
        href={instagramLink}
        target="_blank"
        prefetch={false}
        className="bg-primary-main cursor-pointer w-fit p-3 rounded-md hover:bg-primary-dark transition-colors"
      >
        <Instagram className="text-secondary-main h-8 w-8" />
      </Link>
    </div>
  )
}
