import * as Container from '@/components/ui/container'
import { TopFooter } from './top-footer'
import { BottomFooter } from './bottom-footer'

export function Footer() {
  return (
    <footer className="">
      <div className="border-t border-gray-100 bg-gray-75">
        <Container.Content>
          <TopFooter />
        </Container.Content>
      </div>

      <div className="border-t border-gray-100 bg-gray-75">
        <Container.Content className="py-4" spacing="spaceless">
          <BottomFooter />
        </Container.Content>
      </div>
    </footer>
  )
}
