import Link from 'next/link'
import { Facebook, Instagram, Linkedin, MapPin } from 'lucide-react'
import { facebookLink, instagramLink, linkedinLink, mapLink } from '@/site'

export function CardMedias() {
  return (
    <div className="flex md:flex-col md:justify-center gap-4">
      <Link
        href={linkedinLink}
        target="_blank"
        prefetch={false}
        className="text-primary-light bg-slate-200 p-3 cursor-pointer w-fit rounded-md hover:text-secondary-main transition-colors"
      >
        <Linkedin className="h-6 w-6 " />
      </Link>
      <Link
        href={facebookLink}
        target="_blank"
        prefetch={false}
        className="text-primary-light  bg-slate-200 p-3 cursor-pointer w-fit rounded-md hover:text-secondary-main transition-colors"
      >
        <Facebook className=" h-6 w-6" />
      </Link>
      <Link
        href={instagramLink}
        target="_blank"
        prefetch={false}
        className="text-primary-light   bg-slate-200 p-3 cursor-pointer w-fit rounded-md hover:text-secondary-main transition-colors"
      >
        <Instagram className=" h-6 w-6" />
      </Link>
      <Link
        href={mapLink}
        prefetch={false}
        target="blank"
        className="text-primary-light  bg-slate-200 p-3 cursor-pointer w-fit rounded-md hover:text-secondary-main transition-colors"
      >
        <MapPin className="h-6 w-6" />
      </Link>
    </div>
  )
}
