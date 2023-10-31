import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export function Socials() {
  return (
    <div className="flex justify-center gap-4">
      <Link
        href="https://www.linkedin.com/company/consulmagnoeassis/"
        target="_blank"
        prefetch={false}
        className="bg-primary-main cursor-pointer w-fit p-3 rounded-md hover:bg-primary-dark transition-colors"
      >
        <Linkedin className=" text-secondary-main h-8 w-8 " />
      </Link>
      <Link
        href="https://www.facebook.com/ConsulmagnoAssis"
        target="_blank"
        prefetch={false}
        className="bg-primary-main cursor-pointer w-fit p-3 rounded-md hover:bg-primary-dark transition-colors"
      >
        <Facebook className=" text-secondary-main h-8 w-8 " />
      </Link>
      <Link
        href="https://www.instagram.com/consulmagnoassisadv/"
        target="_blank"
        prefetch={false}
        className="bg-primary-main cursor-pointer w-fit p-3 rounded-md hover:bg-primary-dark transition-colors"
      >
        <Instagram className=" text-secondary-main h-8 w-8 " />
      </Link>
    </div>
  )
}
