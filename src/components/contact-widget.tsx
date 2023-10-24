import whatsappLogo from '@/assets/images/whatsapp-logo.png'
import Image from 'next/image'
import Link from 'next/link'

export function ContactWidget() {
  return (
    <Link
      prefetch={false}
      href="https://wa.me/5532988344973?text=Ol%C3%A1%2C%20estou%20interessado%20nos%20seus%20servi%C3%A7os"
      className="fixed z-50 bottom-8 right-8"
    >
      <Image
        src={whatsappLogo}
        alt="Logo do Whatsapp"
        className="w-16 h-16 rounded-full"
      />
    </Link>
  )
}
