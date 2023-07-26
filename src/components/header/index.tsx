import { Container } from '@/components/ui/container'
import { BrandLogo } from './brand-logo'
import { Navigation } from './navigation'

export function Header() {
  return (
    <header className="shadow-md h-16">
      <Container>
        <div className="flex items-center justify-between h-16">
          <BrandLogo />

          <Navigation />
        </div>
      </Container>
    </header>
  )
}
