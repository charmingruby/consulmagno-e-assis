'use client'

import whatsappLogo from '@/assets/images/whatsapp-logo.png'
import Image from 'next/image'
import Link from 'next/link'

export function ContactWidget() {
  return (
    <Link
      prefetch={false}
      target="_blank"
      href="https://wa.me/5532988344973?text=Ol%C3%A1%2C%20estou%20interessado%20nos%20seus%20servi%C3%A7os"
      className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40"
    >
      <Image src={whatsappLogo} alt="Logo do Whatsapp" className="w-16 h-16" />
    </Link>
  )
}
