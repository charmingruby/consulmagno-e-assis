import { Container } from '@/components/ui/container'
import { BrandLogo } from './brand-logo'
import { Navigation } from './navigation'

export function Header() {
  return (
    <header className="shadow-sm border-b border-gray-100 h-16 fixed w-full z-50 top-0 bg-gray-75">
      <Container>
        <div className="flex items-center justify-between h-16">
          <BrandLogo />

          <Navigation />
        </div>
      </Container>
    </header>
  )
}
