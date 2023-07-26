import Image from 'next/image'
import logo from '@/assets/images/logo.svg'

export function BrandLogo() {
  return (
    <div className="flex items-center gap-2">
      <Image src={logo} alt="Brand logo" className="w-8" />
      <span className="text-xl font-medium">Brand here</span>
    </div>
  )
}
