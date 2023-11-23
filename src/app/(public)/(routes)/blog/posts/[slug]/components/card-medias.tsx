import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { facebookLink, instagramLink, linkedinLink } from '@/site'

export function CardMedias() {
  return (
    <div className="flex justify-center gap-3">
      <Link
        href={linkedinLink}
        target="_blank"
        prefetch={false}
        className="text-gray-300 cursor-pointer w-fitrounded-md hover:text-secondary-main transition-colors"
      >
        <Linkedin className="h-6 w-6 " />
      </Link>
      <Link
        href={facebookLink}
        target="_blank"
        prefetch={false}
        className="text-gray-300 cursor-pointer w-fit rounded-md hover:text-secondary-main transition-colors"
      >
        <Facebook className=" h-6 w-6" />
      </Link>
      <Link
        href={instagramLink}
        target="_blank"
        prefetch={false}
        className="text-gray-300 cursor-pointer w-fit rounded-md hover:text-secondary-main transition-colors"
      >
        <Instagram className=" h-6 w-6" />
      </Link>
    </div>
  )
}
