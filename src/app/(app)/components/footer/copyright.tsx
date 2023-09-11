import Link from 'next/link'

export function Copyright() {
  return (
    <div className="text-gray-300 text-sm">
      © Copyright 2023,{' '}
      <Link href="/" prefetch={false} className="underline underline-offset-4">
        Consulmagno & Assis Advocacia
      </Link>
      . Todos direitos reservados.
    </div>
  )
}
