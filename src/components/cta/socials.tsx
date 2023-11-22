import Link from 'next/link'
import { Facebook, Instagram, Linkedin } from 'lucide-react'

export function Socials({ flexColumn = false, size = false }) {
  const flexCol = `flex ${flexColumn ? 'flex-col' : 'flex'}`
  const iconSize = `${size ? 'h-4 w-4' : 'h-8 w-8'}`

  return (
    <div className={`${flexCol}  justify-center gap-4`}>
      <Link
        href="https://www.linkedin.com/company/consulmagnoeassis/"
        target="_blank"
        prefetch={false}
        className="bg-primary-main cursor-pointer w-fit p-3 rounded-md hover:bg-primary-dark transition-colors"
      >
        <Linkedin className={`${iconSize}  text-secondary-main`} />
      </Link>
      <Link
        href="https://www.facebook.com/ConsulmagnoAssis"
        target="_blank"
        prefetch={false}
        className="bg-primary-main cursor-pointer w-fit p-3 rounded-md hover:bg-primary-dark transition-colors"
      >
        <Facebook className={`${iconSize}  text-secondary-main`} />
      </Link>
      <Link
        href="https://www.instagram.com/consulmagnoassisadv/"
        target="_blank"
        prefetch={false}
        className="bg-primary-main cursor-pointer w-fit p-3 rounded-md hover:bg-primary-dark transition-colors"
      >
        <Instagram className={`${iconSize}  text-secondary-main`} />
      </Link>
    </div>
  )
}
