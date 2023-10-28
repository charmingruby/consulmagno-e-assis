import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export function ReturnLink() {
  return (
    <Link
      href="/areas-de-atuacao"
      prefetch={false}
      className="flex gap-1 text-lg group transition-all w-fit"
    >
      <ArrowLeft className="h-4 w-4 self-center text-secondary-main"></ArrowLeft>
      <span className="font-medium text-gray-50 group-hover:underline transition-all">
        Voltar para áreas de atuações
      </span>
    </Link>
  )
}
