import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export function CardMedias() {
  return (
    <div className="flex justify-center gap-3">
      <Link
        href="https://www.linkedin.com/company/consulmagnoeassis/"
        target="_blank"
        prefetch={false}
        className="text-gray-300 cursor-pointer w-fitrounded-md hover:text-secondary-main transition-colors"
      >
        <Linkedin className="h-6 w-6 " />
      </Link>
      <Link
        href="https://www.facebook.com/ConsulmagnoAssis"
        target="_blank"
        prefetch={false}
        className="text-gray-300 cursor-pointer w-fit rounded-md hover:text-secondary-main transition-colors"
      >
        <Facebook className=" h-6 w-6" />
      </Link>
      <Link
        href="https://www.instagram.com/consulmagnoassisadv/"
        target="_blank"
        prefetch={false}
        className="text-gray-300 cursor-pointer w-fit rounded-md hover:text-secondary-main transition-colors"
      >
        <Instagram className=" h-6 w-6" />
      </Link>
    </div>
  )
}
