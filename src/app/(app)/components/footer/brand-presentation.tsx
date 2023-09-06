import Image from "next/image";
import logo from '@/assets/images/logo.png'
import { AtSign, Building, Building2, Phone } from "lucide-react";

export function BrandPresentation() {
  return (
    <div className="flex flex-col">
      <Image src={logo} alt="Logo" className="w-24 mb-2" />
      <h2 className="font-bold text-2xl mb-4 lg:mb-6">Consulmagno & Assis Advocacia</h2>

      <div className="flex flex-col gap-3 text-gray-400">
        {/* Address */}
        <div className="flex items-center gap-2">
          <Building className="h-4 w-4" />
          <small className="text-sm font-medium">
            Avenida Barão do Rio Branco, nº 1871, Sala 613, Centro, Juiz de Fora - MG
          </small>
        </div>

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
          <small className="text-sm font-medium">
            (32) 988344973
          </small>
        </div>

      </div>
    </div>
  )
}
