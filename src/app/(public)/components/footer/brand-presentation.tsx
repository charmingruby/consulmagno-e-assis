import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import { ArrowUpRight, AtSign, Building, Clock8, Phone } from 'lucide-react'
import Link from 'next/link'
import { email, mapLink } from '@/site'

export function BrandPresentation() {
  return (
    <div className="flex flex-col">
      <Image src={logo} alt="Logo" className="w-24 mb-2" />
      <h2 className="font-bold text-2xl mb-4 lg:mb-6">
        Consulmagno & Assis Advocacia
      </h2>

      <div className="flex flex-col gap-3 text-gray-400">
        {/* Address */}
        <Link
          href={mapLink}
          target="_blank"
          prefetch={false}
          className="flex items-center gap-2 hover:text-primary-main hover:underline transition-all"
        >
          <Building className="h-4 w-4" />
          <small className="items-center text-sm font-medium flex md:gap-2">
            Avenida Barão do Rio Branco, nº 1871, Sala 613, Centro, Juiz de Fora
            - MG
            <ArrowUpRight className="w-4 h-4"></ArrowUpRight>
          </small>
        </Link>

        {/* Email */}
        <div className="flex items-center gap-2">
          <AtSign className="h-4 w-4" />
          <small className="text-sm font-medium">{email}</small>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <small className="text-sm font-medium">(32) 99138-6324</small>
        </div>

        {/* Time */}
        <div className="flex items-center gap-2">
          <Clock8 className="h-4 w-4"></Clock8>
          <small className="text-sm font-medium">09:00 - 18:00</small>
        </div>
      </div>
    </div>
  )
}
