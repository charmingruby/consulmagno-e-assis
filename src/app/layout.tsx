import { MenuContextProvider } from '@/contexts/menu-context'
import '../styles/globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title:
    'Consulmagno & Assis | Advogados prontos para ajudá-lo a resolver seus desafios legais',
  description:
    'O nosso escritório de advocacia oferece soluções jurídicas de excelência. Visite nosso site para obter consultoria legal especializada, assistência em processos legais e orientação para seus assuntos jurídicos. Conte com nossa equipe de advogados experientes para proteger seus direitos e interesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <MenuContextProvider>
        <body
          className={`${montserrat.variable} font-sans text-gray-900 bg-gray-50 scroll-smooth scrollbar-thin scrollbar-track-gray-300 scrollbar-thumb-gray-100`}
        >
          {children}
        </body>
      </MenuContextProvider>
    </html>
  )
}
