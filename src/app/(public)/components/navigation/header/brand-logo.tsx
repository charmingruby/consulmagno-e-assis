import Image from 'next/image'
import logo from '@/assets/images/logo.png'

export function BrandLogo() {
  return (
    <div className="flex items-center gap-2">
      <Image src={logo} alt="Brand logo" className="w-28" />
    </div>
  )
}
