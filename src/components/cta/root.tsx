import { PropsWithChildren } from 'react'
import * as Container from '@/components/ui/container'

export function Root({ children }: PropsWithChildren) {
  return (
    <Container.Root backgroundColor="primary">
      <Container.Content spacing="spaceless" className="py-10">
        {children}
      </Container.Content>
    </Container.Root>
  )
}
