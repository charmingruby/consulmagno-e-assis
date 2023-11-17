import { PropsWithChildren } from 'react'

import { ContactWidget } from '@/components/contact-widget'
import { Footer } from './components/footer'
import { Drawer } from './components/navigation/drawer'
import { Header } from './components/navigation/header'

export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <main className="overflow-x-auto">
      <Drawer />
      <Header />
      <ContactWidget />
      <div className="max-w-[100vw]">{children}</div>
      <Footer />
    </main>
  )
}
