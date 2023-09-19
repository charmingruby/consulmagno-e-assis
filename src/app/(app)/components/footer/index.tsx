import * as Container from '@/components/ui/container'
import { BrandPresentation } from './brand-presentation'
import { Copyright } from './copyright'
import { Links } from './links'

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="border-t border-gray-100 bg-gray-75">
        <Container.Content className="py-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <BrandPresentation />
          <Links />
        </Container.Content>
      </div>

      <div className="border-t border-gray-100 bg-gray-75">
        <Container.Content className="py-8" spacing="spaceless">
          <Copyright />
        </Container.Content>
      </div>
    </footer>
  )
}
