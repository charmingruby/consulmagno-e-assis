import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import { ArrowUpRight, AtSign, Building, Phone } from 'lucide-react'
import Link from 'next/link'

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
          href=" https://www.google.com.br/maps/place/Av.+Bar%C3%A3o+do+Rio+Branco,+1871+-+Sala+613+-+Centro,+Juiz+de+Fora+-+MG,+41615-001/@-21.7583338,-43.3528323,17z/data=!3m1!4b1!4m6!3m5!1s0x989c9f39f31b85:0xfe746fb5fc325d6c!8m2!3d-21.7583388!4d-43.3502574!16s%2Fg%2F11s4g2t3vk?entry=ttu"
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
          <small className="text-sm font-medium">
            contato@consulmagnoassis.com
          </small>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <small className="text-sm font-medium">(32) 988344973</small>
        </div>
      </div>
    </div>
  )
}
