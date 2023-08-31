import * as Container from '@/components/ui/container'
import { Map } from 'lucide-react'

export function Attractive() {
  return (
    <Container.Root className="bg-white">
      <Container.Content className="grid grid-cols-2">
        <div>
          <div>
            <strong>Title</strong>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              quod alias quae fugit impedit, ab obcaecati sed eligendi autem
              pariatur at quos. Soluta possimus laborum quis perspiciatis, esse
              facere adipisci.
            </span>
          </div>
          <div>
            <strong>Title</strong>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              quod alias quae fugit impedit, ab obcaecati sed eligendi autem
              pariatur at quos. Soluta possimus laborum quis perspiciatis, esse
              facere adipisci.
            </span>
          </div>
        </div>
        <div>
          <Map />
        </div>
      </Container.Content>
    </Container.Root>
  )
}
