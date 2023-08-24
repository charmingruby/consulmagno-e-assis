import { Container } from '../../ui/container'
import { TopFooter } from './top-footer'
import { BottomFooter } from './bottom-footer'

export function Footer() {
  return (
    <footer className="">
      <div className="border-t border-gray-200 py-12 bg-gray-75">
        <Container>
          <TopFooter />
        </Container>
      </div>

      <div className="border-t border-gray-200 py-4 bg-gray-75">
        <Container>
          <BottomFooter />
        </Container>
      </div>
    </footer>
  )
}
