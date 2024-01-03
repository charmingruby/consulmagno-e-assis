'use client'

import whatsappLogo from '@/assets/images/whatsapp-logo.png'
import { whatsappLink } from '@/site'
import Image from 'next/image'
import Link from 'next/link'

export function ContactWidget() {
  return (
    <Link
      prefetch={false}
      target="_blank"
      href={whatsappLink}
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40"
    >
      <Image src={whatsappLogo} alt="Logo do Whatsapp" className="w-16 h-16" />
    </Link>
  )
}
