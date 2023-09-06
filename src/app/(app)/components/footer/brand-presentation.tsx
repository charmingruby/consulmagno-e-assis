import Image from "next/image";
import logo from '@/assets/images/logo.png'
import { Building2 } from "lucide-react";

export function BrandPresentation() {
  return (
    <div className="flex flex-col">
      <Image src={logo} alt="Logo" className="w-24 mb-2" />
      <h2 className="font-semibold text-lg mb-4">Consulmagno & Assis Advocacia</h2>

      <div className="flex flex-col gap-2">
        <small className="text-sm">Avenida Barão do Rio Branco, nº 1871, Sala 613, Centro, Juiz de Fora - MG</small>
        <small className="text-sm">
          contato@consulmagnoassis.com
        </small>
        <small className="text-sm">(32) 988344973</small>

      </div>
    </div>
  )
}
